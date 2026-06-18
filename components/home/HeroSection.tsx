import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {
  const chain = [
    { label: "Learners" },
    { label: "Professionals" },
    { label: "Leaders" },
    { label: "Organizations" },
    { label: "Institutions" },
    { label: "Societies" },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy"
      aria-label="Hero"
    >
      {/* ── Background photo ── */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,15,34,0.93) 0%, rgba(8,15,34,0.82) 45%, rgba(8,15,34,0.45) 70%, rgba(8,15,34,0.15) 100%)",
        }}
      />

      {/* Gold radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 40% at 0% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-2xl">
          {/* Label pill */}
          <FadeIn direction="down" duration={500} delay={0}>
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/40 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
              <span className="text-brand-gold text-xs font-semibold tracking-[0.18em] uppercase">
                Human Capability &amp; Institutional Development Platform
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-6">
              Strengthening{" "}
              <br className="hidden sm:block" />
              the Systems That{" "}
              <br className="hidden sm:block" />
              Develop{" "}
              <span className="text-brand-gold">Human Capability</span>
            </h1>
          </FadeIn>

          {/* Body text */}
          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
              Edgewares Holdings is dedicated to strengthening workforce systems,
              educational ecosystems, organizational capability, and institution
              building across Africa and beyond.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-lg">
              We believe that stronger systems produce stronger capabilities,
              stronger capabilities produce stronger institutions, and stronger
              institutions produce stronger societies.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn direction="up" duration={600} delay={360}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 shadow-gold hover:-translate-y-0.5"
              >
                Explore Our Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-brand-gold text-white hover:text-brand-gold font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
              >
                Partner With Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* ── Progress chain ── */}
        <FadeIn direction="up" duration={700} delay={500} threshold={0.05}>
          <div className="mt-20 pt-10 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-0">
              {chain.map((item, i) => (
                <div key={item.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-brand-gold/60 bg-brand-gold/10 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                    </div>
                    <span className="text-white/60 text-[10px] tracking-widest uppercase whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  {i < chain.length - 1 && (
                    <svg
                      className="w-8 h-4 text-brand-gold/40 mx-1 mb-5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 32 16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M0 8h28M22 2l8 6-8 6"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
