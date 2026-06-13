"use client";

import { useEffect, useRef } from "react";

// AdSense client ID — set NEXT_PUBLIC_ADSENSE_CLIENT in .env.local (ca-pub-XXXXXXXXXXXXXXXX).
// Without it: renders a placeholder in dev, nothing in production.
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

declare global {
  interface Window { adsbygoogle?: unknown[] }
}

export default function AdSlot({ slot, className = "" }: { slot: string; className?: string }) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADSENSE_CLIENT || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch { /* adsense not ready yet — script onLoad will retry via re-render */ }
  }, []);

  if (!ADSENSE_CLIENT) {
    if (process.env.NODE_ENV === "development") {
      return (
        <div className={`rounded-xl border border-dashed border-zinc-700 bg-zinc-900/40 py-6 text-center text-xs text-zinc-600 ${className}`}>
          Ad placeholder (slot {slot}) — set NEXT_PUBLIC_ADSENSE_CLIENT to enable
        </div>
      );
    }
    return null;
  }

  // Loader script is injected site-wide in app/layout.tsx (AdSense site verification)
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
