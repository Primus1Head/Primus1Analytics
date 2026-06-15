import Link from "next/link";
import AdSlot from "./components/AdSlot";

export default function Home() {
  return (
    <>
      {/* ── HERO: split — video left / text right ─────────────────────── */}
      <section className="relative flex min-h-[88vh] flex-col md:flex-row">

        {/* Left — video panel */}
        <div className="relative md:w-1/2 min-h-[45vh] md:min-h-full overflow-hidden bg-black">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-85"
          >
            <source src="/RaceonGrass.mp4" type="video/mp4" />
            <source src="/RaceonGrass.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[var(--p1-dark)]/70" />
        </div>

        {/* Right — text panel */}
        <div className="relative flex flex-col justify-center bg-[var(--p1-dark)] md:w-1/2 px-10 py-20 md:px-16">
          <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[var(--p1-gold)] mb-6">
            Data. Discipline. Edge.
          </p>
          <h1 className="serif text-4xl sm:text-5xl font-semibold leading-tight text-[var(--p1-text)]">
            Wagering intelligence,<br />
            <span className="text-[var(--p1-gold)]">built on data—</span><br />
            not hunches.
          </h1>
          <p className="mt-6 text-[15px] font-light leading-relaxed text-[var(--p1-dim)] max-w-sm">
            Primus 1 Analytics builds software that turns betting records, race data, and market
            signals into institutional-grade decision tools for serious horseplayers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-[var(--p1-gold)] px-7 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-black hover:bg-[var(--p1-gold2)] transition-colors"
            >
              Explore Our Products
            </a>
            <Link
              href="/about"
              className="border border-[var(--p1-border)] px-7 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--p1-dim)] hover:border-[var(--p1-dim)] hover:text-[var(--p1-text)] transition-all"
            >
              About the Company
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ───────────────────────────────────────────────── */}
      <div className="bg-[#0d0d0d] border-t border-b border-[var(--p1-border)]">
        <div className="mx-auto max-w-7xl px-6 py-7 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          <div className="col-span-2 md:col-span-1 flex items-center gap-4 md:border-r border-[var(--p1-border)] md:pr-6">
            <svg className="w-9 h-9 shrink-0 text-[var(--p1-gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 3c-1.5 0-3 .8-4 2L6 7l-2 4 1 2 2-1 1 2-1 3h4l1-2 3 1c2 0 3-1.5 3-3.5C18 8 15.5 3 12 3z" />
            </svg>
            <div>
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[var(--p1-gold)]">Built for serious players.</p>
              <p className="text-[9px] font-light tracking-[0.2em] uppercase text-[var(--p1-dim)] mt-0.5">Driven by data. Proven by results.</p>
            </div>
          </div>
          {[
            { icon: "▦", label: "Data Integrity",      body: "Clean, verified, and measurement-first." },
            { icon: "◎", label: "Discipline",          body: "We remove emotion from the equation." },
            { icon: "◈", label: "Advantage",           body: "Find edges others overlook." },
            { icon: "⬡", label: "Institutional Grade", body: "Tools designed to meet professional standards." },
          ].map((p) => (
            <div key={p.label} className="flex gap-3 items-start">
              <div className="icon-circle mt-0.5 text-[11px]">{p.icon}</div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--p1-text)]">{p.label}</p>
                <p className="mt-1 text-[11px] font-light leading-snug text-[var(--p1-dim)]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── HORSEHEAD CINEMATIC ───────────────────────────────────────── */}
      {/* Horsehead.mp4 — close-up horse, very still, 1.5MB */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Horsehead.mp4" type="video/mp4" />
        </video>
        {/* Heavy dark overlay so text reads clearly */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p className="serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-[var(--p1-text)]">
            Built around the horse.
          </p>
          <p className="serif text-3xl sm:text-4xl md:text-5xl font-normal italic text-[var(--p1-gold)] mt-2">
            Driven by data.
          </p>
          <p className="mt-8 text-[14px] font-light leading-relaxed text-[#b0aba3] max-w-lg mx-auto">
            Every race tells a story. Most bettors never see it. We build systems
            designed to uncover the patterns hidden beneath the results.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
      <section id="products" className="section-light py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[var(--p1-gold)] text-center mb-3">
            Our Solutions
          </p>
          <h2 className="serif text-3xl sm:text-4xl font-semibold text-center text-[var(--p1-dark-text)] mb-14">
            Intelligence for Every Stage of Your Process
          </h2>
          <div className="grid gap-5 md:grid-cols-3">

            {/* Vault */}
            <div className="product-card p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle text-[16px]">⬛</div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--p1-gold)]">Flagship Product</p>
                  <h3 className="serif text-2xl font-semibold text-[var(--p1-text)] leading-tight">Primus 1 Vault</h3>
                </div>
              </div>
              <p className="text-[13px] font-light leading-relaxed text-[var(--p1-dim)] flex-1">
                Upload your wagering history and receive a complete ROI breakdown by bet type,
                track, surface, class, and more. Identify leaks. Find edges. Bet with clarity.
              </p>
              <a
                href="https://primus1vault.com"
                className="mt-8 inline-block bg-[var(--p1-gold)] px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-black hover:bg-[var(--p1-gold2)] transition-colors w-fit"
              >
                Open Vault →
              </a>
            </div>

            {/* Advanced Intelligence Initiatives */}
            <div className="product-card p-8 flex flex-col relative">
              <div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase text-[var(--p1-dim)] border border-[var(--p1-border)] px-2 py-1">
                In Development
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle text-[16px]">◉</div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--p1-gold)]">◉ In Development</p>
                  <h3 className="serif text-2xl font-semibold text-[var(--p1-text)] leading-tight">Advanced Intelligence Initiatives</h3>
                </div>
              </div>
              <p className="text-[13px] font-light leading-relaxed text-[var(--p1-dim)] flex-1">
                Ongoing research focused on performance measurement, pattern recognition, and
                racing intelligence. New tools and capabilities will be introduced as they mature.
              </p>
            </div>

            {/* Circuit Intelligence */}
            <div className="product-card p-8 flex flex-col relative">
              <div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase text-[var(--p1-dim)] border border-[var(--p1-border)] px-2 py-1">
                Coming Soon
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle text-[16px]">◎</div>
                <div>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--p1-gold)]">Coming Soon</p>
                  <h3 className="serif text-2xl font-semibold text-[var(--p1-text)] leading-tight">Circuit Intelligence</h3>
                </div>
              </div>
              <p className="text-[13px] font-light leading-relaxed text-[var(--p1-dim)] flex-1">
                A deeper view of racing ecosystems—revealing track tendencies, circuit dynamics,
                and areas where perception and reality diverge.
              </p>
              <Link
                href="/subscribe"
                className="mt-8 inline-block border border-[var(--p1-border)] px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--p1-dim)] hover:border-[var(--p1-gold)] hover:text-[var(--p1-gold)] transition-all w-fit"
              >
                Stay Informed →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE — OutofGate bg ──────────────────────────────────────── */}
      {/* OutofGate.mp4 — 7s burst, loops perfectly */}
      <section className="relative py-24 px-6 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/OutofGate.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 mx-auto max-w-3xl flex items-center gap-8">
          <div className="hidden md:block h-px flex-1 bg-[var(--p1-gold)]/40" />
          <div className="text-center">
            <p className="serif text-2xl sm:text-3xl font-normal text-[var(--p1-text)]">
              We don&apos;t predict races. We measure reality.
            </p>
            <p className="serif text-2xl sm:text-3xl font-normal italic text-[var(--p1-gold)] mt-1">
              That&apos;s how you win.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-[var(--p1-gold)]/40" />
        </div>
      </section>

      <AdSlot slot="mid-page" className="mx-auto max-w-3xl px-6 py-10 bg-[var(--p1-dark)]" />

      {/* ── APPROACH — horsefield bg ──────────────────────────────────── */}
      {/* horsefield.mp4 — wide pastoral field shot, extremely subtle */}
      <section id="approach" className="relative py-24 px-6 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/horsefield.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--p1-dark)]/80" />
        <div className="relative z-10 mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[var(--p1-gold)] mb-6">
              Our Approach
            </p>
            <h2 className="serif text-3xl sm:text-4xl font-semibold leading-snug text-[var(--p1-text)]">
              The Thoroughbred comes first.<br />
              <span className="font-normal text-[var(--p1-dim)]">The data comes second.</span><br />
              <em className="text-[var(--p1-gold)] font-normal">The edge emerges when both are understood together.</em>
            </h2>
            <p className="mt-8 text-[14px] font-light leading-relaxed text-[var(--p1-dim)]">
              The racing industry generates enormous amounts of information. Very little of it
              becomes intelligence. Primus 1 Analytics exists to bridge that gap — moving users
              beyond opinion and toward evidence-based decision making.
            </p>
            <p className="mt-4 text-[14px] font-light leading-relaxed text-[var(--p1-text)]">
              Because understanding <em>why</em> something happened is often more valuable than
              knowing <em>what</em> happened.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { n: "01", title: "Measure Everything",   body: "Every bet is data. Every result is signal. We build tools that make your history legible." },
              { n: "02", title: "Remove Emotion",       body: "Tilt, overexposure, and streak chasing are measurable. We surface them before they cost you." },
              { n: "03", title: "Find the Hidden Edge", body: "The market misprices horses constantly. Our engines are designed to find where." },
            ].map((s) => (
              <div key={s.n} className="border border-[var(--p1-border)] bg-[var(--p1-dark)]/70 backdrop-blur p-6 flex gap-5">
                <span className="serif text-3xl font-bold text-[var(--p1-gold)]/30 leading-none shrink-0">{s.n}</span>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--p1-text)] mb-2">{s.title}</p>
                  <p className="text-[13px] font-light leading-relaxed text-[var(--p1-dim)]">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIMUS 1 FOR ALL — SlowMotionHooves bg ────────────────────── */}
      {/* SlowMotionHooves.mp4 — 15s trim, emotional slow-mo */}
      <section className="relative py-20 px-6 overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/SlowMotionHooves.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0E3B2E/95 0%, #061f17/98 100%)", backdropFilter: "none" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,59,46,0.93) 0%, rgba(6,31,23,0.96) 100%)" }} />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[var(--p1-gold)] mb-6">
            Primus 1 For All
          </p>
          <h2 className="serif text-3xl font-semibold text-[var(--p1-text)]">More Than Racing.</h2>
          <p className="mt-6 text-[14px] font-light leading-relaxed text-[#a8c4b8] max-w-xl mx-auto">
            Founded while battling Hereditary Angioedema and Stage IV ALK-positive lung cancer,
            the mission reflects resilience, perseverance, and the determination to keep moving
            forward despite long odds. The Thoroughbred embodies the same qualities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {["Strength.", "Heart.", "Courage.", "Purpose."].map((v) => (
              <span key={v} className="serif text-2xl font-semibold text-[var(--p1-gold)]">{v}</span>
            ))}
          </div>
          <p className="mt-8 text-[13px] font-light text-[#a8c4b8]">
            Those values remain at the center of everything we build.
          </p>
          <p className="mt-4 text-[13px] font-light text-[#a8c4b8]">
            Primus 1 For All extends that mission beyond racing through community engagement, charitable initiatives, and support for causes that matter.{" "}
            <a
              href="https://www.youtube.com/@PRIMUS14A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--p1-gold)] hover:underline font-medium"
            >
              Learn more about the mission →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
