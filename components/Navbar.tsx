"use client";

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

        <nav
          className={`flex-1 justify-center ${
            theme === "smart" ? "hidden lg:flex" : "hidden md:flex"
          }`}
          aria-label="Primary"
        >
          <ul
            className={`flex items-center text-sm ${
              theme === "international" || theme === "trust"
                ? "gap-10"
                : "flex-wrap justify-center gap-1"
            }`}
          >
            {(theme === "international" || theme === "trust"
              ? cinematicLinks
              : links
            ).map((l) => (
              <li key={l.href}>
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
    </motion.header>
  );
}
