import re

import io

import json

import uuid

import zipfile

import threading

import os

import shutil

import subprocess

import tempfile

import time

from pathlib import Path

from datetime import datetime

from decimal import Decimal, InvalidOperation, ROUND_HALF_UP

from flask import Flask, request, send_file, send_from_directory, jsonify, g

from functools import wraps

from supabase import create_client

from dotenv import load_dotenv

from docxtpl import DocxTemplate

from num2words import num2words

# python-docx — used to build the Key Provisions Summary directly (no .docx

# template needed), so it works for every state without a separate template file.

from docx import Document as PyDocxDocument

from docxcompose.composer import Composer

from docx.shared import Inches, Pt

from docx.enum.text import WD_ALIGN_PARAGRAPH

from docx.oxml.ns import qn

from docx.oxml import OxmlElement

app = Flask(__name__, static_folder="static", static_url_path="")

BASE_DIR = Path(__file__).parent

# Load webapp/.env locally. Railway-provided variables take precedence.

load_dotenv(dotenv_path=BASE_DIR / ".env", override=False)

# Supabase credentials must be set in Railway Variables, not committed in Git.

SUPABASE_URL = os.environ["SUPABASE_URL"]

SUPABASE_PUBLISHABLE_KEY = os.environ["SUPABASE_PUBLISHABLE_KEY"]

SUPABASE_SECRET_KEY = os.environ["SUPABASE_SECRET_KEY"]

_auth_client = create_client(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

_db = create_client(SUPABASE_URL, SUPABASE_SECRET_KEY)

def require_auth(handler):

    """Validate an access token before any private loan operation."""

    @wraps(handler)

    def protected(*args, **kwargs):

        header = request.headers.get("Authorization", "")

        scheme, _, token = header.partition(" ")

        if scheme.lower() != "bearer" or not token.strip():

            return jsonify({"error": "Sign in required."}), 401

        try:

            response = _auth_client.auth.get_user(token.strip())

            if not response.user:

                return jsonify({"error": "Invalid session."}), 401

            g.user_id = str(response.user.id)

        except Exception:

            return jsonify({"error": "Invalid or expired session."}), 401

        return handler(*args, **kwargs)

    return protected

def user_loan(loan_id):

    """Always scope backend secret-key queries to authenticated ownership."""

    try:

        uuid.UUID(str(loan_id))

    except (ValueError, AttributeError, TypeError):

        return None

    result = (_db.table("loans")

              .select("id,label,fields")

              .eq("id", loan_id)

              .eq("user_id", g.user_id)

              .limit(1)

              .execute())

    return result.data[0] if result.data else None

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

        "Agreement": "ca_agreement_template.docx",

        "Deed of Trust": "deed_of_trust_template.docx",

        "Servicing": "ca_servicing_template.docx",

        "Boiler": "ca_boiler_template.docx",

        "Oral Disclosure": "oral_disclosure_ca_template.docx",

        # Lender disclosure statement — CA only for now.

        "Lender Disclosure": "lender_disclosure_template.docx",

    },

}

# Templates included in the full generated package for every supported state.

# Keep full_set.docx in the same directory as the other Word templates.

# Ordered sections for the combined California closing document.

# "Agreement" corresponds to ca_agreement_template.docx (Security Agreement).

CA_COMBINED_DOCUMENT_ORDER = (

    "Note",

    "Deed of Trust",

    "Agreement",

    "Boiler",

    "Oral Disclosure",

)

