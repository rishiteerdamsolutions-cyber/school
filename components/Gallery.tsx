"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const shots = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1427504491435-4223aa9d007a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
];

export function Gallery() {
  const { theme } = useTheme();

  return (
    <section
      id="gallery"
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
            Gallery
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Moments from campus life
          </h2>
        </motion.div>
        <div
          className={
            theme === "international"
              ? "mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3"
              : "mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
          }
        >
          {shots.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: theme === "trust" ? 1 : 1.02 }}
              className={
                theme === "international"
                  ? "mb-6 break-inside-avoid overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-soft)]"
                  : "relative aspect-square overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)]"
              }
            >
              <Image
                src={src}
                alt="Campus gallery"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
