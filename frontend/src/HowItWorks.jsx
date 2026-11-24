import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "How it works",
  "path": "/how-it-works",
  "group": "Resources",
  "lead": "Start with a sample transaction and explore the preparation workflow before using confidential information.",
  "sections": [
    [
      "1. Create a loan",
      "Open ZapDocs, create a loan record and select Florida or California."
    ],
    [
      "2. Complete and review",
      "Enter loan terms and party information, review payment calculations and confirm all required fields."
    ],
    [
      "3. Generate documents",
      "Save the record, preview documents and download the appropriate package or standalone agreement."
    ],
    [
      "After generating",
      "Check the package against the negotiated terms and obtain professional review. Changes to a saved record do not change files already downloaded."
    ]
  ],
  "contact": false,
  "headline": "Three steps to your first document package.",
  "steps": [
    "Create",
    "Review",
    "Generate"
  ]
};
export default function HowItWorks(){ return <SitePageLayout page={page} />; }
