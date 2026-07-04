"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

/* ── colour tokens ─────────────────────────────────────────────── */
const BLUE  = "#1A56A8";
const BLACK = "#111111";
const BODY  = "#333333";
const RULE  = "#CCCCCC";

/* ── tiny primitives ───────────────────────────────────────────── */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <h2 style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: 11.5, fontWeight: 700,
        color: BLUE, textTransform: "uppercase",
        letterSpacing: "0.04em", margin: "0 0 4px",
      }}>{children}</h2>
      <div style={{ height: 1, background: RULE }} />
    </div>
  );
}

function Bullet({ label, value }: { label?: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
      <span style={{ color: BODY, fontSize: 11, lineHeight: 1.6, flexShrink: 0 }}>•</span>
      <p style={{ margin: 0, fontSize: 11, color: BODY, lineHeight: 1.65 }}>
        {label && <strong style={{ color: BLACK }}>{label}:</strong>} {value}
      </p>
    </div>
  );
}

function Section({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) {
  return <div style={{ marginBottom: gap }}>{children}</div>;
}

/* ── auto-print handler (needs Suspense because of useSearchParams) ── */
function AutoPrint() {
  const params = useSearchParams();
  useEffect(() => {
    if (params.get("print") === "true") {
      setTimeout(() => window.print(), 400);
    }
  }, [params]);
  return null;
}

/* ── main ──────────────────────────────────────────────────────── */
export default function ResumePage() {
  return (
    <>
      <Suspense fallback={null}>
        <AutoPrint />
      </Suspense>

      {/* ── Print / Download button (hidden in print) ── */}
      <div className="no-print" style={{
        position: "fixed", top: 16, right: 16, zIndex: 50,
        display: "flex", gap: 8,
      }}>
        <button
          onClick={() => window.print()}
          style={{
            padding: "9px 20px", borderRadius: 6,
            background: BLUE, color: "#fff", border: "none",
            fontFamily: "'Arial', sans-serif", fontSize: 12, fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.03em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          }}
        >
          ↓ Download PDF
        </button>
        <button
          onClick={() => window.close()}
          style={{
            padding: "9px 16px", borderRadius: 6,
            background: "#f5f5f5", color: "#555", border: "1px solid #ddd",
            fontFamily: "'Arial', sans-serif", fontSize: 12,
            cursor: "pointer",
          }}
        >
          ✕ Close
        </button>
      </div>

      {/* ── Resume sheet ── */}
      <div id="resume" style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "48px 52px",
        background: "#fff",
        minHeight: "100vh",
        fontFamily: "'Arial', sans-serif",
      }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 18 }}>
          <h1 style={{
            fontSize: 26, fontWeight: 700, color: BLUE,
            margin: "0 0 6px", letterSpacing: "-0.01em",
            fontFamily: "'Arial', sans-serif",
          }}>ABIN J</h1>

          <p style={{ fontSize: 11, color: BODY, margin: "0 0 2px", lineHeight: 1.7 }}>
            Thiruvananthapuram&nbsp;|&nbsp;+91 8122354855&nbsp;|&nbsp;
            <a href="mailto:abinjustinkumaravel@gmail.com" style={{ color: BLUE }}>abinjustinkumaravel@gmail.com</a>
          </p>
          <p style={{ fontSize: 11, color: BODY, margin: 0, lineHeight: 1.7 }}>
            <a href="https://www.linkedin.com/in/abin-justin-kumaravel/" style={{ color: BLUE }}>LinkedIn: Abin Justin Kumaravel</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/abinjustinkumaravel" style={{ color: BLUE }}>GitHub: abinjustinkumaravel</a>
            &nbsp;|&nbsp;
            <a href="https://x.com/Abin_JKV" style={{ color: BLUE }}>X: @Abin_JKV</a>
            &nbsp;|&nbsp;
            <a href="https://developer.abinjustinkumaravel.com" style={{ color: BLUE }}>Portfolio: Abin Justinkumaravel</a>
          </p>
        </div>

        {/* ── Professional Summary ── */}
        <Section>
          <H2>Professional Summary</H2>
          <p style={{ fontSize: 11, color: BODY, lineHeight: 1.75, margin: "8px 0 0", textAlign: "justify" }}>
            AI/ML and full-stack engineer (MCA, 8.6 CGPA) with hands-on experience building LLM-powered systems, RAG
            pipelines, and secure backend APIs in production-context enterprise projects. Experienced across the full AI
            delivery stack — from LLM integration and retrieval pipeline design through to cloud deployment on GCP and
            containerized production environments. Strong foundation in Python, FastAPI, Node.js, React/Next.js, and ML
            frameworks (PyTorch, TensorFlow, scikit-learn). Combines technical depth with business understanding gained
            from direct client-facing experience — building AI solutions that solve real problems, not just
            proof-of-concept demos.
          </p>
        </Section>

        {/* ── Core Competencies ── */}
        <Section>
          <H2>Core Competencies</H2>
          <div style={{ marginTop: 8 }}>
            <Bullet label="AI & GenAI Systems" value="LLM integration, RAG pipeline design, prompt engineering, hybrid retrieval (BM25 + dense vector), cross-encoder reranking, model quantization (GGUF)" />
            <Bullet label="Backend & API Engineering" value="FastAPI, Node.js, REST API design, JWT authentication, Redis session management, IP whitelisting, role-based access control" />
            <Bullet label="Frontend" value="React, Next.js, frontend/backend validation layers" />
            <Bullet label="ML Frameworks" value="PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, llama-cpp-python" />
            <Bullet label="Cloud & DevOps" value="Google Cloud Platform (GCP), Docker, Docker Compose, Nginx, Linux CLI" />
            <Bullet label="Databases" value="PostgreSQL, ChromaDB (vector), SQLite, Redis" />
          </div>
        </Section>

        {/* ── Technical Stack ── */}
        <Section>
          <H2>Technical Stack</H2>
          <div style={{ marginTop: 8 }}>
            <Bullet label="Languages" value="Python, JavaScript, SQL" />
            <Bullet label="Frameworks & Libraries" value="FastAPI, PyTorch, TensorFlow, Hugging Face Transformers, llama-cpp-python, NumPy, Pandas, React, Next.js, Node.js, Express.js, scikit-learn" />
            <Bullet label="Models & Embeddings" value="Qwen2.5 (3B-Instruct), BAAI/bge-m3 (1024-dim), BGE-Reranker-Base, YOLOv8" />
            <Bullet label="Databases & Session Stores" value="ChromaDB, PostgreSQL, SQLite, Redis" />
            <Bullet label="Infrastructure & Tools" value="GCP, Docker, Nginx, Git, Jira, ServiceNow" />
          </div>
        </Section>

        {/* ── Professional Experience ── */}
        <Section>
          <H2>Professional Experience</H2>
          <div style={{ marginTop: 10 }}>

            {/* aahrbitx */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                <strong style={{ fontSize: 11.5, color: BLACK }}>Independent AI & Software Consultant — aahrbitx</strong>
                <span style={{ fontSize: 10.5, color: BODY, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>2023 – Present</span>
              </div>
              <Bullet value="Delivering end-to-end AI and software solutions for clients across industries — from LLM-powered tools and RAG pipelines to full-stack fleet management systems and e-commerce platforms." />
              <Bullet value="Built Mohan Cabs: multi-role fleet management platform with real-time GPS, WhatsApp OTP automation via WhatsApp Business API, and Razorpay payment integration. Deployed on VPS with Docker + Traefik." />
              <Bullet value="Built Pegasyz: secure single-tenant enterprise AI knowledge engine using Qwen2.5-3B (Q4_K_M GGUF), achieving 10–18 tok/s CPU inference with hybrid BM25 + dense vector retrieval and 3-layer security." />
              <Bullet value="Designed and deployed Hybrid RAG Engine: parallel BM25 + BAAI/bge-m3 dense retrieval fused via Reciprocal Rank Fusion (k=60) with BGE-Reranker cross-encoder for maximum retrieval precision." />
              <Bullet value="Additional clients: AL Traders (e-commerce catalog), Pommi Caterers (static business site, Netlify), Butterbyte's, Entice Innovations." />
            </div>

            {/* Infaworx */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                <strong style={{ fontSize: 11.5, color: BLACK }}>Data Integration Developer Trainee — Infaworx Data Management Pvt Ltd</strong>
                <span style={{ fontSize: 10.5, color: BODY, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>Feb 2025 – Oct 2025</span>
              </div>
              <p style={{ fontSize: 11, color: BODY, fontStyle: "italic", margin: "0 0 6px", lineHeight: 1.5 }}>
                Delivered three enterprise data projects across NPC Qatar, PIF, and SDB as a full-stack developer.
              </p>
              <Bullet value="NPC Qatar — Data Marketplace: built enterprise data marketplace with RAG-based chatbot for intelligent data product recommendations, real-time team collaboration via Socket.io, and session-based auth middleware." />
              <Bullet value="PIF — Data Sharing & Quality Platform: developed data sharing and data quality management platform (React + Express.js) enabling cross-department data sharing with automated quality validation workflows." />
              <Bullet value="SDB — LLM Classification Middleware: built on-premises PHI3 LLM classification middleware for automated confidentiality detection across large-scale data migration datasets. Zero cloud dependency." />
              <Bullet value="Integrated LLM-powered query/response systems with prompt design and LLM API integration across projects." />
              <Bullet value="Designed and implemented authentication pipeline: Redis session management, HTTP-only cookies, JWT auth, role-based access control, and IP whitelisting — reducing manual access-control overhead by ~20–30%." />
              <Bullet value="Deployed and managed infrastructure on Google Cloud Platform (GCP)." />
            </div>

            {/* AccioJob */}
            <div style={{ marginBottom: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                <strong style={{ fontSize: 11.5, color: BLACK }}>Business Development Associate — AccioJob</strong>
                <span style={{ fontSize: 10.5, color: BODY, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>Aug 2024 – Sep 2024</span>
              </div>
              <Bullet value="Managed a live B2B/B2C sales pipeline using CRM tools — understanding how leads move from problem awareness to product adoption." />
              <Bullet value="Gained firsthand exposure to how businesses evaluate and pay for software solutions — insight that directly informs how I scope and prioritise features when building products." />
              <Bullet value="Developed client communication and objection-handling skills, learning to translate technical capabilities into business value." />
            </div>

          </div>
        </Section>

        {/* ── Education ── */}
        <Section gap={0}>
          <H2>Education</H2>
          <div style={{ marginTop: 8 }}>
            <Bullet value={<>Master of Computer Applications (MCA) — SRM Institute of Science and Technology — <strong>CGPA: 8.6</strong> (2024 – 2026)</>} />
            <Bullet value={<>Bachelor of Computer Applications (BCA), Data Science — SRM Institute of Science and Technology — <strong>CGPA: 8.5</strong> (2021 – 2024)</>} />
          </div>
        </Section>

      </div>

      <style>{`
        @page { size: A4; margin: 0; }
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: #fff; }
          #resume {
            max-width: none !important;
            padding: 28px 36px !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
        }
        @media screen {
          body { background: #e8e8e8; }
          #resume {
            box-shadow: 0 2px 24px rgba(0,0,0,0.12);
            margin-top: 56px !important;
            margin-bottom: 40px !important;
          }
        }
        a { text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
