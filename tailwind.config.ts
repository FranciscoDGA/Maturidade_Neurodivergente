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
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e", 
          600: "#16a34a",
          700: "#15803d",
        },
        accent: {
          500: "#0ea5e9", // Muted blue for links/accents, not purple
          600: "#0284c7",
        },
        neutral: {
          50: "#fafaf9", // Warm off-white
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        dark: {
          bg: "#1c1917", // Warm dark gray, not deep space
          card: "#292524", // Solid card color
          cardHover: "#44403c",
          border: "#44403c",
          text: "#fafaf9",
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
