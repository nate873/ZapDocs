import React, { useEffect, useState } from "react";
import Header from "./Header";

const guideSections = [
  {
    id: "dashboard",
    number: "01",
    icon: "▦",
    title: "Dashboard & Loans",
    heading: "Manage your lending transactions.",
    description:
      "Your dashboard is the starting point for managing loan records. Create new transactions, reopen existing loans and maintain organized transaction information.",
    items: [
      "Create a new loan record",
      "Access previously saved loans",
      "Review existing transaction information",
      "Update negotiated loan terms",
      "Return to saved transactions",
    ],
  },
  {
    id: "information",
    number: "02",
    icon: "▤",
    title: "Loan Information",
    heading: "Everything your loan documents need.",
    description:
      "Enter financing terms, property information and party details in one centralized loan record. Reuse saved profiles to reduce repetitive data entry.",
    items: [
      "Loan amount, interest rate and lien position",
      "Property address and legal vesting",
      "Borrower and guarantor information",
      "Lender and servicing information",
      "Brokerage and trustee information",
    ],
  },
  {
    id: "payments",
    number: "03",
    icon: "$",
    title: "Payment Calculations",
    heading: "Review your financing structure.",
    description:
      "Use payment calculations to estimate monthly installments, prepaid interest and balloon amounts. Review all calculated amounts against the agreed financing terms.",
    items: [
      "Interest-only payment estimates",
      "Multiple interest rate tiers",
      "Prepaid interest arrangements",
      "Deferred interest calculations",
      "Custom balloon payment amounts",
    ],
  },
  {
    id: "documents",
    number: "04",
    icon: "▧",
    title: "Document Controls",
    heading: "From transaction information to documents.",
    description:
      "Use the document preparation controls to save your loan, review the transaction and generate supported state-specific documents.",
    items: [
      "Save Loan",
      "Preview Terms",
      "Preview Documents",
      "Generate Documents",
      "Servicing Agreement and Lender Disclosures",
    ],
  },
];

const documentControls = [
  {
    title: "Save Loan",
    icon: "✓",
    description:
      "Save the transaction information so you can return to the loan record later.",
    category: "Loan management",
  },
  {
    title: "Preview Terms",
    icon: "◎",
    description:
      "Review financing terms, payment schedules and transaction information before generating documents.",
    category: "Transaction review",
  },
  {
    title: "Preview Documents",
    icon: "▤",
    description:
      "Review available rendered document previews before downloading the prepared documents.",
    category: "Document review",
  },
  {
    title: "Generate Documents",
    icon: "↓",
    description:
      "Prepare the configured state-specific loan document package using the transaction information.",
    category: "Document generation",
  },
  {
    title: "Servicing Agreement",
    icon: "▧",
    description:
      "Generate a supported standalone servicing agreement using applicable loan and servicing details.",
    category: "Standalone document",
  },
  {
    title: "Lender Disclosures",
    icon: "↗",
    description:
      "Prepare supported lender disclosure documents where applicable to the transaction.",
    category: "Standalone document",
  },
];

const faqs = [
  [
    "Where do I create a new loan?",
    "Open your ZapDocs workspace and select the option to create a new loan record. Select the applicable state and begin entering the transaction information.",
  ],
  [
    "Can I save a loan before completing every field?",
    "Use the Save Loan control to retain transaction information, subject to the application's required-field validation.",
  ],
  [
    "Can I override calculated payment amounts?",
    "Where supported, custom payment and balloon amounts can be entered. Review these amounts against the agreed financing terms before generating documents.",
  ],
  [
    "What happens when I change a saved loan?",
    "You can update the transaction and generate revised documents. Previously downloaded documents will not automatically update.",
  ],
  [
    "Are servicing agreements generated separately?",
    "Supported servicing agreements and lender disclosures can be prepared through their respective standalone document controls.",
  ],
  [
    "Does ZapDocs verify that my loan complies with applicable law?",
    "No. ZapDocs is document preparation software. Users remain responsible for verifying transaction information, applicable requirements and obtaining appropriate professional review.",
  ],
];

