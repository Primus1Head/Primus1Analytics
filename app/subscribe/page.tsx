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
        New tools and capabilities are in development. Leave your details and we&apos;ll reach out
        when something worth your attention is ready.
      </p>

      <form
        action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
        method="POST"
        className="mt-10 flex flex-col gap-4 text-left"
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

        <label className="flex items-start gap-3 cursor-pointer mt-2">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            className="mt-1 accent-[var(--p1-gold)] w-4 h-4 shrink-0"
          />
          <span className="text-[11px] leading-relaxed text-[var(--p1-dim)]">
            I agree to receive email communications from Primus 1 Analytics and its partners
            regarding product updates, new releases, promotions, and related offers. I understand
            I can unsubscribe at any time by replying to any email or contacting{" "}
            <a href="mailto:support@primus1vault.com" className="text-[var(--p1-gold)] hover:underline">
              support@primus1vault.com
            </a>
            . My information will not be sold.
          </span>
        </label>

        <button
          type="submit"
          className="mt-4 bg-[var(--p1-gold)] px-6 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-black hover:bg-[var(--p1-gold2)] transition-colors"
        >
          Notify Me →
        </button>
      </form>

      <p className="mt-6 text-[11px] text-[var(--p1-dim)]">
        No spam. We only reach out when it matters.
      </p>
    </div>
  );
}