COMMON_TEMPLATES = {

    "Full Set": "full_set.docx",

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
    "LENDER_ENTITY_DESCRIPTION",

    "BROKERAGE", "DRE", "TAX_ID_2",

    "BROKERAGE_NAME", "BROKERAGE_ADDRESS", "BROKERAGE_CITYSTATEZIP", "TRUSTEE_ADDRESS",

    "BROKERAGE_PHONE", "BROKERAGE_FAX", "BROKER_REPRESENTATIVE", "NMLS",

    "SERVICER", "SERVICER_ADDRESS",

    # Lender Disclosure (CA) fields

    "LOAN_TERM", "LTV", "MARKET_VALUE", "CURRENT_ENCUMBRANCE",

    "FUTURE_ENCUMBRANCE", "FUTURE_EQUITY", "GROSS_INCOME", "GROSS_SALARY",

    "MONTHLY_EXPENSES", "ESCROW_NAME", "ESCROW_ADDRESS",

    # FL Note — Section 5 prepayment/penalty block

    "PREPAID_PAYMENTS", "FIRST_PREPAID_MONTH", "LAST_PREPAID_MONTH",

    "FIRST_PAYMENT_DUE",

    # California Note (October 30, 2026)

    "PREPAYMENT_PENALTY", "PREPAID_NUMBER_MONTHS",

    "FIRST_PREPAID", "LAST_PREPAID", "FIRST_PAYMENT_DATE",

    # Key Provisions Summary (FL + CA) — fields that don't already exist

    # elsewhere in the package but are needed for the one-page cover sheet.

    "GUARANTOR", "GUARANTOR_RECOURSE", "IMPOUNDS", "PREPAYMENT_PREMIUM",

    # Interest-only schedule / California Note conditional language

    "PAYMENT_STRUCTURE", "DEFERRED_INTEREST",

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

def empty_fields():

    fields = {name: "" for name in ALL_FIELDS}

    fields["STATE"] = "FL"  # sensible default; user can switch to CA

    fields["PAYMENT_STRUCTURE"] = "interest_only"

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

    """Render saved payment tiers and exactly one balloon row for CA notes.

    Existing saved balloon rows are removed from the CA schedule and replaced

    with a row built from the loan's balloon fields. Other states preserve

    their stored rows unchanged.

    """

    rows = []

    existing_balloon = None

    state = str(fields.get("STATE") or "").strip().upper()

    for row in clean_payment_rows(fields.get("PAYMENT_ROWS")):

        if not any(row.values()):

            continue

        start_dt = parse_date(row["START"])

        start = start_dt.strftime("%m/%d/%Y") if start_dt else row["START"]

        description = row["DESCRIPTION"]

        if description:

            date_pattern = (

                r"\b(?:January|February|March|April|May|June|July|"

                r"August|September|October|November|December)"

                r"\s+\d{1,2},?\s+\d{4}\b"

            )

            def normalize_description_date(match):

                parsed = parse_date(match.group(0))

                return parsed.strftime("%m/%d/%Y") if parsed else match.group(0)

            description = re.sub(

                date_pattern, normalize_description_date, description,

                flags=re.IGNORECASE,

            )

        elif start:

            description = f"Monthly Beginning {start}"

        formatted = {

            "COUNT": row["COUNT"],

            "START": start,

            "DESCRIPTION": description,

            "RATE": percent(row["RATE"]),

            "AMOUNT": money(row["AMOUNT"]),

        }

        if state == "CA" and re.search(r"\b(?:balloon|payoff)\b", description, re.I):

            # Legacy entries may already contain the balloon; never duplicate it.

            if existing_balloon is None:

                existing_balloon = formatted

        else:

            rows.append(formatted)

    if state == "CA":

        balloon_amount = str(fields.get("BALLOON_PAYMENT") or "").strip()

        maturity_raw = str(fields.get("MATURITY_DATE") or "").strip()

        maturity_dt = parse_date(maturity_raw)

        maturity = maturity_dt.strftime("%m/%d/%Y") if maturity_dt else maturity_raw

        if balloon_amount and maturity:

            rows.append({

                "COUNT": "1",

                "START": maturity,

                "DESCRIPTION": f"Balloon Due {maturity}",

                "RATE": percent(fields.get("INTEREST_RATE")),

                "AMOUNT": money(balloon_amount),

            })

        elif existing_balloon is not None:

            # Never fabricate missing balloon terms; preserve the entered row.

            rows.append(existing_balloon)

    if not rows:

        rows.append(empty_payment_row())

    return rows

def safe_filename_part(value, fallback="file"):

    """Make user/template text safe to use in a Windows/macOS/Linux filename."""

    value = str(value or "").strip()

    value = re.sub(r'[<>:"/****\\\\\\****|?*]+', "_", value)

    value = re.sub(r"\s+", "_", value).strip(" ._")

    return value or fallback

def find_libreoffice_executable():

    """

    Find LibreOffice/soffice without hard-coding one operating system.

    You can also explicitly set:

        LIBREOFFICE_PATH=C:/Program Files/LibreOffice/program/soffice.exe

    """

    configured = os.environ.get("LIBREOFFICE_PATH", "").strip()

    candidates = []

    if configured:

        candidates.append(configured)

    # PATH-based installs (Linux/macOS/Windows).

    for command in ("soffice", "libreoffice"):

        found = shutil.which(command)

        if found:

            candidates.append(found)

    # Common direct install locations.

    candidates.extend([

        r"C:****\P****rogram File&#x73;****\L****ibreOffic&#x65;****\p****rogram\soffice.exe",

        r"C:****\P****rogram Files (x86)****\L****ibreOffic&#x65;****\p****rogram\soffice.exe",

        "/Applications/LibreOffice.app/Contents/MacOS/soffice",

        "/usr/bin/libreoffice",

        "/usr/bin/soffice",

        "/usr/local/bin/libreoffice",

        "/usr/local/bin/soffice",

    ])

    for candidate in candidates:

        if candidate and Path(candidate).exists():

            return str(Path(candidate))

    return None

def _remove_tree_with_retries(path, attempts=8, delay=0.25):

    """Best-effort Windows-friendly cleanup for temporary conversion folders."""

    path = Path(path)

    for _ in range(attempts):

        if not path.exists():

            return True

        try:

            shutil.rmtree(path)

            return True

        except (PermissionError, OSError):

            time.sleep(delay)

    return not path.exists()

def _cleanup_later(path, delay=2.0):

    """Retry cleanup in a daemon thread so a transient Word lock never breaks a download."""

    path = Path(path)

    def worker():

        time.sleep(delay)

        _remove_tree_with_retries(path, attempts=20, delay=0.5)

    thread = threading.Thread(target=worker, daemon=True)

    thread.start()

def convert_docx_to_pdf_with_word_windows(docx_path, pdf_path):

    """

    Convert DOCX -> PDF using an installed copy of Microsoft Word.

    Word sometimes keeps a file handle alive for a moment after COM says the

    document has closed. To keep that Windows lock away from the package's

    real DOCX file, Word opens a disposable scratch copy instead.

    """

    if os.name != "nt":

        raise RuntimeError("Microsoft Word COM conversion is only available on Windows.")

    powershell = (

        shutil.which("powershell.exe")

        or shutil.which("powershell")

        or shutil.which("pwsh.exe")

        or shutil.which("pwsh")

    )

    if not powershell:

        raise RuntimeError("PowerShell was not found on this Windows machine.")

    source_docx = Path(docx_path).resolve()

    pdf_path = Path(pdf_path).resolve()

    # IMPORTANT: Word opens a copy, not the DOCX that is going into the ZIP.

    # If WINWORD.exe hangs onto the file briefly, only this disposable scratch

    # copy is locked, so ZIP creation and cleanup of the real package can finish.

    scratch_dir = Path(tempfile.mkdtemp(prefix="zapdocs_word_"))

    scratch_docx = scratch_dir / source_docx.name

    shutil.copy2(source_docx, scratch_docx)

    env = os.environ.copy()

    env["ZAPDOCS_DOCX_PATH"] = str(scratch_docx)

    env["ZAPDOCS_PDF_PATH"] = str(pdf_path)

    script = """

$ErrorActionPreference = "Stop"

$word = $null

$doc = $null

try {

    $docxPath = $env:ZAPDOCS_DOCX_PATH

    $pdfPath = $env:ZAPDOCS_PDF_PATH

    $word = New-Object -ComObject Word.Application

    $word.Visible = $false

    $word.DisplayAlerts = 0

    # Open the disposable scratch copy read-only.

    $doc = $word.Documents.Open($docxPath, $false, $true)

    $doc.ExportAsFixedFormat($pdfPath, 17)

}

finally {

    if ($doc -ne $null) {

        try { $doc.Close([ref]0) } catch {}

        try { [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($doc) | Out-Null } catch {}

        $doc = $null

    }

    if ($word -ne $null) {

        try { $word.Quit() } catch {}

        try { [System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($word) | Out-Null } catch {}

        $word = $null

    }

    [GC]::Collect()

    [GC]::WaitForPendingFinalizers()

    [GC]::Collect()

    [GC]::WaitForPendingFinalizers()

}

"""

    try:

        result = subprocess.run(

            [powershell, "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", script],

            capture_output=True,

            text=True,

            timeout=120,

            check=False,

            env=env,

        )

        if result.returncode != 0:

            message = result.stderr.strip() or result.stdout.strip()

            raise RuntimeError(message or f"Microsoft Word returned exit code {result.returncode}.")

        if not pdf_path.exists():

            raise RuntimeError("Microsoft Word finished without creating the PDF.")

        return pdf_path

    finally:

        # A transient WINWORD file lock should never turn a successful package

        # generation into a 500 error. Try now, then retry in the background.

        if not _remove_tree_with_retries(scratch_dir):

            _cleanup_later(scratch_dir)

def convert_docx_to_pdf(docx_path, output_dir):

    """

    Convert the rendered DOCX to PDF while preserving the Word layout.

    Converter order:

      1. LibreOffice headless -- best for Linux/hosted servers.

      2. Microsoft Word through PowerShell/COM -- easiest for local Windows.

      3. docx2pdf -- optional final fallback when installed.

    A real document renderer is required. docxtpl/python-docx can create DOCX

    files, but they do not contain a PDF rendering engine.

    """

    docx_path = Path(docx_path)

    output_dir = Path(output_dir)

    output_dir.mkdir(parents=True, exist_ok=True)

    expected_pdf = output_dir / f"{docx_path.stem}.pdf"

    errors = []

    libreoffice = find_libreoffice_executable()

    if libreoffice:

        profile_dir = output_dir / f".lo_profile_{uuid.uuid4().hex}"

        profile_dir.mkdir(parents=True, exist_ok=True)

        profile_uri = profile_dir.resolve().as_uri()

        command = [

            libreoffice,

            "--headless",

            "--nologo",

            "--nodefault",

            "--nofirststartwizard",

            "--nolockcheck",

            f"-env:UserInstallation={profile_uri}",

            "--convert-to",

            "pdf",

            "--outdir",

            str(output_dir),

            str(docx_path),

        ]

        try:

            if expected_pdf.exists():

                expected_pdf.unlink()

            result = subprocess.run(

                command,

                capture_output=True,

                text=True,

                timeout=120,

                check=False,

            )

            if result.returncode == 0 and expected_pdf.exists():

                return expected_pdf

            errors.append(

                "LibreOffice: "

                + (

                    result.stderr.strip()

                    or result.stdout.strip()

                    or f"exited with code {result.returncode}."

                )

            )

        except Exception as exc:

            errors.append(f"LibreOffice: {exc}")

        finally:

            shutil.rmtree(profile_dir, ignore_errors=True)

    else:

        errors.append("LibreOffice: not installed/found.")

    if os.name == "nt":

        try:

            if expected_pdf.exists():

                expected_pdf.unlink()

            pdf = convert_docx_to_pdf_with_word_windows(docx_path, expected_pdf)

            if pdf.exists():

                return pdf

        except Exception as exc:

            errors.append(f"Microsoft Word: {exc}")

    else:

        errors.append("Microsoft Word: Windows COM conversion is unavailable on this OS.")

    try:

        from docx2pdf import convert as word_convert

    except ImportError:

        word_convert = None

    if word_convert is not None:

        try:

            if expected_pdf.exists():

                expected_pdf.unlink()

            word_convert(str(docx_path), str(expected_pdf))

            if expected_pdf.exists():

                return expected_pdf

            errors.append("docx2pdf: finished without creating the PDF.")

        except Exception as exc:

            errors.append(f"docx2pdf: {exc}")

    else:

        errors.append("docx2pdf: Python package is not installed.")

    raise RuntimeError(

        "No DOCX-to-PDF renderer is available. "

        "If this backend is running on your Windows PC, install Microsoft Word "

        "and this code will use it directly. If this backend is hosted on Linux, "

        "install LibreOffice on the server/container. Details: "

        + " | ".join(errors)

    )

def _decimal_amount(raw, default=None):

    try:

        return Decimal(str(raw or "").replace("$", "").replace(",", "").replace("%", "").strip())

    except (InvalidOperation, ValueError):

        return default

def payment_structure_for(fields):

    """Old loans with prepayment data keep their existing prepaid clause."""

    value = str(fields.get("PAYMENT_STRUCTURE") or "").lower().strip().replace("-", "_")

    aliases = {"prepaid_interest": "prepaid", "negative_amortization": "neg_am",

               "deferred_interest": "neg_am", "standard": "interest_only"}

    value = aliases.get(value, value)

    if not value:

        value = "prepaid" if any(str(fields.get(k) or "").strip() for k in

              ("PREPAID_NUMBER_MONTHS", "PREPAID_PAYMENTS", "FIRST_PREPAID")) else "interest_only"

    if value not in ("interest_only", "prepaid", "neg_am"):

        raise ValueError("PAYMENT_STRUCTURE must be interest_only, prepaid, or neg_am")

    return value

def deferred_interest_for(fields):

    """For reduced-payment periods, accrue unpaid simple monthly interest separately.

    No unpaid interest is added to principal. Uses the Note's annual rate and

    the explicit payment rows (COUNT, AMOUNT), excluding any balloon row.

    An entered DEFERRED_INTEREST overrides this estimate for unusual loan terms.

    """

    explicit = _decimal_amount(fields.get("DEFERRED_INTEREST"))

    if explicit is not None:

        if explicit < 0:

            raise ValueError("Deferred interest cannot be negative")

        return explicit.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)

    principal = _decimal_amount(fields.get("LOAN_AMOUNT"))

    rate = _decimal_amount(fields.get("INTEREST_RATE"))

    if principal is None or rate is None:

        return Decimal("0.00")

    monthly_interest = (principal * rate / Decimal("1200"))

    deferred = Decimal("0")

    for row in clean_payment_rows(fields.get("PAYMENT_ROWS")):

        try:

            count = int(str(row.get("COUNT") or "").strip())

        except ValueError:

            continue

        amount = _decimal_amount(row.get("AMOUNT"))

        description = str(row.get("DESCRIPTION") or "").lower()

        if amount is None or count < 1 or "balloon" in description or "payoff" in description:

            continue

        deferred += max(Decimal("0"), monthly_interest - amount) * count

    return deferred.quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)

