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
    },
    "CA": {
        "Note": "ca_note_template.docx",
        "Deed of Trust": "deed_of_trust_template.docx",
        "Boiler": "ca_boiler_template.docx",
        "Oral Disclosure": "oral_disclosure_ca_template.docx",
    },
}

ALL_FIELDS = [
    "STATE",
    "LOAN_NUMBER", "LOAN_AMOUNT", "INTEREST_RATE", "MONTHLY_PAYMENT",
    "BALLOON_PAYMENT", "COMMISSION", "DEFAULT_RATE",
    "NOTE_DATE", "CLOSING_DATE", "FIRST_PAYMENT", "MATURITY_DATE",
    "PROPERTY_ADDRESS", "PROPERTY_CITY", "PROPERTY_STATE", "PROPERTY_ZIP",
    "COUNTY", "APN", "TITLE_NUMBER", "TRUSTEE", "CITY", "INTEREST_COMMENCE",
    "LOAN_POSITION", "PROPERTY_TYPE", "TAX_ID", "BORROWER_1", "BORROWER_2",
    "VESTING", "MAILING_ADDRESS", "SIGNATURE_FOOTER", "SIGNATURE_TITLE",
    "SIGNATURE_FOOTER_2", "SIGNATURE_TITLE_2",
    "LENDER", "LENDER_NAME", "LENDER_ADDRESS",
]

CURRENCY_FIELDS = [
    "LOAN_AMOUNT",
    "MONTHLY_PAYMENT",
    "BALLOON_PAYMENT",
    "COMMISSION",
    "PREPAID_INTEREST",
]


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

    try:
        note_dt = datetime.strptime(str(fields.get("NOTE_DATE", "")).strip(), "%B %d, %Y")
        context["MONTH"] = note_dt.strftime("%B")
        context["YEAR"] = note_dt.strftime("%Y")
        context["DATE"] = note_dt.strftime("%Y")
        # Used by the CA Deed of Trust: "made this 13th day of August 2026"
        context["NOTE_DAY"] = ordinal(note_dt.day)
        context["NOTE_MONTH"] = note_dt.strftime("%B")
        context["NOTE_YEAR"] = note_dt.strftime("%Y")
    except (ValueError, TypeError):
        context["MONTH"] = ""
        context["YEAR"] = ""
        context["DATE"] = ""
        context["NOTE_DAY"] = ""
        context["NOTE_MONTH"] = ""
        context["NOTE_YEAR"] = ""

    # The Deed of Trust footer uses LOAN_NAME where other docs use LOAN_NUMBER
    context["LOAN_NAME"] = context.get("LOAN_NUMBER", "")

    # The CA Boiler package uses FIRST_PAYMENT_DATE where other docs use FIRST_PAYMENT
    context["FIRST_PAYMENT_DATE"] = context.get("FIRST_PAYMENT", "")

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
    return jsonify({"id": loan_id, "label": data.get("label", "New Loan"), "fields": data.get("fields", empty_fields())})


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