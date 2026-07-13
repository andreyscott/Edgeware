import Link from "next/link";
import Image from "next/image";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = NAV_LINKS.filter((l) => l.href !== "/");

  return (
    <footer className="bg-brand-navy text-white">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Ready to build with us?
              </h3>
              <p className="text-white/60 text-sm">
                Join our fellowship or partner with us to transform workforce capacity across Africa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/fellowship"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 shadow-gold hover:shadow-gold-lg"
              >
                Apply for Fellowship
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-brand-gold text-white hover:text-brand-gold font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image src="/logo.svg" alt="Edgewares Logo" fill sizes="80px" className="object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-lg">Edgewares</span>
                <span className="text-xs text-white/50 tracking-widest uppercase"></span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              A workforce and institutional development ecosystem committed to building people,
              systems, and the future across Africa.
            </p>
            {/* Gold accent line */}
            <div className="mt-6 h-0.5 w-16 bg-brand-gold rounded-full" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/60 text-sm leading-relaxed">{CONTACT.address}</p>
              </div>
              {CONTACT.phones.map((phone) => (
                <div key={phone} className="flex gap-3">
                  <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:+234${phone.slice(1)}`} className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200">
                    {phone}
                  </a>
                </div>
              ))}
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200">
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Building People. Building Systems. Building The Future.
          </p>
        </div>
      </div>
    </footer>
  );
}
