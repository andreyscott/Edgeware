import Button from "@/components/ui/Button";
import { FELLOWSHIP_FORM_URL } from "@/lib/constants";

const checklist = [
  "Stop learning isolated skills — build real operational capability",
  "Open to professionals at all career stages",
  "Cohort-based, high-accountability intensive format",
  "Mentorship from practitioner leaders",
  "Real-world execution labs and live product assignments",
  "Graduate with a documented Capability Portfolio",
  "Permanent entry into the Edgewares operator community",
];

export default function ApplicationCTA() {
  return (
    <section
      className="bg-brand-navy py-24 md:py-32 relative overflow-hidden"
      aria-label="Apply for the Fellowship"
    >
      {/* Background gradients */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-brand-gold text-xs font-semibold tracking-[0.15em] uppercase">
              Applications Open
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Copy */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              If you are ambitious, curious, and want to build things that{" "}
              <span className="text-brand-gold">scale</span> —
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              The Edgewares Operator Fellowship is designed for people who are ready to move from
              competent to exceptional. This is a high-performance, high-accountability environment.
              We want to hear from you.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-brand-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={FELLOWSHIP_FORM_URL}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Here
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
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

          {/* Right — Fees summary card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
              The Investment
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center justify-between py-4 border-b border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">Application Fee</p>
                  <p className="text-white/40 text-xs mt-0.5">Paid with your application</p>
                </div>
                <p className="font-display font-bold text-2xl text-brand-gold">₦5,000</p>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">Acceptance Fee</p>
                  <p className="text-white/40 text-xs mt-0.5">Upon successful admission</p>
                </div>
                <p className="font-display font-bold text-2xl text-brand-gold">₦65,000</p>
              </div>
            </div>

            {/* Bank details */}
            <div className="bg-white/5 rounded-2xl p-5 space-y-3">
              <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-3">
                Payment Details
              </p>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-xs">Bank</span>
                <span className="text-white text-sm font-semibold">Fidelity Bank</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-xs">Account Name</span>
                <span className="text-white text-sm font-semibold text-right ml-4">
                  Edgewares Founders Ltd
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-xs">Account No.</span>
                <span className="text-white text-sm font-bold font-mono tracking-widest">
                  5600992682
                </span>
              </div>
            </div>

            <p className="text-white/40 text-xs leading-relaxed mt-5">
              After payment, complete the application form with your reference. Our team will review
              your application within 5 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
