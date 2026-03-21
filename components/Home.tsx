"use client";

import { AnimatePresence, motion } from "framer-motion";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Admissions } from "@/components/Admissions";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Facilities } from "@/components/Facilities";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { InteractiveBoard } from "@/components/InteractiveBoard";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Testimonials } from "@/components/Testimonials";
import { UrgencyBadge } from "@/components/UrgencyBadge";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useTheme } from "@/context/ThemeContext";

export function Home() {
  const { theme, mounted } = useTheme();

  return (
    <div className="page-grain min-h-full">
      <ScrollProgress />
      <Navbar />
      <UrgencyBadge />
      <WhatsAppFab />
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={mounted ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <main>
            <Hero />
            <About />
            <Admissions />
            <Facilities />
            <Achievements />
            <InteractiveBoard />
            <Gallery />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-10 text-center text-sm text-[var(--text-muted)]">
            <p className="font-display text-[var(--text)]">
              Aideveloper India - School Growth Websites
            </p>
            <p className="mt-2">
              Built to generate enquiries, increase campus visits, and improve admissions conversion.
            </p>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