def build_agreement_loan_terms(fields, note_rows):

    """Keep California procure-lender agreement synchronized with Note schedule.



    Uses the exact rendered Note tiers rather than recalculating independently.

    The stated balloon is never assumed to include/exclude deferred interest.

    """

    if str(fields.get("STATE") or "").upper() != "CA":

        return ""



    principal = _decimal_amount(fields.get("LOAN_AMOUNT"))

    balloon = _decimal_amount(fields.get("BALLOON_PAYMENT"))

    maturity = parse_date(fields.get("MATURITY_DATE"))

    if principal is None or principal <= 0 or balloon is None or maturity is None:

        raise ValueError("California agreement requires loan amount, balloon and maturity date.")



    lines = [

        f"A loan in the principal amount of ${principal:,.2f}, bearing interest "

        "and payable according to the following payment schedule:"

    ]

    next_payment = 1

    for row in note_rows:

        desc = str(row.get("DESCRIPTION") or "")

        if re.search(r"\b(balloon|payoff|maturity)\b", desc, re.I):

            continue

        count_raw = str(row.get("COUNT") or "").strip()

        try:

            count = int(count_raw)

        except ValueError:

            raise ValueError("Each California Note payment tier needs a valid payment count.")

        if count <= 0:

            raise ValueError("Each California Note payment tier must have a positive count.")

        amount = _decimal_amount(row.get("AMOUNT"))

        rate = _decimal_amount(row.get("RATE"))

        start = parse_date(row.get("START"))

        if amount is None or rate is None or start is None:

            raise ValueError("Each California Note payment tier needs amount, rate and start date.")

        ending = next_payment + count - 1

        payment_label = (f"Payment {next_payment}" if count == 1

                         else f"Payments {next_payment}-{ending}")

        lines.append(

            f"{payment_label}: {count} monthly payment(s) of ${amount:,.2f} each, "

            f"at an annual rate of {rate:g}%, beginning {start:%m/%d/%Y}."

        )

        next_payment = ending + 1

    if next_payment == 1:

        raise ValueError("California Note payment schedule contains no installment tiers.")

    lines.append(

        f"The loan matures on {maturity:%m/%d/%Y}, at which time the stated "

        f"balloon payment is ${balloon:,.2f}, subject to the terms of the Promissory Note."

    )

    if payment_structure_for(fields) == "neg_am":

        deferred = deferred_interest_for(fields)

        if deferred > 0:

            lines.append(

                f"The Note also provides for ${deferred:,.2f} of deferred interest. "

                "Whether this amount is included in the stated balloon or payable "

                "in addition must be reconciled under the Promissory Note before execution."

            )

    return "\n\n".join(lines)



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

    context["AGREEMENT_LOAN_TERMS"] = build_agreement_loan_terms(fields, payment_rows)

    # Brokerage fields are shared by Florida and California. Florida's Mortgage
    # uses BROKERAGE_NAME / ADDRESS / CITYSTATEZIP in its recording block.
    # Preserve specifically entered values, with the legacy BROKERAGE field as
    # a fallback for loans saved before the current Brokerage form was added.
    brokerage_name = context.get("BROKERAGE_NAME") or context.get("BROKERAGE", "")
    context["BROKERAGE_NAME"] = brokerage_name
    context["BROKERAGE"] = context.get("BROKERAGE") or brokerage_name
    context["BROKERAGE_REPRESENTATIVE"] = context.get("BROKER_REPRESENTATIVE", "")

    # Compatibility aliases used by the updated Florida full-set template.
    # Do not guess an entity description or other legally significant facts.
    context["DOCUMENT_DATE"] = context.get("NOTE_DATE", "")
    context["VENUE_COUNTY"] = context.get("COUNTY", "")
    context["BORROWER_NAME"] = context.get("BORROWER_1") or context.get("VESTING", "")
    context["LENDER_ENTITY_DESCRIPTION"] = str(fields.get("LENDER_ENTITY_DESCRIPTION") or "").strip()

    structure = payment_structure_for(fields)

    context["PAYMENT_STRUCTURE"] = structure

    context["IS_PREPAID"] = structure == "prepaid"

    context["IS_NEG_AM"] = structure == "neg_am"

    context["IS_INTEREST_ONLY"] = structure == "interest_only"

    context["DEFERRED_INTEREST"] = (

        f"{deferred_interest_for(fields):,.2f}" if structure == "neg_am" else "0.00"

    )

    # The scheduled principal is unchanged for all three interest-only modes.

    context["BALLOON_PRINCIPAL"] = context.get("LOAN_AMOUNT", "")

    # BALLOON_PAYMENT is deliberately user-entered, never silently recalculated.

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

    context["FIRST_PAYMENT_DATE"] = (context.get("FIRST_PAYMENT_DATE")

        or context.get("FIRST_PAYMENT_DUE") or context.get("FIRST_PAYMENT", ""))

    # The CA Note's payments table has {{MONTLY_PAYMENT}} misspelled in the

    # template. Alias it so that cell fills in without having to retype the

    # tag in Word. Fix the template when convenient and this can go away.

    context["MONTLY_PAYMENT"] = context.get("MONTHLY_PAYMENT", "")

    # New CA Note fields. Prefer explicit values; preserve existing saved loan defaults.

    context["FIRST_PAYMENT_DATE"] = (context.get("FIRST_PAYMENT_DATE")

        or context.get("FIRST_PAYMENT_DUE") or context.get("FIRST_PAYMENT", ""))

    context["FIRST_PREPAID"] = (context.get("FIRST_PREPAID")

        or context.get("FIRST_PREPAID_MONTH", ""))

    context["LAST_PREPAID"] = (context.get("LAST_PREPAID")

        or context.get("LAST_PREPAID_MONTH", ""))

    context["PREPAYMENT_PENALTY"] = (context.get("PREPAYMENT_PENALTY")

        or context.get("PREPAYMENT_PREMIUM", ""))

    # Deed of Trust new brokerage/trustee address placeholders are direct fields.

    # The CA Servicing Agreement uses SERVICING_DATE for its dateline; fall back

    # to NOTE_DATE if it wasn't entered separately, so existing loans still render.

    if not context.get("SERVICING_DATE"):

        context["SERVICING_DATE"] = context.get("NOTE_DATE", "")

    # Only expose/populate the second signature block when a second borrower exists.

    # In the Word templates, wrap the entire second signature block in:

    #

    #   {%p if HAS_SECOND_BORROWER %}

    #   By: ______________________________

    #   {{SIGNATURE_FOOTER_2}}

    #   {{SIGNATURE_TITLE_2}}

    #   {%p endif %}

    #

    # Put each {%p ... %} tag on its own paragraph in Word.

    has_second_borrower = bool(
        str(fields.get("SIGNATURE_FOOTER_2", "") or "").strip()
        or str(fields.get("BORROWER_2", "") or "").strip()
    )

    context["HAS_SECOND_BORROWER"] = has_second_borrower

    if not has_second_borrower:

        context["BORROWER_2"] = ""

        context["SIGNATURE_FOOTER_2"] = ""

        context["SIGNATURE_TITLE_2"] = ""

    return context

