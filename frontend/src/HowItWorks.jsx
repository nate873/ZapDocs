import React, { useEffect } from "react";
import Header from "./Header";

const steps = [
  {
    number: "01",
    icon: "+",
    title: "Create a loan",
    description:
      "Create a new loan record and select Florida or California. Enter the basic financing terms and property information.",
    items: [
      "Select the applicable state",
      "Enter loan amount and interest rate",
      "Identify the property and lien position",
      "Establish loan and payment dates",
    ],
  },
  {
    number: "02",
    icon: "✓",
    title: "Complete and review",
    description:
      "Complete the transaction details, review your payment calculations and confirm the information before generating documents.",
    items: [
      "Enter borrower and lender information",
      "Load reusable lending profiles",
      "Review monthly payment amounts",
      "Confirm prepaid interest and balloon payment",
    ],
  },
  {
    number: "03",
    icon: "↗",
    title: "Generate documents",
    description:
      "Save your transaction and generate a coordinated, state-specific loan document package for professional review.",
    items: [
      "Save your loan record",
      "Preview available documents",
      "Generate the appropriate loan package",
      "Download documents for review",
    ],
  },
];

export default function HowItWorks() {
  useEffect(() => {
    document.title = "How It Works | ZapDocs";
  }, []);

  return (
    <div className="hiw-page">
      <Header />

      <main>
        {/* HERO SECTION */}

        <section className="hiw-hero">
          <div className="hiw-container hiw-hero-grid">

            <div className="hiw-hero-content">
              <div className="hiw-eyebrow">
                <span className="hiw-dot" />
                DISCOVER ZAPDOCS
              </div>

              <h1>
                From loan information
                <span>to closing documents.</span>
              </h1>

              <p>
                Preparing private lending documents
                shouldn't require entering the same
                information over and over again.
                With ZapDocs, move from agreed loan
                terms to a coordinated document
                package in three simple steps.
              </p>

              <div className="hiw-actions">
                <a
                  href="/demo"
                  className="hiw-primary"
                >
                  Book a Demo →
                </a>

                <a
                  href="#process"
                  className="hiw-secondary"
                >
                  See How It Works
                </a>
              </div>

              <div className="hiw-support">
                <span>✓ Florida</span>
                <span>✓ California</span>
                <span>✓ Built for private lending</span>
              </div>
            </div>

            {/* VISUAL WORKFLOW PREVIEW */}

            <div className="hiw-preview">
              <div className="hiw-window">

                <div className="hiw-window-header">
                  <div className="hiw-brand">
                    <div className="hiw-logo">Z</div>

                    <div>
                      <strong>ZapDocs</strong>
                      <small>Document Preparation</small>
                    </div>
                  </div>

                  <span className="hiw-preview-tag">
                    Preview
                  </span>
                </div>

                <div className="hiw-window-body">

                  <div className="hiw-window-label">
                    YOUR LOAN WORKFLOW
                  </div>

                  <h2>Prepare your loan package</h2>

                  <p className="hiw-window-description">
                    Complete your transaction information
                    and prepare your documents.
                  </p>

                  <div className="hiw-progress">
                    <div className="hiw-progress-item">
                      <div className="hiw-progress-circle complete">
                        ✓
                      </div>
                      <span>Create</span>
                    </div>

                    <div className="hiw-progress-line" />

                    <div className="hiw-progress-item">
                      <div className="hiw-progress-circle complete">
                        ✓
                      </div>
                      <span>Review</span>
                    </div>

                    <div className="hiw-progress-line" />

                    <div className="hiw-progress-item">
                      <div className="hiw-progress-circle active">
                        3
                      </div>
                      <span>Generate</span>
                    </div>
                  </div>

                  <div className="hiw-loan-summary">
                    <div>
                      <small>Loan amount</small>
                      <strong>$500,000</strong>
                    </div>

                    <div>
                      <small>Interest rate</small>
                      <strong>10.50%</strong>
                    </div>

                    <div>
                      <small>Property state</small>
                      <strong>Florida</strong>
                    </div>

                    <div>
                      <small>Monthly payment</small>
                      <strong>$4,375.00</strong>
                    </div>
                  </div>

                  <div className="hiw-document-heading">
                    Loan documents
                  </div>

                  <div className="hiw-document-list">
                    {[
                      "Promissory Note",
                      "Mortgage",
                      "Loan Agreement",
                      "Supporting Disclosures",
                    ].map((document) => (
                      <div
                        className="hiw-document-row"
                        key={document}
                      >
                        <div className="hiw-document-icon">
                          ▤
                        </div>

                        <span>{document}</span>

                        <small>Included</small>
                      </div>
                    ))}
                  </div>

                  <div className="hiw-generate-button">
                    Generate Loan Package →
                  </div>

                  <div className="hiw-preview-note">
                    Illustrative workflow · Fictional loan data
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* BENEFITS STRIP */}

        <section className="hiw-benefits">
          <div className="hiw-container hiw-benefit-grid">

            <div>
              <strong>Enter information once</strong>
              <p>Reduce repetitive transaction data entry.</p>
            </div>

            <div>
              <strong>Review your loan terms</strong>
              <p>Maintain control over financing details.</p>
            </div>

            <div>
              <strong>Generate coordinated documents</strong>
              <p>Prepare documents from one loan record.</p>
            </div>

          </div>
        </section>

        {/* THREE STEP PROCESS */}

        <section
          className="hiw-process"
          id="process"
        >
          <div className="hiw-container">

            <div className="hiw-section-heading">
              <div className="hiw-label">
                SIMPLE BY DESIGN
              </div>

              <h2>
                Three steps to your first loan package.
              </h2>

              <p>
                A repeatable document preparation
                process designed around the needs
                of private lending professionals.
              </p>
            </div>

            <div className="hiw-step-grid">
              {steps.map((step) => (
                <article
                  className="hiw-step-card"
                  key={step.number}
                >
                  <div className="hiw-step-top">
                    <div className="hiw-step-icon">
                      {step.icon}
                    </div>

                    <span>STEP {step.number}</span>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="hiw-step-divider" />

                  <div className="hiw-step-list">
                    {step.items.map((item) => (
                      <div
                        className="hiw-step-list-item"
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

        {/* DOCUMENT GENERATION SECTION */}

        <section className="hiw-details-section">
          <div className="hiw-container hiw-details-grid">

            <div>
              <div className="hiw-label">
                FROM DATA TO DOCUMENTS
              </div>

              <h2>
                One loan record.
                Multiple coordinated documents.
              </h2>

              <p>
                Your transaction information serves
                as the foundation for the documents
                you prepare. Instead of repeatedly
                entering borrower names, property
                addresses and financing terms,
                ZapDocs uses the information from
                your saved loan record.
              </p>

              <p>
                When negotiated terms change,
                reopen your transaction, update
                the relevant fields and generate
                a revised document package.
              </p>

              <a
                href="/document-generation"
                className="hiw-text-link"
              >
                Explore document generation →
              </a>
            </div>

            <div className="hiw-flow-card">
              <div className="hiw-flow-source">
                <div className="hiw-flow-source-icon">
                  ▤
                </div>

                <strong>Saved Loan Record</strong>

                <small>
                  Financing · Property · Parties
                </small>
              </div>

              <div className="hiw-flow-arrow">↓</div>

              <div className="hiw-flow-engine">
                <strong>ZapDocs</strong>

                <small>
                  State-specific document preparation
                </small>
              </div>

              <div className="hiw-flow-arrow">↓</div>

              <div className="hiw-flow-output">
                {[
                  "Promissory Note",
                  "Security Instrument",
                  "Agreements",
                  "Disclosures",
                ].map((title) => (
                  <div key={title}>
                    <span>▤</span>
                    <small>{title}</small>
                  </div>
                ))}
              </div>

              <div className="hiw-preview-note">
                Documents vary by state and transaction.
              </div>
            </div>

          </div>
        </section>

        {/* AFTER GENERATING */}

        <section className="hiw-review-section">
          <div className="hiw-container">

            <div className="hiw-section-heading">
              <div className="hiw-label">
                AFTER GENERATING
              </div>

              <h2>
                Your documents. Your final review.
              </h2>

              <p>
                Maintain control of your transaction
                throughout the document preparation process.
              </p>
            </div>

            <div className="hiw-review-grid">

              {[
                {
                  icon: "✓",
                  title: "Review the transaction",
                  description:
                    "Confirm that the generated documents reflect the agreed financing terms, party information, dates and payment amounts.",
                },
                {
                  icon: "↻",
                  title: "Make necessary revisions",
                  description:
                    "Update your saved loan record and regenerate documents whenever transaction information changes. Previously downloaded files are not automatically updated.",
                },
                {
                  icon: "◎",
                  title: "Coordinate professional review",
                  description:
                    "Provide the prepared documents to your attorneys, escrow officers, title companies or other closing professionals as appropriate.",
                },
              ].map((item) => (
                <article
                  className="hiw-review-card"
                  key={item.title}
                >
                  <div className="hiw-step-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}

            </div>

          </div>
        </section>

        {/* FAQ SECTION */}

        <section className="hiw-faq-section">
          <div className="hiw-container hiw-faq-grid">

            <div>
              <div className="hiw-label">
                FREQUENTLY ASKED QUESTIONS
              </div>

              <h2>
                Getting started with ZapDocs.
              </h2>

              <p>
                Learn more about preparing your
                first private lending document package.
              </p>

              <a
                href="/help-center"
                className="hiw-text-link"
              >
                Visit the Help Center →
              </a>
            </div>

            <div className="hiw-faq-list">

              {[
                [
                  "Which states does ZapDocs support?",
                  "ZapDocs currently supports document preparation for Florida and California private lending transactions.",
                ],
                [
                  "Can I save a loan and return to it later?",
                  "Yes. Save your transaction information and reopen your loan record when additional information or revised financing terms become available.",
                ],
                [
                  "Can I update documents after generating them?",
                  "You can revise the saved loan record and generate a new package. Previously downloaded documents will not automatically reflect these changes.",
                ],
                [
                  "Can I test the platform with fictional information?",
                  "Yes. We recommend exploring the preparation workflow with a fictional transaction before entering confidential borrower or lender information.",
                ],
                [
                  "Does ZapDocs replace an attorney?",
                  "No. ZapDocs is document preparation software. It does not provide legal advice or replace independent professional review.",
                ],
              ].map(([question, answer]) => (
                <details
                  className="hiw-faq-item"
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

        <section className="hiw-cta-section">
          <div className="hiw-container">

            <div className="hiw-cta">

              <div className="hiw-cta-label">
                EXPERIENCE ZAPDOCS
              </div>

              <h2>
                Your next loan package
                <br />
                starts here.
              </h2>

              <p>
                Discover a simpler way to prepare
                private lending documents, manage
                transaction information and reduce
                repetitive data entry.
              </p>

              <div className="hiw-cta-actions">

                <a
                  href="/demo"
                  className="hiw-primary"
                >
                  Book a Demo →
                </a>

                <a
                  href="/pricing"
                  className="hiw-cta-secondary"
                >
                  View Pricing
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}

      <footer className="hiw-footer">
        <div className="hiw-container">

          <div className="hiw-footer-top">

            <div>
              <h3>ZapDocs</h3>

              <p>
                Document preparation software
                built for private lending professionals.
              </p>
            </div>

            <div className="hiw-footer-links">
              <a href="/platform">Platform</a>
              <a href="/pricing">Pricing</a>
              <a href="/help-center">Help Center</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>

          </div>

          <div className="hiw-footer-bottom">
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
        .hiw-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .hiw-page * {
          box-sizing: border-box;
        }

        .hiw-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .hiw-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
        }

        .hiw-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .hiw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          background: white;
          padding: 9px 15px;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .hiw-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .hiw-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -2.8px;
          margin: 0 0 25px;
          color: #101c32;
        }

        .hiw-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .hiw-hero-content > p {
          color: #637287;
          font-size: 17px;
          line-height: 1.85;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .hiw-actions,
        .hiw-cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .hiw-primary,
        .hiw-secondary,
        .hiw-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 650;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .hiw-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .hiw-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .hiw-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .hiw-secondary:hover {
          background: #f1f5fa;
        }

        .hiw-support {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 27px;
          color: #64748b;
          font-weight: 600;
          font-size: 11px;
        }

        .hiw-preview {
          background: #e4eaf6;
          padding: 20px;
          border-radius: 25px;
          border: 1px solid #dfe6f2;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .hiw-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .hiw-window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .hiw-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .hiw-logo {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          color: white;
          background: #3d63f5;
          border-radius: 9px;
          font-weight: 800;
          font-size: 18px;
        }

        .hiw-brand strong {
          display: block;
          font-size: 13px;
        }

        .hiw-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .hiw-preview-tag {
          background: #eff3f9;
          color: #637287;
          padding: 6px 12px;
          font-size: 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .hiw-window-body {
          padding: 24px;
        }

        .hiw-window-label {
          font-size: 10px;
          color: #8491a4;
          letter-spacing: 1.2px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .hiw-window-body > h2 {
          font-size: 23px;
          margin: 0 0 8px;
        }

        .hiw-window-description {
          color: #8491a4;
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        .hiw-progress {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: 28px 0;
        }

        .hiw-progress-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 55px;
        }

        .hiw-progress-item > span {
          color: #637287;
          font-size: 10px;
          font-weight: 650;
        }

        .hiw-progress-circle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: 700;
        }

        .hiw-progress-circle.complete {
          background: #e5f8ed;
          color: #16834c;
        }

        .hiw-progress-circle.active {
          background: #3d63f5;
          color: white;
          box-shadow: 0 0 0 5px #edf2ff;
        }

        .hiw-progress-line {
          flex: 1;
          height: 2px;
          background: #dce5f7;
          margin-top: 17px;
        }

        .hiw-loan-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
          margin-bottom: 24px;
        }

        .hiw-loan-summary > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 14px;
        }

        .hiw-loan-summary small {
          display: block;
          color: #64748b;
          font-size: 10px;
          margin-bottom: 8px;
        }

        .hiw-loan-summary strong {
          font-size: 20px;
          color: #101c32;
        }

        .hiw-document-heading {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .hiw-document-list {
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          overflow: hidden;
        }

        .hiw-document-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-bottom: 1px solid #edf1f5;
        }

        .hiw-document-row:last-child {
          border-bottom: 0;
        }

        .hiw-document-icon {
          width: 27px;
          height: 30px;
          border-radius: 5px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .hiw-document-row > span {
          font-size: 11px;
          font-weight: 600;
        }

        .hiw-document-row small {
          margin-left: auto;
          color: #16834c;
          font-size: 9px;
          font-weight: 600;
        }

        .hiw-generate-button {
          background: #3d63f5;
          color: white;
          padding: 14px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          border-radius: 8px;
          margin-top: 20px;
        }

        .hiw-preview-note {
          font-size: 9px;
          text-align: center;
          margin-top: 15px;
          color: #94a3b8;
        }

        .hiw-benefits {
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .hiw-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .hiw-benefit-grid strong {
          font-size: 16px;
        }

        .hiw-benefit-grid p {
          font-size: 13px;
          color: #64748b;
          margin: 9px 0 0;
        }

        .hiw-process,
        .hiw-review-section {
          padding: 95px 0;
          scroll-margin-top: 100px;
        }

        .hiw-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .hiw-label {
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.7px;
          color: #3d63f5;
          margin-bottom: 20px;
        }

        .hiw-section-heading h2,
        .hiw-details-grid h2,
        .hiw-faq-grid h2 {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
          color: #101c32;
        }

        .hiw-section-heading p,
        .hiw-details-grid > div > p,
        .hiw-faq-grid > div > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 16px;
        }

        .hiw-step-grid,
        .hiw-review-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .hiw-step-card,
        .hiw-review-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 30px;
          transition: all 0.25s ease;
        }

        .hiw-step-card:hover,
        .hiw-review-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .hiw-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .hiw-step-top > span {
          color: #94a3b8;
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .hiw-step-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 25px;
          font-weight: 700;
        }

        .hiw-step-card h3,
        .hiw-review-card h3 {
          font-size: 21px;
          color: #101c32;
          margin: 0 0 15px;
        }

        .hiw-step-card > p,
        .hiw-review-card > p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .hiw-step-divider {
          height: 1px;
          background: #e5eaf0;
          margin: 25px 0;
        }

        .hiw-step-list {
          display: grid;
          gap: 15px;
        }

        .hiw-step-list-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .hiw-step-list-item > span {
          color: #16834c;
          font-weight: 700;
          font-size: 13px;
        }

        .hiw-step-list-item p {
          font-size: 12px;
          line-height: 1.6;
          color: #526278;
          margin: 0;
        }

        .hiw-details-section,
        .hiw-faq-section {
          padding: 90px 0;
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .hiw-details-grid,
        .hiw-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 85px;
        }

        .hiw-text-link {
          color: #3d63f5;
          font-weight: 650;
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }

        .hiw-text-link:hover {
          text-decoration: underline;
        }

        .hiw-flow-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .hiw-flow-source {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 12px;
          padding: 22px;
          text-align: center;
        }

        .hiw-flow-source-icon {
          width: 38px;
          height: 38px;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 22px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          margin: 0 auto 12px;
        }

        .hiw-flow-source strong,
        .hiw-flow-engine strong {
          display: block;
          font-size: 16px;
          margin-bottom: 7px;
        }

        .hiw-flow-source small {
          color: #64748b;
          font-size: 11px;
        }

        .hiw-flow-arrow {
          text-align: center;
          font-size: 27px;
          color: #3d63f5;
          padding: 9px 0;
        }

        .hiw-flow-engine {
          padding: 22px;
          border-radius: 12px;
          background: #3d63f5;
          color: white;
          text-align: center;
        }

        .hiw-flow-engine small {
          font-size: 11px;
          color: #dce5ff;
        }

        .hiw-flow-output {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .hiw-flow-output > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 8px;
          text-align: center;
          padding: 15px 5px;
        }

        .hiw-flow-output span {
          display: block;
          font-size: 25px;
          color: #3d63f5;
          margin-bottom: 10px;
        }

        .hiw-flow-output small {
          font-size: 9px;
          color: #526278;
          line-height: 1.5;
        }

        .hiw-review-card .hiw-step-icon {
          margin-bottom: 22px;
        }

        .hiw-faq-grid {
          align-items: start;
        }

        .hiw-faq-list {
          display: grid;
          gap: 13px;
        }

        .hiw-faq-item {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          padding: 19px;
        }

        .hiw-faq-item summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 650;
          color: #101c32;
        }

        .hiw-faq-item p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        .hiw-cta-section {
          padding: 80px 0;
        }

        .hiw-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          padding: 70px 25px;
          border-radius: 22px;
          text-align: center;
        }

        .hiw-cta-label {
          font-size: 11px;
          color: #a6b9ff;
          font-weight: 750;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .hiw-cta h2 {
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
          color: white;
        }

        .hiw-cta p {
          color: #c1cce0;
          font-size: 16px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 28px;
        }

        .hiw-cta-actions {
          justify-content: center;
        }

        .hiw-cta-secondary {
          border: 1px solid #ffffff50;
          color: white;
        }

        .hiw-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .hiw-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .hiw-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .hiw-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .hiw-footer-top p {
          color: #64748b;
          font-size: 13px;
          max-width: 350px;
          line-height: 1.7;
        }

        .hiw-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .hiw-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .hiw-footer-links a:hover {
          color: #3d63f5;
        }

        .hiw-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          color: #64748b;
          font-size: 11px;
          border-top: 1px solid #dfe5ed;
          padding-top: 23px;
          margin-top: 30px;
        }

        @media (max-width: 1050px) {
          .hiw-hero-grid,
          .hiw-details-grid,
          .hiw-faq-grid {
            gap: 35px;
          }

          .hiw-preview {
            padding: 12px;
          }

          .hiw-step-card,
          .hiw-review-card {
            padding: 23px;
          }

          .hiw-hero h1 {
            font-size: 44px;
          }
        }

        @media (max-width: 800px) {
          .hiw-container {
            width: calc(100% - 36px);
          }

          .hiw-hero-grid,
          .hiw-details-grid,
          .hiw-faq-grid {
            grid-template-columns: 1fr;
          }

          .hiw-hero {
            padding: 60px 0;
          }

          .hiw-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .hiw-preview {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }

          .hiw-step-grid,
          .hiw-review-grid,
          .hiw-benefit-grid {
            grid-template-columns: 1fr;
          }

          .hiw-process,
          .hiw-details-section,
          .hiw-review-section,
          .hiw-faq-section {
            padding: 60px 0;
          }

          .hiw-benefit-grid {
            gap: 30px;
          }

          .hiw-cta-section {
            padding: 50px 0;
          }
        }

        @media (max-width: 480px) {
          .hiw-hero h1 {
            font-size: 36px;
          }

          .hiw-window-body {
            padding: 15px;
          }

          .hiw-loan-summary strong {
            font-size: 17px;
          }

          .hiw-flow-card {
            padding: 17px;
          }

          .hiw-flow-output {
            grid-template-columns: repeat(2, 1fr);
          }

          .hiw-cta {
            padding: 45px 20px;
          }
        }
      `}</style>

    </div>
  );
}