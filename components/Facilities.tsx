"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const items = [
  { title: "Smart classrooms", desc: "Interactive panels & secure Wi‑Fi." },
  { title: "Science & robotics", desc: "Labs built for curiosity." },
  { title: "Sports complex", desc: "Track, courts, and coaching." },
  { title: "Library & media", desc: "Quiet study and digital archives." },
];

export function Facilities() {
  const { theme } = useTheme();

  return (
    <section
      id="facilities"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Facilities
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Spaces that support every talent
          </h2>
        </motion.div>
        <div
          className={
            theme === "international"
              ? "mt-14 grid gap-8 md:grid-cols-2"
              : "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {items.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={
                theme === "trust" ? { y: -2 } : { y: -6, scale: 1.01 }
              }
              className={`glass-panel rounded-[var(--radius-lg)] p-6 ${
                theme === "smart"
                  ? "hover:shadow-[0_0_40px_-12px_var(--glow)]"
                  : ""
              }`}
            >
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
