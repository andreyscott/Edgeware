import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Edgewares . Located at 9, Great Omoruyi Street, Off PZ Road, Sapele Road, Benin City, Nigeria. Call 08120801769 or 08108161976.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header (Hero) */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-brand-navy" aria-label="Contact header">
        {/* Background photo */}
        <Image
          src="/contact-bg.png"
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
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn direction="up" duration={650} delay={120}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 max-w-4xl mx-auto">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn direction="up" duration={600} delay={240}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              Ready to partner, apply, or simply learn more? We&apos;d love to hear from you. Reach out and our team will respond promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-brand-cream py-24 md:py-32 overflow-hidden" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <FadeIn direction="left" duration={650} className="h-full">
              <div>
                <h2 className="font-display font-bold text-3xl text-brand-navy mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-12">
                  {/* Address */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                      <svg className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm mb-1">Our Office</p>
                      <p className="text-brand-muted text-sm leading-relaxed">{CONTACT.address}</p>
                    </div>
                  </div>

                  {/* Phone numbers */}
                  {CONTACT.phones.map((phone, index) => (
                    <div key={phone} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                        <svg className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy text-sm mb-1">
                          Phone {index + 1}
                        </p>
                        <a
                          href={`tel:+234${phone.slice(1)}`}
                          className="text-brand-muted text-sm hover:text-brand-gold transition-colors duration-200"
                        >
                          {phone}
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* Email */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                      <svg className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm mb-1">Email</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-brand-muted text-sm hover:text-brand-gold transition-colors duration-200"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Reasons to connect */}
                <div className="bg-brand-navy rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <h3 className="font-display font-bold text-lg text-white mb-4">
                    How Can We Help?
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    {[
                      "Apply for the Operator Fellowship",
                      "Partner with us on a development initiative",
                      "Commission a workforce development program",
                      "Request an institutional development consultation",
                      "Media, press, or speaking enquiries",
                    ].map((reason) => (
                      <li key={reason} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white/70 text-sm">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right" duration={650} delay={150}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100 h-full">
                <h2 className="font-display font-bold text-2xl text-brand-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-brand-muted text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24–48 hours.
                </p>

                <form className="space-y-5" aria-label="Contact form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-first-name" className="block text-sm font-medium text-brand-navy mb-1.5">
                        First Name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="contact-first-name"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-last-name" className="block text-sm font-medium text-brand-navy mb-1.5">
                        Last Name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        id="contact-last-name"
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="08100000000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Subject <span className="text-brand-gold">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200 bg-white"
                    >
                      <option value="">Select a topic...</option>
                      <option value="fellowship">Operator Fellowship Application</option>
                      <option value="partnership">Partnership Enquiry</option>
                      <option value="workforce">Workforce Development Program</option>
                      <option value="institutional">Institutional Development</option>
                      <option value="media">Media / Press / Speaking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-brand-navy mb-1.5">
                      Message <span className="text-brand-gold">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-brand-navy placeholder:text-gray-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-brand-muted text-xs text-center">
                    We&apos;ll respond within 24–48 business hours.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
