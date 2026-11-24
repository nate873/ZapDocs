import { useState } from "react";
import SitePageLayout from "./SitePageLayout";

const supportEmail = String(import.meta.env.VITE_ZAPDOCS_SUPPORT_EMAIL || "").trim();
const topics = ["Account or sign-in", "Document generation", "Payment calculations", "Servicing agreement", "Lender disclosures", "PDF preview or downloads", "Bug report", "Feature request", "Privacy or accessibility", "Other"];
const initial = {name:"",email:"",topic:"",state:"",subject:"",message:"",steps:""};

function SupportRequest() {
  const [data,setData] = useState(initial);
  const [consent,setConsent] = useState(false);
  const [status,setStatus] = useState("");
  const change = (key,value) => {setData(p=>({...p,[key]:value}));setStatus("");};
  const body = () => [`Name: ${data.name.trim()}`,`Account email: ${data.email.trim()}`,`Category: ${data.topic}`,`Loan state: ${data.state || "Not applicable"}`,"",data.message.trim(),"", "Steps to reproduce:",data.steps.trim() || "Not provided"].join("\n");
  const validate = () => {
    if (!data.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) || !data.topic || !data.subject.trim() || !data.message.trim()) {setStatus("Enter your name, valid email, category, subject and issue description.");return false;}
    if (!consent) {setStatus("Confirm that you have removed sensitive information before continuing.");return false;}
    return true;
  };
  function openEmail(){
    if(!validate()) return;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportEmail)){setStatus("Support email has not been configured. You can copy your request instead.");return;}
    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(`[ZapDocs Support] ${data.subject.trim()}`)}&body=${encodeURIComponent(body())}`;
    setStatus("Your email app may open with a draft. Review it and send it yourself; no ticket has been submitted yet.");
  }
  async function copyRequest(){
    if(!validate()) return;
    try {await navigator.clipboard.writeText(`Subject: [ZapDocs Support] ${data.subject.trim()}\n\n${body()}`);setStatus("Request copied. Paste it into an email to the support team.");}
    catch {setStatus("Clipboard unavailable. Select and copy the request text below.");}
  }
  const field=(key,label,placeholder,type="text")=><span className="zcs-field"><label htmlFor={`zcs-${key}`}>{label}</label><input id={`zcs-${key}`} type={type} value={data[key]} maxLength={key==="subject"?160:200} placeholder={placeholder} onChange={e=>change(key,e.target.value)} required/></span>;
  return <span className="zcs">
    <style>{`
      .zcs{display:block;color:#080d36}.zcs .zcs-grid{display:grid;grid-template-columns:1fr 1fr;gap:17px}.zcs .zcs-field{display:block;margin-bottom:17px}.zcs .zcs-field label{display:block;font-size:14px;font-weight:700;margin-bottom:7px}.zcs input:not([type=checkbox]),.zcs select,.zcs textarea{display:block;width:100%;padding:12px 13px;border:1px solid #ccd5e3;border-radius:8px;font:inherit;color:#080d36;background:white}.zcs textarea{resize:vertical;min-height:110px}.zcs input:focus-visible,.zcs select:focus-visible,.zcs textarea:focus-visible,.zcs button:focus-visible{outline:3px solid #2f63ff;outline-offset:3px}.zcs .zcs-note{display:block;background:#f5f7fb;border:1px solid #e1e6ef;border-radius:10px;padding:16px;margin:0 0 24px;color:#46536d}.zcs .zcs-check{display:flex;align-items:flex-start;gap:9px;font-size:13px;margin:14px 0 20px;color:#46536d}.zcs .zcs-check input{margin-top:5px;accent-color:#2455e8}.zcs .zcs-actions{display:flex;gap:10px;flex-wrap:wrap}.zcs button{border:1px solid #cbd3e4;border-radius:999px;padding:11px 20px;background:white;font:inherit;font-weight:700;color:#080d36;cursor:pointer}.zcs button.zcs-primary{background:#43e19a;border-color:#43e19a}.zcs .zcs-status{display:block;margin:15px 0;color:#334155}.zcs .zcs-preview{display:block;margin-top:16px}.zcs .zcs-preview textarea{font-size:13px;min-height:150px}.zcs .zcs-muted{display:block;font-size:13px;color:#59627a;margin-top:10px}@media(max-width:650px){.zcs .zcs-grid{grid-template-columns:1fr;gap:0}}
    `}</style>
    <span className="zcs-note"><strong>Before contacting us</strong><br/>Check the <a href="/help-center" style={{textDecoration:"underline"}}>Help Center</a> for common solutions. Never include passwords, tax IDs, banking information, signed loan documents or unredacted borrower data.</span>
    <span className="zcs-muted" style={{marginBottom:18}}>* Required fields</span>
    <span className="zcs-grid">{field("name","Full name *","Your name")}{field("email","Account email *","you@company.com","email")}</span>
    <span className="zcs-grid"><span className="zcs-field"><label htmlFor="zcs-topic">Support category *</label><select id="zcs-topic" value={data.topic} onChange={e=>change("topic",e.target.value)} required><option value="">Select a category</option>{topics.map(t=><option key={t}>{t}</option>)}</select></span><span className="zcs-field"><label htmlFor="zcs-state">Loan state (optional)</label><select id="zcs-state" value={data.state} onChange={e=>change("state",e.target.value)}><option value="">Not applicable</option><option>Florida</option><option>California</option></select></span></span>
    {field("subject","Subject *","Brief summary of your issue")}
    <span className="zcs-field"><label htmlFor="zcs-message">Describe your issue *</label><textarea id="zcs-message" value={data.message} onChange={e=>change("message",e.target.value)} maxLength={2500} placeholder="What happened? Include the feature, document type and any non-sensitive error message." required/></span>
    <span className="zcs-field"><label htmlFor="zcs-steps">Steps to reproduce (optional)</label><textarea id="zcs-steps" value={data.steps} onChange={e=>change("steps",e.target.value)} maxLength={1500} placeholder="List the steps you took, your browser and what you expected to happen."/></span>
    <label className="zcs-check"><input type="checkbox" checked={consent} onChange={e=>{setConsent(e.target.checked);setStatus("");}}/>I confirm that this request contains no confidential borrower information or credentials. I have reviewed the <a href="/privacy" style={{textDecoration:"underline"}}>Privacy Policy</a>.</label>
    <span className="zcs-actions"><button className="zcs-primary" type="button" onClick={openEmail}>Open email draft</button><button type="button" onClick={copyRequest}>Copy request</button></span>
    <span className="zcs-muted">This page prepares an email in your own email application. It does not submit a ticket or store your request on a server.</span>
    {status && <span className="zcs-status" role="status">{status}</span>}
    {status.startsWith("Clipboard unavailable") && <span className="zcs-preview"><label htmlFor="zcs-copy">Request text</label><textarea id="zcs-copy" readOnly value={`Subject: [ZapDocs Support] ${data.subject}\n\n${body()}`}/></span>}
  </span>;
}
export default function ContactSupport(){return <SitePageLayout page={{title:"Contact Support",path:"/contact-support",group:"Support",lead:"Need assistance with ZapDocs? Tell us what happened and prepare a request for our support team.",sections:[["How can we assist you?",<SupportRequest/>],["What happens next?","Review the email draft and send it from your email application. Keep your correspondence for reference and include only redacted examples if support requests more information."],["Legal or loan-specific questions","For legal advice, document enforceability or transaction-specific compliance questions, consult a qualified attorney or closing professional. ZapDocs support can help with the software, not provide legal advice."]],contact:true}}/>;}
