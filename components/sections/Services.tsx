"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";

const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "SRM Institute of Science and Technology",
    period: "2024 – 2026",
    cgpa: "8.6",
    status: "Pursuing",
    highlights: ["AI/ML Specialization", "Full-Stack Development", "Cloud & DevOps"],
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "SRM Institute of Science and Technology",
    period: "2021 – 2024",
    cgpa: "8.5",
    status: "Completed",
    highlights: ["Data Science Track", "Python & Machine Learning", "Database Systems"],
  },
];

const DSA_STATS = [
  {
    platform: "LeetCode",
    problems: "200+",
    badge: "ACTIVE",
    gradient: "linear-gradient(135deg, #FFA116 0%, #B8860B 100%)",
    categories: ["Arrays & Strings", "Dynamic Programming", "Trees & Graphs", "Binary Search"],
  },
  {
    platform: "HackerRank",
    problems: "100+",
    badge: "CERTIFIED",
    gradient: "linear-gradient(135deg, #00EA64 0%, #00a651 100%)",
    categories: ["Python (5★)", "SQL (4★)", "Problem Solving", "Data Structures"],
  },
];

const LANGUAGES = [
  { name: "Python",     level: 90 },
  { name: "JavaScript", level: 82 },
  { name: "SQL",        level: 78 },
  { name: "TypeScript", level: 70 },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: "var(--bg-secondary)", padding: "clamp(5rem, 8vw, 8rem) 0" }}
    >
      <div className="mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <ScrollReveal className="mb-14">
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

        {/* ── Education cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.short}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TiltCard tiltMax={5} glareEnabled={false} scale={1.01} className="rounded-2xl h-full">
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: "color-mix(in srgb, var(--accent-warm) 12%, transparent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-warm)",
                        flexShrink: 0,
                      }}
                    >
                      <GraduationCap size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "8px",
                        letterSpacing: "0.14em",
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        border: "1px solid var(--accent-warm)",
                        color: "var(--accent-warm)",
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "var(--text-muted)",
                    }}
                  >
                    {edu.period}
                  </p>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(18px, 2.2vw, 24px)",
                      fontWeight: 300,
                      color: "var(--text-primary)",
                      lineHeight: 1.2,
                    }}
                  >
                    {edu.degree}
                  </h3>

                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)" }}>
                    {edu.institution}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "40px",
                        fontWeight: 300,
                        color: "var(--accent-warm)",
                        lineHeight: 1,
                      }}
                    >
                      {edu.cgpa}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        color: "var(--text-muted)",
                      }}
                    >
                      CGPA
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: "8px",
                          letterSpacing: "0.1em",
                          padding: "3px 8px",
                          borderRadius: "9999px",
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ── DSA header ── */}
        <ScrollReveal className="mb-10">
          <p
            className="mb-6 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// DSA & PROBLEM SOLVING"}
          </p>

          {/* Big stat + label stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 9vw, 110px)",
                fontWeight: 300,
                color: "var(--text-primary)",
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
              }}
            >
              300+
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(13px, 1.4vw, 16px)",
                color: "var(--text-secondary)",
                letterSpacing: "0.01em",
              }}
            >
              problems solved across LeetCode &amp; HackerRank
            </span>
          </div>
        </ScrollReveal>

        {/* ── DSA platform cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 items-start">
          {DSA_STATS.map((dsa, i) => (
            <motion.div
              key={dsa.platform}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + 0.1 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
            >
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-warm)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
                }
              >
                <div style={{ height: "4px", background: dsa.gradient }} />
                <div style={{ padding: "24px" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy size={14} style={{ color: "var(--accent-warm)" }} />
                        <p
                          style={{
                            fontFamily: "var(--font-label)",
                            fontSize: "9px",
                            letterSpacing: "0.14em",
                            color: "var(--text-muted)",
                          }}
                        >
                          {dsa.platform.toUpperCase()}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "44px",
                            fontWeight: 300,
                            color: "var(--text-primary)",
                            lineHeight: 1,
                          }}
                        >
                          {dsa.problems}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            color: "var(--text-muted)",
                          }}
                        >
                          solved
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "8px",
                        letterSpacing: "0.12em",
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        background: "color-mix(in srgb, var(--accent-warm) 12%, transparent)",
                        color: "var(--accent-warm)",
                      }}
                    >
                      {dsa.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {dsa.categories.map((cat) => (
                      <span
                        key={cat}
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: "8px",
                          letterSpacing: "0.1em",
                          padding: "3px 9px",
                          borderRadius: "9999px",
                          border: "1px solid var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Language proficiency ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "var(--accent-warm)",
              marginBottom: "20px",
            }}
          >
            {"// CORE LANGUAGES"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LANGUAGES.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-2">
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      color: "var(--text-primary)",
                    }}
                  >
                    {lang.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: "var(--accent-warm)",
                    }}
                  >
                    {lang.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: "2px",
                    background: "var(--border)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background: "var(--accent-warm)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
