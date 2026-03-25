"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

/** Distinct, education-focused Unsplash sources (students vs campus). */
const IMG_STUDENTS =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80";
const IMG_CAMPUS =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80";

export function About() {
  const { theme } = useTheme();

  if (theme === "smart") {
    return (
      <section
        id="about"
        className="scroll-mt-28 border-b border-white/10 bg-[var(--bg-alt)] py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass-panel relative overflow-hidden rounded-[var(--radius-lg)] p-8 md:p-10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--primary)]/20 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              About the school
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              Built for tomorrow&apos;s learners
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
              We blend rigorous academics with innovation labs, mentorship, and
              wellbeing - a campus experience parents can explore online before
              they ever visit in person.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-[var(--text)]">
              {[
                "STEM + arts balance with real-world projects",
                "Counselling and career pathways from middle school",
                "Safe, monitored digital learning infrastructure",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--primary)]">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.08 }}
            className="relative min-h-[300px] overflow-hidden rounded-[var(--radius-lg)] border border-white/10 md:min-h-[380px]"
          >
            <Image
              src={IMG_STUDENTS}
              alt="Students collaborating in the classroom"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Our students
              </p>
              <p className="font-display mt-2 text-xl font-bold leading-snug text-white md:text-2xl">
                Curious minds, guided projects, and space to grow together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (theme === "international") {
    return (
      <section
        id="about"
        className="scroll-mt-28 border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
                Why parents choose this school
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-[var(--text)] md:text-[2.75rem]">
                A calm, trusted experience for modern families
              </h2>
              <p className="mt-6 text-[var(--text-muted)]">
                The website looks premium, feels clear on mobile, and gives
                parents the confidence to take the next step quickly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)]">
                  <Image
                    src={IMG_CAMPUS}
                    alt="Campus walkways and school buildings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
                      Campus life
                    </p>
                    <p className="font-display mt-2 text-lg font-normal leading-snug text-white md:text-xl">
                      Open walkways, green quads, and room to breathe between
                      classes.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    ["Quick parent enquiries", "Clear actions that encourage families to contact your team.", "31%"],
                    ["Stronger first impression", "Story, results, and trust signals presented beautifully.", "2.1x"],
                    ["Better follow-up quality", "Parents share what they need before the counselling call.", "46%"],
                  ].map(([title, desc, metric]) => (
                    <div
                      key={title}
                      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)]"
                    >
                      <p className="font-display text-xl text-[var(--primary)]">{metric}</p>
                      <p className="mt-1 text-sm font-semibold text-[var(--text)]">{title}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="scroll-mt-28 border-b-2 border-[var(--border)] bg-[var(--bg)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--text)] md:text-3xl">
              Why this website wins admissions for traditional schools
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              Families decide emotionally first and logically next. This layout
              gives both: a familiar school tone plus modern clarity on fees,
              facilities, achievements, and enquiry response.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-alt)] p-4">
                <p className="text-sm font-bold text-[var(--primary)]">
                  Local search visibility
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Built to rank for nearby school intent and capture calls.
                </p>
              </div>
              <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-alt)] p-4">
                <p className="text-sm font-bold text-[var(--accent)]">
                  Faster admissions closure
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Structured FAQs and lead forms reduce parent hesitation.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="rounded-[var(--radius-md)] border-2 border-[var(--accent)] bg-[var(--surface)] p-6"
          >
            <p className="text-center text-xs font-bold uppercase tracking-wide text-[var(--accent)]">
              Principal&apos;s message
            </p>
            <div className="relative mx-auto mt-4 h-24 w-24 overflow-hidden rounded-full border-2 border-[var(--border)]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Principal"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-[var(--text)]">
              Dr. Meera Krishnan
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              &ldquo;Parents trust schools that communicate clearly. This website helps
              us answer doubts early and convert visits into admissions.&rdquo;
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
