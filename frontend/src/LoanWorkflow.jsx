import { useEffect } from "react";
import Header from "./Header";

const steps = [
  {
    number: "01",
    title: "Create your loan",
    description:
      "Select the applicable state and enter the loan amount, interest rate, lien position and maturity date.",
    icon: "＋",
  },
  {
    number: "02",
    title: "Complete transaction details",
    description:
      "Enter borrower vesting, property information, lender details, guarantors, brokerage and servicing information.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Review payment terms",
    description:
      "Review monthly payments, prepaid interest, payment tiers, deferred interest and the final balloon payment.",
    icon: "✓",
  },
  {
    number: "04",
    title: "Generate documents",
    description:
      "Save the transaction and generate a coordinated, state-specific loan document package for professional review.",
    icon: "↗",
  },
];

export default function LoanWorkflow() {
  useEffect(() => {
    document.title = "Loan Workflow | ZapDocs";
  }, []);

  return (
    <div className="workflow-page">
      <Header />

      <main>
        <section className="workflow-hero">
          <div className="workflow-container workflow-hero-grid">
            <div className="workflow-hero-content">
              <div className="workflow-eyebrow">
                PLATFORM / LOAN WORKFLOW
              </div>

              <h1>
                From loan terms to
                <span> closing documents.</span>
              </h1>

              <p>
                A streamlined workflow for private lenders,
                loan originators and servicing professionals.
                Enter transaction information once and prepare
                coordinated loan documents from a single workspace.
              </p>

              <div className="workflow-actions">
                <a href="/demo" className="workflow-primary">
                  Book a demo →
                </a>

                <a href="/platform" className="workflow-secondary">
                  Explore the platform
                </a>
              </div>

              <div className="workflow-support">
                <span>✓ Florida</span>
                <span>✓ California</span>
                <span>✓ Reusable loan records</span>
              </div>
            </div>

            <div className="workflow-preview">
              <div className="workflow-window">
                <div className="workflow-window-header">
                  <div className="workflow-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span>Loan Workspace</span>

                  <div className="workflow-status">
                    In review
                  </div>
                </div>

                <div className="workflow-window-body">
                  <div className="workflow-preview-label">
                    SAMPLE TRANSACTION
                  </div>

                  <h3>Loan #1048</h3>
                  <p>Florida · First Position · Bridge Loan</p>

                  <div className="workflow-metrics">
                    <div>
                      <small>Loan amount</small>
                      <strong>$450,000</strong>
                    </div>

                    <div>
                      <small>Interest rate</small>
                      <strong>10.50%</strong>
                    </div>

                    <div>
                      <small>Loan term</small>
                      <strong>12 months</strong>
                    </div>

                    <div>
                      <small>Monthly payment</small>
                      <strong>$3,937.50</strong>
                    </div>
                  </div>

                  <div className="workflow-checklist">
                    {[
                      ["Loan information", true],
                      ["Borrower and property", true],
                      ["Lender and servicing", true],
                      ["Payment schedule", true],
                      ["Document review", false],
                    ].map(([label, complete]) => (
                      <div
                        className="workflow-check-row"
                        key={label}
                      >
                        <div
                          className={
                            complete
                              ? "workflow-check complete"
                              : "workflow-check pending"
                          }
                        >
                          {complete ? "✓" : "○"}
                        </div>

                        <span>{label}</span>

                        <small>
                          {complete ? "Complete" : "Pending"}
                        </small>
                      </div>
                    ))}
                  </div>

                  <div className="workflow-generate">
                    Generate loan package →
                  </div>

                  <div className="workflow-demo-note">
                    Illustrative workspace · Fictional loan data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="workflow-benefits">
          <div className="workflow-container workflow-benefit-grid">
            <div>
              <strong>One workspace</strong>
              <span>Centralized transaction information</span>
            </div>

            <div>
              <strong>Coordinated documents</strong>
              <span>Consistent loan and party details</span>
            </div>

            <div>
              <strong>Flexible loan structures</strong>
              <span>Support for complex payment terms</span>
            </div>
          </div>
        </section>

        <section className="workflow-process">
          <div className="workflow-container">
            <div className="workflow-section-heading">
              <div className="workflow-eyebrow">
                HOW IT WORKS
              </div>

              <h2>Four steps. One coordinated workflow.</h2>

              <p>
                Move from agreed loan terms to document
                preparation without repeatedly entering
                the same transaction information.
              </p>
            </div>

            <div className="workflow-step-grid">
              {steps.map((step) => (
                <article
                  className="workflow-step-card"
                  key={step.number}
                >
                  <div className="workflow-step-top">
                    <div className="workflow-step-icon">
                      {step.icon}
                    </div>

                    <span>STEP {step.number}</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-features">
          <div className="workflow-container workflow-feature-grid">
            <div>
              <div className="workflow-eyebrow">
                BUILT FOR PRIVATE LENDING
              </div>

              <h2>
                Your transaction information,
                working together.
              </h2>

              <p>
                Private lending transactions frequently
                involve changing terms, multiple parties
                and complex payment arrangements.
                ZapDocs brings these details into a
                centralized document preparation workflow.
              </p>

              <a
                href="/document-generation"
                className="workflow-text-link"
              >
                Explore document generation →
              </a>
            </div>

            <div className="workflow-feature-list">
              {[
                [
                  "Centralized loan information",
                  "Maintain borrower, lender, property and financing details within a single loan record.",
                ],
                [
                  "Reusable profiles",
                  "Reuse saved lender, brokerage and servicing information across transactions.",
                ],
                [
                  "Flexible payment schedules",
                  "Prepare interest-only, tiered, prepaid and deferred interest arrangements.",
                ],
                [
                  "State-specific document packages",
                  "Generate supported Florida and California documents using the applicable transaction information.",
                ],
                [
                  "Professional review",
                  "Review generated documents before execution and coordinate with your closing professionals.",
                ],
              ].map(([title, description]) => (
                <div
                  className="workflow-feature-item"
                  key={title}
                >
                  <div className="workflow-feature-check">
                    ✓
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-cta-section">
          <div className="workflow-container">
            <div className="workflow-cta">
              <div className="workflow-cta-eyebrow">
                THE NEXT STEP IN PRIVATE LENDING
              </div>

              <h2>
                Less repetitive work.
                <br />
                More time for your next loan.
              </h2>

              <p>
                Discover how ZapDocs can simplify your
                loan document preparation workflow.
              </p>

              <a href="/demo" className="workflow-primary">
                Book a demo →
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="workflow-footer">
        <div className="workflow-container">
          <div className="workflow-footer-top">
            <div>
              <h3>ZapDocs</h3>
              <p>
                Document preparation software
                for private lending professionals.
              </p>
            </div>

            <div className="workflow-footer-links">
              <a href="/platform">Platform</a>
              <a href="/pricing">Pricing</a>
              <a href="/help-center">Help Center</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div className="workflow-footer-bottom">
            <span>
              © {new Date().getFullYear()} ZapDocs.
              All rights reserved.
            </span>

            <span>
              ZapDocs is not a law firm and does not
              provide legal advice.
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        .workflow-page {
          font-family: Inter, Arial, sans-serif;
          background: #ffffff;
          color: #14243a;
          min-height: 100vh;
        }

        .workflow-page * {
          box-sizing: border-box;
        }

        .workflow-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .workflow-hero {
          padding: 100px 0 90px;
          background: linear-gradient(
            135deg,
            #ffffff 10%,
            #f3f7fc 100%
          );
        }

        .workflow-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .workflow-eyebrow {
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .workflow-hero h1 {
          font-size: clamp(42px, 5vw, 66px);
          line-height: 1.08;
          letter-spacing: -3px;
          margin: 0 0 25px;
          font-weight: 750;
          color: #10233d;
        }

        .workflow-hero h1 span {
          color: #2563eb;
        }

        .workflow-hero-content > p {
          color: #64748b;
          font-size: 18px;
          line-height: 1.8;
          max-width: 540px;
        }

        .workflow-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .workflow-primary,
        .workflow-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 25px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .workflow-primary {
          background: #16a34a;
          color: white;
          border: 1px solid #16a34a;
        }

        .workflow-primary:hover {
          background: #15803d;
          transform: translateY(-2px);
        }

        .workflow-secondary {
          background: white;
          color: #172b45;
          border: 1px solid #dbe3ed;
        }

        .workflow-secondary:hover {
          background: #f1f5f9;
        }

        .workflow-support {
          display: flex;
          flex-wrap: wrap;
          gap: 17px;
          margin-top: 25px;
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }

        .workflow-preview {
          background: #e6edf7;
          padding: 25px;
          border-radius: 24px;
          box-shadow: 0 25px 70px #14243a12;
        }

        .workflow-window {
          background: white;
          border: 1px solid #dce5f0;
          border-radius: 13px;
          overflow: hidden;
        }

        .workflow-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 17px;
          border-bottom: 1px solid #e8edf3;
          font-size: 12px;
          font-weight: 700;
        }

        .workflow-dots {
          display: flex;
          gap: 5px;
        }

        .workflow-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .workflow-status {
          background: #eff6ff;
          color: #2563eb;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 10px;
        }

        .workflow-window-body {
          padding: 25px;
        }

        .workflow-preview-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #94a3b8;
        }

        .workflow-window-body > h3 {
          font-size: 25px;
          margin: 9px 0;
        }

        .workflow-window-body > p {
          color: #64748b;
          font-size: 12px;
          margin: 0 0 22px;
        }

        .workflow-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .workflow-metrics > div {
          background: #f8fafc;
          border: 1px solid #e8edf3;
          padding: 15px;
          border-radius: 8px;
        }

        .workflow-metrics small {
          display: block;
          font-size: 11px;
          color: #64748b;
          margin-bottom: 8px;
        }

        .workflow-metrics strong {
          font-size: 20px;
          color: #10233d;
        }

        .workflow-checklist {
          margin: 22px 0;
        }

        .workflow-check-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid #edf1f5;
          font-size: 12px;
          font-weight: 600;
        }

        .workflow-check-row small {
          margin-left: auto;
          color: #94a3b8;
          font-size: 10px;
        }

        .workflow-check {
          width: 23px;
          height: 23px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .workflow-check.complete {
          background: #dcfce7;
          color: #15803d;
        }

        .workflow-check.pending {
          background: #f1f5f9;
          color: #94a3b8;
        }

        .workflow-generate {
          background: #2563eb;
          color: white;
          padding: 14px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
        }

        .workflow-demo-note {
          margin-top: 12px;
          color: #94a3b8;
          text-align: center;
          font-size: 10px;
        }

        .workflow-benefits {
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
          padding: 33px 0;
        }

        .workflow-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .workflow-benefit-grid > div {
          text-align: center;
        }

        .workflow-benefit-grid strong {
          display: block;
          font-size: 17px;
          margin-bottom: 8px;
        }

        .workflow-benefit-grid span {
          font-size: 13px;
          color: #64748b;
        }

        .workflow-process {
          padding: 95px 0;
        }

        .workflow-section-heading {
          max-width: 720px;
          text-align: center;
          margin: 0 auto 45px;
        }

        .workflow-section-heading h2,
        .workflow-features h2 {
          font-size: clamp(30px, 4vw, 43px);
          letter-spacing: -1.7px;
          line-height: 1.2;
          margin: 0 0 18px;
        }

        .workflow-section-heading p,
        .workflow-features p {
          color: #64748b;
          line-height: 1.8;
          font-size: 16px;
        }

        .workflow-step-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .workflow-step-card {
          padding: 27px;
          border: 1px solid #dfe6ee;
          border-radius: 13px;
          background: white;
          transition: 0.2s ease;
        }

        .workflow-step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px #10233d0c;
          border-color: #93b4ed;
        }

        .workflow-step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .workflow-step-top > span {
          font-size: 10px;
          letter-spacing: 1px;
          color: #94a3b8;
          font-weight: 700;
        }

        .workflow-step-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 24px;
          font-weight: 700;
        }

        .workflow-step-card h3 {
          font-size: 18px;
          line-height: 1.4;
          margin: 0 0 13px;
        }

        .workflow-step-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .workflow-features {
          background: #f7f9fc;
          border-top: 1px solid #e8edf3;
          border-bottom: 1px solid #e8edf3;
          padding: 85px 0;
        }

        .workflow-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 85px;
          align-items: center;
        }

        .workflow-text-link {
          color: #2563eb;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
          font-size: 14px;
        }

        .workflow-feature-list {
          display: grid;
          gap: 22px;
        }

        .workflow-feature-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .workflow-feature-check {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #dcfce7;
          color: #15803d;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-weight: 700;
        }

        .workflow-feature-item h3 {
          font-size: 16px;
          margin: 3px 0 6px;
        }

        .workflow-feature-item p {
          font-size: 14px;
          margin: 0;
          line-height: 1.7;
        }

        .workflow-cta-section {
          padding: 75px 0;
        }

        .workflow-cta {
          border-radius: 22px;
          background: #10233d;
          color: white;
          padding: 65px 25px;
          text-align: center;
        }

        .workflow-cta-eyebrow {
          font-size: 11px;
          letter-spacing: 2px;
          color: #93c5fd;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .workflow-cta h2 {
          font-size: clamp(32px, 4vw, 46px);
          letter-spacing: -1.5px;
          line-height: 1.2;
          margin: 0;
        }

        .workflow-cta p {
          color: #b8c7db;
          font-size: 16px;
          line-height: 1.7;
          margin: 22px 0 30px;
        }

        .workflow-footer {
          border-top: 1px solid #e5eaf0;
          background: #f8fafc;
          padding: 40px 0 22px;
        }

        .workflow-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }

        .workflow-footer-top h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .workflow-footer-top p {
          color: #64748b;
          font-size: 13px;
        }

        .workflow-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          align-items: center;
        }

        .workflow-footer-links a {
          text-decoration: none;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
        }

        .workflow-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid #dfe6ee;
          color: #64748b;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .workflow-step-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .workflow-hero-grid,
          .workflow-feature-grid {
            gap: 40px;
          }

          .workflow-preview {
            padding: 15px;
          }
        }

        @media (max-width: 760px) {
          .workflow-container {
            width: calc(100% - 32px);
          }

          .workflow-hero {
            padding: 65px 0;
          }

          .workflow-hero-grid,
          .workflow-feature-grid {
            grid-template-columns: 1fr;
          }

          .workflow-hero h1 {
            letter-spacing: -2px;
          }

          .workflow-benefit-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .workflow-process,
          .workflow-features {
            padding: 60px 0;
          }

          .workflow-step-grid {
            grid-template-columns: 1fr;
          }

          .workflow-window-body {
            padding: 18px;
          }

          .workflow-cta-section {
            padding: 45px 0;
          }

          .workflow-cta {
            padding: 45px 20px;
          }
        }
      `}</style>
    </div>
  );
}