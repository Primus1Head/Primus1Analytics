import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Primus 1 Analytics",
  description: "Contact Primus 1 Analytics.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-black">Contact</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-[var(--p1-dim)]">
        <p>
          Questions about Primus 1 Analytics, Primus 1 Vault, partnerships, or press — reach us by
          email and we&apos;ll get back to you within one business day.
        </p>
        <div className="p1-panel p-6">
          <p className="text-sm uppercase tracking-widest text-[var(--p1-cyan)]">Email</p>
          <a
            href="mailto:support@primus1vault.com"
            className="mt-1 block text-lg font-bold text-white hover:text-[var(--p1-cyan)]"
          >
            support@primus1vault.com
          </a>
        </div>
        <p className="text-sm">
          For Primus 1 Vault account and billing questions, please include the email address
          associated with your Vault account.
        </p>
      </div>
    </div>
  );
}
