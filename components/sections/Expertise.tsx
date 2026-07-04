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
    title: "RAG Pipeline Design",
    desc: "Hybrid BM25 + dense vector retrieval with cross-encoder reranking. Production RAG pipelines over large knowledge bases enabling accurate, context-aware Q&A.",
    tags: ["BM25", "ChromaDB", "BAAI/bge-m3", "BGE-Reranker"],
  },
  {
    icon: <Zap size={22} />,
    title: "LLM Integration",
    desc: "End-to-end LLM API integration with prompt engineering and response handling — deployed in live government and enterprise environments.",
    tags: ["Qwen2.5", "HuggingFace", "llama-cpp-python", "Prompt Eng."],
  },
  {
    icon: <Code2 size={22} />,
    title: "Backend & API Engineering",
    desc: "Production-grade REST APIs with FastAPI and Node.js. JWT authentication, Redis session management, IP whitelisting, and role-based access control.",
    tags: ["FastAPI", "Node.js", "Redis", "JWT", "RBAC"],
  },
  {
    icon: <Navigation size={22} />,
    title: "ML Frameworks",
    desc: "Applied machine learning with PyTorch, TensorFlow, and scikit-learn. Hugging Face Transformers for NLP. Computer vision with YOLOv8 for real-time detection.",
    tags: ["PyTorch", "TensorFlow", "scikit-learn", "YOLOv8"],
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Cloud & DevOps",
    desc: "Deployed and managed production systems on Google Cloud Platform. Containerized environments with Docker and Docker Compose, served through Nginx on Linux.",
    tags: ["GCP", "Docker", "Nginx", "Linux CLI"],
  },
  {
    icon: <Mic2 size={22} />,
    title: "Frontend Engineering",
    desc: "React and Next.js frontend development with multi-layer validation. Built full-stack interfaces for government data pipeline workflows and enterprise portals.",
    tags: ["React", "Next.js", "TypeScript", "Validation"],
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
