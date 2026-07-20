import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4a6bff" />
      </head>
      <body className="flex flex-col min-h-screen">
        <a href="#main" className="skip-to-main">
          Ir para conteúdo principal
        </a>
        <ThemeProvider>
          <Header />
          <main
            id="main"
            className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
