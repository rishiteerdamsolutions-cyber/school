"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const faqItems = [
  {
    q: "How quickly can we launch our school website?",
    a: "Most schools can launch in 7 to 14 days, including content setup, admissions form mapping, and mobile QA.",
  },
  {
    q: "Can the website directly help us get more admissions?",
    a: "Yes. The structure is conversion-first: admissions CTAs, trust sections, parent FAQs, and lead capture paths optimized for campaigns.",
  },
  {
    q: "Will this website be SEO-friendly for local search?",
    a: "Yes. It includes technical SEO foundations, schema-ready structure, clean headings, and pages designed for high-intent search queries.",
  },
  {
    q: "Can we track lead sources like Google Ads and social campaigns?",
    a: "Yes. The admissions form captures UTM parameters so your team can see exactly which campaigns generate real enquiries.",
  },
];

export function FAQ() {
  const { theme } = useTheme();

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
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
            These FAQs are intentionally written for high-intent search and parent decision-making.
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
