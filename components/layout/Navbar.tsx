"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-navy border-b border-gray-100 text-brand-navy"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-24 h-24 shrink-0">
              <Image
                src="/logo.svg"
                alt="Edgewares  Logo"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-brand-navy text-lg tracking-tight group-hover:text-brand-gold transition-colors duration-200">
                Edgewares
              </span>
              <span className="text-xs text-brand-muted tracking-widest uppercase font-sans">

              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${isActive
                      ? "text-brand-gold"
                      : "text-brand-navy hover:text-brand-gold"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-gold rounded-full transition-all duration-300 ${isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                        }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/fellowship"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              Apply for Fellowship
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-cream transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-3" : ""
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
        >
          <div className="bg-white rounded-2xl shadow-navy-lg border border-gray-100 p-4 mt-2">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                        ? "bg-brand-navy text-brand-gold"
                        : "text-brand-navy hover:bg-brand-cream"
                        }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/fellowship"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-brand-gold text-white font-semibold text-sm px-5 py-3 rounded-xl"
              >
                Apply for Fellowship
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
