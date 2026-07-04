"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CounterCard from "@/components/ui/CounterCard";
import GrainOverlay from "@/components/ui/GrainOverlay";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STATS = [
  { value: 8,   suffix: ".6", label: "MCA CGPA"          },
  { value: 15,  suffix: "+",  label: "AI Projects"        },
  { value: 1,   suffix: "",   label: "Enterprise Product" },
  { value: 3,   suffix: "+",  label: "Years Experience"   },
];

export default function About() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative w-full"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "80vh" }}>

        {/* ── LEFT: Dark panel with text ── */}
        <ScrollReveal direction="left">
          <div
            className="relative flex flex-col justify-center overflow-hidden"
            style={{
              background: "var(--bg-dark-panel)",
              padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)",
              minHeight: "60vh",
            }}
          >
            {/* Large decorative number */}
            <span
              className="section-number"
              style={{ top: "-20px", left: "-20px" }}
            >
              01
            </span>

            {/* Section label */}
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "var(--accent-warm)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
              {"// ABOUT ME"}
            </p>

            {/* Heading */}
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 300,
                color: "#F2EFE8",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Writes systems.<br />
              <span style={{ color: "var(--accent-warm)" }}>Rewrites rules.</span><br />
            </h2>

            {/* Bio paragraphs */}
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(242,239,232,0.65)",
              }}
            >
              I&apos;m Abin — AI Engineer &amp; Systems Architect, and the kind of person who sees a broken system
              and immediately opens a code editor. I build at{" "}
              <span style={{ color: "var(--accent-warm)" }}>Lure Techsolutions</span> —
              production-grade AI: RAG pipelines, autonomous agents, and intelligent
              automation that replaces busywork with actual intelligence.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(242,239,232,0.65)",
              }}
            >
              Outside the terminal: I practice{" "}
              <span style={{ color: "var(--accent-warm)" }}>Kalaripayattu</span>, speak at
              colleges across Tamil Nadu, run a clothing brand, and document the whole
              chaotic journey on YouTube — all from{" "}
              <span style={{ color: "var(--accent-warm)" }}>Nagercoil</span>, where nobody
              told me this was supposed to be hard.
            </p>

            {/* Pull quote */}
            <div className="relative pl-6 mb-8" style={{ borderLeft: "2px solid var(--accent-warm)" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "56px",
                  lineHeight: 0.6,
                  color: "var(--accent-warm)",
                  display: "block",
                  marginBottom: "4px",
                  fontWeight: 300,
                }}
              >
                &ldquo;
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(242,239,232,0.8)",
                  lineHeight: 1.4,
                }}
              >
                Most people wait for permission. I shipped a company instead.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" ref={lineRef}>
              {STATS.map((s) => (
                <CounterCard
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>

            {/* Animated underline */}
            <motion.div
              style={{
                height: "1px",
                background: "var(--accent-warm)",
                marginTop: "2rem",
                transformOrigin: "left",
                scaleX: lineInView ? 1 : 0,
                transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
              }}
            />
          </div>
        </ScrollReveal>

        {/* ── RIGHT: Editorial close-up photo ── */}
        <ScrollReveal direction="right">
          <div className="relative h-full" style={{ minHeight: "60vh" }}>
            {/* Photo B — editorial close-up */}
            <div
              className="absolute inset-0"
              data-cursor="photo"
            >
              <Image
                src="/images/10.png"
                alt="Abin — editorial portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            <GrainOverlay />

            {/* Floating "Available" card */}
            <div className="absolute bottom-8 right-6 z-10">
              <TiltCard tiltMax={8} glareEnabled scale={1.03} className="rounded-xl">
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    minWidth: "180px",
                  }}
                >
                  <span className="pulse-dot" />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "9px",
                        letterSpacing: "0.12em",
                        color: "var(--success)",
                        marginBottom: "2px",
                      }}
                    >
                      AVAILABLE
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "var(--text-secondary)" }}>
                      Open to LLM Projects
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
