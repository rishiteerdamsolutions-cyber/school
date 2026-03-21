export const THEMES = ["smart", "international", "trust"] as const;

export type ThemeId = (typeof THEMES)[number];

export const THEME_LABELS: Record<ThemeId, string> = {
  smart: "Smart School",
  international: "International",
  trust: "Trust School",
};
