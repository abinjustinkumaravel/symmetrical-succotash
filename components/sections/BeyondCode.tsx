"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Users, Briefcase, BookOpen, AlarmClock } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CARDS = [
  {
    icon: <Users size={26} />,
    title: "Client Communication",
    subtitle: "Business Development",
    desc: "Managed live B2B/B2C sales pipelines at AccioJob. Strong objection-handling and stakeholder communication — translating technical capabilities into business value.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Agile Delivery",
    subtitle: "Government Project",
    desc: "Delivered across backend, AI integration, security, and cloud deployment in a single trainee role on a live Qatar NPC government project. Tracked work in Jira and ServiceNow.",
  },
  {
    icon: <BookOpen size={26} />,
    title: "Continuous Learner",
    subtitle: "Academic Excellence",
    desc: "MCA at SRM (8.6 CGPA) after BCA in Data Science (8.5 CGPA). Consistently upskilling — from ML frameworks to cloud infrastructure to security engineering.",
  },
  {
    icon: <AlarmClock size={26} />,
    title: "Structured & Disciplined",
    subtitle: "Reliable Execution",
    desc: "Consistent, structured approach to engineering. Clean code, clear documentation, and the focus to drive projects from architecture planning through to production deployment.",
  },
];

export default function BeyondCode() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="beyond"
      ref={ref}
      className="relative overflow-hidden"
      style={{ padding: "clamp(5rem, 8vw, 8rem) 0" }}
    >
      {/* Background: Photo D with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/abin-lifestyle/1400/900"
          alt="Abin lifestyle"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,6,16,0.82)" }}
        />
        <GrainOverlay />
      </div>

      <div className="relative z-10 mx-auto px-8" >
        {/* Header */}
        <ScrollReveal className="mb-12">
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// WORKING STYLE"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              color: "#F2EFE8",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
            }}
          >
            A full-stack engineer.<br />A complete professional.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              color: "rgba(242,239,232,0.55)",
              lineHeight: 1.75,
              maxWidth: "620px",
            }}
          >
            Technical depth alone isn&apos;t enough. I bring client communication skills,
            agile delivery experience, academic rigour, and the discipline to ship on time —
            built across real government and enterprise environments.
          </p>
        </ScrollReveal>

        {/* 2x2 Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TiltCard tiltMax={10} glareEnabled scale={1.02} className="h-full rounded-2xl">
                <div
                  className="h-full flex flex-col gap-4 rounded-2xl"
                  style={{
                    background: "rgba(8,8,12,0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    padding: "28px 24px",
                    backdropFilter: "blur(12px)",
                    transition: "border-color 0.3s ease",
                    minHeight: "220px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderTopColor = "var(--accent-warm)";
                    (e.currentTarget as HTMLDivElement).style.borderTopWidth = "2px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderTopColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLDivElement).style.borderTopWidth = "1px";
                  }}
                >
                  {/* Icon */}
                  <div style={{ color: "var(--accent-warm)" }}>{card.icon}</div>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      color: "var(--accent-warm)",
                      opacity: 0.75,
                    }}
                  >
                    {card.subtitle.toUpperCase()}
                  </p>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "#F2EFE8",
                      lineHeight: 1.2,
                      marginTop: "-8px",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Desc */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "rgba(242,239,232,0.55)",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
