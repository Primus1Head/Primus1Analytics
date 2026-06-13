import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Primus 1 Analytics",
  description: "Privacy policy for primus1analytics.com.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-black">Privacy Policy</h1>
      <p className="mt-2 text-sm text-[var(--p1-dim)]">Last updated: June 12, 2026</p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--p1-dim)]">
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Who we are</h2>
          <p>
            This website (primus1analytics.com) is operated by Primus 1 Analytics
            (&quot;we&quot;, &quot;us&quot;). Primus 1 Vault is a DBA of Primus 1 Analytics; the
            Primus 1 Vault application at primus1vault.com has its own privacy policy governing
            account data.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Information we collect</h2>
          <p>
            This site does not require an account and does not ask you to submit personal
            information. If you email us, we receive your email address and the contents of your
            message, which we use only to respond.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Advertising and cookies</h2>
          <p>
            We use Google AdSense to display advertising. Google and its partners may use cookies
            (including the DoubleClick cookie) to serve ads based on your prior visits to this and
            other websites. You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-[var(--p1-cyan)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . Third-party vendors&apos; use of advertising cookies enables them and their partners
            to serve ads based on your visits to this site and/or other sites on the Internet.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Analytics</h2>
          <p>
            We may use privacy-respecting, aggregate analytics to understand site traffic. We do
            not sell personal information.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Children</h2>
          <p>
            This site relates to pari-mutuel wagering analytics and is not directed at anyone under
            the legal wagering age in their jurisdiction.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href="mailto:support@primus1vault.com" className="text-[var(--p1-cyan)] underline">
              support@primus1vault.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
