import { useEffect } from "react";

// Public scheduling URL only. Never put a secret or API key in VITE_ variables.
const bookingUrl = (import.meta.env.VITE_DEMO_BOOKING_URL || "").trim();
const contactEmail = (import.meta.env.VITE_DEMO_CONTACT_EMAIL || "").trim();
const validBooking = (() => { try { return new URL(bookingUrl).protocol === "https:"; } catch { return false; } })();
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);

export default function Demo({ onHome, onLaunch, onPricing }) {
  useEffect(() => {
    const previous = document.title;
    document.title = "Book a Demo | ZapDocs";
    return () => { document.title = previous; };
  }, []);
  return (
    <div className="zd-demo-page">
      <style>{`
        .zd-demo-page{min-height:100vh;background:#fff;color:#080d36;font-family:Inter,system-ui,sans-serif;line-height:1.6}
        .zd-demo-page *{box-sizing:border-box}
        .zd-demo-page button,.zd-demo-page a{font:inherit}
        .zd-demo-nav{max-width:1280px;margin:auto;padding:24px 32px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid #e8ebf2}
        .zd-demo-brand{display:flex;align-items:center;gap:12px;background:none;border:0;color:#080d36;cursor:pointer;text-align:left;font-weight:800!important;font-size:24px!important;line-height:1.05!important;letter-spacing:-.04em}
        .zd-demo-brand small{display:block;font-size:10px;letter-spacing:.1em;color:#646d87;margin-top:5px}
        .zd-demo-links{display:flex;gap:22px;align-items:center;flex-wrap:wrap}.zd-demo-links button{border:0;background:none;color:#080d36;cursor:pointer;font-weight:650}
        .zd-demo-main{max-width:1220px;margin:auto;padding:88px 32px;display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:center}
        .zd-demo-kicker{color:#315cff;font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
        .zd-demo-main h1{font-size:clamp(42px,5.5vw,76px);line-height:1.02;letter-spacing:-.065em;margin:18px 0 22px;font-weight:850}
        .zd-demo-main p{color:#535d76;font-size:17px;margin:0 0 24px}
        .zd-demo-list{display:grid;gap:17px;margin:32px 0;padding:0;list-style:none}.zd-demo-list li{display:flex;gap:13px;align-items:flex-start}.zd-demo-check{background:#dff7ec;color:#11794d;border-radius:50%;width:25px;height:25px;display:grid;place-items:center;flex:none;font-weight:800}.zd-demo-list strong{display:block}.zd-demo-list small{display:block;color:#626d83;font-size:14px}
        .zd-demo-panel{background:linear-gradient(145deg,#eaf2ff,#e6faf1);border:1px solid #dce7ef;border-radius:28px;padding:22px;box-shadow:0 26px 70px #101a4920}
        .zd-demo-card{background:white;border:1px solid #e2e7ef;border-radius:20px;padding:34px;box-shadow:0 12px 30px #1423440b}
        .zd-demo-card h2{font-size:30px;letter-spacing:-.04em;line-height:1.12;margin:12px 0}.zd-demo-card p{font-size:15px}.zd-demo-meta{display:flex;gap:12px;flex-wrap:wrap;margin:22px 0;color:#47536f;font-size:13px}.zd-demo-meta span{background:#f1f4f9;border-radius:8px;padding:7px 10px}
        .zd-demo-cta{display:block;width:100%;text-align:center;text-decoration:none;border:0;background:#36d991;color:#080d36!important;font-weight:750!important;border-radius:999px;padding:15px 22px;cursor:pointer}.zd-demo-cta:hover{background:#27c980}.zd-demo-note{font-size:12px!important;margin:14px 0 0!important;text-align:center}
        .zd-demo-footer{max-width:1220px;margin:auto;padding:24px 32px;border-top:1px solid #e8ebf2;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:#626d83;font-size:13px}.zd-demo-footer a{color:inherit}
        .zd-demo-page button:focus-visible,.zd-demo-page a:focus-visible{outline:3px solid #315cff;outline-offset:4px}
        @media(max-width:800px){.zd-demo-main{grid-template-columns:1fr;gap:30px;padding:44px 20px}.zd-demo-nav{padding:18px 20px}.zd-demo-links{gap:10px}.zd-demo-panel{padding:12px}.zd-demo-card{padding:24px}.zd-demo-footer{padding:24px 20px}}
      `}</style>
      <nav className="zd-demo-nav" aria-label="Main navigation">
        <button type="button" className="zd-demo-brand" onClick={onHome}>
          <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><path fill="#315cff" d="M24 1 47 14v20L24 47 1 34V14Z"/><path fill="#fff" d="M10 14h21l-10 9 10 6v7H20v-8l-10-6z"/></svg>
          <span>ZapDocs<small>LOAN DOCUMENTS</small></span>
        </button>
        <div className="zd-demo-links"><button type="button" onClick={onHome}>Home</button><button type="button" onClick={onPricing}>Pricing</button><button type="button" onClick={onLaunch}>Log in</button></div>
      </nav>
      <main className="zd-demo-main">
        <section>
          <div className="zd-demo-kicker">Personalized product walkthrough</div>
          <h1>See ZapDocs in action.</h1>
          <p>Discover how your private lending team can turn loan information into consistent, editable closing document packages without rebuilding the same paperwork for every deal.</p>
          <ul className="zd-demo-list">
            {[["Experience the loan workflow","Enter loan information and build a sample package."],["Explore California and Florida documents","Review state-specific document outputs and payment schedules."],["Find the right plan for your business","Discuss your loan volume, pricing and early access."]].map(([title,description]) => <li key={title}><span className="zd-demo-check" aria-hidden="true">✓</span><div><strong>{title}</strong><small>{description}</small></div></li>)}
          </ul>
        </section>
        <section className="zd-demo-panel" aria-label="Demo scheduling">
          <div className="zd-demo-card">
            <div className="zd-demo-kicker">Book a demo</div>
            <h2>Let's talk about your lending workflow.</h2>
            <p>A one-on-one walkthrough tailored to your business.</p>
            <div className="zd-demo-meta"><span>30 minutes</span><span>Online meeting</span><span>Complimentary</span></div>
            {validBooking ? <a className="zd-demo-cta" href={bookingUrl} target="_blank" rel="noopener noreferrer">Choose a time ↗</a> : validEmail ? <a className="zd-demo-cta" href={`mailto:${contactEmail}?subject=${encodeURIComponent("ZapDocs demo request")}&body=${encodeURIComponent("Hi ZapDocs,\n\nI'd like to request a demo.\n\nName:\nCompany:\nMonthly loan volume:\nPreferred times and time zone:\n")}`}>Request a demo by email</a> : <p role="status">Online scheduling is not available yet. Please check back soon.</p>}
            <p className="zd-demo-note">No credit card or account required. Please do not share borrower information when booking.</p>
          </div>
        </section>
      </main>
      <footer className="zd-demo-footer"><span>© {new Date().getFullYear()} ZapDocs</span><span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span></footer>
    </div>
  );
}
