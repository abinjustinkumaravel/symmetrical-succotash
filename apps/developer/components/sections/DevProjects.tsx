"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { SectionLabel } from "./DevSummary";

interface Project {
  title: string;
  badge: string;
  desc: string;
  tags: string[];
  url?: string;
  github?: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    title: "Mohan Cabs",
    badge: "FLEET MGMT · PRODUCTION",
    desc: "Multi-role fleet management platform handling vehicle inventory, driver lifecycle, dynamic pricing, and end-to-end booking dispatch. Real-time GPS + WhatsApp Business API automation with Razorpay payment links.",
    tags: ["Next.js 15", "Elysia/Bun", "PostgreSQL", "WhatsApp API", "Razorpay", "Docker"],
    gradient: "linear-gradient(135deg, #0D0820 0%, #1A0F45 45%, #2D1B7A 100%)",
  },
  {
    title: "Qatar Gov — LLM Middleware",
    badge: "GOVT · ON-PREMISES · LLM",
    desc: "LLM-based classification middleware for Qatar NPC Government's data migration pipeline. PHI3 LLM with multi-level prompt engineering for automated confidentiality detection. Zero cloud dependency, multi-VM on-premises deployment.",
    tags: ["PHI3 LLM", "Prompt Engineering", "Python", "On-Premises", "Multi-VM"],
    gradient: "linear-gradient(135deg, #1A0808 0%, #3D0E0E 45%, #6B1515 100%)",
  },
  {
    title: "NCP Data Marketplace",
    badge: "DATA MARKETPLACE · RAG",
    desc: "Enterprise data marketplace with session-based auth, RAG chatbot for intelligent recommendations, and real-time Socket.io team communication. Automatic session-expiry middleware and ChromaDB-backed vector search.",
    tags: ["RAG Chatbot", "Socket.io", "Node.js", "PostgreSQL", "ChromaDB"],
    gradient: "linear-gradient(135deg, #080D1A 0%, #0E1F3D 45%, #152E5C 100%)",
  },
  {
    title: "Pegasyz",
    badge: "ENTERPRISE RAG · LOCAL LLM",
    desc: "Secure single-tenant AI knowledge engine. Qwen2.5-3B (Q4_K_M GGUF) for 10–18 tok/s CPU inference. Hybrid BM25 + dense retrieval with 3-layer security: local license middleware, JWT auth, and ACL pre-filters.",
    tags: ["Qwen2.5-3B", "ChromaDB", "BAAI/bge-m3", "FastAPI", "Docker Compose"],
    gradient: "linear-gradient(135deg, #0A0F1E 0%, #0D1B3E 40%, #1a2a6c 100%)",
  },
  {
    title: "Hybrid RAG Engine",
    badge: "HYBRID SEARCH · RERANKING",
    desc: "Advanced retrieval pipeline combining parallel BM25 keyword search with dense vector retrieval (BAAI/bge-m3, 1024-dim). Reciprocal Rank Fusion (k=60) + BGE-Reranker cross-encoder. Maximises precision on enterprise document sets.",
    tags: ["BM25", "ChromaDB", "BAAI/bge-m3", "BGE-Reranker", "RRF"],
    gradient: "linear-gradient(135deg, #0C1A14 0%, #0F3D2E 50%, #1a5c42 100%)",
  },
  {
    title: "YOLOv8 Asset Tracker",
    badge: "COMPUTER VISION · REAL-TIME",
    desc: "Local computer vision pipeline for real-time asset tracking. YOLOv8 inference on live camera feeds with NumPy/Pandas preprocessing of detection logs — structured bounding box metadata extraction and analytics pipeline.",
    tags: ["YOLOv8", "NumPy", "Pandas", "Python", "Docker"],
    gradient: "linear-gradient(135deg, #1A0E00 0%, #3D1F00 50%, #7C3A00 100%)",
  },
  {
    title: "AL Traders",
    badge: "E-COMMERCE · CLIENT DELIVERY",
    desc: "E-commerce product showcase website for AL Traders — a clean, responsive product catalog interface for their trading business. Focused on fast load times, intuitive browsing, and professional product presentation.",
    tags: ["E-commerce", "Product Catalog", "Responsive UI"],
    gradient: "linear-gradient(135deg, #0A1410 0%, #1A2D25 50%, #243D33 100%)",
  },
  {
    title: "Pommi Catering",
    badge: "STATIC SITE · NETLIFY",
    desc: "Static business website for Pommi Catering built with vanilla HTML, CSS, and JavaScript. Clean presentation of services, menu, and contact details. Deployed on Netlify with fast global CDN delivery.",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    gradient: "linear-gradient(135deg, #141008 0%, #2D2010 50%, #3D2E16 100%)",
  },
];

function Thumbnail({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (project.url && !imgFailed) {
    return (
      <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "10px 10px 0 0", background: "#0D0D0D" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  // Text placeholder
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "10px 10px 0 0",
        background: project.gradient,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "20px 18px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(40px, 7vw, 72px)",
          fontWeight: 700,
          color: "rgba(200,169,110,0.06)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        {project.title.split(" ")[0]}
      </span>
      <span
        style={{
          fontFamily: "var(--font-label)",
          fontSize: 8,
          letterSpacing: "0.14em",
          color: "rgba(200,169,110,0.6)",
          marginBottom: 6,
        }}
      >
        {project.badge}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(16px, 2vw, 22px)",
          fontWeight: 300,
          color: "#F2EFE8",
          letterSpacing: "-0.01em",
        }}
      >
        {project.title}
      </span>
    </div>
  );
}

export default function DevProjects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel num="04" title="Projects" inView={inView} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 + i * 0.07, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              borderRadius: 12,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--border-accent)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--border)";
              el.style.transform = "translateY(0)";
            }}
          >
            <Thumbnail project={project} />

            <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(15px, 1.6vw, 19px)",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                       onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                       onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                    >
                      <Code2 size={15} />
                    </a>
                  )}
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                       style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                       onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                       onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(11px, 1.2vw, 13px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {project.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 7,
                      letterSpacing: "0.1em",
                      padding: "2px 7px",
                      borderRadius: 9999,
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
