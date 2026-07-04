"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TABS = ["Videos", "Topics", "About"] as const;
type Tab = typeof TABS[number];

const TOPICS = [
  { text: "Large Language Models — fundamentals to production", done: true },
  { text: "RAG Systems — retrieval-augmented generation", done: true },
  { text: "AI Agents — autonomous multi-step systems", done: true },
  { text: "Prompt Engineering — systematic techniques", done: true },
  { text: "LangChain — practical implementation", done: true },
  { text: "LLM Freelancing in India", done: true },
  { text: "Coming: Drone AI · Swarm Systems · Edge LLMs", done: false },
];

const VIDEOS = [
  {
    title: "What is RAG? Make ChatGPT read YOUR documents",
    gradient: "linear-gradient(135deg, #2D1B69 0%, #4F46E5 100%)",
    views: "5.2K views",
    duration: "18:42",
  },
  {
    title: "I built an AI Agent in 1 hour — full walkthrough",
    gradient: "linear-gradient(135deg, #1A3A2A 0%, #16A34A 100%)",
    views: "8.7K views",
    duration: "24:11",
  },
  {
    title: "From BCA to CTO: My LLM Engineering journey",
    gradient: "linear-gradient(135deg, #7C2D12 0%, #EA580C 100%)",
    views: "12.1K views",
    duration: "31:05",
  },
  {
    title: "LangChain vs LlamaIndex — which one should you use?",
    gradient: "linear-gradient(135deg, #0F2027 0%, #2C5364 100%)",
    views: "6.4K views",
    duration: "15:28",
  },
  {
    title: "How I got my first LLM freelance client in India",
    gradient: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)",
    views: "9.8K views",
    duration: "22:17",
  },
  {
    title: "Prompt Engineering masterclass — zero to pro",
    gradient: "linear-gradient(135deg, #134E4A 0%, #0F766E 100%)",
    views: "11.3K views",
    duration: "41:55",
  },
];

const YT_PATH = "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z";

