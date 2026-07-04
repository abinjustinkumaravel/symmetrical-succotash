"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./DevSummary";

const ENTRIES = [
  {
    period: "Feb 2025 – Oct 2025",
    role: "Data Integration Developer Trainee",
    company: "Infaworx",
    location: "Remote",
    desc: "Full-stack developer on the Qatar NPC Government Data Governance Portal — a multi-agency platform built to standardize and govern data across government bodies. Integrated an LLM-powered query/response system, designed a hybrid RAG pipeline over the knowledge base, and implemented Redis-based session management with JWT auth, HTTP-only cookies, and IP whitelisting. Reduced manual access-control overhead by an estimated 20–30%. Deployed and managed infrastructure end-to-end on GCP.",
    skills: ["Node.js", "React/Next.js", "FastAPI", "RAG", "Redis", "JWT", "GCP", "LLM Integration"],
    highlight: true,
  },
  {
    period: "2023 – Present",
    role: "Independent Consultant",
    company: "aahrbitx",
    location: "Kerala, India",
    desc: "Delivering end-to-end software and AI solutions for clients across industries — from static websites and e-commerce platforms to full-stack fleet management systems and LLM-powered tools. Clients include Pommi Caterers, AL Traders, Butterbyte's, Entice Innovations, and Mohan Cabs.",
    skills: ["Pommi Caterers", "AL Traders", "Butterbyte's", "Entice Innovations", "Mohan Cabs"],
    highlight: false,
  },
  {
    period: "Aug 2024 – Sep 2024",
    role: "Business Development Associate",
    company: "AccioJob",
    location: "Remote",
    desc: "Managed a live B2B/B2C sales pipeline using CRM tools, developing a practical understanding of how leads move from problem awareness to product adoption. Gained firsthand exposure to how businesses evaluate and pay for software solutions — insight that directly informs how I scope and prioritise features when building products.",
    skills: ["CRM Tools", "B2B/B2C Sales", "Client Communication", "Pipeline Management"],
    highlight: false,
  },
];

export default function DevExperience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel num="02" title="Experience" inView={inView} />

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {ENTRIES.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              borderRadius: 14,
              background: entry.highlight ? "rgba(200,169,110,0.04)" : "var(--bg-card)",
              border: `1px solid ${entry.highlight ? "var(--border-accent)" : "var(--border)"}`,
              padding: "clamp(18px, 2.5vw, 28px)",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = entry.highlight ? "var(--border-accent)" : "var(--border)")
            }
          >
            {/* Top row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  {entry.role}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--accent)" }}>
                  {entry.company}
                  <span style={{ color: "var(--text-muted)", marginLeft: 8 }}>· {entry.location}</span>
                </p>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                  paddingTop: 2,
                }}
              >
                {entry.period}
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(12px, 1.3vw, 14px)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: 14,
              }}
            >
              {entry.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {entry.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 8,
                    letterSpacing: "0.1em",
                    padding: "3px 9px",
                    borderRadius: 9999,
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
