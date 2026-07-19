"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === "dark" ? "claro" : "escuro"}`}
      className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2 transition-colors"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
