"use client";

import { motion, useInView, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiFastapi,
  SiDocker, SiRedis, SiPostgresql, SiNodedotjs, SiGooglecloud,
  SiNextdotjs, SiPytorch, SiSocketdotio, SiExpress,
  SiLeetcode, SiHackerrank,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaBrain, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, X } from "lucide-react";

/* ─── tiny helpers ─────────────────────────────────────────────── */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
      <span style={{
        fontFamily: "var(--font-heading)", fontSize: 9, fontWeight: 700,
        letterSpacing: "0.22em", color: "var(--text)", textTransform: "uppercase", whiteSpace: "nowrap",
      }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

function TimelineLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20, restDelta: 0.001 });
  return (
    <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, overflow: "hidden" }}>
      <motion.div style={{
        position: "absolute", inset: 0,
        background: "var(--border)",
        scaleY,
        transformOrigin: "top",
      }} />
    </div>
  );
}

function TimelineDot() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 250, damping: 20, delay: 0.1 }}
      style={{
        position: "absolute", left: -24, top: 16,
        width: 6, height: 6, borderRadius: "50%",
        background: "var(--text)",
        boxShadow: "0 0 0 2px var(--bg), 0 0 0 3px var(--border-2)",
      }}
    />
  );
}

/* ─── icon lookup for tech tags ────────────────────────────────── */
const TECH_ICONS: Record<string, React.ReactNode> = {
  "Python":        <SiPython size={9} />,
  "JavaScript":    <SiJavascript size={9} />,
  "TypeScript":    <SiTypescript size={9} />,
  "React/Next.js": <SiReact size={9} />,
  "Next.js 15":    <SiNextdotjs size={9} />,
  "Next.js":       <SiNextdotjs size={9} />,
  "FastAPI":       <SiFastapi size={9} />,
  "Docker":        <SiDocker size={9} />,
  "Docker Compose":<SiDocker size={9} />,
  "Redis":         <SiRedis size={9} />,
  "PostgreSQL":    <SiPostgresql size={9} />,
  "Node.js":       <SiNodedotjs size={9} />,
  "GCP":           <SiGooglecloud size={9} />,
  "PyTorch":       <SiPytorch size={9} />,
  "React":         <SiReact size={9} />,
  "Socket.io":     <SiSocketdotio size={9} />,
  "Express.js":    <SiExpress size={9} />,
  "LLM":           <FaBrain size={9} />,
  "PHI3 LLM":      <FaBrain size={9} />,
  "RAG":           <FaBrain size={9} />,
};

function Tag({ label }: { label: string }) {
  const icon = TECH_ICONS[label];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.05em",
      padding: "2px 7px", borderRadius: 3,
      border: "1px solid var(--border-2)", color: "var(--text-3)",
    }}>
      {icon && <span style={{ opacity: 0.7 }}>{icon}</span>}
      {label}
    </span>
  );
}

/* ─── data ─────────────────────────────────────────────────────── */

const STATS = [
  { value: "300+", label: "DSA Problems" },
  { value: "8.6",  label: "MCA CGPA" },
  { value: "3+",   label: "Years Active" },
  { value: "3",    label: "Enterprise Clients" },
];

const EXPERIENCE = [
  {
    period: "2023 – Present",
    role: "Independent Consultant",
    company: "aahrbitx",
    desc: "End-to-end software and AI solutions — fleet management systems, e-commerce platforms, and LLM-powered tools. Independent ML research: U-Net nucleus segmentation pipeline on 2018 Data Science Bowl dataset (Dice 0.87 / IoU 0.79) with downstream morphological feature extraction applicable to drug discovery screening. Clients: Pommi Caterers, AL Traders, Butterbyte's, Entice Innovations, Mohan Cabs.",
    tags: ["Next.js", "FastAPI", "Docker", "WhatsApp API", "Razorpay", "LLM", "PyTorch"],
  },
  {
    period: "Feb 2025 – Oct 2025",
    role: "Data Integration Developer Trainee",
    company: "Infaworx",
    desc: "Full-stack developer at Infaworx Data Management Pvt Ltd. Delivered three enterprise projects: NPC Qatar — data marketplace with RAG chatbot and real-time collaboration (Socket.io); PIF — data sharing and data quality platform (React + Express.js); SDB — on-premises LLM classification middleware (PHI3) for automated confidentiality detection. Deployed on GCP.",
    tags: ["React/Next.js", "FastAPI", "RAG", "Redis", "GCP", "PostgreSQL"],
  },
  {
    period: "Aug 2024 – Sep 2024",
    role: "Business Development Associate",
    company: "AccioJob",
    desc: "Managed B2B/B2C sales pipeline with CRM tools. Gained firsthand insight into how businesses evaluate and pay for software — informs how I scope and prioritise features.",
    tags: ["CRM", "B2B/B2C Sales", "Pipeline Management"],
  },
];

