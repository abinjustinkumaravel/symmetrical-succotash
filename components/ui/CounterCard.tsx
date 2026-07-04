"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";

interface CounterCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function CounterCard({
  value,
  suffix = "+",
  label,
  className = "",
}: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(v) {
        if (displayRef.current) {
          displayRef.current.textContent = Math.floor(v).toString();
        }
      },
    });
    return controls.stop;
  }, [inView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col items-center text-center gap-1 ${className}`}
    >
      <p
        className="font-display leading-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 3vw, 40px)",
          fontWeight: 600,
          color: "#F2EFE8",
        }}
      >
        <span ref={displayRef}>0</span>
        <span style={{ color: "var(--accent-warm)" }}>{suffix}</span>
      </p>
      <p
        className="font-label"
        style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "var(--font-label)",
          color: "rgba(242,239,232,0.5)",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}
