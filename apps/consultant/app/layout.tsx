import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Outfit,
  Syncopate,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500"],
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  display: "swap",
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  title: "Abin Justinkumaravel — AI Engineer · LLM Researcher · Entrepreneur",
  description:
    "AI Engineer and LLM Researcher specialising in Multimodal RAG, Agentic Workflows, and SLM Fine-Tuning. Mentor and educator building the neural infrastructure for modern business.",
  keywords:
    "AI Engineer, LLM Researcher, RAG Specialist, Multimodal RAG, Agentic Workflows, SLM Fine-Tuning, LangGraph, ColPali, FastAPI, Mentor, Tamil Nadu, Kanyakumari, India, Abin Justinkumaravel",
  authors: [{ name: "Abin Justinkumaravel" }],
  openGraph: {
    title: "Abin Justinkumaravel — AI Engineer · LLM Researcher · Entrepreneur",
    description:
      "AI Engineer and LLM Researcher specialising in Multimodal RAG, Agentic Workflows, and SLM Fine-Tuning. Mentor and educator building the neural infrastructure for modern business.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abin Justinkumaravel — AI Engineer · LLM Researcher · Entrepreneur",
    description:
      "AI Engineer and LLM Researcher specialising in Multimodal RAG, Agentic Workflows, and SLM Fine-Tuning. Mentor and educator building the neural infrastructure for modern business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${outfit.variable} ${syncopate.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
