"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./DevSummary";

const GROUPS = [
  {
    label: "Languages",
    skills: [
      { name: "Python",      icon: "python",     pct: 90 },
      { name: "JavaScript",  icon: "javascript",  pct: 82 },
      { name: "TypeScript",  icon: "typescript",  pct: 70 },
      { name: "SQL",         icon: "mysql",       pct: 78 },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "PyTorch",         icon: "pytorch",          pct: 78 },
      { name: "TensorFlow",      icon: "tensorflow",       pct: 70 },
      { name: "Hugging Face",    icon: "huggingface",      pct: 80 },
      { name: "scikit-learn",    icon: "scikitlearn",      pct: 75 },
      { name: "YOLOv8",          icon: "opencv",           pct: 68 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "FastAPI",   icon: "fastapi",   pct: 85 },
      { name: "Node.js",   icon: "nodedotjs", pct: 80 },
      { name: "Redis",     icon: "redis",     pct: 72 },
      { name: "PostgreSQL",icon: "postgresql",pct: 75 },
      { name: "ChromaDB",  icon: "databricks",pct: 70 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React",      icon: "react",    pct: 82 },
      { name: "Next.js",    icon: "nextdotjs",pct: 80 },
      { name: "Tailwind",   icon: "tailwindcss",pct: 76 },
      { name: "Framer",     icon: "framer",   pct: 70 },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "GCP",    icon: "googlecloud", pct: 72 },
      { name: "Docker", icon: "docker",      pct: 78 },
      { name: "Nginx",  icon: "nginx",       pct: 68 },
      { name: "Linux",  icon: "linux",       pct: 75 },
    ],
  },
];

export default function DevSkills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 4vw, 56px)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel num="03" title="Skills" inView={inView} />

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + gi * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontSize: 9,
                letterSpacing: "0.16em",
                color: "var(--accent)",
                marginBottom: 14,
              }}
            >
              {group.label.toUpperCase()}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: "10px 16px",
              }}
            >
              {group.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 + gi * 0.06 + si * 0.04, duration: 0.4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    borderRadius: 10,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--border-accent)";
                    el.style.background = "var(--bg-hover)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--bg-card)";
                  }}
                >
                  {/* Simple Icons CDN */}
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}/C8A96E`}
                    alt={skill.name}
                    width={18}
                    height={18}
                    style={{ flexShrink: 0, opacity: 0.85 }}
                    onError={(e) => {
                      // fallback: show colored dot
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          color: "var(--text-primary)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          color: "var(--accent)",
                          marginLeft: 6,
                          flexShrink: 0,
                        }}
                      >
                        {skill.pct}%
                      </span>
                    </div>
                    {/* Bar */}
                    <div style={{ height: 2, background: "var(--border)", borderRadius: 1, overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.pct}%` } : {}}
                        transition={{ duration: 0.9, delay: 0.3 + gi * 0.06 + si * 0.04, ease: "easeOut" }}
                        style={{ height: "100%", background: "var(--accent)", borderRadius: 1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
