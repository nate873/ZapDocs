import re
import io
import json
import uuid
import zipfile
import threading
from pathlib import Path
from datetime import datetime

from flask import Flask, request, send_file, send_from_directory, jsonify
from docxtpl import DocxTemplate
from num2words import num2words

app = Flask(__name__, static_folder="static", static_url_path="")

BASE_DIR = Path(__file__).parent
DATA_FILE = BASE_DIR / "loans_data.json"
_lock = threading.Lock()

# =====================
# TEMPLATE FILES
# =====================

TEMPLATES_BY_STATE = {
    "FL": {
        "Note": "note_template.docx",
        "Agreement": "template_agreement.docx",
        "Boiler": "boiler_template.docx",
        "Mortgage": "template_mortgage.docx",
        "Oral Disclosure": "oral_disclosure_fl_template.docx",
        "Guaranty": "guaranty_template.docx",
    },
    "CA": {
        "Note": "ca_note_template.docx",
        "Deed of Trust": "deed_of_trust_template.docx",
        "Servicing": "ca_servicing_template.docx",
        "Boiler": "ca_boiler_template.docx",
        "Oral Disclosure": "oral_disclosure_ca_template.docx",
        # Lender disclosure statement — CA only for now.
        "Lender Disclosure": "lender_disclosure_template.docx",
    },
}

# Which doc in each state's package is the "lender instructions" /
# servicing document — the one a lender needs on its own, separate from
# the full closing package. Used by the standalone generate button.
LENDER_INSTRUCTIONS_DOC_KEY = {
    "FL": "Agreement",
    "CA": "Servicing",
}

# Which doc in each state's package is the standalone "lender disclosure"
# document. CA only — states without an entry here will 400 if requested.
LENDER_DISCLOSURE_DOC_KEY = {
    "CA": "Lender Disclosure",
}

ALL_FIELDS = [
    "STATE",
    "LOAN_NUMBER", "LOAN_AMOUNT", "INTEREST_RATE", "MONTHLY_PAYMENT",
    "NUMBER_OF_PAYMENTS",
    "BALLOON_PAYMENT", "COMMISSION", "DEFAULT_RATE",
    "NOTE_DATE", "CLOSING_DATE", "FIRST_PAYMENT", "MATURITY_DATE",
    "SERVICING_DATE",
    "PROPERTY_ADDRESS", "PROPERTY_CITY", "PROPERTY_STATE", "PROPERTY_ZIP",
    "COUNTY", "APN", "TITLE_NUMBER", "TRUSTEE", "CITY", "INTEREST_COMMENCE",
    "LOAN_POSITION", "PROPERTY_TYPE", "TAX_ID", "BORROWER_1", "BORROWER_2",
    "VESTING", "MAILING_ADDRESS", "SIGNATURE_FOOTER", "SIGNATURE_TITLE",
    "SIGNATURE_FOOTER_2", "SIGNATURE_TITLE_2",
    "LENDER", "LENDER_NAME", "LENDER_ADDRESS", "LENDER_OWNERSHIP",
    # Lender Disclosure (CA) fields
    "LOAN_TERM", "LTV", "MARKET_VALUE", "CURRENT_ENCUMBRANCE",
    "FUTURE_ENCUMBRANCE", "FUTURE_EQUITY", "GROSS_INCOME", "GROSS_SALARY",
    "MONTHLY_EXPENSES", "ESCROW_NAME", "ESCROW_ADDRESS",
    # FL Note — Section 5 prepayment/penalty block
    "PREPAID_PAYMENTS", "FIRST_PREPAID_MONTH", "LAST_PREPAID_MONTH",
    "FIRST_PAYMENT_DUE",
]

CURRENCY_FIELDS = [
    "LOAN_AMOUNT",
    "MONTHLY_PAYMENT",
    "BALLOON_PAYMENT",
    "COMMISSION",
    "PREPAID_INTEREST",
    "MARKET_VALUE",
    "CURRENT_ENCUMBRANCE",
    "FUTURE_ENCUMBRANCE",
    "FUTURE_EQUITY",
    "GROSS_INCOME",
    "GROSS_SALARY",
    "MONTHLY_EXPENSES",
    "PREPAID_PAYMENTS",
]

