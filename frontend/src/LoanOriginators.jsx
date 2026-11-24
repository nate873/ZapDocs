import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Loan originators",
  "path": "/loan-originators",
  "group": "Solutions",
  "lead": "A structured record for originators preparing private lending transactions.",
  "sections": [
    [
      "Capture negotiated terms",
      "Record the loan amount, interest rate, term, commission and payment schedule once the parties have agreed on them."
    ],
    [
      "Keep party information consistent",
      "Record the legal borrower, lender and brokerage names, signer capacity and addresses."
    ],
    [
      "Prepare supporting documents",
      "Generate available agreements and disclosures based on your selected state and transaction structure."
    ],
    [
      "Coordinate the handoff",
      "Review the exported package with escrow, title and counsel. The platform does not replace licensing, disclosures or underwriting obligations."
    ]
  ],
  "contact": false,
  "headline": "Move from negotiated terms to document preparation.",
  "steps": [
    "Capture terms",
    "Verify parties",
    "Generate",
    "Review handoff"
  ]
};
export default function LoanOriginators(){ return <SitePageLayout page={page} />; }
