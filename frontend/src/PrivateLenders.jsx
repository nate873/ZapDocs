import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Private lenders",
  "path": "/private-lenders",
  "group": "Solutions",
  "lead": "Prepare flexible, collateral-backed lending transactions without repeatedly typing the same loan information.",
  "sections": [
    [
      "Bridge and investment loans",
      "Enter negotiated terms for supported interest-only transactions. Confirm the actual loan purpose, collateral and eligibility with your professionals."
    ],
    [
      "Custom payment structures",
      "Configure payment tiers, prepaid interest and deferred interest as appropriate. Keep the agreed balloon amount under your control."
    ],
    [
      "Investor and servicing paperwork",
      "Prepare lender disclosures and servicing agreements where appropriate, including lender-specific payment information."
    ],
    [
      "Before funding",
      "Confirm title, lien priority, insurance, legal descriptions and the executed package with your closing team. ZapDocs does not underwrite or fund loans."
    ]
  ],
  "contact": false,
  "headline": "Document preparation for private money lenders.",
  "steps": [
    "Enter collateral",
    "Set financing terms",
    "Prepare package",
    "Review before funding"
  ]
};
export default function PrivateLenders(){ return <SitePageLayout page={page} />; }
