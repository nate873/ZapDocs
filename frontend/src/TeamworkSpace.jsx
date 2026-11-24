
import React from "react";

export default function TeamWorkspace() {
  return (
    <main className="min-h-screen bg-white text-[#080d36]">
      <section className="bg-slate-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-600 font-semibold mb-4">
            ZAPDOCS PLATFORM
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Your lending workspace, simplified.
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mb-8">
            Organize your loan records, manage transaction
            information, and generate coordinated loan
            document packages from one central workspace.
          </p>

          <a
            href="/free-trial"
            className="inline-block bg-[#40dc96] rounded-full px-8 py-4 font-semibold"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Centralized loan records",
              description:
                "Maintain borrower, lender, property and financing information in one place."
            },
            {
              title: "Consistent documentation",
              description:
                "Reduce repetitive data entry across your loan document packages."
            },
            {
              title: "Reusable information",
              description:
                "Save frequently used lender, brokerage and servicing information."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-8"
            >
              <h2 className="text-xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <a href="/" className="inline-block mt-12 text-blue-600">
          Return to homepage
        </a>
      </section>
    </main>
  );
}
