"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Project {
  id: string;
  gradient: string;
  badge: string;
  title: string;
  tags: string[];
  desc: string;
  impact?: string;
}

const PROJECTS: Project[] = [
  {
    id: "p1",
    gradient: "linear-gradient(135deg, #0D0820 0%, #1A0F45 45%, #2D1B7A 100%)",
    badge: "FLEET MGMT · FULL STACK · PRODUCTION",
    title: "Mohan Cabs",
    tags: ["Next.js 15", "Elysia/Bun", "PostgreSQL", "WhatsApp API", "Razorpay", "Docker", "Traefik"],
    desc: "Multi-role fleet management platform (admin / driver / user) handling vehicle inventory, driver lifecycle, dynamic pricing by category, and end-to-end booking dispatch across local, outstation, and airport transfers. Real-time GPS ingestion for live fleet visibility. Automated WhatsApp Business API pipeline for OTP auth, confirmations, and Razorpay payment links — with SMS fallback via Fast2SMS.",
    impact: "LIVE GPS · WHATSAPP AUTOMATION · RAZORPAY · VPS DEPLOYED",
  },
  {
    id: "p2",
    gradient: "linear-gradient(135deg, #1A0808 0%, #3D0E0E 45%, #6B1515 100%)",
    badge: "GOVT · ON-PREMISES · LLM",
    title: "Qatar Gov — LLM Middleware",
    tags: ["PHI3 LLM", "Prompt Engineering", "Python", "On-Premises", "Multi-VM"],
    desc: "LLM-based classification middleware built for the Qatar NPC Government's data migration pipeline. PHI3 LLM with custom multi-level prompt engineering for automated confidentiality detection across migrating datasets. Deployed on-premises across a multi-level virtual machine infrastructure — zero cloud dependency.",
    impact: "ON-PREMISES · PHI3 · GOVT CONFIDENTIALITY DETECTION",
  },
  {
    id: "p3",
    gradient: "linear-gradient(135deg, #080D1A 0%, #0E1F3D 45%, #152E5C 100%)",
    badge: "DATA MARKETPLACE · RAG · REAL-TIME",
    title: "NCP Data Marketplace",
    tags: ["RAG Chatbot", "Socket.io", "Session Auth", "Node.js", "PostgreSQL", "ChromaDB"],
    desc: "Enterprise data marketplace platform with session-based authentication and middleware for automatic session-expiry re-login. RAG-based chatbot for intelligent data product recommendations and search. Real-time internal team communication channel built on Socket.io — enabling live collaboration within the platform.",
    impact: "RAG RECOMMENDATIONS · SOCKET.IO · SESSION MIDDLEWARE",
  },
  {
    id: "p4",
    gradient: "linear-gradient(135deg, #0A0F1E 0%, #0D1B3E 40%, #1a2a6c 100%)",
    badge: "ENTERPRISE RAG · LOCAL LLM",
    title: "Pegasyz",
    tags: ["Qwen2.5-3B", "ChromaDB", "BAAI/bge-m3", "FastAPI", "Docker Compose"],
    desc: "Secure single-tenant enterprise AI knowledge engine. Qwen2.5-3B quantized to Q4_K_M GGUF for 10–18 tok/s CPU inference. Hybrid BM25 + dense vector retrieval with 3-layer security: local license middleware, JWT auth, and pre-retrieval ACL filters. Zero external data exposure.",
    impact: "10-18 TOK/S CPU INFERENCE · ZERO DATA LEAKAGE",
  },
  {
    id: "p5",
    gradient: "linear-gradient(135deg, #0C1A14 0%, #0F3D2E 50%, #1a5c42 100%)",
    badge: "HYBRID SEARCH · RERANKING",
    title: "Hybrid RAG Engine",
    tags: ["BM25", "ChromaDB", "BAAI/bge-m3", "BGE-Reranker", "RRF"],
    desc: "Advanced retrieval pipeline combining parallel BM25 keyword search with dense vector retrieval (BAAI/bge-m3, 1024-dim). Reciprocal Rank Fusion (k=60) fused with a BGE-Reranker-Base cross-encoder. Eliminates single-method retrieval bottlenecks and maximises precision on enterprise document sets.",
    impact: "RRF k=60 FUSION · CROSS-ENCODER RERANKED",
  },
  {
    id: "p6",
    gradient: "linear-gradient(135deg, #1A0E00 0%, #3D1F00 50%, #7C3A00 100%)",
    badge: "COMPUTER VISION · REAL-TIME",
    title: "YOLOv8 Asset Tracker",
    tags: ["YOLOv8", "NumPy", "Pandas", "Python", "Docker"],
    desc: "Local computer vision pipeline for real-time asset tracking. YOLOv8 inference on live camera feeds with NumPy and Pandas preprocessing of raw detection logs — structured bounding box metadata extraction and downstream analytics pipeline.",
    impact: "REAL-TIME DETECTION · STRUCTURED METADATA",
  },
  {
    id: "p7",
    gradient: "linear-gradient(135deg, #0A1410 0%, #1A2D25 50%, #243D33 100%)",
    badge: "E-COMMERCE · CLIENT PRODUCT",
    title: "AL Traders",
    tags: ["E-commerce", "Product Catalog", "Responsive UI", "Client Delivery"],
    desc: "E-commerce product showcase website built for AL Traders — a client project delivering a clean, responsive product catalog interface for their trading business. Focused on fast load times, intuitive browsing, and professional product presentation.",
    impact: "CLIENT DELIVERY · RESPONSIVE · PRODUCT SHOWCASE",
  },
  {
    id: "p8",
    gradient: "linear-gradient(135deg, #141008 0%, #2D2010 50%, #3D2E16 100%)",
    badge: "STATIC SITE · NETLIFY",
    title: "Pommi Catering",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    desc: "Static business website for Pommi Catering built with vanilla HTML, CSS, and JavaScript. Clean presentation of services, menu, and contact details. Deployed and hosted on Netlify with fast global CDN delivery.",
    impact: "NETLIFY · STATIC · CDN HOSTED",
  },
];

