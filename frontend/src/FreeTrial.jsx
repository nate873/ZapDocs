import { useEffect, useState } from "react";
import Header from "./Header";

export default function FreeTrial({ supabase, onHome, onLaunch, onPricing, onDemo } = {}) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(() => { document.title = "Start Your Free Trial | ZapDocs"; window.scrollTo(0, 0); }, []);
  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    const form = new FormData(e.currentTarget);
    if (!form.get("accept")) return setError("Please accept the Terms of Use and acknowledge the Privacy Policy.");
    if (!supabase) return setError("Account registration is currently unavailable. Please contact support.");
    setBusy(true); setError(""); setMessage("");
    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email: String(form.get("email")).trim(), password: String(form.get("password")),
        options: { emailRedirectTo: window.location.origin + "/app", data: {
          first_name: String(form.get("first_name")).trim(), last_name: String(form.get("last_name")).trim(),
          company: String(form.get("company")).trim(), role: form.get("role"), lending_state: form.get("state"),
          terms_acknowledged_at: new Date().toISOString(), terms_source: "/terms"
        }}
      });
      if (signupError) throw signupError;
      if (data?.session) window.location.assign("/app");
      else setMessage("Check your inbox for an account confirmation email, if required. Then sign in to ZapDocs.");
    } catch (err) { setError(err.message || "Unable to register. Please try again."); }
    finally { setBusy(false); }
  }
  return <div className="ztrial">
