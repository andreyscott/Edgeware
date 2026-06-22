import type { Metadata } from "next";
import CurriculumPillars from "@/components/fellowship/CurriculumPillars";
import ApplicationCTA from "@/components/fellowship/ApplicationCTA";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { FELLOWSHIP_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Operator Fellowship",
  description:
    "Apply for the Edgewares Operator Fellowship — a high-performance, high-accountability program building Africa's next generation of global operators. Technical capability, systems thinking, execution culture, and more.",
};

const programDetails = [
  { icon: "👥", label: "Format", value: "Cohort-Based, Intensive" },
  { icon: "⏱️", label: "Duration", value: "12 Weeks" },
  { icon: "🎓", label: "Mode", value: "Blended (In-Person + Virtual)" },
  { icon: "🔒", label: "Eligibility", value: "All Career Stages Welcome" },
];

const pills = [
  "Technical Capability",
  "Systems Thinking",
  "Business Intelligence",
  "Execution Culture",
  "Leadership",
  "Global Competitiveness",
];

export default function FellowshipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="bg-brand-navy pt-40 pb-32 relative overflow-hidden min-h-[85vh] flex items-center"
        aria-label="Fellowship hero"
      >
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
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.4) 0%, transparent 70%)",
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
                <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-4">
                  The Edgewares
                  <br />
                  <span className="text-brand-gold">Operator Fellowship</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" duration={600} delay={200}>
                <p className="text-brand-gold/80 text-base font-semibold uppercase tracking-widest mb-6">
                  Building Africa's next generation of global operators.
                </p>
              </FadeIn>

              <FadeIn direction="up" duration={600} delay={280}>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg font-light">
                  The world is moving faster than ever. Yet most learning systems across Africa are
                  completely disconnected from how the modern economy actually works. We built
                  Edgewares to change that.
                </p>
              </FadeIn>

              <FadeIn direction="up" duration={600} delay={360}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    href={FELLOWSHIP_FORM_URL}
                    variant="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                  <Button
                    href="#overview"
                    variant="ghost"
                    size="lg"
                    className="text-white/70 hover:text-white hover:bg-white/5"
                  >
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
                    <div
                      key={detail.label}
                      className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="text-xl mb-2">{detail.icon}</div>
                      <div className="text-white/50 text-xs mb-1">{detail.label}</div>
                      <div className="text-white font-semibold text-sm">{detail.value}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/50 text-xs mb-3 uppercase tracking-wider">Core Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs rounded-full"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── The Problem We Solve ── */}
      <section id="overview" className="bg-white py-24 md:py-32" aria-label="The problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Why We Exist"
              title="The Gap We Are Closing"
              subtitle="Smart, ambitious Africans are mastering individual tools but missing the broader systems. Collecting stacks of certificates but lacking real execution power. Technical skills alone are no longer enough to win."
              align="center"
            />
          </FadeIn>

          {/* Problem → Solution flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "⚡",
                label: "The Problem",
                title: "Disconnected Learning",
                description:
                  "Most learning systems across Africa are completely disconnected from how the modern economy actually works. Professionals know the theory but struggle to build operational excellence.",
                accent: "bg-red-50 border-red-100",
                iconBg: "bg-red-100",
              },
              {
                icon: "🌍",
                label: "The Reality",
                title: "Global Standards Are Non-Negotiable",
                description:
                  "Technology changes daily, artificial intelligence is reshaping work, and competition is global from day one. The future belongs to people who can think structurally and execute without hand-holding.",
                accent: "bg-amber-50 border-amber-100",
                iconBg: "bg-amber-100",
              },
              {
                icon: "🏗️",
                label: "Our Response",
                title: "We Forge Operators",
                description:
                  "Edgewares is an operator development ecosystem designed to build globally competitive African talent. We don't do standard lectures — we build capable operators who understand how to scale companies.",
                accent: "bg-brand-cream border-gray-100",
                iconBg: "bg-brand-navy",
              },
            ].map((item, idx) => (
              <FadeIn key={item.title} direction="up" delay={idx * 110} duration={550} className="h-full">
                <div className={`rounded-2xl p-8 border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full ${item.accent}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-colors duration-300 ${item.iconBg} ${item.iconBg === "bg-brand-navy" ? "group-hover:bg-brand-gold" : ""}`}>
                    {item.icon}
                  </div>
                  <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">{item.label}</p>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3">{item.title}</h3>
                  <div className="w-8 h-0.5 bg-brand-gold rounded-full mb-4" />
                  <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Program structure cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Who It's For",
                description:
                  "Ambitious professionals at any career stage who are committed to developing real operator-level capability. Whether you're early in your career or a seasoned professional looking to sharpen your edge — if you are ambitious, curious, and want to build things that scale, this program is designed for you.",
              },
              {
                icon: "🔁",
                title: "How It Works",
                description:
                  "The fellowship is cohort-based and intensive. Through intensive execution labs, collaborative product builds, and real-world problem solving, you'll build the habits required to create massive value at scale. A high-performance, high-accountability environment for people who want to build real, undeniable capability.",
              },
              {
                icon: "📈",
                title: "What You'll Leave With",
                description:
                  "Not just knowledge — capability. You'll leave with a clear operator's framework, a documented Capability Portfolio of things you have actually built, permanent entry into the exclusive Edgewares operator community, and the confidence that comes from applied, real-world learning.",
              },
            ].map((item, idx) => (
              <FadeIn key={item.title} direction="up" delay={idx * 100} duration={550} className="h-full">
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

      {/* ── What to Expect ── */}
      <section className="bg-brand-navy py-20" aria-label="Expectations">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" duration={600}>
            <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">What to Expect</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              We keep our standards{" "}
              <span className="text-brand-gold">exceptionally high.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              As a Fellow, you should expect total accountability, intense intellectual challenges, and
              continuous peer collaboration. It is a demanding environment built to produce real
              transformation — not comfortable, but genuinely rewarding.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Curriculum Pillars (10 areas) ── */}
      <FadeIn direction="up" duration={650}>
        <CurriculumPillars />
      </FadeIn>

      {/* ── Quote ── */}
      <section className="bg-white py-24 border-t border-b border-gray-100" aria-label="Quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn direction="up" duration={600}>
            <div className="text-5xl text-brand-gold mb-6 font-display">&ldquo;</div>
            <p className="font-display italic text-2xl md:text-3xl text-brand-navy leading-relaxed mb-6">
              Stop just learning isolated skills.{" "}
              <span className="text-brand-gold">
                Start building real operational capability.
              </span>
            </p>
            <div className="w-12 h-0.5 bg-brand-gold rounded-full mx-auto mb-4" />
            <p className="text-brand-muted text-sm tracking-wide uppercase">Edgewares Fellowship Philosophy</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Investment / Fees ── */}
      <section className="bg-brand-cream py-24 md:py-32" aria-label="Investment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="The Investment"
              title="Barrier to Entry Is Ability, Not Capital"
              subtitle="We keep the barrier to entry focused on what matters — ability and ambition — while ensuring every participant has skin in the game."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Application Fee */}
            <FadeIn direction="up" delay={0} duration={550}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-gold/20 flex items-center justify-center text-lg">
                  📋
                </div>
                <p className="text-brand-muted text-xs font-semibold uppercase tracking-widest">Step 1</p>
                <h3 className="font-display font-bold text-2xl text-brand-navy">Application Fee</h3>
                <div className="w-8 h-0.5 bg-brand-gold rounded-full" />
                <p className="text-brand-gold font-bold text-4xl">₦5,000</p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Submit your application with a ₦5,000 processing fee. This signals your commitment and
                  allows us to review your candidacy.
                </p>
              </div>
            </FadeIn>

            {/* Acceptance Fee */}
            <FadeIn direction="up" delay={120} duration={550}>
              <div className="bg-brand-navy rounded-2xl border border-white/10 shadow-navy-lg p-8 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg">
                  🎓
                </div>
                <p className="text-brand-gold/70 text-xs font-semibold uppercase tracking-widest">Step 2</p>
                <h3 className="font-display font-bold text-2xl text-white">Acceptance Fee</h3>
                <div className="w-8 h-0.5 bg-brand-gold rounded-full" />
                <p className="text-brand-gold font-bold text-4xl">₦65,000</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Upon acceptance into the cohort, secure your place with the full program fee. This
                  covers the entire 12-week fellowship experience.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Payment Details */}
          <FadeIn direction="up" delay={200} duration={600}>
            <div className="bg-white rounded-2xl border border-brand-gold/20 shadow-card p-8">
              <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Payment Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider mb-1">Bank</p>
                  <p className="font-display font-bold text-brand-navy text-lg">Fidelity Bank</p>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider mb-1">Account Name</p>
                  <p className="font-display font-bold text-brand-navy text-lg">Edgewares Founders Ltd</p>
                </div>
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider mb-1">Account Number</p>
                  <p className="font-display font-bold text-brand-navy text-lg tracking-widest">5600992682</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-brand-muted text-sm leading-relaxed">
                  After making payment, complete the application form with your payment reference and
                  personal details. Our team will review your application and be in touch within 5 business days.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Application CTA ── */}
      <div id="apply">
        <FadeIn direction="up" duration={650}>
          <ApplicationCTA />
        </FadeIn>
      </div>
    </>
  );
}
