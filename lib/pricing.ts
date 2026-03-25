import type { ThemeId } from "@/themes";
import { THEME_LABELS } from "@/themes";

/** WhatsApp business contact (India +91). */
export const WHATSAPP_CONTACT_URL = "https://wa.me/919505009699";

/** One-time website build by theme (INR). Domain billed separately. */
export const THEME_BASE_INR: Record<ThemeId, number> = {
  trust: 9_999,
  international: 14_999,
  smart: 24_999,
};

export type MarketingTierId = "low" | "mid" | "high";

export type MarketingTier = {
  id: MarketingTierId;
  title: string;
  monthlyLabel: string;
  bullets: string[];
};

export const MARKETING_TIERS: MarketingTier[] = [
  {
    id: "low",
    title: "Launch & maintain",
    monthlyLabel: "₹4,000–₹8,000 / month",
    bullets: [
      "SEO setup for local school searches and one monthly content update",
      "Google Business profile setup and two monthly posts",
      "Google Ads starter campaigns focused on calls and enquiries",
    ],
  },
  {
    id: "mid",
    title: "Scale leads",
    monthlyLabel: "₹9,000–₹18,000 / month",
    bullets: [
      "SEO improvements twice a month with two content updates",
      "Google Business growth plan with four monthly posts",
      "Google Ads optimization with weekly checks and better ad copy",
    ],
  },
  {
    id: "high",
    title: "Admissions engine",
    monthlyLabel: "₹19,000+ / month",
    bullets: [
      "Advanced SEO with frequent updates and growth reviews",
      "Google Business weekly activity and strong reputation plan",
      "Full Google Ads management for aggressive admissions growth",
    ],
  },
];

/** What each theme includes beyond design (product truth for sales copy). */
export const THEME_VALUE_BULLETS: Record<ThemeId, string[]> = {
  trust: [
    "Complete responsive school website with all core pages",
    "Simple enquiry form for parents to contact your team",
    "Best for schools that want a clean, affordable online presence",
  ],
  international: [
    "Everything in Regular School",
    "Built-in leads dashboard for follow-up tracking",
    "Stronger presentation for trust, branding, and admissions growth",
  ],
  smart: [
    "Everything in International School",
    "Priority lead handling with faster parent follow-up flow",
    "Premium high-conversion experience for top-tier school branding",
  ],
};

export function formatInr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function themeLine(theme: ThemeId) {
  return `${THEME_LABELS[theme]} — ${formatInr(THEME_BASE_INR[theme])} (+ domain)`;
}