# =====================
# PAYMENT SCHEDULE TABLE (Note, Section 3)
#
# Unlike everything in ALL_FIELDS, this is a *list* — one entry per row of
# the payments table, so a loan can have as many rate/payment tiers as it
# needs. It lives in the same fields dict under the key "PAYMENT_ROWS".
#
# In note_template.docx the table body is a docxtpl row loop:
#
#   row: {%tr for row in PAYMENT_ROWS %}
#   row: {{ row.COUNT }} | {{ row.DESCRIPTION }} | {{ row.RATE }} | {{ row.AMOUNT }}
#   row: {%tr endfor %}
#
# The two tag rows are removed at render time. row.START is also available
# if the template keeps "Monthly Beginning" as literal text in the cell.
#
# A template that still uses the older fixed two-row table works too — that
# version reads the flat NUMBER_OF_PAYMENTS / MONTHLY_PAYMENT / INTEREST_RATE
# fields instead, and simply ignores PAYMENT_ROWS.
# =====================

PAYMENT_ROW_FIELDS = ["COUNT", "START", "DESCRIPTION", "RATE", "AMOUNT"]


def empty_payment_row():
    return {name: "" for name in PAYMENT_ROW_FIELDS}


def clean_payment_rows(raw):
    """Coerce whatever came in over the wire into a list of string-only row dicts."""
    rows = []
    if not isinstance(raw, list):
        return rows
    for item in raw:
        if not isinstance(item, dict):
            continue
        rows.append({
            name: str(item.get(name, "") or "").strip()
            for name in PAYMENT_ROW_FIELDS
        })
    return rows


# =====================
# STORAGE
# loans_data.json looks like:
# {
#   "<uuid>": {"label": "Ramirez / 92nd", "fields": {"LOAN_NUMBER": "...", ...}},
#   ...
# }
# =====================

def load_loans():
    if not DATA_FILE.exists():
        return {}
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_loans(loans):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(loans, f, indent=2)


def empty_fields():
    fields = {name: "" for name in ALL_FIELDS}
    fields["STATE"] = "FL"  # sensible default; user can switch to CA
    fields["PAYMENT_ROWS"] = []
    return fields


def default_label(fields):
    """Auto-suggest a short tab label from signer/property, e.g. 'Ruiz / Central Ave'."""
    signer = (fields.get("SIGNATURE_FOOTER") or "").strip()
    address = (fields.get("PROPERTY_ADDRESS") or "").strip()

    # Last word of the signer's name (surname), skipping trailing punctuation
    name_part = signer.split()[-1].strip(",.") if signer else ""

    street_part = ""
    if address:
        # crude: drop leading house number/unit tokens, take the next word or two
        parts = address.split(",")[0].split()
        street_words = [p for p in parts if not any(ch.isdigit() for ch in p)]
        street_part = " ".join(street_words[:2])

    if name_part and street_part:
        return f"{name_part} / {street_part}"
    return name_part or street_part or "New Loan"


# =====================
# DOCUMENT GENERATION HELPERS
# =====================

def spell_dollars(amount):
    dollars = int(float(amount))
    cents = round((float(amount) - dollars) * 100)
    words = num2words(dollars, to="cardinal")
    words = re.sub(r"\band\b", "", words)
    words = re.sub(r"\s+", " ", words).strip()
    words = words.title()
    return f"{words} and {cents:02d}/100 Dollars"


def ordinal(n):
    n = int(n)
    if 11 <= (n % 100) <= 13:
        suffix = "th"
    else:
        suffix = {1: "st", 2: "nd", 3: "rd"}.get(n % 10, "th")
    return f"{n}{suffix}"


# Accepted ways a date might get typed into the form. The Deed of Trust
# dateline depends on NOTE_DATE parsing cleanly, so be generous here —
# a stray missing comma used to blank the whole "made this ___ day of ___".
DATE_FORMATS = [
    "%B %d, %Y",   # August 11, 2026
    "%B %d %Y",    # August 11 2026
    "%b %d, %Y",   # Aug 11, 2026
    "%b %d %Y",    # Aug 11 2026
    "%m/%d/%Y",    # 08/11/2026
    "%m/%d/%y",    # 08/11/26
    "%m-%d-%Y",    # 08-11-2026
    "%Y-%m-%d",    # 2026-08-11
]


