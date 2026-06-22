"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { FELLOWSHIP_FORM_URL } from "@/lib/constants";

/* ─────────────────────────────────────────────
   NAV STRUCTURE
   Fellowship and Insights are nested under
   Initiatives as a hover dropdown on desktop.
───────────────────────────────────────────── */
const PRIMARY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our People", href: "/our-people" },
  { label: "Contact", href: "/contact" },
];

const INITIATIVES_GROUP = {
  label: "Initiatives",
  href: "/initiatives",
  children: [
    {
      label: "Initiatives",
      href: "/initiatives",
      description: "All programmes & projects",
      icon: "🏛️",
    },
    {
      label: "Operator Fellowship",
      href: "/fellowship",
      description: "Our flagship 12-week program",
      icon: "🎓",
    },
    {
      label: "Insights",
      href: "/insights",
      description: "Research, articles & thinking",
      icon: "📝",
    },
  ],
};

// All links for mobile drawer (flat list)
const ALL_MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our People", href: "/our-people" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Fellowship", href: "/fellowship" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isInitiativesActive =
    ["/initiatives", "/fellowship", "/insights"].some((p) =>
      pathname.startsWith(p)
    );

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-navy border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-14 h-14 shrink-0">
              <Image
                src="/logo.svg"
                alt="Edgewares Logo"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display font-bold text-brand-navy text-lg tracking-tight group-hover:text-brand-gold transition-colors duration-200 hidden sm:block">
              Edgewares
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden md:flex items-center gap-0.5">

            {/* Primary links */}
            {PRIMARY_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group inline-flex items-center ${
                      isActive ? "text-brand-gold" : "text-brand-navy hover:text-brand-gold"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-gold rounded-full transition-all duration-300 ${
                        isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}

            {/* ── Initiatives dropdown ── */}
            <li
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              {/* Trigger */}
              <button
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group inline-flex items-center gap-1 ${
                  isInitiativesActive ? "text-brand-gold" : "text-brand-navy hover:text-brand-gold"
                }`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Initiatives
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-gold rounded-full transition-all duration-300 ${
                    isInitiativesActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 transition-all duration-200 origin-top ${
                  dropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                role="menu"
              >
                {/* Arrow tip */}
                <div className="flex justify-center mb-1">
                  <div className="w-2.5 h-2.5 bg-white border-l border-t border-gray-100 rotate-45 shadow-sm" />
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-navy-lg overflow-hidden">
                  {INITIATIVES_GROUP.children.map((child, i) => {
                    const isChildActive = pathname.startsWith(child.href);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-start gap-3.5 px-4 py-3.5 transition-all duration-150 group/item ${
                          i < INITIATIVES_GROUP.children.length - 1
                            ? "border-b border-gray-50"
                            : ""
                        } ${
                          isChildActive
                            ? "bg-brand-cream"
                            : "hover:bg-brand-cream"
                        }`}
                      >
                        <span className="text-lg mt-0.5 shrink-0">{child.icon}</span>
                        <div className="min-w-0">
                          <p
                            className={`text-sm font-semibold leading-tight ${
                              isChildActive ? "text-brand-gold" : "text-brand-navy group-hover/item:text-brand-gold"
                            } transition-colors duration-150`}
                          >
                            {child.label}
                          </p>
                          <p className="text-xs text-brand-muted mt-0.5 leading-snug">
                            {child.description}
                          </p>
                        </div>
                        {isChildActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={FELLOWSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 whitespace-nowrap"
            >
              Apply for Fellowship
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-cream transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-3" : ""}`} />
            </div>
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[600px] pb-6" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-navy-lg border border-gray-100 p-3 mt-2">
            <ul className="flex flex-col gap-0.5">
              {ALL_MOBILE_LINKS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                const isSubItem = link.href === "/fellowship" || link.href === "/insights";
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                        isSubItem ? "pl-8" : ""
                      } ${
                        isActive
                          ? "bg-brand-navy text-brand-gold"
                          : "text-brand-navy hover:bg-brand-cream"
                      }`}
                    >
                      {isSubItem && (
                        <span className="w-1 h-1 rounded-full bg-brand-gold/40 shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 pt-3 border-t border-gray-100 px-1">
              <Link
                href={FELLOWSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-gold text-white font-semibold text-sm px-5 py-3 rounded-xl w-full hover:bg-brand-gold-dark transition-colors duration-200"
              >
                Apply for Fellowship
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
