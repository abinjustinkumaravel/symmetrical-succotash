"use client";

import { useState } from "react";
import DevSidebar from "@/components/sections/DevSidebar";
import DevMain from "@/components/sections/DevMain";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div
        className="resume-layout"
        data-sidebar={sidebarOpen ? "open" : "closed"}
      >
        <DevSidebar sidebarOpen={sidebarOpen} />
        <DevMain />
      </div>

      {/* Persistent toggle — always visible, sits at the sidebar/main boundary */}
      <button
        onClick={() => setSidebarOpen(o => !o)}
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        className="sidebar-toggle-btn"
        style={{ left: sidebarOpen ? "calc(290px - 14px)" : "12px" }}
      >
        {sidebarOpen ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
      </button>

      <style>{`
        /* ── Desktop layout ─────────────────────────────────────── */
        .resume-layout {
          display: grid;
          grid-template-columns: 290px 1fr;
          min-height: 100vh;
          transition: grid-template-columns 0.3s ease;
        }
        .resume-layout[data-sidebar="closed"] {
          grid-template-columns: 0px 1fr;
        }

        /* ── Tablet / mobile (≤ 860px) ──────────────────────────── */
        @media (max-width: 860px) {
          .resume-layout {
            display: flex !important;
            flex-direction: column;
          }
          .resume-layout[data-sidebar="closed"] > aside {
            height: 0 !important;
            padding: 0 !important;
            border-bottom: none !important;
          }
          /* on mobile, toggle sits top-left always */
          .sidebar-toggle-btn {
            left: 12px !important;
            top: 12px !important;
          }
        }

        /* ── Toggle button ──────────────────────────────────────── */
        .sidebar-toggle-btn {
          position: fixed;
          top: 16px;
          z-index: 100;
          width: 28px;
          height: 28px;
          border-radius: 5px;
          background: var(--bg-card);
          border: 1px solid var(--border-2);
          color: var(--text-2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          transition: left 0.3s ease, background 0.2s, color 0.2s;
        }
        .sidebar-toggle-btn:hover {
          background: var(--bg-hover);
          color: var(--text);
        }
      `}</style>
    </>
  );
}
