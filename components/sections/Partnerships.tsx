"use client";

import { Star } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const LOGOS = [
  "Manufacturing MNC",
  "E-commerce Platform",
  "SaaS Company",
  "Educational Institution",
  "Healthcare Sector",
  "Retail Automation",
];
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

const TESTIMONIALS = [
  {
    quote:
      "Abin delivered an LLM solution that fundamentally changed how our team accesses institutional knowledge. The RAG system processes over 100,000 documents with remarkable accuracy. Exceptional technical depth.",
    author: "Head of Digital Transformation",
    company: "Manufacturing MNC",
    stars: 5,
    large: true,
  },
  {
    quote:
      "The AI agent system Abin built cut our customer support resolution time by 60%. He understood our business before writing a single line of code.",
    author: "Product Manager",
    company: "E-commerce Platform",
    stars: 5,
    large: false,
  },
];

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      style={{
        background: "var(--bg-dark-panel)",
        padding: "clamp(5rem, 8vw, 8rem) 0",
        overflow: "hidden",
      }}
    >
      <div className="mx-auto px-8 mb-12">
        <ScrollReveal>
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// TRUSTED BY"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              color: "#F2EFE8",
              letterSpacing: "-0.01em",
            }}
          >
            Enterprise clients &amp; partners.
          </h2>
        </ScrollReveal>
      </div>

      {/* Infinite logo strip */}
      <div
        className="overflow-hidden mb-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0" }}
      >
        <div className="flex animate-marquee gap-4" style={{ width: "max-content" }}>
          {MARQUEE_LOGOS.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                padding: "8px 20px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* NDA note */}
      <div className="mx-auto px-8 mb-12" style={{ maxWidth: "1400px" }}>
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "8px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.3)",
            textAlign: "center",
          }}
        >
          * Client names withheld under NDA · References available on request
        </p>
      </div>

      {/* Testimonial cards */}
      <div className="mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={t.large ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <ScrollReveal direction={i === 0 ? "left" : "right"}>
                <TiltCard tiltMax={6} glareEnabled scale={1.02} className="h-full rounded-2xl">
                  <div
                    className="h-full rounded-2xl flex flex-col gap-5"
                    style={{
                      background: "color-mix(in srgb, var(--bg-dark-panel) 80%, #FFFFFF08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: t.large ? "36px 32px" : "28px 24px",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star
                          key={si}
                          size={14}
                          fill="var(--accent-warm)"
                          style={{ color: "var(--accent-warm)" }}
                        />
                      ))}
                    </div>

                    {/* Decorative quote mark */}
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: t.large ? "72px" : "52px",
                        lineHeight: 0.6,
                        color: "var(--accent-warm)",
                        opacity: 0.8,
                        display: "block",
                      }}
                    >
                      &ldquo;
                    </span>

                    {/* Quote */}
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: t.large ? "clamp(16px, 2vw, 20px)" : "15px",
                        fontWeight: 300,
                        fontStyle: "italic",
                        color: "rgba(242,239,232,0.85)",
                        lineHeight: 1.5,
                        flex: 1,
                      }}
                    >
                      {t.quote}
                    </p>

                    {/* Attribution */}
                    <div
                      className="pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "rgba(242,239,232,0.7)",
                        }}
                      >
                        {t.author}
                      </p>
                      <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.12em", color: "var(--accent-warm)" }}>
                        {t.company}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
