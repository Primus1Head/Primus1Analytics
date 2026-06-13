import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Primus 1 Analytics",
  description: "Terms of service for primus1analytics.com.",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-black">Terms of Service</h1>
      <p className="mt-2 text-sm text-[var(--p1-dim)]">Last updated: June 12, 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--p1-dim)]">
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Acceptance</h2>
          <p>
            By using primus1analytics.com you agree to these terms. The Primus 1 Vault application
            at primus1vault.com is governed by its own terms of service.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Informational content only</h2>
          <p>
            Content on this site is provided for general information about our company and
            products. Nothing on this site is wagering, financial, or investment advice. Wagering
            involves risk; never bet more than you can afford to lose. You are responsible for
            complying with the laws of your jurisdiction.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">No guarantees</h2>
          <p>
            We make no representation that any analytics, tools, or methodologies described here
            will produce profitable outcomes. Past performance does not predict future results.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Intellectual property</h2>
          <p>
            All content, branding, and software described on this site are the property of Primus
            1 Analytics. Primus 1 Vault is a DBA of Primus 1 Analytics. You may not reproduce or
            redistribute site content without permission.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Limitation of liability</h2>
          <p>
            This site is provided &quot;as is&quot; without warranties of any kind. To the maximum
            extent permitted by law, Primus 1 Analytics is not liable for any damages arising from
            your use of this site.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
          <p>
            Questions:{" "}
            <a href="mailto:support@primus1vault.com" className="text-[var(--p1-cyan)] underline">
              support@primus1vault.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
