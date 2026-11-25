import { useEffect, useState } from "react";
import Header from "./Header";
const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL || import.meta.env.VITE_DEMO_CONTACT_EMAIL || "").trim();
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) && !/[?&#]/.test(contactEmail);
const topics = [
  ["Product questions", "Explore supported states, document types and the ZapDocs platform.", "/product-guide", "View product guide"],
  ["Beta inquiries", "Tell us about your lending business and the features you would like to test.", "/demo", "Book a demo"],
  ["Technical support", "Get assistance with account access, payment calculations or document generation.", "/contact-support", "Contact support"],
];
export default function Contact({ onHome, onLaunch, onPricing, onDemo } = {}) {
  const [topic, setTopic] = useState("Product questions");
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const previous = document.title;
    document.title = "Contact | ZapDocs";
    return () => { document.title = previous; };
  }, []);
  function submit(event) {
    event.preventDefault();
    if (!validEmail) {
      setNotice("Email inquiries are not configured yet. Please use the support or demo links.");
      return;
    }
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Business email: ${form.get("email")}`,
      `Company: ${form.get("company") || "Not provided"}`,
      `Inquiry: ${topic}`,
      "", String(form.get("message") || "")
    ].join("\n");
    window.location.assign(`mailto:${contactEmail}?subject=${encodeURIComponent("ZapDocs — " + topic)}&body=${encodeURIComponent(body)}`);
    setNotice("Your email draft can be sent from your email application. This form does not send messages directly.");
  }
  return (
    <div className="zcontact">
      <Header onHome={onHome} onLaunch={onLaunch} onPricing={onPricing} onDemo={onDemo} />
      <main>
        <section className="zc-hero">
          <div className="zc-wrap zc-split">
            <div className="zc-intro">
              <div className="zc-eyebrow"><span/> COMPANY / CONTACT</div>
              <h1>Let's talk about <em>your lending workflow.</em></h1>
              <p>Have questions about ZapDocs, beta access or private lending document preparation? We'd like to hear from you.</p>
              <div className="zc-options">
                {topics.map(([title, text, href, action], i) => (
                  <article key={title} className="zc-option">
                    <div className="zc-icon" aria-hidden="true">{["?", "↗", "◎"][i]}</div>
                    <div><h3>{title}</h3><p>{text}</p><a href={href}>{action} →</a></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="zc-panel">
              <div className="zc-card">
                <div className="zc-label">GET IN TOUCH</div>
                <h2>How can we help?</h2>
                <p>Tell us a little about your business and what you would like to accomplish.</p>
                <form onSubmit={submit} className="zc-form">
                  <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required maxLength={150}/></label>
                  <label>Business email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required/></label>
                  <label className="zc-wide">Company name (optional)<input name="company" autoComplete="organization" placeholder="Your company" maxLength={200}/></label>
                  <label className="zc-wide">Inquiry type<select value={topic} onChange={e => {setTopic(e.target.value); setNotice("");}}>{[...topics.map(t => t[0]), "General feedback", "Other"].map(t => <option key={t}>{t}</option>)}</select></label>
                  <label className="zc-wide">Your message<textarea name="message" rows={5} required maxLength={2000} placeholder="Tell us how we can help. Please use fictional or redacted details."/></label>
                  <p className="zc-privacy zc-wide">Please do not include borrower tax IDs, credentials, signed loan documents or other confidential information.</p>
                  {validEmail ? <button className="zc-primary zc-wide" type="submit">Open email draft →</button> : <div className="zc-unavailable zc-wide">Email inquiries are not available yet. <a href="/contact-support">Visit Contact Support</a> or <a href="/demo">book a demo</a>.</div>}
                  {notice && <p role="status" className="zc-unavailable zc-wide">{notice}</p>}
                  <small className="zc-wide zc-form-note">This form opens your email application. It does not transmit your information to ZapDocs. See our <a href="/privacy">Privacy Policy</a>.</small>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="zc-section">
          <div className="zc-wrap">
            <div className="zc-heading"><div className="zc-label">FIND THE RIGHT RESOURCE</div><h2>We're here to help you get started.</h2><p>Explore the platform or find guidance for your next transaction.</p></div>
            <div className="zc-grid">
              {[["Help Center", "Find answers to common account and platform questions.", "/help-center"], ["Getting Started", "Learn how to create your first fictional loan package.", "/getting-started"], ["Document Outputs", "Explore configured Florida and California document workflows.", "/document-outputs"]].map(([title, text, href], i) => <a className="zc-resource" href={href} key={title}><div className="zc-icon" aria-hidden="true">{["?", "✓", "▤"][i]}</div><h3>{title}</h3><p>{text}</p><strong>Explore resource →</strong></a>)}
            </div>
          </div>
        </section>
        <section className="zc-section zc-muted">
          <div className="zc-wrap zc-split">
            <div><div className="zc-label">BEFORE CONTACTING US</div><h2>Make your inquiry more useful.</h2><p>Let us know which states you lend in, the document types you prepare and the features you would like to explore. For technical issues, include the relevant error and steps to reproduce it, using fictional or redacted information.</p></div>
            <div className="zc-faq">
              {[["How can I request beta access?", "Choose Beta inquiries or book a demo to discuss your business and the features you would like to test."], ["Where can I report a document discrepancy?", "Use Contact Support. Describe the discrepancy and provide fictional or redacted examples rather than confidential loan records."], ["Does ZapDocs provide legal advice?", "No. ZapDocs is document preparation software and does not replace independent professional review."]].map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>
        <section className="zc-section"><div className="zc-wrap"><div className="zc-cta"><div className="zc-label">EXPERIENCE ZAPDOCS</div><h2>See the platform in action.</h2><p>Explore a simpler way to prepare private lending documents.</p><a className="zc-primary" href="/demo">Book a Demo →</a></div></div></section>
      </main>
      <footer className="zc-footer"><div className="zc-wrap zc-foot"><div><strong>ZapDocs</strong><p>Document preparation for private lending professionals.</p></div><div className="zc-links"><a href="/platform">Platform</a><a href="/pricing">Pricing</a><a href="/help-center">Help Center</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><div className="zc-legal">© {new Date().getFullYear()} ZapDocs. All rights reserved. <span>ZapDocs is not a law firm and does not provide legal advice.</span></div></div></footer>
      <style>{`
        .zcontact{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif;line-height:1.65}
        .zcontact *{box-sizing:border-box}
        .zcontact .zc-wrap{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zcontact .zc-hero{padding:84px 0;background:linear-gradient(135deg,#fff,#f4f7fc 65%,#eaf0ff)}
        .zcontact .zc-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}
        .zcontact .zc-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:8px 14px;border:1px solid #dfe5ee;border-radius:30px;background:#fff;color:#526278;font-size:10px;font-weight:750;letter-spacing:1.2px;margin-bottom:24px}
        .zcontact .zc-eyebrow span{width:7px;height:7px;border-radius:50%;background:#3f6df6}
        .zcontact h1{font-size:clamp(40px,4.8vw,64px);letter-spacing:-2.8px;line-height:1.08;margin:0 0 24px;color:#101c32}
        .zcontact h1 em{display:block;color:#315cff;font-style:normal}
        .zcontact h2{font-size:clamp(28px,3.5vw,42px);letter-spacing:-1.3px;line-height:1.2;margin:0 0 16px;color:#101c32}
        .zcontact p{color:#64748b;margin:0 0 20px}
        .zcontact .zc-intro>p{font-size:17px;line-height:1.85}
        .zcontact .zc-options{display:grid;gap:22px;margin-top:32px}
        .zcontact .zc-option{display:flex;gap:15px;align-items:flex-start}
        .zcontact .zc-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:11px;background:#edf2ff;color:#315cff;font-size:23px;font-weight:750;flex:none}
        .zcontact h3{margin:0 0 6px;font-size:17px;line-height:1.4;color:#101c32}
        .zcontact .zc-option p{font-size:13px;margin:0 0 5px;line-height:1.7}
        .zcontact .zc-option a,.zcontact .zc-resource strong{font-size:13px;color:#315cff;text-decoration:none;font-weight:650}
        .zcontact .zc-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:24px;padding:19px;box-shadow:0 25px 65px #172b4518;min-width:0}
        .zcontact .zc-card{background:#fff;border:1px solid #dce3ed;border-radius:16px;padding:30px}
        .zcontact .zc-label{font-size:11px;font-weight:750;color:#315cff;letter-spacing:1.5px;margin-bottom:14px}
        .zcontact .zc-card h2{font-size:30px;margin-bottom:10px}
        .zcontact .zc-card>p{font-size:14px}
        .zcontact .zc-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
        .zcontact .zc-form label{display:flex;flex-direction:column;gap:7px;font-size:13px;font-weight:650;color:#334155;min-width:0}
        .zcontact .zc-wide{grid-column:1/-1}
        .zcontact .zc-form input,.zcontact .zc-form select,.zcontact .zc-form textarea{width:100%;min-width:0;border:1px solid #d5deeb;border-radius:8px;background:white;color:#101c32;padding:11px 12px;font:inherit;font-weight:400;min-height:44px}
        .zcontact .zc-form textarea{resize:vertical}
        .zcontact .zc-form input::placeholder,.zcontact .zc-form textarea::placeholder{color:#8491a4}
        .zcontact .zc-privacy,.zcontact .zc-unavailable{font-size:12px;line-height:1.65;padding:12px;background:#f4f7fc;border:1px solid #e1e7ef;border-radius:8px;margin:0;color:#526278}
        .zcontact .zc-primary{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border:0;border-radius:10px;background:#3f6df6;color:#fff;text-decoration:none;font:inherit;font-size:14px;font-weight:700;cursor:pointer}
        .zcontact .zc-primary:hover{background:#2d55cf;color:#fff}
        .zcontact .zc-form-note{font-size:11px;line-height:1.6;text-align:center;color:#64748b}
        .zcontact .zc-form-note a,.zcontact .zc-unavailable a{color:#315cff}
        .zcontact .zc-section{padding:76px 0}
        .zcontact .zc-heading{max-width:730px;margin:0 auto 36px;text-align:center}
        .zcontact .zc-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .zcontact .zc-resource{display:block;text-decoration:none;border:1px solid #dfe5ed;background:#fff;border-radius:15px;padding:28px;transition:transform .2s,border-color .2s,box-shadow .2s}
        .zcontact .zc-resource:hover{transform:translateY(-3px);border-color:#a8b8f8;box-shadow:0 15px 35px #172b4510}
        .zcontact .zc-resource .zc-icon{margin-bottom:20px}
        .zcontact .zc-resource h3{font-size:19px}
        .zcontact .zc-resource p{font-size:14px;margin:12px 0 20px}
        .zcontact .zc-muted{background:#f6f8fc;border-block:1px solid #e5eaf1}
        .zcontact .zc-faq{display:grid;gap:12px}
        .zcontact .zc-faq details{background:white;border:1px solid #dfe5ed;border-radius:11px;padding:18px}
        .zcontact .zc-faq summary{cursor:pointer;font-size:14px;font-weight:650}
        .zcontact .zc-faq p{font-size:13px;margin:12px 0 0}
        .zcontact .zc-cta{text-align:center;background:linear-gradient(135deg,#101c32,#172b52);color:#fff;border-radius:22px;padding:60px 24px}
        .zcontact .zc-cta h2{color:white}.zcontact .zc-cta p{color:#c1cce0}.zcontact .zc-cta .zc-label{color:#a9bfff}
        .zcontact .zc-footer{background:#f8fafc;border-top:1px solid #dfe5ed;padding:36px 0 22px}
        .zcontact .zc-foot{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:24px}
        .zcontact .zc-foot strong{font-size:22px}.zcontact .zc-foot p{font-size:13px;margin:6px 0 0}
        .zcontact .zc-links{display:flex;flex-wrap:wrap;gap:20px}.zcontact .zc-links a{font-size:13px;color:#526278;text-decoration:none}
        .zcontact .zc-legal{width:100%;border-top:1px solid #dfe5ed;padding-top:20px;font-size:11px;color:#64748b;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}
        .zcontact :focus-visible{outline:2px solid #315cff;outline-offset:3px}
        @media(max-width:950px){.zcontact .zc-split{gap:32px}.zcontact .zc-card{padding:22px}}
        @media(max-width:760px){.zcontact .zc-wrap{width:calc(100% - 36px)}.zcontact .zc-split,.zcontact .zc-grid{grid-template-columns:1fr}.zcontact .zc-hero,.zcontact .zc-section{padding:52px 0}.zcontact h1{letter-spacing:-1.7px}.zcontact .zc-panel{padding:12px}}
        @media(max-width:480px){.zcontact .zc-form{grid-template-columns:1fr}.zcontact .zc-card{padding:18px}.zcontact .zc-cta{padding:40px 18px}}
        @media(prefers-reduced-motion:reduce){.zcontact .zc-resource{transition:none}}
      `}</style>
    </div>
  );
}
