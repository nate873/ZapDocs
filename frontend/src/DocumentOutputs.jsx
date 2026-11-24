import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Document outputs",
  "path": "/document-outputs",
  "group": "Resources",
  "lead": "Explore the types of documents available in the configured Florida and California workflows.",
  "sections": [
    [
      "Core financing documents",
      "Secured note and the applicable mortgage or deed of trust, with related agreements and supporting documents according to the configured package."
    ],
    [
      "Standalone investor documents",
      "Servicing agreements and lender disclosures can be requested individually. Confirm the particular form is applicable before use."
    ],
    [
      "File formats",
      "Download editable Word documents or the full package; available PDF previews depend on the document renderer."
    ],
    [
      "Final closing materials",
      "Legal descriptions, title materials, settlement statements and other transaction-specific documents may need to be obtained or attached separately. Review the actual generated contents."
    ]
  ],
  "contact": false,
  "headline": "Know what your closing package contains.",
  "steps": [
    "Select output",
    "Preview",
    "Download",
    "Complete review"
  ]
};
export default function DocumentOutputs(){ return <SitePageLayout page={page} />; }
