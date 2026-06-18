import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { CORE_OFFERINGS } from "@/lib/constants";

const ICONS: Record<string, string> = {
  workforce: "🏗️",
  operator: "⚙️",
  education: "🎓",
  leadership: "🌟",
  institutional: "🏛️",
  research: "🔬",
};

export default function CoreOfferingsSection() {
  return (
    <section
      id="core-offerings"
      className="bg-white py-24 md:py-32"
      aria-label="Core Offerings"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" duration={600}>
          <div className="text-center mb-16">
            <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.22em] uppercase mb-4">
              Our Work
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-navy leading-tight mb-4">
              Building Capability Across People,
              <br className="hidden md:block" /> Organizations, and Institutions
            </h2>
            <p className="text-brand-muted text-base max-w-2xl mx-auto leading-relaxed">
              Our work sits at the intersection of six interconnected domains that shape societal progress.
            </p>
          </div>
        </FadeIn>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-card">
          {[
            ...CORE_OFFERINGS,
            {
              id: "research",
              icon: "🔬",
              title: "Research & Knowledge Production",
              description:
                "Generating insights and evidence that inform stronger systems and better decisions.",
              color: "navy",
            },
          ].map((offering, i) => (
            <FadeIn key={offering.id} direction="up" delay={i * 80} duration={550}>
              <div
                className="bg-white p-8 flex flex-col gap-4 group hover:bg-brand-cream transition-colors duration-200 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-2xl group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-colors duration-200">
                  {ICONS[offering.id] ?? offering.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-base mb-2 group-hover:text-brand-gold transition-colors duration-200">
                    {offering.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn direction="up" duration={500} delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-dark text-white font-semibold text-sm px-7 py-3 rounded-lg transition-all duration-200 shadow-navy hover:-translate-y-0.5"
            >
              Learn More About Our Work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
