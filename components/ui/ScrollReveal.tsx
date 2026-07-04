"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const offsets: Record<string, { x?: number; y?: number }> = {
    up:    { y: 40 },
    down:  { y: -40 },
    left:  { x: -40 },
    right: { x: 40 },
    none:  {},
  };

  const hidden = { opacity: 0, ...offsets[direction] };
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  };

  const isHorizontal = direction === "left" || direction === "right";

  return (
    <div
      ref={ref}
      className={className}
      style={isHorizontal ? { overflow: "hidden" } : undefined}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ hidden, visible }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