interface Project {
  num: string;
  title: string;
  badge: string;
  gradient: string;
  tags: string[];
  desc: string;
  impact: string;
  url?: string;
}

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Mohan Cabs",
    badge: "FLEET MGMT · FULL STACK · PRODUCTION",
    gradient: "linear-gradient(135deg, #0D0820 0%, #1A0F45 50%, #2D1B7A 100%)",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL", "Redis", "Docker", "Razorpay"],
    desc: "Multi-role fleet management platform (admin / driver / user) — vehicle inventory, driver lifecycle, dynamic pricing by category, and end-to-end booking dispatch across local, outstation, and airport transfers. Real-time GPS ingestion for live fleet visibility. Automated WhatsApp Business API pipeline for OTP auth, confirmations, and Razorpay payment links — with SMS fallback via Fast2SMS. Deployed on VPS with Docker + Traefik.",
    impact: "LIVE GPS · WHATSAPP AUTOMATION · RAZORPAY · VPS DEPLOYED",
    url: "https://www.mohancabs.in",
  },
  {
    num: "02",
    title: "SDB — LLM Classification Middleware",
    badge: "SOCIAL DEVELOPMENT BANK · ON-PREMISES",
    gradient: "linear-gradient(135deg, #1A0808 0%, #3D0E0E 50%, #6B1515 100%)",
    tags: ["PHI3 LLM", "Python", "FastAPI", "Docker"],
    desc: "On-premises LLM classification middleware for Social Development Bank (SDB) — via Infaworx Data Management Pvt Ltd. PHI3 with custom multi-level prompt engineering for automated confidentiality detection across migrating datasets. Deployed on-premises across a multi-level virtual machine infrastructure with zero cloud dependency — ensuring sensitive data never leaves the client environment.",
    impact: "ON-PREMISES · PHI3 · CONFIDENTIALITY CLASSIFICATION · ZERO CLOUD",
  },
  {
    num: "03",
    title: "PIF — Data Sharing & Quality Platform",
    badge: "PUBLIC INVESTMENT FUND · FULL STACK",
    gradient: "linear-gradient(135deg, #080D1A 0%, #0E1F3D 50%, #152E5C 100%)",
    tags: ["React", "Express.js", "Node.js", "PostgreSQL"],
    desc: "Data sharing and data quality management platform for Public Investment Fund (PIF) — via Infaworx Data Management Pvt Ltd. Built with React frontend and Express.js/Node.js backend, enabling cross-department data sharing with automated quality validation and update workflows. Designed to streamline internal data governance across PIF's operational teams.",
    impact: "CROSS-DEPARTMENT SHARING · AUTOMATED QUALITY VALIDATION",
  },
  {
    num: "04",
    title: "NPC — Data Marketplace",
    badge: "NATIONAL PLANNING COUNCIL QATAR · RAG",
    gradient: "linear-gradient(135deg, #0A0F1E 0%, #0D1B3E 50%, #1a2a6c 100%)",
    tags: ["RAG", "Socket.io", "Node.js", "PostgreSQL"],
    desc: "Enterprise data marketplace for National Planning Council Qatar (NPC) — via Infaworx Data Management Pvt Ltd. RAG-based chatbot for intelligent data product recommendations and search, powered by ChromaDB and a dense embedding model. Real-time internal team collaboration channel built on Socket.io. Session-based auth middleware with automatic session-expiry re-login handling.",
    impact: "RAG RECOMMENDATIONS · SOCKET.IO REAL-TIME · SESSION MIDDLEWARE",
    url: "https://npc-qc-uat-marketplace.npc.qa",
  },
  {
    num: "05",
    title: "Intelligent Retrieval System for Quantized LLMs",
    badge: "ENTERPRISE RAG · LOCAL LLM · SECURE",
    gradient: "linear-gradient(135deg, #0E0B1F 0%, #1C1245 50%, #28196A 100%)",
    tags: ["Python", "FastAPI", "Docker Compose"],
    desc: "Secure single-tenant enterprise AI knowledge engine. Qwen2.5-3B quantized to Q4_K_M GGUF for 10–18 tok/s CPU inference — no GPU required. Hybrid BM25 + dense vector retrieval (BAAI/bge-m3, 1024-dim) with 3-layer security: local license middleware, JWT auth, and pre-retrieval ACL filters. Zero external data exposure by design.",
    impact: "10-18 TOK/S CPU INFERENCE · 3-LAYER SECURITY · ZERO DATA LEAKAGE",
    url: "https://github.com/abinjustinkumaravel/IRSFQLLMS",
  },
  {
    num: "06",
    title: "Nuclei Segmentation Pipeline",
    badge: "DEEP LEARNING · BIOIMAGE · DRUG DISCOVERY",
    gradient: "linear-gradient(135deg, #031A14 0%, #0A4030 50%, #0E6B4A 100%)",
    tags: ["PyTorch", "U-Net", "scikit-image", "Albumentations"],
    desc: "End-to-end deep learning pipeline for automated cell nucleus segmentation on the 2018 Data Science Bowl microscopy dataset (Broad Institute BBBC). U-Net with ResNet34 encoder (ImageNet-pretrained) trained with combined Dice + BCE loss. Watershed post-processing to separate touching nuclei instances. Phenotypic profiling module using skimage.measure.regionprops extracts per-image morphological features (nucleus count, area, eccentricity, solidity, intensity) — directly analogous to compound screening workflows in drug discovery. Domain-specific augmentations via Albumentations (elastic deformation, illumination jitter, flips) handle staining and imaging variability.",
    impact: "DICE 0.87 · IoU 0.79 · 93.5% RECALL · 82.4% PRECISION",
    url: "https://www.kaggle.com/code/abinj12553/nuclei-segmentation-phenotypic-profiling-for-dru",
  },
  {
    num: "07",
    title: "YOLOv8 Asset Tracker",
    badge: "COMPUTER VISION · REAL-TIME",
    gradient: "linear-gradient(135deg, #1A0E00 0%, #3D1F00 50%, #7C3A00 100%)",
    tags: ["Python", "Docker", "PyTorch"],
    desc: "Local computer vision pipeline for real-time asset tracking. YOLOv8 inference on live camera feeds with NumPy and Pandas preprocessing of raw detection logs — structured bounding box metadata extraction and downstream analytics pipeline. Containerized with Docker for consistent deployment across environments.",
    impact: "REAL-TIME DETECTION · STRUCTURED METADATA EXTRACTION",
  },
  {
    num: "08",
    title: "AL Traders",
    badge: "E-COMMERCE · CLIENT DELIVERY",
    gradient: "linear-gradient(135deg, #0A1410 0%, #1A2D25 50%, #243D33 100%)",
    tags: ["Next.js", "PostgreSQL"],
    desc: "E-commerce product showcase website built for AL Traders — a client project delivering a clean, responsive product catalog interface for their trading business. Focused on fast load times, intuitive browsing, and professional product presentation across device sizes.",
    impact: "CLIENT DELIVERY · RESPONSIVE · PRODUCT SHOWCASE",
    url: "https://www.altraders.in",
  },
  {
    num: "09",
    title: "Pommi Catering",
    badge: "STATIC SITE · NETLIFY",
    gradient: "linear-gradient(135deg, #141008 0%, #2D2010 50%, #3D2E16 100%)",
    tags: ["JavaScript"],
    desc: "Static business website for Pommi Catering built with vanilla HTML, CSS, and JavaScript. Clean presentation of services, menu, and contact details. Deployed and hosted on Netlify with fast global CDN delivery.",
    impact: "NETLIFY · STATIC · GLOBAL CDN HOSTED",
    url: "https://www.pommicaters.in",
  },
];

