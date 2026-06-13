import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

export const metadata: Metadata = {
  title: "Primus 1 Analytics — Applied Intelligence for Thoroughbred Racing",
  description:
    "Primus 1 Analytics transforms race data, wagering history, performance signals, and market behavior into actionable intelligence for serious horseplayers and racing professionals.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  other: ADSENSE_CLIENT ? { "google-adsense-account": ADSENSE_CLIENT } : {},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {ADSENSE_CLIENT && (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Nav */}
        <header className="sticky top-0 z-50 border-b border-[var(--p1-border)] bg-[var(--p1-dark)]/95 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="p1-logo-box">
                <span className="serif text-xl font-bold text-[var(--p1-gold)]">P</span>
              </div>
              <div className="leading-tight">
                <div className="serif text-base font-semibold tracking-wider text-[var(--p1-text)]">
                  PRIMUS 1
                </div>
                <div className="text-[9px] font-light tracking-[0.3em] text-[var(--p1-dim)] uppercase">
                  Analytics
                </div>
              </div>
            </Link>

            {/* Links */}
            <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--p1-dim)]">
              <Link href="/about"    className="hover:text-[var(--p1-text)] transition-colors">About</Link>
              <Link href="/#products" className="hover:text-[var(--p1-text)] transition-colors">Products</Link>
              <Link href="/#approach" className="hover:text-[var(--p1-text)] transition-colors">Approach</Link>
              <Link href="/contact"  className="hover:text-[var(--p1-text)] transition-colors">Contact</Link>
              <a
                href="https://primus1vault.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--p1-gold)] px-5 py-2 text-[var(--p1-gold)] hover:bg-[var(--p1-gold)] hover:text-black transition-all"
              >
                Primus 1 Vault →
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[var(--p1-border)] bg-[var(--p1-panel)]">
          <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p1-logo-box">
                  <span className="serif text-xl font-bold text-[var(--p1-gold)]">P</span>
                </div>
                <div className="leading-tight">
                  <div className="serif text-base font-semibold tracking-wider text-[var(--p1-text)]">PRIMUS 1</div>
                  <div className="text-[9px] font-light tracking-[0.3em] text-[var(--p1-dim)] uppercase">Analytics</div>
                </div>
              </div>
              <p className="text-xs font-light leading-relaxed text-[var(--p1-dim)] max-w-xs">
                Applied Intelligence for Thoroughbred Racing.<br />
                Primus 1 Vault is a DBA of Primus 1 Analytics LLC.
              </p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[var(--p1-dim)] mb-4">Products</p>
              <ul className="space-y-2.5 text-[13px] text-[var(--p1-dim)]">
                <li><a href="https://primus1vault.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--p1-gold)] transition-colors">Primus 1 Vault</a></li>
                <li><span className="opacity-40">Primus One DM</span></li>
                <li><span className="opacity-40">Circuit Intelligence</span></li>
              </ul>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[var(--p1-dim)] mb-4">Company</p>
              <ul className="space-y-2.5 text-[13px] text-[var(--p1-dim)]">
                <li><Link href="/about"   className="hover:text-[var(--p1-text)] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--p1-text)] transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-[var(--p1-text)] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms"   className="hover:text-[var(--p1-text)] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--p1-border)] px-6 py-4 text-center text-[11px] text-[var(--p1-dim)]">
            © {new Date().getFullYear()} Primus 1 Analytics LLC. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
