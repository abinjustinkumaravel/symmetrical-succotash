"use client";

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

export default function GrainOverlay({
  className = "",
  opacity = 1,
}: GrainOverlayProps) {
  return (
    <div
      className={`grain-overlay ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full"
      >
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#grain-noise)"
        />
      </svg>
    </div>
  );
}