const EDUCATION = [
  {
    short: "MCA",
    degree: "Master of Computer Applications",
    institution: "SRM Institute of Science and Technology",
    period: "2024 – 2026",
    cgpa: "8.6",
    status: "Pursuing",
    highlights: ["AI/ML Specialization", "Full-Stack Development", "Cloud & DevOps"],
  },
  {
    short: "BCA",
    degree: "Bachelor of Computer Applications",
    institution: "SRM Institute of Science and Technology",
    period: "2021 – 2024",
    cgpa: "8.5",
    status: "Completed",
    highlights: ["Data Science Track", "Python & ML", "Database Systems"],
  },
];

/* ─── project modal ─────────────────────────────────────────────── */

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.72)",
          backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={e => e.stopPropagation()}
          style={{
            width: "100%", maxWidth: 520,
            background: "var(--bg-card)",
            border: "1px solid var(--border-2)",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          }}
        >
          {/* Gradient banner */}
          <div style={{
            background: project.gradient,
            height: 140,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* dot texture */}
            <div aria-hidden style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }} />
            {/* big number */}
            <span style={{
              position: "absolute", top: 14, left: 18,
              fontFamily: "var(--font-heading)", fontSize: 72, fontWeight: 700,
              color: "rgba(255,255,255,0.1)", letterSpacing: "-0.04em",
              lineHeight: 1, userSelect: "none",
            }}>{project.num}</span>
            {/* badge */}
            <span style={{
              position: "absolute", top: 14, right: 48,
              fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.12em",
              padding: "4px 9px", borderRadius: 9999,
              background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
            }}>{project.badge}</span>
            {/* title at bottom of banner */}
            <h3 style={{
              position: "absolute", bottom: 16, left: 18, right: 18,
              fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700,
              color: "#fff", margin: 0, lineHeight: 1.2,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}>{project.title}</h3>
            {/* close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute", top: 12, right: 12,
                width: 28, height: 28, borderRadius: "50%",
                background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
              aria-label="Close"
            >
              <X size={13} />
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {project.tags.map(t => <Tag key={t} label={t} />)}
            </div>
            {/* Full description */}
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-2)",
              lineHeight: 1.78, margin: 0,
            }}>{project.desc}</p>
            {/* Impact line */}
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.12em",
              color: "var(--text-3)", margin: 0,
              paddingTop: 10, borderTop: "1px solid var(--border)",
            }}>{project.impact}</p>
            {/* Live link */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em",
                  padding: "7px 14px", borderRadius: 5,
                  border: "1px solid var(--border-2)",
                  color: "var(--text-2)", textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--text-3)";
                  e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-2)";
                  e.currentTarget.style.color = "var(--text-2)";
                }}
              >
                VISIT LIVE SITE ↗
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── project card ──────────────────────────────────────────────── */

