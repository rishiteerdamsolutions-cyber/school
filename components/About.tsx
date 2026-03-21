"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const IMG =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80";

export function About() {
  const { theme } = useTheme();

  if (theme === "smart") {
    return (
      <section
        id="about"
        className="scroll-mt-24 border-b border-white/10 bg-[var(--bg-alt)] py-20 md:py-28"
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
            <p className="mt-5 text-[var(--text-muted)] leading-relaxed">
              We blend rigorous academics with innovation labs, mentorship, and
              wellbeing — a campus experience parents can explore online before
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
            className="relative min-h-[280px] overflow-hidden rounded-[var(--radius-lg)] border border-white/10"
          >
            <Image src={IMG} alt="Students" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>
    );
  }

  if (theme === "international") {
    return (
      <section
        id="about"
        className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
                About the school
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-[var(--text)] md:text-[2.75rem]">
                A calm, ambitious environment for global citizens
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="text-lg leading-relaxed text-[var(--text-muted)]">
                Our programmes emphasise inquiry, integrity, and leadership.
                Small class sizes, dedicated tutors, and a culture of respect
                help every child find their voice — beautifully reflected in a
                website that feels as refined as your campus.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)]">
                  <Image
                    src={IMG}
                    alt="Campus life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-end space-y-6 border-l border-[var(--border)] pl-8">
                  <div>
                    <p className="font-display text-4xl text-[var(--primary)]">
                      40+
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      Co-curricular clubs
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-[var(--primary)]">
                      1:12
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      Average class ratio
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  /* trust */
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b-2 border-[var(--border)] bg-[var(--bg)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <h2 className="font-display text-2xl font-bold text-[var(--text)] md:text-3xl">
              About our school
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
              For over three decades we have served our community with honest
              education, disciplined habits, and care for every child. Our
              teachers know families by name — your website should feel just as
              welcoming and clear.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-alt)] p-4">
                <p className="text-sm font-bold text-[var(--primary)]">
                  Mission
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Affordable excellence rooted in values and service.
                </p>
              </div>
              <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-alt)] p-4">
                <p className="text-sm font-bold text-[var(--accent)]">Vision</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Confident learners who contribute to society.
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
              &ldquo;We believe discipline and kindness go together. A clear
              website helps parents trust us before the first conversation.&rdquo;
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
