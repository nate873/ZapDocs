import React, { useEffect } from "react";
import Header from "./Header";

const features = [
  {
    icon: "▤",
    title: "Centralized loan records",
    description:
      "Maintain borrower, lender, property and financing information in one organized workspace.",
  },
  {
    icon: "▧",
    title: "Consistent documentation",
    description:
      "Reduce repetitive data entry across your loan document packages.",
  },
  {
    icon: "◎",
    title: "Reusable profiles",
    description:
      "Save frequently used lender, brokerage, trustee and servicing information.",
  },
  {
    icon: "↻",
    title: "Flexible loan management",
    description:
      "Reopen saved transactions, revise negotiated terms and regenerate documents.",
  },
  {
    icon: "✓",
    title: "Document preparation",
    description:
      "Generate coordinated Florida and California loan document packages.",
  },
  {
    icon: "↗",
    title: "Streamlined review",
    description:
      "Prepare transaction information and documents for review by closing professionals.",
  },
];

const loans = [
  {
    id: "1048",
    borrower: "Oakwood Investments LLC",
    state: "Florida",
    amount: "$450,000",
    status: "Ready for review",
    color: "green",
  },
  {
    id: "1047",
    borrower: "Pacific Property Group LLC",
    state: "California",
    amount: "$725,000",
    status: "In progress",
    color: "blue",
  },
  {
    id: "1046",
    borrower: "Summit Capital LLC",
    state: "Florida",
    amount: "$280,000",
    status: "Generated",
    color: "gray",
  },
];

