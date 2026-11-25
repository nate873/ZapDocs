import React, { useEffect, useState } from "react";
import Header from "./Header";

const onboardingSteps = [
  {
    number: "01",
    icon: "◎",
    title: "Create your account",
    description:
      "Register for ZapDocs and follow the account confirmation instructions to access your workspace.",
    items: [
      "Create your ZapDocs account",
      "Confirm your email if prompted",
      "Sign in to your workspace",
      "Explore the dashboard",
    ],
  },
  {
    number: "02",
    icon: "+",
    title: "Create a sample loan",
    description:
      "Start with a fictional Florida or California transaction to familiarize yourself with the loan preparation process.",
    items: [
      "Select Florida or California",
      "Enter a sample loan amount",
      "Enter fictional property information",
      "Complete sample borrower and lender details",
    ],
  },
  {
    number: "03",
    icon: "✓",
    title: "Review your transaction",
    description:
      "Review your financing terms, payment calculations and transaction information before generating documents.",
    items: [
      "Confirm your interest rate",
      "Review monthly payment calculations",
      "Verify payment and maturity dates",
      "Confirm the intended balloon payment",
    ],
  },
  {
    number: "04",
    icon: "↓",
    title: "Generate and download",
    description:
      "Prepare your first sample document package and compare the results with your approved reference documents.",
    items: [
      "Save your sample loan",
      "Preview available documents",
      "Generate your loan package",
      "Download and review the documents",
    ],
  },
];

const checklist = [
  "Create your ZapDocs account",
  "Access your loan workspace",
  "Create a fictional transaction",
  "Complete loan and party information",
  "Review payment calculations",
  "Generate your first document package",
  "Review the downloaded documents",
];

const faqs = [
  [
    "Do I need a real loan to get started?",
    "No. We recommend creating a fictional transaction first so you can explore the platform without entering confidential borrower or lender information.",
  ],
  [
    "What if I do not receive my confirmation email?",
    "Check your spam or junk folder and confirm that you entered the correct email address. Contact support if you continue experiencing registration issues.",
  ],
  [
    "Which state should I select for my sample loan?",
    "Select Florida or California depending on the document workflow you would like to explore.",
  ],
  [
    "Can I return to my sample loan later?",
    "Yes. Save your transaction information and reopen the loan record to review or revise your sample.",
  ],
  [
    "What should I do if a calculation appears incorrect?",
    "Review the financing terms, payment dates, interest basis and custom amounts. Contact support if the discrepancy remains.",
  ],
  [
    "What should I do if a generated document contains an error?",
    "Review the underlying transaction information and regenerate the document if necessary. Report unresolved discrepancies through the support page without submitting sensitive borrower information unnecessarily.",
  ],
  [
    "Can I use generated documents immediately?",
    "Generated documents should be reviewed for accuracy, applicability and transaction-specific requirements before execution. ZapDocs does not replace independent professional review.",
  ],
];