export default function ProductGuide() {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  const currentSection = guideSections.find(
    (section) => section.id === activeSection
  );

  useEffect(() => {
    document.title = "Product Guide | ZapDocs";
  }, []);

  return (
    <div className="pg-page">
      <Header />

      <main>
        {/* HERO SECTION */}

        <section className="pg-hero">
          <div className="pg-container pg-hero-grid">
            <div className="pg-hero-content">
              <div className="pg-eyebrow">
                <span className="pg-dot" />
                ZAPDOCS / PRODUCT GUIDE
              </div>

              <h1>
                Get more from
                <span>your lending workspace.</span>
              </h1>

              <p>
                Learn how to navigate ZapDocs, manage
                loan records, review financing terms
                and prepare coordinated private lending
                documents from one centralized workspace.
              </p>

              <div className="pg-actions">
                <a
                  href="#product-guide"
                  className="pg-primary"
                >
                  Explore Product Guide →
                </a>

                <a
                  href="/demo"
                  className="pg-secondary"
                >
                  Book a Demo
                </a>
              </div>

              <div className="pg-support">
                <span>✓ Workspace navigation</span>
                <span>✓ Payment calculations</span>
                <span>✓ Document controls</span>
              </div>
            </div>

            {/* WORKSPACE PREVIEW */}

            <div className="pg-preview">
              <div className="pg-window">

                <div className="pg-window-header">
                  <div className="pg-brand">
                    <div className="pg-logo">Z</div>

                    <div>
                      <strong>ZapDocs</strong>
                      <small>Loan Workspace</small>
                    </div>
                  </div>

                  <span className="pg-preview-tag">
                    Product preview
                  </span>
                </div>

                <div className="pg-app-layout">

                  <aside className="pg-app-sidebar">
                    <div className="pg-app-sidebar-label">
                      WORKSPACE
                    </div>

                    {[
                      ["▦", "Dashboard"],
                      ["▤", "Loans"],
                      ["＋", "New Loan"],
                      ["◎", "Saved Profiles"],
                    ].map(([icon, label]) => (
                      <div
                        key={label}
                        className={
                          label === "Loans"
                            ? "pg-app-nav active"
                            : "pg-app-nav"
                        }
                      >
                        <span>{icon}</span>
                        {label}
                      </div>
                    ))}

                    <div className="pg-app-sidebar-label second">
                      RESOURCES
                    </div>

                    <div className="pg-app-nav">
                      <span>?</span>
                      Help Center
                    </div>
                  </aside>

                  <div className="pg-app-content">

                    <div className="pg-small-label">
                      CURRENT TRANSACTION
                    </div>

                    <h2>Loan Information</h2>

                    <p className="pg-app-description">
                      Loan #1048 · Florida
                    </p>

                    <div className="pg-app-field-grid">
                      {[
                        ["Loan Amount", "$450,000"],
                        ["Interest Rate", "10.50%"],
                        ["Lien Position", "First"],
                        ["Loan Term", "12 months"],
                      ].map(([label, value]) => (
                        <div
                          className="pg-app-field"
                          key={label}
                        >
                          <small>{label}</small>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="pg-app-payment">
                      <small>
                        Estimated monthly payment
                      </small>

                      <strong>$3,937.50</strong>

                      <span>Interest-only estimate</span>
                    </div>

                    <div className="pg-app-buttons">
                      <span className="pg-app-save">
                        Save Loan
                      </span>

                      <span className="pg-app-review">
                        Preview Terms
                      </span>
                    </div>

                    <div className="pg-app-generate">
                      Generate Documents →
                    </div>

                  </div>
                </div>

                <div className="pg-preview-note">
                  Illustrative workspace · Fictional loan data
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS STRIP */}

        <section className="pg-benefits">
          <div className="pg-container pg-benefit-grid">

            <div>
              <strong>Learn the workspace</strong>
              <p>Understand your main platform controls.</p>
            </div>

            <div>
              <strong>Review financing terms</strong>
              <p>Maintain control over transaction details.</p>
            </div>

            <div>
              <strong>Prepare your documents</strong>
              <p>Generate supported document outputs.</p>
            </div>

          </div>
        </section>

        {/* INTERACTIVE PRODUCT GUIDE */}

        <section
          className="pg-section"
          id="product-guide"
        >
          <div className="pg-container">

            <div className="pg-section-heading">
              <div className="pg-label">
                EXPLORE THE PLATFORM
              </div>

              <h2>
                Your guide to the ZapDocs workspace.
              </h2>

              <p>
                Select a section to learn how the
                platform's main controls fit into
                your lending workflow.
              </p>
            </div>

            <div className="pg-guide-layout">

              <nav
                className="pg-guide-sidebar"
                aria-label="Product guide sections"
              >
                <div className="pg-guide-sidebar-heading">
                  PRODUCT GUIDE
                </div>

                {guideSections.map((section) => (
                  <button
                    type="button"
                    key={section.id}
                    aria-pressed={
                      activeSection === section.id
                    }
                    onClick={() =>
                      setActiveSection(section.id)
                    }
                    className={
                      activeSection === section.id
                        ? "pg-guide-nav active"
                        : "pg-guide-nav"
                    }
                  >
                    <span className="pg-guide-nav-icon">
                      {section.icon}
                    </span>

                    <span>{section.title}</span>

                    <span className="pg-guide-nav-arrow">
                      →
                    </span>
                  </button>
                ))}
              </nav>

              <article
                className="pg-guide-content"
                aria-live="polite"
              >
                <div className="pg-guide-content-top">
                  <div className="pg-guide-large-icon">
                    {currentSection.icon}
                  </div>

                  <span className="pg-guide-number">
                    SECTION {currentSection.number}
                  </span>
                </div>

                <div className="pg-label">
                  {currentSection.title.toUpperCase()}
                </div>

                <h2>{currentSection.heading}</h2>

                <p>{currentSection.description}</p>

                <div className="pg-guide-checklist">
                  {currentSection.items.map((item) => (
                    <div
                      className="pg-guide-check-row"
                      key={item}
                    >
                      <span>✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="/how-it-works"
                  className="pg-text-link"
                >
                  Explore the full workflow →
                </a>
              </article>

            </div>
          </div>
        </section>

        {/* LOAN INFORMATION */}

        <section className="pg-muted-section">
          <div className="pg-container pg-split-grid">

            <div>
              <div className="pg-label">
                TRANSACTION INFORMATION
              </div>

              <h2 className="pg-large-heading">
                Enter your loan information once.
              </h2>

              <p className="pg-body-text">
                ZapDocs brings financing, property and
                party information into a centralized
                transaction record.
              </p>

              <p className="pg-body-text">
                Complete the applicable sections and
                reuse saved lender, brokerage, trustee
                and servicing profiles when preparing
                additional loans.
              </p>

              <a
                href="/team-workspace"
                className="pg-text-link"
              >
                Explore the team workspace →
              </a>
            </div>

            <div className="pg-information-card">
              <div className="pg-information-heading">
                <h3>Loan Information</h3>
                <p>Transaction information categories</p>
              </div>

              {[
                [
                  "01",
                  "Financing Terms",
                  "Loan amount, interest rate, dates and lien position",
                ],
                [
                  "02",
                  "Property Information",
                  "Collateral address, county and property details",
                ],
                [
                  "03",
                  "Borrower Information",
                  "Legal vesting, addresses and signer information",
                ],
                [
                  "04",
                  "Lender Information",
                  "Lender vesting and mailing information",
                ],
                [
                  "05",
                  "Brokerage & Servicing",
                  "Applicable company and representative details",
                ],
              ].map(([number, title, description]) => (
                <div
                  className="pg-information-row"
                  key={number}
                >
                  <div className="pg-information-number">
                    {number}
                  </div>

                  <div className="pg-information-text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>

                  <span className="pg-information-arrow">
                    →
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* PAYMENT CALCULATIONS */}

        <section className="pg-section">
          <div className="pg-container pg-split-grid">

            <div className="pg-calculation-card">
              <div className="pg-calculation-header">
                <div>
                  <div className="pg-small-label">
                    PAYMENT CALCULATIONS
                  </div>

                  <h3>Financing Summary</h3>
                </div>

                <span className="pg-example-tag">
                  Example
                </span>
              </div>

              <div className="pg-calculation-grid">
                {[
                  ["Principal balance", "$500,000.00"],
                  ["Annual interest rate", "12.00%"],
                  ["Loan term", "12 months"],
                  ["Payment structure", "Interest-only"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <div className="pg-payment-result">
                <small>Estimated monthly payment</small>
                <strong>$5,000.00</strong>

                <span>
                  Principal × annual rate ÷ 12
                </span>
              </div>

              <div className="pg-calculation-row">
                <span>Principal due at maturity</span>
                <strong>$500,000.00</strong>
              </div>

              <div className="pg-calculation-row">
                <span>Payment basis</span>
                <strong>Monthly interest-only</strong>
              </div>

              <div className="pg-calculation-note">
                Illustrative calculation only. Actual
                amounts depend on contractual interest
                calculations, payment dates and other
                transaction-specific terms.
              </div>
            </div>

            <div>
              <div className="pg-label">
                PAYMENT CALCULATIONS
              </div>

              <h2 className="pg-large-heading">
                Understand the numbers behind your loan.
              </h2>

              <p className="pg-body-text">
                Review payment calculations before
                preparing your loan documents. ZapDocs
                supports flexible financing arrangements
                within its configured workflows.
              </p>

              <div className="pg-payment-features">
                {[
                  "Interest-only payment schedules",
                  "Multiple interest rate tiers",
                  "Prepaid interest periods",
                  "Deferred interest arrangements",
                  "Custom payment and balloon amounts",
                ].map((item) => (
                  <div key={item}>
                    <span>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <p className="pg-body-text">
                Always confirm the contractual interest
                basis, maturity date, prepaid periods
                and final installment before generation.
              </p>
            </div>

          </div>
        </section>

        {/* DOCUMENT CONTROLS */}

        <section className="pg-muted-section">
          <div className="pg-container">

            <div className="pg-section-heading">
              <div className="pg-label">
                KNOW YOUR CONTROLS
              </div>

              <h2>
                Every control has a purpose.
              </h2>

              <p>
                Understand the difference between saving,
                reviewing and generating your transaction
                documents.
              </p>
            </div>

            <div className="pg-control-grid">
              {documentControls.map((control) => (
                <article
                  className="pg-control-card"
                  key={control.title}
                >
                  <div className="pg-control-top">
                    <div className="pg-control-icon">
                      {control.icon}
                    </div>

                    <span className="pg-control-category">
                      {control.category}
                    </span>
                  </div>

                  <h3>{control.title}</h3>
                  <p>{control.description}</p>

                  <div className="pg-control-example">
                    {control.title}
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* RECOMMENDED WORKFLOW */}

        <section className="pg-section">
          <div className="pg-container">

            <div className="pg-section-heading">
              <div className="pg-label">
                RECOMMENDED WORKFLOW
              </div>

              <h2>
                From your workspace to your documents.
              </h2>
            </div>

            <div className="pg-process-grid">
              {[
                [
                  "01",
                  "Open Workspace",
                  "Create a loan or reopen an existing transaction.",
                ],
                [
                  "02",
                  "Complete Sections",
                  "Enter applicable transaction and party information.",
                ],
                [
                  "03",
                  "Review Terms",
                  "Confirm financing terms, dates and payment calculations.",
                ],
                [
                  "04",
                  "Generate Outputs",
                  "Prepare and download supported loan documents for review.",
                ],
              ].map(([number, title, description]) => (
                <article
                  className="pg-process-card"
                  key={number}
                >
                  <div className="pg-process-number">
                    {number}
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* RESOURCE LINKS */}

        <section className="pg-muted-section">
          <div className="pg-container">

            <div className="pg-section-heading">
              <div className="pg-label">
                CONTINUE EXPLORING
              </div>

              <h2>
                More resources for your lending workflow.
              </h2>
            </div>

            <div className="pg-resource-grid">
              {[
                [
                  "How It Works",
                  "Learn the three-step document preparation process.",
                  "/how-it-works",
                ],
                [
                  "Document Outputs",
                  "Explore available state-specific document packages.",
                  "/document-outputs",
                ],
                [
                  "Help Center",
                  "Find answers to common platform questions.",
                  "/help-center",
                ],
              ].map(([title, description, link]) => (
                <a
                  href={link}
                  className="pg-resource-card"
                  key={title}
                >
                  <div className="pg-resource-icon">
                    ↗
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>

                  <span>Explore resource →</span>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ SECTION */}

        <section className="pg-section">
          <div className="pg-container pg-faq-grid">

            <div>
              <div className="pg-label">
                FREQUENTLY ASKED QUESTIONS
              </div>

              <h2 className="pg-large-heading">
                Questions about using ZapDocs?
              </h2>

              <p className="pg-body-text">
                Learn more about navigating your
                workspace, managing transactions
                and generating loan documents.
              </p>

              <a
                href="/help-center"
                className="pg-text-link"
              >
                Visit the Help Center →
              </a>
            </div>

            <div className="pg-faq-list">
              {faqs.map(([question, answer]) => (
                <details
                  className="pg-faq-item"
                  key={question}
                >
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* CTA SECTION */}

        <section className="pg-cta-section">
          <div className="pg-container">

            <div className="pg-cta">
              <div className="pg-cta-label">
                EXPERIENCE ZAPDOCS
              </div>

              <h2>
                See the workspace in action.
              </h2>

              <p>
                Discover how ZapDocs helps private
                lending professionals manage transaction
                information and prepare coordinated
                loan documents.
              </p>

              <div className="pg-cta-actions">
                <a
                  href="/demo"
                  className="pg-primary"
                >
                  Book a Demo →
                </a>

                <a
                  href="/pricing"
                  className="pg-cta-secondary"
                >
                  View Pricing
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}

      <footer className="pg-footer">
        <div className="pg-container">

          <div className="pg-footer-top">
            <div>
              <h3>ZapDocs</h3>

              <p>
                Document preparation software built
                for private lending professionals.
              </p>
            </div>

            <div className="pg-footer-links">
              <a href="/platform">Platform</a>
              <a href="/pricing">Pricing</a>
              <a href="/help-center">Help Center</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div className="pg-footer-bottom">
            <span>
              © {new Date().getFullYear()} ZapDocs.
              All rights reserved.
            </span>

            <span>
              ZapDocs is not a law firm and does
              not provide legal advice.
            </span>
          </div>

        </div>
      </footer>

      {/* SELF-CONTAINED CSS */}

      <style>{`
        .pg-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .pg-page * {
          box-sizing: border-box;
        }

        .pg-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .pg-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
        }

        .pg-hero-grid,
        .pg-split-grid,
        .pg-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .pg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          background: white;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .pg-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .pg-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -2.8px;
          color: #101c32;
          margin: 0 0 25px;
        }

        .pg-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .pg-hero-content > p {
          font-size: 17px;
          line-height: 1.85;
          color: #637287;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .pg-actions,
        .pg-cta-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
        }

        .pg-primary,
        .pg-secondary,
        .pg-cta-secondary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 15px 26px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .pg-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .pg-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .pg-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .pg-secondary:hover {
          background: #f1f5fa;
        }

        .pg-support {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .pg-preview {
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          border-radius: 25px;
          padding: 17px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .pg-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .pg-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 17px;
          border-bottom: 1px solid #e5eaf1;
        }

        .pg-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pg-logo {
          width: 35px;
          height: 35px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          color: white;
          background: #3d63f5;
          font-weight: 800;
          font-size: 18px;
        }

        .pg-brand strong {
          display: block;
          font-size: 13px;
        }

        .pg-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .pg-preview-tag,
        .pg-example-tag {
          background: #eff3f9;
          color: #637287;
          font-size: 10px;
          font-weight: 600;
          padding: 6px 11px;
          border-radius: 20px;
        }

        .pg-app-layout {
          display: grid;
          grid-template-columns: 125px minmax(0, 1fr);
        }

        .pg-app-sidebar {
          background: #f8fafc;
          border-right: 1px solid #e5eaf1;
          padding: 20px 9px;
        }

        .pg-app-sidebar-label {
          color: #94a3b8;
          font-size: 8px;
          letter-spacing: 0.8px;
          font-weight: 700;
          padding: 0 8px;
          margin-bottom: 12px;
        }

        .pg-app-sidebar-label.second {
          margin-top: 27px;
        }

        .pg-app-nav {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #64748b;
          font-size: 10px;
          font-weight: 550;
          padding: 10px 8px;
          border-radius: 6px;
          margin-bottom: 4px;
        }

        .pg-app-nav span {
          font-size: 13px;
        }

        .pg-app-nav.active {
          background: #e9efff;
          color: #3d63f5;
          font-weight: 700;
        }

        .pg-app-content {
          padding: 22px 17px;
          min-width: 0;
        }

        .pg-small-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #8491a4;
          margin-bottom: 9px;
        }

        .pg-app-content > h2 {
          color: #101c32;
          font-size: 21px;
          letter-spacing: -0.6px;
          margin: 0 0 7px;
        }

        .pg-app-description {
          font-size: 11px;
          color: #8491a4;
          margin: 0 0 22px;
        }

        .pg-app-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .pg-app-field {
          border: 1px solid #e1e7ef;
          border-radius: 7px;
          padding: 12px 10px;
        }

        .pg-app-field small {
          display: block;
          font-size: 9px;
          color: #8491a4;
          margin-bottom: 7px;
        }

        .pg-app-field strong {
          display: block;
          font-size: 13px;
          color: #101c32;
        }

        .pg-app-payment {
          background: #eef3ff;
          border: 1px solid #dce5ff;
          border-radius: 9px;
          padding: 18px;
          margin-top: 17px;
        }

        .pg-app-payment small {
          display: block;
          color: #526278;
          font-size: 10px;
          margin-bottom: 8px;
        }

        .pg-app-payment strong {
          display: block;
          color: #3d63f5;
          font-size: 26px;
          letter-spacing: -0.6px;
        }

        .pg-app-payment > span {
          color: #8491a4;
          font-size: 9px;
          display: block;
          margin-top: 6px;
        }

        .pg-app-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 19px;
        }

        .pg-app-save,
        .pg-app-review {
          border-radius: 6px;
          font-weight: 650;
          font-size: 10px;
          padding: 10px 5px;
          text-align: center;
        }

        .pg-app-save {
          background: #101c32;
          color: white;
        }

        .pg-app-review {
          background: white;
          border: 1px solid #dce3ed;
          color: #526278;
        }

        .pg-app-generate {
          background: #3d63f5;
          color: white;
          padding: 12px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
          text-align: center;
          margin-top: 10px;
        }

        .pg-preview-note {
          border-top: 1px solid #edf1f5;
          color: #8491a4;
          font-size: 9px;
          padding: 12px;
          text-align: center;
        }

        .pg-benefits {
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
          padding: 35px 0;
        }

        .pg-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .pg-benefit-grid strong {
          font-size: 17px;
        }

        .pg-benefit-grid p {
          font-size: 13px;
          color: #64748b;
          margin: 9px 0 0;
        }

        .pg-section,
        .pg-muted-section {
          padding: 90px 0;
          scroll-margin-top: 100px;
        }

        .pg-muted-section {
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .pg-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .pg-label {
          color: #3d63f5;
          font-size: 11px;
          letter-spacing: 1.7px;
          font-weight: 750;
          margin-bottom: 20px;
        }

        .pg-section-heading h2,
        .pg-large-heading {
          color: #101c32;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
        }

        .pg-section-heading p,
        .pg-body-text {
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .pg-guide-layout {
          display: grid;
          grid-template-columns: 285px minmax(0, 1fr);
          gap: 25px;
          align-items: start;
        }

        .pg-guide-sidebar {
          background: #f8fafc;
          border: 1px solid #dfe5ed;
          border-radius: 15px;
          padding: 18px;
        }

        .pg-guide-sidebar-heading {
          font-size: 10px;
          color: #8491a4;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 10px 8px;
          margin-bottom: 10px;
        }

        .pg-guide-nav {
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          text-align: left;
          border: 1px solid transparent;
          background: transparent;
          color: #526278;
          border-radius: 8px;
          padding: 14px 10px;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 6px;
          transition: all 0.2s ease;
        }

        .pg-guide-nav:hover {
          background: #edf2ff;
        }

        .pg-guide-nav.active {
          background: #e9efff;
          color: #3d63f5;
          border-color: #dce5ff;
        }

        .pg-guide-nav:focus-visible {
          outline: 2px solid #3d63f5;
          outline-offset: 2px;
        }

        .pg-guide-nav-icon {
          width: 21px;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
        }

        .pg-guide-nav-arrow {
          margin-left: auto;
        }

        .pg-guide-content {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 16px;
          padding: 40px;
          min-height: 460px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .pg-guide-content-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .pg-guide-large-icon {
          width: 56px;
          height: 56px;
          background: #edf2ff;
          border-radius: 13px;
          color: #3d63f5;
          display: grid;
          place-items: center;
          font-size: 29px;
          font-weight: 750;
        }

        .pg-guide-number {
          color: #94a3b8;
          font-size: 11px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .pg-guide-content h2 {
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1.25;
          margin: 0 0 17px;
          letter-spacing: -1px;
        }

        .pg-guide-content > p {
          font-size: 15px;
          color: #64748b;
          line-height: 1.85;
          margin: 0;
        }

        .pg-guide-checklist {
          display: grid;
          gap: 15px;
          margin: 27px 0;
          padding-top: 25px;
          border-top: 1px solid #e5eaf0;
        }

        .pg-guide-check-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #526278;
        }

        .pg-guide-check-row > span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #e5f8ed;
          color: #16834c;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .pg-text-link {
          display: inline-block;
          color: #3d63f5;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          margin-top: 15px;
        }

        .pg-text-link:hover {
          text-decoration: underline;
        }

        .pg-information-card,
        .pg-calculation-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 17px;
          padding: 28px;
          box-shadow: 0 10px 35px #172b4508;
          min-width: 0;
        }

        .pg-information-heading {
          margin-bottom: 24px;
        }

        .pg-information-heading h3,
        .pg-calculation-header h3 {
          font-size: 23px;
          margin: 0 0 7px;
        }

        .pg-information-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .pg-information-row {
          display: flex;
          align-items: center;
          gap: 13px;
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 12px;
        }

        .pg-information-row:last-child {
          margin-bottom: 0;
        }

        .pg-information-number {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .pg-information-text {
          flex: 1;
        }

        .pg-information-text h4 {
          margin: 0 0 6px;
          font-size: 13px;
        }

        .pg-information-text p {
          color: #8491a4;
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        .pg-information-arrow {
          color: #94a3b8;
        }

        .pg-calculation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .pg-calculation-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .pg-calculation-grid > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 15px;
        }

        .pg-calculation-grid small {
          display: block;
          color: #64748b;
          font-size: 11px;
          margin-bottom: 9px;
        }

        .pg-calculation-grid strong {
          display: block;
          font-size: 16px;
        }

        .pg-payment-result {
          background: #eef3ff;
          border: 1px solid #dce5ff;
          border-radius: 12px;
          padding: 24px;
          margin: 22px 0;
        }

        .pg-payment-result small {
          display: block;
          color: #526278;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .pg-payment-result strong {
          display: block;
          font-size: 38px;
          color: #3d63f5;
          letter-spacing: -1.5px;
        }

        .pg-payment-result > span {
          display: block;
          font-size: 11px;
          color: #8491a4;
          margin-top: 9px;
        }

        .pg-calculation-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          border-bottom: 1px solid #edf1f5;
          padding: 14px 0;
          font-size: 12px;
          color: #64748b;
        }

        .pg-calculation-row strong {
          color: #101c32;
          text-align: right;
        }

        .pg-calculation-note {
          color: #8491a4;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 20px;
        }

        .pg-payment-features {
          display: grid;
          gap: 15px;
          margin: 25px 0;
        }

        .pg-payment-features > div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #526278;
          font-size: 14px;
        }

        .pg-payment-features span {
          color: #16834c;
          font-weight: 750;
        }

        .pg-control-grid,
        .pg-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .pg-control-card,
        .pg-resource-card,
        .pg-process-card {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 15px;
          padding: 28px;
          transition: all 0.25s ease;
        }

        .pg-control-card:hover,
        .pg-resource-card:hover,
        .pg-process-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .pg-control-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 25px;
        }

        .pg-control-icon,
        .pg-resource-icon,
        .pg-process-number {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 10px;
          font-size: 24px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .pg-control-category {
          font-size: 10px;
          color: #8491a4;
          font-weight: 650;
          text-align: right;
        }

        .pg-control-card h3,
        .pg-resource-card h3,
        .pg-process-card h3 {
          color: #101c32;
          font-size: 19px;
          margin: 0 0 13px;
        }

        .pg-control-card p,
        .pg-resource-card p,
        .pg-process-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .pg-control-card {
          display: flex;
          flex-direction: column;
        }

        .pg-control-example {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 11px;
          font-weight: 700;
          padding: 10px 14px;
          border-radius: 7px;
          margin-top: 23px;
        }

        .pg-process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .pg-process-number {
          font-size: 16px;
          margin-bottom: 25px;
        }

        .pg-resource-card {
          display: block;
          text-decoration: none;
        }

        .pg-resource-icon {
          margin-bottom: 23px;
        }

        .pg-resource-card > span {
          display: inline-block;
          margin-top: 23px;
          color: #3d63f5;
          font-size: 13px;
          font-weight: 650;
        }

        .pg-faq-grid {
          align-items: start;
        }

        .pg-faq-list {
          display: grid;
          gap: 13px;
        }

        .pg-faq-item {
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          background: white;
          padding: 19px;
        }

        .pg-faq-item summary {
          font-size: 14px;
          color: #101c32;
          cursor: pointer;
          font-weight: 650;
        }

        .pg-faq-item p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        .pg-cta-section {
          padding: 0 0 85px;
        }

        .pg-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          border-radius: 22px;
          padding: 70px 25px;
          text-align: center;
        }

        .pg-cta-label {
          color: #a6b9ff;
          font-size: 11px;
          letter-spacing: 1.8px;
          font-weight: 750;
          margin-bottom: 22px;
        }

        .pg-cta h2 {
          color: white;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
        }

        .pg-cta p {
          color: #c1cce0;
          font-size: 16px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 28px;
        }

        .pg-cta-actions {
          justify-content: center;
        }

        .pg-cta-secondary {
          color: white;
          border: 1px solid #ffffff50;
        }

        .pg-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .pg-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .pg-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .pg-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .pg-footer-top p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          max-width: 350px;
        }

        .pg-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .pg-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .pg-footer-links a:hover {
          color: #3d63f5;
        }

        .pg-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          border-top: 1px solid #dfe5ed;
          color: #64748b;
          font-size: 11px;
          padding-top: 23px;
          margin-top: 30px;
        }

        @media (max-width: 1050px) {
          .pg-hero-grid,
          .pg-split-grid,
          .pg-faq-grid {
            gap: 35px;
          }

          .pg-hero h1 {
            font-size: 44px;
          }

          .pg-preview {
            padding: 12px;
          }

          .pg-control-grid,
          .pg-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pg-app-layout {
            grid-template-columns: 105px minmax(0, 1fr);
          }
        }

        @media (max-width: 800px) {
          .pg-container {
            width: calc(100% - 36px);
          }

          .pg-hero-grid,
          .pg-split-grid,
          .pg-faq-grid,
          .pg-guide-layout {
            grid-template-columns: 1fr;
          }

          .pg-hero {
            padding: 60px 0;
          }

          .pg-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .pg-preview {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .pg-benefit-grid,
          .pg-resource-grid {
            grid-template-columns: 1fr;
          }

          .pg-benefit-grid {
            gap: 30px;
          }

          .pg-guide-sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }

          .pg-guide-sidebar-heading {
            grid-column: 1 / -1;
          }

          .pg-guide-nav {
            margin-bottom: 0;
          }

          .pg-guide-content {
            min-height: auto;
            padding: 27px;
          }

          .pg-section,
          .pg-muted-section {
            padding: 60px 0;
          }

          .pg-cta-section {
            padding-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .pg-hero h1 {
            font-size: 36px;
          }

          .pg-control-grid,
          .pg-process-grid,
          .pg-guide-sidebar {
            grid-template-columns: 1fr;
          }

          .pg-app-layout {
            grid-template-columns: 1fr;
          }

          .pg-app-sidebar {
            display: none;
          }

          .pg-app-content {
            padding: 18px;
          }

          .pg-information-card,
          .pg-calculation-card,
          .pg-guide-content {
            padding: 19px;
          }

          .pg-calculation-grid > div {
            padding: 11px;
          }

          .pg-calculation-grid strong {
            font-size: 13px;
          }

          .pg-payment-result strong {
            font-size: 32px;
          }

          .pg-control-card,
          .pg-resource-card,
          .pg-process-card {
            padding: 23px;
          }

          .pg-cta {
            padding: 45px 20px;
          }
        }
      `}</style>

    </div>
  );
}