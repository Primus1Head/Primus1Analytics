import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stay Informed — Primus 1 Analytics",
  description: "Be the first to know when new Primus 1 Analytics products and capabilities launch.",
};

export default function Subscribe() {
  return (
    <div className="mx-auto max-w-xl px-5 py-20 text-center">
      <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[var(--p1-gold)] mb-4">
        Stay Informed
      </p>
      <h1 className="serif text-3xl font-semibold text-[var(--p1-text)]">
        Be first to know.
      </h1>
      <p className="mt-6 text-[14px] font-light leading-relaxed text-[var(--p1-dim)]">
        New tools and capabilities are in development. Leave your email and we&apos;ll reach out
        when something worth your attention is ready.
      </p>

      <form
        action="https://formspree.io/f/brianjohnalbertson@gmail.com"
        method="POST"
        className="mt-10 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-[var(--p1-panel)] border border-[var(--p1-border)] px-4 py-3 text-[13px] text-[var(--p1-text)] placeholder:text-[var(--p1-dim)] focus:outline-none focus:border-[var(--p1-gold)]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="w-full bg-[var(--p1-panel)] border border-[var(--p1-border)] px-4 py-3 text-[13px] text-[var(--p1-text)] placeholder:text-[var(--p1-dim)] focus:outline-none focus:border-[var(--p1-gold)]"
        />
        <input type="hidden" name="_subject" value="Primus 1 Analytics — New Subscriber" />
        <input type="hidden" name="_next" value="https://primus1analytics.com/subscribe/thanks" />
        <button
          type="submit"
          className="mt-2 bg-[var(--p1-gold)] px-6 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-black hover:bg-[var(--p1-gold2)] transition-colors"
        >
          Notify Me →
        </button>
      </form>

      <p className="mt-6 text-[11px] text-[var(--p1-dim)]">
        No spam. No frequency commitments. Just signal when it matters.
      </p>
    </div>
  );
}
