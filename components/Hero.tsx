"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const SMART_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4";
const INTERNATIONAL_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const REGULAR_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4";

function ThemeHeroToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const options = [
    { id: "smart" as const, label: "Smart School" },
    { id: "international" as const, label: "International School" },
    { id: "trust" as const, label: "Regular School" },
  ];

  return (
    <div
      className={`inline-flex w-full max-w-3xl flex-col gap-2 rounded-2xl bg-black/25 p-2 backdrop-blur-md sm:flex-row ${className}`}
    >
      {options.map((o) => {
        const active = theme === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => setTheme(o.id)}
            className={`relative w-full rounded-xl px-5 py-4 text-left transition-transform sm:text-center ${
              active ? "text-black" : "text-white"
            }`}
          >
            {active && (
              <motion.span
                layoutId="hero-theme-pill"
                className="absolute inset-0 rounded-xl bg-white"
                transition={{ type: "spring", stiffness: 420, damping: 36 }}
              />
            )}
            <span className="relative z-10 block text-sm font-semibold uppercase tracking-wide">
              {o.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function Hero() {
  const { theme } = useTheme();

  if (theme === "smart") {
    return (
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#21346e]"
      >
        <div className="relative z-10 mx-auto mt-24 max-w-6xl px-6 pt-36 md:pt-52">
          <ThemeHeroToggle className="mt-0" />

          <h1
            className="mt-10 font-display text-6xl font-bold uppercase leading-[0.98] tracking-[-2px] text-white sm:text-8xl md:text-[100px]"
            style={{ letterSpacing: "-3px" }}
          >
            <span className="block">NEW ERA</span>
            <span className="block">OF LEARNING</span>
            <span className="block">STARTS HERE</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-10"
          >
            <motion.a
              href="#contact"
              className="relative inline-flex h-[65px] w-[184px] items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 184 65"
                fill="none"
                aria-hidden
              >
                <path
                  d="M20 6C9.5 12 4 22 4 32.5C4 51 16 61 34 61H150C168 61 180 51 180 32.5C180 14 168 4 150 4H44C31 4 25 4 20 6Z"
                  fill="white"
                />
              </svg>
              <span className="relative z-10 font-display text-[20px] font-bold uppercase text-[#161a20]">
                GET STARTED
              </span>
            </motion.a>
          </motion.div>
        </div>

        <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={SMART_VIDEO}
        />
      </section>
    );
  }

  if (theme === "international") {
    return (
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[hsl(201_100%_13%)]"
      >
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-2 px-6 pb-40 pt-40 text-center md:gap-3 md:py-[90px] md:pt-44">
          <ThemeHeroToggle className="mx-auto justify-center sm:justify-start" />
          <h1
            className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-white sm:text-7xl md:text-8xl"
            style={{ fontFamily: "var(--font-heading-intl), serif" }}
          >
            Where{" "}
            <em className="not-italic text-[var(--text-muted)]">young minds</em>{" "}
            rise{" "}
            <em className="not-italic text-[var(--text-muted)]">
              through calm, clear admissions.
            </em>
          </h1>
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            A quiet, confident first impression for families choosing your school.
          </p>
          <a
            href="#contact"
            className="liquid-glass animate-fade-rise-delay-2 mt-10 cursor-pointer rounded-full px-14 py-5 text-base text-white ring-1 ring-inset ring-white/20 transition-transform hover:scale-[1.03]"
          >
            Begin Journey
          </a>
        </div>

        <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={INTERNATIONAL_VIDEO}
        />
      </section>
    );
  }

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-2 px-6 pb-40 pt-40 text-center text-white md:gap-3 md:py-[90px] md:pt-44">
        <ThemeHeroToggle className="mx-auto justify-center sm:justify-start" />
        <h1
          className="animate-fade-rise max-w-7xl text-5xl leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "var(--font-heading-intl), serif" }}
        >
          Focus in a Distracted World
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
          Clear routines, honest communication, and room to grow—without the
          noise.
        </p>
        <a
          href="#contact"
          className="animate-fade-rise-delay-2 mt-10 rounded-full border-2 border-white/85 bg-black/40 px-14 py-5 text-base font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform hover:scale-[1.03] hover:bg-black/55"
        >
          Begin Journey
        </a>
      </div>

      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={REGULAR_VIDEO}
      />
    </section>
  );
}
