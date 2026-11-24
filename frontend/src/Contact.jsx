import SitePageLayout from "./SitePageLayout";
const page = {
  "title": "Contact",
  "path": "/contact",
  "group": "Company",
  "lead": "Questions about the platform, beta access or your lending workflow? We welcome product feedback.",
  "sections": [
    [
      "Product questions",
      "Tell us which states and document types you use and what you would like to accomplish with ZapDocs."
    ],
    [
      "Beta inquiries",
      "Tell us about your business, approximate document preparation workflow and the features you would like to test."
    ],
    [
      "Technical support",
      "For account or generation issues, use Contact Support and describe the error with fictional or redacted details."
    ],
    [
      "Protect confidential information",
      "Do not send borrower tax IDs, credentials, signed loan documents or other sensitive information through ordinary email."
    ]
  ],
  "contact": true,
  "headline": "Talk to ZapDocs.",
  "steps": [
    "Choose inquiry type",
    "Describe your question",
    "Contact support"
  ]
};
export default function Contact(){ return <SitePageLayout page={page} />; }
