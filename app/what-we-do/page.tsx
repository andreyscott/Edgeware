import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Explore Edgewares ' five core development programs: Workforce Development, Operator Development, Educational Innovation, Leadership Development, and Institutional Development.",
};

const offeringDetails = [
  {
    id: "workforce",
    icon: "🏗️",
    title: "Workforce Development",
    tagline: "Building the talent pipeline Africa needs",
    description:
      "Our Workforce Development programs are designed to close the gap between education and employment. We equip individuals with the practical skills, professional discipline, and growth mindset required to thrive in modern workplaces and contribute meaningfully to their organizations.",
    outcomes: [
      "Industry-relevant skills training",
      "Professional standards and work ethics",
      "Career pathway clarity and navigation",
      "Employer-ready competency frameworks",
    ],
    color: "navy",
  },
  {
    id: "operator",
    icon: "⚙️",
    title: "Operator Development",
    tagline: "From competent professionals to high-performance operators",
    description:
      "Operators are the people who actually build things—who translate vision into action, manage systems under pressure, and deliver consistent results. Our Operator Development programs identify and cultivate these rare individuals through our flagship Operator Fellowship and targeted cohort programs.",
    outcomes: [
      "Operator Fellowship (flagship program)",
      "Systems design and management",
      "Execution under ambiguity",
      "Cross-functional leadership",
    ],
    color: "gold",
  },
  {
    id: "education",
    icon: "🎓",
    title: "Educational Innovation",
    tagline: "Reimagining how learning creates value",
    description:
      "Traditional educational models were not designed for today's economy. We design and partner on learning programs that prioritize outcomes over credentials, practice over theory, and relevance over convention. Our educational innovation work helps institutions and organizations build learning environments that produce real capability.",
    outcomes: [
      "Curriculum design and development",
      "Outcome-oriented learning frameworks",
      "Practitioner-led instruction models",
      "Institutional learning culture design",
    ],
    color: "navy",
  },
  {
    id: "leadership",
    icon: "🌟",
    title: "Leadership Development",
    tagline: "Cultivating leaders who build others",
    description:
      "Leadership is not a title—it's a capability. Our Leadership Development programs focus on the practical dimensions of leading people, managing change, and building organizational culture. We develop leaders who understand that their primary job is to build the capacity of those around them.",
    outcomes: [
      "Adaptive leadership frameworks",
      "Team building and culture design",
      "Strategic decision-making",
      "Stakeholder management and influence",
    ],
    color: "gold",
  },
  {
    id: "institutional",
    icon: "🏛️",
    title: "Institutional Development",
    tagline: "Building organizations that outlast individuals",
    description:
      "Many African institutions are built on relationships, not systems. When key people leave, the institution falters. Institutional Development work focuses on building the frameworks, processes, governance structures, and cultures that enable organizations to function at capacity regardless of personnel changes.",
    outcomes: [
      "Organizational design and restructuring",
      "Process and systems documentation",
      "Governance framework development",
      "Culture and values architecture",
    ],
    color: "navy",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* Page Header (Hero) */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-brand-navy" aria-label="What we do header">
        {/* Background photo */}
        <Image
          src="/what-we-do-bg.png"
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
              "linear-gradient(to right, rgba(8,15,34,0.95) 0%, rgba(8,15,34,0.85) 45%, rgba(8,15,34,0.50) 70%, rgba(8,15,34,0.20) 100%)",
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

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 text-center">
          <FadeIn direction="down" duration={500}>
            <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Our Programs
            </span>
          </FadeIn>
          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
              What We Do
            </h1>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Five interconnected development domains, each essential to building the human and institutional infrastructure Africa needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {offeringDetails.map((o) => (
              <a
                key={o.id}
                href={`#${o.id}`}
                className="shrink-0 px-4 py-2 text-xs font-semibold text-brand-navy hover:text-brand-gold hover:bg-brand-cream rounded-lg transition-all duration-200"
              >
                {o.icon} {o.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Offerings */}
      <div className="bg-white">
        {offeringDetails.map((offering, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={offering.id}
              id={offering.id}
              className={`py-20 md:py-28 overflow-hidden ${isEven ? "bg-white" : "bg-brand-cream"}`}
              aria-label={offering.title}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Content */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <FadeIn direction={isEven ? "left" : "right"} duration={650}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{offering.icon}</span>
                        <span className="text-brand-gold font-semibold text-xs tracking-[0.2em] uppercase">
                          {offering.tagline}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-4xl text-brand-navy mb-4 leading-tight">
                        {offering.title}
                      </h2>
                      <div className="w-12 h-0.5 bg-brand-gold rounded-full mb-6" />
                      <p className="text-brand-muted leading-relaxed mb-8">{offering.description}</p>

                      <div>
                        <h3 className="font-semibold text-brand-navy text-sm mb-4">Key Outcomes:</h3>
                        <ul className="space-y-3">
                          {offering.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3">
                              <div className="shrink-0 w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center mt-0.5">
                                <svg className="w-3 h-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-brand-muted text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <FadeIn direction={isEven ? "right" : "left"} duration={650} delay={150}>
                      <div className="bg-brand-navy rounded-3xl p-10 relative overflow-hidden shadow-navy-lg group">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
                        <div className="relative z-10 text-center">
                          <div className="text-7xl mb-6">{offering.icon}</div>
                          <h3 className="font-display font-bold text-2xl text-white mb-2">
                            {offering.title}
                          </h3>
                          <div className="w-8 h-0.5 bg-brand-gold rounded-full mx-auto mb-4" />
                          <p className="text-white/50 text-sm italic mb-6">{offering.tagline}</p>

                          {offering.id === "operator" && (
                            <div className="mt-8">
                              <Button href="/fellowship" variant="primary" size="md">
                                View Fellowship Program →
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-brand-navy py-24 relative overflow-hidden" aria-label="CTA">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn direction="up" duration={650}>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Whether you&apos;re looking to develop your team, build your institution, or grow personally — Edgewares has a program for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/fellowship" variant="primary" size="lg">
                Apply for Fellowship
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:border-brand-gold">
                Partner With Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