def parse_date(value):
    """Parse a user-entered date in any of the common formats. None if unparseable."""
    raw = str(value or "").strip()
    if not raw:
        return None
    for fmt in DATE_FORMATS:
        try:
            return datetime.strptime(raw, fmt)
        except ValueError:
            continue
    return None


def long_date(dt):
    """Render a datetime as 'August 11, 2026' (no zero-padded day)."""
    return f"{dt.strftime('%B')} {dt.day}, {dt.year}"


def money(value):
    """'1200' -> '$1,200.00'. Returns the input untouched if it isn't a number."""
    raw = str(value or "").strip().replace("$", "").replace(",", "")
    if not raw:
        return ""
    try:
        return "${:,.2f}".format(float(raw))
    except ValueError:
        return str(value).strip()


def percent(value):
    """'6' -> '6%'. Leaves an already-suffixed value alone."""
    raw = str(value or "").strip()
    if not raw:
        return ""
    return raw if raw.endswith("%") else f"{raw}%"


def build_payment_rows(fields):
    """Turn the saved PAYMENT_ROWS into render-ready rows for the Note table."""
    rows = []

    for row in clean_payment_rows(fields.get("PAYMENT_ROWS")):
        if not any(row.values()):
            continue  # skip rows the user added but never filled in

        start_dt = parse_date(row["START"])
        start = start_dt.strftime("%m/%d/%Y") if start_dt else row["START"]

        # Free-text Description wins; otherwise compose the usual phrasing.
        description = row["DESCRIPTION"]
        if not description and start:
            description = f"Monthly Beginning {start}"

        rows.append({
            "COUNT": row["COUNT"],
            "START": start,
            "DESCRIPTION": description,
            "RATE": percent(row["RATE"]),
            "AMOUNT": money(row["AMOUNT"]),
        })

    # A loan saved before this feature existed has no rows at all. Emit one
    # blank row so the table keeps its shape instead of collapsing to a
    # header with nothing under it.
    if not rows:
        rows.append(empty_payment_row())

    return rows


def build_context(fields):
    context = {}

    for name in ALL_FIELDS:
        raw = str(fields.get(name, "") or "").strip()

        if name in CURRENCY_FIELDS and raw:
            try:
                raw = "{:,.2f}".format(float(raw.replace(",", "")))
            except ValueError:
                pass

        context[name] = raw

    try:
        context["SPELLED_LOAN_AMOUNT"] = spell_dollars(
            str(fields.get("LOAN_AMOUNT", "0")).replace(",", "")
        )
    except (ValueError, TypeError):
        context["SPELLED_LOAN_AMOUNT"] = ""

    # The Deed of Trust dateline ("made this {{NOTE_DAY}} day of
    # {{NOTE_MONTH}} {{NOTE_YEAR}}") is always driven off the note date.
    note_dt = parse_date(fields.get("NOTE_DATE"))

    if note_dt:
        context["MONTH"] = note_dt.strftime("%B")
        context["YEAR"] = note_dt.strftime("%Y")
        context["DATE"] = note_dt.strftime("%Y")
        # Used by the CA Deed of Trust: "made this 13th day of August 2026"
        context["NOTE_DAY"] = ordinal(note_dt.day)
        context["NOTE_MONTH"] = note_dt.strftime("%B")
        context["NOTE_YEAR"] = note_dt.strftime("%Y")
        # Normalize however it was typed, so the note, the deed, and the rest
        # of the package all print the date the same way.
        context["NOTE_DATE"] = long_date(note_dt)
    else:
        context["MONTH"] = ""
        context["YEAR"] = ""
        context["DATE"] = ""
        context["NOTE_DAY"] = ""
        context["NOTE_MONTH"] = ""
        context["NOTE_YEAR"] = ""

    # Payments table (Note, Section 3)
    payment_rows = build_payment_rows(fields)
    context["PAYMENT_ROWS"] = payment_rows

    # Handy for body text that references the schedule as a whole.
    total = 0
    for row in payment_rows:
        try:
            total += int(str(row["COUNT"]).strip())
        except (ValueError, TypeError):
            total = 0
            break
    context["TOTAL_PAYMENTS"] = str(total) if total else ""

    # The Deed of Trust footer uses LOAN_NAME where other docs use LOAN_NUMBER
    context["LOAN_NAME"] = context.get("LOAN_NUMBER", "")

    # The CA Boiler package uses FIRST_PAYMENT_DATE where other docs use FIRST_PAYMENT
    context["FIRST_PAYMENT_DATE"] = context.get("FIRST_PAYMENT", "")

    # The CA Note's payments table has {{MONTLY_PAYMENT}} misspelled in the
    # template. Alias it so that cell fills in without having to retype the
    # tag in Word. Fix the template when convenient and this can go away.
    context["MONTLY_PAYMENT"] = context.get("MONTHLY_PAYMENT", "")

    # The CA Servicing Agreement uses SERVICING_DATE for its dateline; fall back
    # to NOTE_DATE if it wasn't entered separately, so existing loans still render.
    if not context.get("SERVICING_DATE"):
        context["SERVICING_DATE"] = context.get("NOTE_DATE", "")

    return context


