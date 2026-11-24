import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Servicing teams",
  "path": "/servicing-teams",
  "group": "Solutions",
  "lead": "Organize payment and lender information for the transition from closing to servicing.",
  "sections": [
    [
      "Payment dates and amounts",
      "Review the first payment date, maturity date, monthly installments and any prepaid period."
    ],
    [
      "Servicing agreement",
      "Enter the designated servicer, address and applicable servicing terms, then generate the standalone agreement."
    ],
    [
      "Lender payment information",
      "Record ownership share and lender-specific yield or payment amounts where applicable. Borrower and lender payments may differ."
    ],
    [
      "Operational handoff",
      "Provide reviewed documents to the designated servicer through secure channels. ZapDocs is not a payment processing, collection or live servicing platform."
    ]
  ],
  "contact": false,
  "headline": "Prepare servicing documentation before the first payment.",
  "steps": [
    "Confirm schedule",
    "Enter servicer",
    "Generate agreement",
    "Handoff"
  ]
};
export default function ServicingTeams(){ return <SitePageLayout page={page} />; }