const BANNER_H = 82;
const CARD_H   = 272;

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 7,
        overflow: "hidden",
        display: "flex", flexDirection: "column",
        height: CARD_H,
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--border-2)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Gradient banner */}
      <div style={{
        background: project.gradient,
        height: BANNER_H, flexShrink: 0,
        position: "relative", overflow: "hidden",
        borderBottom: "1px solid var(--border)",
      }}>
        {/* dot texture */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }} />
        <span style={{
          position: "absolute", top: 10, left: 14,
          fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 700,
          color: "rgba(255,255,255,0.12)", letterSpacing: "-0.04em",
          lineHeight: 1, userSelect: "none",
        }}>{project.num}</span>
        <span style={{
          position: "absolute", top: 12, right: 12,
          fontFamily: "var(--font-mono)", fontSize: 6.5, letterSpacing: "0.1em",
          padding: "3px 8px", borderRadius: 9999,
          background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(8px)", maxWidth: 160,
          textAlign: "right", lineHeight: 1.4,
        }}>{project.badge}</span>
      </div>

      {/* Content — fixed height fills remainder */}
      <div style={{
        padding: "11px 14px 12px",
        flex: 1, minHeight: 0,
        display: "flex", flexDirection: "column", gap: 7,
      }}>
        {/* Title */}
        <h3 style={{
          fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700,
          color: "var(--text)", lineHeight: 1.25, margin: 0, flexShrink: 0,
        }}>{project.title}</h3>

        {/* Description — 3-line clamp */}
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-2)",
          lineHeight: 1.65, margin: 0, flex: 1, minHeight: 0,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>{project.desc}</p>

        {/* Bottom row: tags + learn more */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexShrink: 0, gap: 6 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, flex: 1, minWidth: 0 }}>
            {project.tags.slice(0, 3).map(t => <Tag key={t} label={t} />)}
            {project.tags.length > 3 && (
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)",
                padding: "2px 5px", letterSpacing: "0.04em",
              }}>+{project.tags.length - 3}</span>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.08em",
                  color: "var(--text-3)", whiteSpace: "nowrap", textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
              >
                LIVE ↗
              </a>
            )}
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.08em",
              color: "var(--text-3)", whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}>
              VIEW →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── main ─────────────────────────────────────────────────────── */