<style>{`
    
    .ztrial{font-family:Inter,system-ui,sans-serif;color:#101c32;background:#fff;min-height:100vh;line-height:1.6}
    .ztrial *{box-sizing:border-box}
    .ztrial main a,.ztrial footer a{color:#315cff;text-underline-offset:3px}
    .ztrial main :is(a,button,input,select,summary):focus-visible{outline:3px solid #315cff;outline-offset:3px}
    .ztrial .wrap{width:min(1200px,calc(100% - 64px));margin:auto}
    .ztrial .hero{background:linear-gradient(135deg,#fff 0%,#f4f7fc 60%,#eaf0ff 100%);padding:76px 0 82px}
    .ztrial .split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}
    .ztrial .eyebrow{font-size:11px;font-weight:750;color:#315cff;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
    .ztrial .hero .eyebrow{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #dfe5ee;border-radius:30px;padding:8px 14px}
    .ztrial .hero .eyebrow:before{content:'';width:7px;height:7px;border-radius:50%;background:#315cff}
    .ztrial h1{font-size:clamp(42px,5vw,68px);line-height:1.08;letter-spacing:-.055em;margin:0 0 24px;font-weight:750}
    .ztrial h1 span{display:block;color:#315cff}
    .ztrial h2{font-size:clamp(26px,3vw,40px);line-height:1.18;letter-spacing:-.035em;margin:0 0 18px}
    .ztrial h3{font-size:19px;line-height:1.4;margin:12px 0 8px}
    .ztrial p{color:#64748b;margin:0 0 18px;line-height:1.75}
    .ztrial .lead{font-size:18px;max-width:530px}
    .ztrial .benefits{list-style:none;padding:0;margin:32px 0}
    .ztrial .benefits li{display:flex;gap:12px;margin:17px 0;align-items:center;font-size:15px;font-weight:550;color:#334155}
    .ztrial .tick{width:26px;height:26px;display:grid;place-items:center;border-radius:50%;background:#e5f8ed;color:#16834c;font-weight:750;flex-shrink:0}
    .ztrial .hero-copy>.small{border-top:1px solid #dfe5ed;padding-top:20px;max-width:520px}
    .ztrial .formpanel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:25px;padding:18px;box-shadow:0 25px 65px #172b451a;min-width:0}
    .ztrial .formcard{background:white;border:1px solid #dce3ed;border-radius:17px;padding:32px}
    .ztrial .formcard h2{font-size:29px;margin:0 0 8px}
    .ztrial .formcard>p{font-size:14px;margin-bottom:25px}
    .ztrial .form-label{color:#315cff;font-size:10px;font-weight:750;letter-spacing:1.4px;margin-bottom:12px}
    .ztrial .fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px}
    .ztrial .field{display:flex;flex-direction:column;gap:7px;min-width:0;font-size:13px;font-weight:650;color:#334155}
    .ztrial .wide{grid-column:1/-1}
    .ztrial input:not([type=checkbox]),.ztrial select{width:100%;border:1px solid #cbd5e1;border-radius:9px;padding:11px 12px;font:inherit;font-size:14px;font-weight:400;background:white;color:#101c32;min-height:46px}
    .ztrial input::placeholder{color:#94a3b8}
    .ztrial .consent{display:flex;gap:10px;align-items:flex-start;font-size:12px;font-weight:400;color:#526278;line-height:1.7}
    .ztrial .consent input{margin-top:4px;flex-shrink:0;accent-color:#315cff;width:16px;height:16px}
    .ztrial .small{font-size:12px;font-weight:400;color:#64748b}
    .ztrial .btn{display:inline-flex;align-items:center;justify-content:center;border:1px solid #3f6df6;border-radius:10px;background:#3f6df6;color:#fff;padding:14px 22px;font:inherit;font-size:14px;font-weight:700;text-decoration:none;cursor:pointer;transition:background .2s ease}
    .ztrial .btn:hover:not(:disabled){background:#2d55cf}
    .ztrial .btn:disabled{opacity:.6;cursor:wait}
    .ztrial .signin{text-align:center;margin:0}
    .ztrial .section{padding:84px 0}
    .ztrial .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:32px}
    .ztrial .tile{border:1px solid #dfe5ed;border-radius:16px;padding:28px;background:#fff}
    .ztrial .tile p{font-size:14px;margin-bottom:0}
    .ztrial .step{display:grid;place-items:center;width:46px;height:46px;border-radius:12px;background:#edf2ff;color:#315cff;font-weight:750;margin-bottom:22px}
    .ztrial .dark{background:#101c32;color:white}
    .ztrial .dark p{color:#d5dbea}
    .ztrial .faq{background:#f6f8fc;border-top:1px solid #e5eaf1}
    .ztrial .faq details{padding:19px 22px;border:1px solid #dfe5ed;border-radius:11px;background:white;margin:12px 0}
    .ztrial summary{cursor:pointer;font-weight:650;font-size:15px}
    .ztrial details p{margin:12px 0 0;font-size:14px}
    .ztrial footer{border-top:1px solid #dfe4ec;background:#f8fafc}
    .ztrial .foot{display:flex;gap:20px;flex-wrap:wrap;align-items:center;padding-block:25px;font-size:12px;color:#64748b}
    .ztrial .foot a{color:#526278;text-decoration:none}
    .ztrial .alert,.ztrial .success{border-radius:8px;padding:12px;margin:0;font-size:13px}
    .ztrial .alert{color:#a51c15;background:#fff1f0;border:1px solid #f6d4d0}
    .ztrial .success{color:#176b50;background:#eaf8f0;border:1px solid #cdebdc}
    @media(max-width:1000px){.ztrial .split{gap:35px}.ztrial .formcard{padding:25px}}
    @media(max-width:850px){.ztrial .split,.ztrial .three{grid-template-columns:1fr;gap:30px}.ztrial .hero,.ztrial .section{padding:60px 0}.ztrial .wrap{width:calc(100% - 36px)}.ztrial .formpanel{max-width:620px;width:100%;margin:auto}}
    @media(max-width:480px){.ztrial .fields{grid-template-columns:1fr}.ztrial .formpanel{padding:10px}.ztrial .formcard{padding:20px}.ztrial h1{font-size:40px}}
    @media(prefers-reduced-motion:reduce){.ztrial .btn{transition:none}}
  `}</style>
<Header onHome={onHome} onLaunch={onLaunch} onPricing={onPricing} onDemo={onDemo} />
  <main>
<section className="hero">
<div className="wrap split">
<div className="hero-copy">
<div className="eyebrow">EXPERIENCE ZAPDOCS</div>
<h1>Start your <span>free trial.</span>
</h1>
<p className="lead">Discover a simpler way to prepare private lending documents. Build your first loan record and explore your document workflow from start to finish.</p>
<ul className="benefits">{["California and Florida loan document workflows","Custom interest-only payments, prepaid interest and balloon amounts","Servicing agreements and lender disclosures","Document previews and reusable loan information"].map(s=>
<li key={s}>
<span className="tick" aria-hidden="true">✓</span>{s}</li>)}</ul>
<p className="small">For private lenders, mortgage brokers and loan professionals. Use fictional loan data while evaluating the platform.</p>
</div>
  <div className="formpanel">
