"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { ThemePlans } from "@/components/Pricing/ThemePlans";
import { useTheme } from "@/context/ThemeContext";
import type { ThemeId } from "@/themes";
import { THEMES } from "@/themes";

function parseTheme(v: string | null): ThemeId | null {
  if (!v) return null;
  return (THEMES as readonly string[]).includes(v) ? (v as ThemeId) : null;
}

function QuotationInner() {
  const searchParams = useSearchParams();
  const { setTheme, theme } = useTheme();
  const fromUrl = parseTheme(searchParams.get("theme"));

  useEffect(() => {
    if (fromUrl) setTheme(fromUrl);
  }, [fromUrl, setTheme]);

  const highlight = fromUrl ?? theme;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 md:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
              Quotation
            </p>
            <h1 className="font-display mt-1 text-2xl font-bold md:text-3xl">
              e‑School — theme + marketing
            </h1>
          </div>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-[var(--primary)] underline-offset-2 hover:underline"
          >
            ← Back to site
          </Link>
        </div>
      </div>

      <ThemePlans variant="quotation" highlightTheme={highlight} />
    </div>
  );
}

export default function QuotationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] text-[var(--text)]">
          Loading quotation…
        </div>
      }
    >
      <QuotationInner />
    </Suspense>
  );
}
