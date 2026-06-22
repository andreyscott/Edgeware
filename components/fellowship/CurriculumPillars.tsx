import SectionHeader from "@/components/ui/SectionHeader";
import { CURRICULUM_PILLARS } from "@/lib/constants";

export default function CurriculumPillars() {
  return (
    <section className="bg-brand-cream py-24 md:py-32" aria-label="Curriculum — What We Deliver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Deliver"
          title="Ten Domains of Operator Excellence"
          subtitle="The fellowship curriculum is built around ten interlocking domains — each essential, none sufficient alone. Together, they define what it means to operate at the highest level."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CURRICULUM_PILLARS.map((pillar, index) => (
            <div
              key={pillar.number}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Number + Icon row */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-display font-bold text-3xl text-brand-gold leading-none">
                  {pillar.number}
                </span>
                <span className="text-2xl" aria-hidden="true">
                  {pillar.icon}
                </span>
              </div>

              {/* Gold accent bar */}
              <div className="w-8 h-0.5 bg-brand-gold rounded-full mb-4 group-hover:w-12 transition-all duration-300" />

              {/* Title */}
              <h3 className="font-display font-bold text-base text-brand-navy mb-3 leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-brand-muted text-xs leading-relaxed flex-1">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-brand-muted text-sm max-w-2xl mx-auto leading-relaxed">
            These ten domains are not taught in isolation. They are woven together through
            live sessions, execution labs, peer cohort work, and real-world project assignments —
            producing operators who can think, build, lead, and execute without hand-holding.
          </p>
        </div>
      </div>
    </section>
  );
}
