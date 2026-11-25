import React, { useEffect, useState } from "react";
import Header from "./Header";

const updates = [
  { category: "Document Generation", icon: "files", title: "Florida and California loan packages", description: "Generate coordinated document packages for supported private lending transactions.", href: "/document-outputs" },
  { category: "Loan Calculations", icon: "calculator", title: "Automatic payment calculations", description: "Calculate interest-only payments and review customizable payment schedules and balloon amounts.", href: "/product-guide" },
  { category: "New Documents", icon: "file", title: "Servicing agreements and lender disclosures", description: "Prepare supported servicing agreements and lender disclosures directly from your loan workspace.", href: "/document-outputs" },
  { category: "User Experience", icon: "eye", title: "Document previews", description: "Review available generated document previews before downloading your loan package.", href: "/document-generation" },
  { category: "Customer Support", icon: "help", title: "ZapDocs Help Center", description: "Explore product guidance and contact support for assistance.", href: "/help-center" },
];
const paths = {
  files: "M8 3h9l4 4v14H8zM17 3v5h4M4 6H3v15h2M11 12h7M11 16h7",
  calculator: "M5 3h14v18H5zM8 6h8v4H8zM8 14h1M15 14h1M8 17h1M15 17h1",
  file: "M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h8",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  help: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9a3 3 0 1 1 4 3c-1 1-1 1-1 2M12 17h.01",
};
function UpdateIcon({ name }) {
  return <span className="zu-icon" aria-hidden="true"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name] || paths.file}/></svg></span>;
}
const categories = ["All updates", ...new Set(updates.map(item => item.category))];

