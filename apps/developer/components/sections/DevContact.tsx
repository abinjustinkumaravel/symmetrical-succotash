"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./DevSummary";

export default function DevContact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel num="07" title="Contact" inView={inView} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          borderRadius: 16,
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          padding: "clamp(28px, 4vw, 48px)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          maxWidth: 560,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 300,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Open to full-time roles<br />
            <span style={{ color: "var(--accent)" }}>and internships.</span>
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            Available immediately. Comfortable with remote, hybrid, or on-site arrangements.
            Currently based in Thiruvananthapuram, Kerala — open to relocate.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a
            href="mailto:aahrbitx@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "14px 18px",
              borderRadius: 12,
              background: "var(--accent)",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Mail size={15} style={{ color: "#0A0908" }} />
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  color: "#0A0908",
                  fontWeight: 700,
                }}
              >
                aahrbitx@gmail.com
              </span>
            </div>
            <ArrowUpRight size={16} style={{ color: "#0A0908" }} />
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 4px",
            }}
          >
            <MapPin size={13} style={{ color: "var(--accent)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>
              Thiruvananthapuram, Kerala 🇮🇳 · Open to Relocate
            </span>
          </div>
        </div>

        {/* Availability tag */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Full-Time Role", "Internship", "Remote Friendly", "Immediate Joiner"].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 8,
                letterSpacing: "0.1em",
                padding: "4px 10px",
                borderRadius: 9999,
                border: "1px solid var(--border-accent)",
                color: "var(--accent)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          fontFamily: "var(--font-label)",
          fontSize: 8,
          letterSpacing: "0.14em",
          color: "var(--text-muted)",
          marginTop: 48,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} ABIN JUSTIN KUMARAVEL · BUILT WITH NEXT.JS
      </motion.p>
    </section>
  );
}
