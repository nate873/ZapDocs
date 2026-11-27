import { useState, useEffect, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import ZapDocsLegal, { legalRoute } from "./ZapDocsLegal";
import Pricing from "./Pricing";
import Demo from "./Demo";
import Header from "./Header";

const configuredUrl = (import.meta.env.VITE_SUPABASE_URL || "").trim();
const configuredKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "").trim();
let supabase = null;
let supabaseSetupError = "";
try {
  const url = new URL(configuredUrl);
  if (!["https:", "http:"].includes(url.protocol)) {
    throw new Error("Supabase URL must begin with https:// or http://.");
  }
  if (!configuredKey) throw new Error("Missing VITE_SUPABASE_PUBLISHABLE_KEY.");
  supabase = createClient(url.origin, configuredKey);
} catch (error) {
  supabaseSetupError = `Supabase configuration problem: ${error.message}. Check webapp/frontend/.env and restart Vite.`;
}

async function authFetch(path, options = {}) {
  if (!supabase) throw new Error(supabaseSetupError);
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session?.access_token) throw new Error("Please sign in to ZapDocs again.");
  return fetch(path, {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
      Authorization: `Bearer ${session.access_token}`,
    },
  });
}

async function apiJson(path, options = {}) {
  const response = await authFetch(path, options);
  const data = await response.json().catch(() => null);
  if (!response.ok) throw new Error(data?.error || data?.details || `Request failed (${response.status})`);
  return data;
}


import teamPhoto from "./assets/happy-busy-executive-people-working-260nw-2510293371.webp";
import loanScreen from "./assets/loanscreen.png";
import loanScreen2 from "./assets/loanscreen2.png";
import notePreview from "./assets/3333.png";
import mortgagePreview from "./assets/screenshot2.png";
import deedPreview from "./assets/screenshot3.png";

const FIELD_GROUPS = [
  {
    name: "Loan Info",
    fields: [
      ["LOAN_NUMBER", "Loan Number"],
      ["LOAN_AMOUNT", "Loan Amount ($)"],
      ["INTEREST_RATE", "Interest Rate (%)"],
      ["MONTHLY_PAYMENT", "Monthly Payment ($)"],
      ["NUMBER_OF_PAYMENTS", "Number of Payments (Note table)"],
      ["LOAN_TERM", "Loan Term (e.g. 36 months)"],
      ["BALLOON_PAYMENT", "Balloon Payment ($)"],
      ["COMMISSION", "Commission ($)"],
      ["DEFAULT_RATE", "Default Rate (%)"],
      ["LOAN_POSITION", "Loan Position (e.g. 1st)"],
    ],
  },
  {
    name: "Dates",
    fields: [
      ["NOTE_DATE", "Note Date (e.g. August 11, 2026)"],
      ["CLOSING_DATE", "Closing Date"],
      ["FIRST_PAYMENT", "First Payment Date"],
      ["MATURITY_DATE", "Maturity Date"],
      ["SERVICING_DATE", "Servicing Agreement Date (e.g. August 11, 2026)"],
    ],
  },
  {
    name: "Prepayment (FL Note, Sec. 5)",
    fields: [
      ["PREPAID_PAYMENTS", "Prepaid Payments Total ($)"],
      ["FIRST_PREPAID_MONTH", "First Prepaid Month (e.g. September 2026)"],
      ["LAST_PREPAID_MONTH", "Last Prepaid Month (e.g. February 2027)"],
      ["FIRST_PAYMENT_DUE", "First Payment Due to Servicer (date)"],
    ],
  },
  {
    name: "Property",
    fields: [
      ["PROPERTY_ADDRESS", "Property Address (full)"],
      ["PROPERTY_CITY", "Property City"],
      ["PROPERTY_STATE", "Property State"],
      ["PROPERTY_ZIP", "Property Zip"],
      ["COUNTY", "County"],
      ["APN", "APN (Parcel Number)"],
      ["TITLE_NUMBER", "Title Number"],
      ["TRUSTEE", "Trustee (CA only)"],
      ["CITY", "Execution City (CA Note header)"],
      ["INTEREST_COMMENCE", "Interest Commencement Date"],
      ["PROPERTY_TYPE", "Property Type"],
    ],
  },
  {
    name: "Borrower",
    fields: [
      ["VESTING", "Vesting / Borrower Entity Name"],
      ["MAILING_ADDRESS", "Borrower Mailing Address"],
      ["BORROWER_1", "Borrower 1 Name"],
      ["BORROWER_2", "Borrower 2 Name (optional)"],
      ["TAX_ID", "Borrower Tax ID / SSN"],
      ["SIGNATURE_FOOTER", "Signer 1 Name"],
      ["SIGNATURE_TITLE", "Signer 1 Title"],
      ["SIGNATURE_FOOTER_2", "Signer 2 Name (optional)"],
      ["SIGNATURE_TITLE_2", "Signer 2 Title (optional)"],
    ],
  },
  {
    name: "Lender",
    fields: [
      ["LENDER", "Lender (as it appears in body text)"],
      ["LENDER_NAME", "Lender Name (short form)"],
      ["LENDER_ADDRESS", "Lender Address"],
      ["LENDER_OWNERSHIP", "Lender Ownership % (e.g. 57.16%)"],
    ],
  },
  {
    name: "Disclosure (CA only)",
    fields: [
      ["LTV", "Loan-to-Value % (e.g. 65%)"],
      ["MARKET_VALUE", "Estimated Market Value ($)"],
      ["CURRENT_ENCUMBRANCE", "Current Encumbrance ($)"],
      ["FUTURE_ENCUMBRANCE", "Encumbrance After This Loan ($)"],
      ["FUTURE_EQUITY", "Borrower's Equity After This Loan ($)"],
      ["GROSS_INCOME", "Borrower Gross Income ($)"],
      ["GROSS_SALARY", "Borrower Gross Salary ($)"],
      ["MONTHLY_EXPENSES", "Borrower Monthly Expenses ($)"],
      ["ESCROW_NAME", "Escrow Holder Name"],
      ["ESCROW_ADDRESS", "Escrow Holder Address"],
    ],
  },
];

const ALL_FIELDS = FIELD_GROUPS.flatMap((g) => g.fields.map((f) => f[0]));

// One entry per row of the PAYMENTS table in the Note (Section 3).
const PAYMENT_ROW_FIELDS = ["COUNT", "START", "DESCRIPTION", "RATE", "AMOUNT"];

function emptyPaymentRow() {
  const row = {};
  PAYMENT_ROW_FIELDS.forEach((name) => (row[name] = ""));
  return row;
}

function emptyFields() {
  const obj = {};
  ALL_FIELDS.forEach((name) => (obj[name] = ""));
  obj.STATE = "FL";
  obj.PAYMENT_ROWS = [emptyPaymentRow()];
  return obj;
}

