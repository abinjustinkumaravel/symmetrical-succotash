"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DevSummary() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="summary" ref={ref} style={{ padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)" }}>
      <SectionLabel num="01" title="Summary" inView={inView} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: 680 }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 2.2vw, 26px)",
            fontWeight: 300,
            color: "var(--text-primary)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 20,
          }}
        >
          Full-stack engineer and AI/ML practitioner building production systems —
          from LLM pipelines and RAG engines to government-grade data governance platforms.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(13px, 1.4vw, 15px)",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            marginBottom: 20,
          }}
        >
          Designed and shipped a hybrid BM25 + dense RAG pipeline with cross-encoder reranking for the{" "}
          <span style={{ color: "var(--accent)" }}>Qatar NPC Government</span>{" "}
          — deployed end-to-end on GCP with JWT auth, Redis session management, IP whitelisting, and role-based access control.
          Comfortable across the full stack: FastAPI + Node.js backends, React/Next.js frontends, Docker + Nginx infrastructure.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(13px, 1.4vw, 15px)",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
          }}
        >
          Independent consultant since 2023, delivering end-to-end solutions for clients across
          fleet management, catering, and trading verticals.
          MCA at SRM (8.6 CGPA), 300+ DSA problems across LeetCode and HackerRank.
        </p>
      </motion.div>
    </section>
  );
}

// ── Shared section label component ───────────────────────────────────────────
export function SectionLabel({ num, title, inView }: { num: string; title: string; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--accent)",
          opacity: 0.6,
        }}
      >
        {num}.
      </span>
      <h2
        style={{
          fontFamily: "var(--font-label)",
          fontSize: "clamp(11px, 1.1vw, 13px)",
          fontWeight: 700,
          letterSpacing: "0.2em",
          color: "var(--text-primary)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--border-accent), transparent)" }} />
    </motion.div>
  );
}
