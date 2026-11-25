import { useEffect } from "react";

// Only public configuration belongs in VITE_ environment variables.
const bookingUrl = (import.meta.env.VITE_DEMO_BOOKING_URL || "").trim();
const contactEmail = (import.meta.env.VITE_DEMO_CONTACT_EMAIL || "").trim();
const validBooking = (() => {
  try { return new URL(bookingUrl).protocol === "https:"; }
  catch { return false; }
})();
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);

const demoFeatures = [
  ["Experience the loan workflow", "Create a sample transaction and explore how ZapDocs organizes loan information into a coordinated document package."],
  ["Explore state-specific documents", "Review California and Florida document preparation workflows, payment schedules and supported outputs."],
  ["Discover your workspace", "Explore saved loan records, reusable lending profiles and document preparation controls."],
  ["Find the right plan", "Discuss your monthly loan volume, business requirements, pricing and access to ZapDocs."],
];
const industries = [
  ["▦", "Private Lenders", "Explore a centralized approach to managing loan records and preparing private lending documents.", "/private-lenders"],
  ["▤", "Loan Originators", "Discover how to capture transaction terms and reduce repetitive document preparation.", "/loan-originators"],
  ["◎", "Servicing Professionals", "Explore reusable servicing information and supported standalone document outputs.", "/servicing-teams"],
];
const faqs = [
  ["How long is the demo?", "Your personalized ZapDocs walkthrough is scheduled for approximately 30 minutes."],
  ["Do I need to create an account?", "No. You can book a product demonstration without creating a ZapDocs account."],
  ["Is the demonstration free?", "Yes. The product walkthrough is complimentary and does not require a credit card."],
  ["What should I prepare before the meeting?", "Consider your monthly loan volume, the states where you operate and your current document preparation process. Please do not share confidential borrower information."],
  ["Can multiple members of my company attend?", "You are welcome to invite relevant members of your lending team to the walkthrough."],
];
function MeetingIcon({ type }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "clock" ? <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></> : type === "video" ? <><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/></> : <><circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/></>}
  </svg>;
}

