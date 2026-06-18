import SectionHeader from "@/components/ui/SectionHeader";
import { CURRICULUM_PILLARS } from "@/lib/constants";

export default function CurriculumPillars() {
  return (
    <section className="bg-brand-cream py-24 md:py-32" aria-label="Curriculum Pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Curriculum"
          title="Five Pillars of Operator Excellence"
          subtitle="The fellowship curriculum is built around five interlocking domains—each essential, none sufficient alone."
          align="center"
        />

        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/20 -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {CURRICULUM_PILLARS.map((pillar, index) => (
              <div
                key={pillar.number}
                className={`relative group ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:mt-24"
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden lg:flex absolute top-0 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-gold -translate-y-0 items-center justify-center" style={{
                  [index % 2 === 0 ? "right" : "left"]: "-2.25rem",
                }} />

                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <span className="font-display font-bold text-3xl text-brand-gold flex-shrink-0">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