# =====================

# KEY PROVISIONS SUMMARY (one-page cover sheet — FL and CA)

#

# Unlike the rest of the package, this document is NOT built from a .docx

# template — it's built directly with python-docx. That means it works for

# both states out of the box, with no template file to design/maintain, and

# any new field just needs a row added to key_provisions_rows() below.

# =====================

def _kp_property_line(fields):

    """'107 Sandal Lane #2' + 'Palm Beach Shores' + 'Florida' + '33404'

    -> '107 Sandal Lane #2, Palm Beach Shores, Florida 33404'"""

    address = str(fields.get("PROPERTY_ADDRESS", "") or "").strip()

    city = str(fields.get("PROPERTY_CITY", "") or "").strip()

    state_name = str(fields.get("PROPERTY_STATE", "") or "").strip()

    zip_code = str(fields.get("PROPERTY_ZIP", "") or "").strip()

    state_zip = " ".join(p for p in [state_name, zip_code] if p)

    city_state_zip = ", ".join(p for p in [city, state_zip] if p)

    return ", ".join(p for p in [address, city_state_zip] if p)

def _kp_borrower_line(fields):

    names = [

        str(fields.get("BORROWER_1", "") or "").strip(),

        str(fields.get("BORROWER_2", "") or "").strip(),

    ]

    return "; ".join(n for n in names if n)

