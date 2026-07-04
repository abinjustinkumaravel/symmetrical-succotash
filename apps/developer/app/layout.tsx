import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Syncopate, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});
const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abin Justin Kumaravel — AI Engineer · Full-Stack Developer",
  description:
    "AI Engineer and Full-Stack Developer. Built production RAG systems, LLM pipelines, and deployed a data governance portal for the Qatar NPC Government on GCP.",
  keywords: [
    "AI Engineer",
    "LLM Developer",
    "Full-Stack Developer",
    "RAG Pipeline",
    "Next.js",
    "FastAPI",
    "Python",
  ],
  openGraph: {
    title: "Abin Justin Kumaravel — AI Engineer · Full-Stack Developer",
    description: "Production AI systems, RAG pipelines, and full-stack engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${syncopate.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
