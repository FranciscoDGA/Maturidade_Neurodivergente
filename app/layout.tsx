import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ExitPopup from "@/components/ExitPopup";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
    template: "%s | Maturidade Neurodivergente",
  },
  description:
    "Um espaço inclusivo para entender neurodiversidade, TDAH, autismo e maturidade neurodivergente com clareza, compaixão e acessibilidade.",
  metadataBase: new URL("https://maturidadeneurodivergente.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maturidadeneurodivergente.com.br",
    siteName: "Maturidade Neurodivergente",
    title: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
    description:
      "Um espaço inclusivo para entender neurodiversidade, TDAH, autismo e maturidade neurodivergente com clareza, compaixão e acessibilidade.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Maturidade Neurodivergente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maturidade Neurodivergente | Neurodiversidade, TDAH, Autismo",
    description:
      "Um espaço inclusivo para entender neurodiversidade, TDAH, autismo e maturidade neurodivergente.",
    images: ["/images/og-default.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#4a6bff" />
        <meta name="google-site-verification" content="qH9gltE4Lk1p5ONSBCSMwkXGR9eqixIDruwOJLPqlZQ" />
      </head>
      <body className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900 dark:bg-dark-bg dark:bg-mesh-dark dark:text-neutral-100 font-sans antialiased transition-colors duration-300">
        <a href="#main" className="skip-to-main">
          Ir para conteúdo principal
        </a>
        <ThemeProvider>
          <Header />
          <main
            id="main"
            className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {children}
          </main>
          <Footer />
          <ExitPopup />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
