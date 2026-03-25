"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const quotes = [
  {
    name: "Ananya Sharma",
    role: "Parent, Grade 8",
    text: "The website made our decision effortless — schedules, fees, and ethos, all crystal clear.",
  },
  {
    name: "Rahul Menon",
    role: "Alumni",
    text: "Proud of how the school presents itself now. It matches the quality we experienced inside.",
  },
  {
    name: "Lisa Fernandes",
    role: "Parent council",
    text: "We finally have a digital front door that feels as warm as the teachers at the gate.",
  },
];

export function Testimonials() {
  const { theme } = useTheme();

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Testimonials
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Voices from our community
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`glass-panel flex h-full flex-col rounded-[var(--radius-lg)] p-6 ${
                theme === "trust" ? "border-2 border-[var(--border)]" : ""
              }`}
            >
              <p className="flex-1 text-[var(--text-muted)] leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-[var(--border)] pt-4">
                <p className="font-semibold text-[var(--text)]">{q.name}</p>
                <p className="text-sm text-[var(--text-muted)]">{q.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
