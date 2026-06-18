import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { INSIGHTS_ARTICLES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thought leadership, perspectives, and ideas from Edgewares  on workforce development, institutional design, leadership, and the future of Africa's economy.",
};

const categories = ["All", "Workforce", "Leadership", "Institutional", "Education"];

export default function InsightsPage() {
  return (
    <>
      {/* Page Header (Hero) */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-brand-navy" aria-label="Insights header">
        {/* Background photo */}
        <Image
          src="/insights-bg.png"
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
              Perspectives
            </span>
          </FadeIn>
          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
              Insights
            </h1>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Ideas, perspectives, and frameworks from our team on workforce development, leadership, and institutional design across Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-brand-cream py-24 md:py-32" aria-label="Articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <FadeIn direction="up" duration={600}>
            <div className="flex gap-2 mb-12 flex-wrap">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  id={`filter-${cat.toLowerCase()}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    i === 0
                      ? "bg-brand-navy text-white"
                      : "bg-white text-brand-navy border border-gray-200 hover:border-brand-gold hover:text-brand-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Featured article */}
          <div className="mb-8">
            <FadeIn direction="up" duration={650} delay={100}>
              <div className="bg-brand-navy rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer shadow-navy-lg hover:shadow-gold transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-brand-gold text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                        {INSIGHTS_ARTICLES[0].category}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                      {INSIGHTS_ARTICLES[0].title}
                    </h2>
                    <p className="text-white/60 leading-relaxed mb-6">{INSIGHTS_ARTICLES[0].excerpt}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-white/40 text-xs">{INSIGHTS_ARTICLES[0].date}</span>
                      <span className="text-white/40 text-xs">·</span>
                      <span className="text-white/40 text-xs">{INSIGHTS_ARTICLES[0].readTime}</span>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <button
                      id="read-featured-article"
                      className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS_ARTICLES.slice(1).map((article, index) => (
              <FadeIn
                key={article.id}
                direction="up"
                delay={index * 100}
                duration={550}
                className="h-full"
              >
                <article className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer overflow-hidden h-full flex flex-col justify-between">
                  <div>
                    {/* Color top bar */}
                    <div className="h-1.5 bg-brand-gold" />

                    <div className="p-7">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-brand-cream text-brand-navy text-xs font-semibold rounded-full border border-gray-200">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl text-brand-navy leading-tight mb-3 group-hover:text-brand-gold transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed mb-6">{article.excerpt}</p>
                    </div>
                  </div>

                  <div className="px-7 pb-7">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-brand-muted text-xs">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <svg
                        className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Newsletter CTA */}
          <FadeIn direction="up" duration={600} delay={200}>
            <div className="mt-16 bg-white rounded-3xl border border-gray-100 shadow-card p-8 md:p-12 text-center">
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">
                Stay Informed
              </h3>
              <p className="text-brand-muted mb-6 max-w-md mx-auto text-sm">
                Get our latest insights on workforce development, leadership, and Africa&apos;s institutional landscape delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
                />
                <Button href="/contact" variant="primary" size="md">
                  Subscribe
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