# =====================
# API: LOANS (list / create / read / update / delete)
# =====================

@app.route("/api/loans", methods=["GET"])
def list_loans():
    with _lock:
        loans = load_loans()
    result = [
        {"id": loan_id, "label": data.get("label", "New Loan")}
        for loan_id, data in loans.items()
    ]
    return jsonify(result)


@app.route("/api/loans", methods=["POST"])
def create_loan():
    with _lock:
        loans = load_loans()
        loan_id = str(uuid.uuid4())
        label = f"New Loan {len(loans) + 1}"
        loans[loan_id] = {"label": label, "fields": empty_fields()}
        save_loans(loans)
    return jsonify({"id": loan_id, "label": label, "fields": empty_fields()})


@app.route("/api/loans/<loan_id>", methods=["GET"])
def get_loan(loan_id):
    with _lock:
        loans = load_loans()
    if loan_id not in loans:
        return jsonify({"error": "Loan not found"}), 404
    data = loans[loan_id]

    # Backfill keys added after this loan was first saved, so older records
    # still come back with a complete shape.
    fields = empty_fields()
    saved = data.get("fields", {})
    fields.update({k: saved.get(k, "") for k in ALL_FIELDS})
    fields["PAYMENT_ROWS"] = clean_payment_rows(saved.get("PAYMENT_ROWS"))

    return jsonify({
        "id": loan_id,
        "label": data.get("label", "New Loan"),
        "fields": fields,
    })


@app.route("/api/loans/<loan_id>", methods=["PUT"])
def update_loan(loan_id):
    body = request.get_json(silent=True) or {}
    fields = body.get("fields", {})
    custom_label = (body.get("label") or "").strip()

    with _lock:
        loans = load_loans()
        if loan_id not in loans:
            return jsonify({"error": "Loan not found"}), 404

        merged_fields = empty_fields()
        merged_fields.update({k: fields.get(k, "") for k in ALL_FIELDS})
        merged_fields["PAYMENT_ROWS"] = clean_payment_rows(fields.get("PAYMENT_ROWS"))

        label = custom_label or default_label(merged_fields)

        loans[loan_id] = {"label": label, "fields": merged_fields}
        save_loans(loans)

    return jsonify({"id": loan_id, "label": label, "fields": merged_fields})


@app.route("/api/loans/<loan_id>", methods=["DELETE"])
def delete_loan(loan_id):
    with _lock:
        loans = load_loans()
        if loan_id not in loans:
            return jsonify({"error": "Loan not found"}), 404
        del loans[loan_id]
        save_loans(loans)
    return jsonify({"deleted": loan_id})


# =====================
# API: GENERATE DOCUMENTS FOR A SAVED LOAN
# =====================

