"use client";

import Link from "next/link";
import type { ThemeId } from "@/themes";
import { THEMES, THEME_LABELS } from "@/themes";
import {
  MARKETING_TIERS,
  THEME_BASE_INR,
  THEME_VALUE_BULLETS,
  WHATSAPP_CONTACT_URL,
  formatInr,
} from "@/lib/pricing";

type Props = {
  variant: "landing" | "quotation";
  /** When set (e.g. from URL), visually emphasise that tier’s card. */
  highlightTheme?: ThemeId | null;
};

export function ThemePlans({ variant, highlightTheme }: Props) {
  const id = variant === "landing" ? "pricing" : undefined;

  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
            Plans & quotation
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">
            Website themes & digital marketing
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Theme price is a <strong className="text-[var(--text)]">one-time</strong>{" "}
            website build. Marketing is a <strong className="text-[var(--text)]">separate monthly</strong>{" "}
            budget tier (same scope for every theme). Domain is extra.
          </p>
        </div>

        {variant === "quotation" ? (
          <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--text-muted)] md:p-6">
            <p className="font-semibold text-[var(--text)]">
              Admin & follow-up (how it works in this demo)
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-[var(--text)]">No login:</strong> CRM
                is gated by theme selection only (demo).
              </li>
              <li>
                <strong className="text-[var(--text)]">Regular School:</strong>{" "}
                no “Leads” link — enquiry form still saves to the database.
              </li>
              <li>
                <strong className="text-[var(--text)]">
                  International &amp; Smart:
                </strong>{" "}
                open <Link className="font-medium text-[var(--primary)] underline" href="/crm">/crm</Link>{" "}
                from the header to manage leads (status + notes).
              </li>
              <li>
                <strong className="text-[var(--text)]">Smart only:</strong>{" "}
                follow-up queue + optional WhatsApp template send when{" "}
                <code className="text-xs">WHATSAPP_*</code> env vars are set;
                otherwise new leads stay <code className="text-xs">pending</code>.
              </li>
            </ul>
          </div>
        ) : null}

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {THEMES.map((tid) => {
            const active = highlightTheme === tid;
            return (
              <div
                key={tid}
                className={`flex flex-col rounded-[var(--radius-lg)] border bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] ${
                  active
                    ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/30"
                    : "border-[var(--border)]"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  Website theme
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-[var(--text)]">
                  {THEME_LABELS[tid]}
                </h3>
                <p className="mt-2 text-2xl font-bold text-[var(--text)]">
                  {formatInr(THEME_BASE_INR[tid])}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  + domain (your choice, billed separately)
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
                  {THEME_VALUE_BULLETS[tid].map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--primary)]">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href={`/quotation?theme=${tid}`}
                    className="inline-flex flex-1 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--on-primary)]"
                  >
                    Quotation
                  </Link>
                  <a
                    href={WHATSAPP_CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg)]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-[var(--text)]">
            Digital marketing (all themes)
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            Same service stack for every theme; you scale by monthly retainer.
            Priced <strong className="text-[var(--text)]">separately</strong> from
            the website build.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {MARKETING_TIERS.map((t) => (
              <div
                key={t.id}
                className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                  {t.title}
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">
                  {t.monthlyLabel}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-[var(--accent)]">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg)]"
            >
              Discuss marketing on WhatsApp — 95050 09699
            </a>
            <Link
              href="/#contact"
              className="inline-flex rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg)]"
            >
              Enquiry form on homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
