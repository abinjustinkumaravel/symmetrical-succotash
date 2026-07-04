"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

// ── Data ────────────────────────────────────────────────────────────────────

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

const PLATFORMS = [
  {
    name: "LeetCode",
    count: "200+",
    accent: "#FFA116",
    topics: ["Arrays", "Dynamic Programming", "Trees & Graphs", "Binary Search"],
  },
  {
    name: "HackerRank",
    count: "100+",
    accent: "#00EA64",
    topics: ["Python 5★", "SQL 4★", "Problem Solving", "Data Structures"],
  },
];

const LANGUAGES = [
  { name: "Python",     pct: 90 },
  { name: "JavaScript", pct: 82 },
  { name: "SQL",        pct: 78 },
  { name: "TypeScript", pct: 70 },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: "var(--bg-secondary)", padding: "clamp(5rem, 8vw, 8rem) 0" }}
    >
      <div className="mx-auto" style={{ paddingLeft: "clamp(2rem, 5vw, 5rem)", paddingRight: "clamp(2rem, 5vw, 5rem)" }}>

        {/* ── Section header ── */}
        <ScrollReveal className="mb-12">
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// EDUCATION & PROBLEM SOLVING"}
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
            Academically sharp.<br />
            <span style={{ color: "var(--accent-warm)" }}>Algorithmically proven.</span>
          </h2>
        </ScrollReveal>

        {/* ── Bento Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "12px",
            marginBottom: "12px",
          }}
          className="bento-grid"
        >
          {/* ── DSA Hero card (spans 2 cols, 2 rows) ── */}
          <div
            style={{
              gridColumn: "1 / 3",
              gridRow: "1 / 3",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#08080A",
              border: "1px solid rgba(200,169,110,0.15)",
              padding: "clamp(24px, 3.5vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "380px",
            }}
          >
            {/* Ghost watermark */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(120px, 18vw, 220px)",
                fontWeight: 700,
                color: "rgba(200,169,110,0.04)",
                letterSpacing: "-0.06em",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              DSA
            </span>

            {/* Top: label + big number */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: "rgba(200,169,110,0.6)",
                  marginBottom: "16px",
                }}
              >
                PROBLEMS SOLVED
              </p>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(72px, 11vw, 140px)",
                  fontWeight: 300,
                  color: "#F2EFE8",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                }}
              >
                300
                <span style={{ color: "#C8A96E" }}>+</span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(12px, 1.2vw, 14px)",
                  color: "rgba(242,239,232,0.4)",
                  marginTop: "12px",
                  letterSpacing: "0.01em",
                }}
              >
                across LeetCode &amp; HackerRank
              </p>
            </div>

            {/* Bottom: platform breakdown */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {PLATFORMS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "12px",
                    padding: "16px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: p.accent,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "8px",
                        letterSpacing: "0.14em",
                        color: "rgba(242,239,232,0.45)",
                      }}
                    >
                      {p.name.toUpperCase()}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(26px, 3.5vw, 38px)",
                      fontWeight: 300,
                      color: "#F2EFE8",
                      lineHeight: 1,
                      marginBottom: "10px",
                    }}
                  >
                    {p.count}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.topics.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: "7px",
                          letterSpacing: "0.08em",
                          padding: "2px 7px",
                          borderRadius: "9999px",
                          border: `1px solid ${p.accent}30`,
                          color: p.accent,
                          opacity: 0.85,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education cards (col 3, stacked) ── */}
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.short}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                gridColumn: "3",
                gridRow: i + 1,
                borderRadius: "20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "clamp(18px, 2.5vw, 28px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "12px",
                transition: "border-color 0.3s ease",
              }}
              whileHover={{ scale: 1.01 }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-warm)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
              }
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 38px)",
                    fontWeight: 300,
                    color: "var(--accent-warm)",
                    lineHeight: 1,
                  }}
                >
                  {edu.cgpa}
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      marginLeft: "5px",
                    }}
                  >
                    CGPA
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "7px",
                    letterSpacing: "0.14em",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    border: "1px solid var(--accent-warm)",
                    color: "var(--accent-warm)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {edu.status}
                </span>
              </div>

              {/* Degree + period */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: "var(--text-muted)",
                    marginBottom: "4px",
                  }}
                >
                  {edu.period}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(14px, 1.6vw, 18px)",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                    marginBottom: "2px",
                  }}
                >
                  {edu.short} — {edu.degree.split(" ").slice(0, 3).join(" ")}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {edu.institution}
                </p>
              </div>

              {/* Highlight pills */}
              <div className="flex flex-wrap gap-1.5">
                {edu.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "7px",
                      letterSpacing: "0.08em",
                      padding: "2px 7px",
                      borderRadius: "9999px",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Language proficiency strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            borderRadius: "20px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "clamp(20px, 3vw, 36px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              letterSpacing: "0.2em",
              color: "var(--accent-warm)",
              marginBottom: "24px",
            }}
          >
            {"// CORE LANGUAGES"}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px 40px",
            }}
          >
            {LANGUAGES.map((lang, i) => (
              <div key={lang.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(16px, 2vw, 20px)",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {lang.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "var(--accent-warm)",
                    }}
                  >
                    {lang.pct}%
                  </span>
                </div>
                {/* Track */}
                <div
                  style={{
                    height: "3px",
                    background: "var(--border)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.pct}%` } : {}}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background:
                        "linear-gradient(90deg, var(--accent-warm), color-mix(in srgb, var(--accent-warm) 60%, transparent))",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Mobile bento override */}
      <style>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .bento-grid > * {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
