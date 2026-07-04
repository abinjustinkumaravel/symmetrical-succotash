"use client";

import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const navLinks = [
  ["About",    "#about"],
  ["Work",     "#projects"],
  ["Speaking", "#experience"],
  ["Services", "#services"],
  ["Contact",  "#contact"],
];

const socials = [
  { Icon: GithubIcon,   label: "GitHub",   href: "https://github.com/abinjustinkumaravel" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/abin-justin-kumaravel/" },
  { Icon: XIcon,        label: "X",        href: "https://x.com/Abin_JKV" },
  { Icon: YoutubeIcon,  label: "YouTube",  href: "https://www.youtube.com/@abin-justinkumaravel" },
  { Icon: Mail,         label: "Email",    href: "mailto:abinjustinkumaravel@gmail.com" },
];

export default function Footer() {
  function go(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer style={{ background: "var(--bg-primary)", position: "relative" }}>
      {/* Animated gradient border */}
      <div className="gradient-border-animated" />

      <div
        className="mx-auto px-8 py-16"
        // style={{ maxWidth: "1400px" }}
      >
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 justify-items-start md:justify-items-center">
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 300,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
              className="pb-2"
            >
              AJ<span style={{ color: "var(--accent-warm)" }}>.</span>
            </p>
            <p
              className="mt-3 pt-2"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Engineer · Creator · Model · Builder
            </p>
            <p
              className="mt-4 pb-2"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Building intelligent systems and a<br />
              life worth documenting — from<br />
              Nagercoil, Tamil Nadu.
            </p>
          </div>

          {/* Nav links 2x3 grid */}
          <div className="flex flex-col justify-start">
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-warm)",
              }}
            >
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map(([label, href]) => (
                <button
                  key={href}
                  onClick={() => go(href)}
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    textAlign: "left",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-warm)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social icons + availability */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-warm)",
              }}
            >
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--accent-warm)";
                    el.style.color = "var(--accent-warm)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-2 mt-2"
              style={{
                padding: "6px 12px",
                border: "1px solid var(--border)",
                borderRadius: "9999px",
                width: "fit-content",
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--success)",
                }}
              >
                Available for projects
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "0.5px solid var(--border)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Built with Next.js &amp; conviction · Nagercoil, Tamil Nadu 🇮🇳 · © {new Date().getFullYear()} Abin Justinkumaravel
          </p>
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            abinjustinkumaravel@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
