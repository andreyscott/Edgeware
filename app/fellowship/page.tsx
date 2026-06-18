import type { Metadata } from "next";
import CurriculumPillars from "@/components/fellowship/CurriculumPillars";
import ApplicationCTA from "@/components/fellowship/ApplicationCTA";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Operator Fellowship",
  description:
    "Apply for the Edgewares Operator Fellowship — a rigorous, cohort-based program for professionals committed to mastering Technical Capability, Systems Thinking, Business Intelligence, Leadership, and Execution Discipline.",
};

const programDetails = [
  { icon: "👥", label: "Format", value: "Cohort-Based, Intensive" },
  { icon: "⏱️", label: "Duration", value: "12 Weeks" },
  { icon: "🎓", label: "Mode", value: "Blended (In-Person + Virtual)" },
  { icon: "🔒", label: "Eligibility", value: "All Career Stages Welcome" },
];

export default function FellowshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-40 pb-32 relative overflow-hidden min-h-[80vh] flex items-center" aria-label="Fellowship hero">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <FadeIn direction="down" duration={500}>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span className="text-brand-gold text-xs font-semibold tracking-[0.15em] uppercase">
                    Flagship Program
                  </span>
                </div>
              </FadeIn>
              <FadeIn direction="up" duration={650} delay={120}>
                <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
                  The Edgewares
                  <br />
                  <span className="text-brand-gold">Operator Fellowship</span>
                </h1>
              </FadeIn>
              <FadeIn direction="up" duration={600} delay={240}>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg font-light">
                  A rigorous, practitioner-led program for professionals ready to move from competent to exceptional. Built on five pillars that define what it means to operate at the highest level.
                </p>
              </FadeIn>
              <FadeIn direction="up" duration={600} delay={360}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="#apply" variant="primary" size="lg">
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button href="#overview" variant="ghost" size="lg" className="text-white/70 hover:text-white hover:bg-white/5">
                    Learn More ↓
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right: Program Details Card */}
            <FadeIn direction="right" duration={650} delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-navy-lg">
                <h3 className="font-display font-bold text-xl text-white mb-6">Program Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {programDetails.map((detail) => (
                    <div key={detail.label} className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300">
                      <div className="text-xl mb-2">{detail.icon}</div>
                      <div className="text-white/50 text-xs mb-1">{detail.label}</div>
                      <div className="text-white font-semibold text-sm">{detail.value}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-xs mb-3 uppercase tracking-wider">Curriculum Pillars</p>
                  <div className="flex flex-wrap gap-2">
                    {["Technical Capability", "Systems Thinking", "Business Intelligence", "Leadership", "Execution"].map(
                      (pill) => (
                        <span
                          key={pill}
                          className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs rounded-full"
                        >
                          {pill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="overview" className="bg-white py-24 md:py-32" aria-label="Program overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Program Overview"
              title="What Is the Operator Fellowship?"
              subtitle="The Operator Fellowship is Edgewares's flagship development program — a structured, high-intensity experience built to produce operators who can build and run complex systems."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Who It's For",
                description:
                  "Ambitious professionals at any career stage who are committed to developing real operator-level capability. Whether you're early in your career or a seasoned professional looking to formalize and sharpen your edge — this program is designed for you.",
              },
              {
                icon: "🔁",
                title: "How It Works",
                description:
                  "The fellowship is cohort-based and intensive. You'll learn alongside a small, carefully selected group of peers through a mix of structured curriculum, live sessions, real-world projects, and mentorship from practitioner leaders.",
              },
              {
                icon: "📈",
                title: "What You'll Leave With",
                description:
                  "Not just knowledge — but capability. You'll leave the fellowship with a clear operator's framework, measurable skill development across all five pillars, a strong peer network, and the confidence that comes from real, applied learning.",
              },
            ].map((item, idx) => (
              <FadeIn
                key={item.title}
                direction="up"
                delay={idx * 100}
                duration={550}
                className="h-full"
              >
                <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-xl mb-5 group-hover:bg-brand-gold transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{item.title}</h3>
                  <div className="w-8 h-0.5 bg-brand-gold rounded-full mb-4" />
                  <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Pillars */}
      <FadeIn direction="up" duration={650}>
        <CurriculumPillars />
      </FadeIn>

      {/* Testimonial/Quote */}
      <section className="bg-white py-24 border-t border-b border-gray-100" aria-label="Quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn direction="up" duration={600}>
            <div className="text-5xl text-brand-gold mb-6 font-display">&ldquo;</div>
            <p className="font-display italic text-2xl md:text-3xl text-brand-navy leading-relaxed mb-6">
              The goal of the fellowship is not to teach you what to do. It is to transform{" "}
              <span className="text-brand-gold">how you think, how you work, and how you lead.</span>
            </p>
            <div className="w-12 h-0.5 bg-brand-gold rounded-full mx-auto mb-4" />
            <p className="text-brand-muted text-sm tracking-wide uppercase">Edgewares Fellowship Philosophy</p>
          </FadeIn>
        </div>
      </section>

      {/* Application CTA */}
      <div id="apply">
        <FadeIn direction="up" duration={650}>
          <ApplicationCTA />
        </FadeIn>
      </div>
    </>
  );
}
