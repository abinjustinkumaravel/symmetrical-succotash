"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.2,
  className = "",
  priority = false,
  objectPosition = "top center",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Maps scroll from 0→1 to movement range based on speed
  const range = speed * 20; // e.g. speed 0.2 → ±4%
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${range}%`, `${range}%`]
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ isolation: "isolate" }}
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, scale: 1 + speed * 0.4 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "cover",
            objectPosition,
          }}
        />
      </motion.div>
    </div>
  );
}
