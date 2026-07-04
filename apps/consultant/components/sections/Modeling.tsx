"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface LightboxProps {
  imageSrc: string;
  alt: string;
  onClose: () => void;
}

function Lightbox({ imageSrc, alt, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative"
        style={{ width: "60vw", height: "70vh", maxWidth: "800px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: "contain", borderRadius: "12px" }}
        />

        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: 0,
            fontFamily: "var(--font-label)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          CLOSE ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

interface PhotoSlotProps {
  slot: string;
  label: string;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}

function PhotoSlot({ slot, imageSrc, className = "", style }: PhotoSlotProps) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div
        className={`relative overflow-hidden group ${className}`}
        data-cursor="photo"
        style={{
          borderRadius: "4px",
          cursor: "none",
          ...style,
        }}
        onClick={() => setLightbox(true)}
      >
        <Image
          src={imageSrc}
          alt={slot}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        {/* Grain */}
        <GrainOverlay />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ background: "rgba(200,169,110,0.08)", zIndex: 4, opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox imageSrc={imageSrc} alt={slot} onClose={() => setLightbox(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function Modeling() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="modeling"
      ref={ref}
      style={{
        background: "var(--bg-secondary)",
        padding: "clamp(5rem, 8vw, 8rem) 0",
      }}
    >
      <div className="mx-auto px-8">
        {/* Header */}
        <ScrollReveal className="mb-10">
          <p
            className="mb-3 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--accent-warm)" }}
          >
            <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
            {"// VISUAL IDENTITY"}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            The face behind the brand.
          </h2>
          <p className="mt-2" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)" }}>
            A visual identity as intentional as the code.
          </p>
        </ScrollReveal>

        {/* Top row: asymmetric 3 photos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3"
          style={{ height: "clamp(300px, 45vw, 500px)" }}
        >
          {/* Photo A — large hero */}
          <PhotoSlot
            slot="PHOTO A"
            label="Hero Portrait"
            imageSrc="https://picsum.photos/seed/abin-mod-a/700/900"
            className="lg:col-span-7 h-full"
          />

          {/* Photos B + C stacked */}
          <div className="lg:col-span-5 flex flex-col gap-3 h-full">
            <PhotoSlot
              slot="PHOTO B"
              label="Editorial Close-Up"
              imageSrc="https://picsum.photos/seed/abin-mod-b/500/500"
              className="flex-1"
            />
            <PhotoSlot
              slot="PHOTO C"
              label="Working / In Context"
              imageSrc="https://picsum.photos/seed/abin-mod-c/500/500"
              className="flex-1"
            />
          </div>
        </motion.div>

        {/* Editorial caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-right mb-3"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
          }}
        >
          Personal branding · Visual storytelling · Authentic identity
        </motion.p>

        {/* Bottom row: full-width with text overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden"
          style={{ height: "clamp(200px, 28vw, 360px)", borderRadius: "4px" }}
        >
          <PhotoSlot
            slot="PHOTO D"
            label="Lifestyle / Character Shot"
            imageSrc="https://picsum.photos/seed/abin-mod-d/1400/500"
            className="w-full h-full"
            style={{ borderRadius: "4px" }}
          />

          {/* Overlaid editorial text */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 p-8"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 52px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Nagercoil × The World
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
