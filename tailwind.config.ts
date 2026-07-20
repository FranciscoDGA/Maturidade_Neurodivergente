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
      },
      colors: {
        // Paleta acessível para neurodivergentes
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          500: "#4a6bff", // Azul suave
          600: "#3d56cc",
          700: "#2d40b8",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e2e8f0", // Fundo de cards
          300: "#d1d5db",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        dark: {
          bg: "#1a1a2e", // Fundo escuro principal
          card: "#16213e",
          text: "#e0e0e0",
        },
      },
      fontSize: {
        // Tipografia acessível
        xs: ["14px", { lineHeight: "1.5" }],
        sm: ["16px", { lineHeight: "1.6" }],
        base: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["20px", { lineHeight: "1.6" }],
        "2xl": ["24px", { lineHeight: "1.5" }],
        "3xl": ["28px", { lineHeight: "1.4" }],
        "4xl": ["32px", { lineHeight: "1.3" }],
        "5xl": ["40px", { lineHeight: "1.2" }],
      },
      spacing: {
        // Espaçamento generoso para readabilidade
        "safe": "1.5rem",
      },
      maxWidth: {
        content: "700px", // Largura ideal para leitura (600-800px)
      },
    },
  },
  plugins: [],
};

export default config;
