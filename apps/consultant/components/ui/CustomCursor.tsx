"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = "default" | "link" | "photo" | "project" | "cta";

interface CursorConfig {
  ringSize: number;
  label: string | null;
  fill: boolean;
}

const CURSOR_STATES: Record<CursorState, CursorConfig> = {
  default: { ringSize: 36, label: null, fill: false },
  link:    { ringSize: 52, label: "→",   fill: false },
  photo:   { ringSize: 72, label: "VIEW", fill: false },
  project: { ringSize: 64, label: "OPEN", fill: false },
  cta:     { ringSize: 48, label: null,   fill: true },
};

export default function CustomCursor() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  // Detect touch device — runs only on client, defaults to true (hidden) on SSR
  const [isMobile, setIsMobile] = useState(true);

  // Dot: instant follow
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 50, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 50, mass: 0.2 });

  // Ring: lagging follow
  const ringX = useSpring(cursorX, { stiffness: 80, damping: 20, mass: 0.6 });
  const ringY = useSpring(cursorY, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    // Only enable when primary pointer is fine (mouse/trackpad), not coarse (touch)
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(false);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest(
        "a, button, [data-cursor]"
      );
      if (!target) return;

      const attr = target.getAttribute("data-cursor");
      if (attr) {
        setCursorState(attr as CursorState);
      } else if (target.matches("a, button")) {
        setCursorState("link");
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest(
        "a, button, [data-cursor]"
      );
      if (target) setCursorState("default");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  const config = CURSOR_STATES[cursorState];

  return (
    <>
      {/* Dot — always small, instant */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          background: "var(--accent-warm)",
          opacity: cursorState === "cta" ? 0 : 1,
        }}
        aria-hidden
      />

      {/* Ring — lagging, size/state changes */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none rounded-full flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: config.ringSize,
          height: config.ringSize,
          background: config.fill ? "var(--accent-warm)" : "rgba(0,0,0,0)",
          borderColor: config.fill
            ? "var(--accent-warm)"
            : "var(--accent-warm)",
          borderWidth: "1px",
          borderStyle: "solid",
          opacity: config.fill ? 0.9 : 0.7,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        aria-hidden
      >
        {config.label && (
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "8px",
              letterSpacing: "0.1em",
              color: config.fill ? "var(--bg-primary)" : "var(--accent-warm)",
              userSelect: "none",
              textTransform: "uppercase",
            }}
          >
            {config.label}
          </span>
        )}
      </motion.div>
    </>
  );
}
