"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { themes, ThemeColors } from "@/config/themes";

export function useThemeColors(): ThemeColors {
  const { theme } = useTheme();
  return themes[theme] || themes.light;
}

export function getThemeColors(themeName: string): ThemeColors {
  return themes[themeName] || themes.light;
}

export function getAllThemes(): Record<string, ThemeColors> {
  return themes;
}
