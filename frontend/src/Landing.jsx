import { useState, useEffect, useCallback } from "react";
import teamPhoto from "./assets/happy-busy-executive-people-working-260nw-2510293371.webp";
import loanScreen from "./assets/loanscreen.png";

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

  const paymentRows = fields.PAYMENT_ROWS || [];

  const refreshList = useCallback(async () => {
    const res = await fetch("/api/loans");
    const data = await res.json();
    setLoans(data);
    return data;
  }, []);

  useEffect(() => {
    (async () => {
      const data = await refreshList();
      setLoadingList(false);
      if (data.length > 0) {
        openLoan(data[0].id);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function openLoan(id) {
    setActiveId(id);
    const res = await fetch(`/api/loans/${id}`);
    if (!res.ok) return;
    const data = await res.json();
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
    const res = await fetch("/api/loans", { method: "POST" });
    const data = await res.json();
    await refreshList();
    setActiveId(data.id);
    setFields(emptyFields());
    setLabelInput(data.label || "New Loan");
    setSaveStatus("idle");
  }

  async function handleDeleteLoan(id, e) {
    e.stopPropagation();
    if (!window.confirm("Delete this loan? This can't be undone.")) return;
    await fetch(`/api/loans/${id}`, { method: "DELETE" });
    const data = await refreshList();
    if (activeId === id) {
      if (data.length > 0) {
        openLoan(data[0].id);
      } else {
        setActiveId(null);
        setFields(emptyFields());
        setLabelInput("");
      }
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
      const res = await fetch(`/api/loans/${activeId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, label: labelInput }),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      setLabelInput(data.label);
      await refreshList();
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 1500);
    } catch (err) {
      setSaveStatus("error");
    }
  }

  async function saveActiveLoan() {
    // Shared helper: persist current fields before either generate action,
    // so the downloaded doc(s) always match what's on screen.
    await fetch(`/api/loans/${activeId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
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

      const res = await fetch(`/api/loans/${activeId}/generate`, {
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

      const res = await fetch(
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

      const res = await fetch(
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
                    {group.fields.map(([name, label]) => (
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

function ZapDocsLanding({ onLaunch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
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
          overflow-x: hidden;
        }

        .zap-landing * { box-sizing: border-box; }
        .zap-landing button, .zap-landing input { font: inherit; }

        .zap-nav-wrap {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(247, 248, 246, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(219, 226, 232, 0.75);
        }

        .zap-nav {
          max-width: 1220px;
          margin: 0 auto;
          height: 78px;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

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

        .zap-nav-links {
          display: flex;
          align-items: center;
          gap: 26px;
          margin-left: auto;
        }

        .zap-link {
          border: 0;
          background: transparent;
          color: #314452;
          font-size: 14px;
          font-weight: 650;
          cursor: pointer;
          padding: 8px 0;
        }

        .zap-link:hover { color: var(--zap-blue); }

        .zap-nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
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

        .zap-menu-btn {
          display: none;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1px solid var(--zap-line);
          background: #fff;
          cursor: pointer;
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

        .zap-doc {
          position: absolute;
          width: min(350px, 78%);
          aspect-ratio: 8.5 / 11;
          background: #fff;
          border: 1px solid #d9e0e4;
          border-radius: 14px;
          box-shadow: 0 24px 55px rgba(26,48,63,.12);
          padding: 27px;
        }
        .zap-doc:nth-child(1) { transform: rotate(-8deg) translate(-48px, 18px); opacity: .58; }
        .zap-doc:nth-child(2) { transform: rotate(6deg) translate(50px, 8px); opacity: .72; }
        .zap-doc:nth-child(3) { z-index: 2; }

        .zap-doc-brand { font-weight: 850; font-size: 12px; color: var(--zap-blue); }
        .zap-doc-title { margin-top: 30px; font-size: 22px; font-weight: 850; letter-spacing: -.03em; }
        .zap-doc-line { height: 7px; border-radius: 999px; background: #e6ebee; margin-top: 13px; }
        .zap-doc-line.short { width: 63%; }
        .zap-doc-line.mid { width: 81%; }
        .zap-doc-sign { margin-top: 48px; border-top: 1px solid #bac6cd; width: 52%; padding-top: 6px; font-size: 8px; color: #768691; }

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
          .zap-nav-links { display: none; }
          .zap-nav-actions .zap-btn-ghost { display: none; }
          .zap-menu-btn { display: grid; place-items: center; }
          .zap-mobile-menu {
            position: absolute;
            top: 70px;
            left: 18px;
            right: 18px;
            border: 1px solid var(--zap-line);
            border-radius: 16px;
            background: #fff;
            padding: 14px;
            box-shadow: 0 20px 50px rgba(11,29,44,.12);
          }
          .zap-mobile-menu .zap-link { display: block; width: 100%; text-align: left; padding: 12px; }
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
          .zap-nav { height: 68px; padding: 0 18px; }
          .zap-nav-actions .zap-btn-primary { display: none; }
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
      `}</style>

      <div className="zap-nav-wrap">
        <nav className="zap-nav">
          <button className="zap-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="zap-brand-mark">Z</span>
            ZapDocs
          </button>

          <div className="zap-nav-links">
            <button className="zap-link" onClick={() => scrollTo("platform")}>Platform</button>
            <button className="zap-link" onClick={() => scrollTo("workflow")}>How it works</button>
            <button className="zap-link" onClick={() => scrollTo("outputs")}>Documents</button>
          </div>

          <div className="zap-nav-actions">
            <button className="zap-btn zap-btn-ghost" onClick={onLaunch}>Log in</button>
            <button className="zap-btn zap-btn-primary" onClick={onLaunch}>Open ZapDocs</button>
            <button className="zap-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">☰</button>
          </div>

          {menuOpen && (
            <div className="zap-mobile-menu">
              <button className="zap-link" onClick={() => scrollTo("platform")}>Platform</button>
              <button className="zap-link" onClick={() => scrollTo("workflow")}>How it works</button>
              <button className="zap-link" onClick={() => scrollTo("outputs")}>Documents</button>
              <button className="zap-link" onClick={onLaunch}>Open ZapDocs →</button>
            </div>
          )}
        </nav>
      </div>

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
            <div className="zap-hero-photo-card">
              <img
                className="zap-hero-photo"
                src={loanScreen}
                alt="Actual ZapDocs loan workspace"
              />
              <div className="zap-photo-overlay">
                <div>
                  <strong>The actual ZapDocs loan workspace</strong>
                  <span>Save the deal once, update it anytime, and generate the document package from the same record.</span>
                </div>
                <div className="zap-photo-badge">ZapDocs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zap-proof">
        <div className="zap-proof-box">
          <div className="zap-proof-cell zap-proof-intro">
            <strong>One workspace for the information behind every closing package.</strong>
            <span>Built around the way private loan files are actually assembled.</span>
          </div>
          <div className="zap-proof-cell"><strong>FL + CA</strong><span>State-aware mortgage and deed of trust workflows.</span></div>
          <div className="zap-proof-cell"><strong>Enter once</strong><span>Reuse borrower, lender, property and payment data.</span></div>
          <div className="zap-proof-cell"><strong>Generate</strong><span>Create a full package or individual lender documents.</span></div>
        </div>
      </section>

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

          <div className="zap-real-app">
            <div className="zap-real-app-top">
              <span className="zap-real-app-dot" />
              <span className="zap-real-app-dot" />
              <span className="zap-real-app-dot" />
              <span className="zap-real-app-label">Private lending workflow</span>
            </div>
            <img
              src={teamPhoto}
              alt="Private lending professionals reviewing loan documents together"
              style={{ maxHeight: "520px", objectFit: "cover" }}
            />
            <div className="zap-real-app-caption">
              <strong>Built around the way lending teams actually work.</strong>
              <span>Keep deal information organized in one workspace instead of rebuilding the same documents manually.</span>
            </div>
          </div>

          <div className="zap-cards">
            <article className="zap-card">
              <div className="zap-card-number">01</div>
              <h3>Capture the deal once.</h3>
              <p>Keep loan terms, dates, property information, borrower details, lender data and payment schedules together.</p>
              <div className="zap-card-visual">
                <div className="zap-mini-row"><span>Loan Amount</span><strong>$425,000</strong></div>
                <div className="zap-mini-row"><span>Interest Rate</span><strong>9.50%</strong></div>
                <div className="zap-mini-row"><span>Property State</span><strong>CA</strong></div>
              </div>
            </article>

            <article className="zap-card">
              <div className="zap-card-number">02</div>
              <h3>Adapt to the loan.</h3>
              <p>Choose the state and maintain payment tiers without rebuilding a document package from scratch.</p>
              <div className="zap-card-visual">
                <div className="zap-mini-row"><span>California</span><span className="zap-mini-pill">Deed of Trust</span></div>
                <div className="zap-mini-row"><span>Florida</span><span className="zap-mini-pill">Mortgage</span></div>
                <div className="zap-mini-row"><span>Payment rows</span><strong>Custom</strong></div>
              </div>
            </article>

            <article className="zap-card">
              <div className="zap-card-number">03</div>
              <h3>Generate what you need.</h3>
              <p>Create the complete package or pull individual lender-facing documents when that is all the transaction requires.</p>
              <div className="zap-card-visual">
                <div className="zap-mini-row"><span>Full loan package</span><strong>.ZIP</strong></div>
                <div className="zap-mini-row"><span>Lender instructions</span><strong>.DOCX</strong></div>
                <div className="zap-mini-row"><span>Lender disclosure</span><strong>.DOCX</strong></div>
              </div>
            </article>
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

          <div className="zap-doc-stack" aria-hidden="true">
            <div className="zap-doc"><div className="zap-doc-brand">ZAPDOCS</div><div className="zap-doc-title">Lender Disclosure</div><div className="zap-doc-line"/><div className="zap-doc-line mid"/><div className="zap-doc-line"/><div className="zap-doc-line short"/></div>
            <div className="zap-doc"><div className="zap-doc-brand">ZAPDOCS</div><div className="zap-doc-title">Promissory Note</div><div className="zap-doc-line"/><div className="zap-doc-line"/><div className="zap-doc-line mid"/><div className="zap-doc-line short"/></div>
            <div className="zap-doc"><div className="zap-doc-brand">ZAPDOCS</div><div className="zap-doc-title">Deed of Trust</div><div className="zap-doc-line"/><div className="zap-doc-line mid"/><div className="zap-doc-line"/><div className="zap-doc-line"/><div className="zap-doc-line short"/><div className="zap-doc-sign">Borrower signature</div></div>
          </div>
        </div>
      </section>

      <section className="zap-section zap-section-dark" id="outputs">
        <div className="zap-section-inner zap-dark-grid">
          <div>
            <div className="zap-eyebrow">Document output</div>
            <h2>Generate the file that is ready to move forward.</h2>
            <p className="zap-section-lead" style={{ marginLeft: 0, marginTop: 22 }}>
              Keep the current loan data behind each output so document creation becomes a repeatable operation instead of a manual editing project.
            </p>
            <div className="zap-dark-list">
              <div className="zap-dark-item"><span className="zap-dark-check">✓</span><span>Full loan-document package from the active loan record.</span></div>
              <div className="zap-dark-item"><span className="zap-dark-check">✓</span><span>Separate lender instructions when the full package is not needed.</span></div>
              <div className="zap-dark-item"><span className="zap-dark-check">✓</span><span>California lender disclosure generation from the same deal data.</span></div>
            </div>
          </div>

          <div className="zap-output-panel">
            <div className="zap-output-head"><span>Generated documents</span><span className="zap-output-status">Ready</span></div>
            <div className="zap-output-file"><div className="zap-file-icon">ZIP</div><div><div className="zap-file-name">Loan_2026-104_Documents.zip</div><div className="zap-file-meta">Complete package</div></div><div className="zap-file-action">Download</div></div>
            <div className="zap-output-file"><div className="zap-file-icon">DOC</div><div><div className="zap-file-name">Lender_Instructions_Loan_2026-104.docx</div><div className="zap-file-meta">Lender document</div></div><div className="zap-file-action">Download</div></div>
            <div className="zap-output-file"><div className="zap-file-icon">DOC</div><div><div className="zap-file-name">Lender_Disclosure_Loan_2026-104.docx</div><div className="zap-file-meta">California disclosure</div></div><div className="zap-file-action">Download</div></div>
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
          <span>© 2026 ZapDocs</span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const getInitialScreen = () => (window.location.hash === "#app" ? "app" : "landing");
  const [screen, setScreen] = useState(getInitialScreen);

  useEffect(() => {
    const syncFromHash = () => setScreen(window.location.hash === "#app" ? "app" : "landing");
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const openApp = () => {
    window.location.hash = "app";
    setScreen("app");
  };

  if (screen === "app") {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            window.location.hash = "";
            setScreen("landing");
          }}
          style={{
            position: "fixed",
            zIndex: 9999,
            right: 18,
            top: 14,
            border: "1px solid #d6dbe4",
            borderRadius: 999,
            padding: "8px 13px",
            background: "#fff",
            color: "#334155",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(15,23,42,.08)",
          }}
        >
          ← ZapDocs home
        </button>
        <LoanWorkspace />
      </div>
    );
  }

  return <ZapDocsLanding onLaunch={openApp} />;
}

