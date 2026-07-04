"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiFastapi,
  SiDocker, SiRedis, SiPostgresql, SiNodedotjs, SiGooglecloud,
  SiNextdotjs, SiPytorch, SiSocketdotio, SiExpress,
} from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaBrain, FaTwitter } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

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
    desc: "End-to-end software and AI solutions — fleet management systems, e-commerce platforms, and LLM-powered tools. Clients: Pommi Caterers, AL Traders, Butterbyte's, Entice Innovations, Mohan Cabs.",
    tags: ["Next.js", "FastAPI", "Docker", "WhatsApp API", "Razorpay", "LLM"],
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

const PROJECTS = [
  {
    num: "01",
    title: "Mohan Cabs",
    badge: "FLEET MGMT · FULL STACK · PRODUCTION",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL", "Redis", "Docker", "Razorpay"],
    desc: "Multi-role fleet management platform — vehicle inventory, driver lifecycle, dynamic pricing, booking dispatch. Real-time GPS + WhatsApp OTP automation + Razorpay payment links.",
  },
  {
    num: "02",
    title: "SDB — LLM Classification Middleware",
    badge: "SOCIAL DEVELOPMENT BANK · ON-PREMISES",
    tags: ["PHI3 LLM", "Python", "FastAPI", "Docker"],
    desc: "On-premises LLM classification middleware for Social Development Bank (SDB) — via Infaworx Data Management Pvt Ltd. PHI3 with multi-level prompt engineering for automated confidentiality detection across migrating datasets. Zero cloud dependency.",
  },
  {
    num: "03",
    title: "PIF — Data Sharing & Quality Platform",
    badge: "PUBLIC INVESTMENT FUND · FULL STACK",
    tags: ["React", "Express.js", "Node.js", "PostgreSQL"],
    desc: "Data sharing and data quality management platform for Public Investment Fund (PIF) — via Infaworx Data Management Pvt Ltd. Built with React frontend and Express.js backend, enabling cross-department data sharing with automated quality validation and update workflows.",
  },
  {
    num: "04",
    title: "NPC — Data Marketplace",
    badge: "NATIONAL PLANNING COUNCIL QATAR · RAG",
    tags: ["RAG", "Socket.io", "Node.js", "PostgreSQL"],
    desc: "Enterprise data marketplace for National Planning Council Qatar (NPC) — via Infaworx Data Management Pvt Ltd. RAG-based chatbot for intelligent data product recommendations and search. Real-time team collaboration via Socket.io with session-based auth middleware.",
  },
  {
    num: "05",
    title: "Pegasyz",
    badge: "ENTERPRISE RAG · LOCAL LLM · SECURE",
    tags: ["Python", "FastAPI", "Docker Compose"],
    desc: "Secure single-tenant enterprise AI knowledge engine. Qwen2.5-3B GGUF, 10–18 tok/s CPU inference. Hybrid BM25 + dense retrieval with 3-layer security: license middleware, JWT auth, ACL filters.",
  },
  {
    num: "06",
    title: "Hybrid RAG Engine",
    badge: "HYBRID SEARCH · RERANKING",
    tags: ["Python", "FastAPI"],
    desc: "Advanced retrieval combining parallel BM25 + dense vector retrieval (BAAI/bge-m3, 1024-dim). Reciprocal Rank Fusion (k=60) fused with BGE-Reranker cross-encoder.",
  },
  {
    num: "07",
    title: "YOLOv8 Asset Tracker",
    badge: "COMPUTER VISION · REAL-TIME",
    tags: ["Python", "Docker", "PyTorch"],
    desc: "Local CV pipeline for real-time asset tracking. YOLOv8 on live camera feeds, NumPy/Pandas preprocessing of detection logs, structured bounding box metadata extraction.",
  },
  {
    num: "08",
    title: "AL Traders",
    badge: "E-COMMERCE · CLIENT DELIVERY",
    tags: ["Next.js", "PostgreSQL"],
    desc: "E-commerce product showcase for AL Traders — clean responsive catalog, fast load times, professional product presentation.",
  },
  {
    num: "09",
    title: "Pommi Catering",
    badge: "STATIC SITE · NETLIFY",
    tags: ["JavaScript"],
    desc: "Static business site for Pommi Catering — service listings, menu, contact. Deployed on Netlify with global CDN.",
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

/* ─── main ─────────────────────────────────────────────────────── */

export default function DevMain() {
  return (
    <main style={{ background: "var(--bg)", transition: "background 0.25s", overflowY: "auto" }}>

      {/* ── Stat strip ──────────────────────────────────────────── */}
      <div style={{
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
      <div style={{ padding: "32px 32px 0" }}>
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
      <div style={{ padding: "0 32px" }}>
        <SectionTitle>Experience</SectionTitle>
        <div style={{ position: "relative", paddingLeft: 18, marginBottom: 32 }}>
          {/* vertical line */}
          <div style={{
            position: "absolute", left: 0, top: 8, bottom: 8,
            width: 1, background: "var(--border)",
          }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {EXPERIENCE.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.08}>
                <div style={{ position: "relative" }}>
                  {/* dot */}
                  <div style={{
                    position: "absolute", left: -22, top: 16,
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--text)",
                    boxShadow: "0 0 0 2px var(--bg), 0 0 0 3px var(--border-2)",
                  }} />
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
      <div style={{ padding: "0 32px" }}>
        <SectionTitle>Projects</SectionTitle>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: 10,
          marginBottom: 32,
        }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.04, 0.24)}>
              <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 7,
                overflow: "hidden",
                display: "flex", flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* thumbnail strip */}
                <div style={{
                  background: "var(--bg-hover)",
                  borderBottom: "1px solid var(--border)",
                  padding: "14px 16px 10px",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                }}>
                  <span style={{
                    fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700,
                    color: "var(--border-2)", lineHeight: 1, letterSpacing: "-0.04em",
                    userSelect: "none",
                  }}>{p.num}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.1em",
                    color: "var(--text-3)", textAlign: "right", maxWidth: 140, lineHeight: 1.4,
                  }}>{p.badge}</span>
                </div>

                {/* content */}
                <div style={{ padding: "12px 16px 14px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700,
                    color: "var(--text)", lineHeight: 1.3,
                  }}>{p.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-2)",
                    lineHeight: 1.7, flex: 1,
                  }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {p.tags.map(t => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Education ───────────────────────────────────────────── */}
      <div style={{ padding: "0 32px" }}>
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
      <div style={{ padding: "0 32px" }}>
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { name: "LeetCode",  count: "200+", topics: ["Arrays", "Dynamic Programming", "Trees & Graphs", "Binary Search"] },
                { name: "HackerRank", count: "100+", topics: ["Python 5★", "SQL 4★", "Problem Solving", "Data Structures"] },
              ].map(p => (
                <div key={p.name} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "12px 14px" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--text-3)", letterSpacing: "0.1em", marginBottom: 4 }}>
                    {p.name.toUpperCase()}
                  </p>
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
      <div style={{ padding: "0 32px" }}>
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
                { icon: <FaTwitter size={12} />,   label: "X",        value: "x.com/Abin_JKV",                   href: "https://x.com/Abin_JKV" },
                { icon: <MapPin size={12} />,       label: "Location", value: "Thiruvananthapuram, Kerala",        href: undefined },
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