const SPRING = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 } as const;

function useSpread() {
  const [spread, setSpread] = useState(260);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSpread(w < 640 ? 95 : w < 1024 ? 180 : 260);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return spread;
}

function getCardMotion(offset: number, spread: number, isMobile: boolean) {
  const abs = Math.abs(offset);
  // On mobile, hide the far cards (±2) — only show ±1 and center
  const hidden = isMobile && abs > 1;
  return {
    x: offset * spread,
    rotateY: offset * -18,
    scale: 1 - abs * 0.1,
    opacity: hidden ? 0 : 1 - abs * 0.2,
    zIndex: hidden ? 0 : 20 - abs * 5,
    filter: `brightness(${1 - abs * 0.28})`,
    pointerEvents: (hidden ? "none" : "auto") as "none" | "auto",
  };
}

// Circular offset: always returns a value in [-2, -1, 0, 1, 2]
function circularOffset(i: number, active: number, total: number): number {
  let offset = i - active;
  if (offset > Math.floor(total / 2)) offset -= total;
  if (offset < -Math.floor(total / 2)) offset += total;
  return offset;
}

function ProjectCard({
  project,
  index,
  offset,
  prevOffset,
  spread,
  isMobile,
  onClick,
}: {
  project: Project;
  index: number;
  offset: number;
  prevOffset: number;
  spread: number;
  isMobile: boolean;
  onClick: () => void;
}) {
  const isActive = offset === 0;
  const cardMotion = getCardMotion(offset, spread, isMobile);
  const isWrapping = Math.abs(offset - prevOffset) > 2;
  const transition = isWrapping ? { duration: 0 } : SPRING;

  return (
    <motion.div
      onClick={onClick}
      animate={cardMotion}
      transition={transition}
      style={{
        position: "absolute",
        left: "50%",
        translateX: "-50%",
        width: "clamp(300px, 38vw, 420px)",
        cursor: isActive ? "default" : "pointer",
        transformStyle: "preserve-3d",
        transformOrigin: "bottom center",
        willChange: "transform",
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          background: "var(--bg-card)",
          border: isActive
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid var(--border)",
          boxShadow: isActive
            ? "0 32px 80px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.3)"
            : "0 8px 24px rgba(0,0,0,0.2)",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Gradient visual block */}
        <div
          style={{
            background: project.gradient,
            height: "clamp(200px, 26vw, 280px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dot texture */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Number */}
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 18,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 7vw, 80px)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.12)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            0{index + 1}
          </span>

          {/* Badge */}
          <span
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              fontFamily: "var(--font-label)",
              fontSize: "7px",
              letterSpacing: "0.12em",
              padding: "4px 9px",
              borderRadius: "9999px",
              background: "rgba(0,0,0,0.4)",
              color: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
            }}
          >
            {project.badge}
          </span>

          {/* Decorative card shape */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: 18,
              width: "80px",
              height: "50px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(4px)",
              transform: "rotate(-6deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -12,
              right: 28,
              width: "80px",
              height: "50px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(4px)",
              transform: "rotate(-2deg)",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: "clamp(1rem, 2vw, 1.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(17px, 2.2vw, 22px)",
              fontWeight: 300,
              color: "var(--text-primary)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "7px",
                  letterSpacing: "0.1em",
                  padding: "2px 7px",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description — only on active */}
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {project.desc}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Impact */}
          {project.impact && isActive && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "8px",
                letterSpacing: "0.14em",
                color: "var(--accent-warm)",
              }}
            >
              {project.impact}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(1);
  const prevActiveRef = useRef(1);
  const prevActive = prevActiveRef.current;
  if (prevActiveRef.current !== active) prevActiveRef.current = active;

  const spread = useSpread();
  const isMobile = spread <= 95;

  const prev = () => setActive((a) => (a - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setActive((a) => (a + 1) % PROJECTS.length);

  const containerH = isMobile ? "clamp(480px, 120vw, 560px)" : "clamp(580px, 68vw, 700px)";

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        background: "var(--bg-primary)",
        padding: "clamp(5rem, 8vw, 8rem) 0",
        overflowX: "hidden",
      }}
    >
      <div className="mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <ScrollReveal className="mb-14">
          <p
            className="mb-3 flex items-center gap-2"
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "var(--accent-warm)",
            }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// SELECTED WORK"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 300,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Agentic systems.<br />
            <span style={{ color: "var(--accent-warm)" }}>Production-grade.</span>
          </h2>
        </ScrollReveal>

        {/* ── Card spread ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Perspective wrapper */}
          <div
            style={{
              perspective: "1200px",
              perspectiveOrigin: "50% 40%",
              position: "relative",
              height: containerH,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {PROJECTS.map((project, i) => {
              const offset = circularOffset(i, active, PROJECTS.length);
              const prevOffset = circularOffset(i, prevActive, PROJECTS.length);
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  offset={offset}
                  prevOffset={prevOffset}
                  spread={spread}
                  isMobile={isMobile}
                  onClick={() => setActive(i)}
                />
              );
            })}
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "none",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s ease, color 0.2s ease",
                fontSize: "16px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-warm)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-warm)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
              aria-label="Previous project"
            >
              ←
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to project ${i + 1}`}
                  style={{
                    width: i === active ? 20 : 6,
                    height: 6,
                    borderRadius: "9999px",
                    background: i === active ? "var(--accent-warm)" : "var(--border)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.3s ease, background 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "none",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s ease, color 0.2s ease",
                fontSize: "16px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-warm)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-warm)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
              aria-label="Next project"
            >
              →
            </button>
          </div>

          {/* Active project name label */}
          <div className="flex justify-center mt-5">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  color: "var(--text-muted)",
                }}
              >
                {String(active + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")} — {PROJECTS[active].badge}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
