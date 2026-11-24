import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Product guide",
  "path": "/product-guide",
  "group": "Resources",
  "lead": "Learn the main controls and how they fit into a transaction.",
  "sections": [
    [
      "Dashboard and Loans",
      "Find your saved loan records, create new ones and reopen existing transactions."
    ],
    [
      "Loan Information",
      "Enter financing, property, borrower, lender, servicing and brokerage information. Use saved profiles to reduce repetitive entry."
    ],
    [
      "Payment calculations",
      "Use the calculator for estimates and review the results. Enter custom amounts where appropriate and check day-count, maturity and prepaid interest."
    ],
    [
      "Document controls",
      "Save Loan, Preview Terms, Preview Documents, Generate Documents, Servicing Agreement and Lender Disclosures each serve a different stage of review."
    ]
  ],
  "contact": false,
  "headline": "Your guide to the ZapDocs workspace.",
  "steps": [
    "Open workspace",
    "Complete sections",
    "Review terms",
    "Generate outputs"
  ]
};
export default function ProductGuide(){ return <SitePageLayout page={page} />; }
