"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  BOARD_CATEGORIES,
  type BoardNotice,
  type NoticeCategory,
  boardNotices,
} from "@/lib/boardNotices";

const THUMB: Record<NoticeCategory, string> = {
  events:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=400&q=80",
  exams:
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
  circulars:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
};

type Filter = "all" | NoticeCategory;

function NoticeCard({
  notice,
  onOpen,
}: {
  notice: BoardNotice;
  onOpen: (n: BoardNotice) => void;
}) {
  const reduce = useReducedMotion();
  const { theme } = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 260, damping: 22 });
  const ry = useSpring(y, { stiffness: 260, damping: 22 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (reduce || theme === "trust") return;
      const r = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      x.set(py * -8);
      y.set(px * 10);
    },
    [reduce, theme, x, y],
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const pin =
    theme === "trust" ? (
      <span
        className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-sm ring-2 ring-white"
        aria-hidden
      />
    ) : theme === "smart" ? (
      <span
        className="absolute -top-0.5 right-3 h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_12px_var(--glow)]"
        aria-hidden
      />
    ) : null;

  const baseBtn =
    theme === "smart"
      ? "glass-panel text-left ring-1 ring-white/10 hover:ring-[var(--primary)]/50"
      : theme === "international"
        ? "border border-[var(--border)] bg-[var(--surface)] text-left shadow-[var(--shadow-soft)] hover:border-[var(--primary)]/40"
        : "border-2 border-[var(--border)] bg-[#fffef8] text-left shadow-[var(--shadow-soft)] hover:border-[var(--accent)]";

  return (
    <motion.button
      type="button"
      layout
      onClick={() => onOpen(notice)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduce ? undefined : { scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      style={!reduce && theme !== "trust" ? { transform } : undefined}
      className={`relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] p-4 text-left transition-shadow md:p-5 ${baseBtn}`}
    >
      {pin}
      {theme === "international" && (
        <div className="relative mb-3 aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-sm)]">
          <Image
            src={THUMB[notice.category]}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 280px"
          />
        </div>
      )}
      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--primary)]">
        {notice.date}
      </span>
      <span className="font-display mt-1 text-base font-semibold text-[var(--text)]">
        {notice.title}
      </span>
      <p className="mt-2 line-clamp-2 text-sm text-[var(--text-muted)]">
        {notice.excerpt}
      </p>
      <span className="mt-4 text-xs font-semibold text-[var(--accent)]">
        Tap to read full notice →
      </span>
    </motion.button>
  );
}

export function InteractiveBoard() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<BoardNotice | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return boardNotices;
    return boardNotices.filter((n) => n.category === filter);
  }, [filter]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  const frame =
    theme === "smart"
      ? "glass-panel border border-white/10 bg-[var(--bg-alt)]/80"
      : theme === "international"
        ? "border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]"
        : "border-[3px] border-dashed border-[var(--accent)] bg-[#f7faf7]";

  return (
    <section
      id="board"
      className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Interactive notice board
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
              Circulars, exams & events — in one glance
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Filter notices, open details, and show parents how effortless
              updates can look on their phones.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-1"
            role="tablist"
            aria-label="Notice categories"
          >
            {(
              [
                { id: "all" as const, label: "All" },
                ...BOARD_CATEGORIES,
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative rounded-[calc(var(--radius-md)-4px)] px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  filter === tab.id
                    ? "text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {filter === tab.id && (
                  <motion.span
                    layoutId="board-tab"
                    className="absolute inset-0 -z-10 rounded-[calc(var(--radius-md)-4px)] bg-[var(--accent-soft)] ring-1 ring-[var(--border)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className={`relative mt-12 rounded-[var(--radius-lg)] p-4 md:p-8 ${frame}`}
        >
          {theme === "trust" && (
            <p className="mb-4 text-center font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              School notice board
            </p>
          )}
          {theme === "smart" && (
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />
          )}
          <motion.div
            layout
            className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((n) => (
                <motion.div
                  key={n.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <NoticeCard notice={n} onOpen={setOpen} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-end justify-center bg-black/50 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="notice-title"
              initial={{ opacity: 0, y: 24, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                    {open.date} · {open.category}
                  </p>
                  <h3
                    id="notice-title"
                    className="font-display mt-2 text-2xl font-bold"
                  >
                    {open.title}
                  </h3>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="rounded-md border border-[var(--border)] px-2 py-1 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-alt)]"
                  onClick={() => setOpen(null)}
                >
                  Close
                </button>
              </div>
              <p className="mt-5 leading-relaxed text-[var(--text-muted)]">
                {open.body}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex text-sm font-semibold text-[var(--primary)] underline-offset-4 hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Download circular (demo)
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
