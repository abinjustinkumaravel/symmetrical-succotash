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
    period: "2023 – Present",
    role: "Independent Consultant",
    company: "aahrbitx",
    desc: "Delivering end-to-end software and AI solutions for clients across industries — from static websites and e-commerce platforms to full-stack fleet management systems and LLM-powered tools. Also pursuing independent ML research: built a U-Net nucleus segmentation pipeline on the 2018 Data Science Bowl dataset achieving Dice 0.87 / IoU 0.79, with downstream morphological feature extraction applicable to drug discovery screening. Clients include Pommi Caterers, AL Traders, Butterbyte's, Entice Innovations, and Mohan Cabs.",
    skills: ["PyTorch", "U-Net", "scikit-image", "Albumentations", "Pommi Caterers", "AL Traders", "Butterbyte's", "Entice Innovations", "Mohan Cabs"],
    side: "left",
  },
  {
    period: "Feb 2025 – Oct 2025",
    role: "Data Integration Developer Trainee",
    company: "Infaworx",
    desc: "Full-stack developer at Infaworx Data Management Pvt Ltd on enterprise data management platforms for NPC Qatar, PIF, and SDB. Integrated an LLM-powered query/response system, designed a hybrid RAG pipeline over the knowledge base, and implemented Redis-based session management with JWT auth, HTTP-only cookies, and IP whitelisting. Reduced manual access-control overhead by an estimated 20–30%. Deployed and managed infrastructure end-to-end on GCP.",
    skills: ["Node.js", "React/Next.js", "FastAPI", "RAG", "Redis", "JWT", "GCP", "LLM Integration"],
    side: "right",
  },
  {
    period: "Aug 2024 – Sep 2024",
    role: "Business Development Associate",
    company: "AccioJob",
    desc: "Managed a live B2B/B2C sales pipeline using CRM tools, developing a practical understanding of how leads move from problem awareness to product adoption. Gained firsthand exposure to how businesses evaluate and pay for software solutions — insight that directly informs how I scope and prioritise features when building products.",
    skills: ["CRM Tools", "B2B/B2C Sales", "Client Communication", "Pipeline Management"],
    side: "left",
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
      <div className="mx-auto" style={{ paddingLeft: "clamp(2rem, 5vw, 5rem)", paddingRight: "clamp(2rem, 5vw, 5rem)" }}>
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