def _kp_lender_line(fields):

    name = str(fields.get("LENDER_NAME", "") or "").strip()

    return name or str(fields.get("LENDER", "") or "").strip()

def _kp_payments_line(fields):

    """'360' -> '360 months amortized over 360 months'"""

    n = str(fields.get("NUMBER_OF_PAYMENTS", "") or "").strip()

    if not n:

        return ""

    return f"{n} scheduled payments (interest only)"

def key_provisions_rows(fields, context, state):

    """Label/value pairs for the summary table. Same core set for FL and CA,

    plus a couple of CA-specific rows (Trustee, LTV) appended when present."""

    rows = [

        ("Document Date:", context.get("NOTE_DATE", "")),

        ("Loan Number:", context.get("LOAN_NUMBER", "")),

        ("Property:", _kp_property_line(fields)),

        ("Borrower(s):", _kp_borrower_line(fields)),

        ("Lender:", _kp_lender_line(fields)),

        ("Guarantor(s):", str(fields.get("GUARANTOR", "") or "").strip()),

        ("Guarantor Recourse:", str(fields.get("GUARANTOR_RECOURSE", "") or "").strip()),

        ("Loan Amount:", money(fields.get("LOAN_AMOUNT", ""))),

        ("Interest Rate:", percent(fields.get("INTEREST_RATE", ""))),

        ("Number of Scheduled Payments:", _kp_payments_line(fields)),

        ("Interest-Only Monthly Payment Amount:", money(fields.get("MONTHLY_PAYMENT", ""))),

        ("Payment Structure:", payment_structure_for(fields).replace("_", " ").title()),

        ("Deferred Interest (if applicable):", money(context.get("DEFERRED_INTEREST", "")) if context.get("IS_NEG_AM") else ""),

        ("Impounds:", str(fields.get("IMPOUNDS", "") or "").strip()),

        ("Maturity Date:", context.get("MATURITY_DATE", "")),

        ("Prepayment Premium:", str(fields.get("PREPAYMENT_PREMIUM", "") or "").strip()),

    ]

    if state == "CA":

        trustee = str(fields.get("TRUSTEE", "") or "").strip()

        if trustee:

            rows.append(("Trustee:", trustee))

        ltv = str(fields.get("LTV", "") or "").strip()

        if ltv:

            rows.append(("Loan-to-Value (LTV):", percent(ltv)))

    return rows