export default function Updates({ onHome, onLaunch, onPricing, onDemo, showHeader = true } = {}) {
  const [category, setCategory] = useState("All updates");
  const visible = category === "All updates" ? updates : updates.filter(item => item.category === category);
  useEffect(() => {
    const previous = document.title;
    document.title = "Product Updates | ZapDocs";
    return () => { document.title = previous; };
  }, []);
  return (
    <div className="zu-page">
      {showHeader && <Header onHome={onHome} onLaunch={onLaunch} onPricing={onPricing} onDemo={onDemo}/>}
      <main className="zu-main">
        <section className="zu-hero">
          <div className="zu-wrap zu-split">
            <div>
              <div className="zu-eyebrow"><span/> ZAPDOCS / PRODUCT UPDATES</div>
              <h1>What's new at <em>ZapDocs.</em></h1>
              <p className="zu-lead">Explore the features, improvements and additions to your private lending document preparation workspace.</p>
              <div className="zu-actions"><a className="zu-primary" href="#product-updates">Explore updates ↓</a><a className="zu-secondary" href="/product-guide">Product guide</a></div>
            </div>
            <div className="zu-feature-panel">
              <div className="zu-feature-card">
                <div className="zu-feature-top"><UpdateIcon name="files"/><span className="zu-label">PLATFORM HIGHLIGHT</span></div>
                <h2>Two states. One workspace.</h2>
                <p>Prepare coordinated loan document packages for supported Florida and California transactions.</p>
                <div className="zu-state-grid">{[["FL", "Florida", "Mortgage workflow"], ["CA", "California", "Deed of trust workflow"]].map(([abbr, title, text]) => <div className="zu-state" key={abbr}><span>{abbr}</span><strong>{title}</strong><small>{text}</small></div>)}</div>
                <a className="zu-link" href="/document-outputs">Explore document outputs →</a>
              </div>
            </div>
          </div>
        </section>
        <section className="zu-section" id="product-updates">
          <div className="zu-wrap">
            <div className="zu-section-heading"><div className="zu-label">PRODUCT CHANGELOG</div><h2>Explore platform improvements.</h2><p>Browse updates by the part of your lending workflow that matters to you.</p></div>
            <div className="zu-filters" role="group" aria-label="Filter product updates">{categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
            <p className="zu-count" aria-live="polite">{visible.length} {visible.length === 1 ? "update" : "updates"}</p>
            <div className="zu-updates">
              {visible.map(item => <article className="zu-update" key={item.title}><UpdateIcon name={item.icon}/><div className="zu-update-copy"><div className="zu-label">{item.category}</div><h3>{item.title}</h3><p>{item.description}</p><a className="zu-link" href={item.href}>Learn more →</a></div></article>)}
            </div>
          </div>
        </section>
        <section className="zu-section zu-muted">
          <div className="zu-wrap">
            <div className="zu-section-heading"><div className="zu-label">KEEP EXPLORING</div><h2>Make the most of ZapDocs.</h2></div>
            <div className="zu-resources">{[["help", "Help Center", "Find answers to common platform questions.", "/help-center"], ["file", "Getting Started", "Create and review your first fictional loan package.", "/getting-started"], ["eye", "Product Guide", "Explore loan information, payments and document controls.", "/product-guide"]].map(([icon,title,text,href]) => <a className="zu-resource" href={href} key={title}><UpdateIcon name={icon}/><h3>{title}</h3><p>{text}</p><span className="zu-link">Explore resource →</span></a>)}</div>
          </div>
        </section>
        <section className="zu-section"><div className="zu-wrap"><div className="zu-cta"><div className="zu-label">EXPERIENCE ZAPDOCS</div><h2>See the platform in action.</h2><p>Discover how ZapDocs can fit into your private lending document preparation workflow.</p><div className="zu-actions"><a href="/demo" className="zu-primary">Book a Demo →</a><a href="/contact" className="zu-secondary">Share product feedback</a></div></div></div></section>
      </main>
      <footer className="zu-footer"><div className="zu-wrap"><div className="zu-foot"><div><strong>ZapDocs</strong><p>Document preparation for private lending professionals.</p></div><div className="zu-links"><a href="/platform">Platform</a><a href="/pricing">Pricing</a><a href="/help-center">Help Center</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/">Home</a></div></div><div className="zu-legal"><span>© {new Date().getFullYear()} ZapDocs. All rights reserved.</span><span>ZapDocs is not a law firm and does not provide legal advice.</span></div></div></footer>
      <style>{`
        .zu-page{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif}
        .zu-page *{box-sizing:border-box}
        .zu-page .zu-wrap{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zu-page .zu-main{background:#fff;line-height:1.65}
        .zu-page .zu-hero{padding:90px 0;background:linear-gradient(135deg,#fff,#f4f7fc 65%,#eaf0ff)}
        .zu-page .zu-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:70px;align-items:center}
        .zu-page .zu-eyebrow{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #dfe5ee;border-radius:30px;padding:9px 15px;color:#526278;font-size:11px;letter-spacing:1.1px;font-weight:750;margin-bottom:24px}
        .zu-page .zu-eyebrow span{width:7px;height:7px;background:#3f6df6;border-radius:50%}
        .zu-page .zu-main h1{font-size:clamp(42px,5.2vw,72px);line-height:1.08;letter-spacing:-2.8px;margin:0 0 23px;color:#101c32;font-weight:800}
        .zu-page .zu-main h1 em{display:block;font-style:normal;color:#315cff}
        .zu-page .zu-main h2{font-size:clamp(29px,3.5vw,44px);line-height:1.2;letter-spacing:-1.4px;margin:0 0 16px;color:#101c32}
        .zu-page .zu-main h3{font-size:22px;line-height:1.35;margin:0 0 10px;color:#101c32}
        .zu-page .zu-main p,.zu-page .zu-footer p{color:#64748b;margin:0 0 18px}
        .zu-page .zu-lead{font-size:18px;line-height:1.85;max-width:530px}
        .zu-page .zu-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
        .zu-page .zu-primary,.zu-page .zu-secondary{display:inline-flex;justify-content:center;align-items:center;padding:13px 23px;border-radius:11px;text-decoration:none;font-size:14px;font-weight:700;transition:background .2s}
        .zu-page .zu-primary{background:#3f6df6;border:1px solid #3f6df6;color:#fff}.zu-page .zu-primary:hover{background:#2d55cf;color:#fff}
        .zu-page .zu-secondary{background:#fff;border:1px solid #d6deea;color:#101c32}.zu-page .zu-secondary:hover{background:#edf2ff}
        .zu-page .zu-feature-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:24px;padding:20px;box-shadow:0 25px 65px #172b4518}
        .zu-page .zu-feature-card{background:#fff;border:1px solid #dce3ed;border-radius:16px;padding:30px}
        .zu-page .zu-feature-card h2{font-size:32px}
        .zu-page .zu-feature-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:24px}
        .zu-page .zu-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:11px;background:#edf2ff;color:#315cff;flex:none}
        .zu-page .zu-label{color:#315cff;font-size:11px;font-weight:750;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:12px}
        .zu-page .zu-feature-top .zu-label{margin:0;text-align:right}
        .zu-page .zu-state-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0}
        .zu-page .zu-state{background:#f8fafc;border:1px solid #e1e7ef;border-radius:10px;padding:16px;min-width:0}
        .zu-page .zu-state>span{display:grid;place-items:center;background:#e9efff;color:#315cff;font-weight:800;width:36px;height:36px;border-radius:8px;margin-bottom:12px}
        .zu-page .zu-state strong,.zu-page .zu-state small{display:block}.zu-page .zu-state small{color:#64748b;font-size:11px;margin-top:4px}
        .zu-page .zu-link{color:#315cff;text-decoration:none;font-weight:650;font-size:14px}.zu-page .zu-link:hover{text-decoration:underline}
        .zu-page .zu-section{padding:78px 0;scroll-margin-top:90px}
        .zu-page .zu-section-heading{text-align:center;max-width:740px;margin:0 auto 38px}
        .zu-page .zu-filters{display:flex;flex-wrap:wrap;gap:9px;padding-bottom:20px;border-bottom:1px solid #e1e7ef}
        .zu-page .zu-filters button{background:#fff;color:#526278;border:1px solid #dfe5ed;border-radius:8px;padding:10px 15px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
        .zu-page .zu-filters button:hover{background:#f4f7fc}.zu-page .zu-filters button[aria-pressed=true]{background:#315cff;border-color:#315cff;color:#fff}
        .zu-page .zu-count{font-size:13px;margin:18px 0!important}
        .zu-page .zu-updates{display:grid;gap:16px}
        .zu-page .zu-update{display:flex;align-items:flex-start;gap:22px;border:1px solid #dfe5ed;border-radius:15px;padding:28px;background:white}
        .zu-page .zu-update-copy{min-width:0;flex:1}.zu-page .zu-update .zu-label{margin-bottom:7px}.zu-page .zu-update p{font-size:15px;margin-bottom:14px}
        .zu-page .zu-muted{background:#f6f8fc;border-block:1px solid #e5eaf1}
        .zu-page .zu-resources{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .zu-page .zu-resource{display:block;text-decoration:none;background:#fff;border:1px solid #dfe5ed;border-radius:15px;padding:28px;transition:transform .2s,border-color .2s,box-shadow .2s}
        .zu-page .zu-resource:hover{transform:translateY(-3px);border-color:#a8b8f8;box-shadow:0 15px 35px #172b4510}.zu-page .zu-resource .zu-icon{margin-bottom:22px}.zu-page .zu-resource p{font-size:14px}
        .zu-page .zu-cta{background:linear-gradient(135deg,#101c32,#172b52);color:#fff;text-align:center;border-radius:22px;padding:65px 24px}.zu-page .zu-cta h2{color:white}.zu-page .zu-cta p{color:#c1cce0}.zu-page .zu-cta .zu-label{color:#a9bfff}.zu-page .zu-cta .zu-actions{justify-content:center}.zu-page .zu-cta .zu-secondary{background:transparent;color:#fff;border-color:#ffffff55}.zu-page .zu-cta .zu-secondary:hover{background:#ffffff15}
        .zu-page .zu-footer{background:#f8fafc;border-top:1px solid #e1e7ef;padding:40px 0 24px}.zu-page .zu-foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}.zu-page .zu-foot strong{font-size:23px}.zu-page .zu-foot p{font-size:13px;margin:7px 0}.zu-page .zu-links{display:flex;gap:20px;flex-wrap:wrap;align-items:center}.zu-page .zu-links a{color:#526278;font-size:13px;text-decoration:none}.zu-page .zu-links a:hover{color:#315cff}.zu-page .zu-legal{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid #dfe5ed;margin-top:24px;padding-top:22px;color:#64748b;font-size:11px}
        .zu-page .zu-main :focus-visible,.zu-page .zu-footer :focus-visible{outline:3px solid #315cff;outline-offset:3px}
        @media(max-width:950px){.zu-page .zu-split{gap:32px}.zu-page .zu-feature-card{padding:23px}}
        @media(max-width:760px){.zu-page .zu-wrap{width:calc(100% - 36px)}.zu-page .zu-split,.zu-page .zu-resources{grid-template-columns:1fr}.zu-page .zu-hero,.zu-page .zu-section{padding:54px 0}.zu-page .zu-main h1{letter-spacing:-1.7px}.zu-page .zu-feature-panel{padding:12px}}
        @media(max-width:480px){.zu-page .zu-update{padding:19px;gap:14px}.zu-page .zu-update .zu-icon{width:38px;height:38px}.zu-page .zu-main h3{font-size:19px}.zu-page .zu-state{padding:12px}.zu-page .zu-cta{padding:42px 18px}}
        @media(prefers-reduced-motion:reduce){.zu-page .zu-resource,.zu-page .zu-primary,.zu-page .zu-secondary{transition:none}}
      `}</style>
    </div>
  );
}
