"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ── Professional color tokens (no gold) ──────────────────────────────────────
const C = {
  navy:    "#0F2240",   // h1, h2 labels
  blue:    "#1D4ED8",   // links, h2 border
  ink:     "#1A1A1A",   // h3 titles
  body:    "#374151",   // paragraph text
  muted:   "#6B7280",   // secondary text, table cells
  rule:    "#D1D5DB",   // hr / table borders
  headerBg:"#EFF6FF",   // table header bg
  quoteBg: "#F8FAFC",   // blockquote bg
  quoteBdr:"#1D4ED8",   // blockquote left border
};

export default function ResumeClient({ content }: { content: string }) {
  return (
    <>
      {/* ── Screen toolbar (hidden on print) ─────────────────────────────── */}
      <div className="no-print" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#C8A96E", borderBottom: "1px solid #BFA16A",
        padding: "10px 28px", display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="/" style={{
          fontFamily: "system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.06em",
          color: "#ffff", textDecoration: "none",
          display: "flex", alignItems: "center", gap: "7px",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Portfolio
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", color: "#ffff", opacity: 0.6 }}>
            Abin J · Resume
          </span>
          <button
            onClick={() => window.print()}
            style={{
              fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.04em",
              padding: "7px 18px", borderRadius: "6px",
              background: "#1D4ED8", color: "#fff", fontWeight: 600,
              display: "inline-flex", alignItems: "center", gap: "6px",
              cursor: "pointer", border: "none", transition: "background 0.2s",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Save as PDF
          </button>
        </div>
      </div>

      {/* ── Resume body ───────────────────────────────────────────────────── */}
      <div id="resume-print" className="resume-body" style={{
        maxWidth: "820px", margin: "0 auto",
        padding: "88px 64px 72px",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#fff", color: C.body,
      }}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{

            // NAME
            h1: ({ children }) => (
              <h1 style={{
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "24px", fontWeight: 700,
                color: C.navy, letterSpacing: "-0.01em",
                lineHeight: 1.2, margin: "0 0 6px",
              }}>
                {children}
              </h1>
            ),

            // SECTION LABELS — push top margin up so sections breathe
            h2: ({ children }) => (
              <h2 style={{
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: C.navy,
                margin: "20px 0 6px",
                paddingBottom: "4px",
                borderBottom: `1.5px solid ${C.navy}`,
              }}>
                {children}
              </h2>
            ),

            // JOB / PROJECT TITLES
            h3: ({ children }) => (
              <h3 style={{
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "12.5px", fontWeight: 700,
                color: C.ink, margin: "12px 0 1px",
                lineHeight: 1.4,
              }}>
                {children}
              </h3>
            ),

            // BODY PARAGRAPHS
            p: ({ children }) => (
              <p style={{
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "11.5px", color: C.body,
                lineHeight: 1.6, margin: "4px 0 4px",
                textAlign: "justify",
                hyphens: "auto",
              }}>
                {children}
              </p>
            ),

            // BOLD
            strong: ({ children }) => (
              <strong style={{ color: C.ink, fontWeight: 700 }}>
                {children}
              </strong>
            ),

            // ITALIC — dates, stack lines
            em: ({ children }) => (
              <em style={{
                fontStyle: "normal",
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "11px", color: C.muted,
              }}>
                {children}
              </em>
            ),

            // BULLET LISTS
            ul: ({ children }) => (
              <ul style={{
                margin: "5px 0 8px", paddingLeft: "18px",
                display: "flex", flexDirection: "column", gap: "3px",
              }}>
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li style={{
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "11.5px", color: C.body,
                lineHeight: 1.6, listStyleType: "disc",
                textAlign: "justify",
              }}>
                {children}
              </li>
            ),

            // BLOCKQUOTE — project key-phrase
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: `3px solid ${C.quoteBdr}`,
                margin: "6px 0 6px", padding: "5px 12px",
                background: C.quoteBg, borderRadius: "0 4px 4px 0",
              }}>
                {children}
              </blockquote>
            ),

            // TABLE (Core Competencies)
            table: ({ children }) => (
              <table style={{
                width: "100%", borderCollapse: "collapse",
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "11.5px", margin: "6px 0 10px",
              }}>
                {children}
              </table>
            ),
            thead: ({ children }) => <thead>{children}</thead>,
            th: ({ children }) => (
              <th style={{
                padding: "6px 10px", textAlign: "left",
                fontFamily: "'Arial', 'Helvetica', sans-serif",
                fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: C.navy, background: C.headerBg,
                borderBottom: `1px solid ${C.rule}`,
              }}>
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td style={{
                padding: "5px 10px", color: C.body,
                borderBottom: `1px solid ${C.rule}`,
                verticalAlign: "top", lineHeight: 1.6,
                fontSize: "11.5px",
              }}>
                {children}
              </td>
            ),

            // HR — invisible, just a small breath between entries
            hr: () => <div style={{ margin: "4px 0" }} />,

            // LINKS
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: C.blue, textDecoration: "none", borderBottom: "none" }}>
                {children}
              </a>
            ),

            // INLINE CODE — stack tags
            code: ({ children }) => (
              <code style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "10px", color: C.navy,
                background: C.headerBg,
                padding: "1px 4px", borderRadius: "3px",
              }}>
                {children}
              </code>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* ── Print & base styles ───────────────────────────────────────────── */}
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          html, body, main, div, section, header, footer {
            background: #fff !important;
            background-color: #fff !important;
            color: #1A1A1A !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Kill the dark theme variables at the root */
          :root, .dark {
            --bg-primary: #fff !important;
            --bg-secondary: #fff !important;
            --bg-card: #fff !important;
            --bg-dark-panel: #fff !important;
          }

          .no-print {
            display: none !important;
          }

          .resume-body {
            max-width: 100% !important;
            /* Margins live here now — @page:0 kills browser header/footer */
            padding: 16mm 20mm !important;
            font-size: 12px !important;
            background: #fff !important;
            background-color: #fff !important;
          }

          /* Prevent orphaned section headings */
          h2, h3 {
            page-break-after: avoid;
            break-after: avoid;
          }

          /* Advanced AI Systems starts on page 2 */
          h2:nth-of-type(4) {
            page-break-before: always;
            break-before: page;
          }

          /* Allow page breaks only between logical blocks */
          li, p, blockquote {
            orphans: 3;
            widows: 3;
          }

          /* Keep each project / experience block together */
          h3 + *, h3 + * + ul {
            page-break-before: avoid;
            break-before: avoid;
          }

          a {
            color: #1D4ED8 !important;
            text-decoration: none !important;
          }

* {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* Screen only: dark background behind the white card */
        @media screen {
          html, body {
            background: #1e293b !important;
          }
          .resume-body {
            box-shadow:
              0 4px 6px -1px rgba(0,0,0,0.3),
              0 2px 4px -2px rgba(0,0,0,0.3);
          }
        }
      `}</style>
    </>
  );
}