<div className="formcard">
<div className="form-label">CREATE YOUR WORKSPACE</div>
<h2>Create your trial account</h2>
<p>Enter your business details to get started.</p>
<form onSubmit={submit}>
<div className="fields">
<label className="field">First name<input name="first_name" placeholder="First name" autoComplete="given-name" required maxLength={100}/>
</label>
<label className="field">Last name<input name="last_name" placeholder="Last name" autoComplete="family-name" required maxLength={100}/>
</label>
<label className="field wide">Business email<input type="email" name="email" placeholder="you@company.com" autoComplete="email" required/>
</label>
<label className="field wide">Company name<input name="company" placeholder="Your company" autoComplete="organization" required maxLength={200}/>
</label>
<label className="field">Your role<select name="role" required defaultValue="">
<option value="" disabled>Select role</option>
<option>Private lender</option>
<option>Mortgage broker</option>
<option>Loan originator</option>
<option>Servicing professional</option>
<option>Other</option>
</select>
</label>
<label className="field">Lending market<select name="state" required defaultValue="">
<option value="" disabled>Select market</option>
<option>Florida</option>
<option>California</option>
<option>Both</option>
<option>Other</option>
</select>
</label>
<label className="field wide">Password<input name="password" placeholder="Create a password" type="password" autoComplete="new-password" minLength={8} required/>
<span className="small">At least 8 characters.</span>
</label>
<label className="consent wide">
<input type="checkbox" name="accept" required/>
<span>I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> and acknowledge the <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span>
</label>{error&&<p className="alert wide" role="alert">{error}</p>}{message&&<p className="success wide" role="status">{message}</p>}<button className="btn wide" type="submit" disabled={busy}>{busy?"Creating account…":"Start Free Trial"}</button>
<p className="small wide signin">Already have an account? <a href="/app">Sign in</a>.</p>
</div>
</form>
</div>
</div>
</div>
</section>
  <section className="section">
<div className="wrap">
<div className="eyebrow">How it works</div>
<h2>From loan information to documents in three steps.</h2>
<div className="three">{[["Create your account","Register and confirm your email if required."],["Build a sample loan","Choose your state and enter fictional borrower, lender, property and payment details."],["Preview and generate","Review the loan terms and explore the available document outputs."]].map(([h,p],i)=>
<article className="tile" key={h}>
<div className="step">{i+1}</div>
<h3>{h}</h3>
<p>{p}</p>
</article>)}</div>
</div>
</section>
  <section className="section dark">
<div className="wrap split">
<div>
<div className="eyebrow" style={{color:"#a9bfff"}}>What to expect</div>
<h2>Built around your lending workflow.</h2>
<p>Explore a centralized workspace for entering loan terms, preparing documents and reviewing outputs. ZapDocs supports document preparation, not legal advice or loan approval.</p>
</div>
<div>{[["Loan customization","Work with payment tiers and manually controlled balloon amounts."],["Reusable information","Explore saved loan records and reusable profiles."],["Document preparation","Generate available closing packages and standalone documents for supported workflows."]].map(([h,p])=>
<div key={h}>
<h3>{h}</h3>
<p>{p}</p>
</div>)}</div>
</div>
</section>
  <section className="section faq">
<div className="wrap">
<h2>Frequently asked questions</h2>{[["Do I need a credit card?","This registration form does not collect payment card information."],["Which states are supported?","ZapDocs currently focuses on California and Florida."],["Can I use actual borrower information?","For trial evaluation, use fictional or appropriately redacted records. Review the Privacy Policy and your obligations before submitting real borrower information."],["Can I get help?","Visit the Help Center or Contact Support for assistance." ]].map(([q,a])=>
<details key={q}>
<summary>{q}</summary>
<p>{a}</p>
</details>)}<p style={{marginTop:25}}>
<a href="/help-center">Help Center</a> · <a href="/contact-support">Contact Support</a>
</p>
</div>
</section>
</main>
<footer>
<div className="wrap foot">
<span>© {new Date().getFullYear()} ZapDocs. All rights reserved.</span>
<a href="/terms">Terms</a>
<a href="/privacy">Privacy Policy</a>
<a href="/accessibility">Accessibility</a>
<a href="/">Home</a>
</div>
</footer>
</div>;
}
