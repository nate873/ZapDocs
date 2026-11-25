import { useEffect } from "react";
import Header from "./Header";

const page = {
  "label": "Broker workflows",
  "headline": "Broker and investor paperwork, without the repetition.",
  "lead": "Bring brokerage details, negotiated loan terms and lender information together in one workflow for private lending document preparation.",
  "accent": "#e4ddff",
  "shape": "#a16cf0",
  "sample": "Brokerage workspace",
  "sub": "Illustrative transaction · California",
  "fields": [
    [
      "Loan amount",
      "$350,000"
    ],
    [
      "Commission",
      "3.00%"
    ],
    [
      "Lien position",
      "Second"
    ],
    [
      "Lender share",
      "100%"
    ]
  ],
  "items": [
    "Brokerage information",
    "Lender disclosure",
    "Servicing agreement"
  ],
  "benefitTitle": "Spend more time arranging loans, less time retyping details.",
  "benefits": [
    [
      "shield",
      "Consistent brokerage information",
      "Use brokerage profiles for legal names, addresses and applicable licensing details."
    ],
    [
      "sliders",
      "Capture loan arrangements",
      "Record commissions and negotiated terms and prepare applicable agreements to procure a lender."
    ],
    [
      "file",
      "Investor disclosures",
      "Enter lender ownership, payment and collateral information. Verify the required disclosure for the jurisdiction and loan type."
    ]
  ],
  "splitTitle": "Generate the documents your transaction calls for.",
  "splitCopy": "Prepare the borrower closing package or generate available servicing agreements and lender disclosures independently, according to the transaction structure.",
  "docs": [
    [
      "Agreement to procure lender",
      "Where applicable"
    ],
    [
      "Lender disclosure",
      "Applicable investor information"
    ],
    [
      "Servicing agreement",
      "Standalone output where available"
    ],
    [
      "Borrower closing package",
      "State-specific documents"
    ]
  ],
  "steps": [
    [
      "Enter broker details",
      "Confirm brokerage and licensing information."
    ],
    [
      "Confirm terms",
      "Record negotiated terms and commissions."
    ],
    [
      "Prepare disclosures",
      "Select applicable supporting documents."
    ],
    [
      "Review package",
      "Confirm requirements with your closing professionals."
    ]
  ],
  "legal": "ZapDocs does not replace broker licensing, disclosure obligations or independent legal review.",
  "cta": "See how ZapDocs fits your brokerage."
};
function Icon({type}) {
  const paths = {shield:<><path d="M24 7 39 13v12c0 9-8 15-15 19C17 40 9 34 9 25V13Z"/><path d="m17 25 5 5 10-11"/></>,sliders:<><path d="M8 13h32M8 24h32M8 35h32"/><circle cx="18" cy="13" r="4" fill="white"/><circle cx="31" cy="24" r="4" fill="white"/><circle cx="21" cy="35" r="4" fill="white"/></>,file:<><path d="M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8"/></>};
  return <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}