export default function DevMain() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <main style={{ background: "var(--bg)", transition: "background 0.25s" }}>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      {/* ── Stat strip ──────────────────────────────────────────── */}
      <div className="dev-stats-strip" style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        borderBottom: "1px solid var(--border)",
      }}>
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            style={{
              padding: "18px 20px",
              borderRight: i < 3 ? "1px solid var(--border)" : "none",
              background: "var(--bg-card)",
              transition: "background 0.25s",
            }}
          >
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, color: "var(--text)", lineHeight: 1, marginBottom: 3 }}>
              {s.value}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", color: "var(--text-3)" }}>
              {s.label.toUpperCase()}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── About ───────────────────────────────────────────────── */}
      <div className="dev-main-section-top" style={{ padding: "32px 32px 0" }}>
        <SectionTitle>About</SectionTitle>
        <Reveal>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-2)",
            lineHeight: 1.85, maxWidth: 620, marginBottom: 32,
          }}>
            I build AI systems that run in production — not demos. Specialising in LLM pipelines,
            RAG architectures, and Python-first backends, I design systems where retrieval is precise,
            inference is fast, and the API never becomes the bottleneck. From hybrid BM25 + vector search
            with cross-encoder reranking to on-premises LLM deployment with zero data leakage — I care
            deeply about how the stack performs under real load. Currently pursuing MCA at SRM (8.6 CGPA)
            and taking on consulting work through <em>aahrbitx</em>.
          </p>
        </Reveal>
      </div>

      {/* ── Experience ──────────────────────────────────────────── */}
      <div className="dev-main-section" style={{ padding: "0 32px" }}>
        <SectionTitle>Experience</SectionTitle>
        <div ref={timelineRef} style={{ position: "relative", paddingLeft: 28, marginBottom: 32 }}>
          <TimelineLine containerRef={timelineRef} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {EXPERIENCE.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.08}>
                <div style={{ position: "relative" }}>
                  <TimelineDot />
                  <div style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 7, padding: "14px 16px",
                    transition: "border-color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-2)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 4, marginBottom: 6 }}>
                      <div>
                        <span style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                          {entry.role}
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--text-3)", marginLeft: 7 }}>
                          @ {entry.company}
                        </span>
                      </div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                        {entry.period}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-2)", lineHeight: 1.72, marginBottom: 10 }}>
                      {entry.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {entry.tags.map(t => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects ────────────────────────────────────────────── */}
      <div className="dev-main-section" style={{ padding: "0 32px" }}>
        <SectionTitle>Projects</SectionTitle>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 10,
          marginBottom: 32,
        }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.04, 0.24)}>
              <ProjectCard project={p} onClick={() => setActiveProject(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Education ───────────────────────────────────────────── */}
      <div className="dev-main-section" style={{ padding: "0 32px" }}>
        <SectionTitle>Education</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 10, marginBottom: 32 }}>
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.short} delay={i * 0.1}>
              <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 7, padding: "16px 18px",
                display: "flex", flexDirection: "column", gap: 10,
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-2)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: 30, fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>
                      {edu.cgpa}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-3)", marginLeft: 4 }}>CGPA</span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-heading)", fontSize: 8, fontWeight: 700,
                    letterSpacing: "0.12em", padding: "3px 8px", borderRadius: 9999,
                    border: "1px solid var(--border-2)", color: "var(--text-3)",
                  }}>{edu.status.toUpperCase()}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: "0.06em", marginBottom: 4 }}>
                    {edu.period}
                  </p>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
                    {edu.short} — {edu.degree.split(" ").slice(0, 3).join(" ")}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--text-3)", lineHeight: 1.4 }}>
                    {edu.institution}
                  </p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {edu.highlights.map(h => <Tag key={h} label={h} />)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── DSA Stats ───────────────────────────────────────────── */}
      <div className="dev-main-section" style={{ padding: "0 32px" }}>
        <SectionTitle>Problem Solving</SectionTitle>
        <Reveal>
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 7, padding: "22px 24px",
            marginBottom: 32,
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 2 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>300</span>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "var(--text-3)", lineHeight: 1 }}>+</span>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)", letterSpacing: "0.08em", marginBottom: 18 }}>
              PROBLEMS SOLVED ACROSS PLATFORMS
            </p>
            <div className="dev-dsa-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { name: "LeetCode",  icon: <SiLeetcode size={13} />, count: "200+", url: "https://leetcode.com/u/abinjustinkumaravel/", topics: ["Arrays", "Dynamic Programming", "Trees & Graphs", "Binary Search"] },
                { name: "HackerRank", icon: <SiHackerrank size={13} />, count: "100+", url: "https://www.hackerrank.com/profile/abinj2003", topics: ["Python 5★", "SQL 4★", "Problem Solving", "Data Structures"] },
              ].map(p => (
                <div key={p.name} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "12px 14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "var(--text-3)", display: "flex", alignItems: "center" }}>{p.icon}</span>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-3)", letterSpacing: "0.1em", margin: 0 }}>
                        {p.name.toUpperCase()}
                      </p>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-mono)", fontSize: 7.5, letterSpacing: "0.08em",
                        color: "var(--text-3)", textDecoration: "none", transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
                    >
                      VISIT →
                    </a>
                  </div>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, color: "var(--text)", lineHeight: 1, marginBottom: 8 }}>
                    {p.count}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {p.topics.map(t => (
                      <span key={t} style={{
                        fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.04em",
                        padding: "2px 6px", borderRadius: 3,
                        border: "1px solid var(--border-2)", color: "var(--text-3)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Contact ─────────────────────────────────────────────── */}
      <div className="dev-main-section" style={{ padding: "0 32px" }}>
        <SectionTitle>Contact</SectionTitle>
        <Reveal>
          <div style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 7, padding: "22px 24px",
            marginBottom: 0,
          }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-2)", lineHeight: 1.8, maxWidth: 520, marginBottom: 18 }}>
              Open to full-time roles, internships, and consulting engagements in AI engineering and full-stack development.
              Reach out directly — I respond fast.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: <Mail size={12} />,         label: "Email",    value: "abinjustinkumaravel@gmail.com",  href: "mailto:abinjustinkumaravel@gmail.com" },
                { icon: <FaGithub size={12} />,     label: "GitHub",   value: "github.com/abinjustinkumaravel", href: "https://github.com/abinjustinkumaravel" },
                { icon: <FaLinkedinIn size={12} />, label: "LinkedIn", value: "linkedin.com/in/abin-justin-kumaravel", href: "https://www.linkedin.com/in/abin-justin-kumaravel/" },
                { icon: <FaTwitter size={12} />,    label: "X",        value: "x.com/Abin_JKV",                href: "https://x.com/Abin_JKV" },
                { icon: <MapPin size={12} />,       label: "Location", value: "Thiruvananthapuram, Kerala",     href: undefined },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: "var(--text-3)", display: "flex", alignItems: "center", width: 16 }}>{icon}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", color: "var(--text-3)", width: 56, flexShrink: 0 }}>
                    {label.toUpperCase()}
                  </span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-2)",
                      textDecoration: "none", transition: "color 0.2s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
                    >{value}</a>
                  ) : (
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-2)" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <div style={{ padding: "18px 32px 28px", marginTop: 28, borderTop: "1px solid var(--border)" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-3)", letterSpacing: "0.1em" }}>
          © {new Date().getFullYear()} ABIN JUSTIN KUMARAVEL
        </p>
      </div>

    </main>
  );
}
