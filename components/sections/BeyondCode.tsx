"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Flame, ShoppingBag, Users, AlarmClock } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CARDS = [
  {
    icon: <Flame size={26} />,
    title: "Kalaripayattu Practitioner",
    subtitle: "Martial Artist",
    desc: "India's oldest martial art. Building physical discipline, reflexes, and the mental clarity that makes 4:30 AM productive.",
  },
  {
    icon: <ShoppingBag size={26} />,
    title: "Fashion & Retail",
    subtitle: "Clothing Business",
    desc: "Running a clothing store with DTF printing. Real business: inventory, staff, margins, customers.",
  },
  {
    icon: <Users size={26} />,
    title: "College Speaker",
    subtitle: "Community Builder",
    desc: "Talks on AI and entrepreneurship across Tamil Nadu. Giving back to builders who can't afford Silicon Valley.",
  },
  {
    icon: <AlarmClock size={26} />,
    title: "Personal Operating System",
    subtitle: "Disciplined System",
    desc: "4:30 AM rise. 3L water. Gym before code. The routine is the foundation everything else is built on.",
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
            {"// THE FULL PICTURE"}
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
            More than an engineer.
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
            Outside the terminal: I practice Kalaripayattu, speak at colleges across Tamil Nadu,
            run a clothing brand, and document the whole chaotic journey on YouTube — all from
            Nagercoil, where nobody told me this was supposed to be hard.
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