def _set_cell_border(cell, size=4, color="000000"):

    """python-docx has no built-in API for cell borders — this writes the

    raw <w:tcBorders> XML so the table renders with visible ruled lines,

    matching the source layout."""

    tc = cell._tc

    tcPr = tc.get_or_add_tcPr()

    tcBorders = tcPr.find(qn("w:tcBorders"))

    if tcBorders is None:

        tcBorders = OxmlElement("w:tcBorders")

        tcPr.append(tcBorders)

    for edge in ("top", "bottom", "left", "right"):

        tag = f"w:{edge}"

        element = tcBorders.find(qn(tag))

        if element is None:

            element = OxmlElement(tag)

            tcBorders.append(element)

        element.set(qn("w:val"), "single")

        element.set(qn("w:sz"), str(size))

        element.set(qn("w:space"), "0")

        element.set(qn("w:color"), color)

def build_key_provisions_docx(fields, context, state):

    """Build the Key Provisions Summary as a python-docx Document (US Letter,

    centered bold title, two-column ruled table — label / value)."""

    doc = PyDocxDocument()

    section = doc.sections[0]

    section.page_width = Inches(8.5)

    section.page_height = Inches(11)

    section.left_margin = Inches(1)

    section.right_margin = Inches(1)

    section.top_margin = Inches(1)

    section.bottom_margin = Inches(1)

    title_paragraph = doc.add_paragraph()

    title_paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER

    title_run = title_paragraph.add_run("KEY PROVISIONS SUMMARY")

    title_run.bold = True

    title_run.font.size = Pt(13)

    rows = key_provisions_rows(fields, context, state)

    label_width = Inches(2.6)

    value_width = Inches(3.9)

    table = doc.add_table(rows=len(rows), cols=2)

    table.autofit = False

    for i, (label, value) in enumerate(rows):

        label_cell = table.cell(i, 0)

        value_cell = table.cell(i, 1)

        label_cell.width = label_width

        value_cell.width = value_width

        label_cell.paragraphs[0].add_run(label)

        value_cell.paragraphs[0].add_run(value or "")

        for cell in (label_cell, value_cell):

            _set_cell_border(cell)

            for paragraph in cell.paragraphs:

                for run in paragraph.runs:

                    run.font.size = Pt(10.5)

    return doc

