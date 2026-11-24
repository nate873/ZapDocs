import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Security",
  "path": "/security",
  "group": "Company",
  "lead": "Learn about account access and the precautions to take when preparing documents containing sensitive information.",
  "sections": [
    [
      "Account access",
      "The application uses Supabase authentication. Use a unique password and never share account credentials."
    ],
    [
      "Loan information",
      "Loan records can contain confidential financial and identifying information. Limit inputs to information needed for the transaction and use fictional data during initial beta testing."
    ],
    [
      "Document handling",
      "Store downloaded files securely and restrict distribution to authorized parties. Avoid submitting sensitive data through support requests."
    ],
    [
      "Ongoing validation",
      "Access isolation, backups, retention and incident procedures should be verified before live production use. This page does not claim a security certification or completed independent audit."
    ]
  ],
  "contact": true,
  "headline": "Security and responsible data handling.",
  "steps": [
    "Protect credentials",
    "Minimize data",
    "Secure downloads",
    "Report concerns"
  ]
};
export default function Security(){ return <SitePageLayout page={page} />; }
