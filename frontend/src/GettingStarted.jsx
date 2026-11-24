import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Getting started",
  "path": "/getting-started",
  "group": "Resources",
  "lead": "A practical onboarding guide for new ZapDocs users.",
  "sections": [
    [
      "Create your account",
      "Use the free trial page and follow the account confirmation instructions if prompted."
    ],
    [
      "Use fictional information first",
      "Create a sample Florida or California transaction. Avoid real borrower records during initial testing."
    ],
    [
      "Complete the sample",
      "Enter principal, annual rate, payment dates, borrower and lender details. Review the calculated payment and enter the intended balloon."
    ],
    [
      "Download and compare",
      "Generate the package and compare it with your approved reference documents. Report discrepancies through the help center or support page."
    ]
  ],
  "contact": false,
  "headline": "Make your first sample loan.",
  "steps": [
    "Register",
    "Create sample",
    "Review",
    "Download"
  ]
};
export default function GettingStarted(){ return <SitePageLayout page={page} />; }
