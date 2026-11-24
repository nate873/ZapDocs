import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Loan workflow",
  "path": "/loan-workflow",
  "group": "Platform",
  "lead": "A repeatable process for preparing and reviewing private lending documents.",
  "sections": [
    [
      "Start with the transaction",
      "Select the state where the collateral is located. Enter the loan amount, rate, lien position, maturity and first payment date."
    ],
    [
      "Identify the parties",
      "Enter legal vesting, mailing addresses, signer names and capacities. Load reusable lender, servicer or brokerage profiles when appropriate."
    ],
    [
      "Review payment terms",
      "Calculate monthly amounts and review the payment tiers, prepaid periods and user-entered balloon. Verify the contractual interest basis and final installment."
    ],
    [
      "Generate and reconcile",
      "Save the record and preview terms. Generate the closing package and any standalone documents. Check dates, names, amounts and exhibits across outputs."
    ]
  ],
  "contact": false,
  "headline": "From agreed terms to a closing package.",
  "steps": [
    "Create loan",
    "Complete fields",
    "Review schedule",
    "Save and generate"
  ]
};
export default function LoanWorkflow(){ return <SitePageLayout page={page} />; }
