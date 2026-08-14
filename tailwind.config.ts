import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#fafafa",
          100: "#f4f4f5",
          500: "#3f3f46", // Dark slate for primary actions
          600: "#27272a",
          700: "#18181b",
        },
        accent: {
          500: "#71717a", // Muted zinc for subtle borders
          600: "#52525b",
        },
        neutral: {
          50: "#ffffff",  // Pure white for that paper feel
          100: "#fafafa", // Extremely subtle off-white
          200: "#f4f4f5", // Very light gray for soft borders
          300: "#e4e4e7",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        dark: {
          bg: "#09090b", // Deep rich almost-black
          card: "#09090b", // Pure flat layout, no distinct cards
          cardHover: "#18181b",
          border: "#27272a",
          text: "#fafafa",
        },
      },
      boxShadow: {
        'soft': 'none', // Removed soft shadows completely for flatter, editorial look
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
