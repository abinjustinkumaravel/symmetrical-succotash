"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

// ── Data ────────────────────────────────────────────────────────────────────

const ROLES = [
  "AI/ML Engineer",
  "Full-Stack Developer",
  "LLM Systems Builder",
  "RAG Pipeline Architect",
  "Backend API Engineer",
  "Cloud & DevOps Engineer",
];

const TECH_CHIPS = [
  { label: "FastAPI",      x: "-22%", y: "8%"  },
  { label: "ChromaDB",     x: "106%", y: "18%" },
  { label: "PyTorch",      x: "-24%", y: "52%" },
  { label: "Docker · GCP", x: "104%", y: "62%" },
  { label: "Qwen2.5",      x: "18%",  y: "-9%" },
  { label: "BAAI/bge-m3",  x: "52%",  y: "108%"},
];

const STATS = [
  ["300+", "DSA Problems"],
  ["3+",   "Years Active" ],
  ["8.6",  "MCA CGPA"    ],
  ["5+",   "Projects"    ],
];

// Deterministic so SSR & hydration match
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: (i * 137.508) % 100,
  y: (i * 91.234) % 100,
  size: 1 + (i % 2),
  duration: 2.8 + (i % 4) * 0.7,
  delay: (i * 0.16) % 2.8,
  opacity: 0.15 + (i % 5) * 0.07,
}));

// ── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const cardWrapRef = useRef<HTMLDivElement>(null);

  // Mouse-follow 3-D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 180,
    damping: 22,
  });

  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2400
    );
    return () => clearInterval(t);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }
  function scrollToWork() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "650px", background: "#08080A", color: "#F2EFE8" }}
    >
      {/* ── BACKGROUND ──────────────────────────────────────────────────── */}

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(200,169,110,0.13) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          animate={{ opacity: [p.opacity, p.opacity * 0.25, p.opacity], scale: [1, 1.6, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "#C8A96E",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      {/* Circuit SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.07, zIndex: 1 }}
        preserveAspectRatio="none"
        viewBox="0 0 1200 700"
      >
        <motion.path
          d="M -10 160 L 130 160 L 130 85 L 300 85 L 300 210 L 470 210 L 470 130 L 640 130"
          stroke="#C8A96E" strokeWidth="1" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.5, delay: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M -10 380 L 90 380 L 90 295 L 240 295 L 240 440 L 410 440 L 410 330 L 560 330"
          stroke="#C8A96E" strokeWidth="1" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.5, delay: 1.0, ease: "easeInOut" }}
        />
        <motion.path
          d="M 900 -10 L 900 90 L 1020 90 L 1020 210 L 870 210 L 870 350 L 1050 350 L 1050 480"
          stroke="#C8A96E" strokeWidth="1" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.5, delay: 1.6, ease: "easeInOut" }}
        />
        {/* Junction nodes */}
        {[[130,160],[300,85],[300,210],[470,130],[90,380],[240,295],[410,330],[900,90],[1020,210],[870,350]].map(([cx,cy],i)=>(
          <motion.circle
            key={i} cx={cx} cy={cy} r="3" fill="#C8A96E"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.8, 1], opacity: [0, 1, 0.6] }}
            transition={{ delay: 0.5 + i * 0.18, duration: 0.55 }}
          />
        ))}
      </svg>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(8,8,10,0.72) 100%)",
          zIndex: 2,
        }}
      />

      {/* ── DESKTOP LAYOUT ──────────────────────────────────────────────── */}
      <div className="hidden md:flex relative z-10 w-full h-full items-center">

        {/* LEFT — Typography */}
        <div
          className="flex flex-col justify-center"
          style={{
            width: "50%",
            paddingLeft: "clamp(2.5rem, 6vw, 6rem)",
            paddingRight: "clamp(1rem, 3vw, 2.5rem)",
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div style={{ height: "1px", width: "28px", background: "#C8A96E", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.2em", color: "#C8A96E" }}>
              OPEN TO OPPORTUNITIES · 2025
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C8A96E", display: "inline-block" }}
            />
          </motion.div>

          {/* Name */}
          <div className="mb-6" style={{ overflow: "hidden" }}>
            {["ABIN J", "KUMARAVEL"].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.13, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 6.5vw, 96px)",
                  fontWeight: 300,
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  color: i === 1 ? "#C8A96E" : "#F2EFE8",
                  display: "block",
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3 mb-6"
            style={{ height: "26px", overflow: "hidden" }}
          >
            <div style={{ width: "1px", height: "18px", background: "#C8A96E", flexShrink: 0 }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -22, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#9A9690",
                }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "#9A9690",
              marginBottom: "1.5rem",
              lineHeight: 1.6,
              maxWidth: "360px",
            }}
          >
            Building the Neural Infrastructure for Modern Business.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-wrap gap-3 my-5"
          >
            <MagneticButton>
              <button
                onClick={scrollToWork}
                style={{
                  fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.15em",
                  padding: "13px 28px", borderRadius: "9999px", marginBottom: "1.5rem",
                  background: "#C8A96E", color: "#08080A", fontWeight: 700, border: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.82")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
              >
                Explore My Work
              </button>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}
          >
            {STATS.map(([num, label], i) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "32px" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 300, color: "#C8A96E", lineHeight: 1 }}>
                    {num}
                  </div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "7.5px", letterSpacing: "0.15em", color: "#9A9690", marginTop: "5px", whiteSpace: "nowrap" }}>
                    {label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div style={{ width: "1px", height: "32px", background: "rgba(200,169,110,0.3)", alignSelf: "center", flexShrink: 0 }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3-D Photo Card */}
        <div
          className="flex items-center justify-center"
          style={{ width: "50%", paddingRight: "clamp(2rem, 5vw, 5rem)" }}
        >
          <motion.div
            ref={cardWrapRef}
            initial={{ opacity: 0, scale: 0.88, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px", position: "relative", width: "100%", maxWidth: "340px" }}
          >
            {/* Tilt layer */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d", position: "relative" }}
            >
              {/* Card */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid rgba(200,169,110,0.22)",
                  boxShadow:
                    "0 0 50px rgba(200,169,110,0.07), 0 0 110px rgba(200,169,110,0.03), inset 0 0 30px rgba(200,169,110,0.03)",
                  aspectRatio: "3/4",
                }}
              >
                {/* Photo */}
                <Image
                  src="/images/10.png"
                  alt="Abin Justinkumaravel"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />

                {/* Scan line */}
                <motion.div
                  animate={{ top: ["-8%", "108%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  style={{
                    position: "absolute",
                    left: 0, right: 0,
                    height: "70px",
                    background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.11), transparent)",
                    pointerEvents: "none",
                    zIndex: 5,
                  }}
                />

                {/* Bottom gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,10,0.88) 0%, rgba(8,8,10,0.2) 45%, transparent 65%)",
                    zIndex: 3,
                    pointerEvents: "none",
                  }}
                />

                {/* Corner brackets */}
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                  style={{ position: "absolute", top: 14, left: 14, width: 18, height: 18, borderTop: "1.5px solid #C8A96E", borderLeft: "1.5px solid #C8A96E", zIndex: 6, pointerEvents: "none" }}
                />
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
                  style={{ position: "absolute", top: 14, right: 14, width: 18, height: 18, borderTop: "1.5px solid #C8A96E", borderRight: "1.5px solid #C8A96E", zIndex: 6, pointerEvents: "none" }}
                />
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                  style={{ position: "absolute", bottom: 14, right: 14, width: 18, height: 18, borderBottom: "1.5px solid #C8A96E", borderRight: "1.5px solid #C8A96E", zIndex: 6, pointerEvents: "none" }}
                />
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                  style={{ position: "absolute", bottom: 14, left: 14, width: 18, height: 18, borderBottom: "1.5px solid #C8A96E", borderLeft: "1.5px solid #C8A96E", zIndex: 6, pointerEvents: "none" }}
                />

                {/* ID badge */}
                <div style={{ position: "absolute", bottom: 18, left: 18, right: 18, zIndex: 7 }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: "7px", letterSpacing: "0.22em", color: "#C8A96E", marginBottom: "4px" }}>
                    SUBJECT ID · AJK-2025
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 300, color: "#F2EFE8", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    Abin Justinkumaravel
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "7px" }}>
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4ADE80", flexShrink: 0 }}
                    />
                    <span style={{ fontFamily: "var(--font-label)", fontSize: "7px", letterSpacing: "0.16em", color: "#4ADE80" }}>
                      SYSTEMS ONLINE
                    </span>
                  </div>
                </div>

                {/* Holographic shimmer */}
                <motion.div
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(105deg, transparent 38%, rgba(200,169,110,0.09) 50%, transparent 62%)",
                    pointerEvents: "none",
                    zIndex: 4,
                  }}
                />
              </div>

              {/* Depth shadow layer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "14px",
                  border: "1px solid rgba(200,169,110,0.08)",
                  transform: "translateZ(-18px) scale(1.025)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>

            {/* Floating tech chips */}
            {TECH_CHIPS.map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                transition={{
                  opacity: { delay: 1.3 + i * 0.14, duration: 0.4 },
                  scale:   { delay: 1.3 + i * 0.14, duration: 0.4, type: "spring", stiffness: 260 },
                  y:       { delay: i * 0.25, duration: 2.6 + i * 0.28, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  position: "absolute",
                  left: chip.x,
                  top: chip.y,
                  fontFamily: "var(--font-label)",
                  fontSize: "7px",
                  letterSpacing: "0.13em",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(200,169,110,0.28)",
                  color: "#C8A96E",
                  background: "rgba(8,8,10,0.82)",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
                  zIndex: 20,
                }}
              >
                {chip.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <span
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "7px",
            letterSpacing: "0.22em",
            color: "rgba(200,169,110,0.45)",
            border: "1px solid rgba(200,169,110,0.22)",
            borderRadius: "9999px",
            padding: "3px 10px",
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ height: [14, 26, 14] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "1px", background: "rgba(200,169,110,0.35)", borderRadius: "1px" }}
        />
      </motion.div>

      {/* ── MOBILE LAYOUT ───────────────────────────────────────────────── */}
      <div className="md:hidden absolute inset-0 z-20">
        {/* Full-bleed photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/10.png"
            alt="Abin Justinkumaravel"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(8,8,10,0.55) 0%, rgba(8,8,10,0.85) 100%)" }}
        />
        {/* Mobile content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
          <div className="mb-4">
            {["ABIN J", "KUMARAVEL"].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(52px, 13vw, 80px)",
                  fontWeight: 300,
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  color: i === 1 ? "#C8A96E" : "#F2EFE8",
                }}
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Cycling role on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center justify-center gap-2 mb-4"
            style={{ height: "22px", overflow: "hidden" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.18em", color: "rgba(200,169,110,0.8)" }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ color: "rgba(242,239,232,0.55)", fontSize: "13px", fontFamily: "var(--font-body)", marginBottom: "2rem", maxWidth: "300px", lineHeight: 1.55, textAlign: "center" }}
          >
            Building the Neural Infrastructure for Modern Business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            <button
              onClick={scrollToWork}
              style={{
                fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.15em",
                padding: "12px 24px", borderRadius: "9999px",
                background: "#C8A96E", color: "#0A0908", fontWeight: 700, border: "none",
              }}
            >
              Explore
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
