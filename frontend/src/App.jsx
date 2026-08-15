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
  const [errorMsg, setErrorMsg] = useState("");
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

  async function handleGenerate() {
    if (!activeId) return;
    setGenStatus("generating");
    setErrorMsg("");
    try {
      // Save first so the generated docs match what's on screen
      await fetch(`/api/loans/${activeId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields, label: labelInput }),
      });
      await refreshList();

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

  return (
    <div className="app-shell">
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
              <span className="submit-note">
                Downloads a .zip with all four filled-in Word files.
              </span>
            </div>

            {genStatus === "error" && (
              <p className="error-msg" role="alert">
                {errorMsg}
              </p>
            )}
          </>
        )}
      </main>
    </div>
  );
}