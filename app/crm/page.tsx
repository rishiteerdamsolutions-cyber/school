"use client";

import Link from "next/link";
import { LeadsDashboard } from "@/components/crm/LeadsDashboard";
import { useTheme } from "@/context/ThemeContext";

export default function CrmPage() {
  const { theme } = useTheme();

  if (theme === "trust") {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-4 pb-20 pt-28 text-[var(--text)] md:px-8 md:pt-32">
        <div className="mx-auto max-w-lg rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <h1 className="font-display text-xl font-bold">Lead CRM</h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            The CRM dashboard is included with{" "}
            <strong>International School</strong> and{" "}
            <strong>Smart School</strong> tiers. Switch theme using the hero
            toggle on the homepage, then open <strong>Leads</strong> again.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-[var(--text)] hover:bg-[var(--bg-alt)]"
          >
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] px-4 pb-20 pt-28 text-[var(--text)] md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#top"
            className="text-sm font-medium text-[var(--primary)] underline-offset-2 hover:underline"
          >
            ← Back to website
          </Link>
          <p className="text-xs text-[var(--text-muted)]">
            Demo: no login. Use theme toggle on home to match your tier.
          </p>
        </div>
        <LeadsDashboard showFollowUp={theme === "smart"} />
      </div>
    </div>
  );
}
