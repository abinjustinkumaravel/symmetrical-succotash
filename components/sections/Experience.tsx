"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  desc: string;
  skills: string[];
  side: "left" | "right";
}

const ENTRIES: TimelineEntry[] = [
  {
    period: "2026 – Present",
    role: "Managing Director",
    company: "TheHouseOfRegent",
    desc: "Managing and directing a D2C fashion brand. Built the full AI automation layer: Regent-Mind SLM for product content, MeetPulse AI for vendor call logging, and a FastAPI + PostgreSQL inventory system replacing spreadsheets.",
    skills: ["AI Automation", "FastAPI", "PostgreSQL", "LangChain", "Leadership"],
    side: "left",
  },
  {
    period: "2024 – Present",
    role: "Technical Proprietor",
    company: "Pommi Caterings",
    desc: "Digitised a family catering business end-to-end — Python barcode billing system (65% faster order processing), Omni-Scribe for invoice querying, and WhatsApp notification pipeline.",
    skills: ["Python", "Barcode Systems", "FastAPI", "Omni-Scribe"],
    side: "right",
  },
  {
    period: "2025 – Present",
    role: "AI Engineer — Lure Tech Solutions",
    company: "Lure Tech Solutions",
    desc: "Delivering enterprise AI: 100K+ document RAG system for a manufacturing MNC (70% faster retrieval), autonomous customer support agent (60% auto-resolution). Led 3-person team from zero to first enterprise clients.",
    skills: ["LangGraph", "ChromaDB", "FastAPI", "PostgreSQL", "Team Lead"],
    side: "left",
  },
  {
    period: "2024 – Present",
    role: "AI Engineer — Freelance",
    company: "Client Projects · India",
    desc: "Building production Multimodal RAG systems, Agentic workflows, and LLM automation for enterprise clients. Stack: FastAPI, LangGraph, Neo4j, ColPali, Unsloth.",
    skills: ["RAG", "LangGraph", "Neo4j", "Unsloth", "ColPali"],
    side: "right",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        background: "var(--bg-secondary)",
        padding: "clamp(5rem, 8vw, 8rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="mx-auto px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// TIMELINE"}
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
            The journey so far.
          </h2>
        </ScrollReveal>

        {/* Timeline container */}
        <div className="relative" ref={lineRef}>
          {/* Animated vertical line */}
          <div
            className="absolute hidden lg:block"
            style={{
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--border)",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
          >
            <motion.div
              style={{
                height: lineH,
                width: "100%",
                background: "var(--accent-warm)",
                transformOrigin: "top",
              }}
            />
          </div>

          {/* Entries */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {ENTRIES.map((entry, i) => {
              const isLeft = entry.side === "left";
              return (
                <div key={i} style={{ overflow: "hidden" }}>
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8"
                >
                  {/* Timeline node (desktop) */}
                  <div
                    className="absolute hidden lg:flex items-center justify-center"
                    style={{
                      left: "calc(50% - 10px)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 2,
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.1 * i + 0.2, duration: 0.4, type: "spring" }}
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "var(--accent-warm)",
                        border: "3px solid var(--bg-secondary)",
                        boxShadow: "0 0 0 4px color-mix(in srgb, var(--accent-warm) 20%, transparent)",
                      }}
                    />
                  </div>

                  {/* Left card or spacer */}
                  {isLeft ? (
                    <div className="lg:pr-12">
                      <TiltCard tiltMax={5} glareEnabled={false} scale={1.01} className="rounded-2xl">
                        <TimelineCard entry={entry} />
                      </TiltCard>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}

                  {/* Right card or spacer */}
                  {!isLeft ? (
                    <div className="lg:pl-12 lg:col-start-2">
                      <TiltCard tiltMax={5} glareEnabled={false} scale={1.01} className="rounded-2xl">
                        <TimelineCard entry={entry} />
                      </TiltCard>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Photo C */}
        <div
          className="hidden xl:block absolute top-1/3 right-6"
          style={{ width: "220px", height: "280px", zIndex: 5 }}
        >
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-label)",
          fontSize: "9px",
          letterSpacing: "0.12em",
          color: "var(--accent-warm)",
        }}
      >
        {entry.period}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "17px",
          fontWeight: 500,
          color: "var(--text-primary)",
        }}
      >
        {entry.role}
      </h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)" }}>
        {entry.company}
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
        {entry.desc}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {entry.skills.map((skill) => (
          <span
            key={skill}
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
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
