import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abin J — AI Engineer · Full-Stack Developer",
  description:
    "AI Engineer and Full-Stack Developer specialising in LLM pipelines, RAG architectures, and Python-first backends. Building AI systems that run in production.",
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
      data-theme="light"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