export default function TeamWorkspace() {
  useEffect(() => {
    document.title = "Team Workspace | ZapDocs";
  }, []);

  return (
    <div className="tw-page">
      <Header />

      <main>
        {/* HERO */}
        <section className="tw-hero">
          <div className="tw-container tw-hero-grid">
            <div className="tw-hero-content">
              <div className="tw-eyebrow">
                <span className="tw-dot" />
                PLATFORM / TEAM WORKSPACE
              </div>

              <h1>
                Your entire lending workflow.
                <span>One workspace.</span>
              </h1>

              <p>
                Organize loan records, manage transaction
                information, reuse lending profiles and
                prepare coordinated loan documents from
                a centralized workspace built for private
                lending professionals.
              </p>

              <div className="tw-actions">
                <a href="/demo" className="tw-primary">
                  Book a Demo →
                </a>

                <a
                  href="/loan-workflow"
                  className="tw-secondary"
                >
                  Explore Workflow
                </a>
              </div>

              <div className="tw-support">
                <span>✓ Centralized records</span>
                <span>✓ Reusable profiles</span>
                <span>✓ State-specific documents</span>
              </div>
            </div>

            {/* DASHBOARD PREVIEW */}
            <div className="tw-preview">
              <div className="tw-window">
                <div className="tw-window-header">
                  <div className="tw-brand">
                    <div className="tw-logo">Z</div>

                    <div>
                      <strong>ZapDocs</strong>
                      <small>Loan Workspace</small>
                    </div>
                  </div>

                  <span className="tw-preview-tag">
                    Preview
                  </span>
                </div>

                <div className="tw-window-body">
                  <div className="tw-small-label">
                    WORKSPACE OVERVIEW
                  </div>

                  <div className="tw-dashboard-heading">
                    <div>
                      <h2>Your Loans</h2>
                      <p>Manage your lending transactions.</p>
                    </div>

                    <span className="tw-new-loan">
                      + New Loan
                    </span>
                  </div>

                  <div className="tw-metrics">
                    {[
                      ["Total loans", "24"],
                      ["In progress", "8"],
                      ["Generated", "16"],
                    ].map(([label, value]) => (
                      <div className="tw-metric" key={label}>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="tw-loan-list">
                    <div className="tw-list-heading">
                      Recent Transactions
                    </div>

                    {loans.map((loan) => (
                      <div className="tw-loan" key={loan.id}>
                        <div>
                          <small>
                            LOAN #{loan.id} · {loan.state}
                          </small>

                          <h4>{loan.borrower}</h4>
                          <p>{loan.amount}</p>
                        </div>

                        <span
                          className={`tw-status ${loan.color}`}
                        >
                          {loan.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="tw-preview-note">
                    Illustrative workspace · Fictional loan data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="tw-benefits">
          <div className="tw-container tw-benefit-grid">
            {[
              [
                "One centralized workspace",
                "Keep transaction information together.",
              ],
              [
                "Less repetitive data entry",
                "Reuse information across documents.",
              ],
              [
                "Built for private lending",
                "Designed around lending transactions.",
              ],
            ].map(([title, description]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section className="tw-section">
          <div className="tw-container">
            <div className="tw-section-heading">
              <div className="tw-label">
                WORKSPACE CAPABILITIES
              </div>

              <h2>
                Everything starts with organized information.
              </h2>

              <p>
                Manage the information behind your loan
                documents without relying on disconnected
                spreadsheets or repetitive forms.
              </p>
            </div>

            <div className="tw-feature-grid">
              {features.map((feature, index) => (
                <article
                  className="tw-feature-card"
                  key={feature.title}
                >
                  <div className="tw-feature-top">
                    <div className="tw-feature-icon">
                      {feature.icon}
                    </div>

                    <small>
                      {String(index + 1).padStart(2, "0")}
                    </small>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SAVED PROFILES */}
        <section className="tw-profile-section">
          <div className="tw-container tw-profile-grid">
            <div>
              <div className="tw-label">
                REUSABLE LENDING PROFILES
              </div>

              <h2>
                Stop entering the same information twice.
              </h2>

              <p>
                Private lenders frequently work with the
                same lenders, brokers, trustees and
                servicing companies. Save commonly used
                information and retrieve it when preparing
                your next loan.
              </p>

              <a
                href="/loan-workflow"
                className="tw-text-link"
              >
                Discover the loan workflow →
              </a>
            </div>

            <div className="tw-profile-window">
              <div className="tw-profile-heading">
                <div>
                  <h3>Saved Profiles</h3>
                  <p>Reusable transaction information</p>
                </div>

                <span>+ New Profile</span>
              </div>

              {[
                [
                  "L",
                  "Lender Profiles",
                  "Lender vesting and mailing addresses",
                ],
                [
                  "B",
                  "Brokerage Profiles",
                  "Company and representative information",
                ],
                [
                  "S",
                  "Servicing Profiles",
                  "Servicer contact information",
                ],
                [
                  "T",
                  "Trustee Profiles",
                  "California trustee information",
                ],
              ].map(([icon, title, description]) => (
                <div className="tw-profile-row" key={title}>
                  <div className="tw-profile-icon">
                    {icon}
                  </div>

                  <div className="tw-profile-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>

                  <span className="tw-profile-arrow">→</span>
                </div>
              ))}

              <div className="tw-preview-note">
                Illustrative profile interface
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="tw-section">
          <div className="tw-container">
            <div className="tw-section-heading">
              <div className="tw-label">
                BUILT FOR YOUR BUSINESS
              </div>

              <h2>Designed for lending professionals.</h2>
            </div>

            <div className="tw-industry-grid">
              {[
                [
                  "Private Lenders",
                  "Organize lending transactions and prepare consistent document packages.",
                  "/private-lenders",
                ],
                [
                  "Loan Originators",
                  "Maintain transaction information and streamline document preparation.",
                  "/loan-originators",
                ],
                [
                  "Servicing Professionals",
                  "Maintain reusable servicing information and prepare supported servicing documents.",
                  "/servicing-teams",
                ],
              ].map(([title, description, link]) => (
                <a
                  className="tw-industry-card"
                  href={link}
                  key={title}
                >
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="tw-cta-section">
          <div className="tw-container">
            <div className="tw-cta">
              <div className="tw-cta-label">
                EXPERIENCE ZAPDOCS
              </div>

              <h2>
                A better workspace.
                <br />
                A simpler lending process.
              </h2>

              <p>
                Discover how ZapDocs helps private lending
                professionals organize transactions and
                streamline loan document preparation.
              </p>

              <div className="tw-cta-actions">
                <a href="/demo" className="tw-primary">
                  Book a Demo →
                </a>

                <a href="/pricing" className="tw-cta-secondary">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="tw-footer">
        <div className="tw-container">
          <div className="tw-footer-top">
            <div>
              <h3>ZapDocs</h3>

              <p>
                Document preparation software built
                for private lending professionals.
              </p>
            </div>

            <div className="tw-footer-links">
              <a href="/platform">Platform</a>
              <a href="/pricing">Pricing</a>
              <a href="/help-center">Help Center</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div className="tw-footer-bottom">
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

      {/* SELF-CONTAINED CSS */}
      <style>{`
        .tw-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .tw-page * {
          box-sizing: border-box;
        }

        .tw-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .tw-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
          overflow: hidden;
        }

        .tw-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .tw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          background: white;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          color: #526278;
          margin-bottom: 24px;
        }

        .tw-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .tw-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -2.8px;
          margin: 0 0 26px;
          color: #101c32;
        }

        .tw-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 4px;
        }

        .tw-hero-content > p {
          font-size: 17px;
          line-height: 1.85;
          color: #637287;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .tw-actions,
        .tw-cta-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          align-items: center;
        }

        .tw-primary,
        .tw-secondary,
        .tw-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .tw-primary {
          color: white;
          background: #3d63f5;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .tw-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .tw-secondary {
          color: #17233b;
          background: white;
          border: 1px solid #d6deea;
        }

        .tw-secondary:hover {
          background: #f1f5fa;
        }

        .tw-support {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          margin-top: 28px;
        }

        .tw-preview {
          padding: 20px;
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          border-radius: 25px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .tw-window {
          border: 1px solid #dce3ed;
          background: white;
          border-radius: 15px;
          overflow: hidden;
        }

        .tw-window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .tw-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .tw-logo {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #3d63f5;
          color: white;
          font-weight: 800;
          font-size: 18px;
        }

        .tw-brand strong {
          display: block;
          font-size: 13px;
        }

        .tw-brand small {
          display: block;
          font-size: 10px;
          color: #8491a4;
          margin-top: 3px;
        }

        .tw-preview-tag {
          background: #eff3f9;
          color: #637287;
          padding: 6px 12px;
          font-size: 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .tw-window-body {
          padding: 23px;
        }

        .tw-small-label {
          color: #8491a4;
          letter-spacing: 1.2px;
          font-weight: 700;
          font-size: 10px;
          margin-bottom: 10px;
        }

        .tw-dashboard-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .tw-dashboard-heading h2 {
          font-size: 24px;
          margin: 0 0 5px;
        }

        .tw-dashboard-heading p {
          font-size: 11px;
          color: #8491a4;
          margin: 0;
        }

        .tw-new-loan {
          background: #3d63f5;
          color: white;
          border-radius: 7px;
          padding: 10px 13px;
          font-size: 11px;
          font-weight: 650;
          white-space: nowrap;
        }

        .tw-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 23px;
        }

        .tw-metric {
          border: 1px solid #e1e7ef;
          background: #f8fafc;
          border-radius: 10px;
          padding: 15px;
        }

        .tw-metric small {
          display: block;
          color: #64748b;
          font-size: 10px;
          margin-bottom: 10px;
        }

        .tw-metric strong {
          font-size: 25px;
          color: #101c32;
        }

        .tw-loan-list {
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          overflow: hidden;
        }

        .tw-list-heading {
          background: #f8fafc;
          padding: 13px 15px;
          color: #637287;
          font-size: 11px;
          font-weight: 650;
          border-bottom: 1px solid #e1e7ef;
        }

        .tw-loan {
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-bottom: 1px solid #edf1f5;
        }

        .tw-loan:last-child {
          border-bottom: 0;
        }

        .tw-loan small {
          font-size: 9px;
          color: #94a3b8;
        }

        .tw-loan h4 {
          font-size: 12px;
          margin: 5px 0;
          font-weight: 650;
        }

        .tw-loan p {
          color: #64748b;
          font-size: 11px;
          margin: 0;
        }

        .tw-status {
          padding: 5px 9px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 650;
          text-align: center;
          white-space: nowrap;
        }

        .tw-status.green {
          background: #e5f8ed;
          color: #16834c;
        }

        .tw-status.blue {
          background: #eaf0ff;
          color: #3d63f5;
        }

        .tw-status.gray {
          background: #eff2f6;
          color: #64748b;
        }

        .tw-preview-note {
          font-size: 9px;
          text-align: center;
          margin-top: 17px;
          color: #94a3b8;
        }

        .tw-benefits {
          background: white;
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .tw-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .tw-benefit-grid h3 {
          font-size: 17px;
          margin: 0 0 8px;
        }

        .tw-benefit-grid p {
          color: #64748b;
          font-size: 13px;
          margin: 0;
        }

        .tw-section {
          padding: 95px 0;
          background: white;
        }

        .tw-section-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 45px;
        }

        .tw-label {
          font-size: 11px;
          letter-spacing: 1.7px;
          color: #3d63f5;
          font-weight: 750;
          margin-bottom: 19px;
        }

        .tw-section-heading h2,
        .tw-profile-grid h2 {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
        }

        .tw-section-heading p,
        .tw-profile-grid > div > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 16px;
        }

        .tw-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .tw-feature-card {
          border: 1px solid #dfe5ed;
          border-radius: 15px;
          padding: 30px;
          background: white;
          transition: all 0.25s ease;
        }

        .tw-feature-card:hover,
        .tw-industry-card:hover {
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
          transform: translateY(-4px);
        }

        .tw-feature-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .tw-feature-icon {
          background: #edf2ff;
          color: #3d63f5;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          font-weight: 700;
          font-size: 25px;
        }

        .tw-feature-top small {
          color: #94a3b8;
          font-weight: 650;
          font-size: 12px;
        }

        .tw-feature-card h3,
        .tw-industry-card h3 {
          color: #101c32;
          font-size: 19px;
          margin: 0 0 13px;
        }

        .tw-feature-card p,
        .tw-industry-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .tw-profile-section {
          padding: 90px 0;
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .tw-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 85px;
          align-items: center;
        }

        .tw-text-link {
          color: #3d63f5;
          font-weight: 650;
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }

        .tw-text-link:hover {
          text-decoration: underline;
        }

        .tw-profile-window {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .tw-profile-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .tw-profile-heading h3 {
          margin: 0 0 5px;
          font-size: 20px;
        }

        .tw-profile-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .tw-profile-heading > span {
          background: #edf2ff;
          color: #3d63f5;
          font-size: 10px;
          border-radius: 7px;
          padding: 9px 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .tw-profile-row {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px;
          border: 1px solid #e2e7ef;
          border-radius: 10px;
          margin-bottom: 12px;
        }

        .tw-profile-icon {
          width: 42px;
          height: 42px;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 9px;
          display: grid;
          place-items: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .tw-profile-info {
          flex: 1;
        }

        .tw-profile-info h4 {
          font-size: 13px;
          margin: 0 0 6px;
        }

        .tw-profile-info p {
          font-size: 11px;
          color: #64748b;
          margin: 0;
        }

        .tw-profile-arrow {
          color: #94a3b8;
        }

        .tw-industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .tw-industry-card {
          display: block;
          text-decoration: none;
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.25s ease;
        }

        .tw-industry-card span {
          display: inline-block;
          color: #3d63f5;
          font-size: 13px;
          font-weight: 650;
          margin-top: 22px;
        }

        .tw-cta-section {
          padding: 0 0 85px;
          background: white;
        }

        .tw-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          padding: 70px 28px;
          border-radius: 22px;
          text-align: center;
        }

        .tw-cta-label {
          font-size: 11px;
          letter-spacing: 1.8px;
          color: #a6b9ff;
          font-weight: 750;
          margin-bottom: 22px;
        }

        .tw-cta h2 {
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          color: white;
          margin: 0 0 22px;
        }

        .tw-cta p {
          color: #c1cce0;
          max-width: 650px;
          margin: 0 auto 28px;
          line-height: 1.8;
          font-size: 16px;
        }

        .tw-cta-actions {
          justify-content: center;
        }

        .tw-cta-secondary {
          border: 1px solid #ffffff50;
          color: white;
        }

        .tw-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .tw-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .tw-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .tw-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .tw-footer-top p {
          color: #64748b;
          font-size: 13px;
          max-width: 350px;
          line-height: 1.7;
        }

        .tw-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .tw-footer-links a {
          font-size: 13px;
          text-decoration: none;
          color: #526278;
        }

        .tw-footer-links a:hover {
          color: #3d63f5;
        }

        .tw-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          border-top: 1px solid #dfe5ed;
          margin-top: 30px;
          padding-top: 23px;
          color: #64748b;
          font-size: 11px;
        }

        @media (max-width: 1050px) {
          .tw-hero-grid,
          .tw-profile-grid {
            gap: 35px;
          }

          .tw-preview {
            padding: 12px;
          }

          .tw-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tw-hero h1 {
            font-size: 44px;
          }
        }

        @media (max-width: 800px) {
          .tw-container {
            width: calc(100% - 36px);
          }

          .tw-hero-grid,
          .tw-profile-grid {
            grid-template-columns: 1fr;
          }

          .tw-hero {
            padding: 60px 0;
          }

          .tw-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .tw-preview {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }

          .tw-benefit-grid,
          .tw-industry-grid {
            grid-template-columns: 1fr;
          }

          .tw-section,
          .tw-profile-section {
            padding: 60px 0;
          }

          .tw-benefit-grid {
            gap: 30px;
          }

          .tw-cta-section {
            padding-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .tw-feature-grid {
            grid-template-columns: 1fr;
          }

          .tw-hero h1 {
            font-size: 36px;
          }

          .tw-window-body {
            padding: 14px;
          }

          .tw-metric {
            padding: 10px;
          }

          .tw-metric strong {
            font-size: 20px;
          }

          .tw-loan {
            padding: 11px;
            flex-wrap: wrap;
          }

          .tw-profile-window {
            padding: 16px;
          }

          .tw-feature-card,
          .tw-industry-card {
            padding: 24px;
          }

          .tw-cta {
            padding: 45px 20px;
          }
        }
      `}</style>
    </div>
  );
}