export default function GettingStarted() {
  const [completed, setCompleted] = useState([]);

  const progress = Math.round(
    (completed.length / checklist.length) * 100
  );

  function toggleChecklist(index) {
    setCompleted((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  }

  useEffect(() => {
    document.title = "Getting Started | ZapDocs";
  }, []);

  return (
    <div className="gs-page">
      <Header />

      <main>
        {/* HERO SECTION */}

        <section className="gs-hero">
          <div className="gs-container gs-hero-grid">

            <div className="gs-hero-content">

              <div className="gs-eyebrow">
                <span className="gs-dot" />
                ZAPDOCS / GETTING STARTED
              </div>

              <h1>
                Your first loan package.
                <span>Starts here.</span>
              </h1>

              <p>
                Get familiar with your ZapDocs workspace,
                create your first sample transaction and
                explore a simpler way to prepare private
                lending documents.
              </p>

              <div className="gs-actions">

                <a
                  href="/free-trial"
                  className="gs-primary"
                >
                  Create Your Account →
                </a>

                <a
                  href="#getting-started"
                  className="gs-secondary"
                >
                  View Getting Started Guide
                </a>

              </div>

              <div className="gs-support">
                <span>✓ Guided onboarding</span>
                <span>✓ Sample transactions</span>
                <span>✓ Florida & California</span>
              </div>

            </div>

            {/* INTERACTIVE ONBOARDING CHECKLIST */}

            <div className="gs-preview">

              <div className="gs-window">

                <div className="gs-window-header">

                  <div className="gs-brand">

                    <div className="gs-logo">Z</div>

                    <div>
                      <strong>ZapDocs</strong>
                      <small>Getting Started</small>
                    </div>

                  </div>

                  <span className="gs-preview-tag">
                    Onboarding guide
                  </span>

                </div>

                <div className="gs-window-body">

                  <div className="gs-small-label">
                    YOUR GETTING STARTED CHECKLIST
                  </div>

                  <h2>Welcome to ZapDocs.</h2>

                  <p className="gs-window-description">
                    Follow these steps as you explore
                    your new lending workspace.
                  </p>

                  <div className="gs-progress-heading">
                    <span>Onboarding progress</span>
                    <strong>{progress}%</strong>
                  </div>

                  <div
                    className="gs-progress-track"
                    role="progressbar"
                    aria-label="Onboarding progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                  >
                    <div
                      className="gs-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="gs-progress-caption">
                    {completed.length} of {checklist.length}
                    {" "}steps completed
                  </div>

                  <div className="gs-checklist">

                    {checklist.map((item, index) => (

                      <button
                        type="button"
                        key={item}
                        aria-pressed={
                          completed.includes(index)
                        }
                        onClick={() =>
                          toggleChecklist(index)
                        }
                        className={
                          completed.includes(index)
                            ? "gs-check-row completed"
                            : "gs-check-row"
                        }
                      >

                        <span className="gs-check-box">
                          {completed.includes(index)
                            ? "✓"
                            : ""}
                        </span>

                        <span className="gs-check-text">
                          {item}
                        </span>

                      </button>

                    ))}

                  </div>

                  {progress === 100 ? (

                    <div className="gs-completion">
                      ✓ You've completed the onboarding checklist.
                    </div>

                  ) : (

                    <div className="gs-checklist-footer">
                      Select each step as you complete it.
                    </div>

                  )}

                  <button
                    type="button"
                    onClick={() => setCompleted([])}
                    className="gs-reset"
                  >
                    Reset checklist
                  </button>

                  <div className="gs-preview-note">
                    Personal checklist for this visit.
                    Progress is not saved to your account.
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* BENEFITS STRIP */}

        <section className="gs-benefits">

          <div className="gs-container gs-benefit-grid">

            <div>
              <strong>Start with confidence</strong>
              <p>Explore the platform using fictional data.</p>
            </div>

            <div>
              <strong>Learn at your own pace</strong>
              <p>Follow a practical onboarding process.</p>
            </div>

            <div>
              <strong>Review your first package</strong>
              <p>Understand the document preparation workflow.</p>
            </div>

          </div>

        </section>

        {/* FOUR STEP ONBOARDING PROCESS */}

        <section
          className="gs-section"
          id="getting-started"
        >

          <div className="gs-container">

            <div className="gs-section-heading">

              <div className="gs-label">
                YOUR FIRST TRANSACTION
              </div>

              <h2>
                Four steps to getting started.
              </h2>

              <p>
                From creating your account to reviewing
                your first sample loan document package.
              </p>

            </div>

            <div className="gs-step-grid">

              {onboardingSteps.map((step) => (

                <article
                  key={step.number}
                  className="gs-step-card"
                >

                  <div className="gs-step-top">

                    <div className="gs-step-icon">
                      {step.icon}
                    </div>

                    <span>STEP {step.number}</span>

                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="gs-step-divider" />

                  <div className="gs-step-list">

                    {step.items.map((item) => (

                      <div
                        className="gs-step-list-row"
                        key={item}
                      >

                        <span>✓</span>

                        <p>{item}</p>

                      </div>

                    ))}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* SAMPLE LOAN SECTION */}

        <section className="gs-muted-section">

          <div className="gs-container gs-split-grid">

            <div>

              <div className="gs-label">
                TRY A SAMPLE TRANSACTION
              </div>

              <h2 className="gs-large-heading">
                Your first loan doesn't have to be real.
              </h2>

              <p className="gs-body-text">
                Before entering confidential information,
                explore ZapDocs using a fictional private
                lending transaction.
              </p>

              <p className="gs-body-text">
                The following sample provides a simple
                interest-only financing structure that
                you can use to familiarize yourself with
                the workspace and payment calculations.
              </p>

              <div className="gs-info-notice">

                <div className="gs-info-icon">i</div>

                <div>
                  <strong>Use fictional information</strong>

                  <p>
                    Do not enter real borrower names,
                    sensitive financial information or
                    actual property records while
                    experimenting with the platform.
                  </p>
                </div>

              </div>

              <a
                href="/product-guide"
                className="gs-text-link"
              >
                Explore the product guide →
              </a>

            </div>

            <div className="gs-sample-card">

              <div className="gs-sample-header">

                <div>

                  <div className="gs-small-label">
                    SAMPLE LOAN
                  </div>

                  <h3>Illustrative Financing Terms</h3>

                </div>

                <span className="gs-sample-tag">
                  Fictional
                </span>

              </div>

              <div className="gs-sample-grid">

                {[
                  ["State", "Florida"],
                  ["Loan amount", "$500,000"],
                  ["Annual interest rate", "12.00%"],
                  ["Loan term", "12 months"],
                  ["Lien position", "First"],
                  ["Payment structure", "Interest-only"],
                ].map(([label, value]) => (

                  <div key={label}>

                    <small>{label}</small>

                    <strong>{value}</strong>

                  </div>

                ))}

              </div>

              <div className="gs-payment-result">

                <small>
                  Estimated monthly interest payment
                </small>

                <strong>$5,000.00</strong>

                <span>
                  $500,000 × 12% ÷ 12
                </span>

              </div>

              <div className="gs-sample-row">

                <span>Principal due at maturity</span>

                <strong>$500,000.00</strong>

              </div>

              <div className="gs-sample-row">

                <span>Prepaid interest</span>

                <strong>None</strong>

              </div>

              <div className="gs-sample-row">

                <span>Deferred interest</span>

                <strong>None</strong>

              </div>

              <div className="gs-sample-note">
                Illustrative monthly interest calculation.
                The actual final payment may include
                additional accrued interest or other
                contractual amounts.
              </div>

            </div>

          </div>

        </section>

        {/* WORKSPACE OVERVIEW */}

        <section className="gs-section">

          <div className="gs-container">

            <div className="gs-section-heading">

              <div className="gs-label">
                EXPLORE YOUR WORKSPACE
              </div>

              <h2>
                Get familiar with the essentials.
              </h2>

              <p>
                Learn the main controls you will use
                when preparing your first loan package.
              </p>

            </div>

            <div className="gs-feature-grid">

              {[
                {
                  icon: "▦",
                  title: "Dashboard",
                  description:
                    "Access your workspace and explore the available loan management controls.",
                },
                {
                  icon: "▤",
                  title: "Loan Information",
                  description:
                    "Enter financing terms, property information and applicable borrower and lender details.",
                },
                {
                  icon: "◎",
                  title: "Saved Profiles",
                  description:
                    "Reuse frequently entered lender, brokerage, servicing and trustee information.",
                },
                {
                  icon: "$",
                  title: "Payment Calculator",
                  description:
                    "Review estimated payment amounts and confirm your intended financing structure.",
                },
                {
                  icon: "✓",
                  title: "Preview Terms",
                  description:
                    "Review the financing information and payment schedule before generating documents.",
                },
                {
                  icon: "↓",
                  title: "Generate Documents",
                  description:
                    "Prepare the configured loan document package using your transaction information.",
                },
              ].map((feature, index) => (

                <article
                  key={feature.title}
                  className="gs-feature-card"
                >

                  <div className="gs-feature-top">

                    <div className="gs-step-icon">
                      {feature.icon}
                    </div>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* REVIEW YOUR DOCUMENTS */}

        <section className="gs-muted-section">

          <div className="gs-container gs-split-grid">

            <div>

              <div className="gs-label">
                BEFORE USING REAL TRANSACTIONS
              </div>

              <h2 className="gs-large-heading">
                Generate. Compare. Review.
              </h2>

              <p className="gs-body-text">
                Once you generate your first sample
                package, compare the documents against
                your approved reference materials.
              </p>

              <p className="gs-body-text">
                Confirm that transaction information
                appears consistently across the generated
                documents and report any discrepancies
                before relying on the platform for
                actual transactions.
              </p>

              <a
                href="/document-outputs"
                className="gs-text-link"
              >
                Explore document outputs →
              </a>

            </div>

            <div className="gs-review-card">

              <div className="gs-review-heading">

                <div className="gs-step-icon">✓</div>

                <div>

                  <h3>Document Review Checklist</h3>

                  <p>Verify your generated outputs</p>

                </div>

              </div>

              {[
                "Borrower and lender legal names",
                "Loan principal and interest rate",
                "Monthly payment amounts",
                "First payment and maturity dates",
                "Prepaid and deferred interest terms",
                "Final payment and balloon amount",
                "Property information and exhibits",
                "Signature blocks and document consistency",
              ].map((item) => (

                <div
                  className="gs-review-row"
                  key={item}
                >

                  <span className="gs-review-check">
                    □
                  </span>

                  <span>{item}</span>

                </div>

              ))}

              <div className="gs-review-notice">
                Generated documents require appropriate
                professional review before execution.
              </div>

            </div>

          </div>

        </section>

        {/* TROUBLESHOOTING SECTION */}

        <section className="gs-section">

          <div className="gs-container">

            <div className="gs-section-heading">

              <div className="gs-label">
                GETTING STARTED SUPPORT
              </div>

              <h2>
                Need help along the way?
              </h2>

              <p>
                Find guidance for common onboarding
                and document preparation questions.
              </p>

            </div>

            <div className="gs-resource-grid">

              {[
                {
                  icon: "◎",
                  title: "Account and access",
                  description:
                    "Get assistance with registration, account confirmation or signing in.",
                  link: "/help-center",
                  action: "Visit Help Center",
                },
                {
                  icon: "▤",
                  title: "Using the platform",
                  description:
                    "Learn how to navigate your workspace and understand the main transaction controls.",
                  link: "/product-guide",
                  action: "View Product Guide",
                },
                {
                  icon: "?",
                  title: "Contact support",
                  description:
                    "Report technical issues, unexpected calculations or document discrepancies.",
                  link: "/contact-support",
                  action: "Contact Support",
                },
              ].map((resource) => (

                <a
                  href={resource.link}
                  key={resource.title}
                  className="gs-resource-card"
                >

                  <div className="gs-step-icon">
                    {resource.icon}
                  </div>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <span>{resource.action} →</span>

                </a>

              ))}

            </div>

          </div>

        </section>

        {/* FAQ SECTION */}

        <section className="gs-muted-section">

          <div className="gs-container gs-faq-grid">

            <div>

              <div className="gs-label">
                FREQUENTLY ASKED QUESTIONS
              </div>

              <h2 className="gs-large-heading">
                Everything you need to get started.
              </h2>

              <p className="gs-body-text">
                Learn more about creating your account,
                preparing sample transactions and
                reviewing your first loan documents.
              </p>

              <a
                href="/help-center"
                className="gs-text-link"
              >
                Visit the Help Center →
              </a>

            </div>

            <div className="gs-faq-list">

              {faqs.map(([question, answer]) => (

                <details
                  className="gs-faq-item"
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

        <section className="gs-cta-section">

          <div className="gs-container">

            <div className="gs-cta">

              <div className="gs-cta-label">
                YOUR NEXT STEP
              </div>

              <h2>
                Ready to explore ZapDocs?
              </h2>

              <p>
                Create your first sample loan and
                discover how ZapDocs can simplify
                your private lending document
                preparation workflow.
              </p>

              <div className="gs-cta-actions">

                <a
                  href="/free-trial"
                  className="gs-primary"
                >
                  Create Your Account →
                </a>

                <a
                  href="/demo"
                  className="gs-cta-secondary"
                >
                  Book a Demo
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="gs-footer">

        <div className="gs-container">

          <div className="gs-footer-top">

            <div>

              <h3>ZapDocs</h3>

              <p>
                Document preparation software built
                for private lending professionals.
              </p>

            </div>

            <div className="gs-footer-links">

              <a href="/platform">Platform</a>
              <a href="/pricing">Pricing</a>
              <a href="/help-center">Help Center</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>

            </div>

          </div>

          <div className="gs-footer-bottom">

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

        .gs-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .gs-page * {
          box-sizing: border-box;
        }

        .gs-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .gs-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
        }

        .gs-hero-grid,
        .gs-split-grid,
        .gs-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .gs-eyebrow {
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

        .gs-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .gs-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -2.8px;
          color: #101c32;
          margin: 0 0 25px;
        }

        .gs-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .gs-hero-content > p {
          color: #637287;
          font-size: 17px;
          line-height: 1.85;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .gs-actions,
        .gs-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          align-items: center;
        }

        .gs-primary,
        .gs-secondary,
        .gs-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 650;
          transition: all 0.2s ease;
        }

        .gs-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .gs-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .gs-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .gs-secondary:hover {
          background: #f1f5fa;
        }

        .gs-support {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .gs-preview {
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          border-radius: 25px;
          padding: 20px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .gs-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .gs-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .gs-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .gs-logo {
          width: 36px;
          height: 36px;
          background: #3d63f5;
          color: white;
          border-radius: 9px;
          display: grid;
          place-items: center;
          font-size: 18px;
          font-weight: 800;
        }

        .gs-brand strong {
          display: block;
          font-size: 13px;
        }

        .gs-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .gs-preview-tag,
        .gs-sample-tag {
          background: #eff3f9;
          color: #637287;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        .gs-window-body {
          padding: 25px;
        }

        .gs-small-label {
          color: #8491a4;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-bottom: 10px;
        }

        .gs-window-body > h2 {
          font-size: 25px;
          margin: 0 0 8px;
          letter-spacing: -0.5px;
        }

        .gs-window-description {
          color: #8491a4;
          font-size: 12px;
          line-height: 1.6;
          margin: 0 0 25px;
        }

        .gs-progress-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 600;
          color: #526278;
        }

        .gs-progress-heading strong {
          color: #3d63f5;
          font-size: 14px;
        }

        .gs-progress-track {
          height: 9px;
          background: #e8edf5;
          border-radius: 20px;
          overflow: hidden;
        }

        .gs-progress-fill {
          height: 100%;
          background: #3d63f5;
          border-radius: 20px;
          transition: width 0.35s ease;
        }

        .gs-progress-caption {
          font-size: 10px;
          color: #8491a4;
          margin-top: 10px;
          margin-bottom: 23px;
        }

        .gs-checklist {
          border: 1px solid #e1e7ef;
          border-radius: 11px;
          overflow: hidden;
        }

        .gs-check-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 15px;
          background: white;
          color: #526278;
          border: 0;
          border-bottom: 1px solid #edf1f5;
          font-family: inherit;
          font-size: 12px;
          font-weight: 550;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .gs-check-row:last-child {
          border-bottom: 0;
        }

        .gs-check-row:hover {
          background: #f8fafc;
        }

        .gs-check-row.completed {
          background: #f4fbf7;
        }

        .gs-check-box {
          width: 21px;
          height: 21px;
          border: 1px solid #cbd5e1;
          border-radius: 5px;
          background: white;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 800;
        }

        .gs-check-row.completed .gs-check-box {
          background: #16834c;
          border-color: #16834c;
          color: white;
        }

        .gs-check-row.completed .gs-check-text {
          color: #16834c;
        }

        .gs-check-row:focus-visible,
        .gs-reset:focus-visible {
          outline: 2px solid #3d63f5;
          outline-offset: -2px;
        }

        .gs-checklist-footer,
        .gs-completion {
          margin-top: 20px;
          border-radius: 8px;
          padding: 13px;
          font-size: 11px;
          text-align: center;
          font-weight: 650;
        }

        .gs-checklist-footer {
          color: #3d63f5;
          background: #edf2ff;
        }

        .gs-completion {
          color: #16834c;
          background: #e5f8ed;
        }

        .gs-reset {
          display: block;
          margin: 14px auto 0;
          border: 0;
          background: transparent;
          color: #64748b;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
          text-decoration: underline;
        }

        .gs-preview-note {
          margin-top: 14px;
          text-align: center;
          color: #8491a4;
          font-size: 9px;
          line-height: 1.6;
        }

        .gs-benefits {
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .gs-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .gs-benefit-grid strong {
          font-size: 17px;
        }

        .gs-benefit-grid p {
          margin: 9px 0 0;
          color: #64748b;
          font-size: 13px;
        }

        .gs-section,
        .gs-muted-section {
          padding: 90px 0;
          scroll-margin-top: 100px;
        }

        .gs-muted-section {
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .gs-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .gs-label {
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.7px;
          color: #3d63f5;
          margin-bottom: 20px;
        }

        .gs-section-heading h2,
        .gs-large-heading {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          color: #101c32;
          margin: 0 0 20px;
        }

        .gs-section-heading p,
        .gs-body-text {
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .gs-step-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .gs-feature-grid,
        .gs-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .gs-step-card,
        .gs-feature-card,
        .gs-resource-card {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 15px;
          padding: 27px;
          transition: all 0.25s ease;
        }

        .gs-step-card:hover,
        .gs-feature-card:hover,
        .gs-resource-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .gs-step-top,
        .gs-feature-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 25px;
        }

        .gs-step-top > span,
        .gs-feature-top > span {
          color: #94a3b8;
          font-size: 10px;
          letter-spacing: 0.7px;
          font-weight: 700;
        }

        .gs-step-icon {
          width: 48px;
          height: 48px;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 25px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .gs-step-card h3,
        .gs-feature-card h3,
        .gs-resource-card h3 {
          font-size: 19px;
          line-height: 1.4;
          color: #101c32;
          margin: 0 0 13px;
        }

        .gs-step-card > p,
        .gs-feature-card p,
        .gs-resource-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .gs-step-divider {
          height: 1px;
          background: #e5eaf0;
          margin: 24px 0;
        }

        .gs-step-list {
          display: grid;
          gap: 14px;
        }

        .gs-step-list-row {
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }

        .gs-step-list-row > span {
          color: #16834c;
          font-size: 12px;
          font-weight: 750;
        }

        .gs-step-list-row p {
          font-size: 12px;
          line-height: 1.7;
          color: #526278;
          margin: 0;
        }

        .gs-text-link {
          display: inline-block;
          margin-top: 15px;
          color: #3d63f5;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
        }

        .gs-text-link:hover {
          text-decoration: underline;
        }

        .gs-info-notice {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border: 1px solid #dce5ff;
          background: #edf2ff;
          border-radius: 12px;
          margin: 25px 0 10px;
        }

        .gs-info-icon {
          width: 27px;
          height: 27px;
          background: #3d63f5;
          color: white;
          display: grid;
          place-items: center;
          border-radius: 50%;
          flex-shrink: 0;
          font-size: 14px;
          font-weight: 700;
        }

        .gs-info-notice strong {
          font-size: 13px;
          color: #284ce1;
        }

        .gs-info-notice p {
          color: #526278;
          font-size: 12px;
          line-height: 1.8;
          margin: 7px 0 0;
        }

        .gs-sample-card,
        .gs-review-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 17px;
          padding: 28px;
          box-shadow: 0 10px 35px #172b4508;
          min-width: 0;
        }

        .gs-sample-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 25px;
        }

        .gs-sample-header h3 {
          font-size: 22px;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .gs-sample-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .gs-sample-grid > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 15px;
        }

        .gs-sample-grid small {
          display: block;
          font-size: 10px;
          color: #64748b;
          margin-bottom: 8px;
        }

        .gs-sample-grid strong {
          display: block;
          font-size: 17px;
          color: #101c32;
        }

        .gs-payment-result {
          background: #eef3ff;
          border: 1px solid #dce5ff;
          border-radius: 12px;
          padding: 23px;
          margin: 22px 0;
        }

        .gs-payment-result small {
          display: block;
          font-size: 12px;
          color: #526278;
          margin-bottom: 10px;
        }

        .gs-payment-result strong {
          display: block;
          color: #3d63f5;
          font-size: 38px;
          letter-spacing: -1.5px;
        }

        .gs-payment-result > span {
          display: block;
          font-size: 11px;
          color: #64748b;
          margin-top: 10px;
        }

        .gs-sample-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #edf1f5;
          font-size: 12px;
          color: #64748b;
        }

        .gs-sample-row strong {
          color: #101c32;
          text-align: right;
        }

        .gs-sample-note {
          font-size: 11px;
          color: #8491a4;
          line-height: 1.7;
          margin-top: 20px;
        }

        .gs-review-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 23px;
        }

        .gs-review-heading h3 {
          font-size: 20px;
          margin: 0 0 6px;
        }

        .gs-review-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .gs-review-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #edf1f5;
          color: #526278;
          font-size: 13px;
        }

        .gs-review-check {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 17px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .gs-review-notice {
          color: #64748b;
          background: #f6f8fc;
          border: 1px solid #e1e7ef;
          border-radius: 8px;
          padding: 15px;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 23px;
        }

        .gs-resource-card {
          display: block;
          text-decoration: none;
        }

        .gs-resource-card .gs-step-icon {
          margin-bottom: 25px;
        }

        .gs-resource-card > span {
          display: inline-block;
          color: #3d63f5;
          font-size: 13px;
          font-weight: 650;
          margin-top: 23px;
        }

        .gs-faq-grid {
          align-items: start;
        }

        .gs-faq-list {
          display: grid;
          gap: 13px;
        }

        .gs-faq-item {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          padding: 19px;
        }

        .gs-faq-item summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 650;
          color: #101c32;
        }

        .gs-faq-item p {
          margin: 15px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        .gs-cta-section {
          padding: 80px 0;
        }

        .gs-cta {
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

        .gs-cta-label {
          color: #a6b9ff;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .gs-cta h2 {
          color: white;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
        }

        .gs-cta p {
          color: #c1cce0;
          max-width: 650px;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 auto 28px;
        }

        .gs-cta-actions {
          justify-content: center;
        }

        .gs-cta-secondary {
          border: 1px solid #ffffff50;
          color: white;
        }

        .gs-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .gs-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .gs-footer-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 25px;
        }

        .gs-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .gs-footer-top p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          max-width: 350px;
        }

        .gs-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .gs-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .gs-footer-links a:hover {
          color: #3d63f5;
        }

        .gs-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          border-top: 1px solid #dfe5ed;
          padding-top: 23px;
          margin-top: 30px;
          font-size: 11px;
          color: #64748b;
        }

        @media (max-width: 1050px) {

          .gs-hero-grid,
          .gs-split-grid,
          .gs-faq-grid {
            gap: 35px;
          }

          .gs-hero h1 {
            font-size: 44px;
          }

          .gs-preview {
            padding: 12px;
          }

          .gs-step-grid,
          .gs-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 800px) {

          .gs-container {
            width: calc(100% - 36px);
          }

          .gs-hero-grid,
          .gs-split-grid,
          .gs-faq-grid {
            grid-template-columns: 1fr;
          }

          .gs-hero {
            padding: 60px 0;
          }

          .gs-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .gs-preview {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }

          .gs-benefit-grid,
          .gs-resource-grid {
            grid-template-columns: 1fr;
          }

          .gs-benefit-grid {
            gap: 30px;
          }

          .gs-section,
          .gs-muted-section {
            padding: 60px 0;
          }

          .gs-cta-section {
            padding: 50px 0;
          }

        }

        @media (max-width: 480px) {

          .gs-hero h1 {
            font-size: 36px;
          }

          .gs-step-grid,
          .gs-feature-grid {
            grid-template-columns: 1fr;
          }

          .gs-window-body {
            padding: 15px;
          }

          .gs-check-row {
            padding: 12px;
            font-size: 11px;
          }

          .gs-sample-card,
          .gs-review-card {
            padding: 19px;
          }

          .gs-sample-grid > div {
            padding: 12px;
          }

          .gs-sample-grid strong {
            font-size: 14px;
          }

          .gs-payment-result strong {
            font-size: 32px;
          }

          .gs-step-card,
          .gs-feature-card,
          .gs-resource-card {
            padding: 23px;
          }

          .gs-cta {
            padding: 45px 20px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .gs-page * {
            transition: none !important;
          }

        }

      `}</style>

    </div>
  );
}