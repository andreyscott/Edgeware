import Button from "@/components/ui/Button";

export default function ApplicationCTA() {
  return (
    <section className="bg-brand-navy py-24 md:py-32 relative overflow-hidden" aria-label="Apply">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 70% 50%, #1A2F5E 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
          <span className="text-brand-gold text-xs font-semibold tracking-[0.15em] uppercase">
            Applications Open
          </span>
        </div>

        <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
          Ready to Become a{" "}
          <span className="text-brand-gold">High-Performance Operator?</span>
        </h2>

        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          The Edgewares Operator Fellowship is designed for ambitious professionals who are ready to
          move from competent to exceptional. If you are committed to building, learning, and
          executing at the highest level — we want to hear from you.
        </p>

        {/* Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-12 text-left">
          {[
            "Open to professionals at all career stages",
            "Cohort-based, intensive format",
            "Mentorship from practitioner leaders",
            "Real-world project components",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                <svg className="w-3 h-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/80 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Submit Your Application
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="text-white/60 hover:text-white hover:bg-white/5"
          >
            Have questions? Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
