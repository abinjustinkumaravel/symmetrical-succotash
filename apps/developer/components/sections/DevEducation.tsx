"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./DevSummary";

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

export default function DevEducation() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="education"
      ref={ref}
      style={{
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel num="05" title="Education" inView={inView} />

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.short}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              borderRadius: 14,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              padding: "clamp(18px, 2.5vw, 28px)",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: "0 24px",
              alignItems: "center",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
            }
          >
            {/* CGPA */}
            <div style={{ textAlign: "center", minWidth: 60 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 300,
                  color: "var(--accent)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {edu.cgpa}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: 8,
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                CGPA
              </div>
            </div>

            {/* Details */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(14px, 1.6vw, 17px)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {edu.short} — {edu.degree}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 7,
                    letterSpacing: "0.12em",
                    padding: "2px 8px",
                    borderRadius: 9999,
                    border: "1px solid var(--border-accent)",
                    color: "var(--accent)",
                  }}
                >
                  {edu.status}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginBottom: 10,
                }}
              >
                {edu.institution}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {edu.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 7,
                      letterSpacing: "0.08em",
                      padding: "2px 7px",
                      borderRadius: 9999,
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Period */}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-muted)",
                whiteSpace: "nowrap",
                alignSelf: "flex-start",
              }}
            >
              {edu.period}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
