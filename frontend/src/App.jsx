import { useState, useEffect, useCallback } from "react";
import loanScreen from "./assets/loanscreen.png";
import happyPeople from "./assets/happypeople.webp";

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="zl-page">
      <style>{`
        :root {
          --zl-navy: #080d36;
          --zl-blue: #2f63ff;
          --zl-blue-2: #2455e8;
          --zl-green: #43e19a;
          --zl-green-soft: #d8f7e8;
          --zl-mint: #d7f7e8;
          --zl-ink: #090f38;
          --zl-muted: #59627a;
          --zl-line: #e7e9ef;
          --zl-soft: #f7f8fb;
          --zl-white: #ffffff;
        }

        .zl-page {
          min-height: 100vh;
          background: var(--zl-white);
          color: var(--zl-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        .zl-page * { box-sizing: border-box; }
        .zl-page button { font: inherit; }

        .zl-shell {
          width: min(1380px, calc(100% - 28px));
          margin: 0 auto;
        }

        .zl-topbar {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 22px;
          border-bottom: 0;
          color: #080d36;
          font-size: 14px;
          font-weight: 400;
        }

        .zl-top-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          padding: 4px 0;
        }
        .zl-top-link {
          font-weight: 400 !important;
        }
        .zl-top-link svg {
          flex: 0 0 auto;
        }
        .zl-top-link:hover { color: var(--zl-blue); }

        .zl-topbar-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1002;
          background: rgba(255,255,255,.98);
          backdrop-filter: blur(14px);
        }

        .zl-nav-wrap {
          position: fixed;
          top: 44px;
          left: 0;
          right: 0;
          z-index: 1001;
          background: rgba(255,255,255,.98);
          backdrop-filter: blur(14px);
          border-bottom: 0;
        }

        .zl-page > main {
          padding-top: 148px;
        }

        .zl-page [id] {
          scroll-margin-top: 126px;
        }

        .zl-nav {
          min-height: 104px;
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 0 30px;
        }

        .zl-brand {
          border: 0;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: var(--zl-navy);
          cursor: pointer;
          padding: 0;
          min-width: 220px;
        }

        .zl-logo-mark {
          position: relative;
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
        }

        .zl-logo-mark::before,
        .zl-logo-mark::after {
          content: "";
          position: absolute;
          inset: 0;
          clip-path: polygon(50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%, 0 28%);
        }
        .zl-logo-mark::before { background: var(--zl-blue); }
        .zl-logo-mark::after {
          inset: 12px 11px 12px 11px;
          background: white;
          clip-path: polygon(0 10%, 44% 10%, 74% 28%, 43% 45%, 74% 62%, 74% 89%, 48% 89%, 48% 71%, 0 43%);
        }

        .zl-brand-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: .94;
          letter-spacing: -.045em;
        }
        .zl-brand-copy strong { font-size: 25px; font-weight: 840; }
        .zl-brand-copy span { margin-top: 4px; font-size: 12px; letter-spacing: .06em; color: #5f6780; font-weight: 700; }

        .zl-nav-links {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .zl-nav-link {
          border: 0;
          background: transparent;
          color: #080d36;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700 !important;
          letter-spacing: -0.01em;
          padding: 13px 0;
          white-space: nowrap;
          transition: color .18s ease;
        }
        .zl-nav-link:hover { color: var(--zl-blue); }
        .zl-nav-link:focus,
        .zl-nav-link:focus-visible,
        .zl-top-link:focus,
        .zl-top-link:focus-visible {
          outline: none;
          box-shadow: none;
        }
        .zl-chevron { margin-left: 6px; font-size: 11px; opacity: .7; }

        .zl-nav-cta {
          min-height: 56px;
          border-radius: 999px;
          border: 0;
          background: var(--zl-green);
          color: var(--zl-navy);
          font-size: 16px;
          font-weight: 850;
          padding: 0 30px;
          cursor: pointer;
          white-space: nowrap;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .zl-nav-cta:hover {
          transform: translateY(-2px);
          background: #4be9a1;
          box-shadow: 0 16px 30px rgba(67,225,154,.22);
        }

        .zl-menu-btn {
          display: none;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid var(--zl-line);
          background: #fff;
          color: var(--zl-navy);
          cursor: pointer;
          font-size: 20px;
        }

        .zl-mobile-menu {
          display: none;
        }

        .zl-hero {
          padding: 30px 0 0;
        }

        .zl-hero-frame {
          min-height: 610px;
          display: grid;
          grid-template-columns: 46% 54%;
          overflow: hidden;
          border: 0;
          border-radius: 10px;
          background: #fff;
        }

        .zl-hero-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 74px 44px 72px 74px;
          position: relative;
          z-index: 2;
        }

        .zl-kicker {
          margin: 0 0 26px;
          color: var(--zl-blue);
          font-size: 14px;
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .zl-hero h1 {
          margin: 0;
          max-width: 560px;
          font-size: clamp(46px, 4.5vw, 66px);
          line-height: 1.06;
          letter-spacing: -.047em;
          font-weight: 820;
          color: #070c33;
        }

        .zl-hero-sub {
          margin: 25px 0 0;
          max-width: 590px;
          color: #232947;
          font-size: 17px;
          line-height: 1.55;
        }

        .zl-hero-actions {
          margin-top: 26px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .zl-btn {
          min-height: 52px;
          border-radius: 999px;
          padding: 0 32px;
          font-size: 15px;
          font-weight: 820;
          cursor: pointer;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .zl-btn:hover { transform: translateY(-2px); }
        .zl-btn-primary {
          border: 2px solid var(--zl-green);
          background: var(--zl-green);
          color: var(--zl-navy);
        }
        .zl-btn-primary:hover { box-shadow: 0 14px 30px rgba(67,225,154,.2); }
        .zl-btn-outline {
          border: 2px solid var(--zl-green);
          background: #fff;
          color: var(--zl-navy);
        }
        .zl-btn-outline:hover { background: #f6fffb; }

        .zl-hero-checks {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 22px;
          margin-top: 26px;
          color: #6a7289;
          font-size: 12px;
          font-weight: 700;
        }
        .zl-hero-checks span::before {
          content: "✓";
          color: #1ba969;
          font-weight: 900;
          margin-right: 7px;
        }

        .zl-hero-visual {
          position: relative;
          min-height: 610px;
          overflow: hidden;
          background: linear-gradient(180deg, #ddf9ea 0%, #d4f5e4 100%);
          clip-path: polygon(11% 0, 100% 0, 100% 100%, 16% 100%, 0 52%);
        }

        .zl-hero-visual::before {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          right: -75px;
          top: -110px;
          border-radius: 50%;
          background: rgba(255,255,255,.42);
          filter: blur(2px);
        }

        .zl-product-window {
          position: absolute;
          left: 14%;
          top: 96px;
          width: 74%;
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(8,13,54,.08);
          box-shadow: 0 30px 70px rgba(24,50,48,.2);
          transform: translateZ(0);
          animation: zlFloat 6s ease-in-out infinite;
        }

        @keyframes zlFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .zl-window-bar {
          height: 38px;
          background: #f7f8fb;
          border-bottom: 1px solid #e7e9ee;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px;
        }
        .zl-window-dot { width: 7px; height: 7px; border-radius: 50%; background: #c9ced9; }
        .zl-window-url {
          margin-left: 10px;
          flex: 1;
          height: 22px;
          border-radius: 6px;
          background: #fff;
          border: 1px solid #e3e6eb;
          color: #9aa1b0;
          font-size: 9px;
          display: flex;
          align-items: center;
          padding: 0 9px;
        }

        .zl-app-preview {
          display: grid;
          grid-template-columns: 120px 1fr;
          min-height: 388px;
          background: #fafbfc;
        }
        .zl-preview-side {
          background: #0b123e;
          color: #fff;
          padding: 17px 12px;
        }
        .zl-preview-logo { font-size: 12px; font-weight: 850; margin-bottom: 18px; }
        .zl-preview-new {
          padding: 8px 9px;
          border-radius: 8px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.14);
          font-size: 8px;
        }
        .zl-preview-loan {
          margin-top: 8px;
          padding: 8px;
          border-radius: 8px;
          background: rgba(70,109,255,.22);
          color: #e5ebff;
          font-size: 8px;
        }
        .zl-preview-loan.dim { opacity: .42; }

        .zl-preview-main { padding: 17px; }
        .zl-preview-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 13px;
        }
        .zl-preview-title { font-size: 13px; font-weight: 850; letter-spacing: -.02em; }
        .zl-preview-sub { margin-top: 3px; color: #8992a3; font-size: 8px; }
        .zl-preview-state {
          padding: 5px 7px;
          border-radius: 999px;
          background: #e8edff;
          color: #2d56cb;
          font-size: 7px;
          font-weight: 850;
        }
        .zl-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .zl-preview-card {
          background: #fff;
          border: 1px solid #e6e8ed;
          border-radius: 10px;
          padding: 10px;
        }
        .zl-preview-label {
          color: #697287;
          font-size: 7px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .06em;
          margin-bottom: 7px;
        }
        .zl-preview-input {
          height: 22px;
          border: 1px solid #e2e5ea;
          border-radius: 6px;
          background: #fbfbfc;
          display: flex;
          align-items: center;
          padding: 0 7px;
          margin-top: 5px;
          color: #303750;
          font-size: 7px;
        }
        .zl-preview-actions {
          display: flex;
          justify-content: flex-end;
          gap: 7px;
          margin-top: 11px;
          padding-top: 11px;
          border-top: 1px solid #eceef2;
        }
        .zl-preview-save,
        .zl-preview-generate {
          height: 25px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          padding: 0 9px;
          font-size: 7px;
          font-weight: 800;
        }
        .zl-preview-save { background: #f0f1f4; color: #6e7688; }
        .zl-preview-generate { background: var(--zl-blue); color: white; }

        .zl-floating-card {
          position: absolute;
          z-index: 3;
          background: white;
          border: 1px solid rgba(8,13,54,.07);
          box-shadow: 0 20px 50px rgba(26,61,47,.17);
          border-radius: 13px;
        }
        .zl-float-output {
          right: 7%;
          bottom: 56px;
          width: 235px;
          padding: 18px;
          animation: zlFloat2 7s ease-in-out infinite;
        }
        @keyframes zlFloat2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .zl-float-kicker { color: #8b92a2; font-size: 8px; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
        .zl-float-title { margin-top: 12px; font-size: 12px; font-weight: 850; }
        .zl-donut {
          width: 95px;
          height: 95px;
          margin: 16px auto 4px;
          border-radius: 50%;
          background: conic-gradient(var(--zl-blue) 0 64%, #a848f4 64% 100%);
          position: relative;
        }
        .zl-donut::after {
          content: "";
          position: absolute;
          inset: 24px;
          border-radius: 50%;
          background: white;
        }
        .zl-float-badge {
          position: absolute;
          left: 5.5%;
          top: 48px;
          padding: 11px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(8,13,54,.07);
          box-shadow: 0 12px 30px rgba(25,61,47,.12);
          color: #1b7651;
          font-size: 11px;
          font-weight: 820;
        }
        .zl-float-badge::before { content: "●"; color: #22bd78; margin-right: 7px; }

        .zl-trust {
          padding: 48px 0 78px;
          background: #fff;
        }
        .zl-trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: stretch;
          background: #fff;
        }
        .zl-trust-cell {
          min-height: 126px;
          padding: 8px 34px 4px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid #e3e6ec;
        }
        .zl-trust-cell:first-child { border-left: 0; }

        .zl-stat-number {
          margin: 0 0 7px;
          font-size: clamp(48px, 4.7vw, 68px);
          line-height: .94;
          font-weight: 760;
          letter-spacing: -.055em;
        }
        .zl-trust-cell:nth-child(1) .zl-stat-number { color: #2867ff; }
        .zl-trust-cell:nth-child(2) .zl-stat-number { color: #10cbd5; }
        .zl-trust-cell:nth-child(3) .zl-stat-number { color: #bd47f2; }
        .zl-trust-cell:nth-child(4) .zl-stat-number { color: #ff735f; }

        .zl-stat-label {
          color: #080d36;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 800;
          letter-spacing: -.015em;
        }

        .zl-connect {
          padding: 96px 0 110px;
          background: #fff;
        }

        .zl-connect-grid {
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: 86px;
          align-items: center;
        }

        .zl-connect-media {
          position: relative;
          min-height: 560px;
        }

        .zl-connect-photo-wrap {
          position: absolute;
          inset: 0 64px 54px 0;
          overflow: hidden;
          border-radius: 22px;
          background: #eef2f5;
          box-shadow: 0 22px 55px rgba(8,13,54,.11);
        }

        .zl-connect-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .zl-connect-shape {
          position: absolute;
          width: 92px;
          height: 92px;
          right: 20px;
          top: 260px;
          background: #10cbd5;
          clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          transform: rotate(7deg);
        }

        .zl-connect-card {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 310px;
          padding: 20px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 18px 45px rgba(8,13,54,.16);
        }

        .zl-connect-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 15px;
        }

        .zl-connect-card-head strong {
          color: var(--zl-navy);
          font-size: 13px;
        }

        .zl-connect-ready {
          padding: 5px 8px;
          border-radius: 999px;
          background: #ddf6e9;
          color: #18754c;
          font-size: 9px;
          font-weight: 850;
        }

        .zl-connect-card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border-top: 1px solid #eceef3;
          color: #5e677c;
          font-size: 11px;
        }

        .zl-connect-card-row strong {
          color: var(--zl-navy);
          font-size: 11px;
        }

        .zl-connect-copy h2 {
          margin: 0;
          max-width: 650px;
          font-size: clamp(42px, 4.2vw, 62px);
          line-height: 1.06;
          letter-spacing: -.048em;
        }

        .zl-connect-copy > p {
          margin: 22px 0 0;
          max-width: 620px;
          color: #59627a;
          font-size: 17px;
          line-height: 1.65;
        }

        .zl-connect-list {
          display: grid;
          gap: 17px;
          margin: 27px 0 30px;
        }

        .zl-connect-item {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 12px;
          align-items: start;
          color: #182044;
          font-size: 16px;
          line-height: 1.5;
        }

        .zl-connect-check {
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          color: var(--zl-navy);
          font-size: 17px;
          font-weight: 900;
        }

        .zl-connect-btn {
          min-height: 52px;
          border: 0;
          border-radius: 999px;
          padding: 0 28px;
          background: var(--zl-green);
          color: var(--zl-navy);
          font-size: 15px;
          font-weight: 820;
          cursor: pointer;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .zl-connect-btn:hover {
          transform: translateY(-2px);
          background: #4be9a1;
          box-shadow: 0 14px 30px rgba(67,225,154,.2);
        }

        .zl-section {
          padding: 104px 0;
        }
        .zl-section-soft { background: #f7f8fa; }
        .zl-section-dark { background: #090f38; color: white; }
        .zl-section-inner { width: min(1220px, calc(100% - 40px)); margin: 0 auto; }

        .zl-section-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 54px;
          align-items: end;
          margin-bottom: 48px;
        }
        .zl-eyebrow {
          color: var(--zl-blue);
          font-size: 13px;
          font-weight: 850;
          letter-spacing: .13em;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .zl-section h2 {
          margin: 0;
          font-size: clamp(40px, 4.3vw, 60px);
          line-height: 1.04;
          letter-spacing: -.045em;
          max-width: 700px;
        }
        .zl-section-lead {
          margin: 0 0 2px auto;
          max-width: 560px;
          color: #626b80;
          font-size: 16px;
          line-height: 1.7;
        }

        .zl-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .zl-feature-card {
          min-height: 338px;
          padding: 30px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid var(--zl-line);
          box-shadow: 0 10px 30px rgba(8,13,54,.035);
          display: flex;
          flex-direction: column;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .zl-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 48px rgba(8,13,54,.08);
        }
        .zl-feature-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: var(--zl-blue);
          font-size: 18px;
          font-weight: 900;
        }
        .zl-feature-card h3 { margin: 27px 0 10px; font-size: 24px; letter-spacing: -.03em; }
        .zl-feature-card p { margin: 0; color: #657086; font-size: 14px; line-height: 1.65; }
        .zl-mini-ui { margin-top: auto; padding-top: 24px; }
        .zl-mini-row {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: center;
          margin-top: 7px;
          padding: 10px 11px;
          border: 1px solid #e7e9ee;
          border-radius: 9px;
          background: #fbfbfc;
          font-size: 10px;
          color: #4d566d;
        }
        .zl-mini-tag {
          padding: 4px 6px;
          border-radius: 999px;
          background: #ddf6e9;
          color: #18754c;
          font-weight: 850;
        }

        .zl-workflow {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 72px;
          align-items: center;
        }
        .zl-workflow-list { margin-top: 30px; }
        .zl-workflow-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 16px;
          padding: 19px 0;
          border-bottom: 1px solid #e4e6eb;
        }
        .zl-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--zl-green);
          color: var(--zl-navy);
          font-size: 12px;
          font-weight: 900;
        }
        .zl-workflow-item strong { display: block; font-size: 16px; margin-bottom: 5px; }
        .zl-workflow-item span { color: #667085; font-size: 13px; line-height: 1.55; }

        .zl-doc-stage {
          min-height: 500px;
          border-radius: 30px;
          background: var(--zl-mint);
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
        }
        .zl-doc-stage::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          top: -90px;
          right: -30px;
          background: rgba(255,255,255,.5);
        }
        .zl-paper {
          position: absolute;
          width: 310px;
          min-height: 400px;
          border-radius: 12px;
          border: 1px solid rgba(8,13,54,.09);
          background: #fff;
          box-shadow: 0 25px 55px rgba(39,71,59,.16);
          padding: 28px;
        }
        .zl-paper:nth-child(1) { transform: rotate(-8deg) translate(-57px, 15px); opacity: .72; }
        .zl-paper:nth-child(2) { transform: rotate(7deg) translate(63px, 20px); opacity: .8; }
        .zl-paper:nth-child(3) { z-index: 2; }
        .zl-paper-brand { color: var(--zl-blue); font-size: 9px; font-weight: 900; letter-spacing: .12em; }
        .zl-paper-title { margin-top: 32px; font-size: 22px; font-weight: 850; letter-spacing: -.03em; }
        .zl-paper-line { height: 7px; border-radius: 999px; background: #e8eaf0; margin-top: 13px; }
        .zl-paper-line.mid { width: 82%; }
        .zl-paper-line.short { width: 58%; }
        .zl-paper-sign { width: 55%; margin-top: 55px; border-top: 1px solid #c7cbd5; padding-top: 7px; color: #8a91a1; font-size: 8px; }

        .zl-dark-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }
        .zl-section-dark .zl-eyebrow { color: #6e95ff; }
        .zl-section-dark .zl-section-lead { color: #b7bfd1; margin-left: 0; margin-top: 22px; }
        .zl-dark-list { margin-top: 28px; display: grid; gap: 13px; }
        .zl-dark-item { display: grid; grid-template-columns: 28px 1fr; gap: 12px; color: #d7dceb; font-size: 14px; line-height: 1.55; }
        .zl-dark-check {
          width: 24px;
          height: 24px;
          border-radius: 7px;
          display: grid;
          place-items: center;
          background: rgba(67,225,154,.13);
          color: var(--zl-green);
          font-size: 12px;
          font-weight: 900;
        }

        .zl-output-panel {
          border-radius: 20px;
          background: #fff;
          color: var(--zl-ink);
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(0,0,0,.25);
        }
        .zl-output-head {
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e8eaf0;
          font-size: 13px;
          font-weight: 850;
        }
        .zl-ready {
          padding: 5px 8px;
          border-radius: 999px;
          background: #ddf6e9;
          color: #18754c;
          font-size: 9px;
          font-weight: 850;
        }
        .zl-file-row {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          gap: 12px;
          align-items: center;
          padding: 17px 22px;
          border-bottom: 1px solid #eceef2;
        }
        .zl-file-row:last-child { border-bottom: 0; }
        .zl-file-icon {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: var(--zl-blue);
          font-size: 9px;
          font-weight: 900;
        }
        .zl-file-name { font-size: 11px; font-weight: 800; }
        .zl-file-meta { margin-top: 3px; color: #9198a8; font-size: 9px; }
        .zl-file-action { color: var(--zl-blue); font-size: 9px; font-weight: 850; }

        .zl-final {
          padding: 92px 0;
          background: #fff;
        }

        .zl-final-box {
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
          min-height: 390px;
          border-radius: 10px;
          background: #0b0d3b;
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 62px 210px;
          box-shadow: 0 24px 60px rgba(8,13,54,.14);
        }

        .zl-final-shape {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 240px;
          pointer-events: none;
        }

        .zl-final-shape-left {
          left: 0;
          background: linear-gradient(180deg, #cc72f7 0%, #b958ec 100%);
          clip-path: polygon(0 0, 78% 0, 100% 21%, 77% 82%, 0 91%);
        }

        .zl-final-shape-right {
          right: 0;
          background: linear-gradient(180deg, #2968ff 0%, #2d5df0 100%);
          clip-path: polygon(42% 0, 100% 0, 100% 100%, 20% 100%, 0 58%);
        }

        .zl-final-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .zl-final-kicker {
          margin-bottom: 14px;
          color: #89a7ff;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .zl-final h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(42px, 4.6vw, 64px);
          line-height: 1.02;
          letter-spacing: -.05em;
        }

        .zl-final p {
          margin: 20px auto 0;
          max-width: 660px;
          color: #c7cde0;
          font-size: 17px;
          line-height: 1.6;
        }

        .zl-trial-btn {
          min-height: 54px;
          margin-top: 30px;
          border: 0;
          border-radius: 999px;
          padding: 0 32px;
          background: var(--zl-green);
          color: #071034;
          font-size: 16px;
          font-weight: 850;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(67,225,154,.22);
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .zl-trial-btn:hover {
          transform: translateY(-2px);
          background: #4be9a1;
          box-shadow: 0 18px 38px rgba(67,225,154,.3);
        }

        .zl-trial-note {
          margin-top: 12px;
          color: #8f98b5;
          font-size: 12px;
          font-weight: 650;
        }

        .zl-footer {
          background: #fff;
          color: var(--zl-navy);
          padding: 0;
        }

        .zl-footer-main {
          width: min(1280px, calc(100% - 56px));
          margin: 0 auto;
          padding: 42px 0 54px;
          border-top: 1px solid #cfd4df;
          display: grid;
          grid-template-columns: 190px repeat(5, minmax(120px, 1fr));
          gap: 38px;
          align-items: start;
        }

        .zl-footer-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .zl-footer-trial {
          min-height: 48px;
          border-radius: 999px;
          padding: 0 28px;
          border: 2px solid var(--zl-green);
          background: #fff;
          color: var(--zl-navy);
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: background .18s ease, transform .18s ease;
        }

        .zl-footer-trial:hover {
          background: #f3fff9;
          transform: translateY(-1px);
        }

        .zl-footer-cta-note {
          color: #4d5870;
          font-size: 14px;
          line-height: 1.5;
        }

        .zl-footer-col h4 {
          margin: 0 0 22px;
          color: var(--zl-navy);
          font-size: 16px;
          line-height: 1.2;
          font-weight: 800;
        }

        .zl-footer-links {
          display: grid;
          gap: 16px;
        }

        .zl-footer-link {
          border: 0;
          background: transparent;
          padding: 0;
          text-align: left;
          color: #17203f;
          font: inherit;
          font-size: 14px;
          line-height: 1.25;
          cursor: pointer;
        }

        .zl-footer-link:hover {
          color: var(--zl-blue);
        }

        .zl-footer-bottom {
          border-top: 1px solid #d9dde6;
        }

        .zl-footer-bottom-inner {
          width: min(1280px, calc(100% - 56px));
          min-height: 68px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #17203f;
          font-size: 13px;
        }

        .zl-footer-legal {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .zl-footer-legal button {
          border: 0;
          background: transparent;
          padding: 0;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }

        .zl-footer-legal button:hover {
          color: var(--zl-blue);
        }

        .zl-footer-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .zl-social {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border: 0;
          background: transparent;
          color: var(--zl-navy);
          padding: 0;
          cursor: pointer;
        }

        .zl-social svg {
          width: 21px;
          height: 21px;
        }

        .zl-social:hover {
          color: var(--zl-blue);
        }

        @media (max-width: 1120px) {
          .zl-nav-links { gap: 20px; }
          .zl-brand { min-width: 185px; }
          .zl-brand-copy strong { font-size: 22px; }
          .zl-hero-copy { padding-left: 52px; }
          .zl-product-window { left: 12%; width: 79%; }
        }

        @media (max-width: 1120px) {
          .zl-footer-main {
            grid-template-columns: 170px repeat(3, 1fr);
          }
          .zl-footer-col:nth-of-type(5),
          .zl-footer-col:nth-of-type(6) {
            margin-top: 8px;
          }
        }

        @media (max-width: 930px) {
          .zl-topbar-wrap { display: none; }
          .zl-topbar { display: none; }
          .zl-nav-wrap { top: 0; }
          .zl-page > main { padding-top: 82px; }
          .zl-page [id] { scroll-margin-top: 78px; }
          .zl-nav { min-height: 82px; padding: 0 18px; }
          .zl-nav-links, .zl-nav-cta { display: none; }
          .zl-menu-btn { display: grid; place-items: center; margin-left: auto; }
          .zl-mobile-menu {
            display: grid;
            position: absolute;
            top: 82px;
            left: 14px;
            right: 14px;
            gap: 4px;
            padding: 12px;
            border: 1px solid var(--zl-line);
            border-radius: 14px;
            background: #fff;
            box-shadow: 0 24px 50px rgba(8,13,54,.13);
          }
          .zl-mobile-menu .zl-nav-link { width: 100%; text-align: left; padding: 12px; }
          .zl-mobile-menu .zl-nav-cta { display: block; width: 100%; margin-top: 6px; }
          .zl-hero { padding-top: 16px; }
          .zl-hero-frame { grid-template-columns: 1fr; }
          .zl-hero-copy { padding: 64px 42px 56px; }
          .zl-hero-visual { min-height: 560px; clip-path: none; }
          .zl-trust-inner { grid-template-columns: 1fr 1fr; }
          .zl-trust-cell { border-top: 1px solid #e3e6ec; }
          .zl-trust-cell:nth-child(odd) { border-left: 0; }
          .zl-trust-cell:nth-child(-n+2) { border-top: 0; }
          .zl-connect-grid { grid-template-columns: 1fr; gap: 52px; }
          .zl-connect-media { min-height: 530px; }
          .zl-connect-photo-wrap { inset: 0 50px 44px 0; }
          .zl-connect-copy { max-width: 760px; }
          .zl-section-head, .zl-workflow, .zl-dark-grid { grid-template-columns: 1fr; }
          .zl-section-lead { margin-left: 0; }
          .zl-feature-grid { grid-template-columns: 1fr; }
          .zl-final-box {
            min-height: 360px;
            padding: 56px 150px;
          }
          .zl-final-shape { width: 190px; }
        }

        @media (max-width: 620px) {
          .zl-shell { width: min(100% - 12px, 1380px); }
          .zl-nav { padding: 0 12px; }
          .zl-brand { min-width: 0; }
          .zl-logo-mark { width: 42px; height: 42px; }
          .zl-brand-copy strong { font-size: 20px; }
          .zl-brand-copy span { display: none; }
          .zl-hero-frame { border-radius: 8px; }
          .zl-hero-copy { padding: 50px 24px 48px; }
          .zl-kicker { font-size: 11px; margin-bottom: 19px; }
          .zl-hero h1 { font-size: clamp(43px, 13vw, 58px); }
          .zl-hero-sub { font-size: 16px; }
          .zl-btn { width: 100%; }
          .zl-hero-visual { min-height: 470px; }
          .zl-product-window { top: 72px; left: 6%; width: 88%; }
          .zl-app-preview { grid-template-columns: 1fr; min-height: 330px; }
          .zl-preview-side { display: none; }
          .zl-preview-grid { grid-template-columns: 1fr; }
          .zl-floating-card.zl-float-output { width: 190px; right: 4%; bottom: 28px; padding: 13px; }
          .zl-float-badge { left: 4%; top: 32px; font-size: 9px; }
          .zl-trust { padding: 34px 0 54px; }
          .zl-trust-inner { grid-template-columns: 1fr; }
          .zl-trust-cell {
            min-height: 108px;
            padding: 20px 24px;
            border-left: 0;
            border-top: 1px solid #e3e6ec !important;
          }
          .zl-trust-cell:first-child { border-top: 0 !important; }
          .zl-stat-number { font-size: 52px; }
          .zl-stat-label { font-size: 16px; }
          .zl-connect { padding: 66px 0 76px; }
          .zl-connect-grid { width: min(100% - 28px, 1220px); gap: 38px; }
          .zl-connect-media { min-height: 430px; }
          .zl-connect-photo-wrap { inset: 0 24px 44px 0; border-radius: 18px; }
          .zl-connect-card { width: min(280px, 86%); padding: 16px; }
          .zl-connect-shape { width: 68px; height: 68px; right: 6px; top: 225px; }
          .zl-connect-copy h2 { font-size: clamp(38px, 11vw, 50px); }
          .zl-connect-copy > p { font-size: 16px; }
          .zl-connect-item { font-size: 15px; }
          .zl-connect-btn { width: 100%; }
          .zl-section { padding: 76px 0; }
          .zl-section-inner { width: min(100% - 28px, 1220px); }
          .zl-section-head { gap: 22px; }
          .zl-doc-stage { min-height: 410px; }
          .zl-paper { width: 240px; min-height: 320px; padding: 22px; }
          .zl-final { padding: 64px 0; }
          .zl-final-box {
            width: min(100% - 28px, 1220px);
            min-height: 390px;
            padding: 48px 30px;
          }
          .zl-final-shape { width: 105px; opacity: .82; }
          .zl-final-content { max-width: 560px; }
          .zl-final h2 { font-size: clamp(38px, 11vw, 52px); }
          .zl-final p { font-size: 15px; }
          .zl-trial-btn { width: 100%; max-width: 290px; }
          .zl-footer-main {
            width: min(100% - 28px, 1280px);
            grid-template-columns: 1fr 1fr;
            gap: 34px 26px;
            padding: 38px 0 44px;
          }
          .zl-footer-cta { grid-column: 1 / -1; }
          .zl-footer-bottom-inner {
            width: min(100% - 28px, 1280px);
            min-height: 0;
            padding: 24px 0;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zl-product-window, .zl-float-output { animation: none; }
          .zl-btn, .zl-nav-cta, .zl-feature-card { transition: none; }
        }
      `}</style>

      <div className="zl-topbar-wrap">
        <div className="zl-shell">
          <div className="zl-topbar">
            <button className="zl-top-link" onClick={onLaunch}>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="3.2" />
                <path d="M5.5 19c.8-3.5 3.1-5.3 6.5-5.3s5.7 1.8 6.5 5.3" />
              </svg>
              <span>Login</span>
            </button>
            <button className="zl-top-link" onClick={() => scrollTo("platform")}>⌕ <span>Search</span></button>
          </div>
        </div>
      </div>

      <div className="zl-nav-wrap">
        <div className="zl-shell">
          <nav className="zl-nav">
            <button className="zl-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="zl-logo-mark" aria-hidden="true" />
              <span className="zl-brand-copy"><strong>ZapDocs</strong><span>LOAN DOCUMENTS</span></span>
            </button>

            <div className="zl-nav-links">
              <button className="zl-nav-link" onClick={() => scrollTo("platform")}>Platform <span className="zl-chevron">⌄</span></button>
              <button className="zl-nav-link" onClick={() => scrollTo("workflow")}>Documents</button>
              <button className="zl-nav-link" onClick={() => scrollTo("outputs")}>Lenders <span className="zl-chevron">⌄</span></button>
              <button className="zl-nav-link" onClick={() => scrollTo("workflow")}>Resources <span className="zl-chevron">⌄</span></button>
              <button className="zl-nav-link" onClick={() => scrollTo("final")}>Company <span className="zl-chevron">⌄</span></button>
            </div>

            <button className="zl-nav-cta" onClick={onLaunch}>Open ZapDocs</button>
            <button className="zl-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">☰</button>

            {menuOpen && (
              <div className="zl-mobile-menu">
                <button className="zl-nav-link" onClick={() => scrollTo("platform")}>Platform</button>
                <button className="zl-nav-link" onClick={() => scrollTo("workflow")}>Documents</button>
                <button className="zl-nav-link" onClick={() => scrollTo("outputs")}>Lenders</button>
                <button className="zl-nav-link" onClick={() => scrollTo("workflow")}>Resources</button>
                <button className="zl-nav-cta" onClick={onLaunch}>Open ZapDocs</button>
              </div>
            )}
          </nav>
        </div>
      </div>

      <main>
        <section className="zl-hero">
          <div className="zl-shell">
            <div className="zl-hero-frame">
              <div className="zl-hero-copy">
                <p className="zl-kicker">Accurate, fast, and repeatable</p>
                <h1>The loan document platform for private lenders.</h1>
                <p className="zl-hero-sub">
                  Turn one set of loan data into a clean, consistent closing package — without rebuilding the same documents deal after deal.
                </p>
                <div className="zl-hero-actions">
                  <button className="zl-btn zl-btn-primary" onClick={onLaunch}>Start a loan</button>
                  <button className="zl-btn zl-btn-outline" onClick={() => scrollTo("platform")}>Explore the platform</button>
                </div>
                <div className="zl-hero-checks">
                  <span>Florida + California</span>
                  <span>Reusable loan records</span>
                  <span>Word + ZIP outputs</span>
                </div>
              </div>

              <div className="zl-hero-visual" aria-label="ZapDocs product preview">
                <div className="zl-float-badge">Loan ready to generate</div>
                <div className="zl-product-window">
                  <div className="zl-window-bar">
                    <span className="zl-window-dot" /><span className="zl-window-dot" /><span className="zl-window-dot" />
                    <div className="zl-window-url">app.zapdocs.com / loans</div>
                  </div>
                  <img
                    src={loanScreen}
                    alt="Actual ZapDocs loan workspace"
                    style={{
                      width: "100%",
                      display: "block",
                      height: "auto",
                      background: "#fff",
                    }}
                  />
                </div>

                <div className="zl-floating-card zl-float-output">
                  <div className="zl-float-kicker">Document package</div>
                  <div className="zl-float-title">Generated outputs</div>
                  <div className="zl-donut" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="zl-trust" aria-label="ZapDocs platform statistics">
          <div className="zl-shell">
            <div className="zl-trust-inner">
              <div className="zl-trust-cell">
                <div className="zl-stat-number">2</div>
                <div className="zl-stat-label">State-specific lending workflows</div>
              </div>
              <div className="zl-trust-cell">
                <div className="zl-stat-number">50+</div>
                <div className="zl-stat-label">Loan data fields in one workspace</div>
              </div>
              <div className="zl-trust-cell">
                <div className="zl-stat-number">3</div>
                <div className="zl-stat-label">Document generation options</div>
              </div>
              <div className="zl-trust-cell">
                <div className="zl-stat-number">1</div>
                <div className="zl-stat-label">Reusable loan record per deal</div>
              </div>
            </div>
          </div>
        </section>

        <section className="zl-connect" id="teams">
          <div className="zl-connect-grid">
            <div className="zl-connect-media">
              <div className="zl-connect-photo-wrap">
                <img
                  className="zl-connect-photo"
                  src={happyPeople}
                  alt="Business professionals reviewing a deal together"
                />
              </div>

              <div className="zl-connect-shape" aria-hidden="true" />

              <div className="zl-connect-card">
                <div className="zl-connect-card-head">
                  <strong>Active loan file</strong>
                  <span className="zl-connect-ready">Ready</span>
                </div>
                <div className="zl-connect-card-row"><span>Loan record</span><strong>Saved</strong></div>
                <div className="zl-connect-card-row"><span>State workflow</span><strong>Selected</strong></div>
                <div className="zl-connect-card-row"><span>Document package</span><strong>Generate</strong></div>
              </div>
            </div>

            <div className="zl-connect-copy">
              <div className="zl-eyebrow">Built for private lending teams</div>
              <h2>Keep every deal, party, and document connected.</h2>
              <p>
                ZapDocs keeps the information behind a private loan in one structured workspace,
                so your team can move from deal terms to finished documents without rebuilding
                the same file over and over.
              </p>

              <div className="zl-connect-list">
                <div className="zl-connect-item"><span className="zl-connect-check">✓</span><span>Reuse one saved loan record instead of retyping the same terms into every document.</span></div>
                <div className="zl-connect-item"><span className="zl-connect-check">✓</span><span>Switch between Florida and California document workflows from the same interface.</span></div>
                <div className="zl-connect-item"><span className="zl-connect-check">✓</span><span>Generate a complete package or the lender-facing document you need for the transaction.</span></div>
                <div className="zl-connect-item"><span className="zl-connect-check">✓</span><span>Return to a saved deal, update the data, and regenerate documents when terms change.</span></div>
              </div>

              <button className="zl-connect-btn" onClick={() => scrollTo("platform")}>Explore the platform</button>
            </div>
          </div>
        </section>

        <section className="zl-section zl-section-soft" id="platform">
          <div className="zl-section-inner">
            <div className="zl-section-head">
              <div><div className="zl-eyebrow">The ZapDocs platform</div><h2>Document preparation without the repetitive work.</h2></div>
              <p className="zl-section-lead">Keep the data your documents depend on in one place, then generate the right set of files from that same record whenever the deal changes.</p>
            </div>

            <div className="zl-feature-grid">
              <article className="zl-feature-card">
                <div className="zl-feature-icon">01</div>
                <h3>Capture the deal once.</h3>
                <p>Store loan terms, dates, property information, borrower details, lender data and payment schedules together.</p>
                <div className="zl-mini-ui"><div className="zl-mini-row"><span>Loan Amount</span><strong>$425,000</strong></div><div className="zl-mini-row"><span>Interest Rate</span><strong>9.50%</strong></div><div className="zl-mini-row"><span>Property State</span><strong>CA</strong></div></div>
              </article>
              <article className="zl-feature-card">
                <div className="zl-feature-icon">02</div>
                <h3>Match the loan.</h3>
                <p>Switch between state workflows and maintain custom payment schedules without rebuilding the file from scratch.</p>
                <div className="zl-mini-ui"><div className="zl-mini-row"><span>California</span><span className="zl-mini-tag">Deed of Trust</span></div><div className="zl-mini-row"><span>Florida</span><span className="zl-mini-tag">Mortgage</span></div><div className="zl-mini-row"><span>Payment rows</span><strong>Custom</strong></div></div>
              </article>
              <article className="zl-feature-card">
                <div className="zl-feature-icon">03</div>
                <h3>Generate the package.</h3>
                <p>Create the complete package or pull the specific lender-facing documents your transaction needs.</p>
                <div className="zl-mini-ui"><div className="zl-mini-row"><span>Full loan package</span><strong>.ZIP</strong></div><div className="zl-mini-row"><span>Lender instructions</span><strong>.DOCX</strong></div><div className="zl-mini-row"><span>Lender disclosure</span><strong>.DOCX</strong></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="zl-section" id="workflow">
          <div className="zl-section-inner zl-workflow">
            <div>
              <div className="zl-eyebrow">A cleaner workflow</div>
              <h2>From loan terms to closing docs in three steps.</h2>
              <div className="zl-workflow-list">
                <div className="zl-workflow-item"><div className="zl-step">1</div><div><strong>Create the loan record</strong><span>Name the file, choose the state and keep the transaction organized from the start.</span></div></div>
                <div className="zl-workflow-item"><div className="zl-step">2</div><div><strong>Complete the deal fields</strong><span>Add terms, parties, property details, disclosures and the payment schedule in one structured workspace.</span></div></div>
                <div className="zl-workflow-item"><div className="zl-step">3</div><div><strong>Generate the documents</strong><span>Save the current loan data and produce the output package that matches the file.</span></div></div>
              </div>
            </div>

            <div className="zl-doc-stage" aria-hidden="true">
              <div className="zl-paper"><div className="zl-paper-brand">ZAPDOCS</div><div className="zl-paper-title">Lender Disclosure</div><div className="zl-paper-line"/><div className="zl-paper-line mid"/><div className="zl-paper-line"/><div className="zl-paper-line short"/></div>
              <div className="zl-paper"><div className="zl-paper-brand">ZAPDOCS</div><div className="zl-paper-title">Promissory Note</div><div className="zl-paper-line"/><div className="zl-paper-line"/><div className="zl-paper-line mid"/><div className="zl-paper-line short"/></div>
              <div className="zl-paper"><div className="zl-paper-brand">ZAPDOCS</div><div className="zl-paper-title">Deed of Trust</div><div className="zl-paper-line"/><div className="zl-paper-line mid"/><div className="zl-paper-line"/><div className="zl-paper-line"/><div className="zl-paper-line short"/><div className="zl-paper-sign">Borrower signature</div></div>
            </div>
          </div>
        </section>

        <section className="zl-section zl-section-dark" id="outputs">
          <div className="zl-section-inner zl-dark-grid">
            <div>
              <div className="zl-eyebrow">Document output</div>
              <h2>Generate the file that is ready to move forward.</h2>
              <p className="zl-section-lead">The latest loan data stays behind each output, so document creation becomes a repeatable operation instead of a manual editing project.</p>
              <div className="zl-dark-list">
                <div className="zl-dark-item"><span className="zl-dark-check">✓</span><span>Full loan-document package from the active loan record.</span></div>
                <div className="zl-dark-item"><span className="zl-dark-check">✓</span><span>Separate lender instructions when the full package is not needed.</span></div>
                <div className="zl-dark-item"><span className="zl-dark-check">✓</span><span>California lender disclosure generation from the same deal data.</span></div>
              </div>
            </div>

            <div className="zl-output-panel">
              <div className="zl-output-head"><span>Generated documents</span><span className="zl-ready">Ready</span></div>
              <div className="zl-file-row"><div className="zl-file-icon">ZIP</div><div><div className="zl-file-name">Loan_2026-104_Documents.zip</div><div className="zl-file-meta">Complete package</div></div><div className="zl-file-action">Download</div></div>
              <div className="zl-file-row"><div className="zl-file-icon">DOC</div><div><div className="zl-file-name">Lender_Instructions_Loan_2026-104.docx</div><div className="zl-file-meta">Lender document</div></div><div className="zl-file-action">Download</div></div>
              <div className="zl-file-row"><div className="zl-file-icon">DOC</div><div><div className="zl-file-name">Lender_Disclosure_Loan_2026-104.docx</div><div className="zl-file-meta">California disclosure</div></div><div className="zl-file-action">Download</div></div>
            </div>
          </div>
        </section>

        <section className="zl-final" id="final">
          <div className="zl-final-box">
            <div className="zl-final-shape zl-final-shape-left" aria-hidden="true" />
            <div className="zl-final-shape zl-final-shape-right" aria-hidden="true" />

            <div className="zl-final-content">
              <div className="zl-final-kicker">Ready to simplify your closing workflow?</div>
              <h2>Generate your next loan package with ZapDocs.</h2>
              <p>
                Start with one loan record, keep the deal organized, and generate the documents
                you need without rebuilding the same file from scratch.
              </p>
              <button className="zl-trial-btn" onClick={onLaunch}>Start Free Trial</button>
              <div className="zl-trial-note">Open the workspace and create your first loan.</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="zl-footer">
        <div className="zl-footer-main">
          <div className="zl-footer-cta">
            <button className="zl-footer-trial" onClick={onLaunch}>Start Free Trial</button>
            <div className="zl-footer-cta-note">
              Build your first loan record and see the document workflow in action.
            </div>
          </div>

          <div className="zl-footer-col">
            <h4>Platform</h4>
            <div className="zl-footer-links">
              <button className="zl-footer-link" onClick={() => scrollTo("platform")}>Product overview</button>
              <button className="zl-footer-link" onClick={() => scrollTo("workflow")}>Loan workflow</button>
              <button className="zl-footer-link" onClick={() => scrollTo("outputs")}>Document generation</button>
              <button className="zl-footer-link" onClick={() => scrollTo("teams")}>Team workspace</button>
            </div>
          </div>

          <div className="zl-footer-col">
            <h4>Solutions</h4>
            <div className="zl-footer-links">
              <button className="zl-footer-link" onClick={() => scrollTo("teams")}>Private lenders</button>
              <button className="zl-footer-link" onClick={() => scrollTo("teams")}>Loan originators</button>
              <button className="zl-footer-link" onClick={() => scrollTo("teams")}>Servicing teams</button>
              <button className="zl-footer-link" onClick={() => scrollTo("teams")}>Broker workflows</button>
            </div>
          </div>

          <div className="zl-footer-col">
            <h4>Resources</h4>
            <div className="zl-footer-links">
              <button className="zl-footer-link" onClick={() => scrollTo("workflow")}>How it works</button>
              <button className="zl-footer-link" onClick={() => scrollTo("outputs")}>Document outputs</button>
              <button className="zl-footer-link" onClick={() => scrollTo("platform")}>Product guide</button>
              <button className="zl-footer-link" onClick={() => scrollTo("final")}>Getting started</button>
            </div>
          </div>

          <div className="zl-footer-col">
            <h4>Company</h4>
            <div className="zl-footer-links">
              <button className="zl-footer-link" onClick={() => scrollTo("teams")}>About ZapDocs</button>
              <button className="zl-footer-link" onClick={() => scrollTo("final")}>Contact</button>
              <button className="zl-footer-link" onClick={() => scrollTo("platform")}>Security</button>
              <button className="zl-footer-link" onClick={() => scrollTo("final")}>Updates</button>
            </div>
          </div>

          <div className="zl-footer-col">
            <h4>Get Started</h4>
            <div className="zl-footer-links">
              <button className="zl-footer-link" onClick={onLaunch}>Open ZapDocs</button>
              <button className="zl-footer-link" onClick={onLaunch}>Start free trial</button>
              <button className="zl-footer-link" onClick={onLaunch}>Create a loan</button>
            </div>
          </div>

          <div className="zl-footer-col">
            <h4>Support</h4>
            <div className="zl-footer-links">
              <button className="zl-footer-link" onClick={() => scrollTo("workflow")}>Help center</button>
              <button className="zl-footer-link" onClick={() => scrollTo("final")}>Contact support</button>
            </div>
          </div>
        </div>

        <div className="zl-footer-bottom">
          <div className="zl-footer-bottom-inner">
            <div className="zl-footer-legal">
              <span>© 2026 ZapDocs. All rights reserved.</span>
              <span>·</span>
              <button type="button">Terms</button>
              <span>·</span>
              <button type="button">Privacy Policy</button>
              <span>·</span>
              <button type="button">Accessibility</button>
            </div>

            <div className="zl-footer-socials" aria-label="Social links">
              <button className="zl-social" type="button" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.5 8.2H3.3V21h3.2V8.2ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.7c0-3.9-2.1-5.8-4.9-5.8-2.3 0-3.3 1.2-3.9 2.1V8.2H9V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H20l1-7.3Z"/>
                </svg>
              </button>
              <button className="zl-social" type="button" aria-label="X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 4l16 16M20 4L4 20"/>
                </svg>
              </button>
              <button className="zl-social" type="button" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </button>
            </div>
          </div>
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

