"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import type { ThemeId } from "@/themes";
import { THEMES } from "@/themes";

const STORAGE_KEY = "school-demo-theme";

function isThemeId(v: string | null): v is ThemeId {
  return v !== null && (THEMES as readonly string[]).includes(v);
}

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  cycleTheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const emptySubscribe = () => () => {};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("international");
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (isThemeId(raw)) {
        // One-time hydration sync from persisted theme.
        // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-mount read
        setThemeState(raw);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = "en";
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme, mounted]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!e.altKey || e.repeat) return;
      if (e.key === "1") setThemeState("smart");
      else if (e.key === "2") setThemeState("international");
      else if (e.key === "3") setThemeState("trust");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const setTheme = useCallback((t: ThemeId) => setThemeState(t), []);

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const i = THEMES.indexOf(prev);
      return THEMES[(i + 1) % THEMES.length];
    });
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme, mounted }),
    [theme, setTheme, cycleTheme, mounted],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
