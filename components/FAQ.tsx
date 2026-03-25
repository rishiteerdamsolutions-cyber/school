"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const faqItems = [
  {
    q: "How quickly can we launch our school website?",
    a: "Most schools can launch in 7 to 14 days once content and approvals are ready.",
  },
  {
    q: "Can the website directly help us get more admissions?",
    a: "Yes. It is built to encourage enquiries with clear calls-to-action and trust-focused content.",
  },
  {
    q: "Will parents find us easily online?",
    a: "Yes. The pages are organized clearly so families can discover your school and understand your strengths quickly.",
  },
  {
    q: "Can we run marketing campaigns with this website?",
    a: "Yes. This website is ready for ongoing digital marketing and admissions-focused promotions.",
  },
];

export function FAQ() {
  const { theme } = useTheme();

  return (
    <section
      id="faq"
      className="scroll-mt-28 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Admissions FAQ
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Parent questions that influence admissions decisions
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Simple answers to the questions parents ask before taking admission.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:mt-12">
          {faqItems.map((item, i) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5 ${
                theme === "smart" ? "glass-panel" : ""
              }`}
            >
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-[var(--text)] marker:content-none">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
