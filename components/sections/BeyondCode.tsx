"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────

const TRAITS = [
  {
    num: "01",
    title: "Client Communication",
    tag: "BUSINESS DEVELOPMENT",
    desc: "Managed live B2B/B2C sales pipelines at AccioJob. Strong objection-handling and stakeholder communication — translating technical capabilities into business value.",
  },
  {
    num: "02",
    title: "Agile Delivery",
    tag: "GOVERNMENT PROJECT",
    desc: "Delivered across backend, AI integration, security, and cloud deployment in a single trainee role on a live Qatar NPC government project. Tracked work in Jira and ServiceNow.",
  },
  {
    num: "03",
    title: "Continuous Learner",
    tag: "ACADEMIC EXCELLENCE",
    desc: "MCA at SRM (8.6 CGPA) after BCA in Data Science (8.5 CGPA). Always upskilling — from ML frameworks to cloud infrastructure to security engineering.",
  },
  {
    num: "04",
    title: "Structured & Disciplined",
    tag: "RELIABLE EXECUTION",
    desc: "Consistent, structured engineering approach. Clean code, clear documentation, and the focus to drive projects from architecture planning through to production deployment.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function BeyondCode() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="beyond"
      ref={ref}
      style={{
        background: "#08080A",
        padding: "clamp(5rem, 8vw, 8rem) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot-grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(200,169,110,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative mx-auto"
        style={{
          paddingLeft: "clamp(2rem, 5vw, 5rem)",
          paddingRight: "clamp(2rem, 5vw, 5rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 6vw, 6rem)",
          alignItems: "start",
        }}
      >
        {/* ── LEFT: Sticky editorial panel ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: "sticky", top: "120px" }}
        >
          {/* Label */}
          <p
            className="mb-8 flex items-center gap-2"
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "var(--accent-warm)",
            }}
          >
            <span
              style={{
                width: "24px",
                height: "1px",
                background: "var(--accent-warm)",
                display: "inline-block",
              }}
            />
            {"// WORKING STYLE"}
          </p>

          {/* Ghost number */}
          <div
            aria-hidden
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(80px, 12vw, 160px)",
              fontWeight: 700,
              color: "rgba(200,169,110,0.05)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
              marginBottom: "-20px",
              userSelect: "none",
            }}
          >
            04
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 50px)",
              fontWeight: 300,
              color: "#F2EFE8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            A full-stack<br />
            engineer.<br />
            <span style={{ color: "var(--accent-warm)" }}>A complete<br />professional.</span>
          </h2>

          {/* Divider */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "rgba(200,169,110,0.4)",
              marginBottom: "20px",
            }}
          />

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "rgba(242,239,232,0.45)",
              lineHeight: 1.75,
              maxWidth: "320px",
            }}
          >
            Technical depth alone isn&apos;t enough. I bring communication,
            agile delivery, academic rigour, and the discipline to ship —
            built across government and enterprise environments.
          </p>
        </motion.div>

        {/* ── RIGHT: Animated row list ── */}
        <div>
          {TRAITS.map((trait, i) => {
            const isHovered = hovered === trait.num;
            return (
              <motion.div
                key={trait.num}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onMouseEnter={() => setHovered(trait.num)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "default" }}
              >
                {/* Top border */}
                <div
                  style={{
                    height: "1px",
                    background: isHovered
                      ? "rgba(200,169,110,0.5)"
                      : "rgba(255,255,255,0.07)",
                    transition: "background 0.3s ease",
                  }}
                />

                <div
                  style={{
                    padding: "clamp(20px, 3vw, 32px) 0",
                    display: "grid",
                    gridTemplateColumns: "48px 1fr auto",
                    gap: "16px",
                    alignItems: "start",
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 300,
                      color: isHovered
                        ? "var(--accent-warm)"
                        : "rgba(200,169,110,0.25)",
                      lineHeight: 1,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {trait.num}
                  </span>

                  {/* Text block */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "8px",
                        letterSpacing: "0.16em",
                        color: isHovered
                          ? "var(--accent-warm)"
                          : "rgba(200,169,110,0.4)",
                        marginBottom: "6px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {trait.tag}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(18px, 2.2vw, 26px)",
                        fontWeight: 300,
                        color: isHovered ? "#F2EFE8" : "rgba(242,239,232,0.65)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                        transition: "color 0.3s ease",
                        marginBottom: "10px",
                      }}
                    >
                      {trait.title}
                    </h3>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            color: "rgba(242,239,232,0.5)",
                            lineHeight: 1.7,
                            overflow: "hidden",
                            maxWidth: "440px",
                          }}
                        >
                          {trait.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{
                      x: isHovered ? 4 : 0,
                      opacity: isHovered ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "18px",
                      color: "var(--accent-warm)",
                      marginTop: "4px",
                    }}
                  >
                    →
                  </motion.span>
                </div>

                {/* Bottom border on last item */}
                {i === TRAITS.length - 1 && (
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(255,255,255,0.07)",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 768px) {
          #beyond > div {
            grid-template-columns: 1fr !important;
          }
          #beyond > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
