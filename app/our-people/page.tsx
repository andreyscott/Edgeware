import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the Directors, Advisory Council, and Management team driving Edgewares Holdings' mission to build workforce and institutional capacity across Africa.",
};

interface Person {
  name: string;
  role: string;
  bio: string | string[];
  image?: string; // e.g. "/people/osarhiemen.jpg" — upload images to /public/people/
  initials?: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const DIRECTORS: Person[] = [
  {
    name: "Osarhiemen Iserhienrhien",
    role: "Chairman & CEO",
    initials: "OI",
    image: "/osarhiemen.jpg",
    bio: [
      "Osarhiemen Iserhienrhien is an Institutional Builder and Human Systems Strategist studying and strengthening the systems through which human capability is developed, organisations are strengthened, and institutions endure.",
      "As Founder and CEO of Edgewares Holdings, he leads initiatives focused on workforce readiness, operator development, educational innovation, leadership formation, and institutional capability.",
      "His work explores the intersection of human capital development, systems thinking, organisational effectiveness, and long-term institution building. He is particularly interested in workforce development, educational transformation, organisational systems, leadership development, and ecosystem building.",
      "His long-term vision is to help build globally respected systems that develop people, strengthen institutions, and prepare societies for the future economy.",
    ],
  },
  {
    name: "Dr. David Oziegbe",
    role: "Executive Director",
    initials: "DO",
    image: "/david.jpg",
    bio: [
      "David Oziegbe is a seasoned accounting educator and business leader with over 13 years of experience as Lecturer II at Benson Idahosa University, where he has built a strong reputation for academic excellence, student mentorship, and bridging theoretical accounting principles with real-world financial practice.",
      "A qualified Chartered Accountant (ACA) and full member of The Institute of Chartered Accountants of Nigeria (ICAN) since 2011, David holds an M.Sc. in Accounting from Igbinedion University (2013) and a B.Sc. in Accounting from Benson Idahosa University (2005).",
      "His areas of expertise span financial reporting, accounting education, research methodology, and the application of technology in financial analysis. He is highly proficient in advanced financial modelling and data-driven analysis using Microsoft Excel.",
      "As Executive Director at Edgewares Holdings Ltd, his dual role in academia and corporate leadership allows him to deliver practical, industry-relevant education while contributing to strategic financial and business decisions — knowledge he regularly incorporates into his teaching and mentoring activities.",
    ],
  },
  {
    name: "Tite Noserime",
    role: "Non-Executive Director",
    initials: "TN",
    image: "/tite.jpg",
    bio: [
      "Tite Noserime is a senior market intelligence and commercial leadership professional with over 18 years of experience in the FMCG and insights industry.",
      "As Customer Success Lead for West Africa at NielsenIQ, he has built a career managing global FMCG brands, local market leaders, and high-growth emerging players — delivering measurable commercial value through data-driven strategy, rigorous market analysis, and sustained client engagement.",
      "His professional approach is grounded in servant leadership — empowering people with the knowledge and tools they need to grow and contribute at their highest level. He has consistently led cross-functional teams, driven retailer engagement, and managed high-impact projects across the West African market.",
      "Tite has completed advanced training at Lagos Business School, British Council Nigeria, the Nielsen 360° Leadership Program, and the Metropolitan School of Business Management, UK. He is passionate about building people, shaping strategy, and creating systems that work.",
    ],
  },
];

const ADVISORY_COUNCIL: Person[] = [
  {
    name: "Dr. Paul Orobator",
    role: "Advisory Council",
    initials: "PO",
    image: "/people/paul-orobator.jpg",
    bio: "Dr. Paul Orobator is a seasoned lecturer at the University of Benin, bringing decades of academic rigour and institutional knowledge to Edgewares Holdings' strategic advisory.",
  },
  {
    name: "Mr. Itua Iria",
    role: "Advisory Council",
    initials: "II",
    image: "/people/itua-iria.jpg",
    bio: "A seasoned banking professional, Mr. Itua Iria brings deep financial sector expertise and strategic insight to Edgewares Holdings' advisory function.",
  },
  {
    name: "Mr. Paul Osadiaye",
    role: "Advisory Council",
    initials: "PO",
    image: "/people/paul-osadiaye.jpg",
    bio: "A digital transformation strategist, Mr. Paul Osadiaye advises Edgewares Holdings on technology, innovation, and the digital dimensions of workforce and institutional development.",
  },
];

const MANAGEMENT_CEO = {
  name: "Osarhiemen Iserhienrhien",
  role: "Chief Executive Officer",
  initials: "OI",
  image: "/osarhiemen.jpg",
  bio: [
    "an Institutional Builder | Human Systems Strategist | Studying and strengthening the systems through which human capability is developed, organizations are strengthened, and institutions endure.",
    "He is rigorously studying workforce development strategies focused on strengthening human capital, organizational capability, and educational systems across Africa and emerging markets.",
    "As Founder and CEO of Edgewares Holdings, Osarhiemen Iserhienrhien leads the organisation's day-to-day operations and long-term strategic direction — driving a vision to build globally respected systems that develop people, strengthen institutions, and prepare African societies for the future economy.",
  ],
};

const LEGAL_ADVISERS = {
  firm: "Udochi & Udochi",
  tagline: "Legal Advisers to Edgewares Holdings",
  bio: [
    "Udochi & Udochi is a Nigerian law firm of repute, retained as Legal Advisers to Edgewares Holdings Ltd. The firm provides comprehensive legal counsel across corporate governance, regulatory compliance, contractual matters, and institutional structuring — ensuring that Edgewares Holdings operates on a sound, legally robust foundation at every stage of its growth.",
    "The firm's advisory engagement covers a broad range of matters critical to a growing institutional development organisation: from the structuring of program agreements and partnership frameworks to intellectual property considerations, employment law guidance, and regulatory filings. Their counsel ensures that Edgewares' operations are not only ambitious in vision but disciplined and protected in execution.",
    "Udochi & Udochi brings to its engagement with Edgewares Holdings a deep understanding of Nigeria's legal and corporate environment, combined with a commitment to practical, business-oriented legal advice. Their work ensures that as Edgewares Holdings scales its programs and partnerships, every dimension of its institutional architecture remains legally sound, properly governed, and built to endure.",
  ],
};

/* ─────────────────────────────────────────────
   PERSON CARD COMPONENT
───────────────────────────────────────────── */
function PersonCard({
  person,
  size = "md",
}: {
  person: Person;
  size?: "lg" | "md" | "sm";
}) {
  const initials = person.initials ?? person.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const bioArray = Array.isArray(person.bio) ? person.bio : [person.bio];

  const avatarSize = size === "lg" ? "h-64" : size === "md" ? "h-52" : "h-44";
  const avatarCircle = size === "lg" ? "w-28 h-28 text-4xl" : size === "md" ? "w-24 h-24 text-3xl" : "w-20 h-20 text-2xl";
  const headingSize = size === "lg" ? "text-xl" : size === "md" ? "text-lg" : "text-base";

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
      {/* Photo / Avatar */}
      <div className={`relative bg-brand-navy flex items-center justify-center flex-shrink-0 ${avatarSize}`}>
        {/* Initials — always rendered; sits behind the image */}
        <div className={`absolute inset-0 flex items-center justify-center`}>
          <div className={`rounded-full bg-brand-gold/20 border-2 border-brand-gold/50 flex items-center justify-center font-display font-bold text-brand-gold ${avatarCircle}`}>
            {initials}
          </div>
        </div>
        {/* Photo — covers initials when present */}
        {person.image && (
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="400px"
            className="object-cover object-top relative z-10"
          />
        )}
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-navy/70 to-transparent pointer-events-none z-20" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`font-display font-bold text-brand-navy leading-tight mb-1 ${headingSize}`}>
          {person.name}
        </h3>
        <div className="w-8 h-0.5 bg-brand-gold rounded-full mb-2" />
        <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-4">
          {person.role}
        </p>
        <div className="space-y-3 flex-1">
          {bioArray.map((paragraph, i) => (
            <p key={i} className="text-brand-muted text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function OurPeoplePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="bg-brand-navy pt-40 pb-28 relative overflow-hidden"
        aria-label="Our People hero"
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down" duration={500}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-brand-gold/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold tracking-[0.15em] uppercase">
                The Team
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Our{" "}
              <span className="text-brand-gold">People</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              The individuals behind Edgewares Holdings — united by a shared conviction that
              building people, systems, and institutions is the most important work of our time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Board of Directors ── */}
      <section className="bg-white py-24 md:py-32" aria-label="Board of Directors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Governance"
              title="Board of Directors"
              subtitle="Providing strategic oversight and governance to ensure Edgewares Holdings fulfils its mission with integrity, excellence, and long-term impact."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIRECTORS.map((person, idx) => (
              <FadeIn key={person.name} direction="up" delay={idx * 120} duration={600} className="h-full">
                <PersonCard person={person} size="lg" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisory Council ── */}
      <section className="bg-brand-cream py-24 md:py-32" aria-label="Advisory Council">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Advisory"
              title="Advisory Council"
              subtitle="Distinguished experts who bring depth, experience, and independent perspective to guide Edgewares Holdings' strategic direction."
              align="center"
            />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ADVISORY_COUNCIL.map((person, idx) => (
              <FadeIn key={person.name} direction="up" delay={idx * 100} duration={550} className="h-full">
                <PersonCard person={person} size="md" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Management Team ── */}
      <section className="bg-white py-24 md:py-32" aria-label="Management Team">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Operations"
              title="Management Team"
              subtitle="Leading Edgewares Holdings' day-to-day programs, partnerships, and long-term institutional growth."
              align="center"
            />
          </FadeIn>

          {/* Featured single-person horizontal card */}
          <FadeIn direction="up" duration={650} delay={100}>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-card-hover overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

                {/* Photo panel */}
                <div className="relative bg-brand-navy min-h-[320px] md:min-h-0 flex items-center justify-center">
                  {/* Initials fallback */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-brand-gold/20 border-2 border-brand-gold/50 flex items-center justify-center font-display font-bold text-brand-gold text-5xl">
                      OI
                    </div>
                  </div>
                  {/* Photo */}
                  {MANAGEMENT_CEO.image && (
                    <Image
                      src={MANAGEMENT_CEO.image}
                      alt={MANAGEMENT_CEO.name}
                      fill
                      sizes="280px"
                      className="object-cover object-top relative z-10 opacity-50"
                    />
                  )}
                  {/* Gold gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy/80 to-transparent pointer-events-none z-20" />
                  {/* Right-edge gradient (desktop) */}
                  <div className="hidden md:block absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
                </div>

                {/* Content panel */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  {/* Role badge */}
                  <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-3 py-1 mb-5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                      {MANAGEMENT_CEO.role}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mb-1 leading-tight">
                    {MANAGEMENT_CEO.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-brand-gold rounded-full mb-6" />

                  <div className="space-y-4">
                    {MANAGEMENT_CEO.bio.map((paragraph, i) => (
                      <p key={i} className="text-brand-muted text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Legal Advisers ── */}
      <section className="bg-brand-cream py-24 md:py-32" aria-label="Legal Advisers">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" duration={600}>
            <SectionHeader
              label="Legal"
              title="Legal Advisers"
              subtitle="External legal counsel retained to ensure Edgewares Holdings operates with the highest standards of legal integrity, governance, and institutional rigour."
              align="center"
            />
          </FadeIn>

          <FadeIn direction="up" duration={650} delay={100}>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-card-hover overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                    <span className="text-brand-navy text-[10px] font-bold uppercase tracking-widest">
                      {LEGAL_ADVISERS.tagline}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-navy mb-1 leading-tight">
                    {LEGAL_ADVISERS.firm}
                  </h3>
                  <div className="w-12 h-0.5 bg-brand-gold rounded-full mb-6" />

                  <div className="space-y-4">
                    {LEGAL_ADVISERS.bio.map((paragraph, i) => (
                      <p key={i} className="text-brand-muted text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Decorative emblem panel */}
                <div className="hidden md:flex items-center justify-center bg-brand-navy/3 border-l border-gray-100 px-10">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center">
                      <svg className="w-9 h-9 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <p className="font-display font-bold text-brand-navy text-sm leading-tight max-w-[100px]">
                      Udochi<br />&amp;<br />Udochi
                    </p>
                    <div className="w-8 h-0.5 bg-brand-gold rounded-full" />
                    <p className="text-brand-muted text-[10px] uppercase tracking-widest">Est. Legal Counsel</p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Closing banner ── */}
      <section className="bg-brand-navy py-20" aria-label="Closing statement">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn direction="up" duration={600}>
            <div className="text-4xl text-brand-gold mb-6 font-display">&ldquo;</div>
            <p className="font-display italic text-xl md:text-2xl text-white leading-relaxed mb-6">
              We are not just building an organisation.{" "}
              <span className="text-brand-gold">
                We are building a legacy of capable, values-driven Africans.
              </span>
            </p>
            <div className="w-12 h-0.5 bg-brand-gold rounded-full mx-auto mb-4" />
            <p className="text-white/50 text-sm tracking-wide uppercase">Edgewares Holdings</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
