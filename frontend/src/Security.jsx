import React, { useEffect } from "react";
import Header from "./Header";

const practices = [
  ["lock", "Account access", "ZapDocs uses Supabase authentication. Choose a unique password and never share your account credentials."],
  ["database", "Responsible data handling", "Enter only information necessary for the transaction. Limit access to confidential borrower and lender information."],
  ["file", "Document protection", "Store downloaded documents securely and distribute them only to authorized parties."],
  ["users", "Authorized access", "Review who can access your loan records and verify account isolation before using live borrower information."],
  ["check", "Safe beta testing", "Use fictional transactions during initial testing. Compare generated documents with approved reference materials."],
  ["alert", "Report security concerns", "Contact support if you encounter unexpected account access, document exposure or other potential security issues."],
];
const steps = [
  ["Protect credentials", "Use a strong, unique password and keep your login information private."],
  ["Minimize data", "Enter only the information required for your transaction."],
  ["Secure downloads", "Keep downloaded Word documents and closing materials in protected storage."],
  ["Report concerns", "Describe potential issues through support using fictional or redacted information."],
];
const faqs = [
  ["How does ZapDocs handle account authentication?", "ZapDocs uses Supabase authentication for account access. Keep your credentials private and report unexpected account activity."],
  ["Should I use real borrower data during beta testing?", "We recommend using fictional information during initial testing. Before using live data, verify applicable privacy obligations and the platform's security controls."],
  ["How should I store downloaded documents?", "Use secure storage with appropriate access restrictions. Only share documents with authorized parties involved in the transaction."],
  ["Is ZapDocs independently security certified?", "This page does not claim a security certification or completed independent audit. Access isolation, backups, retention and incident response procedures require validation before live production use."],
  ["How can I report a security concern?", "Use Contact Support and describe the issue without including passwords, tax IDs, signed loan documents or other confidential information."],
];
const paths = {
  shield: "M12 3 21 7v5c0 5-9 9-9 9s-9-4-9-9V7zM8 12l3 3 5-6",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4M12 15v2",
  database: "M4 6c0-4 16-4 16 0s-16 4-16 0ZM4 6v6c0 4 16 4 16 0V6M4 12v6c0 4 16 4 16 0v-6",
  file: "M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h8",
  users: "M16 21v-2a6 6 0 0 0-12 0v2M10 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M17 4a4 4 0 0 1 0 8M18 15a5 5 0 0 1 3 5",
  check: "M4 12l5 5L20 6",
  alert: "M12 3 2 21h20L12 3ZM12 9v5M12 17h.01",
};
function SecurityIcon({ name, size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.shield}/></svg>;
}
export default function Security({ showHeader = true, onHome, onLaunch, onPricing, onDemo } = {}) {
  useEffect(() => {
    const previous = document.title;
    document.title = "Security | ZapDocs";
    return () => { document.title = previous; };
  }, []);
  return (
    <div className="zs-page">
      {showHeader && <Header onHome={onHome} onLaunch={onLaunch} onPricing={onPricing} onDemo={onDemo}/>}
      <main>
        <section className="zs-hero">
          <div className="zs-wrap zs-split">
            <div>
              <div className="zs-eyebrow"><span/> COMPANY / SECURITY</div>
              <h1>Security and <em>responsible data handling.</em></h1>
              <p className="zs-lead">Learn about account access, responsible handling of loan information and the precautions to take when preparing private lending documents.</p>
              <div className="zs-actions"><a className="zs-primary" href="#security-practices">Explore security practices ↓</a><a className="zs-secondary" href="/privacy">Privacy Policy</a></div>
            </div>
            <div className="zs-panel">
              <div className="zs-window">
                <div className="zs-window-top"><div className="zs-brand-icon"><SecurityIcon name="shield"/></div><div><strong>ZapDocs</strong><small>Security center</small></div></div>
                <div className="zs-window-body">
                  <div className="zs-label">RESPONSIBLE USE</div>
                  <h2>Protect your lending information.</h2>
                  <p>Practical precautions for your account, loan records and documents.</p>
                  {[["lock","Account credentials","Keep passwords private"],["database","Loan information","Minimize confidential inputs"],["file","Downloaded documents","Restrict access and distribution"],["alert","Security concerns","Report unexpected activity"]].map(([icon,title,text]) => <div className="zs-window-row" key={title}><div className="zs-icon"><SecurityIcon name={icon} size={21}/></div><div><strong>{title}</strong><small>{text}</small></div></div>)}
                  <div className="zs-note">Security guidance, not a live security assessment or certification.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="zs-strip"><div className="zs-wrap zs-three">{[["Account protection","Keep your credentials private."],["Responsible information use","Limit unnecessary sensitive inputs."],["Secure document handling","Control access to downloaded files."]].map(([h,p])=><div key={h}><strong>{h}</strong><p>{p}</p></div>)}</div></section>
        <section className="zs-section" id="security-practices"><div className="zs-wrap">
          <div className="zs-heading"><div className="zs-label">SECURITY PRACTICES</div><h2>Protect information at every stage.</h2><p>Understand your responsibilities when using the ZapDocs workspace.</p></div>
          <div className="zs-three">{practices.map(([icon,title,text])=><article className="zs-card" key={title}><div className="zs-icon"><SecurityIcon name={icon}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>
        <section className="zs-section zs-muted"><div className="zs-wrap zs-split">
          <div><div className="zs-label">ONGOING VALIDATION</div><h2>Security is an ongoing responsibility.</h2><p>Before live production use, security controls and operational procedures should be verified. ZapDocs does not claim a completed independent security audit or security certification.</p><a className="zs-link" href="/contact-support">Contact support →</a></div>
          <div className="zs-card"><h3>Areas requiring validation</h3>{["Account and loan-record access isolation","Backup and recovery procedures","Data retention and deletion procedures","Incident response and reporting","Access permissions for stored documents"].map(item=><div className="zs-validation" key={item}><SecurityIcon name="shield" size={19}/><span>{item}</span></div>)}<div className="zs-note">These are validation priorities, not verified operational guarantees.</div></div>
        </div></section>
        <section className="zs-section"><div className="zs-wrap"><div className="zs-heading"><div className="zs-label">YOUR SECURITY CHECKLIST</div><h2>Four steps to responsible platform use.</h2></div><div className="zs-four">{steps.map(([h,p],i)=><article className="zs-card" key={h}><div className="zs-icon zs-number">0{i+1}</div><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
        <section className="zs-section zs-muted"><div className="zs-wrap zs-split zs-faq-layout"><div><div className="zs-label">FREQUENTLY ASKED QUESTIONS</div><h2>Questions about security?</h2><p>Learn how to handle account information and private lending documents responsibly.</p><a className="zs-link" href="/help-center">Visit the Help Center →</a></div><div className="zs-faq">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
        <section className="zs-section"><div className="zs-wrap"><div className="zs-cta"><div className="zs-label">CONTACT ZAPDOCS</div><h2>Have a security question or concern?</h2><p>Contact our support team without including confidential borrower information or account credentials.</p><div className="zs-actions"><a className="zs-primary" href="/contact-support">Contact Support →</a><a className="zs-secondary" href="/privacy">Privacy Policy</a></div></div></div></section>
      </main>
      <footer className="zs-footer"><div className="zs-wrap"><div className="zs-footer-top"><div><strong>ZapDocs</strong><p>Document preparation for private lending professionals.</p></div><div className="zs-footer-links"><a href="/platform">Platform</a><a href="/help-center">Help Center</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div><div className="zs-legal"><span>© {new Date().getFullYear()} ZapDocs. All rights reserved.</span><span>ZapDocs is not a law firm and does not provide legal advice.</span></div></div></footer>
      <style>{`
        .zs-page{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif;line-height:1.65}
        .zs-page *{box-sizing:border-box}.zs-wrap{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zs-hero{padding:90px 0;background:linear-gradient(135deg,#fff,#f4f7fc 65%,#eaf0ff)}
        .zs-split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:72px;align-items:center}
        .zs-eyebrow{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #dfe5ee;border-radius:30px;padding:9px 15px;color:#526278;font-size:11px;font-weight:750;letter-spacing:1.2px;margin-bottom:24px}.zs-eyebrow span{width:7px;height:7px;background:#3f6df6;border-radius:50%}
        .zs-page main h1{font-size:clamp(38px,4.7vw,64px);letter-spacing:-2.6px;line-height:1.1;margin:0 0 24px;color:#101c32}.zs-page h1 em{display:block;color:#315cff;font-style:normal}
        .zs-page main h2{font-size:clamp(28px,3.5vw,42px);line-height:1.2;letter-spacing:-1.3px;margin:0 0 18px;color:#101c32}.zs-page main p{color:#64748b;margin:0 0 20px}.zs-page .zs-lead{font-size:17px;line-height:1.85}
        .zs-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}.zs-primary,.zs-secondary{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;transition:background .2s}.zs-primary{background:#3f6df6;color:#fff}.zs-primary:hover{background:#2d55cf;color:#fff}.zs-secondary{background:#fff;color:#101c32;border:1px solid #d6deea}.zs-secondary:hover{background:#f1f5fa}
        .zs-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:24px;padding:19px;box-shadow:0 25px 65px #172b4518}.zs-window{background:white;border:1px solid #dce3ed;border-radius:15px;overflow:hidden}.zs-window-top{display:flex;gap:12px;align-items:center;padding:17px 22px;border-bottom:1px solid #e5eaf1}.zs-brand-icon{width:40px;height:40px;display:grid;place-items:center;background:#315cff;color:white;border-radius:10px}.zs-window-top strong,.zs-window-top small{display:block}.zs-window-top small{font-size:11px;color:#64748b}.zs-window-body{padding:26px}.zs-window-body h2{font-size:25px!important;letter-spacing:-.6px!important}.zs-window-body p{font-size:13px}.zs-label{color:#315cff;font-size:11px;letter-spacing:1.5px;font-weight:750;margin-bottom:16px}.zs-window-row{display:flex;gap:13px;align-items:center;padding:13px 0;border-bottom:1px solid #edf1f5}.zs-window-row strong,.zs-window-row small{display:block}.zs-window-row strong{font-size:14px}.zs-window-row small{color:#64748b;font-size:12px}.zs-icon{width:46px;height:46px;display:grid;place-items:center;background:#edf2ff;color:#315cff;border-radius:11px;flex:none}.zs-note{background:#f4f7fc;border:1px solid #e1e7ef;color:#526278;padding:13px;border-radius:8px;font-size:12px;line-height:1.7;margin-top:20px}
        .zs-strip{padding:34px 0;border-block:1px solid #e5eaf1;text-align:center}.zs-strip strong{font-size:16px}.zs-strip p{font-size:13px;margin:7px 0 0!important}.zs-three,.zs-four{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.zs-four{grid-template-columns:repeat(4,minmax(0,1fr))}
        .zs-section{padding:82px 0;scroll-margin-top:90px}.zs-muted{background:#f6f8fc;border-block:1px solid #e5eaf1}.zs-heading{max-width:760px;margin:0 auto 38px;text-align:center}.zs-card{background:#fff;border:1px solid #dfe5ed;border-radius:15px;padding:28px;transition:box-shadow .2s,border-color .2s}.zs-card:hover{border-color:#a8b8f8;box-shadow:0 15px 35px #172b450c}.zs-card>.zs-icon{margin-bottom:22px}.zs-card h3{font-size:19px;line-height:1.4;margin:0 0 12px}.zs-card p{font-size:14px;line-height:1.8;margin:0!important}.zs-number{font-size:16px;font-weight:750}.zs-validation{display:flex;gap:12px;align-items:center;border-bottom:1px solid #edf1f5;padding:13px 0;color:#526278;font-size:14px}.zs-validation svg{color:#315cff;flex:none}.zs-link{color:#315cff;font-size:14px;font-weight:700;text-decoration:none}.zs-link:hover{text-decoration:underline}
        .zs-faq-layout{align-items:start}.zs-faq{display:grid;gap:12px}.zs-faq details{background:#fff;border:1px solid #dfe5ed;border-radius:10px;padding:19px}.zs-faq summary{font-size:14px;font-weight:650;cursor:pointer}.zs-faq p{font-size:13px;margin:12px 0 0!important;line-height:1.8}
        .zs-cta{background:linear-gradient(135deg,#101c32,#172b52);border-radius:22px;padding:60px 24px;text-align:center;color:#fff}.zs-cta h2{color:#fff!important}.zs-cta p{color:#c1cce0!important;max-width:680px;margin-inline:auto!important}.zs-cta .zs-label{color:#a9bfff}.zs-cta .zs-actions{justify-content:center}.zs-cta .zs-secondary{background:transparent;border-color:#ffffff55;color:white}.zs-cta .zs-secondary:hover{background:#ffffff15}
        .zs-footer{background:#f8fafc;border-top:1px solid #dfe5ed;padding:36px 0 22px}.zs-footer-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:24px}.zs-footer-top strong{font-size:23px}.zs-footer-top p{color:#64748b;font-size:13px;margin:6px 0}.zs-footer-links{display:flex;flex-wrap:wrap;gap:20px}.zs-footer-links a{color:#526278;font-size:13px;text-decoration:none}.zs-legal{border-top:1px solid #dfe5ed;padding-top:20px;margin-top:24px;color:#64748b;font-size:11px;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}.zs-page main :focus-visible{outline:2px solid #315cff;outline-offset:3px}
        @media(max-width:1000px){.zs-split{gap:35px}.zs-four{grid-template-columns:repeat(2,minmax(0,1fr))}.zs-panel{padding:12px}}
        @media(max-width:760px){.zs-wrap{width:calc(100% - 36px)}.zs-split,.zs-three{grid-template-columns:1fr}.zs-hero,.zs-section{padding:55px 0}.zs-page main h1{letter-spacing:-1.6px}.zs-panel{max-width:600px;width:100%;margin:auto}}
        @media(max-width:480px){.zs-four{grid-template-columns:1fr}.zs-card,.zs-window-body{padding:20px}.zs-cta{padding:40px 18px}}@media(prefers-reduced-motion:reduce){.zs-card,.zs-primary,.zs-secondary{transition:none}}
      `}</style>
    </div>
  );
}
