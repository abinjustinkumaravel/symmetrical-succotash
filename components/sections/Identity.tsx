"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Building2,
  Camera,
  PlayCircle,
  Mic,
  Hammer,
} from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const IDENTITIES = [
  {
    num: "01",
    icon: <Cpu size={28} />,
    title: "The Engineer",
    role: "LLM Engineer",
    desc: "Building production RAG systems, AI agents, and LLM pipelines. Enterprise-grade AI that actually ships.",
    tag: "AI · TECH",
  },
  {
    num: "02",
    icon: <Building2 size={28} />,
    title: "The Engineer",
    role: "AI System Engineer",
    desc: "Building at Lure Techsolutions. Leading product architecture, team, and client delivery.",
    tag: "STARTUP · LEADERSHIP",
  },
  {
    num: "03",
    icon: <Camera size={28} />,
    title: "The Face",
    role: "Model & Visual Brand",
    desc: "My face is my brand. Curating a visual identity that's confident, editorial, and authentically South Indian.",
    tag: "MODELING · BRAND",
  },
  {
    num: "04",
    icon: <PlayCircle size={28} />,
    title: "The Teacher",
    role: "Content Creator",
    desc: "YouTube channel teaching LLM engineering to developers across India. Making AI accessible.",
    tag: "YOUTUBE · EDUCATION",
  },
  {
    num: "05",
    icon: <Mic size={28} />,
    title: "The Speaker",
    role: "Tech Evangelist",
    desc: "College talks on AI, LLMs, and entrepreneurship. Inspiring Tamil Nadu's next wave of builders.",
    tag: "SPEAKER · COMMUNITY",
  },
  {
    num: "06",
    icon: <Hammer size={28} />,
    title: "The Builder",
    role: "Entrepreneur",
    desc: "Clothing brand. Catering digital ops. Multiple revenue streams. Because builders build everything.",
    tag: "BUSINESS · REVENUE",
  },
];

export default function Identity() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="identity"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-dark-panel)",
        padding: "clamp(5rem, 8vw, 8rem) 0",
      }}
    >
      {/* Massive background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(100px, 20vw, 260px)",
            fontWeight: 300,
            color: "#F2EFE8",
            opacity: 0.025,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          IDENTITY
        </span>
      </div>

      <div
        className="relative mx-auto px-8"
        // style={{ maxWidth: "1400px" }}
      >
        {/* Header */}
        <div className="mb-12 ">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-3 flex items-center gap-2"
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "var(--accent-warm)",
            }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// WHO I AM"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              color: "#F2EFE8",
              letterSpacing: "-0.01em",
            }}
          >
            The many faces of Abin.
          </motion.h2>
        </div>

        {/* Cards — horizontal scroll on mobile, 3x2 on desktop */}
        <div
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 grid"
          style={{ gridAutoRows: "1fr" }}
        >
          {IDENTITIES.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 * i,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <TiltCard
                tiltMax={12}
                glareEnabled
                scale={1.02}
                className="h-full rounded-2xl"
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--bg-dark-panel)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "28px 24px",
                    minHeight: "240px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "48px",
                      fontWeight: 300,
                      color: "#F2EFE8",
                      opacity: 0.12,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      position: "absolute",
                      top: "16px",
                      right: "20px",
                    }}
                  >
                    {card.num}
                  </span>

                  {/* Icon */}
                  <div style={{ color: "var(--accent-warm)" }}>{card.icon}</div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "#F2EFE8",
                      lineHeight: 1.2,
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Role line */}
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "var(--accent-warm)",
                      marginTop: "-6px",
                    }}
                  >
                    {card.role}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "rgba(242,239,232,0.55)",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {card.desc}
                  </p>

                  {/* Tag pill */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "8px",
                        letterSpacing: "0.12em",
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        border: "1px solid rgba(200,169,110,0.3)",
                        color: "var(--accent-warm)",
                        display: "inline-block",
                      }}
                    >
                      {card.tag}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
