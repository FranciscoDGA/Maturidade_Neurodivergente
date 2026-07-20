import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Maturidade Neurodivergente",
  description: "Um espaço para entender seu desenvolvimento único",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4a6bff" />
      </head>
      <body className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[#0f172a] dark:text-neutral-100 font-sans antialiased transition-colors duration-300">
        <a href="#main" className="skip-to-main">
          Ir para conteúdo principal
        </a>
        <ThemeProvider>
          <Header />
          <main
            id="main"
            className="flex-1 w-full"
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
