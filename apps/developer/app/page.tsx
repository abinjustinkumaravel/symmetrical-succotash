"use client";

import { useState } from "react";
import DevSidebar from "@/components/sections/DevSidebar";
import DevMain from "@/components/sections/DevMain";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div
        className="resume-layout"
        data-sidebar={sidebarOpen ? "open" : "closed"}
      >
        <DevSidebar
          sidebarOpen={sidebarOpen}
          onCollapse={() => setSidebarOpen(false)}
        />
        <DevMain />
      </div>

      {/* Expand button — visible when sidebar is collapsed (desktop + tablet) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Expand sidebar"
          className="sidebar-expand-btn"
        >
          <ChevronRight size={14} />
        </button>
      )}

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

        /* ── Tablet (≤ 860px) ────────────────────────────────────── */
        @media (max-width: 860px) {
          .resume-layout {
            display: flex !important;
            flex-direction: column;
          }
          /* sidebar collapses vertically on mobile/tablet */
          .resume-layout[data-sidebar="closed"] > aside {
            height: 0 !important;
            padding: 0 !important;
            border-bottom: none !important;
          }
        }

        /* ── Expand button ──────────────────────────────────────── */
        .sidebar-expand-btn {
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 50;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border-2);
          color: var(--text-2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
          transition: background 0.2s, color 0.2s;
        }
        .sidebar-expand-btn:hover {
          background: var(--bg-hover);
          color: var(--text);
        }
      `}</style>
    </>
  );
}
