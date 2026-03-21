"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const stats = [
  { label: "Students", value: "1200+" },
  { label: "Faculty", value: "25+" },
  { label: "Results", value: "100%" },
];

export function StatsStrip() {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === "smart"
          ? "grid grid-cols-3 gap-3 sm:gap-6"
          : theme === "international"
            ? "grid grid-cols-3 gap-4 divide-x divide-[var(--border)] sm:gap-10"
            : "grid grid-cols-3 gap-2 rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] p-4 sm:gap-6 sm:p-6"
      }
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.45 }}
          className={
            theme === "international"
              ? "px-2 text-center first:pl-0 last:pr-0 sm:px-6"
              : "text-center"
          }
        >
          <p
            className={`font-display text-2xl font-bold sm:text-3xl ${
              theme === "smart" ? "text-[var(--primary)]" : "text-[var(--primary)]"
            }`}
          >
            {s.value}
          </p>
          <p className="mt-1 text-xs text-[var(--text-muted)] sm:text-sm">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
