"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /** Split by "words" (default) or "chars" */
  splitBy?: "words" | "chars";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  once = true,
  splitBy = "words",
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const tokens = splitBy === "chars" ? text.split("") : text.split(" ");

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const child = {
    hidden: { opacity: 0, y: 24, skewY: 1 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      aria-label={text}
    >
      {tokens.map((token, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.06em]"
        >
          <motion.span className="inline-block" variants={child}>
            {token}
            {splitBy === "chars" && token === " " ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
