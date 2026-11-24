import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Product overview",
  "path": "/platform",
  "group": "Platform",
  "lead": "Enter the transaction once and prepare a coordinated package for Florida or California.",
  "sections": [
    [
      "One loan record",
      "Keep borrower, property, lender, brokerage and servicing details together. Reopen the record whenever negotiated terms change."
    ],
    [
      "Flexible loan terms",
      "Support interest-only schedules, multiple payment tiers, prepaid interest and deferred interest. Review automatic estimates and retain control of the balloon amount."
    ],
    [
      "From loan terms to documents",
      "Generate the state-specific closing package, separate servicing agreements and lender disclosures. Preview the available output before downloading."
    ],
    [
      "Built for review",
      "Bring your closing professionals into the review process outside the software. ZapDocs does not replace legal advice or independently approve a loan."
    ]
  ],
  "contact": false,
  "headline": "Private lending documents, without repetitive data entry.",
  "steps": [
    "Create a fictional loan",
    "Enter financing and party details",
    "Review the terms and documents",
    "Download for professional review"
  ]
};
export default function ProductOverview(){ return <SitePageLayout page={page} />; }