function LoanWorkspace() {
  const [loans, setLoans] = useState([]); // [{id, label}]
  const [activeId, setActiveId] = useState(null);
  const [fields, setFields] = useState(emptyFields());
  const [labelInput, setLabelInput] = useState("");
  const [saveStatus, setSaveStatus] = useState("idle"); // idle | saving | saved | error
  const [genStatus, setGenStatus] = useState("idle"); // idle | generating | error
  const [lenderInstStatus, setLenderInstStatus] = useState("idle"); // idle | generating | error
  const [disclosureStatus, setDisclosureStatus] = useState("idle"); // idle | generating | error
  const [errorMsg, setErrorMsg] = useState("");
  const [lenderInstErrorMsg, setLenderInstErrorMsg] = useState("");
  const [disclosureErrorMsg, setDisclosureErrorMsg] = useState("");
  const [loadingList, setLoadingList] = useState(true);
  const [workspaceError, setWorkspaceError] = useState("");

  const paymentRows = fields.PAYMENT_ROWS || [];

  const refreshList = useCallback(async () => {
    const data = await apiJson("/api/loans");
    if (!Array.isArray(data)) throw new Error("The server did not return a loan list. Check your Vite API proxy.");
    setLoans(data);
    return data;
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await refreshList();
        if (data.length > 0) await openLoan(data[0].id);
      } catch (err) {
        setWorkspaceError(err.message || "Unable to load loans.");
      } finally {
        setLoadingList(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function openLoan(id) {
    setActiveId(id);
    let data;
    try {
      data = await apiJson(`/api/loans/${id}`);
      setWorkspaceError("");
    } catch (err) {
      setWorkspaceError(err.message || "Unable to open loan.");
      return;
    }
    const incoming = { ...emptyFields(), ...data.fields };
    // A loan saved before the payments table existed comes back with an empty
    // list — show one blank row so there's something to type into.
    if (!Array.isArray(incoming.PAYMENT_ROWS) || incoming.PAYMENT_ROWS.length === 0) {
      incoming.PAYMENT_ROWS = [emptyPaymentRow()];
    }
    setFields(incoming);
    setLabelInput(data.label || "");
    setSaveStatus("idle");
  }

  async function handleAddLoan() {
    try {
      const data = await apiJson("/api/loans", { method: "POST" });
      await refreshList();
      setActiveId(data.id);
      setFields(emptyFields());
      setLabelInput(data.label || "New Loan");
      setSaveStatus("idle");
      setWorkspaceError("");
    } catch (err) {
      setWorkspaceError(err.message || "Unable to create loan.");
    }
  }

  async function handleDeleteLoan(id, e) {
    e.stopPropagation();
    if (!window.confirm("Delete this loan? This can't be undone.")) return;
    try {
      await apiJson(`/api/loans/${id}`, { method: "DELETE" });
      const data = await refreshList();
      if (activeId === id) {
        if (data.length > 0) {
          await openLoan(data[0].id);
        } else {
          setActiveId(null);
          setFields(emptyFields());
          setLabelInput("");
        }
      }
      setWorkspaceError("");
    } catch (err) {
      setWorkspaceError(err.message || "Unable to delete loan.");
    }
  }

  function handleChange(name, value) {
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  // ---- Payment schedule rows ----

  function handleRowChange(index, key, value) {
    setFields((prev) => {
      const rows = [...(prev.PAYMENT_ROWS || [])];
      rows[index] = { ...rows[index], [key]: value };
      return { ...prev, PAYMENT_ROWS: rows };
    });
  }

  function handleAddRow() {
    setFields((prev) => ({
      ...prev,
      PAYMENT_ROWS: [...(prev.PAYMENT_ROWS || []), emptyPaymentRow()],
    }));
  }

  function handleRemoveRow(index) {
    setFields((prev) => {
      const rows = (prev.PAYMENT_ROWS || []).filter((_, i) => i !== index);
      return { ...prev, PAYMENT_ROWS: rows.length ? rows : [emptyPaymentRow()] };
    });
  }

  function handleMoveRow(index, direction) {
    setFields((prev) => {
      const rows = [...(prev.PAYMENT_ROWS || [])];
      const target = index + direction;
      if (target < 0 || target >= rows.length) return prev;
      [rows[index], rows[target]] = [rows[target], rows[index]];
      return { ...prev, PAYMENT_ROWS: rows };
    });
  }

  // ---- Save / generate ----

  async function handleSave() {
    if (!activeId) return;
    setSaveStatus("saving");
    try {
      const data = await apiJson(`/api/loans/${activeId}`, {
        method: "PUT",
        body: JSON.stringify({ fields, label: labelInput }),
      });
      setLabelInput(data.label);
      await refreshList();
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 1500);
    } catch (err) {
      setSaveStatus("error");
      setWorkspaceError(err.message || "Save failed.");
    }
  }

  async function saveActiveLoan() {
    // Shared helper: persist current fields before either generate action,
    // so the downloaded doc(s) always match what's on screen.
    await apiJson(`/api/loans/${activeId}`, {
      method: "PUT",
      body: JSON.stringify({ fields, label: labelInput }),
    });
    await refreshList();
  }

  async function handleGenerate() {
    if (!activeId) return;
    setGenStatus("generating");
    setErrorMsg("");
    try {
      await saveActiveLoan();

      const res = await authFetch(`/api/loans/${activeId}/generate`, {
        method: "POST",
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Server responded ${res.status}`);
      }

      const blob = await res.blob();
      const loanNumber = fields.LOAN_NUMBER || "loan";
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Loan_${loanNumber}_Documents.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setGenStatus("idle");
    } catch (err) {
      setGenStatus("error");
      setErrorMsg(err.message || "Something went wrong generating the documents.");
    }
  }

  async function handleGenerateLenderInstructions() {
    if (!activeId) return;
    setLenderInstStatus("generating");
    setLenderInstErrorMsg("");
    try {
      await saveActiveLoan();

      const res = await authFetch(
        `/api/loans/${activeId}/generate-lender-instructions`,
        { method: "POST" }
      );
      if (!res.ok) {
        let message = `Server responded ${res.status}`;
        try {
          const data = await res.json();
          message = data.error || message;
        } catch {
          const text = await res.text();
          if (text) message = text;
        }
        throw new Error(message);
      }

      const blob = await res.blob();
      const loanNumber = fields.LOAN_NUMBER || "loan";
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Lender_Instructions_Loan_${loanNumber}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setLenderInstStatus("idle");
    } catch (err) {
      setLenderInstStatus("error");
      setLenderInstErrorMsg(
        err.message || "Something went wrong generating lender instructions."
      );
    }
  }

  async function handleGenerateDisclosure() {
    if (!activeId) return;
    setDisclosureStatus("generating");
    setDisclosureErrorMsg("");
    try {
      await saveActiveLoan();

      const res = await authFetch(
        `/api/loans/${activeId}/generate-disclosure`,
        { method: "POST" }
      );
      if (!res.ok) {
        let message = `Server responded ${res.status}`;
        try {
          const data = await res.json();
          message = data.error || message;
        } catch {
          const text = await res.text();
          if (text) message = text;
        }
        throw new Error(message);
      }

      const blob = await res.blob();
      const loanNumber = fields.LOAN_NUMBER || "loan";
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Lender_Disclosure_Loan_${loanNumber}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setDisclosureStatus("idle");
    } catch (err) {
      setDisclosureStatus("error");
      setDisclosureErrorMsg(
        err.message || "Something went wrong generating the disclosure document."
      );
    }
  }

  return (
    <div className="app-shell">
      <style>{`
        .lender-inst-btn {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1.5px solid #d6dbe4;
          background: #ffffff;
          color: #3452eb;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .lender-inst-btn:hover:not(:disabled) {
          background: #eef1ff;
          border-color: #3452eb;
        }
        .lender-inst-btn:active:not(:disabled) {
          background: #e2e7ff;
        }
        .lender-inst-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ---- Payment schedule table editor ---- */
        .pay-note {
          margin: 0 0 14px;
          font-size: 13px;
          line-height: 1.5;
          color: #5b6472;
        }
        .pay-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .pay-row {
          display: grid;
          grid-template-columns: 0.7fr 0.9fr 1.6fr 0.7fr 0.9fr 62px;
          gap: 8px;
          align-items: center;
        }
        .pay-head {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #5b6472;
        }
        .pay-head span {
          padding-left: 2px;
        }
        .pay-row input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #d6dbe4;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
        }
        .pay-row input:focus {
          outline: none;
          border-color: #3452eb;
          box-shadow: 0 0 0 3px rgba(52, 82, 235, 0.12);
        }
        .pay-row-tools {
          display: flex;
          gap: 4px;
          justify-content: flex-end;
        }
        .pay-icon-btn {
          width: 26px;
          height: 28px;
          padding: 0;
          border: 1px solid #d6dbe4;
          border-radius: 6px;
          background: #fff;
          color: #5b6472;
          font-size: 13px;
          line-height: 1;
          cursor: pointer;
        }
        .pay-icon-btn:hover:not(:disabled) {
          border-color: #3452eb;
          color: #3452eb;
          background: #eef1ff;
        }
        .pay-icon-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .pay-icon-btn.danger:hover {
          border-color: #d33;
          color: #d33;
          background: #fdeeee;
        }
        .add-row-btn {
          margin-top: 12px;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1.5px dashed #b9c0cc;
          background: #fff;
          color: #3452eb;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
        }
        .add-row-btn:hover {
          border-style: solid;
          border-color: #3452eb;
          background: #eef1ff;
        }
        @media (max-width: 900px) {
          .pay-row {
            grid-template-columns: 1fr 1fr;
          }
          .pay-head {
            display: none;
          }
          .pay-row-tools {
            grid-column: 1 / -1;
          }
        }
      `}</style>
      <aside className="sidebar">
        <div className="sidebar-header">
          <p className="eyebrow">Action Funding</p>
          <h2>Loans</h2>
        </div>
        <button className="add-loan-btn" onClick={handleAddLoan}>
          + New Loan
        </button>
        <nav className="loan-tabs">
          {loadingList && <p className="sidebar-empty">Loading…</p>}
          {!loadingList && loans.length === 0 && (
            <p className="sidebar-empty">No loans yet. Add one above.</p>
          )}
          {loans.map((loan) => (
            <button
              key={loan.id}
              className={`loan-tab${loan.id === activeId ? " active" : ""}`}
              onClick={() => openLoan(loan.id)}
            >
              <span className="loan-tab-label">{loan.label}</span>
              <span
                className="loan-tab-delete"
                onClick={(e) => handleDeleteLoan(loan.id, e)}
                title="Delete loan"
              >
                ×
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        {workspaceError && <p className="error-msg" role="alert" style={{ padding: "16px 24px" }}>{workspaceError}</p>}
        {!activeId && !loadingList && (
          <div className="empty-state">
            <p>Select a loan on the left, or add a new one to get started.</p>
          </div>
        )}

        {activeId && (
          <>
            <header className="page-header">
              <label className="tab-name-label" htmlFor="tab-name">
                Tab name
              </label>
              <input
                id="tab-name"
                className="tab-name-input"
                type="text"
                value={labelInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setLabelInput(value);
                  // Reflect the typed name in the sidebar immediately, so it's
                  // obvious it's "taking" even before you hit Save.
                  setLoans((prev) =>
                    prev.map((loan) =>
                      loan.id === activeId
                        ? { ...loan, label: value || "New Loan" }
                        : loan
                    )
                  );
                }}
                placeholder="e.g. Ramirez / 92nd"
              />
              <p className="subtitle">
                This loan's info is saved automatically when you click Save,
                and stays here for you to come back and update anytime.
              </p>
            </header>

            <div className="state-toggle-row">
              <span className="state-toggle-label">Loan State</span>
              <div className="state-toggle">
                <button
                  type="button"
                  className={`state-option${fields.STATE === "FL" ? " active" : ""}`}
                  onClick={() => handleChange("STATE", "FL")}
                >
                  Florida
                </button>
                <button
                  type="button"
                  className={`state-option${fields.STATE === "CA" ? " active" : ""}`}
                  onClick={() => handleChange("STATE", "CA")}
                >
                  California
                </button>
              </div>
              <span className="state-toggle-note">
                {fields.STATE === "CA"
                  ? "Generates a Deed of Trust instead of a Mortgage."
                  : "Generates a Mortgage instead of a Deed of Trust."}
              </span>
            </div>

            <div className="form-body">
              {FIELD_GROUPS.map((group) => (
                <fieldset key={group.name}>
                  <legend>{group.name}</legend>
                  <div className="row-list">
                    {group.fields
                      .filter(([name]) => {
                        // Only show the second signer fields after a second borrower
                        // has actually been entered.
                        if (
                          name === "SIGNATURE_FOOTER_2" ||
                          name === "SIGNATURE_TITLE_2"
                        ) {
                          return Boolean((fields.BORROWER_2 || "").trim());
                        }
                        return true;
                      })
                      .map(([name, label]) => (
                        <div key={name} className="row">
                          <label htmlFor={name}>{label}</label>
                          <input
                            type="text"
                            id={name}
                            name={name}
                            autoComplete="off"
                            value={fields[name]}
                            onChange={(e) => handleChange(name, e.target.value)}
                          />
                        </div>
                      ))}
                  </div>
                </fieldset>
              ))}

              <fieldset>
                <legend>Payment Schedule (Note, Sec. 3)</legend>
                <p className="pay-note">
                  Each line below becomes one row of the PAYMENTS table in the
                  Note. Add as many rate tiers as the loan needs. Leave
                  Description blank to get "Monthly Beginning 09/01/2026"
                  automatically from the start date, or type your own wording to
                  override it. Don't type the $ or % — those are added for you.
                </p>

                <div className="pay-grid">
                  <div className="pay-row pay-head">
                    <span># of Payments</span>
                    <span>Starting</span>
                    <span>Description (optional)</span>
                    <span>Rate</span>
                    <span>Payment</span>
                    <span />
                  </div>

                  {paymentRows.map((row, index) => (
                    <div className="pay-row" key={index}>
                      <input
                        type="text"
                        autoComplete="off"
                        aria-label={`Row ${index + 1} number of payments`}
                        placeholder="6"
                        value={row.COUNT || ""}
                        onChange={(e) =>
                          handleRowChange(index, "COUNT", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        autoComplete="off"
                        aria-label={`Row ${index + 1} start date`}
                        placeholder="09/01/2026"
                        value={row.START || ""}
                        onChange={(e) =>
                          handleRowChange(index, "START", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        autoComplete="off"
                        aria-label={`Row ${index + 1} description`}
                        placeholder="Monthly Beginning 09/01/2026"
                        value={row.DESCRIPTION || ""}
                        onChange={(e) =>
                          handleRowChange(index, "DESCRIPTION", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        autoComplete="off"
                        aria-label={`Row ${index + 1} interest rate`}
                        placeholder="6"
                        value={row.RATE || ""}
                        onChange={(e) =>
                          handleRowChange(index, "RATE", e.target.value)
                        }
                      />
                      <input
                        type="text"
                        autoComplete="off"
                        aria-label={`Row ${index + 1} payment amount`}
                        placeholder="1,200.00"
                        value={row.AMOUNT || ""}
                        onChange={(e) =>
                          handleRowChange(index, "AMOUNT", e.target.value)
                        }
                      />
                      <div className="pay-row-tools">
                        <button
                          type="button"
                          className="pay-icon-btn"
                          title="Move row up"
                          disabled={index === 0}
                          onClick={() => handleMoveRow(index, -1)}
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          className="pay-icon-btn"
                          title="Move row down"
                          disabled={index === paymentRows.length - 1}
                          onClick={() => handleMoveRow(index, 1)}
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          className="pay-icon-btn danger"
                          title="Remove row"
                          onClick={() => handleRemoveRow(index)}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="add-row-btn"
                  onClick={handleAddRow}
                >
                  + Add payment row
                </button>
              </fieldset>
            </div>

            <div className="action-bar">
              <button
                className="save-btn"
                onClick={handleSave}
                disabled={saveStatus === "saving"}
              >
                {saveStatus === "saving"
                  ? "Saving…"
                  : saveStatus === "saved"
                  ? "Saved ✓"
                  : "Save"}
              </button>
              <button
                className="generate-btn"
                onClick={handleGenerate}
                disabled={genStatus === "generating"}
              >
                {genStatus === "generating" ? "Generating…" : "Generate documents"}
              </button>
              <button
                className="lender-inst-btn"
                onClick={handleGenerateLenderInstructions}
                disabled={lenderInstStatus === "generating"}
              >
                {lenderInstStatus === "generating"
                  ? "Generating…"
                  : "Generate lender documents"}
              </button>
              <button
                className="lender-inst-btn"
                onClick={handleGenerateDisclosure}
                disabled={disclosureStatus === "generating"}
              >
                {disclosureStatus === "generating"
                  ? "Generating…"
                  : "Generate disclosure"}
              </button>
              <span className="submit-note">
                "Generate documents" downloads the full .zip package.
                "Generate lender documents" downloads just the servicing
                agreement as a single Word file. "Generate disclosure"
                downloads the lender disclosure statement (CA loans only).
              </span>
            </div>

            {genStatus === "error" && (
              <p className="error-msg" role="alert">
                {errorMsg}
              </p>
            )}
            {lenderInstStatus === "error" && (
              <p className="error-msg" role="alert">
                {lenderInstErrorMsg}
              </p>
            )}
            {disclosureStatus === "error" && (
              <p className="error-msg" role="alert">
                {disclosureErrorMsg}
              </p>
            )}
          </>
        )}
      </main>
    </div>
  );
}

function ZapImpactStats() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [node, setNode] = useState(null);
  useEffect(() => {
    if (!node || started) return;
    if (!('IntersectionObserver' in window)) { setStarted(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, started]);
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setProgress(1); return; }
    let frame;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now-start)/1600);
      setProgress(1-Math.pow(1-t,3));
      if(t<1) frame=requestAnimationFrame(tick);
    };
    frame=requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);
  const stats = [[12000,'$','','Estimated annual labor savings','#2867ff'],[240,'','','Estimated annual hours saved','#08b8c5'],[50,'','+','Document templates available*','#bd47f2'],[60,'','+','Loan data fields supported','#ff735f']];
  return <section ref={setNode} className="zi-stats" aria-label="ZapDocs platform statistics">
    <style>{`
      .zi-stats{max-width:1220px;margin:auto;padding:44px 28px 52px;font-family:inherit;box-sizing:border-box}
      .zi-stat-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0}
      .zi-stat{padding:5px 25px;border-left:1px solid #e0e5ef;min-width:0}
      .zi-stat:first-child{border-left:0;padding-left:0}
      .zi-stat strong{display:block;font-size:clamp(34px,4.6vw,64px);line-height:1.05;letter-spacing:-.055em;font-weight:800;font-variant-numeric:tabular-nums}
      .zi-stat span{display:block;font-size:17px;line-height:1.4;font-weight:700;color:#10143b;margin-top:8px}
      .zi-stats p{font-size:12px;line-height:1.6;color:#64748b;margin:18px 0 0}
      @media(max-width:760px){.zi-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:24px}.zi-stat:nth-child(odd){border-left:0;padding-left:0}.zi-stat{padding-right:8px}.zi-stat span{font-size:14px}}
    `}</style>
    <div className="zi-stat-grid">{stats.map(([n,prefix,suffix,label,color])=><div className="zi-stat" key={label}><strong style={{color}} aria-label={`${prefix}${n.toLocaleString('en-US')}${suffix}`}><span aria-hidden="true" style={{display:'inline',font:'inherit',color:'inherit',margin:0}}>{prefix}{Math.round(n*progress).toLocaleString('en-US')}{suffix}</span></strong><span>{label}</span></div>)}</div>
    <p>Illustrative estimate: 10 loans/month × 2 hours saved per loan × $50/hour. Gross labor savings before software costs; actual results vary. *Template count subject to confirmation.</p>
  </section>;
}

function ZapAnimatedOverview() {
  const cards = [['Saved loans','12','#e9eeff','#315cff'],['Recorded loan volume','$2.6M','#d9f7e9','#078359'],['Average interest rate','11.86%','#f0e6ff','#8439d7'],['Maturing in 90 days','4','#fff0d9','#ad610c']];
  return <div className="zi-visual" aria-label="Illustrative ZapDocs loan dashboard">
    <style>{`
      .zi-visual{position:relative;padding:26px 18px;background:linear-gradient(145deg,#e8efff,#e0f8ed 75%);border-radius:28px;min-width:0;box-sizing:border-box;overflow:hidden}
      .zi-panel{background:white;border:1px solid #e3e9f2;border-radius:18px;padding:18px;box-shadow:0 18px 38px #14264c20;animation:zi-float 6s ease-in-out infinite;min-width:0}
      .zi-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:15px;color:#10143b}.zi-head strong{font-size:20px;letter-spacing:-.04em}.zi-head small{font-size:10px;color:#64748b;background:#f1f5f9;padding:5px 8px;border-radius:20px}
      .zi-mini-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.zi-mini{padding:13px;border-radius:12px;min-width:0}.zi-mini span{display:block;font-size:10px;font-weight:700;line-height:1.4}.zi-mini strong{display:block;font-size:clamp(19px,2vw,28px);letter-spacing:-.04em;color:#15243c;margin-top:12px}
      .zi-charts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.zi-chart{border:1px solid #e4e9f2;border-radius:12px;padding:12px;min-width:0;color:#10143b}.zi-chart b{display:block;font-size:12px;margin-bottom:12px}.zi-chart small{font-size:10px;color:#64748b;display:block;text-align:center;margin-top:9px}
      .zi-ring{width:100px;height:100px;max-width:100%;margin:0 auto;position:relative;display:grid;place-items:center}.zi-ring svg{width:100%;height:100%;transform:rotate(-90deg)}.zi-ring circle.zi-arc{animation:zi-ring-reveal 5s ease-in-out infinite}.zi-ring strong{position:absolute;font-size:22px;color:#10143b}
      .zi-bars{height:100px;display:flex;align-items:flex-end;gap:7px;border-bottom:1px solid #dce3ee;padding:0 2px}.zi-bars i{flex:1;border-radius:5px 5px 0 0;transform-origin:bottom;animation:zi-bar-rise 3s ease-in-out infinite}
      @keyframes zi-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
      @keyframes zi-bar-rise{0%,100%{transform:scaleY(.88)}50%{transform:scaleY(1)}}
      @keyframes zi-ring-reveal{0%,100%{opacity:.8}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.zi-panel,.zi-bars i,.zi-ring circle.zi-arc{animation:none}}
      @media(max-width:420px){.zi-visual{padding:15px 9px}.zi-panel{padding:10px}.zi-chart{padding:8px}.zi-mini{padding:9px}}
    `}</style>
    <div className="zi-panel"><div className="zi-head"><strong>Loan overview</strong><small>Sample data</small></div>
      <div className="zi-mini-grid">{cards.map(([label,value,bg,color])=><div className="zi-mini" style={{background:bg,color}} key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="zi-charts"><div className="zi-chart"><b>Loans by state</b><div className="zi-ring"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="39" fill="none" stroke="#e1e8f0" strokeWidth="17"/><circle className="zi-arc" cx="50" cy="50" r="39" fill="none" stroke="#315cff" strokeWidth="17" strokeDasharray="143 245"/><circle className="zi-arc" cx="50" cy="50" r="39" fill="none" stroke="#a33ef0" strokeWidth="17" strokeDasharray="102 245" strokeDashoffset="-143"/></svg><strong>12</strong></div><small>7 Florida · 5 California</small></div>
      <div className="zi-chart"><b>Document activity</b><div className="zi-bars" aria-hidden="true">{[38,60,49,78,94].map((height,i)=><i key={i} style={{height:`${height}%`,background:['#315cff','#ff735f','#bd47f2','#08b8c5','#315cff'][i],animationDelay:`${i*.18}s`}}/>)}</div><small>Illustrative weekly activity</small></div></div>
    </div>
  </div>;
}

function ZapDocsLanding({ onLaunch, onPricing, onDemo }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="zap-landing">
      <style>{`
        :root {
          --zap-ink: #0b1d2c;
          --zap-navy: #0a2238;
          --zap-navy-2: #102f49;
          --zap-blue: #3f6df6;
          --zap-blue-dark: #2d55cf;
          --zap-sky: #dce9ff;
          --zap-mint: #c8f1df;
          --zap-paper: #f7f8f6;
          --zap-line: #dbe2e8;
          --zap-muted: #5f6f7c;
          --zap-white: #ffffff;
        }

        .zap-landing {
          min-height: 100vh;
          background: var(--zap-paper);
          color: var(--zap-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          overflow-x: clip;
        }

        .zap-landing .zap-beta-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          padding: 8px 18px;
          background: #101031;
          color: #fff;
          font-size: 13px;
          line-height: 1.5;
          text-align: center;
        }
        .zap-landing .zap-beta-label {
          background: #3cdb87;
          color: #101031;
          border-radius: 999px;
          padding: 2px 9px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
        }
        .zap-landing .zap-beta-banner button {
          border: 0;
          padding: 0;
          background: transparent;
          color: #3cdb87;
          font: inherit;
          font-weight: 650;
          cursor: pointer;
        }
        .zap-landing .zap-beta-banner button:hover { text-decoration: underline; }
        .zap-landing .zap-beta-banner button:focus-visible { outline: 2px solid #3cdb87; outline-offset: 4px; }
        @media (max-width: 600px) {
          .zap-landing .zap-beta-banner { gap: 5px 8px; font-size: 12px; }
        }

        .zap-landing > .zap-nav-wrap { position: sticky; top: 0; z-index: 1000; }
        .zap-landing section[id] { scroll-margin-top: 90px; }
        .zap-landing * { box-sizing: border-box; }
        .zap-landing button, .zap-landing input { font: inherit; }


        .zap-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--zap-ink);
          text-decoration: none;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.04em;
          cursor: pointer;
        }

        .zap-brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          color: #fff;
          background: var(--zap-navy);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.13);
          font-size: 17px;
        }


        .zap-btn {
          border: 0;
          border-radius: 999px;
          min-height: 46px;
          padding: 0 20px;
          font-weight: 750;
          cursor: pointer;
          transition: transform .18s ease, background .18s ease, box-shadow .18s ease;
        }

        .zap-btn:hover { transform: translateY(-1px); }

        .zap-btn-primary {
          color: #fff;
          background: var(--zap-blue);
          box-shadow: 0 10px 24px rgba(63,109,246,.22);
        }
        .zap-btn-primary:hover { background: var(--zap-blue-dark); }

        .zap-btn-dark {
          color: #fff;
          background: var(--zap-navy);
          box-shadow: 0 12px 30px rgba(10,34,56,.18);
        }

        .zap-btn-ghost {
          color: var(--zap-ink);
          background: #fff;
          border: 1px solid var(--zap-line);
        }


        .zap-hero {
          position: relative;
          padding: 78px 28px 74px;
        }

        .zap-hero::before {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 72%;
          background:
            radial-gradient(circle at 76% 10%, rgba(80, 140, 255, .17), transparent 25%),
            radial-gradient(circle at 20% 20%, rgba(169, 231, 207, .24), transparent 22%);
          pointer-events: none;
        }

        .zap-hero-inner {
          position: relative;
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, .93fr) minmax(0, 1.07fr);
          gap: 54px;
          align-items: center;
        }

        .zap-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 12px;
          border: 1px solid #cfd8e2;
          border-radius: 999px;
          background: rgba(255,255,255,.72);
          color: #415563;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .zap-kicker-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #34a36f;
          box-shadow: 0 0 0 4px rgba(52,163,111,.12);
        }

        .zap-hero h1 {
          margin: 22px 0 22px;
          max-width: 680px;
          font-size: clamp(48px, 6.1vw, 84px);
          line-height: .96;
          letter-spacing: -.065em;
          font-weight: 820;
        }

        .zap-hero h1 span { color: var(--zap-blue); }

        .zap-hero-copy {
          max-width: 620px;
          margin: 0;
          color: var(--zap-muted);
          font-size: 19px;
          line-height: 1.62;
        }

        .zap-hero-actions {
          margin-top: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .zap-hero-note {
          margin-top: 18px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          color: #6d7b86;
          font-size: 13px;
          font-weight: 600;
        }

        .zap-check::before {
          content: "✓";
          margin-right: 7px;
          color: #23865a;
          font-weight: 900;
        }

        .zap-product-stage {
          position: relative;
          padding: 14px 0 16px;
        }

        .zap-product-glow {
          position: absolute;
          width: 370px;
          height: 370px;
          border-radius: 50%;
          right: -70px;
          bottom: -90px;
          background: #b8cef9;
          filter: blur(70px);
          opacity: .37;
        }

        .zap-hero-photo-card {
          position: relative;
          z-index: 2;
          min-height: 520px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(170,186,199,.75);
          background: #fff;
          box-shadow: 0 34px 80px rgba(11,29,44,.18);
        }

        .zap-hero-photo {
          width: 100%;
          height: 520px;
          display: block;
          object-fit: contain;
          object-position: center top;
          background: #ffffff;
        }

        .zap-photo-overlay {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 17px 18px;
          border: 1px solid rgba(255,255,255,.38);
          border-radius: 16px;
          background: rgba(10,34,56,.86);
          backdrop-filter: blur(12px);
          color: #fff;
          box-shadow: 0 14px 34px rgba(0,0,0,.18);
        }

        .zap-photo-overlay strong {
          display: block;
          font-size: 14px;
          letter-spacing: -.01em;
        }

        .zap-photo-overlay span {
          display: block;
          margin-top: 4px;
          color: #cdd9e2;
          font-size: 11px;
          line-height: 1.4;
        }

        .zap-photo-badge {
          flex: 0 0 auto;
          padding: 7px 10px;
          border-radius: 999px;
          background: #dff5e9;
          color: #21784f;
          font-size: 9px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .zap-real-app {
          margin: 0 0 42px;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid #d8e0e6;
          background: #fff;
          box-shadow: 0 24px 60px rgba(11,29,44,.13);
        }

        .zap-real-app-top {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 44px;
          padding: 0 15px;
          background: #f2f4f6;
          border-bottom: 1px solid #dfe5ea;
        }

        .zap-real-app-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #c6ced5;
        }

        .zap-real-app-label {
          margin-left: 7px;
          color: #74838e;
          font-size: 11px;
          font-weight: 650;
        }

        .zap-real-app img {
          display: block;
          width: 100%;
          height: auto;
        }

        .zap-real-app-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 16px 18px;
          border-top: 1px solid #e7ebee;
          color: #61717d;
          font-size: 12px;
          line-height: 1.45;
        }

        .zap-real-app-caption strong {
          color: var(--zap-ink);
          font-size: 13px;
        }

        .zap-window {
          position: relative;
          z-index: 2;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid rgba(170,186,199,.75);
          background: #fff;
          box-shadow: 0 34px 80px rgba(11,29,44,.18);
          transform: rotate(1deg);
        }

        .zap-window-top {
          height: 46px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 16px;
          background: #f1f4f6;
          border-bottom: 1px solid #e0e5e8;
        }

        .zap-window-dot { width: 9px; height: 9px; border-radius: 50%; background: #c3ccd3; }
        .zap-window-url {
          margin-left: 8px;
          height: 26px;
          flex: 1;
          max-width: 280px;
          border-radius: 8px;
          background: #fff;
          border: 1px solid #dfe5ea;
          display: flex;
          align-items: center;
          padding: 0 10px;
          color: #8a98a4;
          font-size: 11px;
        }

        .zap-demo {
          min-height: 490px;
          display: grid;
          grid-template-columns: 155px 1fr;
          background: #fbfcfc;
        }

        .zap-demo-side {
          background: var(--zap-navy);
          color: #fff;
          padding: 22px 16px;
        }

        .zap-demo-logo {
          font-weight: 800;
          font-size: 15px;
          margin-bottom: 28px;
        }

        .zap-demo-new {
          width: 100%;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.08);
          color: #fff;
          border-radius: 10px;
          padding: 9px 10px;
          font-size: 11px;
          text-align: left;
        }

        .zap-demo-tab {
          margin-top: 10px;
          padding: 10px;
          border-radius: 10px;
          background: rgba(112,151,255,.18);
          font-size: 10px;
          color: #dce7ff;
        }

        .zap-demo-main { padding: 24px; }

        .zap-demo-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 20px;
        }

        .zap-demo-title { font-size: 18px; font-weight: 800; letter-spacing: -.02em; }
        .zap-demo-sub { margin-top: 4px; font-size: 10px; color: #738390; }
        .zap-state-pill {
          padding: 7px 10px;
          border-radius: 999px;
          background: #e5edff;
          color: #3155c2;
          font-size: 9px;
          font-weight: 800;
        }

        .zap-demo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .zap-demo-card {
          border: 1px solid #e0e6eb;
          background: #fff;
          border-radius: 13px;
          padding: 14px;
        }

        .zap-demo-label {
          margin-bottom: 9px;
          font-size: 9px;
          font-weight: 800;
          color: #60717e;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .zap-demo-input {
          height: 29px;
          border-radius: 8px;
          border: 1px solid #d8e0e6;
          background: #fbfcfd;
          padding: 0 8px;
          display: flex;
          align-items: center;
          color: #253744;
          font-size: 9px;
          margin-top: 6px;
        }

        .zap-demo-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid #e4e9ed;
        }

        .zap-demo-save {
          height: 29px;
          padding: 0 12px;
          border-radius: 8px;
          background: #eef1f3;
          color: #60717e;
          font-size: 9px;
          display: flex;
          align-items: center;
        }

        .zap-demo-generate {
          height: 31px;
          padding: 0 13px;
          border-radius: 8px;
          background: var(--zap-blue);
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          display: flex;
          align-items: center;
          box-shadow: 0 7px 18px rgba(63,109,246,.24);
        }

        .zap-proof {
          max-width: 1220px;
          margin: 0 auto;
          padding: 18px 28px 78px;
        }

        .zap-proof-box {
          display: grid;
          grid-template-columns: 1.2fr repeat(3, 1fr);
          border: 1px solid var(--zap-line);
          border-radius: 22px;
          overflow: hidden;
          background: #fff;
        }

        .zap-proof-cell {
          min-height: 126px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid var(--zap-line);
        }
        .zap-proof-cell:first-child { border-left: 0; }
        .zap-proof-cell strong { font-size: 27px; letter-spacing: -.04em; }
        .zap-proof-cell span { margin-top: 7px; color: var(--zap-muted); font-size: 13px; line-height: 1.45; }
        .zap-proof-intro strong { font-size: 17px; line-height: 1.35; letter-spacing: -.02em; }

        .zap-section {
          padding: 96px 28px;
        }

        .zap-section-inner { max-width: 1220px; margin: 0 auto; }
        .zap-section-soft { background: #eef2f1; }
        .zap-section-dark { background: var(--zap-navy); color: #fff; }

        .zap-section-head {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 46px;
        }

        .zap-eyebrow {
          color: var(--zap-blue);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .zap-section h2 {
          margin: 0;
          font-size: clamp(38px, 4.4vw, 64px);
          line-height: 1.02;
          letter-spacing: -.055em;
        }

        .zap-section-lead {
          color: var(--zap-muted);
          font-size: 17px;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 0 4px auto;
        }

        .zap-section-dark .zap-section-lead { color: #b8c7d2; }
        .zap-section-dark .zap-eyebrow { color: #91b1ff; }

        .zap-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .zap-card {
          min-height: 310px;
          border-radius: 22px;
          border: 1px solid var(--zap-line);
          background: #fff;
          padding: 27px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .zap-card-number {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: var(--zap-blue);
          font-weight: 850;
          font-size: 13px;
        }

        .zap-card h3 {
          margin: 27px 0 12px;
          font-size: 25px;
          letter-spacing: -.035em;
        }

        .zap-card p {
          margin: 0;
          color: var(--zap-muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .zap-card-visual {
          margin-top: auto;
          padding-top: 25px;
        }

        .zap-mini-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 12px;
          border: 1px solid #e1e6ea;
          border-radius: 11px;
          font-size: 10px;
          margin-top: 7px;
          color: #435662;
          background: #fbfcfd;
        }

        .zap-mini-pill {
          padding: 4px 7px;
          border-radius: 999px;
          background: #dff5e9;
          color: #21784f;
          font-weight: 800;
        }

        .zap-feature-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
        .zap-feature-card { --accent:#7045d9; position:relative; isolation:isolate; min-height:440px; padding:30px 28px 0; border-radius:22px; background:var(--accent); color:#fff; display:flex; flex-direction:column; overflow:hidden; transition:transform .25s ease,box-shadow .25s ease; }
        .zap-feature-card:nth-child(2) { --accent:#2459e8; }
        .zap-feature-card:nth-child(3) { --accent:#bd4b3c; }
        .zap-feature-card::before { content:""; position:absolute; inset:0; z-index:-1; background:radial-gradient(ellipse at 100% 0%,rgba(255,255,255,.16),transparent 65%); pointer-events:none; }
        .zap-feature-card:hover { transform:translateY(-5px); box-shadow:0 18px 35px rgba(15,23,60,.16); }
        .zap-feature-kicker { display:flex; align-items:center; gap:11px; font-size:11px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; }
        .zap-feature-kicker svg { width:26px; height:26px; flex:none; }
        .zap-feature-card h3 { margin:20px 0 10px; font-size:clamp(27px,2.5vw,37px); font-weight:750; line-height:1.12; letter-spacing:-.045em; color:#fff; }
        .zap-feature-card p { margin:0 0 22px; color:#fff; font-size:14px; line-height:1.55; }
        .zap-feature-stage { margin:auto -28px 0 0; padding:18px 0 0 17px; background:rgba(255,255,255,.24); border-radius:12px 0 0 0; min-height:210px; display:flex; align-items:flex-end; gap:10px; overflow:hidden; }
        .zap-feature-window { flex:1; min-width:0; background:#fff; color:#192343; padding:13px; border-radius:10px 0 0 0; box-shadow:0 8px 22px #17234a22; font-size:11px; transform:translateY(8px); transition:transform .35s cubic-bezier(.2,.7,.2,1); }
        .zap-feature-card:hover .zap-feature-window { transform:translateY(0); }
        .zap-feature-window-top { display:flex; justify-content:space-between; align-items:center; gap:6px; font-weight:750; margin-bottom:12px; }
        .zap-feature-sample { font-size:9px; color:#64748b; font-weight:500; }
        .zap-feature-amount { font-size:25px; letter-spacing:-.05em; font-weight:800; margin:5px 0 12px; }
        .zap-feature-fields { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
        .zap-feature-field { border:1px solid #e5e9f2; padding:8px; border-radius:6px; min-width:0; }
        .zap-feature-field span { display:block; color:#64748b; font-size:9px; margin-bottom:4px; }
        .zap-feature-field strong { font-size:11px; }
        .zap-feature-status { margin-top:10px; color:#13734c; font-weight:700; font-size:10px; }
        .zap-feature-state { display:flex; align-items:center; justify-content:space-between; gap:6px; padding:8px; margin:5px 0; border-radius:6px; background:#f1f5ff; }
        .zap-feature-state strong { color:#254db4; font-size:10px; }
        .zap-feature-bars { display:flex; align-items:flex-end; gap:6px; height:37px; margin-top:8px; }
        .zap-feature-bars i { flex:1; border-radius:3px 3px 0 0; background:#547af5; }
        .zap-feature-file { display:flex; align-items:center; gap:9px; padding:9px 0; border-bottom:1px solid #e8ebf1; }
        .zap-feature-file-icon { display:grid; place-items:center; width:29px; height:32px; border-radius:5px; background:#fcece8; color:#a83c30; font-size:9px; font-weight:800; flex:none; }
        .zap-feature-file strong { font-size:10px; flex:1; }
        .zap-feature-file em { color:#13734c; font-style:normal; font-size:12px; }
        @media(max-width:600px) { .zap-feature-card { min-height:390px; padding:24px 22px 0; } .zap-feature-stage { margin-right:-22px; } }
        @media(prefers-reduced-motion:reduce) { .zap-feature-card,.zap-feature-window { transition:none; } .zap-feature-card:hover { transform:none; } }

        @media(max-width:900px) { .zap-feature-grid { grid-template-columns:1fr; } }

        .zap-workflow {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 54px;
          align-items: center;
        }

        .zap-workflow-list {
          margin-top: 28px;
          display: grid;
          gap: 12px;
        }

        .zap-workflow-item {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 14px;
          align-items: start;
          padding: 16px 0;
          border-bottom: 1px solid #d7dedc;
        }

        .zap-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--zap-navy);
          color: #fff;
          font-size: 12px;
          font-weight: 850;
        }

        .zap-workflow-item strong { display: block; font-size: 16px; margin-bottom: 4px; }
        .zap-workflow-item span { color: var(--zap-muted); font-size: 13px; line-height: 1.55; }

        .zap-doc-stack {
          min-height: 480px;
          position: relative;
          display: grid;
          place-items: center;
        }

        .zap-doc-stack.zap-document-gallery {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          place-items: center;
          min-height: 480px;
          padding: 32px 12px;
          border-radius: 30px;
          background: #d5f5e8;
          isolation: isolate;
          overflow: hidden;
        }
        .zap-document-gallery figure {
          grid-area: 1 / 1;
          position: relative;
          width: 49%;
          min-width: 0;
          margin: 0;
          z-index: 2;
          transform: translateX(var(--doc-x)) translateY(var(--doc-y)) rotate(var(--doc-angle));
          transition: transform .25s ease;
        }
        .zap-document-gallery figure:nth-of-type(1) { --doc-x: -46%; --doc-y: 9px; --doc-angle: -7deg; }
        .zap-document-gallery figure:nth-of-type(2) { --doc-x: 0%; --doc-y: -16px; --doc-angle: -1deg; z-index: 4; }
        .zap-document-gallery figure:nth-of-type(3) { --doc-x: 46%; --doc-y: 9px; --doc-angle: 7deg; z-index: 3; }
        .zap-document-gallery figure:hover { transform: translateX(var(--doc-x)) translateY(calc(var(--doc-y) - 10px)) rotate(var(--doc-angle)) scale(1.035); z-index: 5; }
        .zap-document-gallery figure img {
          display: block;
          width: 100%;
          aspect-ratio: 8.5 / 11;
          object-fit: contain;
          background: #fff;
          border: 1px solid #d9e0e4;
          border-radius: 5px;
          box-shadow: 0 16px 32px rgba(26,48,63,.21);
        }
        @media (max-width: 520px) {
          .zap-doc-stack.zap-document-gallery { padding: 24px 8px; min-height: 290px; }
          .zap-document-gallery figure { width: 49%; }
        }
        @media (prefers-reduced-motion: reduce) { .zap-document-gallery figure { transition: none; } }

        .zap-note-preview {
          position: relative;
          z-index: 2;
          display: block;
          width: min(390px, 88%);
          height: auto;
          border: 1px solid #d9e0e4;
          border-radius: 6px;
          background: #fff;
          box-shadow: 0 24px 55px rgba(26,48,63,.18);
          transform: rotate(-2deg);
        }

        .zap-dark-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 60px;
          align-items: center;
        }

        .zap-dark-list {
          margin-top: 30px;
          display: grid;
          gap: 12px;
        }

        .zap-dark-item {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 12px;
          align-items: start;
          color: #d5e0e7;
          font-size: 14px;
          line-height: 1.6;
        }

        .zap-dark-check {
          width: 25px;
          height: 25px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(147,180,255,.16);
          color: #a9c2ff;
          font-weight: 900;
        }

        .zap-library-panel {
          min-width: 0;
          padding: clamp(20px, 3vw, 32px);
          border: 1px solid rgba(158, 178, 255, .26);
          border-radius: 20px;
          background: rgba(255,255,255,.045);
          box-shadow: 0 22px 55px rgba(0,0,0,.12);
        }
        .zap-library-heading { color: #fff; font-size: 15px; font-weight: 750; margin-bottom: 20px; }
        .zap-library-pills { display: flex; flex-wrap: wrap; gap: 9px; list-style: none; padding: 0; margin: 0; }
        .zap-library-pills li { border: 1px solid rgba(166,185,255,.3); background: rgba(255,255,255,.045); color: #f1f4ff; border-radius: 999px; padding: 9px 13px; font-size: 13px; font-weight: 550; line-height: 1.4; max-width: 100%; transition: background .2s, border-color .2s; }
        .zap-library-pills li:hover { background: rgba(63,109,246,.18); border-color: #7799ff; }
        .zap-library-note { margin: 20px 0 0; color: #b7c5df; font-size: 12px; line-height: 1.6; }

        .zap-output-panel {
          background: #f9fbfc;
          border-radius: 24px;
          padding: 22px;
          color: var(--zap-ink);
          box-shadow: 0 28px 70px rgba(0,0,0,.22);
        }

        .zap-output-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e7ea;
          font-size: 13px;
          font-weight: 800;
        }

        .zap-output-status {
          padding: 5px 8px;
          background: #ddf4e7;
          color: #28754f;
          border-radius: 999px;
          font-size: 9px;
        }

        .zap-output-file {
          display: grid;
          grid-template-columns: 36px 1fr auto;
          gap: 11px;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid #e7ebee;
        }

        .zap-file-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: #e9efff;
          color: #3158c9;
          display: grid;
          place-items: center;
          font-size: 10px;
          font-weight: 850;
        }

        .zap-file-name { font-size: 11px; font-weight: 750; }
        .zap-file-meta { margin-top: 3px; font-size: 9px; color: #86949e; }
        .zap-file-action { color: var(--zap-blue); font-size: 9px; font-weight: 800; }

        .zap-final {
          padding: 84px 28px;
          background: #fff;
        }

        .zap-final-box {
          max-width: 1220px;
          margin: 0 auto;
          padding: 62px;
          border-radius: 30px;
          color: #fff;
          background:
            radial-gradient(circle at 86% 20%, rgba(102,149,255,.55), transparent 27%),
            var(--zap-navy);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 30px;
          align-items: center;
        }

        .zap-final h2 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(38px, 4.7vw, 64px);
          line-height: 1;
          letter-spacing: -.055em;
        }

        .zap-final p { margin: 15px 0 0; color: #bfccd5; font-size: 15px; }

        .zap-footer-legal { display: flex; gap: 14px; flex-wrap: wrap; }
        .zap-footer-legal a { color: var(--zap-ink); text-decoration: none; }
        .zap-footer-legal a:hover { text-decoration: underline; }
        .zap-footer-legal a:focus-visible { outline: 2px solid var(--zap-blue); outline-offset: 4px; }
        .zap-footer {
          background: #fff;
          padding: 0 28px 38px;
        }

        .zap-footer-inner {
          max-width: 1220px;
          margin: 0 auto;
          padding-top: 28px;
          border-top: 1px solid var(--zap-line);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: #7b8993;
          font-size: 12px;
        }

        @media (max-width: 980px) {

          .zap-hero-inner, .zap-section-head, .zap-workflow, .zap-dark-grid { grid-template-columns: 1fr; }
          .zap-product-stage { margin-top: 12px; }
          .zap-window { transform: none; }
          .zap-hero-photo-card { min-height: 440px; }
          .zap-hero-photo { height: 440px; object-fit: contain; }
          .zap-real-app-caption { align-items: flex-start; flex-direction: column; gap: 5px; }
          .zap-proof-box { grid-template-columns: 1fr 1fr; }
          .zap-proof-cell { border-top: 1px solid var(--zap-line); }
          .zap-proof-cell:nth-child(odd) { border-left: 0; }
          .zap-proof-cell:nth-child(-n+2) { border-top: 0; }
          .zap-cards { grid-template-columns: 1fr; }
          .zap-section-lead { margin-left: 0; }
          .zap-final-box { grid-template-columns: 1fr; padding: 46px 34px; }
          .zap-final-box .zap-btn { justify-self: start; }
        }

        @media (max-width: 680px) {

          .zap-hero { padding: 54px 18px 48px; }
          .zap-hero h1 { font-size: clamp(46px, 15vw, 67px); }
          .zap-hero-copy { font-size: 17px; }
          .zap-hero-photo-card { min-height: 360px; border-radius: 20px; }
          .zap-hero-photo { height: 360px; object-fit: contain; }
          .zap-photo-overlay { left: 12px; right: 12px; bottom: 12px; padding: 14px; }
          .zap-photo-badge { display: none; }
          .zap-real-app { border-radius: 16px; margin-bottom: 28px; }
          .zap-demo { grid-template-columns: 1fr; min-height: 0; }
          .zap-demo-side { display: none; }
          .zap-demo-main { padding: 17px; }
          .zap-demo-grid { grid-template-columns: 1fr; }
          .zap-proof { padding: 10px 18px 56px; }
          .zap-proof-box { grid-template-columns: 1fr; }
          .zap-proof-cell { border-left: 0; border-top: 1px solid var(--zap-line) !important; }
          .zap-proof-cell:first-child { border-top: 0 !important; }
          .zap-section { padding: 72px 18px; }
          .zap-doc-stack { min-height: 400px; }
          .zap-final { padding: 60px 18px; }
          .zap-final-box { padding: 38px 24px; border-radius: 24px; }
          .zap-footer { padding: 0 18px 30px; }
          .zap-footer-inner { align-items: flex-start; flex-direction: column; }
        }

        /* Side-by-side product screenshots */
        .zap-landing .zap-screen-pair {
          position: relative; z-index: 2; display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px; align-items: start; padding: 24px 0;
        }
        .zap-landing .zap-screen-panel {
          min-width: 0; margin: 0; overflow: hidden;
          border: 1px solid #dbe2e8; border-radius: 15px;
          background: #fff; box-shadow: 0 18px 40px rgba(11,29,44,.12);
        }
        .zap-landing .zap-screen-toolbar {
          display: flex; align-items: center; gap: 4px;
          padding: 9px; background: #f4f5f8; border-bottom: 1px solid #e4e8ef;
        }
        .zap-landing .zap-screen-toolbar i {
          width: 6px; height: 6px; border-radius: 50%; background: #c4ccd8; flex-shrink: 0;
        }
        .zap-landing .zap-screen-toolbar span {
          font-size: 10px; color: #65738a; margin-left: 5px;
        }
        .zap-landing .zap-screen-panel img {
          display: block; width: 100%; aspect-ratio: 1200 / 630;
          object-fit: contain; object-position: top; background: #f6f8fb;
        }
        .zap-landing .zap-screen-panel figcaption {
          padding: 10px 12px; font-size: 12px; font-weight: 700; color: #101031;
        }
        @media (max-width: 600px) {
          .zap-landing .zap-screen-pair { grid-template-columns: 1fr; padding: 12px 0; }
        }

        /* Connected four-step platform workflow */
        .zap-process { padding: 24px 0 8px; }
        .zap-process-intro { max-width: 660px; margin-bottom: 42px; }
        .zap-process-intro h3 { margin: 0 0 12px; font-size: clamp(28px, 3.2vw, 42px); letter-spacing: -.045em; line-height: 1.12; }
        .zap-process-intro p { margin: 0; color: var(--zap-muted); font-size: 16px; line-height: 1.65; }
        .zap-process-track { position: relative; display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 28px; padding: 0; margin: 0; list-style: none; }
        .zap-process-track::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #d5dfea; }
        .zap-process-track::after { content: ""; position: absolute; top: 0; left: 0; right: 24%; height: 2px; background: var(--zap-blue); box-shadow: 0 0 9px rgba(63,109,246,.35); animation: zapProcessReveal 1.4s ease-out both; transform-origin: left; }
        @keyframes zapProcessReveal { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .zap-process-step { position: relative; padding-top: 26px; min-width: 0; }
        .zap-process-step::before { content: ""; position: absolute; top: -4px; left: 0; width: 10px; height: 10px; border-radius: 50%; background: var(--zap-blue); box-shadow: 0 0 0 4px #e1e9ff; z-index: 1; }
        .zap-process-step:last-child::before { background: #36ce80; box-shadow: 0 0 0 4px #d8f3e5; }
        .zap-process-icon { width: 46px; height: 46px; border: 1px solid #c5d4ff; background: #edf2ff; color: var(--zap-blue); border-radius: 12px; display: grid; place-items: center; margin-bottom: 18px; transition: transform .2s ease, box-shadow .2s ease; }
        .zap-process-icon svg { width: 24px; height: 24px; }
        .zap-process-step:last-child .zap-process-icon { background: #e1f7eb; border-color: #b8e8ce; color: #168452; }
        .zap-process-step:hover .zap-process-icon { transform: translateY(-3px); box-shadow: 0 8px 18px rgba(63,109,246,.12); }
        .zap-process-number { color: var(--zap-blue); font-size: 12px; font-weight: 800; letter-spacing: .08em; }
        .zap-process-step h4 { margin: 9px 0 9px; font-size: 19px; line-height: 1.25; letter-spacing: -.025em; color: var(--zap-ink); }
        .zap-process-step p { margin: 0; color: var(--zap-muted); font-size: 14px; line-height: 1.65; }
        @media (max-width: 800px) { .zap-process-track { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 30px 24px; } .zap-process-track::before, .zap-process-track::after { display: none; } .zap-process-step { border-top: 2px solid #c5d4ff; } }
        @media (max-width: 480px) { .zap-process-track { grid-template-columns: 1fr; gap: 24px; } .zap-process-step { padding-top: 18px; } }
        @media (prefers-reduced-motion: reduce) { .zap-process-track::after { animation: none; } .zap-process-icon { transition: none; } }
      `}</style>

      <div className="zap-beta-banner" role="region" aria-label="Beta testing announcement">
        <span className="zap-beta-label">BETA</span>
        <span>ZapDocs beta testing is now open!</span>
        <button type="button" onClick={onDemo}>Request early access <span aria-hidden="true">→</span></button>
      </div>

      <Header onLaunch={onLaunch} onPricing={onPricing} onDemo={onDemo} />

      <section className="zap-hero">
        <div className="zap-hero-inner">
          <div>
            <div className="zap-kicker"><span className="zap-kicker-dot" /> Loan document automation</div>
            <h1>Loan documents, <span>generated in minutes.</span></h1>
            <p className="zap-hero-copy">
              Enter the deal once. ZapDocs turns your loan data into organized, repeatable document packages for private lending workflows.
            </p>
            <div className="zap-hero-actions">
              <button className="zap-btn zap-btn-primary" onClick={onLaunch}>Start generating</button>
              <button className="zap-btn zap-btn-ghost" onClick={() => scrollTo("platform")}>See how it works</button>
            </div>
            <div className="zap-hero-note">
              <span className="zap-check">Florida + California workflows</span>
              <span className="zap-check">Reusable loan records</span>
              <span className="zap-check">Word + ZIP outputs</span>
            </div>
          </div>

          <div className="zap-product-stage" aria-label="Private lending professionals using ZapDocs">
            <div className="zap-product-glow" />
            <div className="zap-screen-pair">
              {[
                [loanScreen, "Dashboard", "Loan portfolio overview"],
                [loanScreen2, "Loan information", "Loan details and document preparation"],
              ].map(([src, label, alt]) => (
                <figure className="zap-screen-panel" key={label}>
                  <div className="zap-screen-toolbar">
                    <i /><i /><i /><span>{label}</span>
                  </div>
                  <img src={src} alt={alt} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ZapImpactStats />

      <section className="zap-section zap-section-soft" id="platform">
        <div className="zap-section-inner">
          <div className="zap-section-head">
            <div>
              <div className="zap-eyebrow">The ZapDocs platform</div>
              <h2>Less retyping. Fewer document mistakes.</h2>
            </div>
            <p className="zap-section-lead">
              Centralize the deal data your documents depend on, then generate the right package from the same source of truth whenever the loan changes.
            </p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%, 320px),1fr))',gap:'40px',alignItems:'center',marginBottom:'48px'}}>
            <ZapAnimatedOverview />
            <div><div className="zap-eyebrow">Built for private lending teams</div><h2>Keep every deal, party, and document connected.</h2><p className="zap-section-lead" style={{margin:'20px 0 0'}}>Manage saved loans, review recorded loan terms and generate closing packages from a single workspace.</p></div>
          </div>

          <div className="zap-process" aria-label="How ZapDocs works">
            <div className="zap-process-intro">
              <div className="zap-eyebrow">How it works</div>
              <h3>One deal. Four simple steps.</h3>
              <p>Enter the information once and prepare your documents from a single loan record.</p>
            </div>
            <ol className="zap-process-track">
              <li className="zap-process-step">
                <div className="zap-process-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20H4V4h12v5M10 14l8-8 3 3-8 8-4 1z"/></svg></div>
                <span className="zap-process-number">01</span>
                <h4>Enter the deal</h4>
                <p>Add borrower and lender details, property information, loan terms and payment schedules.</p>
              </li>
              <li className="zap-process-step">
                <div className="zap-process-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v17M5 21h14M4 7h16M6 7l-4 8h8L6 7zm12 0-4 8h8l-4-8z"/></svg></div>
                <span className="zap-process-number">02</span>
                <h4>Match the state</h4>
                <p>Choose Florida or California to use the corresponding mortgage or deed of trust workflow.</p>
              </li>
              <li className="zap-process-step">
                <div className="zap-process-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="3" width="13" height="16" rx="2"/><path d="M4 7v14h12M10 8h7M10 12h7M10 15h4"/></svg></div>
                <span className="zap-process-number">03</span>
                <h4>Generate documents</h4>
                <p>Build the closing package or available individual lender documents from your saved loan data.</p>
              </li>
              <li className="zap-process-step">
                <div className="zap-process-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></svg></div>
                <span className="zap-process-number">04</span>
                <h4>Download and review</h4>
                <p>Download your files, review them with your closing team and prepare for closing.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="zap-section" id="workflow">
        <div className="zap-section-inner zap-workflow">
          <div>
            <div className="zap-eyebrow">Simple workflow</div>
            <h2>From loan terms to closing docs without the document scramble.</h2>
            <div className="zap-workflow-list">
              <div className="zap-workflow-item">
                <div className="zap-step">1</div>
                <div><strong>Create the loan record</strong><span>Name the file, select the state and keep the transaction organized from the beginning.</span></div>
              </div>
              <div className="zap-workflow-item">
                <div className="zap-step">2</div>
                <div><strong>Complete the deal fields</strong><span>Add terms, parties, property data, disclosures and the payment schedule in one structured workspace.</span></div>
              </div>
              <div className="zap-workflow-item">
                <div className="zap-step">3</div>
                <div><strong>Generate the documents</strong><span>Save the latest loan data and create the output package that matches the file.</span></div>
              </div>
            </div>
          </div>

          <div className="zap-doc-stack zap-document-gallery" aria-label="Examples of ZapDocs loan documents">
              {[
                [notePreview, "Secured Note"],
                [mortgagePreview, "Florida Mortgage"],
                [deedPreview, "California Deed of Trust"],
              ].map(([src, label]) => (
                <figure key={label}>
                  <img src={src} alt={`Example ${label}`} loading="lazy" />
                </figure>
              ))}
            </div>
        </div>
      </section>

      <section className="zap-section zap-section-dark" id="outputs">
          <div className="zap-section-inner zap-dark-grid">
            <div>
              <div className="zap-eyebrow">Document library</div>
              <h2>One loan record. A complete closing package.</h2>
              <p className="zap-section-lead" style={{ marginLeft: 0, marginTop: 22 }}>Prepare state-specific private lending documents from the same transaction data, without starting from scratch for every agreement.</p>
              <div className="zap-dark-list">
                <div className="zap-dark-item"><span className="zap-dark-check">✓</span><span>Florida and California closing packages.</span></div>
                <div className="zap-dark-item"><span className="zap-dark-check">✓</span><span>Separate servicing agreements and lender disclosures where applicable.</span></div>
              </div>
            </div>
            <div className="zap-library-panel">
              <div className="zap-library-heading">Closing &amp; lender documents</div>
              <ul className="zap-library-pills" aria-label="Document types">
                {[
                  "Promissory Notes", "Deeds of Trust", "Mortgages",
                  "Agreements to Procure Lender", "Security Agreements",
                  "Guaranties", "Oral Disclosures", "Servicing Agreements",
                  "Lender Disclosures", "Key Provisions Summaries",
                  "Arbitration Agreements", "Compliance Agreements",
                  "Default Rate Addenda"
                ].map(name => <li key={name}>{name}</li>)}
              </ul>
              <p className="zap-library-note">Document availability varies by state and package. Some agreements and addenda may be included within the combined closing document rather than as separate files.</p>
            </div>
          </div>
        </section>

      <section className="zap-final">
        <div className="zap-final-box">
          <div>
            <h2>Stop rebuilding the same loan documents deal after deal.</h2>
            <p>Open ZapDocs and turn your loan data into a repeatable document workflow.</p>
          </div>
          <button className="zap-btn zap-btn-primary" onClick={onLaunch}>Open ZapDocs</button>
        </div>
      </section>

      <footer className="zap-footer">
        <div className="zap-footer-inner">
          <button className="zap-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="zap-brand-mark">Z</span> ZapDocs
          </button>
          <span>Loan document automation for private lending workflows.</span>
          <span>© 2026 ZapDocs. All rights reserved.</span>
          <nav aria-label="Legal pages" className="zap-footer-legal">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/accessibility">Accessibility</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function ZapDocsAuth() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    setErrorMessage("");
    try {
      if (!supabase) throw new Error("Supabase is not configured.");
      if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + "/app",
        });
        if (error) throw error;
        setMessage("If this email has an account, a password-reset link has been sent.");
      } else if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        if (!data.session) setMessage("Check your email for the confirmation link, then sign in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err) {
      setErrorMessage(err.message || "Authentication failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f6f8fc", padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 410, background: "white", borderRadius: 18, padding: 32, boxShadow: "0 20px 65px rgba(8,13,54,.10)" }}>
        <h1 style={{ color: "#080d36", margin: "0 0 8px", fontSize: 30 }}>ZapDocs</h1>
        <p style={{ color: "#59627a", margin: "0 0 28px" }}>{mode === "signup" ? "Create your account" : mode === "reset" ? "Reset your password" : "Sign in to your private loan workspace"}</p>
        <label htmlFor="zd-email" style={{ display: "block", marginBottom: 7 }}>Email</label>
        <input id="zd-email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: 12, boxSizing: "border-box", marginBottom: 17, border: "1px solid #cdd4e1", borderRadius: 9 }} />
        {mode !== "reset" && <>
          <label htmlFor="zd-password" style={{ display: "block", marginBottom: 7 }}>Password</label>
          <input id="zd-password" type="password" autoComplete={mode === "signup" ? "new-password" : "current-password"} minLength={6} required value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: 12, boxSizing: "border-box", marginBottom: 17, border: "1px solid #cdd4e1", borderRadius: 9 }} />
        </>}
        {errorMessage && <p role="alert" style={{ color: "#b42318" }}>{errorMessage}</p>}
        {message && <p role="status" style={{ color: "#176b50" }}>{message}</p>}
        <button type="submit" disabled={pending} style={{ width: "100%", padding: 14, background: "#43e19a", border: 0, borderRadius: 9, color: "#080d36", fontWeight: 800, cursor: "pointer" }}>{pending ? "Please wait…" : mode === "signup" ? "Create account" : mode === "reset" ? "Send reset link" : "Sign in"}</button>
        <div style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
          <button type="button" onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setErrorMessage(""); setMessage(""); }} style={{ border: 0, background: "none", color: "#2455e8", cursor: "pointer" }}>{mode === "signup" ? "Already have an account? Sign in" : "Create an account"}</button>
          {mode !== "login" ? <button type="button" onClick={() => {setMode("login"); setMessage(""); setErrorMessage("");}} style={{ border: 0, background: "none", color: "#2455e8", cursor: "pointer" }}>Back to sign in</button> : <button type="button" onClick={() => {setMode("reset"); setMessage(""); setErrorMessage("");}} style={{ border: 0, background: "none", color: "#2455e8", cursor: "pointer" }}>Forgot password?</button>}
        </div>
      </form>
    </div>
  );
}

export default function Landing() {
  const getInitialScreen = () =>
    legalRoute() || (window.location.pathname.replace(/\/$/, "") === "/demo" ? "demo" : null) || (window.location.pathname.replace(/\/$/, "") === "/pricing" ? "pricing" : null) || (window.location.pathname.startsWith("/app") || window.location.hash === "#app"
      ? "app" : "landing");
  const [screen, setScreen] = useState(getInitialScreen);
  const [session, setSession] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [setupError, setSetupError] = useState("");

  useEffect(() => {
    if (!supabase) {
      setSetupError(supabaseSetupError);
      setCheckingAuth(false);
      return;
    }
    let mounted = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return;
      if (error) setSetupError(error.message);
      setSession(data?.session ?? null);
      setCheckingAuth(false);
    }).catch(err => {
      if (mounted) { setSetupError(err.message); setCheckingAuth(false); }
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });
    return () => { mounted = false; subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    const syncLocation = () => setScreen(getInitialScreen());
    window.addEventListener("hashchange", syncLocation);
    window.addEventListener("popstate", syncLocation);
    return () => {
      window.removeEventListener("hashchange", syncLocation);
      window.removeEventListener("popstate", syncLocation);
    };
  }, []);

  const openApp = () => {
    window.history.pushState({}, "", "/app");
    setScreen("app");
  };
  const openPricing = () => {
    window.history.pushState({}, "", "/pricing");
    setScreen("pricing");
    window.scrollTo(0, 0);
  };
  const openDemo = () => {
    window.history.pushState({}, "", "/demo");
    setScreen("demo");
    window.scrollTo(0, 0);
  };
  const goHome = () => {
    window.history.pushState({}, "", "/");
    setScreen("landing");
    window.scrollTo(0, 0);
  };

  const navigateLegal = (path) => {
    window.history.pushState({}, "", path);
    setScreen(getInitialScreen());
    window.scrollTo(0, 0);
  };
  if (["/terms", "/privacy", "/accessibility"].includes(screen)) {
    return <ZapDocsLegal path={screen} onNavigate={navigateLegal} />;
  }
  if (screen === "demo") return <Demo onHome={goHome} onLaunch={openApp} onPricing={openPricing} />;
  if (screen === "pricing") return <Pricing onHome={goHome} onLaunch={openApp} />;
  if (screen !== "app") return <ZapDocsLanding onLaunch={openApp} onPricing={openPricing} onDemo={openDemo} />;

  if (setupError) return <div role="alert" style={{ padding: 32, fontFamily: "system-ui", color: "#b42318" }}><h2>ZapDocs configuration error</h2><p>{setupError}</p><button onClick={goHome}>Back home</button></div>;
  if (checkingAuth) return <p style={{ padding: 32, fontFamily: "system-ui" }}>Checking your ZapDocs session…</p>;
  if (!session) return <ZapDocsAuth />;

  return (
    <div>
      <div style={{ position: "fixed", right: 18, top: 14, zIndex: 9999, display: "flex", gap: 10 }}>
        <button type="button" onClick={goHome} style={{ border: "1px solid #d6dbe4", borderRadius: 999, padding: "8px 13px", background: "white", cursor: "pointer", fontWeight: 700 }}>← ZapDocs home</button>
        <button type="button" onClick={async () => { await supabase.auth.signOut(); }} style={{ border: "1px solid #d6dbe4", borderRadius: 999, padding: "8px 13px", background: "white", cursor: "pointer", fontWeight: 700 }}>Sign out</button>
      </div>
      <LoanWorkspace key={session.user.id} />
    </div>
  );
}
