import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Document generation",
  "path": "/document-generation",
  "group": "Platform",
  "lead": "Choose the appropriate state, enter your terms and generate editable documents for review.",
  "sections": [
    [
      "Florida packages",
      "Prepare the secured note, mortgage, related agreements, guaranty and configured supporting documents."
    ],
    [
      "California packages",
      "Prepare the note, deed of trust, agreement and configured supporting documents. Verify which disclosures apply to the transaction."
    ],
    [
      "Standalone documents",
      "Generate servicing agreements and lender disclosures separately from the closing package. Verify shared template language is appropriate for the jurisdiction."
    ],
    [
      "Preview and download",
      "Review available previews, download Word files or the full package and arrange for legal descriptions and other required attachments. Regenerate after changing the source record."
    ]
  ],
  "contact": false,
  "headline": "Prepare your loan documents in one place.",
  "steps": [
    "Select state",
    "Enter loan information",
    "Preview documents",
    "Download package"
  ]
};
export default function DocumentGeneration(){ return <SitePageLayout page={page} />; }
