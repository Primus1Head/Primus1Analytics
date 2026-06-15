import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Primus 1 Analytics",
  description: "Primus 1 Analytics is a racing intelligence company helping horseplayers make better decisions through disciplined analysis and evidence-based insights.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-black">About Primus 1 Analytics</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-[var(--p1-dim)]">
        <p>
          Primus 1 Analytics is a racing intelligence company focused on helping horseplayers make
          better decisions through disciplined analysis, performance measurement, and evidence-based
          insights.
        </p>
        <p>
          We believe most bettors don&apos;t lose because they lack information. They lose because
          they lack clarity. Success begins with understanding where your edge exists, where it
          doesn&apos;t, and having the discipline to know the difference.
        </p>
        <p>
          Our flagship platform, <strong className="text-white">Primus 1 Vault</strong>, helps
          horseplayers transform their wagering history into actionable intelligence. By organizing
          and analyzing real betting activity, Vault reveals strengths, weaknesses, recurring
          patterns, and opportunities that often go unnoticed.
        </p>
        <p>Everything we build is guided by a simple philosophy:</p>
        <ul className="list-none space-y-1 pl-0">
          <li><em className="text-white not-italic font-semibold">Intelligence over emotion.</em></li>
          <li><em className="text-white not-italic font-semibold">Process over prediction.</em></li>
          <li><em className="text-white not-italic font-semibold">Evidence over opinion.</em></li>
        </ul>
        <p>
          Primus 1 Analytics exists to help serious horseplayers move beyond intuition and make
          decisions with greater confidence, consistency, and purpose.
        </p>
      </div>
    </div>
  );
}
