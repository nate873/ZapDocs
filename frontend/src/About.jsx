import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "About ZapDocs",
  "path": "/about",
  "group": "Company",
  "lead": "ZapDocs focuses on reducing repetitive document preparation for private lenders and mortgage brokers.",
  "sections": [
    [
      "Our focus",
      "Private lending transactions often involve specialized payment arrangements and multiple parties. ZapDocs brings these details into a single loan record."
    ],
    [
      "What we build",
      "State-specific document generation, customizable loan terms, payment estimates, previews and standalone investor paperwork."
    ],
    [
      "Where we are starting",
      "The initial product focuses on California and Florida. We are prioritizing a controlled beta and feedback from lending professionals."
    ],
    [
      "Our boundaries",
      "ZapDocs provides software, not legal advice, lending decisions, title services or loan servicing. Professional review remains essential."
    ]
  ],
  "contact": false,
  "headline": "Built around private lending document workflows.",
  "steps": [
    "Explore platform",
    "Try a sample loan",
    "Share feedback"
  ]
};
export default function About(){ return <SitePageLayout page={page} />; }
