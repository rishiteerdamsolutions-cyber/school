import type { ThemeId } from "./index";

export const smartThemeId: ThemeId = "smart";

/** Token reference for TS consumers; visual source of truth is globals.css [data-theme="smart"] */
export const smartTheme = {
  id: smartThemeId,
  displayName: "Smart School",
  description: "Futuristic glass, neon, and motion",
} as const;
