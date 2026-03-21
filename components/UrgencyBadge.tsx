"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function UrgencyBadge() {
  const { theme } = useTheme();

  const base =
    theme === "smart"
      ? "border border-[var(--primary)]/40 bg-[var(--surface)] text-[var(--text)] shadow-[0_0_24px_-4px_var(--glow)]"
      : theme === "international"
        ? "border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)] shadow-[var(--shadow-soft)]"
        : "border-2 border-[var(--accent)] bg-[#fff8e6] text-[var(--text)]";

  return (
    <motion.div
      layout
      className={`pointer-events-none fixed left-1/2 top-[max(4.5rem,env(safe-area-inset-top,0px)+3.25rem)] z-[85] -translate-x-1/2 rounded-full px-4 py-1.5 text-center text-xs font-semibold tracking-wide md:text-sm ${base}`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.45 }}
      role="status"
    >
      Admissions closing soon — limited seats
    </motion.div>
  );
}