# =====================

# API: LOANS (list / create / read / update / delete)

# =====================

def build_ca_combined_docx(rendered_documents, destination):

    """Combine already-rendered CA DOCX files, preserving Word formatting.

    Each section starts on a separate page. The individual documents remain

    available in the ZIP. A missing section fails rather than silently creating

    an incomplete closing package.

    """

    missing = [label for label in CA_COMBINED_DOCUMENT_ORDER

               if label not in rendered_documents]

    if missing:

        raise RuntimeError(

            "Cannot build combined California package; missing sections: "

            + ", ".join(missing)

        )

    first = PyDocxDocument(str(rendered_documents[CA_COMBINED_DOCUMENT_ORDER[0]]))

    composer = Composer(first)

    for label in CA_COMBINED_DOCUMENT_ORDER[1:]:

        # A page break is inserted before each following section.

        first.add_page_break()

        composer.append(PyDocxDocument(str(rendered_documents[label])))

    composer.save(str(destination))

    return destination

@app.route("/api/loans", methods=["GET"])

@require_auth

def list_loans():

    result = (_db.table("loans").select("id,label")

              .eq("user_id", g.user_id)

              .order("created_at", desc=False).execute())

    return jsonify(result.data or [])

@app.route("/api/loans", methods=["POST"])

@require_auth

def create_loan():

    # UUID-based default labels avoid an unnecessary count query and races.

    loan_id = str(uuid.uuid4())

    fields = empty_fields()

    label = "New Loan"

    result = (_db.table("loans").insert({

        "id": loan_id, "user_id": g.user_id,

        "label": label, "fields": fields

    }).execute())

    record = result.data[0]

    return jsonify({"id": record["id"], "label": record["label"],

                    "fields": record["fields"]}), 201

@app.route("/api/loans/<loan_id>", methods=["GET"])

@require_auth

def get_loan(loan_id):

    record = user_loan(loan_id)

    if record is None:

        return jsonify({"error": "Loan not found"}), 404

    fields = empty_fields()

    saved = record.get("fields") or {}

    fields.update({key: saved.get(key, "") for key in ALL_FIELDS})

    fields["STATE"] = fields["STATE"] or "FL"

    fields["PAYMENT_ROWS"] = clean_payment_rows(saved.get("PAYMENT_ROWS"))

    return jsonify({"id": record["id"], "label": record["label"],

                    "fields": fields})

@app.route("/api/loans/<loan_id>", methods=["PUT"])

@require_auth

def update_loan(loan_id):

    record = user_loan(loan_id)

    if record is None:

        return jsonify({"error": "Loan not found"}), 404

    body = request.get_json(silent=True) or {}

    if not isinstance(body, dict) or not isinstance(body.get("fields"), dict):

        return jsonify({"error": "A fields object is required"}), 400

    submitted = body["fields"]

    saved = record.get("fields") or {}

    fields = empty_fields()

    fields.update(saved)

    # Allow older frontends to omit newly added fields without erasing them.

    fields.update({key: submitted[key] for key in ALL_FIELDS if key in submitted})

    if "PAYMENT_ROWS" in submitted:

        fields["PAYMENT_ROWS"] = clean_payment_rows(submitted["PAYMENT_ROWS"])

    label_value = body.get("label")

    label = label_value.strip() if isinstance(label_value, str) else ""

    label = label or default_label(fields)

    result = (_db.table("loans").update({

        "label": label, "fields": fields,

        "updated_at": datetime.now().astimezone().isoformat()

    }).eq("id", loan_id).eq("user_id", g.user_id).execute())

    if not result.data:

        return jsonify({"error": "Loan not found"}), 404

    return jsonify({"id": loan_id, "label": label, "fields": fields})

