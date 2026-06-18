import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { ABOUT_BELIEFS, ABOUT_INTERSECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Edgewares | Strengthening the Systems of Human Capability",
  description:
    "Edgewares Holdings is a human capability and institutional development platform focused on strengthening the systems through which people, organizations, and societies develop capability.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header (Hero) */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-brand-navy" aria-label="About header">
        {/* Background photo */}
        <Image
          src="/about-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay matching Home Hero style */}
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

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 text-center">
          <FadeIn direction="down" duration={500}>
            <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              About Edgewares
            </span>
          </FadeIn>
          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-8 max-w-4xl mx-auto">
              Strengthening the Systems That Develop Human Capability
            </h1>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              Edgewares Holdings is a human capability and institutional development platform focused on strengthening the systems through which people, organizations, and societies develop capability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Conviction Callout */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden" aria-label="Core Conviction">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up" duration={650}>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-brand-gold/5 text-[12rem] font-serif select-none pointer-events-none">
              “
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-brand-navy leading-relaxed relative z-10 italic max-w-3xl mx-auto">
              &ldquo;We believe that societies prosper when capable people build effective organizations and enduring institutions.&rdquo;
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mt-8" />
          </FadeIn>
        </div>
      </section>

      {/* Focus Areas (Intersection Grid) */}
      <section className="bg-brand-cream py-24 md:py-32 relative overflow-hidden" aria-label="Focus Areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Our Focus Areas"
              title="At the Intersection of Development"
              subtitle="Our work sits at the intersection of six key development sectors to build robust capacity structures."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ABOUT_INTERSECTIONS.map((item, idx) => (
              <FadeIn
                key={idx}
                direction="up"
                delay={idx * 100}
                duration={550}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-xl mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-navy-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" duration={600} delay={200}>
            <div className="max-w-3xl mx-auto bg-brand-navy rounded-2xl p-8 md:p-10 shadow-navy relative overflow-hidden group">
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <p className="text-white text-base md:text-lg leading-relaxed text-center font-medium relative z-10">
                Through research, programs, partnerships, and innovation, we seek to contribute to stronger capability systems across Africa and beyond.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden" aria-label="Vision and Mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <FadeIn direction="left" duration={650} className="h-full">
              <div className="bg-brand-cream rounded-3xl p-10 md:p-12 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[320px] h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500" />
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-lg">
                      👁️
                    </span>
                    <span className="font-semibold text-brand-gold text-xs tracking-[0.25em] uppercase">
                      Our Vision
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-navy leading-snug mb-8">
                    To contribute to a future where capable people, effective organizations, and enduring institutions drive societal progress across Africa and beyond.
                  </h3>
                </div>
                <div className="w-16 h-1 bg-brand-gold rounded-full" />
              </div>
            </FadeIn>

            {/* Mission Card */}
            <FadeIn direction="right" duration={650} className="h-full">
              <div className="bg-brand-navy rounded-3xl p-10 md:p-12 shadow-navy-lg hover:shadow-navy transition-all duration-300 flex flex-col justify-between relative overflow-hidden group text-white min-h-[320px] h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500" />
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-10 rounded-xl bg-white/10 text-brand-gold flex items-center justify-center text-lg">
                      🎯
                    </span>
                    <span className="font-semibold text-brand-gold text-xs tracking-[0.25em] uppercase">
                      Our Mission
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-snug mb-8">
                    To strengthen the systems through which human capability is developed, workforce readiness is improved, organizations are strengthened, and institutions endure.
                  </h3>
                </div>
                <div className="w-16 h-1 bg-brand-gold rounded-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="bg-brand-cream-dark py-24 md:py-32" aria-label="Our Beliefs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Our Beliefs"
              title="Foundational Convictions"
              subtitle="The fundamental principles that guide our work, strategies, and operational commitments."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {ABOUT_BELIEFS.map((belief, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={index * 100}
                duration={550}
                className="h-full"
              >
                <div className="flex gap-6 items-start bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="font-display font-bold text-4xl md:text-5xl text-brand-gold/30 group-hover:text-brand-gold transition-colors duration-300 select-none">
                    {belief.number}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-brand-navy mb-3 group-hover:text-brand-navy-light transition-colors duration-300">
                      {belief.statement}
                    </h3>
                    <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t border-gray-100" aria-label="CTA">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn direction="up" duration={600}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-6">
              Partner With Edgewares Holdings
            </h2>
            <p className="text-brand-muted md:text-lg mb-10 max-w-2xl mx-auto">
              Whether you want to build capability programs, launch local workforce initiatives, or co-design modern systems, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Button href="/fellowship" variant="primary" size="lg">
                Apply for Fellowship
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
