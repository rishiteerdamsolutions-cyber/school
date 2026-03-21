"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { StatsStrip } from "@/components/StatsStrip";

const SmartHeroCanvas = dynamic(
  () => import("@/components/hero/SmartHeroCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-500/20" />
    ),
  },
);

const INTL_HERO =
  "https://images.unsplash.com/photo-1580582932707-520aed937d7c?auto=format&fit=crop&w=2000&q=80";
const TRUST_HERO =
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  const { theme } = useTheme();

  const cta = (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-[box-shadow] hover:shadow-xl"
      style={
        theme === "smart"
          ? {
              boxShadow: "0 0 40px -8px var(--glow)",
              color: "#041016",
            }
          : { color: "#fff" }
      }
    >
      Book admissions strategy call
    </motion.a>
  );

  if (theme === "smart") {
    return (
      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.2),transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(167,139,250,0.18),transparent_50%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex rounded-full border border-[var(--primary)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--primary)]"
            >
              Futuristic campus web
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="font-display text-4xl font-black leading-[1.05] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl"
            >
              Launch your school website in{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                7 days
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-xl text-lg text-[var(--text-muted)]"
            >
              Turn website visitors into admission enquiries with high-trust
              storytelling, smart lead capture, and conversion-focused design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {cta}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-12 max-w-lg"
            >
              <div className="glass-panel rounded-[var(--radius-lg)] p-5">
                <StatsStrip />
              </div>
            </motion.div>
          </div>
          <div className="relative h-[min(52vh,420px)] w-full md:h-[min(60vh,520px)]">
            <SmartHeroCanvas />
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 }}
                className="glass-panel absolute right-3 top-4 rounded-[var(--radius-md)] p-3 text-xs text-[var(--text)] md:right-6 md:top-6"
              >
                <p className="font-semibold text-[var(--primary)]">Lead Funnel</p>
                <p className="mt-1 text-[var(--text-muted)]">Visit → Enquiry → Campus Tour → Admission</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-panel absolute bottom-4 left-3 rounded-[var(--radius-md)] p-3 text-xs md:bottom-6 md:left-6"
              >
                <p className="font-semibold text-[var(--primary)]">Realtime Snapshot</p>
                <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1 text-[var(--text-muted)]">
                  <span>Enquiries: 184</span>
                  <span>Tours: 62</span>
                  <span>Hot leads: 29</span>
                  <span>Admissions: 17</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "international") {
    return (
      <section id="top" className="relative min-h-[82vh] border-b border-[var(--border)]">
        <div className="absolute inset-0">
          <Image
            src={INTL_HERO}
            alt="Premium school campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/94 via-[var(--primary)]/70 to-[var(--primary)]/25" />
        </div>
        <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-4 py-20 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Premium international admissions funnel
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              Win premium parent trust from the first click
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Position your school as the clear first choice with an elegant
              digital experience that drives enquiries, visits, and admissions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">{cta}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-14 grid max-w-5xl gap-4 md:grid-cols-4"
          >
            {[
              ["2.4x", "More enquiry submissions"],
              ["38%", "Lower cost per lead"],
              ["72h", "Faster parent follow-up"],
              ["24/7", "Always-on admissions capture"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[var(--radius-md)] border border-white/25 bg-white/95 p-5 text-[var(--text)] shadow-[var(--shadow-soft)]"
              >
                <p className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {value}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="top"
      className="border-b-2 border-[var(--border)] bg-[var(--bg-alt)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-7 md:grid-cols-[1.1fr_1fr] md:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative min-h-[260px] overflow-hidden rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]"
          >
            <Image
              src={TRUST_HERO}
              alt="School building"
              fill
              className="object-cover"
              sizes="(min-width:768px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-[var(--radius-sm)] bg-white/95 px-3 py-2 text-xs font-semibold text-[var(--primary)]">
              140+ fresh enquiries in last 30 days
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--accent)]">
                Admissions-first school website
              </p>
              <h1 className="font-display mt-2 text-3xl font-bold text-[var(--text)] sm:text-4xl">
                Bring more parents from search to school visit
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
                Build confidence for families with clear fees information,
                principal message, notice board updates, and one-click enquiry
                journeys that work on every phone.
              </p>
              <div className="mt-7">{cta}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Local SEO", "Rank for school near me"],
                  ["Fast forms", "Capture parent enquiries"],
                  ["Trust content", "Convert to campus visits"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded border border-[var(--border)] p-3">
                    <p className="text-sm font-bold text-[var(--primary)]">{title}</p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
