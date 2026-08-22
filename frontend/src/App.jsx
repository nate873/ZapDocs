import { useState, useEffect, useCallback } from "react";

const FIELD_GROUPS = [
  {
    name: "Loan Info",
    fields: [
      ["LOAN_NUMBER", "Loan Number"],
      ["LOAN_AMOUNT", "Loan Amount ($)"],
      ["INTEREST_RATE", "Interest Rate (%)"],
      ["MONTHLY_PAYMENT", "Monthly Payment ($)"],
      ["TERM", "Term (months)"],
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
      ["LOAN_TERM", "Loan Term (e.g. 36 months)"],
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

function emptyFields() {
  const obj = {};
  ALL_FIELDS.forEach((name) => (obj[name] = ""));
  obj.STATE = "FL";
  return obj;
}

export default function App() {
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
    setFields({ ...emptyFields(), ...data.fields });
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