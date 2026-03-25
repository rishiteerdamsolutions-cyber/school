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
      "SEO: keyword mapping, on-page fixes, basic schema check, 1 content update/month",
      "Google Business: profile optimization + 2 posts/month + review guidance",
      "Google Ads: 1–2 Search campaigns + call/form conversion tracking",
    ],
  },
  {
    id: "mid",
    title: "Scale leads",
    monthlyLabel: "₹9,000–₹18,000 / month",
    bullets: [
      "SEO: 2 improvement rounds/month + 2 content pieces/month",
      "Google Business: 4 posts/month + photos/Q&A plan + insights report",
      "Google Ads: 2–3 campaigns + ad copy tests + weekly monitoring",
    ],
  },
  {
    id: "high",
    title: "Admissions engine",
    monthlyLabel: "₹19,000+ / month",
    bullets: [
      "SEO: 3–4 rounds/month + 3–4 content pieces/month + ranking review",
      "Google Business: weekly posts + review workflow + local scorecard",
      "Google Ads: 3–5 campaigns + remarketing + weekly optimization",
    ],
  },
];

/** What each theme includes beyond design (product truth for sales copy). */
export const THEME_VALUE_BULLETS: Record<ThemeId, string[]> = {
  trust: [
    "Full responsive school website (all public sections you see in this demo)",
    "Enquiry form with UTM capture → saved to your database",
    "No lead CRM in the nav — teams manage enquiries offline or via email",
  ],
  international: [
    "Everything in Regular School",
    "Lead CRM at /crm (Leads in the header): list, status, notes — no login in this demo",
    "Notice board cards with thumbnails (International layout)",
  ],
  smart: [
    "Everything in International School",
    "Auto follow-up queue for Smart-theme enquiries: WhatsApp template when WHATSAPP_* env is configured; otherwise status stays pending",
    "Premium hero + shaped CTA + Smart-only achievements chip and notice-board styling",
  ],
};

export function formatInr(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function themeLine(theme: ThemeId) {
  return `${THEME_LABELS[theme]} — ${formatInr(THEME_BASE_INR[theme])} (+ domain)`;
}
