import React, { useEffect, useState } from "react";
import Header from "./Header";

const documentPackages = {
  Florida: [
    {
      name: "Promissory Note",
      category: "Core financing document",
    },
    {
      name: "Mortgage",
      category: "Security instrument",
    },
    {
      name: "Agreement to Procure Lender",
      category: "Brokerage agreement",
    },
    {
      name: "Personal Guaranty",
      category: "Supporting agreement",
    },
    {
      name: "Default Rate Addendum",
      category: "Supporting document",
    },
    {
      name: "Oral Disclosure",
      category: "Disclosure",
    },
  ],
  California: [
    {
      name: "Promissory Note",
      category: "Core financing document",
    },
    {
      name: "Deed of Trust",
      category: "Security instrument",
    },
    {
      name: "Supporting Loan Agreements",
      category: "Supporting documents",
    },
    {
      name: "Oral Disclosure",
      category: "Disclosure",
    },
  ],
};

const features = [
  {
    icon: "▤",
    title: "Core financing documents",
    description:
      "Prepare promissory notes and applicable security instruments using the financing and property information entered into your loan record.",
  },
  {
    icon: "▧",
    title: "Supporting agreements",
    description:
      "Generate configured supporting agreements, addenda and disclosures based on the applicable state and transaction.",
  },
  {
    icon: "◎",
    title: "Standalone documents",
    description:
      "Prepare supported servicing agreements and lender disclosures individually when applicable.",
  },
  {
    icon: "↓",
    title: "Editable Word documents",
    description:
      "Download documents in an editable Word format for further review and transaction-specific revisions.",
  },
  {
    icon: "✓",
    title: "Document previews",
    description:
      "Preview available generated documents before downloading, subject to document rendering availability.",
  },
  {
    icon: "↻",
    title: "Regenerate revised packages",
    description:
      "Update your saved transaction information and prepare a revised package when loan terms change.",
  },
];