@app.route("/api/loans/<loan_id>/generate", methods=["POST"])
def generate(loan_id):
    with _lock:
        loans = load_loans()
    if loan_id not in loans:
        return jsonify({"error": "Loan not found"}), 404

    fields = loans[loan_id].get("fields", {})
    context = build_context(fields)
    loan_number = context.get("LOAN_NUMBER") or "loan"

    state = (fields.get("STATE") or "FL").strip().upper()
    if state not in TEMPLATES_BY_STATE:
        state = "FL"

    templates_to_render = TEMPLATES_BY_STATE[state]

    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zf:
        for doc_label, template_file in templates_to_render.items():
            doc = DocxTemplate(str(BASE_DIR / template_file))
            doc.render(context)

            doc_buffer = io.BytesIO()
            doc.save(doc_buffer)
            doc_buffer.seek(0)

            safe_label = doc_label.replace(" ", "_")
            filename = f"{safe_label}_Loan_{loan_number}.docx"
            zf.writestr(filename, doc_buffer.read())

    zip_buffer.seek(0)
    zip_name = f"Loan_{loan_number}_Documents.zip"

    return send_file(
        zip_buffer,
        as_attachment=True,
        download_name=zip_name,
        mimetype="application/zip",
    )


# =====================
# API: GENERATE LENDER INSTRUCTIONS ONLY (single .docx, not a zip)
# =====================

@app.route("/api/loans/<loan_id>/generate-lender-instructions", methods=["POST"])
def generate_lender_instructions(loan_id):
    with _lock:
        loans = load_loans()
    if loan_id not in loans:
        return jsonify({"error": "Loan not found"}), 404

    fields = loans[loan_id].get("fields", {})
    context = build_context(fields)
    loan_number = context.get("LOAN_NUMBER") or "loan"

    state = (fields.get("STATE") or "FL").strip().upper()
    if state not in TEMPLATES_BY_STATE:
        state = "FL"

    doc_key = LENDER_INSTRUCTIONS_DOC_KEY.get(state)
    template_file = TEMPLATES_BY_STATE.get(state, {}).get(doc_key) if doc_key else None

    if not template_file:
        return jsonify({
            "error": f"No lender instructions template is configured for {state}."
        }), 400

    doc = DocxTemplate(str(BASE_DIR / template_file))
    doc.render(context)

    doc_buffer = io.BytesIO()
    doc.save(doc_buffer)
    doc_buffer.seek(0)

    filename = f"Lender_Instructions_Loan_{loan_number}.docx"

    return send_file(
        doc_buffer,
        as_attachment=True,
        download_name=filename,
        mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    )


# =====================
# API: GENERATE LENDER DISCLOSURE ONLY (single .docx, not a zip)
# CA only — the disclosure statement template currently only exists for CA.
# =====================

@app.route("/api/loans/<loan_id>/generate-disclosure", methods=["POST"])
def generate_disclosure(loan_id):
    with _lock:
        loans = load_loans()
    if loan_id not in loans:
        return jsonify({"error": "Loan not found"}), 404

    fields = loans[loan_id].get("fields", {})
    context = build_context(fields)
    loan_number = context.get("LOAN_NUMBER") or "loan"

    state = (fields.get("STATE") or "FL").strip().upper()
    if state not in TEMPLATES_BY_STATE:
        state = "FL"

    doc_key = LENDER_DISCLOSURE_DOC_KEY.get(state)
    template_file = TEMPLATES_BY_STATE.get(state, {}).get(doc_key) if doc_key else None

    if not template_file:
        return jsonify({
            "error": f"No lender disclosure template is configured for {state}. "
                     f"This document is currently only available for CA loans."
        }), 400

    doc = DocxTemplate(str(BASE_DIR / template_file))
    doc.render(context)

    doc_buffer = io.BytesIO()
    doc.save(doc_buffer)
    doc_buffer.seek(0)

    filename = f"Lender_Disclosure_Loan_{loan_number}.docx"

    return send_file(
        doc_buffer,
        as_attachment=True,
        download_name=filename,
        mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    )


# =====================
# SERVE REACT BUILD
# =====================

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    if path and app.static_folder is not None:
        try:
            return send_from_directory(app.static_folder, path)
        except Exception:
            pass
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)