"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Zap, Navigation, TrendingUp, Mic2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ExpertiseCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
}

const CARDS: ExpertiseCard[] = [
  {
    icon: <Brain size={22} />,
    title: "Multimodal RAG",
    desc: "Vision-Language Models + Knowledge Graph retrieval. ColPali-powered pipelines that treat documents as images — zero OCR brittleness.",
    tags: ["ColPali", "Neo4j", "LangGraph"],
  },
  {
    icon: <Zap size={22} />,
    title: "Agentic Workflows",
    desc: "Stateful multi-step agents orchestrated with LangGraph. Real-time tool use, memory, and human-in-the-loop checkpoints.",
    tags: ["LangGraph", "Playwright", "Deepgram"],
  },
  {
    icon: <Code2 size={22} />,
    title: "SLM Fine-Tuning",
    desc: "Domain-specific model adaptation with Unsloth + QLoRA + DPO. GPT-4 quality at 10× lower cost using Knowledge Distillation.",
    tags: ["Unsloth", "QLoRA", "DPO"],
  },
  {
    icon: <Navigation size={22} />,
    title: "FastAPI & Backend",
    desc: "Production-grade Python APIs with FastAPI, PostgreSQL, and Redis. Clean microservice architecture that holds up under real load.",
    tags: ["FastAPI", "PostgreSQL", "Docker"],
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Entrepreneurship",
    desc: "Managing Director at TheHouseOfRegent. AI System Engineer at Lure Techsolutions. From zero to enterprise clients — product strategy, team, and revenue.",
    tags: ["Managing Director", "AI System Engineer", "Ventures"],
  },
  {
    icon: <Mic2 size={22} />,
    title: "AI Education",
    desc: "YouTube channel teaching advanced LLM engineering to 1000+ Indian developers. Keynote speaker at Tamil Nadu engineering colleges.",
    tags: ["YouTube", "Keynotes", "Community"],
  },
];

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="expertise"
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        padding: "clamp(5rem, 8vw, 8rem) 0",
      }}
    >
      <div className="mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left heading */}
          <ScrollReveal direction="left" className="lg:col-span-4">
            <div className="relative">
              <span className="section-number" style={{ top: "-40px", left: "-20px" }}>02</span>

              <p
                className="mb-4 flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "var(--accent-warm)",
                }}
              >
                <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
                {"// EXPERTISE"}
              </p>

              <h2
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Advanced stack.<br />
                Real<br />
                <span style={{ color: "var(--accent-warm)" }}>deployments.</span>
              </h2>

              <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                I operate across the full spectrum — from AI architecture to personal brand.
              </p>
            </div>
          </ScrollReveal>

          {/* Right cards grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.08 * i,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <TiltCard
                  tiltMax={8}
                  glareEnabled={false}
                  scale={1.02}
                  className="h-full rounded-2xl"
                >
                  <div
                    className="h-full flex flex-col gap-3 rounded-2xl"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      padding: "22px 20px",
                      minHeight: "200px",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-warm)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "color-mix(in srgb, var(--accent-warm) 12%, transparent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-warm)",
                        flexShrink: 0,
                      }}
                    >
                      {card.icon}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {card.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-label)",
                            fontSize: "8px",
                            letterSpacing: "0.1em",
                            padding: "3px 8px",
                            borderRadius: "9999px",
                            border: "1px solid var(--border)",
                            color: "var(--accent-warm)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
