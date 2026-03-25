"use client";

import { motion } from "framer-motion";

/**
 * Fixed under the navbar, centered. Uses a dark glass pill so the line stays
 * readable on bright Smart / International hero frames (not only Regular).
 */
export function UrgencyBadge() {
  return (
    <motion.div
      layout
      className="pointer-events-none fixed left-1/2 top-[max(6.75rem,calc(env(safe-area-inset-top,0px)+5.25rem))] z-[85] -translate-x-1/2 rounded-full border border-white/45 bg-black/60 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white shadow-[0_8px_28px_rgba(0,0,0,0.5)] backdrop-blur-md md:top-[max(7.25rem,calc(env(safe-area-inset-top,0px)+5.75rem))] md:text-sm"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.45 }}
      role="status"
    >
      Admissions closing soon — limited seats
    </motion.div>
  );
}
