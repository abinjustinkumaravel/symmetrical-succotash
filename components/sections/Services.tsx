"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ── Currency conversion ── */
type Currency = "INR" | "USD" | "EUR" | "AED";

const CURRENCIES: { key: Currency; symbol: string; label: string; rate: number }[] = [
  { key: "INR", symbol: "₹",    label: "INR", rate: 1       },
  { key: "USD", symbol: "$",    label: "USD", rate: 1 / 83  },
  { key: "EUR", symbol: "€",    label: "EUR", rate: 1 / 90  },
  { key: "AED", symbol: "د.إ ", label: "AED", rate: 1 / 22.6 },
];

function convertPrice(inr: number, currency: Currency): string {
  const c = CURRENCIES.find((x) => x.key === currency)!;
  const val = inr * c.rate;
  let rounded: number;
  if (currency === "INR") rounded = inr;
  else if (currency === "AED") rounded = Math.round(val / 50) * 50;
  else rounded = Math.round(val / 10) * 10;
  return `From ${c.symbol}${rounded.toLocaleString()}`;
}

/* ── Data ── */
interface Service {
  number: string;
  title: string;
  priceINR: number;
  timeline: string;
  desc: string;
  deliverables: string[];
  featured?: boolean;
  topGradient: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "LLM Integration",
    priceINR: 15000,
    timeline: "1–2 weeks",
    desc: "Integrate LLM capabilities into your existing product. Chat, search, summarization, or custom NLP pipelines.",
    deliverables: [
      "Requirements scoping call",
      "Custom LLM integration",
      "API endpoints",
      "Basic testing suite",
      "30-day support",
    ],
    topGradient: "linear-gradient(90deg, var(--border), var(--accent-warm))",
    featured: false,
  },
  {
    number: "02",
    title: "RAG System Build",
    priceINR: 40000,
    timeline: "2–4 weeks",
    desc: "Enterprise-grade retrieval-augmented generation. Natural language querying over your documents, databases, and knowledge base.",
    deliverables: [
      "Discovery & architecture design",
      "Document ingestion pipeline",
      "Vector database setup",
      "Query & retrieval engine",
      "Frontend integration",
      "Deployment & monitoring",
      "60-day support",
    ],
    topGradient: "linear-gradient(90deg, var(--accent-warm), #E8C88E, var(--accent-warm))",
    featured: true,
  },
  {
    number: "03",
    title: "Full AI Agent System",
    priceINR: 80000,
    timeline: "4–8 weeks",
    desc: "Autonomous multi-step AI agents that handle complex workflows without human intervention. Custom tools, memory, and reasoning.",
    deliverables: [
      "Full requirements workshop",
      "Multi-agent architecture",
      "Custom tool development",
      "Memory & state management",
      "Integration testing",
      "Staging & production deploy",
      "90-day support + SLA",
    ],
    topGradient: "linear-gradient(90deg, var(--border), var(--text-muted))",
    featured: false,
  },
];

const MINI_OFFERS = [
  { title: "College Talk",               priceINR: 3000,  priceLabel: "/session", cta: "Book Now"   },
  { title: "Brand & Modeling Collab",    priceINR: null,  priceLabel: "By arrangement", cta: "Reach Out" },
];

/* ── Component ── */
export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [currency, setCurrency] = useState<Currency>("INR");

  function go(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="services"
      ref={ref}
      style={{ background: "var(--bg-secondary)", padding: "clamp(5rem, 8vw, 8rem) 0" }}
    >
      <div className="mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <ScrollReveal className="mb-10">
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// WORK WITH ME"}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 pb-4">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 300,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                flex: 1,
              }}
            >
              What I build for you.
            </h2>

            {/* ── Currency switcher ── */}
            <div
              className="flex items-center gap-1 p-1 rounded-xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", flexShrink: 0 }}
            >
              {CURRENCIES.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCurrency(c.key)}
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    background: currency === c.key ? "var(--accent-warm)" : "transparent",
                    color: currency === c.key ? "#0A0908" : "var(--text-muted)",
                    fontWeight: currency === c.key ? 700 : 400,
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                >
                  {c.key}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 items-start">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: service.featured ? "1px solid var(--accent-warm)" : "1px solid var(--border)",
                position: "relative",
                marginTop: service.featured ? "0" : "0px",
              }}
              whileHover={{ y: -4 }}
            >
              {/* Featured badge */}
              {service.featured && (
                <div
                  className="absolute top-0 right-6"
                  style={{
                    background: "var(--accent-warm)",
                    color: "#0A0908",
                    fontFamily: "var(--font-label)",
                    fontSize: "8px",
                    letterSpacing: "0.12em",
                    padding: "4px 10px 5px",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  ★ FEATURED
                </div>
              )}

              {/* Accent top strip */}
              <div style={{ height: "3px", background: service.topGradient, flexShrink: 0 }} />

              <div className="flex flex-col p-6 gap-4">
                {/* Number */}
                <span style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--text-muted)", opacity: 0.5 }}>
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.5vw, 28px)",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </h3>

                {/* Price + timeline */}
                <div className="flex items-baseline gap-3 flex-wrap">
                  <motion.p
                    key={currency + service.number}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 500,
                      color: "var(--accent-warm)",
                    }}
                  >
                    {convertPrice(service.priceINR, currency)}
                  </motion.p>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.12em", color: "var(--text-muted)" }}>
                    {service.timeline}
                  </span>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "var(--border)" }} />

                {/* Description */}
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {service.desc}
                </p>

                {/* Deliverables */}
                <ul className="flex flex-col gap-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check size={12} style={{ color: "var(--accent-warm)", flexShrink: 0, marginTop: "4px" }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-secondary)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA — always at bottom, never hidden */}
                <button
                  onClick={() => go("#contact")}
                  className="w-full mt-2"
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "13px 20px",
                    borderRadius: "9999px",
                    background: service.featured ? "var(--accent-warm)" : "transparent",
                    color: service.featured ? "#0A0908" : "var(--text-primary)",
                    border: service.featured ? "none" : "1px solid var(--border)",
                    fontWeight: service.featured ? 700 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!service.featured) {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.borderColor = "var(--accent-warm)";
                      el.style.color = "var(--accent-warm)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!service.featured) {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.borderColor = "var(--border)";
                      el.style.color = "var(--text-primary)";
                    }
                  }}
                >
                  Get Started →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mini offering pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          {MINI_OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="flex items-center gap-4 rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "18px 24px",
                flex: 1,
                maxWidth: "420px",
              }}
            >
              <div className="flex-1 min-w-0">
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>
                  {offer.title}
                </p>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--accent-warm)", marginTop: "3px" }}>
                  {offer.priceINR
                    ? convertPrice(offer.priceINR, currency) + offer.priceLabel
                    : offer.priceLabel}
                </p>
              </div>
              <button
                onClick={() => go("#contact")}
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "8px",
                  letterSpacing: "0.12em",
                  padding: "7px 16px",
                  borderRadius: "9999px",
                  border: "1px solid var(--accent-warm)",
                  color: "var(--accent-warm)",
                  background: "transparent",
                  flexShrink: 0,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "var(--accent-warm)";
                  el.style.color = "#0A0908";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--accent-warm)";
                }}
              >
                {offer.cta}
              </button>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
