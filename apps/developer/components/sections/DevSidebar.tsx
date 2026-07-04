"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Code2, Link, ExternalLink, Download, Play } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Summary",    href: "#summary"    },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Education",  href: "#education"  },
  { label: "DSA",        href: "#dsa"        },
  { label: "Contact",    href: "#contact"    },
];

const CF_VIDEO_ID = process.env.NEXT_PUBLIC_CF_VIDEO_ID ?? "";

export default function DevSidebar() {
  const [videoOpen, setVideoOpen] = useState(false);

  function go(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <aside
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          background: "var(--bg-sidebar)",
          borderRight: "1px solid var(--border)",
          padding: "clamp(24px, 3vw, 40px) clamp(20px, 2.5vw, 32px)",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* ── Avatar + Name ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Initials circle */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(200,169,110,0.2), rgba(200,169,110,0.05))",
              border: "1px solid var(--border-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 300,
                color: "var(--accent)",
                letterSpacing: "-0.02em",
              }}
            >
              AJ
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2.2vw, 26px)",
              fontWeight: 300,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: 6,
            }}
          >
            Abin Justin<br />
            <span style={{ color: "var(--accent)" }}>Kumaravel</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              letterSpacing: "0.14em",
              color: "var(--text-muted)",
              marginBottom: 12,
            }}
          >
            AI ENGINEER · FULL-STACK DEV
          </p>

          {/* Available badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-label)",
              fontSize: "8px",
              letterSpacing: "0.12em",
              padding: "4px 10px",
              borderRadius: 9999,
              background: "rgba(45,106,79,0.15)",
              border: "1px solid rgba(74,222,128,0.25)",
              color: "#4ADE80",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#4ADE80",
                animation: "pulse 2s infinite",
              }}
            />
            OPEN TO HIRE
          </span>
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
        </motion.div>

        {/* ── Contact links ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {[
            { icon: <MapPin size={13} />, text: "Thiruvananthapuram, Kerala", href: undefined },
            { icon: <Mail size={13} />, text: "aahrbitx@gmail.com", href: "mailto:aahrbitx@gmail.com" },
            { icon: <Code2 size={13} />, text: "github.com/abinjustinkumaravel", href: "https://github.com/abinjustinkumaravel" },
            { icon: <Link size={13} />, text: "linkedin.com/in/abinjk", href: "https://linkedin.com/in/abinjk" },
          ].map(({ icon, text, href }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--accent)", flexShrink: 0 }}>{icon}</span>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
                >
                  {text}
                </a>
              ) : (
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--text-secondary)" }}>
                  {text}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Quick nav ── */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "8px",
              letterSpacing: "0.18em",
              color: "var(--text-muted)",
              marginBottom: 12,
            }}
          >
            {"// NAVIGATE"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => go(href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  textAlign: "left",
                  padding: "5px 8px",
                  borderRadius: 6,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.color = "var(--accent)";
                  el.style.background = "var(--accent-dim)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.color = "var(--text-secondary)";
                  el.style.background = "transparent";
                }}
              >
                <ExternalLink size={10} style={{ opacity: 0.4 }} />
                {label}
              </button>
            ))}
          </div>
        </motion.nav>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* ── Video + Resume ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          {/* Intro video button */}
          <button
            onClick={() => setVideoOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 10,
              background: "var(--accent-dim)",
              border: "1px solid var(--border-accent)",
              color: "var(--accent)",
              cursor: "pointer",
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              letterSpacing: "0.12em",
              transition: "all 0.2s",
              width: "100%",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(200,169,110,0.22)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--accent-dim)")}
          >
            <Play size={13} fill="currentColor" />
            INTRO VIDEO
          </button>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 10,
              background: "var(--accent)",
              border: "none",
              color: "#0A0908",
              cursor: "pointer",
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textDecoration: "none",
              transition: "opacity 0.2s",
              width: "100%",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <Download size={13} />
            DOWNLOAD CV
          </a>
        </motion.div>
      </aside>

      {/* ── Video Modal ── */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 800,
              aspectRatio: "16/9",
              borderRadius: 16,
              overflow: "hidden",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {CF_VIDEO_ID ? (
              <iframe
                src={`https://iframe.cloudflarestream.com/${CF_VIDEO_ID}`}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div style={{ textAlign: "center" }}>
                <Play size={48} style={{ color: "var(--accent)", opacity: 0.4, marginBottom: 12 }} />
                <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 300, color: "var(--text-secondary)" }}>
                  Intro Video
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", marginTop: 8 }}>
                  Coming soon — hosted on Cloudflare Stream
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
