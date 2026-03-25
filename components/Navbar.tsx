"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#admissions", label: "Admissions" },
  { href: "#facilities", label: "Facilities" },
  { href: "#achievements", label: "Highlights" },
  { href: "#board", label: "Notice Board" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

/** Minimal cinematic nav (International + Regular hero spec). */
const cinematicLinks: { href: string; label: string }[] = [
  { href: "#top", label: "Home" },
  { href: "#facilities", label: "Campus" },
  { href: "#about", label: "About" },
  { href: "#board", label: "News" },
  { href: "#contact", label: "Reach us" },
];

export function Navbar() {
  const { theme } = useTheme();
  const plansHref = `/quotation?theme=${theme}`;
  const plansItem = { href: plansHref, label: "Plans" };
  const trustNavItems = [cinematicLinks[0], plansItem, ...cinematicLinks.slice(1)];
  const internationalNavItems = [
    cinematicLinks[0],
    plansItem,
    ...cinematicLinks.slice(1),
    { href: "/crm", label: "Leads" },
  ];
  const smartNavItems = [...links, plansItem, { href: "/crm", label: "Leads" }];

  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems =
    theme === "trust"
      ? trustNavItems
      : theme === "international"
        ? internationalNavItems
        : smartNavItems;

  const bar =
    theme === "smart"
      ? "border-b border-white/10 bg-[#21346e]/35 backdrop-blur-md"
      : "border-b border-white/10 bg-transparent";

  return (
    <motion.header
      layout
      className={`fixed top-0 left-0 right-0 z-[95] ${bar}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 md:px-8 md:py-6">
        <Link
          href="#top"
          className={`font-bold tracking-tight text-white ${
            theme === "international" || theme === "trust"
              ? "text-2xl md:text-3xl"
              : "font-display text-lg md:text-xl"
          }`}
          style={
            theme === "international" || theme === "trust"
              ? { fontFamily: "var(--font-heading-intl), serif" }
              : undefined
          }
        >
          e‑School<sup className="text-xs font-normal">®</sup>
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>

        <nav className="flex-1 justify-center hidden md:flex" aria-label="Primary">
          <ul
            className={`flex items-center text-sm ${
              theme === "international" || theme === "trust"
                ? "gap-10"
                : "flex-wrap justify-center gap-1"
            }`}
          >
            {navItems.map((l) => (
              <li key={l.href}>
                {l.href.startsWith("/") ? (
                  <Link
                    href={l.href}
                    className={`rounded-md px-2.5 py-1.5 transition-colors ${
                      theme === "international"
                        ? "text-white/90 hover:text-white"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className={`rounded-md px-2.5 py-1.5 transition-colors ${
                      theme === "trust"
                        ? "text-white transition-opacity hover:opacity-80"
                        : theme === "international"
                          ? l.href === "#top"
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                          : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className={
            theme === "international" || theme === "trust"
              ? "liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03] sm:inline-flex"
              : "hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#161a20] transition-transform hover:scale-[1.03] sm:inline-flex"
          }
        >
          Begin Journey
        </a>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full z-[96] border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-xl p-4 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((l) => (
              <Link
                key={l.href}
                href={l.href.startsWith("/") ? l.href : `/${l.href}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className={
                theme === "international" || theme === "trust"
                  ? "liquid-glass mt-1 block w-full rounded-full px-6 py-2.5 text-center text-sm text-white transition-transform hover:scale-[1.03]"
                  : "mt-1 block w-full rounded-full bg-white px-6 py-2.5 text-center text-sm font-semibold text-[#161a20] transition-transform hover:scale-[1.03]"
              }
            >
              Begin Journey
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
