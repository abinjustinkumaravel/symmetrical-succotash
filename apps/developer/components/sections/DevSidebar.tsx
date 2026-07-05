"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, MapPin, Download, Play, Pause, X, Sun, Moon } from "lucide-react";
import { useCallback } from "react";
import { SiPython, SiJavascript, SiTypescript, SiReact, SiFastapi } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaBrain, FaTwitter } from "react-icons/fa";

const CF_VIDEO_ID = process.env.NEXT_PUBLIC_CF_VIDEO_ID ?? "";

/* ── Theme toggle ─────────────────────────────────────────────── */
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      style={{
        display: "flex", alignItems: "center", gap: 7,
        padding: "7px 14px", borderRadius: 6,
        background: "var(--bg-hover)", border: "1px solid var(--border-2)",
        color: "var(--text-2)", cursor: "pointer",
        fontFamily: "var(--font-heading)", fontSize: 10, fontWeight: 700,
        letterSpacing: "0.1em", transition: "all 0.2s", width: "100%",
        justifyContent: "center",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "var(--border-2)"; e.currentTarget.style.color = "var(--text)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "var(--bg-hover)"; e.currentTarget.style.color = "var(--text-2)"; }}
    >
      {dark ? <Sun size={12} /> : <Moon size={12} />}
      {dark ? "LIGHT MODE" : "DARK MODE"}
    </button>
  );
}

/* ── SVG skill ring ───────────────────────────────────────────── */
const SKILL_ICONS: Record<string, React.ReactNode> = {
  "Python":     <SiPython size={11} />,
  "JavaScript": <SiJavascript size={11} />,
  "TypeScript": <SiTypescript size={11} />,
  "React/Next": <SiReact size={11} />,
  "FastAPI":    <SiFastapi size={11} />,
  "RAG / LLM":  <FaBrain size={11} />,
};

function Ring({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const r = 26, circ = 2 * Math.PI * r;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
      <div style={{ position: "relative", width: 66, height: 66 }}>
        <svg width={66} height={66} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={33} cy={33} r={r} fill="none" stroke="var(--border-2)" strokeWidth={4} />
          <motion.circle
            cx={33} cy={33} r={r} fill="none"
            stroke="var(--ink)" strokeWidth={4} strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ - (pct / 100) * circ }}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
          />
        </svg>
        {/* inset:0 + flex centering is more reliable than translate(-50%,-50%) */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 3,
        }}>
          <span style={{ color: "var(--text-3)", display: "flex" }}>{SKILL_ICONS[label]}</span>
          <span style={{
            fontFamily: "var(--font-heading)", fontSize: 11, fontWeight: 700,
            color: "var(--text)", lineHeight: 1, letterSpacing: "-0.01em",
          }}>{pct}%</span>
        </div>
      </div>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 9, color: "var(--text-2)", textAlign: "center", lineHeight: 1.3 }}>
        {label}
      </span>
    </div>
  );
}

/* ── Skill bar ────────────────────────────────────────────────── */
function Bar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--text-2)" }}>{label}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--text-3)" }}>{pct}%</span>
      </div>
      <div style={{ height: 2, background: "var(--border-2)", borderRadius: 2, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{ height: "100%", background: "var(--ink)", borderRadius: 2 }}
        />
      </div>
    </div>
  );
}

/* ── Section label ────────────────────────────────────────────── */
function SideLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid var(--border)" }}>
      <span style={{
        fontFamily: "var(--font-heading)", fontSize: 9, fontWeight: 700,
        letterSpacing: "0.18em", color: "var(--text)", textTransform: "uppercase",
      }}>{children}</span>
    </div>
  );
}

const SKILLS = [
  { label: "Python",     pct: 90 },
  { label: "JavaScript", pct: 82 },
  { label: "TypeScript", pct: 74 },
  { label: "React/Next", pct: 82 },
  { label: "FastAPI",    pct: 85 },
  { label: "RAG / LLM", pct: 80 },
];