export default function BrokerWorkflows({showHeader=true}) {
 useEffect(()=>{const old=document.title;document.title=page.label+" | ZapDocs";return()=>{document.title=old}},[]);
 return <>{showHeader&&<Header/>}<main className="zpl"><style>{`
      .zpl{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zpl *{box-sizing:border-box}.zpl h1,.zpl h2,.zpl h3,.zpl p{margin:0}.zpl a{text-decoration:none}.zpl .wrap{max-width:1250px;margin:auto;padding:0 32px}.zpl .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zpl h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zpl h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zpl p{color:#505b76;font-size:16px}.zpl .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#36d991;color:#090e36;font-weight:750;padding:15px 27px;min-height:52px}.zpl .btn:hover{background:#25c982}.zpl a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zpl .hero{background:#eaf0f6;position:relative}.zpl .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zpl .hero-copy{padding:68px 0;position:relative;z-index:2}.zpl .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zpl .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zpl .textlink{font-weight:700;color:#315cff}.zpl .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zpl .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#e4ddff;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zpl .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#a16cf0;transform:rotate(30deg);border-radius:30px;z-index:-2}.zpl .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zpl .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zpl .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zpl .mock-body{padding:25px}.zpl .mock-body h3{font-size:22px;margin-bottom:6px}.zpl .mock-body p{font-size:12px}.zpl .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zpl .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zpl .mock-field small{display:block;color:#64748b;font-size:10px}.zpl .mock-field strong{font-size:17px}.zpl .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zpl .mock-doc span{color:#168354}.zpl .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zpl .section{padding:86px 0}.zpl .section-intro{max-width:880px}.zpl .section-intro p{margin-top:18px}.zpl .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zpl .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zpl .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zpl .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zpl .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zpl .soft{background:#f2f5fa}.zpl .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zpl .split p{margin:20px 0}.zpl .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zpl .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zpl .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zpl .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zpl .doc-item small{display:block;color:#64748b}.zpl .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zpl .step{border-top:2px solid #dce4f1;padding-top:20px}.zpl .step b{color:#315cff;font-size:13px}.zpl .step h3{margin:12px 0 8px;font-size:20px}.zpl .final{background:#0b1745;color:white;padding:65px 0}.zpl .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zpl .final p{color:#d0d9ee;margin-top:14px}.zpl .final .btn{flex:none}.zpl footer{padding:24px 0;font-size:13px;color:#63708a}.zpl footer a{color:#315cff;margin-left:16px}.zpl .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zpl .hero-grid,.zpl .split{grid-template-columns:1fr;gap:20px}.zpl .hero-copy{padding:48px 0 0}.zpl .art{min-height:450px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr 1fr}.zpl .section{padding:58px 0}.zpl .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zpl .wrap{padding:0 20px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr}.zpl .mock-body{padding:17px}.zpl .art{min-height:410px}.zpl .doc-stack{padding:18px}.zpl .mock-field strong{font-size:14px}}
    `}</style>
 <section className="hero"><div className="wrap hero-grid"><div className="hero-copy"><div className="eyebrow">Solutions / {page.label}</div><h1>{page.headline}</h1><p>{page.lead}</p><div className="actions"><a className="btn" href="/demo">Book a Demo →</a><a className="textlink" href="/pricing">Explore pricing →</a></div></div><div className="art"><div className="shape"/><div className="mock" aria-label="Illustrative workspace"><div className="mock-top"><span>● ● ● &nbsp; ZapDocs / {page.label}</span><span>Sample</span></div><div className="mock-body"><h3>{page.sample}</h3><p>{page.sub}</p><div className="mock-grid">{page.fields.map(([k,v])=><div className="mock-field" key={k}><small>{k}</small><strong>{v}</strong></div>)}</div>{page.items.map(x=><div className="mock-doc" key={x}>{x}<span>✓ Review item</span></div>)}<div className="mock-button">Prepare documents</div></div></div></div></div></section>
 <section className="section"><div className="wrap"><div className="section-intro"><div className="eyebrow">Designed around your workflow</div><h2>{page.benefitTitle}</h2></div><div className="benefits">{page.benefits.map(([icon,title,copy])=><article className="benefit" key={title}><div className="benefit-icon"><Icon type={icon}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
 <section className="section soft"><div className="wrap split"><div className="doc-stack">{page.docs.map(([title,sub])=><div className="doc-item" key={title}><Icon type="file"/><div><strong>{title}</strong><small>{sub}</small></div></div>)}</div><div><div className="eyebrow">One loan. One workflow.</div><h2>{page.splitTitle}</h2><p>{page.splitCopy}</p><a className="textlink" href="/demo">See the platform in action →</a></div></div></section>
 <section className="section"><div className="wrap"><div className="eyebrow">How it works</div><h2>A simpler document preparation process.</h2><div className="steps">{page.steps.map(([title,copy],i)=><article className="step" key={title}><b>0{i+1}</b><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="legal">{page.legal} Generated documents require independent review before use.</p></div></section>
 <section className="final"><div className="wrap"><div><h2>{page.cta}</h2><p>Book a personalized walkthrough of the loan document workflow.</p></div><a className="btn" href="/demo">Book a Demo →</a></div></section><footer><div className="wrap">© {new Date().getFullYear()} ZapDocs <a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></footer></main></>;
}
