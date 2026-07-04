"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/918122354855?text=Hi%20Abin%2C%20I%27d%20like%20to%20view%20your%20portfolio.";
const EMAIL = "mailto:abinjustinkumaravel@gmail.com?subject=Portfolio%20Access%20Request";

export default function GatePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "var(--font-outfit, 'Outfit', sans-serif)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle grain texture */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        opacity: 0.6,
      }} />

      {/* Glow */}
      <div style={{
        position: "fixed", top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 480, height: 480,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 480, width: "100%",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>

        {/* Monogram */}
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          border: "1px solid rgba(200,169,110,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 36px",
          background: "rgba(200,169,110,0.05)",
        }}>
          <span style={{
            fontFamily: "var(--font-syncopate, 'Syncopate', sans-serif)",
            fontSize: 15, fontWeight: 700,
            color: "#C8A96E", letterSpacing: "0.06em",
          }}>AJ</span>
        </div>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-jetbrains, monospace)",
          fontSize: 9, letterSpacing: "0.2em",
          color: "rgba(200,169,110,0.6)",
          textTransform: "uppercase",
          margin: "0 0 18px",
        }}>Private Portfolio</p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)",
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: 300,
          color: "#F5F0E8",
          lineHeight: 1.2,
          margin: "0 0 20px",
          letterSpacing: "-0.01em",
        }}>
          This portfolio is<br />
          <em style={{ fontStyle: "italic", color: "#C8A96E" }}>by invitation only.</em>
        </h1>

        {/* Body */}
        <p style={{
          fontFamily: "var(--font-outfit, sans-serif)",
          fontSize: 14, fontWeight: 300,
          color: "rgba(245,240,232,0.5)",
          lineHeight: 1.8,
          margin: "0 0 44px",
          maxWidth: 360,
          marginLeft: "auto", marginRight: "auto",
        }}>
          I share my work selectively with clients and collaborators.
          Reach out directly and I&apos;ll get you access.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 28px", borderRadius: 4,
              background: "#C8A96E", color: "#0A0A0A",
              fontFamily: "var(--font-outfit, sans-serif)",
              fontSize: 12, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {/* WhatsApp icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          <a
            href={EMAIL}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "13px 28px", borderRadius: 4,
              background: "transparent",
              border: "1px solid rgba(200,169,110,0.35)",
              color: "#C8A96E",
              fontFamily: "var(--font-outfit, sans-serif)",
              fontSize: 12, fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(200,169,110,0.7)";
              e.currentTarget.style.background = "rgba(200,169,110,0.06)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(200,169,110,0.35)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {/* Mail icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Email
          </a>
        </div>

        {/* Divider */}
        <div style={{
          width: 40, height: 1,
          background: "rgba(200,169,110,0.2)",
          margin: "48px auto 24px",
        }} />

        {/* Footer note */}
        <p style={{
          fontFamily: "var(--font-jetbrains, monospace)",
          fontSize: 9, letterSpacing: "0.15em",
          color: "rgba(245,240,232,0.2)",
          textTransform: "uppercase",
          margin: 0,
        }}>
          © {new Date().getFullYear()} Abin Justin Kumaravel
        </p>
      </div>
    </div>
  );
}