const EXPERTISE = [
  { label: "LLM / RAG Pipelines",  pct: 88 },
  { label: "ChromaDB / VectorDB",  pct: 80 },
  { label: "Docker / GCP",         pct: 76 },
  { label: "PostgreSQL / Redis",   pct: 78 },
  { label: "PyTorch / HuggingFace",pct: 75 },
];

/* ── Contact links ─────────────────────────────────────────────── */
const CONTACT = [
  { icon: <Mail size={11} />,       text: "abinjustinkumaravel@gmail.com",  href: "mailto:abinjustinkumaravel@gmail.com" },
  { icon: <FaGithub size={11} />,   text: "github.com/abinjustinkumaravel", href: "https://github.com/abinjustinkumaravel" },
  { icon: <FaLinkedinIn size={11} />, text: "linkedin.com/in/abin-justin-kumaravel", href: "https://www.linkedin.com/in/abin-justin-kumaravel/" },
  { icon: <FaTwitter size={11} />,  text: "x.com/Abin_JKV",                 href: "https://x.com/Abin_JKV" },
  { icon: <MapPin size={11} />,     text: "Thiruvananthapuram, Kerala",      href: undefined },
];

export default function DevSidebar() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [photoHover, setPhotoHover] = useState(false);

  // close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setVideoOpen(false);
  }, []);

  useEffect(() => {
    if (videoOpen) document.addEventListener("keydown", handleKeyDown);
    else document.removeEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [videoOpen, handleKeyDown]);

  return (
    <>
      <aside style={{
        background: "var(--bg-card)",
        borderRight: "1px solid var(--border)",
        position: "sticky", top: 0, height: "100dvh",
        overflow: "hidden",
        display: "flex", flexDirection: "column",
        padding: "28px 22px",
        gap: 22,
        scrollbarWidth: "none",
        transition: "background 0.25s, border-color 0.25s, padding 0.3s ease",
        minWidth: 0,
      }}>

        {/* ── Profile photo + name ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          {/* Photo — click to play intro video */}
          <button
            onClick={() => setVideoOpen(true)}
            onMouseEnter={() => setPhotoHover(true)}
            onMouseLeave={() => setPhotoHover(false)}
            aria-label="Play intro video"
            style={{
              width: 92, height: 92, borderRadius: "50%",
              overflow: "hidden",
              border: photoHover ? "2px solid var(--text)" : "2px solid var(--border-2)",
              margin: "0 auto 14px",
              position: "relative",
              background: "var(--bg-hover)",
              flexShrink: 0,
              cursor: "pointer",
              padding: 0,
              display: "block",
              transition: "border-color 0.2s",
            }}
          >
            <Image
              src="/images/profile.png"
              alt="Abin Justin Kumaravel"
              fill
              priority
              sizes="92px"
              style={{
                objectFit: "cover", objectPosition: "top center",
                filter: photoHover ? "brightness(0.55)" : "brightness(1)",
                transition: "filter 0.2s",
              }}
            />
            {/* Play / Pause overlay */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: photoHover || videoOpen ? 1 : 0,
              transition: "opacity 0.2s",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {videoOpen
                  ? <Pause size={12} fill="#000" color="#000" />
                  : <Play size={12} fill="#000" color="#000" style={{ marginLeft: 2 }} />
                }
              </div>
            </div>
          </button>

          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-3)", marginBottom: 3, fontStyle: "italic" }}>
            I&apos;m
          </p>
          <h1 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(15px, 1.8vw, 18px)",
            fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em",
            lineHeight: 1.2, marginBottom: 5,
          }}>
            Abin Justin Kumaravel
          </h1>
          <p style={{
            fontFamily: "var(--font-heading)", fontSize: 8, fontWeight: 600,
            letterSpacing: "0.15em", color: "var(--text-2)", marginBottom: 12,
            textTransform: "uppercase",
          }}>
            AI Engineer · Full-Stack Dev
          </p>

          {/* Open to hire badge */}
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontFamily: "var(--font-heading)", fontSize: 8, fontWeight: 700,
            letterSpacing: "0.1em", padding: "4px 11px", borderRadius: 9999,
            border: "1px solid var(--border-2)", color: "var(--text-2)",
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--text)", animation: "blink 2s infinite" }} />
            OPEN TO HIRE
          </span>
        </motion.div>

        {/* ── Contact ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
          <SideLabel>Contact</SideLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CONTACT.map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ color: "var(--text-3)", flexShrink: 0, marginTop: 2 }}>{icon}</span>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--text-2)", textDecoration: "none", lineHeight: 1.4, wordBreak: "break-all", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
                  >{text}</a>
                ) : (
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "var(--text-2)", lineHeight: 1.4 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Special skills (rings) ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }}>
          <SideLabel>Special Skills</SideLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px 4px" }}>
            {SKILLS.map((s, i) => (
              <Ring key={s.label} label={s.label} pct={s.pct} delay={0.3 + i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* ── Expertise bars ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.26, duration: 0.5 }}>
          <SideLabel>Expertise</SideLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {EXPERTISE.map((e, i) => (
              <Bar key={e.label} label={e.label} pct={e.pct} delay={0.4 + i * 0.08} />
            ))}
          </div>
        </motion.div>

        {/* spacer */}
        <div style={{ flex: 1 }} />

        {/* ── Buttons ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: 7 }}
        >
          <ThemeToggle />

          {/* Intro video — prominent card trigger */}
          <button
            onClick={() => setVideoOpen(true)}
            style={{
              width: "100%", border: "1px solid var(--border-2)",
              borderRadius: 7, overflow: "hidden", cursor: "pointer", padding: 0,
              background: "var(--bg-hover)", transition: "border-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-2)")}
            aria-label="Play intro video"
          >
            {/* Thumbnail strip */}
            <div style={{
              position: "relative", height: 58,
              background: "var(--border)", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Image
                src="/images/profile.png"
                alt=""
                fill
                sizes="246px"
                style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.5 }}
              />
              {/* Play circle */}
              <div style={{
                position: "relative", zIndex: 1,
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
              }}>
                <Play size={13} fill="#000" color="#000" style={{ marginLeft: 2 }} />
              </div>
            </div>
            {/* Label row */}
            <div style={{
              padding: "8px 12px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{
                fontFamily: "var(--font-heading)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.1em", color: "var(--text)",
              }}>INTRO VIDEO</span>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 8,
                color: "var(--text-3)", letterSpacing: "0.04em",
              }}>CLICK TO PLAY</span>
            </div>
          </button>

          <a href="/resume" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
            padding: "9px 14px", borderRadius: 6,
            background: "var(--text)", border: "none", color: "var(--bg)",
            textDecoration: "none",
            fontFamily: "var(--font-heading)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <Download size={11} /> DOWNLOAD CV
          </a>
        </motion.div>
      </aside>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}`}</style>

      {/* ── Video modal ── */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setVideoOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(6px)",
            zIndex: 200,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "24px 16px",
          }}
        >
          {/* ESC hint */}
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.1em", marginBottom: 14,
          }}>
            ESC or click outside to close
          </p>

          {/* Video container */}
          <motion.div
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={e => e.stopPropagation()}
            style={{
              width: "100%", maxWidth: 900,
              aspectRatio: "16/9",
              borderRadius: 12,
              overflow: "hidden",
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.1)",
              position: "relative",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setVideoOpen(false)}
              style={{
                position: "absolute", top: 12, right: 12, zIndex: 10,
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
              aria-label="Close video"
            >
              <X size={14} />
            </button>

            {CF_VIDEO_ID ? (
              <iframe
                src={`https://iframe.cloudflarestream.com/${CF_VIDEO_ID}?autoplay=1`}
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div style={{
                width: "100%", height: "100%",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 16,
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Play size={24} fill="rgba(255,255,255,0.5)" color="rgba(255,255,255,0.5)" style={{ marginLeft: 3 }} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-heading)", fontSize: 15, color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: 4 }}>
                    Intro Video
                  </p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
                    COMING SOON
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
