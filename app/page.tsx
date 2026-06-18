import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import CoreOfferingsSection from "@/components/home/CoreOfferingsSection";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { SITE_NAME, INSIGHTS_ARTICLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Strengthening the Systems That Develop Human Capability`,
  description:
    "Edgewares Holdings is dedicated to strengthening workforce systems, educational ecosystems, organizational capability, and institution building across Africa and beyond.",
};

const CAPABILITIES = [
  {
    icon: "🧠",
    title: "Human Capability",
    desc: "Developing capable individuals equipped for a changing world.",
  },
  {
    icon: "💼",
    title: "Workforce Readiness",
    desc: "Preparing talent and institutions for the future economy.",
  },
  {
    icon: "🏛️",
    title: "Organizational Capability",
    desc: "Strengthening institutions through better systems and leadership.",
  },
  {
    icon: "📚",
    title: "Educational Transformation",
    desc: "Reimagining learning ecosystems for future generations.",
  },
];

const THEORY_STEPS = [
  { label: "Capability\nDevelopment", icon: "⚙️" },
  { label: "Organizational\nCapability", icon: "🏗️" },
  { label: "Institutional\nCapability", icon: "🏛️" },
  { label: "Societal\nProgress", icon: "🌍" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ── Why We Exist ── */}
      <section className="bg-white py-24 md:py-32" aria-label="Why we exist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left */}
            <FadeIn direction="left" duration={650}>
              <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.22em] uppercase mb-4">
                Why We Exist
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-navy leading-tight mb-6">
                Building a Future{" "}
                <br />
                Rooted in Capability
              </h2>
              <div className="space-y-4 text-brand-muted text-base leading-relaxed">
                <p>
                  The future of societies depends not only on infrastructure, technology, or
                  capital—but on the systems through which people are developed.
                </p>
                <p>
                  Across Africa and many emerging markets, persistent capability gaps continue
                  to limit educational outcomes, workforce readiness, organizational
                  effectiveness, and institutional resilience.
                </p>
                <p className="font-semibold text-brand-navy">
                  At Edgewares, we are committed to strengthening these systems because we
                  believe that capability is the foundation of sustainable progress.
                </p>
              </div>
            </FadeIn>

            {/* Right – capability cards 2×2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CAPABILITIES.map((c, i) => (
                <FadeIn key={c.title} direction="up" delay={i * 100} duration={600}>
                  <div className="bg-brand-navy rounded-2xl p-6 flex flex-col gap-3 group hover:-translate-y-1 transition-all duration-200 shadow-navy h-full">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-xl">
                      {c.icon}
                    </div>
                    <h3 className="font-display font-bold text-white text-base leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Banner ── */}
      <section
        className="bg-brand-navy py-20 relative overflow-hidden"
        aria-label="Mission"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" duration={700}>
            <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.22em] uppercase mb-6">
              Our Mission
            </span>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
              To strengthen the systems through which{" "}
              <span className="text-brand-gold italic">human capability</span> is developed,
              workforce readiness is improved, organizations are strengthened,{" "}
              <br className="hidden md:block" />
              and{" "}
              <span className="text-brand-gold italic">institutions endure.</span>
            </p>
            <div className="mt-8 w-12 h-0.5 bg-brand-gold rounded-full mx-auto" />
          </FadeIn>
        </div>
      </section>

      {/* ── Core Offerings ── */}
      <CoreOfferingsSection />

      {/* ── Theory of Change ── */}
      <section
        className="bg-brand-navy-dark py-24 relative overflow-hidden"
        aria-label="Theory of change"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left copy */}
            <FadeIn direction="left" duration={650}>
              <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.22em] uppercase mb-4">
                Our Theory of Change
              </span>
              <h2 className="font-display font-bold text-4xl text-white leading-tight mb-4">
                Stronger Systems.
                <br />
                <span className="text-brand-gold">Stronger Capabilities.</span>
                <br />
                Stronger Societies.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                At Edgewares, we believe societal progress begins with capability development.
              </p>
              <Button href="/about" variant="outline" size="lg">
                See the Bigger Picture
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </FadeIn>

            {/* Right – step chain */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
              {THEORY_STEPS.map((step, i) => (
                <FadeIn key={step.label} direction="up" delay={i * 120} duration={500}>
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex flex-col items-center gap-3 px-4">
                      <div className="w-16 h-16 rounded-full bg-brand-navy border-2 border-brand-gold/40 flex items-center justify-center text-2xl shadow-gold">
                        {step.icon}
                      </div>
                      <p className="text-white/70 text-[11px] font-semibold tracking-wider uppercase text-center whitespace-pre-line leading-tight">
                        {step.label}
                      </p>
                    </div>
                    {i < THEORY_STEPS.length - 1 && (
                      <svg
                        className="w-6 h-6 text-brand-gold/40 rotate-90 sm:rotate-0 my-2 sm:my-0 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Insights Teaser ── */}
      <section className="bg-brand-cream py-24" aria-label="Insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <div className="mb-12">
              <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.22em] uppercase mb-4">
                Insights for a Changing World
              </span>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h2 className="font-display font-bold text-4xl text-brand-navy leading-tight">
                  Ideas. Research. Perspectives.
                  <br />
                  For a Better Tomorrow.
                </h2>
                <Button href="/insights" variant="primary" size="lg">
                  Visit Insights Hub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIGHTS_ARTICLES.map((article, i) => (
              <FadeIn key={article.id} direction="up" delay={i * 90} duration={550}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                  <div className="h-36 bg-brand-navy relative overflow-hidden flex-shrink-0">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
                      }}
                    />
                    <div className="absolute bottom-3 left-4">
                      <span className="bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-brand-navy text-sm leading-snug mb-2 group-hover:text-brand-gold transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <Link
                      href="/insights"
                      className="text-brand-gold font-semibold text-xs hover:underline mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner CTA Banner ── */}
      <section
        className="bg-brand-navy py-20 relative overflow-hidden"
        aria-label="Partner CTA"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <FadeIn direction="left" duration={600}>
            <div>
              <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.22em] uppercase mb-3">
                Partner With Us
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                Together, We Can Strengthen
                <br />
                <span className="text-brand-gold">
                  the Systems That Shape Human Potential.
                </span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" duration={600} delay={150}>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 shadow-gold hover:-translate-y-0.5 whitespace-nowrap"
              >
                Become a Partner
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
