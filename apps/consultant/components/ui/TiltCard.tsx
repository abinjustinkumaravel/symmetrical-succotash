"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMax?: number;
  glareEnabled?: boolean;
  scale?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltMax = 12,
  glareEnabled = true,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw motion values: -0.5 to 0.5 (fraction from center)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-smoothed values
  const springX = useSpring(rawX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(rawY, { stiffness: 300, damping: 30, mass: 0.5 });

  // 3D rotations
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltMax, tiltMax]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltMax, -tiltMax]);

  // Glare direction (moves toward top-left when mouse is bottom-right)
  const glareX = useTransform(springX, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["100%", "0%"]);

  // Glare opacity: stronger at edges
  const glareOpacity = useTransform(
    [springX, springY] as MotionValue<number>[],
    ([x, y]: number[]) =>
      Math.min(Math.sqrt(x * x + y * y) * 0.6, 0.15)
  );

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rawX.set((e.clientX - centerX) / rect.width);
    rawY.set((e.clientY - centerY) / rect.height);
  };

  const onMouseEnter = () => setIsHovered(true);

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        scale: isHovered ? scale : 1,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transformOrigin: "center center",
        transition: isHovered ? undefined : "scale 0.3s ease",
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Content — lifted in Z-space */}
      <div
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>

      {/* Glare overlay */}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
          style={{ opacity: glareOpacity, zIndex: 10 }}
          aria-hidden
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, transparent 60%)`,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