@app.route("/api/loans/<loan_id>", methods=["DELETE"])

@require_auth

def delete_loan(loan_id):

    if user_loan(loan_id) is None:

        return jsonify({"error": "Loan not found"}), 404

    (_db.table("loans").delete()

     .eq("id", loan_id).eq("user_id", g.user_id).execute())

    return jsonify({"deleted": loan_id})

# =====================

# API: GENERATE DOCUMENTS FOR A SAVED LOAN

# =====================

@app.route("/api/loans/<loan_id>/generate", methods=["POST"])

@require_auth

def generate(loan_id):

    """Download individually rendered Word documents as a ZIP, without PDFs or merging.

    CA: Note, Deed of Trust, Boiler, Oral Disclosure only.

    FL: keep the configured Florida templates, but output DOCX files only.

    Servicing Agreement and Lender Disclosure remain on their separate endpoints.

    """

    record = user_loan(loan_id)

    if record is None:

        return jsonify({"error": "Loan not found"}), 404

    fields = record.get("fields") or {}

    context = build_context(fields)

    loan_number = context.get("LOAN_NUMBER") or "loan"

    state = (fields.get("STATE") or "FL").strip().upper()

    if state not in TEMPLATES_BY_STATE:

        state = "FL"

    if state == "CA":

        document_keys = ("Note", "Deed of Trust", "Boiler", "Oral Disclosure")

        templates_to_render = {

            key: TEMPLATES_BY_STATE["CA"][key] for key in document_keys

        }

    else:

        # Preserve the existing Florida document selection (plus Full Set).

        templates_to_render = {**TEMPLATES_BY_STATE["FL"], **COMMON_TEMPLATES}

    safe_loan_number = safe_filename_part(loan_number, "loan")

    zip_buffer = io.BytesIO()

    try:

        with zipfile.ZipFile(zip_buffer, "w", compression=zipfile.ZIP_DEFLATED) as zf:

            for doc_label, template_file in templates_to_render.items():

                template_path = BASE_DIR / template_file

                if not template_path.is_file():

                    return jsonify({"error": f"Template file not found: {template_file}"}), 500

                document = DocxTemplate(str(template_path))

                document.render(context)

                docx_buffer = io.BytesIO()

                document.save(docx_buffer)

                filename = f"{safe_filename_part(doc_label, 'Document')}_Loan_{safe_loan_number}.docx"

                zf.writestr(filename, docx_buffer.getvalue())

        zip_buffer.seek(0)

        return send_file(

            zip_buffer,

            as_attachment=True,

            download_name=f"Loan_{safe_loan_number}_Documents.zip",

            mimetype="application/zip",

        )

    except Exception as exc:

        app.logger.exception("Word document package generation failed")

        return jsonify({

            "error": "Could not generate the Word document package.",

            "details": str(exc),

        }), 500

# The servicing agreement and lender disclosure use their existing separate buttons.

@app.route("/api/loans/<loan_id>/generate-lender-instructions", methods=["POST"])

@require_auth

def generate_lender_instructions(loan_id):

    record = user_loan(loan_id)

    if record is None:

        return jsonify({"error": "Loan not found"}), 404

    fields = record.get("fields") or {}

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

@require_auth

def generate_disclosure(loan_id):

    record = user_loan(loan_id)

    if record is None:

        return jsonify({"error": "Loan not found"}), 404

    fields = record.get("fields") or {}

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

# API: GENERATE KEY PROVISIONS SUMMARY ONLY (single .docx, not a zip)

# Works for both FL and CA — built directly with python-docx, no template file.

# =====================

@app.route("/api/loans/<loan_id>/generate-key-provisions", methods=["POST"])

@require_auth

def generate_key_provisions(loan_id):

    record = user_loan(loan_id)

    if record is None:

        return jsonify({"error": "Loan not found"}), 404

    fields = record.get("fields") or {}

    context = build_context(fields)

    loan_number = context.get("LOAN_NUMBER") or "loan"

    state = (fields.get("STATE") or "FL").strip().upper()

    if state not in TEMPLATES_BY_STATE:

        state = "FL"

    doc = build_key_provisions_docx(fields, context, state)

    doc_buffer = io.BytesIO()

    doc.save(doc_buffer)

    doc_buffer.seek(0)

    filename = f"Key_Provisions_Summary_Loan_{safe_filename_part(loan_number, 'loan')}.docx"

    return send_file(

        doc_buffer,

        as_attachment=True,

        download_name=filename,

        mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",

    )

# =====================

# SERVE REACT BUILD

# =====================

@app.route("/app", defaults={"path": ""})

@app.route("/app/", defaults={"path": ""})

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

    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", "5000")),

            debug=os.environ.get("FLASK_DEBUG") == "1")
