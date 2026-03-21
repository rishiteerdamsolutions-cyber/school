"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { THEME_LABELS, THEMES, type ThemeId } from "@/themes";

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

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const bar =
    theme === "smart"
      ? "border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur-xl"
      : theme === "international"
        ? "border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md"
        : "border-b-2 border-[var(--border)] bg-[var(--surface)]";

  return (
    <motion.header
      layout
      className={`sticky top-0 z-[95] ${bar}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-[var(--text)] md:text-xl"
        >
          <span className="text-[var(--primary)]">E‑School</span>{" "}
          <span className="hidden font-normal text-[var(--text-muted)] sm:inline">
            Demo
          </span>
        </Link>

        <nav
          className="hidden flex-1 justify-center lg:flex"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center justify-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-2.5 py-1.5 text-[var(--text-muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-alt)] p-0.5"
            role="group"
            aria-label="Theme"
          >
            {THEMES.map((t) => {
              const active = theme === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTheme(t as ThemeId)}
                  className={`relative rounded-[calc(var(--radius-md)-2px)] px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors sm:px-2.5 sm:text-xs ${
                    active
                      ? "text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                  title={THEME_LABELS[t]}
                  aria-pressed={active}
                >
                  {active && (
                    <motion.span
                      layoutId="theme-pill"
                      className="absolute inset-0 -z-10 rounded-[calc(var(--radius-md)-2px)] bg-[var(--surface)] shadow-sm ring-1 ring-[var(--border)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {t === "smart"
                      ? "Smart"
                      : t === "international"
                        ? "Intl"
                        : "Trust"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