export default function Demo({ onHome, onLaunch, onPricing, onDemo } = {}) {
  useEffect(() => {
    const previous = document.title;
    document.title = "Book a Demo | ZapDocs";
    return () => { document.title = previous; };
  }, []);
  const emailLink = `mailto:${contactEmail}?subject=${encodeURIComponent("ZapDocs demo request")}&body=${encodeURIComponent("Hi ZapDocs,\n\nI'd like to request a demo.\n\nName:\nCompany:\nMonthly loan volume:\nPreferred times and time zone:\n")}`;

  // The parent layout already renders Header. Do not render it here.
  return (
    <div className="zd-demo-page">
      <main>
        <section className="zd-demo-hero">
          <div className="zd-demo-container zd-demo-hero-grid">
            <div className="zd-demo-content">
              <div className="zd-demo-eyebrow"><span className="zd-demo-dot"/> PERSONALIZED PRODUCT WALKTHROUGH</div>
              <h1>See ZapDocs <span>in action.</span></h1>
              <p className="zd-demo-description">Discover how your private lending team can turn loan information into coordinated, editable closing document packages without rebuilding the same paperwork for every deal.</p>
              <div className="zd-demo-feature-list">
                {demoFeatures.map(([title, description]) => <div className="zd-demo-feature-row" key={title}><span className="zd-demo-check" aria-hidden="true">✓</span><div><h3>{title}</h3><p>{description}</p></div></div>)}
              </div>
              <div className="zd-demo-support"><span>✓ No obligation</span><span>✓ No credit card</span><span>✓ Personalized walkthrough</span></div>
            </div>
            <div className="zd-demo-panel">
              <div className="zd-demo-card">
                <div className="zd-demo-card-top">
                  <div className="zd-demo-calendar-icon"><svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m6 5 2 2 4-4"/></svg></div>
                  <span className="zd-demo-card-tag">Complimentary demo</span>
                </div>
                <div className="zd-demo-kicker">BOOK YOUR DEMONSTRATION</div>
                <h2>Let's talk about your lending workflow.</h2>
                <p className="zd-demo-card-description">A one-on-one product walkthrough tailored to your private lending business.</p>
                <div className="zd-demo-meeting-details">
                  {[["clock", "30 minutes"], ["video", "Online meeting"], ["user", "One-on-one walkthrough"]].map(([type, label]) => <div key={type}><MeetingIcon type={type}/><span>{label}</span></div>)}
                </div>
                <div className="zd-demo-divider"/>
                <h3 className="zd-demo-booking-title">Schedule your walkthrough</h3>
                <p className="zd-demo-booking-description">Find a convenient time to explore ZapDocs and discuss your business requirements.</p>
                {validBooking ? <a className="zd-demo-cta" href={bookingUrl} target="_blank" rel="noopener noreferrer">Choose a Time <span>↗</span></a> : validEmail ? <a className="zd-demo-cta" href={emailLink}>Request a Demo by Email <span>→</span></a> : <div className="zd-demo-unavailable" role="status">Online scheduling is not available yet. Please check back soon.</div>}
                <div className="zd-demo-note">No payment or account required. Please do not share confidential borrower information when booking.</div>
              </div>
              <div className="zd-demo-panel-footer">Built for private lending professionals.</div>
            </div>
          </div>
        </section>
        <section className="zd-demo-benefits"><div className="zd-demo-container zd-demo-benefit-grid">
          {[["Built for private lending", "Designed around real lending workflows."], ["Florida & California", "Explore state-specific document preparation."], ["One centralized workspace", "Manage loan information and document outputs."]].map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}
        </div></section>
        <section className="zd-demo-section"><div className="zd-demo-container">
          <div className="zd-demo-section-heading"><div className="zd-demo-kicker">WHAT TO EXPECT</div><h2>A walkthrough built around your business.</h2><p>Explore the platform, understand the document preparation process and discover where ZapDocs fits into your existing workflow.</p></div>
          <div className="zd-demo-agenda-grid">{demoFeatures.map(([title, description], i) => <article className="zd-demo-agenda-card" key={title}><div className="zd-demo-agenda-number">{String(i+1).padStart(2,"0")}</div><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div></section>
        <section className="zd-demo-muted-section"><div className="zd-demo-container">
          <div className="zd-demo-section-heading"><div className="zd-demo-kicker">DESIGNED FOR YOUR INDUSTRY</div><h2>Built for lending professionals.</h2></div>
          <div className="zd-demo-industry-grid">{industries.map(([icon, title, description, link]) => <a className="zd-demo-industry-card" href={link} key={title}><div className="zd-demo-industry-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{description}</p><span>Learn more →</span></a>)}</div>
        </div></section>
        <section className="zd-demo-section"><div className="zd-demo-container zd-demo-faq-grid">
          <div><div className="zd-demo-kicker">FREQUENTLY ASKED QUESTIONS</div><h2 className="zd-demo-large-heading">Before your demonstration.</h2><p className="zd-demo-body-text">Everything you need to know before scheduling your personalized ZapDocs product walkthrough.</p><a href="/help-center" className="zd-demo-text-link">Visit the Help Center →</a></div>
          <div className="zd-demo-faq-list">{faqs.map(([question, answer]) => <details className="zd-demo-faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div></section>
        <section className="zd-demo-bottom-section"><div className="zd-demo-container"><div className="zd-demo-bottom-cta">
          <div className="zd-demo-bottom-label">EXPLORE THE PLATFORM</div><h2>A better way to prepare<br/>private lending documents.</h2><p>Learn how ZapDocs brings your transaction information and document preparation workflow together.</p>
          <div className="zd-demo-bottom-actions"><a href="/platform" className="zd-demo-bottom-primary">Explore the Platform →</a><a href="/pricing" className="zd-demo-bottom-secondary" onClick={typeof onPricing === "function" ? e => { e.preventDefault(); onPricing(); } : undefined}>View Pricing</a></div>
        </div></div></section>
      </main>
      <footer className="zd-demo-footer"><div className="zd-demo-container"><div className="zd-demo-footer-top"><div><h3>ZapDocs</h3><p>Document preparation software built for private lending professionals.</p></div><div className="zd-demo-footer-links"><a href="/platform">Platform</a><a href="/pricing">Pricing</a><a href="/help-center">Help Center</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div><div className="zd-demo-footer-bottom"><span>© {new Date().getFullYear()} ZapDocs. All rights reserved.</span><span>ZapDocs is not a law firm and does not provide legal advice.</span></div></div></footer>
      <style>{`
        .zd-demo-page{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif;line-height:1.6}
        .zd-demo-page *{box-sizing:border-box}
        .zd-demo-container{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zd-demo-hero{background:linear-gradient(135deg,#fff 0%,#f4f7fc 65%,#eaf0ff 100%);padding:90px 0}
        .zd-demo-hero-grid{display:grid;grid-template-columns:1fr .95fr;gap:85px;align-items:center}
        .zd-demo-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:9px 15px;border:1px solid #dfe5ee;border-radius:30px;background:#fff;color:#526278;font-size:10px;font-weight:750;letter-spacing:1.1px;margin-bottom:23px}
        .zd-demo-dot{width:7px;height:7px;background:#3d63f5;border-radius:50%;flex-shrink:0}
        .zd-demo-content h1{font-size:clamp(46px,5.5vw,76px);line-height:1.05;font-weight:750;letter-spacing:-3.5px;color:#101c32;margin:0 0 27px}
        .zd-demo-content h1 span{display:block;color:#3d63f5}
        .zd-demo-description{color:#637287;font-size:17px;line-height:1.85;margin:0 0 32px;max-width:550px}
        .zd-demo-feature-list{display:grid;gap:22px}.zd-demo-feature-row{display:flex;align-items:flex-start;gap:13px}
        .zd-demo-check{width:25px;height:25px;display:grid;place-items:center;border-radius:50%;background:#e5f8ed;color:#16834c;font-size:13px;font-weight:750;flex-shrink:0;margin-top:2px}
        .zd-demo-feature-row h3{font-size:15px;font-weight:650;color:#101c32;margin:0 0 5px}.zd-demo-feature-row p{font-size:13px;line-height:1.7;color:#64748b;margin:0}
        .zd-demo-support{display:flex;flex-wrap:wrap;gap:16px;padding-top:27px;border-top:1px solid #e1e7ef;margin-top:30px;color:#64748b;font-size:11px;font-weight:600}
        .zd-demo-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:25px;padding:20px;box-shadow:0 25px 65px #172b4520;min-width:0}
        .zd-demo-card{background:#fff;border:1px solid #dce3ed;border-radius:17px;padding:35px}.zd-demo-card-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:30px}
        .zd-demo-calendar-icon{width:58px;height:58px;background:#edf2ff;color:#3d63f5;border-radius:13px;display:grid;place-items:center;flex-shrink:0}
        .zd-demo-card-tag{background:#e5f8ed;color:#16834c;font-size:10px;font-weight:650;padding:7px 12px;border-radius:20px}
        .zd-demo-kicker{color:#3d63f5;font-size:11px;font-weight:750;letter-spacing:1.6px;margin-bottom:17px}
        .zd-demo-card h2{color:#101c32;font-size:32px;line-height:1.18;letter-spacing:-1.2px;margin:0 0 15px}
        .zd-demo-card-description{color:#64748b;font-size:14px;line-height:1.8;margin:0 0 24px}
        .zd-demo-meeting-details{background:#f8fafc;border:1px solid #e1e7ef;border-radius:10px;padding:19px;display:grid;gap:17px}.zd-demo-meeting-details>div{display:flex;align-items:center;gap:12px;color:#526278;font-size:13px;font-weight:550}.zd-demo-meeting-details svg{color:#3d63f5;flex-shrink:0}
        .zd-demo-divider{height:1px;background:#e1e7ef;margin:27px 0}.zd-demo-booking-title{color:#101c32;font-size:17px;font-weight:700;margin:0 0 9px}.zd-demo-booking-description{color:#64748b;font-size:13px;line-height:1.8;margin:0 0 22px}
        .zd-demo-cta{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;background:#3d63f5;border:1px solid #3d63f5;border-radius:11px;color:#fff;padding:16px 20px;text-decoration:none;font-size:14px;font-weight:700;transition:background .2s ease}.zd-demo-cta:hover{background:#284ce1;color:#fff}
        .zd-demo-unavailable{background:#f6f8fc;border:1px solid #dfe5ed;border-radius:9px;padding:15px;color:#64748b;font-size:13px;text-align:center}.zd-demo-note{color:#8491a4;font-size:11px;line-height:1.7;text-align:center;margin-top:18px}.zd-demo-panel-footer{color:#64748b;font-size:11px;font-weight:550;text-align:center;padding:17px 0 0}
        .zd-demo-benefits{background:#fff;border-top:1px solid #e5eaf0;border-bottom:1px solid #e5eaf0;padding:35px 0}.zd-demo-benefit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;text-align:center}.zd-demo-benefit-grid h3{font-size:16px;margin:0 0 7px}.zd-demo-benefit-grid p{color:#64748b;font-size:13px;margin:0}
        .zd-demo-section,.zd-demo-muted-section{padding:90px 0}.zd-demo-muted-section{background:#f6f8fc;border-top:1px solid #e5eaf1;border-bottom:1px solid #e5eaf1}.zd-demo-section-heading{max-width:760px;text-align:center;margin:0 auto 45px}.zd-demo-section-heading h2,.zd-demo-large-heading{color:#101c32;font-size:clamp(30px,4vw,44px);letter-spacing:-1.6px;line-height:1.2;margin:0 0 20px}.zd-demo-section-heading p,.zd-demo-body-text{font-size:16px;line-height:1.85;color:#64748b}
        .zd-demo-agenda-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}.zd-demo-agenda-card,.zd-demo-industry-card{background:#fff;border:1px solid #dfe5ed;border-radius:15px;padding:28px;transition:all .25s ease}.zd-demo-agenda-card:hover,.zd-demo-industry-card:hover{transform:translateY(-4px);border-color:#a8b8f8;box-shadow:0 15px 35px #172b4510}
        .zd-demo-agenda-number,.zd-demo-industry-icon{width:47px;height:47px;display:grid;place-items:center;background:#edf2ff;color:#3d63f5;border-radius:10px;font-size:18px;font-weight:750;margin-bottom:24px}.zd-demo-agenda-card h3,.zd-demo-industry-card h3{font-size:19px;line-height:1.4;color:#101c32;margin:0 0 13px}.zd-demo-agenda-card p,.zd-demo-industry-card p{color:#64748b;font-size:14px;line-height:1.8;margin:0}
        .zd-demo-industry-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.zd-demo-industry-card{display:block;text-decoration:none}.zd-demo-industry-icon{font-size:24px}.zd-demo-industry-card>span{display:inline-block;color:#3d63f5;font-size:13px;font-weight:650;margin-top:23px}
        .zd-demo-faq-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:75px;align-items:start}.zd-demo-text-link{display:inline-block;color:#3d63f5;font-size:14px;font-weight:650;text-decoration:none;margin-top:15px}.zd-demo-text-link:hover{text-decoration:underline}.zd-demo-faq-list{display:grid;gap:13px}.zd-demo-faq-item{background:#fff;border:1px solid #dfe5ed;border-radius:11px;padding:19px}.zd-demo-faq-item summary{color:#101c32;font-size:14px;font-weight:650;cursor:pointer}.zd-demo-faq-item p{color:#64748b;font-size:13px;line-height:1.8;margin:15px 0 0}
        .zd-demo-bottom-section{padding:0 0 85px}.zd-demo-bottom-cta{background:linear-gradient(135deg,#101c32,#172b52);color:#fff;border-radius:22px;padding:70px 25px;text-align:center}.zd-demo-bottom-label{color:#a6b9ff;font-size:11px;font-weight:750;letter-spacing:1.8px;margin-bottom:22px}.zd-demo-bottom-cta h2{color:#fff;font-size:clamp(32px,4vw,46px);line-height:1.2;letter-spacing:-1.5px;margin:0 0 22px}.zd-demo-bottom-cta p{color:#c1cce0;font-size:16px;line-height:1.8;max-width:650px;margin:0 auto 28px}.zd-demo-bottom-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:13px}.zd-demo-bottom-primary,.zd-demo-bottom-secondary{display:inline-flex;align-items:center;justify-content:center;padding:14px 26px;border-radius:11px;font-size:14px;font-weight:650;text-decoration:none;transition:all .2s ease}.zd-demo-bottom-primary{background:#3d63f5;color:#fff}.zd-demo-bottom-primary:hover{background:#284ce1;color:#fff}.zd-demo-bottom-secondary{color:#fff;border:1px solid #ffffff50}.zd-demo-bottom-secondary:hover{background:#ffffff15;color:#fff}
        .zd-demo-footer{background:#f8fafc;border-top:1px solid #e2e7ef;padding:45px 0 25px}.zd-demo-footer-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:25px}.zd-demo-footer-top h3{font-size:23px;margin:0 0 10px}.zd-demo-footer-top p{color:#64748b;font-size:13px;line-height:1.7;max-width:350px;margin:0}.zd-demo-footer-links{display:flex;align-items:center;flex-wrap:wrap;gap:23px}.zd-demo-footer-links a{color:#526278;font-size:13px;text-decoration:none}.zd-demo-footer-links a:hover{color:#3d63f5}.zd-demo-footer-bottom{display:flex;justify-content:space-between;flex-wrap:wrap;gap:15px;border-top:1px solid #dfe5ed;padding-top:23px;margin-top:30px;font-size:11px;color:#64748b}
        .zd-demo-page a:focus-visible,.zd-demo-page summary:focus-visible{outline:3px solid #3d63f5;outline-offset:4px}
        @media(max-width:1050px){.zd-demo-hero-grid,.zd-demo-faq-grid{gap:40px}.zd-demo-agenda-grid{grid-template-columns:repeat(2,1fr)}.zd-demo-panel{padding:13px}.zd-demo-card{padding:26px}}
        @media(max-width:800px){.zd-demo-container{width:calc(100% - 36px)}.zd-demo-hero-grid,.zd-demo-faq-grid{grid-template-columns:1fr}.zd-demo-hero{padding:60px 0}.zd-demo-content h1{font-size:52px;letter-spacing:-2px}.zd-demo-panel{max-width:600px;width:100%;margin:0 auto}.zd-demo-benefit-grid,.zd-demo-industry-grid{grid-template-columns:1fr}.zd-demo-benefit-grid{gap:30px}.zd-demo-section,.zd-demo-muted-section{padding:60px 0}.zd-demo-bottom-section{padding-bottom:50px}}
        @media(max-width:480px){.zd-demo-content h1{font-size:44px}.zd-demo-agenda-grid{grid-template-columns:1fr}.zd-demo-card{padding:21px}.zd-demo-card h2{font-size:27px}.zd-demo-agenda-card,.zd-demo-industry-card{padding:23px}.zd-demo-bottom-cta{padding:45px 20px}}
        @media(prefers-reduced-motion:reduce){.zd-demo-agenda-card,.zd-demo-industry-card,.zd-demo-cta,.zd-demo-bottom-primary,.zd-demo-bottom-secondary{transition:none}}
      `}</style>
    </div>
  );
}
