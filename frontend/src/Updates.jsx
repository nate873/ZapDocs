
import React from "react";

export default function Updates() {
  const updates = [
    {
      category: "Document Generation",
      title: "Florida and California loan packages",
      description:
        "Generate coordinated document packages for supported private lending transactions."
    },
    {
      category: "Loan Calculations",
      title: "Automatic payment calculations",
      description:
        "Calculate interest-only payments and review customizable payment schedules and balloon amounts."
    },
    {
      category: "New Documents",
      title: "Servicing agreements and lender disclosures",
      description:
        "Prepare servicing agreements and lender disclosures directly from your loan workspace."
    },
    {
      category: "User Experience",
      title: "Document previews",
      description:
        "Review generated documents before downloading your loan package."
    },
    {
      category: "Customer Support",
      title: "ZapDocs Help Center",
      description:
        "Explore product guidance and contact support for assistance."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#080d36]">
      <section className="bg-slate-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4">
            WHAT'S NEW
          </p>

          <h1 className="text-5xl font-bold mb-6">
            ZapDocs product updates
          </h1>

          <p className="text-lg text-slate-600">
            Explore the latest features, improvements and
            additions to the ZapDocs platform.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="space-y-6">
          {updates.map((update) => (
            <article
              key={update.title}
              className="border rounded-xl p-8"
            >
              <p className="text-blue-600 text-sm font-semibold mb-3">
                {update.category}
              </p>

              <h2 className="text-2xl font-bold mb-3">
                {update.title}
              </h2>

              <p className="text-slate-600">
                {update.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <a href="/help-center" className="text-blue-600">
            Visit Help Center
          </a>

          <a href="/" className="text-blue-600">
            Return to homepage
          </a>
        </div>
      </section>
    </main>
  );
}