export default function ContentCreator() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<Tab>("Videos");

  return (
    <section
      id="content"
      ref={ref}
      style={{ background: "var(--bg-primary)", padding: "clamp(5rem, 8vw, 8rem) 0" }}
    >
      <div className="mx-auto px-6 md:px-10">

        {/* ── Section label ── */}
        <ScrollReveal className="mb-10">
          <p
            className="flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// CONTENT CREATOR"}
          </p>
        </ScrollReveal>

        {/* ── YouTube channel card ── */}
        <ScrollReveal>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
          >

            {/* ── Channel banner ── */}
            <div
              className="relative w-full"
              style={{
                height: "clamp(100px, 14vw, 180px)",
                background: "linear-gradient(135deg, #0F0F1A 0%, #1e0a3c 40%, #0d1f3c 70%, #0F0F1A 100%)",
                overflow: "hidden",
              }}
            >
              {/* Dot grid */}
              <div
                aria-hidden
                style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Glow blobs */}
              <div aria-hidden style={{ position: "absolute", top: "20%", left: "30%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(79,70,229,0.25)", filter: "blur(60px)" }} />
              <div aria-hidden style={{ position: "absolute", top: "10%", right: "20%", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(124,58,237,0.2)", filter: "blur(50px)" }} />
            </div>

            {/* ── Channel info row ── */}
            <div
              className="flex flex-col sm:flex-row sm:items-end gap-4 px-6 pb-5"
              style={{ marginTop: "-clamp(24px, 4vw, 40px)" }}
            >
              {/* Avatar — overlaps banner */}
              <div
                style={{
                  width: "clamp(64px, 8vw, 88px)",
                  height: "clamp(64px, 8vw, 88px)",
                  borderRadius: "50%",
                  background: "var(--accent-warm)",
                  border: "3px solid var(--bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 400,
                  color: "#0A0908",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  marginTop: "calc(-1 * clamp(32px, 5vw, 48px))",
                }}
              >
                AJ
              </div>

              {/* Name + stats */}
              <div className="flex-1 min-w-0 pb-1">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(16px, 2.2vw, 22px)",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Abin Justin Kumaravel
                  </h2>
                  {/* Verified-style badge */}
                  <span
                    style={{
                      width: 16, height: 16, borderRadius: "50%",
                      background: "var(--text-muted)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="var(--bg-card)" style={{ width: 10, height: 10 }}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                    @abin-justinkumaravel
                  </span>
                  <span style={{ color: "var(--border)" }}>·</span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                    1K+ subscribers
                  </span>
                  <span style={{ color: "var(--border)" }}>·</span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                    {VIDEOS.length} videos
                  </span>
                </div>
              </div>

              {/* Subscribe button */}
              <a
                href="https://www.youtube.com/@abin-justinkumaravel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  padding: "9px 18px",
                  borderRadius: "9999px",
                  background: "var(--text-primary)",
                  color: "var(--bg-primary)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  fontWeight: 700,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 12, height: 12 }}>
                  <path d={YT_PATH} />
                </svg>
                Subscribe
              </a>
            </div>

            {/* ── Tabs ── */}
            <div
              className="flex items-center gap-0 px-6"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    padding: "12px 16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: activeTab === tab ? "var(--text-primary)" : "var(--text-muted)",
                    borderBottom: activeTab === tab ? "2px solid var(--text-primary)" : "2px solid transparent",
                    marginBottom: "-1px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* ── Tab content ── */}
            <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
              <AnimatePresence mode="wait">

                {/* Videos tab */}
                {activeTab === "Videos" && (
                  <motion.div
                    key="videos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {VIDEOS.map((video, i) => (
                      <motion.a
                        key={i}
                        href="https://www.youtube.com/@abin-justinkumaravel"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.05 * i, duration: 0.4 }}
                        whileHover={{ y: -3 }}
                        className="block rounded-xl overflow-hidden"
                        style={{
                          background: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                          textDecoration: "none",
                        }}
                      >
                        {/* Thumbnail */}
                        <div
                          className="relative flex items-center justify-center"
                          style={{ background: video.gradient, aspectRatio: "16 / 9" }}
                        >
                          <svg viewBox="0 0 24 24" fill="white" style={{ width: 32, height: 32, opacity: 0.75 }}>
                            <path d={YT_PATH} />
                          </svg>
                          {/* Duration badge */}
                          <span
                            style={{
                              position: "absolute", bottom: 7, right: 8,
                              fontFamily: "var(--font-mono)",
                              fontSize: "10px",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              background: "rgba(0,0,0,0.75)",
                              color: "#fff",
                              letterSpacing: "0.03em",
                            }}
                          >
                            {video.duration}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="p-3 flex gap-3">
                          {/* Mini avatar */}
                          <div
                            style={{
                              width: 28, height: 28, borderRadius: "50%",
                              background: "var(--accent-warm)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              flexShrink: 0,
                              fontFamily: "var(--font-display)",
                              fontSize: "10px",
                              fontWeight: 400,
                              color: "#0A0908",
                            }}
                          >
                            AJ
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <p
                              style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "12px",
                                fontWeight: 500,
                                color: "var(--text-primary)",
                                lineHeight: 1.35,
                              }}
                            >
                              {video.title}
                            </p>
                            <p style={{ fontFamily: "var(--font-label)", fontSize: "8px", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
                              Abin Justin Kumaravel
                            </p>
                            <p style={{ fontFamily: "var(--font-label)", fontSize: "8px", letterSpacing: "0.08em", color: "var(--text-muted)" }}>
                              {video.views}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}

                {/* Topics tab */}
                {activeTab === "Topics" && (
                  <motion.div
                    key="topics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col gap-3 max-w-xl"
                  >
                    {TOPICS.map((topic, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.35 }}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={13}
                          style={{
                            color: topic.done ? "var(--accent-warm)" : "var(--text-muted)",
                            flexShrink: 0, marginTop: "3px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            color: topic.done ? "var(--text-primary)" : "var(--text-muted)",
                            fontStyle: topic.done ? "normal" : "italic",
                            lineHeight: 1.55,
                          }}
                        >
                          {topic.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* About tab */}
                {activeTab === "About" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col gap-6 max-w-xl"
                  >
                    <div>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.14em", color: "var(--text-muted)", marginBottom: "10px" }}>
                        DESCRIPTION
                      </p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                        India&apos;s most practical LLM engineering channel. I teach RAG systems, AI agents, prompt engineering,
                        and real-world LLM deployment — no fluff, just things that actually ship.
                        From BCA graduate to CTO, I&apos;m sharing everything I&apos;ve learned building AI products.
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.14em", color: "var(--text-muted)", marginBottom: "10px" }}>
                        LINKS
                      </p>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "YouTube", href: "https://www.youtube.com/@abin-justinkumaravel" },
                          { label: "LinkedIn", href: "https://www.linkedin.com/in/abin-justin-kumaravel/" },
                          { label: "GitHub", href: "https://github.com/abinjustinkumaravel" },
                        ].map(({ label, href }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontFamily: "var(--font-label)",
                              fontSize: "10px",
                              letterSpacing: "0.1em",
                              color: "var(--accent-warm)",
                              textDecoration: "none",
                            }}
                          >
                            {label} →
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.14em", color: "var(--text-muted)", marginBottom: "10px" }}>
                        DETAILS
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {[
                          ["Location", "Nagercoil, Tamil Nadu 🇮🇳"],
                          ["Joined", "2023"],
                          ["Focus", "LLM Engineering · India"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex gap-3">
                            <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--text-muted)", minWidth: 60 }}>{k}</span>
                            <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-secondary)" }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
