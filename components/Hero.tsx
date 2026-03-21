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
      href="#board"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-[box-shadow] hover:shadow-xl"
      style={
        theme === "smart"
          ? {
              boxShadow: "0 0 40px -8px var(--glow)",
              color: "#041016",
            }
          : theme === "trust"
            ? { color: "#fff" }
            : { color: "#fff" }
      }
    >
      View live demo
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
              Modern, premium & affordable websites for schools — switch themes
              instantly to show parents what excellence looks like online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {cta}
              <span className="text-sm text-[var(--text-muted)]">
                Alt+1 · Smart theme
              </span>
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
          </div>
        </div>
      </section>
    );
  }

  if (theme === "international") {
    return (
      <section id="top" className="relative min-h-[78vh] border-b border-[var(--border)]">
        <div className="absolute inset-0">
          <Image
            src={INTL_HERO}
            alt="School campus"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/92 via-[var(--primary)]/75 to-[var(--primary)]/25" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Premium school presence
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
              Launch your school website in 7 days
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Modern, premium & affordable websites for schools — crafted for
              international families who expect clarity and elegance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {cta}
              <span className="text-sm text-white/75">Alt+2 · International</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-14 max-w-3xl rounded-[var(--radius-lg)] bg-white/95 p-6 text-[var(--text)] shadow-[var(--shadow-soft)] backdrop-blur-sm md:p-8"
          >
            <StatsStrip />
          </motion.div>
        </div>
      </section>
    );
  }

  /* trust */
  return (
    <section
      id="top"
      className="border-b-2 border-[var(--border)] bg-[var(--bg-alt)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:flex md:items-stretch md:gap-10 md:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative mb-8 h-56 w-full overflow-hidden rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] md:mb-0 md:h-auto md:min-h-[280px] md:w-[42%]"
        >
          <Image
            src={TRUST_HERO}
            alt="School building"
            fill
            className="object-cover"
            sizes="(min-width:768px) 40vw, 100vw"
            priority
          />
        </motion.div>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[var(--radius-md)] border-2 border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--accent)]">
              Welcome to our school
            </p>
            <h1 className="font-display mt-2 text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Launch your school website in 7 days
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              Modern, premium & affordable websites for schools — simple,
              trustworthy, and easy for every parent to use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {cta}
              <span className="text-sm text-[var(--text-muted)]">
                Alt+3 · Trust theme
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6"
          >
            <StatsStrip />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
