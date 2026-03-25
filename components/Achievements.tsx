"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const rows = [
  { title: "National science fair", detail: "Gold tier — senior team" },
  { title: "Inter-school debate", detail: "City champions, 3 years running" },
  { title: "Sports district meet", detail: "Top 5 across athletics" },
];

export function Achievements() {
  const { theme } = useTheme();

  return (
    <section
      id="achievements"
      className="scroll-mt-28 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Achievements
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
              Highlights parents remember
            </h2>
          </motion.div>
          {theme === "smart" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-full border border-[var(--primary)]/40 px-4 py-2 text-xs font-mono text-[var(--primary)]"
            >
              LIVE · RESULTS DASHBOARD (DEMO)
            </motion.div>
          )}
        </div>
        <div className="mt-12 space-y-4">
          {rows.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: theme === "international" ? 0 : -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6 ${
                theme === "trust" ? "border-l-4 border-l-[var(--accent)]" : ""
              }`}
            >
              <div>
                <p className="font-display text-lg font-semibold">{r.title}</p>
                <p className="text-sm text-[var(--text-muted)]">{r.detail}</p>
              </div>
              <span className="text-sm font-semibold text-[var(--primary)]">
                {theme === "international" ? "Featured" : "Awarded"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
