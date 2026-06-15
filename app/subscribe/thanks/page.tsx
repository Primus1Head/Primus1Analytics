import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You&apos;re on the list — Primus 1 Analytics",
  description: "Thank you for subscribing to Primus 1 Analytics updates.",
};

export default function SubscribeThanks() {
  return (
    <div className="mx-auto max-w-xl px-5 py-20 text-center">
      <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[var(--p1-gold)] mb-4">
        Confirmed
      </p>
      <h1 className="serif text-3xl font-semibold text-[var(--p1-text)]">
        You&apos;re on the list.
      </h1>
      <p className="mt-6 text-[14px] font-light leading-relaxed text-[var(--p1-dim)]">
        We&apos;ll be in touch when something worth your attention is ready. No noise in the meantime.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border border-[var(--p1-border)] px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--p1-dim)] hover:border-[var(--p1-gold)] hover:text-[var(--p1-gold)] transition-all"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
