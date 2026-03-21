"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function Admissions() {
  const { theme } = useTheme();

  const shell =
    theme === "smart"
      ? "glass-panel border border-white/10"
      : theme === "international"
        ? "border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]"
        : "border-2 border-[var(--primary)] bg-[var(--surface)]";

  return (
    <section
      id="admissions"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className={`relative overflow-hidden rounded-[var(--radius-lg)] p-8 md:flex md:items-center md:justify-between md:gap-12 md:p-12 ${shell}`}
        >
          {theme === "smart" && (
            <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--accent)]/25 blur-3xl" />
          )}
          <div className="relative max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Admissions open
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Reserve a seat for {new Date().getFullYear()}–
              {new Date().getFullYear() + 1}
            </h2>
            <p className="mt-4 text-[var(--text-muted)]">
              Guided tours, scholarship counselling, and a friendly onboarding
              team - and convert that trust into campus visit bookings and
              confirmed admissions.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative mt-8 inline-flex rounded-[var(--radius-md)] bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white md:mt-0"
            style={
              theme === "smart"
                ? { color: "#041016", boxShadow: "0 0 32px -6px var(--glow)" }
                : undefined
            }
          >
            Book a campus visit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
