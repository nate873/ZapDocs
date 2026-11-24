import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Broker workflows",
  "path": "/broker-workflows",
  "group": "Solutions",
  "lead": "Prepare the paperwork supporting loans arranged between borrowers and private lenders.",
  "sections": [
    [
      "Brokerage details",
      "Use brokerage profiles for legal names, addresses and applicable licensing details."
    ],
    [
      "Loan arrangement",
      "Record commissions and negotiated loan terms, and prepare applicable agreements to procure a lender."
    ],
    [
      "Investor disclosures",
      "Enter ownership, lender payment and collateral information. Verify the required disclosure form for the jurisdiction and loan type."
    ],
    [
      "Separate document outputs",
      "Generate servicing agreements and lender disclosures independently. Use the full package when preparing the borrower closing documents."
    ]
  ],
  "contact": false,
  "headline": "Broker and investor documentation in one workflow.",
  "steps": [
    "Enter broker details",
    "Confirm terms",
    "Prepare disclosures",
    "Review package"
  ]
};
export default function BrokerWorkflows(){ return <SitePageLayout page={page} />; }
