"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { SectionLabel } from "./DevSummary";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, target]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const PLATFORMS = [
  {
    name: "LeetCode",
    count: 200,
    suffix: "+",
    accent: "#FFA116",
    topics: ["Arrays", "Dynamic Programming", "Trees & Graphs", "Binary Search"],
    url: "https://leetcode.com/u/abinjustinkumaravel/",
  },
  {
    name: "HackerRank",
    count: 100,
    suffix: "+",
    accent: "#00EA64",
    topics: ["Python 5★", "SQL 4★", "Problem Solving", "Data Structures"],
    url: "https://www.hackerrank.com/profile/abinjustinkuma1",
  },
];

export default function DevDSA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="dsa"
      ref={ref}
      style={{
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel num="06" title="Problem Solving" inView={inView} />

      <div
        style={{
          borderRadius: 16,
          background: "#0A0A0C",
          border: "1px solid var(--border)",
          padding: "clamp(24px, 4vw, 40px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "24px 40px",
          alignItems: "center",
        }}
      >
        {/* Left: big number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 9,
              letterSpacing: "0.2em",
              color: "rgba(200,169,110,0.6)",
              marginBottom: 12,
            }}
          >
            TOTAL PROBLEMS SOLVED
          </p>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 10vw, 120px)",
              fontWeight: 300,
              color: "#F2EFE8",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              marginBottom: 12,
            }}
          >
            <AnimatedCounter target={300} suffix="+" />
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(242,239,232,0.4)",
            }}
          >
            across LeetCode &amp; HackerRank
          </p>
        </motion.div>

        {/* Right: platform cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}
        >
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: 12,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "14px 16px",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
                display: "block",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = `${p.accent}50`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)")
              }
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent, flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 8,
                    letterSpacing: "0.14em",
                    color: "rgba(242,239,232,0.45)",
                  }}
                >
                  {p.name.toUpperCase()}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 300,
                  color: "#F2EFE8",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                <AnimatedCounter target={p.count} suffix={p.suffix} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {p.topics.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 7,
                      letterSpacing: "0.08em",
                      padding: "2px 6px",
                      borderRadius: 9999,
                      border: `1px solid ${p.accent}30`,
                      color: p.accent,
                      opacity: 0.85,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Mobile: stack grid */}
      <style>{`
        @media (max-width: 600px) {
          #dsa > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
