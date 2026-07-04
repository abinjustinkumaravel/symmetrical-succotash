"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#expertise"  },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#services"   },
  { label: "Contact",    href: "#contact"    },
];

// Non-nav sections mapped to their nearest nav link
const SECTION_MAP: Record<string, string> = {
  identity: "about",
  beyond:   "experience",
};

// All section IDs on the page in top-to-bottom order
const ALL_IDS = [
  "about", "identity", "expertise", "projects",
  "experience", "beyond", "services", "contact",
];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    function update() {
      // A section becomes active when its top scrolls past the navbar (80px).
      // Small offset prevents the next section from firing prematurely.
      const trigger = window.scrollY + 80;
      let current = "";
      for (const id of ALL_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= trigger) current = id;
      }
      setActive(SECTION_MAP[current] ?? current);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(href: string) {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: "64px",
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg-primary) 90%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "0.5px solid var(--border)"
            : "0.5px solid transparent",
          transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between h-full"
          style={{ maxWidth: "1400px", padding: "0 2rem" }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            AJ<span style={{ color: "var(--accent-warm)" }}>.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <div key={href} className="relative flex flex-col items-center gap-1">
                  <button
                    onClick={() => go(href)}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--accent-warm)" : "var(--text-secondary)",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-warm)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = isActive
                        ? "var(--accent-warm)"
                        : "var(--text-secondary)";
                    }}
                  >
                    {label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="rounded-full"
                      style={{ width: 3, height: 3, background: "var(--accent-warm)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: theme toggle + résumé + hire me + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <MagneticButton className="hidden sm:block">
              <button
                onClick={() => go("#contact")}
                data-cursor="cta"
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: "1px solid var(--text-secondary)",
                  color: "var(--text-primary)",
                  background: "transparent",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--accent-warm)";
                el.style.background = "rgba(200,169,110,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "var(--text-secondary)";
                  el.style.background = "transparent";
                }}
              >
                Hire Me
              </button>
            </MagneticButton>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
              style={{ width: 36, height: 36 }}
            >
              {[
                { rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 },
                { opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 },
                { rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 },
              ].map((anim, i) => (
                <motion.span
                  key={i}
                  animate={anim}
                  className="block origin-center"
                  style={{
                    width: "18px",
                    height: "1.5px",
                    borderRadius: "2px",
                    background: "var(--text-primary)",
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{ color: "var(--text-secondary)", fontSize: "24px" }}
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
              {links.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  onClick={() => go(href)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(32px, 8vw, 52px)",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-warm)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                  }}
                >
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Bottom CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07 + 0.1, duration: 0.35 }}
              className="p-8 flex justify-center gap-3"
            >
              <button
                onClick={() => go("#contact")}
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  background: "var(--accent-warm)",
                  color: "#0A0908",
                  fontWeight: 700,
                }}
              >
                Hire Me
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
