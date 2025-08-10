"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

const themeIcons = {
  light: Sun,
  dark: Moon,
};

const themeLabels = {
  light: "Light",
  dark: "Dark",
};

export function ThemeSwitcher() {
  const { theme, setTheme, currentThemes } = useTheme();
  const CurrentIcon = themeIcons[theme as keyof typeof themeIcons];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <CurrentIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {currentThemes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {React.createElement(themeIcons[themeOption], {
                className: "h-4 w-4",
              })}
              {themeLabels[themeOption]}
              {theme === themeOption && (
                <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