export default function DocumentOutputs() {
  const [selectedState, setSelectedState] = useState("Florida");

  useEffect(() => {
    document.title = "Document Outputs | ZapDocs";
  }, []);

  return (
    <div className="dout-page">
      <Header />

      <main>
        {/* HERO SECTION */}

        <section className="dout-hero">
          <div className="dout-container dout-hero-grid">
            <div className="dout-hero-content">
              <div className="dout-eyebrow">
                <span className="dout-dot" />
                ZAPDOCS / DOCUMENT OUTPUTS
              </div>

              <h1>
                Your loan documents.
                <span>Ready for review.</span>
              </h1>

              <p>
                Generate coordinated private lending documents
                from a single transaction record. Explore
                state-specific financing documents, supporting
                agreements and standalone disclosures built
                around your lending workflow.
              </p>

              <div className="dout-actions">
                <a href="/demo" className="dout-primary">
                  Book a Demo →
                </a>

                <a
                  href="#document-packages"
                  className="dout-secondary"
                >
                  Explore Documents
                </a>
              </div>

              <div className="dout-support">
                <span>✓ Florida & California</span>
                <span>✓ Editable Word documents</span>
                <span>✓ Coordinated packages</span>
              </div>
            </div>

            {/* DOCUMENT PACKAGE PREVIEW */}

            <div className="dout-preview">
              <div className="dout-window">
                <div className="dout-window-header">
                  <div className="dout-brand">
                    <div className="dout-logo">Z</div>

                    <div>
                      <strong>ZapDocs</strong>
                      <small>Document Center</small>
                    </div>
                  </div>

                  <span className="dout-preview-tag">
                    Preview
                  </span>
                </div>

                <div className="dout-window-body">
                  <div className="dout-small-label">
                    DOCUMENT PACKAGE
                  </div>

                  <h2>Explore your documents</h2>

                  <p className="dout-window-description">
                    Select a state to explore example outputs.
                  </p>

                  <div className="dout-state-selector">
                    {["Florida", "California"].map((state) => (
                      <button
                        key={state}
                        type="button"
                        aria-pressed={selectedState === state}
                        onClick={() => setSelectedState(state)}
                        className={
                          selectedState === state
                            ? "dout-state-button active"
                            : "dout-state-button"
                        }
                      >
                        {state}
                      </button>
                    ))}
                  </div>

                  <div className="dout-package-summary">
                    <div>
                      <small>Selected workflow</small>
                      <strong>{selectedState}</strong>
                    </div>

                    <div>
                      <small>Output format</small>
                      <strong>DOCX</strong>
                    </div>
                  </div>

                  <div className="dout-list-heading">
                    Example package contents
                  </div>

                  <div className="dout-document-list">
                    {documentPackages[selectedState].map(
                      (document) => (
                        <div
                          className="dout-document-row"
                          key={document.name}
                        >
                          <div className="dout-file-icon">
                            <svg
                              width="19"
                              height="23"
                              viewBox="0 0 24 28"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M5 2H15L21 8V25H5V2Z"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 2V9H21M9 14H17M9 18H17M9 22H14"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>

                          <div className="dout-document-info">
                            <strong>{document.name}</strong>
                            <small>{document.category}</small>
                          </div>

                          <span className="dout-file-format">
                            DOCX
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <a
                    href="/demo"
                    className="dout-download-preview"
                  >
                    Explore ZapDocs in a Demo →
                  </a>

                  <div className="dout-preview-note">
                    Illustrative document inventory.
                    Actual outputs vary by configuration.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS STRIP */}

        <section className="dout-benefits">
          <div className="dout-container dout-benefit-grid">
            <div>
              <strong>State-specific workflows</strong>
              <p>Configured Florida and California documents.</p>
            </div>

            <div>
              <strong>Coordinated loan packages</strong>
              <p>Prepare documents from one transaction record.</p>
            </div>

            <div>
              <strong>Editable document outputs</strong>
              <p>Maintain control of your final closing materials.</p>
            </div>
          </div>
        </section>

        {/* DOCUMENT CAPABILITIES */}

        <section
          id="document-packages"
          className="dout-section"
        >
          <div className="dout-container">
            <div className="dout-section-heading">
              <div className="dout-label">
                DOCUMENT CAPABILITIES
              </div>

              <h2>
                More than a single loan document.
              </h2>

              <p>
                Prepare coordinated financing documents and
                supporting materials without repeatedly entering
                the same transaction information.
              </p>
            </div>

            <div className="dout-feature-grid">
              {features.map((feature, index) => (
                <article
                  className="dout-feature-card"
                  key={feature.title}
                >
                  <div className="dout-feature-top">
                    <div className="dout-feature-icon">
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

        {/* STATE-SPECIFIC DOCUMENTS */}

        <section className="dout-states-section">
          <div className="dout-container">
            <div className="dout-section-heading">
              <div className="dout-label">
                STATE-SPECIFIC DOCUMENTATION
              </div>

              <h2>
                Different states. Different requirements.
              </h2>

              <p>
                Explore document preparation workflows designed
                around the configured financing documents for
                Florida and California.
              </p>
            </div>

            <div className="dout-state-grid">
              <article className="dout-state-card">
                <div className="dout-state-card-top">
                  <div className="dout-state-abbreviation">
                    FL
                  </div>

                  <span className="dout-state-tag">
                    Supported workflow
                  </span>
                </div>

                <h3>Florida loan documents</h3>

                <p>
                  Prepare a coordinated Florida private lending
                  package using your saved loan information.
                </p>

                <div className="dout-state-document-list">
                  {[
                    "Promissory Note",
                    "Mortgage",
                    "Agreement to Procure Lender",
                    "Personal Guaranty",
                    "Default Rate Addendum",
                    "Supporting disclosures and documents",
                  ].map((item) => (
                    <div key={item}>
                      <span>✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="dout-state-footnote">
                  Actual package contents depend on the
                  configured workflow and transaction.
                </div>
              </article>

              <article className="dout-state-card">
                <div className="dout-state-card-top">
                  <div className="dout-state-abbreviation">
                    CA
                  </div>

                  <span className="dout-state-tag">
                    Supported workflow
                  </span>
                </div>

                <h3>California loan documents</h3>

                <p>
                  Prepare California private lending documents
                  using the applicable deed of trust workflow.
                </p>

                <div className="dout-state-document-list">
                  {[
                    "Promissory Note",
                    "Deed of Trust",
                    "Supporting loan agreements",
                    "Oral Disclosure",
                    "Additional configured documents",
                  ].map((item) => (
                    <div key={item}>
                      <span>✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="dout-state-footnote">
                  Standalone servicing agreements and lender
                  disclosures may also be available.
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* STANDALONE DOCUMENTS */}

        <section className="dout-section">
          <div className="dout-container dout-split-grid">
            <div>
              <div className="dout-label">
                STANDALONE DOCUMENT GENERATION
              </div>

              <h2 className="dout-large-heading">
                Generate the documents you need.
              </h2>

              <p className="dout-body-text">
                Not every transaction requires generating an
                entirely new closing package. ZapDocs provides
                supported standalone document outputs for
                specific lending and servicing needs.
              </p>

              <p className="dout-body-text">
                Reuse the information from your loan record
                and prepare applicable documents without
                entering the transaction from scratch.
              </p>

              <a
                href="/document-generation"
                className="dout-text-link"
              >
                Explore document generation →
              </a>
            </div>

            <div className="dout-standalone-window">
              <div className="dout-standalone-heading">
                <h3>Standalone Documents</h3>
                <p>Select an applicable document type.</p>
              </div>

              {[
                {
                  title: "Servicing Agreement",
                  description:
                    "Prepare supported loan servicing documentation.",
                },
                {
                  title: "Lender Disclosure",
                  description:
                    "Prepare applicable lender disclosure forms.",
                },
              ].map((document) => (
                <div
                  className="dout-standalone-card"
                  key={document.title}
                >
                  <div className="dout-standalone-icon">
                    ▤
                  </div>

                  <div>
                    <h4>{document.title}</h4>
                    <p>{document.description}</p>
                  </div>

                  <span className="dout-standalone-format">
                    DOCX
                  </span>
                </div>
              ))}

              <div className="dout-preview-note">
                Illustrative standalone document selection.
              </div>
            </div>
          </div>
        </section>

        {/* FILE FORMATS */}

        <section className="dout-formats-section">
          <div className="dout-container">
            <div className="dout-section-heading">
              <div className="dout-label">
                FLEXIBLE DOCUMENT OUTPUTS
              </div>

              <h2>
                Documents that fit your closing process.
              </h2>

              <p>
                Prepare your documents for further review,
                revisions and coordination with closing
                professionals.
              </p>
            </div>

            <div className="dout-format-grid">
              <article className="dout-format-card">
                <div className="dout-format-icon word">
                  W
                </div>

                <h3>Editable Word documents</h3>

                <p>
                  Download DOCX files that can be opened
                  and reviewed using Microsoft Word or
                  compatible document editing software.
                </p>

                <span className="dout-format-extension">
                  .DOCX
                </span>
              </article>

              <article className="dout-format-card">
                <div className="dout-format-icon pdf">
                  PDF
                </div>

                <h3>PDF document previews</h3>

                <p>
                  Review rendered document previews where
                  available before downloading the prepared
                  documents.
                </p>

                <span className="dout-format-extension">
                  PDF PREVIEW
                </span>
              </article>

              <article className="dout-format-card">
                <div className="dout-format-icon package">
                  ▧
                </div>

                <h3>Full loan packages</h3>

                <p>
                  Prepare the configured closing package
                  using the information from your saved
                  transaction record.
                </p>

                <span className="dout-format-extension">
                  FULL PACKAGE
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* DOCUMENT PREPARATION PROCESS */}

        <section className="dout-section">
          <div className="dout-container">
            <div className="dout-section-heading">
              <div className="dout-label">
                YOUR DOCUMENT WORKFLOW
              </div>

              <h2>
                From generation to final review.
              </h2>
            </div>

            <div className="dout-process-grid">
              {[
                [
                  "01",
                  "Select your output",
                  "Choose the applicable document package or supported standalone document.",
                ],
                [
                  "02",
                  "Preview documents",
                  "Review available previews and confirm transaction information.",
                ],
                [
                  "03",
                  "Download your files",
                  "Download your prepared document output for further review.",
                ],
                [
                  "04",
                  "Complete final review",
                  "Coordinate with closing professionals and attach any additional required materials.",
                ],
              ].map(([number, title, description]) => (
                <article
                  className="dout-process-card"
                  key={number}
                >
                  <div className="dout-process-number">
                    {number}
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CLOSING MATERIALS */}

        <section className="dout-review-section">
          <div className="dout-container dout-split-grid">
            <div>
              <div className="dout-label">
                FINAL CLOSING MATERIALS
              </div>

              <h2 className="dout-large-heading">
                Your closing package may require more.
              </h2>

              <p className="dout-body-text">
                Every private lending transaction is different.
                Additional materials may need to be obtained
                from title companies, escrow officers,
                attorneys or other closing professionals.
              </p>

              <p className="dout-body-text">
                Review the generated documents and confirm
                all transaction-specific requirements before
                execution and closing.
              </p>
            </div>

            <div className="dout-review-card">
              <h3>Additional closing materials</h3>

              {[
                "Legal descriptions and exhibits",
                "Preliminary title reports",
                "Title insurance materials",
                "Settlement statements",
                "Transaction-specific agreements",
                "Additional required disclosures",
              ].map((item) => (
                <div className="dout-review-row" key={item}>
                  <span className="dout-review-check">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}

              <div className="dout-review-notice">
                These materials may need to be supplied
                separately. ZapDocs does not independently
                verify closing requirements.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}

        <section className="dout-section">
          <div className="dout-container dout-faq-grid">
            <div>
              <div className="dout-label">
                FREQUENTLY ASKED QUESTIONS
              </div>

              <h2 className="dout-large-heading">
                Questions about document outputs?
              </h2>

              <p className="dout-body-text">
                Learn more about generating, downloading
                and reviewing your ZapDocs documents.
              </p>

              <a
                href="/help-center"
                className="dout-text-link"
              >
                Visit the Help Center →
              </a>
            </div>

            <div className="dout-faq-list">
              {[
                [
                  "Which states does ZapDocs support?",
                  "ZapDocs currently provides configured private lending document workflows for Florida and California.",
                ],
                [
                  "Are the documents editable?",
                  "Supported Word document outputs can be downloaded and edited using compatible document editing software.",
                ],
                [
                  "Can I generate individual documents?",
                  "Supported standalone servicing agreements and lender disclosures can be generated individually where available.",
                ],
                [
                  "Can I preview documents before downloading?",
                  "Document previews are available for supported outputs, subject to the availability of the document renderer.",
                ],
                [
                  "Can I regenerate documents when loan terms change?",
                  "Yes. Update your saved loan information and generate a revised document package. Previously downloaded files will not automatically update.",
                ],
                [
                  "Are generated documents ready to sign?",
                  "Generated documents require review for accuracy, applicability and transaction-specific requirements before execution. ZapDocs does not replace independent legal review.",
                ],
              ].map(([question, answer]) => (
                <details
                  className="dout-faq-item"
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

        <section className="dout-cta-section">
          <div className="dout-container">
            <div className="dout-cta">
              <div className="dout-cta-label">
                EXPERIENCE ZAPDOCS
              </div>

              <h2>
                Your next closing package.
                <br />
                A simpler way to prepare it.
              </h2>

              <p>
                Discover how ZapDocs helps private lending
                professionals prepare coordinated documents
                and reduce repetitive transaction data entry.
              </p>

              <div className="dout-cta-actions">
                <a href="/demo" className="dout-primary">
                  Book a Demo →
                </a>

                <a
                  href="/pricing"
                  className="dout-cta-secondary"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="dout-footer">
        <div className="dout-container">
          <div className="dout-footer-top">
            <div>
              <h3>ZapDocs</h3>

              <p>
                Document preparation software built
                for private lending professionals.
              </p>
            </div>

            <div className="dout-footer-links">
              <a href="/platform">Platform</a>
              <a href="/pricing">Pricing</a>
              <a href="/help-center">Help Center</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div className="dout-footer-bottom">
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
        .dout-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .dout-page * {
          box-sizing: border-box;
        }

        .dout-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .dout-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 90px 0;
        }

        .dout-hero-grid,
        .dout-split-grid,
        .dout-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .dout-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: white;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          padding: 9px 15px;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .dout-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .dout-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -2.8px;
          margin: 0 0 25px;
          color: #101c32;
        }

        .dout-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .dout-hero-content > p {
          color: #637287;
          font-size: 17px;
          line-height: 1.85;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .dout-actions,
        .dout-cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .dout-primary,
        .dout-secondary,
        .dout-cta-secondary {
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

        .dout-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .dout-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .dout-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .dout-secondary:hover {
          background: #f1f5fa;
        }

        .dout-support {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .dout-preview {
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          padding: 20px;
          border-radius: 25px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .dout-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .dout-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .dout-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .dout-logo {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: #3d63f5;
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
          font-weight: 800;
        }

        .dout-brand strong {
          display: block;
          font-size: 13px;
        }

        .dout-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .dout-preview-tag {
          background: #eff3f9;
          color: #637287;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 600;
        }

        .dout-window-body {
          padding: 24px;
        }

        .dout-small-label {
          font-size: 10px;
          color: #8491a4;
          letter-spacing: 1.2px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .dout-window-body > h2 {
          font-size: 23px;
          margin: 0 0 8px;
        }

        .dout-window-description {
          color: #8491a4;
          font-size: 12px;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        .dout-state-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f1f4f9;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 4px;
          margin-bottom: 20px;
          gap: 4px;
        }

        .dout-state-button {
          border: 0;
          background: transparent;
          color: #64748b;
          padding: 11px 10px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .dout-state-button.active {
          background: #3d63f5;
          color: white;
          box-shadow: 0 3px 8px #3d63f525;
        }

        .dout-state-button:focus-visible {
          outline: 2px solid #101c32;
          outline-offset: 2px;
        }

        .dout-package-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .dout-package-summary > div {
          border: 1px solid #e1e7ef;
          background: #f8fafc;
          border-radius: 9px;
          padding: 13px;
        }

        .dout-package-summary small {
          display: block;
          font-size: 10px;
          color: #64748b;
          margin-bottom: 7px;
        }

        .dout-package-summary strong {
          font-size: 17px;
        }

        .dout-list-heading {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .dout-document-list {
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          overflow: hidden;
        }

        .dout-document-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px;
          border-bottom: 1px solid #edf1f5;
        }

        .dout-document-row:last-child {
          border-bottom: 0;
        }

        .dout-file-icon {
          width: 34px;
          height: 39px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          border-radius: 7px;
          flex-shrink: 0;
        }

        .dout-document-info {
          flex: 1;
          min-width: 0;
        }

        .dout-document-info strong {
          display: block;
          font-size: 12px;
          line-height: 1.4;
          margin-bottom: 4px;
        }

        .dout-document-info small {
          display: block;
          font-size: 10px;
          color: #8491a4;
        }

        .dout-file-format {
          font-size: 9px;
          font-weight: 700;
          color: #3d63f5;
          background: #edf2ff;
          padding: 5px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .dout-download-preview {
          display: block;
          margin-top: 20px;
          background: #3d63f5;
          color: white;
          border-radius: 8px;
          padding: 14px;
          text-align: center;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .dout-download-preview:hover {
          background: #284ce1;
          color: white;
        }

        .dout-preview-note {
          color: #8491a4;
          text-align: center;
          font-size: 10px;
          line-height: 1.6;
          margin-top: 17px;
        }

        .dout-benefits {
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .dout-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .dout-benefit-grid strong {
          font-size: 17px;
        }

        .dout-benefit-grid p {
          color: #64748b;
          font-size: 13px;
          margin: 9px 0 0;
        }

        .dout-section {
          padding: 90px 0;
          scroll-margin-top: 100px;
        }

        .dout-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .dout-label {
          color: #3d63f5;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.7px;
          margin-bottom: 20px;
        }

        .dout-section-heading h2,
        .dout-large-heading {
          color: #101c32;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
        }

        .dout-section-heading p,
        .dout-body-text {
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .dout-feature-grid,
        .dout-format-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .dout-feature-card,
        .dout-format-card,
        .dout-process-card {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.25s ease;
        }

        .dout-feature-card:hover,
        .dout-format-card:hover,
        .dout-process-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .dout-feature-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .dout-feature-top > span {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 650;
        }

        .dout-feature-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 12px;
          font-size: 25px;
          font-weight: 700;
        }

        .dout-feature-card h3,
        .dout-format-card h3,
        .dout-process-card h3 {
          color: #101c32;
          font-size: 19px;
          margin: 0 0 13px;
        }

        .dout-feature-card p,
        .dout-format-card p,
        .dout-process-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .dout-states-section,
        .dout-formats-section,
        .dout-review-section {
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
          padding: 90px 0;
        }

        .dout-state-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .dout-state-card {
          background: white;
          border: 1px solid #dfe5ed;
          padding: 35px;
          border-radius: 17px;
        }

        .dout-state-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 27px;
        }

        .dout-state-abbreviation {
          width: 60px;
          height: 60px;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 13px;
          display: grid;
          place-items: center;
          font-size: 23px;
          font-weight: 800;
        }

        .dout-state-tag {
          background: #e5f8ed;
          color: #16834c;
          font-size: 10px;
          font-weight: 650;
          padding: 7px 11px;
          border-radius: 20px;
        }

        .dout-state-card h3 {
          font-size: 25px;
          margin: 0 0 15px;
        }

        .dout-state-card > p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
        }

        .dout-state-document-list {
          display: grid;
          gap: 16px;
          padding: 25px 0;
          margin-top: 20px;
          border-top: 1px solid #e5eaf0;
        }

        .dout-state-document-list > div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #526278;
          font-size: 14px;
        }

        .dout-state-document-list span {
          color: #16834c;
          font-weight: 750;
        }

        .dout-state-footnote {
          padding-top: 17px;
          border-top: 1px solid #e5eaf0;
          font-size: 11px;
          color: #8491a4;
          line-height: 1.7;
        }

        .dout-text-link {
          display: inline-block;
          margin-top: 15px;
          color: #3d63f5;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
        }

        .dout-text-link:hover {
          text-decoration: underline;
        }

        .dout-standalone-window {
          border: 1px solid #dfe5ed;
          border-radius: 17px;
          background: #f8fafc;
          padding: 25px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .dout-standalone-heading {
          margin-bottom: 25px;
        }

        .dout-standalone-heading h3 {
          font-size: 21px;
          margin: 0 0 7px;
        }

        .dout-standalone-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .dout-standalone-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 13px;
        }

        .dout-standalone-icon {
          width: 43px;
          height: 50px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          font-size: 24px;
          border-radius: 9px;
          flex-shrink: 0;
        }

        .dout-standalone-card > div:nth-child(2) {
          flex: 1;
        }

        .dout-standalone-card h4 {
          font-size: 14px;
          margin: 0 0 6px;
        }

        .dout-standalone-card p {
          font-size: 11px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .dout-standalone-format {
          color: #3d63f5;
          background: #edf2ff;
          padding: 6px 9px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 10px;
        }

        .dout-format-icon {
          width: 56px;
          height: 66px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .dout-format-icon.word {
          background: #e8efff;
          color: #2455d6;
        }

        .dout-format-icon.pdf {
          background: #fcecec;
          color: #dc4444;
          font-size: 15px;
        }

        .dout-format-icon.package {
          background: #edf2ff;
          color: #3d63f5;
          font-size: 28px;
        }

        .dout-format-extension {
          display: inline-block;
          background: #f1f4f8;
          color: #64748b;
          padding: 6px 10px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 700;
          margin-top: 23px;
        }

        .dout-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .dout-process-number {
          width: 45px;
          height: 45px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          border-radius: 10px;
          font-size: 17px;
          font-weight: 750;
          margin-bottom: 25px;
        }

        .dout-review-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 30px;
        }

        .dout-review-card h3 {
          font-size: 21px;
          margin: 0 0 23px;
        }

        .dout-review-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid #edf1f5;
          font-size: 14px;
          color: #526278;
        }

        .dout-review-check {
          background: #edf2ff;
          color: #3d63f5;
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .dout-review-notice {
          margin-top: 22px;
          padding: 16px;
          background: #f6f8fc;
          border: 1px solid #e1e7ef;
          border-radius: 8px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        .dout-faq-grid {
          align-items: start;
        }

        .dout-faq-list {
          display: grid;
          gap: 13px;
        }

        .dout-faq-item {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          padding: 19px;
        }

        .dout-faq-item summary {
          color: #101c32;
          cursor: pointer;
          font-size: 14px;
          font-weight: 650;
        }

        .dout-faq-item p {
          font-size: 13px;
          color: #64748b;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        .dout-cta-section {
          padding: 0 0 85px;
        }

        .dout-cta {
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

        .dout-cta-label {
          color: #a6b9ff;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .dout-cta h2 {
          color: white;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
        }

        .dout-cta p {
          color: #c1cce0;
          font-size: 16px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 28px;
        }

        .dout-cta-actions {
          justify-content: center;
        }

        .dout-cta-secondary {
          color: white;
          border: 1px solid #ffffff50;
        }

        .dout-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .dout-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .dout-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .dout-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .dout-footer-top p {
          color: #64748b;
          font-size: 13px;
          max-width: 350px;
          line-height: 1.7;
        }

        .dout-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .dout-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .dout-footer-links a:hover {
          color: #3d63f5;
        }

        .dout-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          color: #64748b;
          font-size: 11px;
          border-top: 1px solid #dfe5ed;
          margin-top: 30px;
          padding-top: 23px;
        }

        @media (max-width: 1050px) {
          .dout-hero-grid,
          .dout-split-grid,
          .dout-faq-grid {
            gap: 35px;
          }

          .dout-hero h1 {
            font-size: 44px;
          }

          .dout-preview {
            padding: 12px;
          }

          .dout-feature-grid,
          .dout-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 800px) {
          .dout-container {
            width: calc(100% - 36px);
          }

          .dout-hero-grid,
          .dout-split-grid,
          .dout-faq-grid,
          .dout-state-grid {
            grid-template-columns: 1fr;
          }

          .dout-hero {
            padding: 60px 0;
          }

          .dout-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .dout-preview {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .dout-benefit-grid,
          .dout-format-grid {
            grid-template-columns: 1fr;
          }

          .dout-benefit-grid {
            gap: 30px;
          }

          .dout-section,
          .dout-states-section,
          .dout-formats-section,
          .dout-review-section {
            padding: 60px 0;
          }

          .dout-cta-section {
            padding-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .dout-hero h1 {
            font-size: 36px;
          }

          .dout-feature-grid,
          .dout-process-grid {
            grid-template-columns: 1fr;
          }

          .dout-window-body {
            padding: 15px;
          }

          .dout-document-row {
            padding: 10px;
          }

          .dout-document-info strong {
            font-size: 11px;
          }

          .dout-state-card,
          .dout-review-card,
          .dout-feature-card,
          .dout-format-card {
            padding: 23px;
          }

          .dout-standalone-window {
            padding: 15px;
          }

          .dout-standalone-card {
            padding: 13px;
            gap: 9px;
          }

          .dout-cta {
            padding: 45px 20px;
          }
        }
      `}</style>
    </div>
  );
}