import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Primus 1 Analytics",
  description: "About Primus 1 Analytics — wagering intelligence and data analytics company.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-black">About Primus 1 Analytics</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-[var(--p1-dim)]">
        <p>
          Primus 1 Analytics is a data analytics company focused on pari-mutuel wagering
          intelligence. We build software that helps horseplayers measure, understand, and improve
          their betting performance using the same quantitative discipline that professional
          trading operations apply to financial markets.
        </p>
        <p>
          Our flagship product, <strong className="text-white">Primus 1 Vault</strong> (a DBA of
          Primus 1 Analytics), is a bankroll analytics platform that ingests wagering histories
          from major ADW platforms and produces institutional-grade P&L reporting: ROI by bet
          type, strike rates, behavioral leak detection, and a discipline score that grades
          betting like a risk desk grades a trader.
        </p>
        <p>
          Behind the consumer product sits a deep research stack: chart parsing, pace and bias
          modeling, fractional par times, fair-price computation for exotic wagers, and
          environmental analysis. That research informs every analytic the Vault ships.
        </p>
        <h2 className="pt-4 text-xl font-bold text-white">What we believe</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Every bankroll problem is a measurement problem first.</li>
          <li>Behavior leaks more money than handicapping mistakes.</li>
          <li>Data should be readable in five seconds, not five spreadsheets.</li>
          <li>Responsible wagering: bet what you can afford, measure everything.</li>
        </ul>
        <p className="pt-4 text-sm">
          Primus 1 Analytics is a registered business. Primus 1 Vault operates as a DBA of Primus
          1 Analytics.
        </p>
      </div>
    </div>
  );
}
