import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Explore Edgewares ' key initiatives, including the FutureNow Academy, Teacher Advantage, Operator Fellowship, TheraVita Intelligence, and Future Human Systems Research Initiative.",
};

const mainInitiatives = [
  {
    icon: "🚀",
    title: "FutureNow Academy",
    description: "Developing future-ready learners and leaders.",
  },
  {
    icon: "🏫",
    title: "Teacher Advantage",
    description: "Strengthening educator capability for the future of learning.",
  },
  {
    icon: "⚙️",
    title: "Edgewares Operator Fellowship",
    description: "Developing operators equipped for the future economy.",
  },
  {
    icon: "🩺",
    title: "TheraVita Intelligence",
    description: "Advancing knowledge and capability within health ecosystems.",
  },
  {
    icon: "🔬",
    title: "Future Human Systems Research Initiative",
    description:
      "Generating evidence, frameworks, and insights on capability production and institutional effectiveness.",
  },
];

const publications = [
  "State of Human Capability in Africa",
  "Workforce Readiness Report",
  "Future Skills Report",
  "Educational Capability Index",
  "Organizational Capability Report",
];

const outputs = [
  { title: "White Papers", desc: "Rigorous analyses of policy and systems design." },
  { title: "Research Reports", desc: "Empirical studies on capability development." },
  { title: "Policy Briefs", desc: "Actionable summaries for leaders and builders." },
  { title: "Capability Indices", desc: "Comparative tools to track development." },
];

const focusAreas = [
  { title: "Leadership", icon: "🌟" },
  { title: "Systems Thinking", icon: "🔄" },
  { title: "Execution", icon: "⚡" },
  { title: "Organizational Capability", icon: "🏢" },
  { title: "Workforce Readiness", icon: "🏗️" },
];

export default function InitiativesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-40 pb-32 relative overflow-hidden min-h-[60vh] flex items-center" aria-label="Initiatives hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" duration={500}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold tracking-[0.15em] uppercase">
                Driving Systemic Change
              </span>
            </div>
          </FadeIn>
          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Our <span className="text-brand-gold">Initiatives</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              We design and execute programs and research that strengthen human capability, enhance learning models, and build robust institutional frameworks for Africa&apos;s future.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Programs grid */}
      <section className="bg-white py-24 md:py-32" aria-label="Core initiatives list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Ecosystem Portfolio"
              title="Capability Development Initiatives"
              subtitle="Interconnected solutions focused on strengthening workforce systems, educator training, leadership capacity, and localized research."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainInitiatives.map((item, idx) => (
              <FadeIn
                key={item.title}
                direction="up"
                delay={idx * 80}
                duration={550}
                className="h-full"
              >
                <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-xl mb-5 group-hover:bg-brand-gold transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-200">{item.title}</h3>
                    <div className="w-8 h-0.5 bg-brand-gold rounded-full mb-4" />
                    <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {item.title.includes("Fellowship") && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <a href="#fellowships" className="text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors flex items-center gap-1">
                        Read details <span>→</span>
                      </a>
                    </div>
                  )}
                  {item.title.includes("Research") && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <a href="#research" className="text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors flex items-center gap-1">
                        View Publications <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-brand-cream py-24 md:py-32 border-t border-b border-gray-100" aria-label="Research initiative details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Header info */}
            <div className="lg:col-span-5">
              <FadeIn direction="left" duration={600}>
                <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                  Insight & Evidence
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6">
                  Future Human Systems Research Initiative
                </h2>
                <div className="w-12 h-0.5 bg-brand-gold rounded-full mb-6" />
                <p className="text-brand-muted leading-relaxed mb-8">
                  Generating empirical evidence, validated frameworks, and localized insights on capability production and institutional effectiveness across Africa.
                </p>

                <h3 className="font-semibold text-brand-navy text-sm mb-4 uppercase tracking-wider">Key Outputs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {outputs.map((out) => (
                    <div key={out.title} className="bg-white rounded-xl p-4 border border-gray-100">
                      <h4 className="font-bold text-brand-navy text-xs mb-1">{out.title}</h4>
                      <p className="text-[11px] text-brand-muted leading-normal">{out.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Publications list */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-card">
              <FadeIn direction="right" duration={600} delay={150}>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-2 flex items-center gap-2">
                  <span>📚</span> Future Publications & Indexes
                </h3>
                <p className="text-brand-muted text-xs mb-6 font-light">
                  A structured series of reports designed to measure organizational readiness, skill requirements, and learning indices.
                </p>

                <div className="space-y-4">
                  {publications.map((pub, idx) => (
                    <div
                      key={pub}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-brand-cream border border-transparent hover:border-gray-100 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-navy/10 text-brand-navy font-mono text-xs flex items-center justify-center font-bold">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm">{pub}</h4>
                        <p className="text-[11px] text-brand-gold font-mono uppercase tracking-wider font-semibold">Forthcoming Release</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Fellowships Section */}
      <section id="fellowships" className="bg-white py-24 md:py-32" aria-label="Operator fellowship initiative details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Visual focus list */}
            <div className="space-y-6">
              <FadeIn direction="left" duration={600}>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-6 flex items-center gap-2">
                  <span>⚙️</span> Fellowship Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {focusAreas.map((item) => (
                    <div key={item.title} className="bg-brand-cream border border-gray-100 rounded-xl p-5 hover:border-brand-gold/30 transition-all duration-300">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h4 className="font-display font-bold text-sm text-brand-navy">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Text details */}
            <div>
              <FadeIn direction="right" duration={600} delay={150}>
                <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                  Operator Development
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6">
                  Edgewares Operator Fellowship
                </h2>
                <div className="w-12 h-0.5 bg-brand-gold rounded-full mb-6" />
                <p className="text-brand-muted leading-relaxed mb-6">
                  Developing future operators, leaders, and institution builders ready to build, translate, and manage complex systems across key sectors of the economy.
                </p>

                {/* Outcome block */}
                <div className="bg-brand-navy text-white rounded-2xl p-6 border border-white/5 shadow-navy-lg mb-8">
                  <h4 className="font-display font-bold text-brand-gold text-xs uppercase tracking-wider mb-2">Program Outcomes</h4>
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    Participants emerge better equipped to contribute effectively within organizations and institutions, executing initiatives with professional discipline and systems thinking.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button href="/fellowship" variant="primary" size="md">
                    Learn Fellowship Details →
                  </Button>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-navy py-24 relative overflow-hidden" aria-label="CTA">
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
              Get Involved in Our Work
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              We partner with forward-thinking employers, learning institutions, and regional hubs to expand human capability infrastructure across Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Partner With Us
              </Button>
              <Button href="/about" variant="outline" size="lg" className="border-white/30 text-white hover:border-brand-gold">
                Learn About Edgewares
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
