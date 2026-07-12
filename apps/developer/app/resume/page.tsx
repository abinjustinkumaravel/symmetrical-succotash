"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";

/* ── colour tokens ─────────────────────────────────────────────── */
const BLUE  = "#1A56A8";
const BLACK = "#111111";
const BODY  = "#333333";
const RULE  = "#CCCCCC";

/* ── types ──────────────────────────────────────────────────────── */
interface ResumeRole {
  id: string;
  label: string;
  title: string;
  summary: string;
  competencies: Array<{ label: string; value: string }>;
}

interface ResumeConfig {
  role: string;
  location: string;
}

/* ── predefined locations ───────────────────────────────────────── */
const LOCATIONS = [
  "Thiruvananthapuram, Kerala",
  "Nagercoil, Tamil Nadu",
  "Bangalore, Karnataka",
  "Chennai, Tamil Nadu",
  "Hyderabad, Telangana",
  "Mumbai, Maharashtra",
  "Pune, Maharashtra",
  "Remote / Open to Relocation",
];

/* ── role variants ──────────────────────────────────────────────── */
const ROLES: ResumeRole[] = [
  {
    id: "ai-engineer",
    label: "AI / ML Engineer",
    title: "AI & ML Engineer | Full-Stack Developer",
    summary:
      "AI/ML and full-stack engineer (MCA, 8.6 CGPA) with hands-on experience building LLM-powered systems, RAG pipelines, and secure backend APIs in production-context enterprise projects. Experienced across the full AI delivery stack - from LLM integration and retrieval pipeline design through to cloud deployment on GCP and containerized production environments. Strong foundation in Python, FastAPI, Node.js, React/Next.js, and ML frameworks (PyTorch, TensorFlow, scikit-learn). Combines technical depth with business understanding gained from direct client-facing experience - building AI solutions that solve real problems, not just proof-of-concept demos.",
    competencies: [
      { label: "AI & GenAI Systems", value: "LLM integration, RAG pipeline design, prompt engineering, hybrid retrieval (BM25 + dense vector), cross-encoder reranking, model quantization (GGUF)" },
      { label: "Backend & API Engineering", value: "FastAPI, Node.js, REST API design, JWT authentication, Redis session management, IP whitelisting, role-based access control" },
      { label: "Frontend", value: "React, Next.js, TypeScript, frontend/backend validation layers" },
      { label: "ML Frameworks", value: "PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, llama-cpp-python, segmentation-models-pytorch, scikit-image, Albumentations" },
      { label: "Cloud & DevOps", value: "Google Cloud Platform (GCP), Docker, Docker Compose, Nginx, Traefik, Linux CLI" },
      { label: "Databases", value: "PostgreSQL, ChromaDB (vector), SQLite, Redis" },
    ],
  },
  {
    id: "tech-support",
    label: "Tech Support Engineer",
    title: "Technical Support Engineer | Infrastructure & Systems",
    summary:
      "Technical support engineer and software developer (MCA, 8.6 CGPA) with production experience managing cloud infrastructure, containerized deployments, and enterprise system troubleshooting. Delivered end-to-end system deployments on GCP with Docker, Nginx, and multi-VM architectures - including zero-cloud on-premises setups. Experienced in session management (Redis, JWT), IP whitelisting, role-based access control, and API integration debugging. Strong communicator with client-facing consulting experience across multiple industries, translating technical issues into actionable resolutions quickly.",
    competencies: [
      { label: "Infrastructure & Systems", value: "GCP, Docker, Docker Compose, Nginx, Traefik, Linux CLI, multi-VM deployment, on-premises systems, VPS administration" },
      { label: "Technical Troubleshooting", value: "API debugging, log analysis, session management (Redis), network configuration, containerized environment issues" },
      { label: "Authentication & Security", value: "JWT auth, HTTP-only cookies, Redis session management, IP whitelisting, role-based access control" },
      { label: "Backend & API", value: "FastAPI, Node.js, Express.js, REST API design, WebSocket (Socket.io), WhatsApp Business API integration, Razorpay API" },
      { label: "Databases & Storage", value: "PostgreSQL, Redis, ChromaDB, SQLite - query optimization, session stores, data migration workflows" },
      { label: "Client Communication", value: "Direct client-facing consulting, requirements gathering, incident handling, project delivery across multiple simultaneous engagements" },
    ],
  },
  {
    id: "fullstack",
    label: "Full Stack Developer",
    title: "Full Stack Developer | Python & JavaScript",
    summary:
      "Full-stack developer (MCA, 8.6 CGPA) specialising in Python backends and modern JavaScript frontends, with production delivery across enterprise and client-facing projects. Built and deployed multi-role platforms with real-time features (Socket.io), payment integrations (Razorpay), and third-party API automation (WhatsApp Business API). Strong backend architecture skills - RESTful API design, session management, authentication pipelines, and database design. Equally comfortable on the frontend with React and Next.js. Deploys to GCP, VPS, and Netlify with Docker-based infrastructure.",
    competencies: [
      { label: "Frontend", value: "React, Next.js, TypeScript, Tailwind CSS, responsive UI design, form validation, real-time UI (Socket.io)" },
      { label: "Backend & API Engineering", value: "FastAPI, Node.js, Express.js, REST API design, WebSocket, JWT auth, HTTP-only cookies, Redis sessions, role-based access control" },
      { label: "Database Design", value: "PostgreSQL (relational schema design, queries), Redis (session store), SQLite, ChromaDB (vector)" },
      { label: "Third-Party Integrations", value: "WhatsApp Business API, Razorpay payment gateway, Fast2SMS (SMS fallback), GPS data ingestion pipelines" },
      { label: "DevOps & Deployment", value: "Docker, Docker Compose, Traefik, Nginx, GCP, VPS, Netlify - full provisioning to production" },
      { label: "Languages", value: "Python, JavaScript, TypeScript, SQL" },
    ],
  },
  {
    id: "software-dev",
    label: "Software Developer",
    title: "Software Developer | Full-Stack & AI Engineer",
    summary:
      "MCA graduate (8.6 CGPA) with hands-on experience designing, building, and deploying full-stack web applications and AI-powered systems in production environments. Comfortable working across the full software development lifecycle - from requirement gathering and architecture through to deployment, testing, and maintenance. Strong foundation in Python, JavaScript/TypeScript, REST API design, and database management. Proven ability to write clean, maintainable code and deliver working software under real project timelines across multiple client engagements.",
    competencies: [
      { label: "Backend Development", value: "FastAPI, Node.js, Express.js, REST API design, JWT authentication, Redis session management, role-based access control" },
      { label: "Frontend Development", value: "React, Next.js, TypeScript, frontend/backend validation layers" },
      { label: "Databases", value: "PostgreSQL, SQLite, Redis, ChromaDB" },
      { label: "DevOps & Deployment", value: "Docker, Docker Compose, Nginx, Traefik, GCP, Linux CLI, VPS administration" },
      { label: "Programming Languages", value: "Python, JavaScript, TypeScript, SQL" },
      { label: "Libraries & Tools", value: "NumPy, Pandas, PyTorch, scikit-learn, Hugging Face Transformers, Git, Jira, ServiceNow" },
      { label: "Real-time & Integrations", value: "Socket.io, WhatsApp Business API, Razorpay payment integration" },
    ],
  },
  {
    id: "linux-admin",
    label: "Linux / Sysadmin",
    title: "Linux Administrator | Infrastructure & DevOps",
    summary:
      "MCA graduate (8.6 CGPA) with hands-on experience managing self-hosted Linux (Ubuntu) servers, configuring reverse proxies, container orchestration, and production infrastructure deployments. Comfortable working directly in the terminal across server setup, service management, network configuration, SSL, and security hardening. Experienced deploying and maintaining multi-service application stacks using Docker Compose, Traefik, and Nginx across VPS and cloud (GCP) environments. Eager to grow into a structured Linux administration role with mentorship and real production exposure.",
    competencies: [
      { label: "Operating Systems", value: "Ubuntu Linux - CLI administration, service management, user/permission management, system monitoring" },
      { label: "Networking", value: "IP addressing, DNS configuration, HTTP/HTTPS, firewall basics, SSL/TLS certificate management, VPN awareness" },
      { label: "Reverse Proxy & Routing", value: "Traefik (self-hosted, automatic SSL), Nginx (reverse proxy, load balancing, static serving) - configured and maintained in production" },
      { label: "Containerisation", value: "Docker, Docker Compose - multi-service stack setup, container networking, volume management, health monitoring" },
      { label: "Security", value: "IP whitelisting, JWT authentication, Redis session management, HTTP-only cookie config, role-based access control, SSL enforcement, basic system hardening" },
      { label: "Cloud & Tools", value: "GCP - VM setup, environment configuration, production deployment, infrastructure monitoring. Git, Bash scripting, Python (automation), Jira, ServiceNow" },
    ],
  },
  {
    id: "devops",
    label: "Jr. DevOps Engineer",
    title: "Jr. DevOps Engineer | Infrastructure & Deployment",
    summary:
      "MCA graduate (8.6 CGPA) with hands-on experience in containerized application deployment, Linux server administration, reverse proxy configuration, and cloud infrastructure management. Deployed and maintained multi-service production stacks across VPS and GCP environments using Docker, Docker Compose, Traefik, and Nginx. Comfortable working in the Linux CLI, managing service health, troubleshooting infrastructure issues, and maintaining deployment documentation. Eager to grow into a full DevOps role with structured mentorship and production exposure.",
    competencies: [
      { label: "Containerisation", value: "Docker, Docker Compose - multi-service stack setup, container networking, volume management, health monitoring, troubleshooting" },
      { label: "Reverse Proxy & Networking", value: "Traefik (automatic SSL, routing), Nginx (reverse proxy, load balancing, static serving)" },
      { label: "Source Control", value: "Git, GitHub - branching, pull requests, version management across multiple projects" },
      { label: "Operating Systems", value: "Ubuntu Linux - CLI administration, service management, user/permission management, SSH configuration, firewall setup" },
      { label: "Cloud", value: "GCP - VM setup, environment configuration, production deployment, uptime monitoring" },
      { label: "Security & Access Control", value: "IP whitelisting, JWT authentication, Redis session management, HTTP-only cookies, role-based access control, SSL enforcement" },
    ],
  },
  {
    id: "cv-engineer",
    label: "Computer Vision Engineer",
    title: "Computer Vision Engineer | ML & Deep Learning",
    summary:
      "Computer vision and ML engineer (MCA, 8.6 CGPA) with hands-on experience building deep learning pipelines for image segmentation, object detection, and bioimage analysis. Designed and trained a U-Net nucleus segmentation pipeline on the 2018 Data Science Bowl dataset achieving Dice 0.87 / IoU 0.79 / 93.5% recall, with a downstream phenotypic profiling module (morphological feature extraction) directly applicable to high-throughput drug discovery screening. Built a YOLOv8 real-time asset tracking system with structured metadata extraction pipelines. Strong foundation in PyTorch, scikit-image, Albumentations, and containerized ML deployment with Docker. Combines deep learning expertise with production engineering skills - models built to run, not just to score.",
    competencies: [
      { label: "Computer Vision & Deep Learning", value: "Image segmentation (U-Net, ResNet34 encoder), object detection (YOLOv8), instance segmentation, watershed post-processing, bounding box metadata extraction" },
      { label: "ML Frameworks & Libraries", value: "PyTorch, segmentation-models-pytorch, scikit-image, Albumentations, NumPy, Pandas, scikit-learn, TensorFlow" },
      { label: "Data Augmentation & Preprocessing", value: "Albumentations (elastic deformation, illumination jitter, flips), domain-specific augmentation pipelines for microscopy and real-world imaging variability" },
      { label: "Bioimage & Scientific Computing", value: "skimage.measure.regionprops for morphological feature extraction (nucleus count, area, eccentricity, solidity, intensity), drug discovery screening workflows" },
      { label: "Retrieval & GenAI", value: "Hybrid BM25 + dense vector retrieval (BAAI/bge-m3), cross-encoder reranking (BGE-Reranker), LLM integration, model quantization (GGUF, Q4_K_M)" },
      { label: "MLOps & Deployment", value: "Docker, Docker Compose, FastAPI (model serving), GCP, Linux CLI, Git" },
    ],
  },
];

/* ── localStorage key ───────────────────────────────────────────── */
const STORAGE_KEY = "dev_resume_config";

/* ── tiny primitives ───────────────────────────────────────────── */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <h2 style={{
        fontFamily: "'Arial', sans-serif",
        fontSize: 11.5, fontWeight: 700,
        color: BLUE, textTransform: "uppercase",
        letterSpacing: "0.04em", margin: "0 0 4px",
      }}>{children}</h2>
      <div style={{ height: 1, background: RULE }} />
    </div>
  );
}

function Bullet({ label, value }: { label?: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
      <span style={{ color: BODY, fontSize: 11, lineHeight: 1.6, flexShrink: 0 }}>•</span>
      <p style={{ margin: 0, fontSize: 11, color: BODY, lineHeight: 1.65 }}>
        {label && <strong style={{ color: BLACK }}>{label}:</strong>} {value}
      </p>
    </div>
  );
}

function Section({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) {
  return <div style={{ marginBottom: gap }}>{children}</div>;
}

/* ── auto-print ─────────────────────────────────────────────────── */
function AutoPrint({ onAdmin }: { onAdmin: () => void }) {
  const params = useSearchParams();
  useEffect(() => {
    if (params.get("print") === "true") setTimeout(() => window.print(), 400);
    if (params.get("admin") === "true") onAdmin();
  }, [params, onAdmin]);
  return null;
}

/* ── admin panel ────────────────────────────────────────────────── */
function AdminPanel({
  config, onChange, onClose,
}: {
  config: ResumeConfig;
  onChange: (c: ResumeConfig) => void;
  onClose: () => void;
}) {
  const selectStyle: React.CSSProperties = {
    width: "100%", padding: "7px 10px", borderRadius: 5,
    border: "1px solid #ccc", fontSize: 12, color: BLACK,
    background: "#fff", cursor: "pointer", outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 10, fontWeight: 700, color: "#555",
    display: "block", marginBottom: 5, letterSpacing: "0.06em",
  };

  return (
    <div className="no-print" style={{
      position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
      zIndex: 999, background: "#fff", border: `2px solid ${BLUE}`,
      borderRadius: 10, padding: "18px 22px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
      minWidth: 360, fontFamily: "'Arial', sans-serif",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, letterSpacing: "0.04em" }}>
          RESUME ADMIN
        </span>
        <button
          onClick={onClose}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#999", lineHeight: 1, padding: 0 }}
        >
          ×
        </button>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={labelStyle}>ROLE VARIANT</label>
        <select
          value={config.role}
          onChange={e => onChange({ ...config, role: e.target.value })}
          style={selectStyle}
        >
          {ROLES.map(r => (
            <option key={r.id} value={r.id}>{r.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>LOCATION</label>
        <select
          value={config.location}
          onChange={e => onChange({ ...config, location: e.target.value })}
          style={selectStyle}
        >
          {LOCATIONS.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <p style={{ marginTop: 12, fontSize: 9, color: "#bbb", letterSpacing: "0.04em" }}>
        Ctrl + Shift + A to toggle · saved to localStorage
      </p>
    </div>
  );
}

/* ── experience bullets per role ────────────────────────────────── */
function AahrbitxBullets({ roleId }: { roleId: string }) {
  if (roleId === "devops") return <>
    <Bullet value={<><a href="https://www.mohancabs.in" style={{ color: BLUE }}>Mohan Cabs Fleet Platform</a> - Deployed a multi-service production stack on a self-hosted VPS using Docker Compose + Traefik with automatic SSL, real-time GPS, WhatsApp Business API integration, and Razorpay payment gateway. Managed ongoing server health, restarts, and configuration updates.</>} />
    <Bullet value={<><a href="https://github.com/abinjustinkumaravel/IRSFQLLMS" style={{ color: BLUE }}>IRSQLLMS (AI Knowledge Engine)</a> - Containerized and deployed a full AI stack (FastAPI backend, Next.js frontend, PostgreSQL, ChromaDB, Nginx) using Docker Compose - managing service orchestration, networking, and production configuration end-to-end.</>} />
    <Bullet value={<><a href="https://www.altraders.in" style={{ color: BLUE }}>AL Traders</a>, <a href="https://www.pommicaters.in" style={{ color: BLUE }}>Pommi Caterers</a>, <a href="https://www.butterbytes.in" style={{ color: BLUE }}>Butterbyte&apos;s</a> - Managed deployment pipelines and hosting configuration for multiple client web applications across VPS and Netlify environments.</>} />
    <Bullet value="Maintained deployment runbooks, system documentation, and incident logs across all client infrastructure." />
    <Bullet value="Sole responsibility for server hardening, SSH configuration, firewall rules, DNS management, and SSL certificate maintenance across all deployments." />
  </>;

  if (roleId === "software-dev") return <>
    <Bullet value={<><a href="https://www.mohancabs.in" style={{ color: BLUE }}>Mohan Cabs</a> - Built a multi-role fleet management platform with real-time GPS tracking, WhatsApp OTP automation via WhatsApp Business API, and Razorpay payment integration. Deployed on VPS using Docker + Traefik with full production configuration.</>} />
    <Bullet value={<><a href="https://www.altraders.in" style={{ color: BLUE }}>AL Traders</a> - Built a full e-commerce catalog platform for a retail client.</>} />
    <Bullet value={<><a href="https://www.pommicaters.in" style={{ color: BLUE }}>Pommi Caterers</a>, <a href="https://www.butterbytes.in" style={{ color: BLUE }}>Butterbyte&apos;s</a>, <a href="https://www.enticeinnovations.com" style={{ color: BLUE }}>Entice Innovations</a> - Delivered static and dynamic business web solutions, deployed on Netlify and custom VPS.</>} />
    <Bullet value="Managed client requirements, timelines, and post-deployment support across all projects - developing strong ownership and delivery habits." />
  </>;

  if (roleId === "linux-admin") return <>
    <Bullet value="Set up and maintained Ubuntu Linux VPS environments for production client applications - server hardening, user management, SSH configuration, and firewall setup." />
    <Bullet value="Configured Traefik as a reverse proxy with automatic SSL certificate provisioning - handling routing, HTTPS enforcement, and domain management for multiple services on the same host." />
    <Bullet value="Deployed and managed multi-service Docker Compose stacks (backend APIs, databases, frontend, proxy) - monitoring container health, managing restarts, and troubleshooting service failures." />
    <Bullet value="Maintained Nginx configurations for reverse proxying, static file serving, and load balancing." />
    <Bullet value="Managed SSL certificates, DNS records, and domain routing for client production environments." />
    <Bullet value="Implemented access control: IP whitelisting, environment variable management, and secrets handling across production servers." />
  </>;

  if (roleId === "cv-engineer") return <>
    <Bullet value={<>ML Research: trained U-Net with ResNet34 encoder (ImageNet-pretrained) on the <a href="https://www.kaggle.com/code/abinj12553/nuclei-segmentation-phenotypic-profiling-for-dru" style={{ color: BLUE }}>2018 Data Science Bowl</a> microscopy dataset - Dice 0.87 / IoU 0.79 / 93.5% recall / 82.4% precision. Combined Dice + BCE loss; watershed post-processing to separate touching nuclei instances.</>} />
    <Bullet value="Downstream phenotypic profiling module using skimage.measure.regionprops: per-image morphological features (nucleus count, area, eccentricity, solidity, intensity) - directly analogous to high-content screening workflows in drug discovery." />
    <Bullet value="Domain-specific augmentation pipeline via Albumentations: elastic deformation, illumination jitter, random flips - handling staining variability and imaging artefacts in microscopy data." />
    <Bullet value="YOLOv8 Asset Tracker: real-time object detection pipeline on live camera feeds with NumPy/Pandas preprocessing of raw detection logs - structured bounding box metadata extraction for downstream analytics. Containerized with Docker." />
    <Bullet value={<><a href="https://www.mohancabs.in" style={{ color: BLUE }}>Mohan Cabs</a>: real-time GPS ingestion pipeline for live fleet visibility - structured telemetry data extraction and processing, integrated into multi-role fleet management platform.</>} />
  </>;

  if (roleId === "tech-support") return <>
    <Bullet value="Deployed and managed full-stack applications on GCP and VPS environments using Docker, Docker Compose, Nginx, and Traefik - handling configuration, containerization, and production troubleshooting end-to-end." />
    <Bullet value="Implemented secure authentication infrastructure: Redis session management, JWT auth, HTTP-only cookies, IP whitelisting, and role-based access control across multiple client projects." />
    <Bullet value="Integrated third-party systems: WhatsApp Business API (OTP auth, confirmations), Razorpay payment gateway, Fast2SMS SMS fallback, real-time GPS ingestion - debugging API contracts and edge-case failures." />
    <Bullet value={<><a href="https://www.mohancabs.in" style={{ color: BLUE }}>Mohan Cabs</a>: multi-role fleet management platform with real-time GPS tracking, driver lifecycle management, and automated communication pipeline.</>} />
    <Bullet value={<>ML Research: trained U-Net nucleus segmentation model (Dice 0.87 / IoU 0.79) on <a href="https://www.kaggle.com/code/abinj12553/nuclei-segmentation-phenotypic-profiling-for-dru" style={{ color: BLUE }}>2018 Data Science Bowl</a> data; downstream morphological feature extraction pipeline for high-throughput screening contexts.</>} />
  </>;

  if (roleId === "fullstack") return <>
    <Bullet value={<><a href="https://www.mohancabs.in" style={{ color: BLUE }}>Mohan Cabs</a>: multi-role fleet management platform (admin / driver / user) - vehicle inventory, dynamic pricing, booking dispatch. Real-time GPS, WhatsApp OTP, Razorpay payment links. VPS deployed with Docker + Traefik.</>} />
    <Bullet value={<><a href="https://github.com/abinjustinkumaravel/IRSFQLLMS" style={{ color: BLUE }}>Intelligent Retrieval System for Quantized LLMs (IRSQLLMS)</a>: enterprise AI knowledge engine with FastAPI backend, hybrid BM25 + vector retrieval, and 3-layer security (license middleware, JWT, ACL filters).</>} />
    <Bullet value="ML Research: trained U-Net nucleus segmentation model (Dice 0.87 / IoU 0.79) on 2018 Data Science Bowl data with downstream morphological feature extraction pipeline." />
    <Bullet value={<>Client sites: <a href="https://www.altraders.in" style={{ color: BLUE }}>AL Traders</a> (e-commerce product catalog), <a href="https://www.pommicaters.in" style={{ color: BLUE }}>Pommi Caterers</a> (Netlify), <a href="https://www.butterbytes.in" style={{ color: BLUE }}>Butterbyte&apos;s</a>, <a href="https://www.enticeinnovations.com" style={{ color: BLUE }}>Entice Innovations</a>.</>} />
  </>;

  // ai-engineer (default)
  return <>
    <Bullet value="Delivering end-to-end AI and software solutions for clients across industries - from LLM-powered tools and RAG pipelines to full-stack fleet management systems and e-commerce platforms." />
    <Bullet value={<><a href="https://www.mohancabs.in" style={{ color: BLUE }}>Mohan Cabs</a>: multi-role fleet management platform with real-time GPS, WhatsApp OTP automation via WhatsApp Business API, and Razorpay payment integration. Deployed on VPS with Docker + Traefik.</>} />
    <Bullet value={<><a href="https://github.com/abinjustinkumaravel/IRSFQLLMS" style={{ color: BLUE }}>Intelligent Retrieval System for Quantized LLMs (IRSQLLMS)</a>: secure single-tenant enterprise AI knowledge engine using Qwen2.5-3B (Q4_K_M GGUF), achieving 10–18 tok/s CPU inference with hybrid BM25 + dense vector retrieval and 3-layer security.</>} />
    <Bullet value={<>ML Research: U-Net nucleus segmentation on <a href="https://www.kaggle.com/code/abinj12553/nuclei-segmentation-phenotypic-profiling-for-dru" style={{ color: BLUE }}>2018 Data Science Bowl dataset</a> - Dice 0.87 / IoU 0.79 / 93.5% recall - with downstream phenotypic profiling module applicable to drug discovery screening.</>} />
    <Bullet value={<>Additional clients: <a href="https://www.altraders.in" style={{ color: BLUE }}>AL Traders</a> (e-commerce catalog), <a href="https://www.pommicaters.in" style={{ color: BLUE }}>Pommi Caterers</a> (Netlify), <a href="https://www.butterbytes.in" style={{ color: BLUE }}>Butterbyte&apos;s</a>, <a href="https://www.enticeinnovations.com" style={{ color: BLUE }}>Entice Innovations</a>.</>} />
  </>;
}

function InfaworxBullets({ roleId }: { roleId: string }) {
  if (roleId === "devops") return <>
    <Bullet value="Deployed and managed application infrastructure on Google Cloud Platform (GCP) - VM configuration, service deployment, environment setup, and production monitoring." />
    <Bullet value="Configured and maintained authentication and session infrastructure: Redis session management, HTTP-only cookies, JWT tokens, and IP whitelisting across live government platforms." />
    <Bullet value="Diagnosed and resolved infrastructure-level issues in production - service failures, configuration errors, and network issues - under real enterprise delivery timelines." />
    <Bullet value="Used Git/GitHub for source code management and version control across all three projects." />
    <Bullet value="Used Jira and ServiceNow for incident tracking, change management, and cross-team coordination." />
    <Bullet value="Maintained deployment documentation and configuration records across all projects." />
  </>;

  if (roleId === "software-dev") return <>
    <Bullet value={<><a href="https://npc-qc-uat-marketplace.npc.qa" style={{ color: BLUE }}>NPC Qatar - Data Marketplace</a>: Built an enterprise data marketplace platform with a RAG-based chatbot for intelligent data product recommendations, real-time team collaboration via Socket.io, and session-based authentication middleware.</>} />
    <Bullet value="PIF - Data Sharing & Quality Platform: Developed a cross-department data sharing and quality management platform (React + Express.js) with automated quality validation workflows." />
    <Bullet value="SDB - LLM Classification Middleware: Built on-premises LLM-based classification middleware for automated confidentiality detection across large-scale data migration datasets - zero cloud dependency." />
    <Bullet value="Designed and implemented authentication pipelines: Redis session management, HTTP-only cookies, JWT auth, role-based access control, and IP whitelisting across all projects." />
    <Bullet value="Deployed and managed application infrastructure on Google Cloud Platform (GCP)." />
    <Bullet value="Collaborated in agile sprints, participated in code reviews, and maintained technical documentation across all three projects." />
  </>;

  if (roleId === "linux-admin") return <>
    <Bullet value="Deployed and managed application infrastructure on GCP - VM configuration, service deployment, environment setup, and uptime monitoring." />
    <Bullet value="Configured and maintained authentication and session management: Redis sessions, HTTP-only cookies, JWT tokens, and IP whitelisting across live government and financial sector platforms." />
    <Bullet value="Diagnosed and resolved infrastructure-level issues in production - service failures, configuration errors, and network issues - under real enterprise delivery timelines." />
    <Bullet value="Used Jira and ServiceNow for incident tracking, change management, and cross-team coordination." />
    <Bullet value="Maintained deployment documentation and configuration records across all projects." />
  </>;

  if (roleId === "cv-engineer") return <>
    <Bullet value={<><a href="https://npc-qc-uat-marketplace.npc.qa" style={{ color: BLUE }}>NPC Qatar</a> - Data Marketplace: integrated RAG-based chatbot using ChromaDB and dense embedding model (BAAI/bge-m3) for intelligent data product recommendations and semantic search.</>} />
    <Bullet value="SDB - LLM Classification Middleware: built on-premises PHI3 LLM pipeline for automated confidentiality classification across large-scale migrating datasets. Multi-level VM infrastructure, zero cloud dependency." />
    <Bullet value="PIF - Data Quality Platform: automated data quality validation workflows with structured schema checks and update pipelines - analogous to structured data validation in ML preprocessing pipelines." />
    <Bullet value="Designed and implemented authentication pipeline: Redis session management, JWT auth, role-based access control - production infrastructure supporting all three enterprise deployments." />
  </>;

  if (roleId === "tech-support") return <>
    <Bullet value="Deployed and managed three enterprise projects on Google Cloud Platform (GCP) - provisioning instances, configuring Nginx reverse proxies, managing secrets, and monitoring uptime." />
    <Bullet value="Designed and implemented authentication and session management pipeline: Redis session store, HTTP-only cookies, JWT auth, role-based access control, and IP whitelisting - reducing manual access-control overhead by ~20–30%." />
    <Bullet value="SDB - deployed on-premises PHI3 LLM middleware across a multi-level VM infrastructure with zero cloud dependency; coordinated cross-system communication between classification service and data migration pipeline." />
    <Bullet value={<><a href="https://npc-qc-uat-marketplace.npc.qa" style={{ color: BLUE }}>NPC Qatar</a> - data marketplace with real-time internal collaboration (Socket.io), automatic session-expiry re-login middleware, and RAG-based chatbot for data product discovery.</>} />
    <Bullet value="PIF - data sharing and data quality management platform (React + Express.js) with automated quality validation workflows." />
  </>;

  return <>
    <Bullet value={<><a href="https://npc-qc-uat-marketplace.npc.qa" style={{ color: BLUE }}>NPC Qatar</a> - Data Marketplace: built enterprise data marketplace with RAG-based chatbot for intelligent data product recommendations, real-time team collaboration via Socket.io, and session-based auth middleware.</>} />
    <Bullet value="PIF - Data Sharing & Quality Platform: developed data sharing and data quality management platform (React + Express.js) enabling cross-department data sharing with automated quality validation workflows." />
    <Bullet value="SDB - LLM Classification Middleware: built on-premises PHI3 LLM classification middleware for automated confidentiality detection across large-scale data migration datasets. Zero cloud dependency." />
    <Bullet value="Integrated LLM-powered query/response systems with prompt design and LLM API integration across projects." />
    <Bullet value="Designed and implemented authentication pipeline: Redis session management, HTTP-only cookies, JWT auth, role-based access control, and IP whitelisting - reducing manual access-control overhead by ~20–30%." />
    <Bullet value="Deployed and managed infrastructure on Google Cloud Platform (GCP)." />
  </>;
}

/* ── main ──────────────────────────────────────────────────────── */
export default function ResumePage() {
  const [config, setConfig] = useState<ResumeConfig>({
    role: "ai-engineer",
    location: LOCATIONS[0],
  });
  const [adminOpen, setAdminOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setConfig(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  // Persist to localStorage on every change
  const updateConfig = useCallback((next: ResumeConfig) => {
    setConfig(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  }, []);

  // Ctrl + Shift + A → toggle admin panel
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === "KeyA") {
        e.preventDefault();
        setAdminOpen(o => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const role = ROLES.find(r => r.id === config.role) ?? ROLES[0];

  // Avoid SSR/hydration mismatch - only render after mount
  if (!mounted) return null;

  return (
    <>
      <Suspense fallback={null}><AutoPrint onAdmin={() => setAdminOpen(true)} /></Suspense>

      {adminOpen && (
        <AdminPanel
          config={config}
          onChange={updateConfig}
          onClose={() => setAdminOpen(false)}
        />
      )}

      {/* Print / Download buttons */}
      <div className="no-print" style={{
        position: "fixed", top: 16, right: 16, zIndex: 50,
        display: "flex", gap: 8,
      }}>
        <button
          onClick={() => window.print()}
          style={{
            padding: "9px 20px", borderRadius: 6,
            background: BLUE, color: "#fff", border: "none",
            fontFamily: "'Arial', sans-serif", fontSize: 12, fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.03em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          }}
        >
          ↓ Download PDF
        </button>
        <button
          onClick={() => window.close()}
          style={{
            padding: "9px 16px", borderRadius: 6,
            background: "#f5f5f5", color: "#555", border: "1px solid #ddd",
            fontFamily: "'Arial', sans-serif", fontSize: 12,
            cursor: "pointer",
          }}
        >
          ✕ Close
        </button>
      </div>

      {/* Resume sheet */}
      <div id="resume" style={{ maxWidth: 800, margin: "0 auto", fontFamily: "'Arial', sans-serif" }}>

        {/* ── Page 1 ── */}
        <div className="resume-page">

          {/* Header */}
          <div style={{ marginBottom: 18 }}>
            <h1 style={{
              fontSize: 26, fontWeight: 700, color: BLUE,
              margin: "0 0 3px", letterSpacing: "-0.01em",
              fontFamily: "'Arial', sans-serif",
            }}>ABIN J</h1>
            <p style={{ fontSize: 10.5, fontWeight: 700, color: "#555", margin: "0 0 6px", letterSpacing: "0.04em" }}>
              {role.title.toUpperCase()}
            </p>
            <p style={{ fontSize: 11, color: BODY, margin: "0 0 2px", lineHeight: 1.7 }}>
              {config.location}&nbsp;|&nbsp;+91 8122354855&nbsp;|&nbsp;
              <a href="mailto:abinjustinkumaravel@gmail.com" style={{ color: BLUE }}>abinjustinkumaravel@gmail.com</a>
            </p>
            <p style={{ fontSize: 11, color: BODY, margin: 0, lineHeight: 1.7 }}>
              <a href="https://www.linkedin.com/in/abin-justin-kumaravel/" style={{ color: BLUE }}>LinkedIn: Abin Justin Kumaravel</a>
              &nbsp;|&nbsp;
              <a href="https://github.com/abinjustinkumaravel" style={{ color: BLUE }}>GitHub: abinjustinkumaravel</a>
              &nbsp;|&nbsp;
              <a href="https://x.com/Abin_JKV" style={{ color: BLUE }}>X: @Abin_JKV</a>
              &nbsp;|&nbsp;
              <a href="https://developer.abinjustinkumaravel.com" style={{ color: BLUE }}>Portfolio: Abin Justinkumaravel</a>
            </p>
          </div>

          {/* Professional Summary */}
          <Section>
            <H2>Professional Summary</H2>
            <p style={{ fontSize: 11, color: BODY, lineHeight: 1.75, margin: "8px 0 0", textAlign: "justify" }}>
              {role.summary}
            </p>
          </Section>

          {/* Core Competencies */}
          <Section>
            <H2>Core Competencies</H2>
            <div style={{ marginTop: 8 }}>
              {role.competencies.map(c => (
                <Bullet key={c.label} label={c.label} value={c.value} />
              ))}
            </div>
          </Section>

          {/* Technical Stack — hidden for software-dev (covered by competencies) */}
          {!["software-dev"].includes(role.id) && (
            <Section>
              <H2>Technical Stack</H2>
              <div style={{ marginTop: 8 }}>
                {role.id === "devops" ? (
                  <>
                    <Bullet label="Languages & Scripting" value="Python, Bash, JavaScript, SQL" />
                    <Bullet label="Databases" value="PostgreSQL, Redis, SQLite - setup, configuration, basic administration" />
                    <Bullet label="Tools" value="Git, Jira, ServiceNow, Linux CLI" />
                    <Bullet label="Learning" value="Jenkins (CI/CD), Ansible (configuration management), Prometheus & Grafana (monitoring)" />
                  </>
                ) : role.id === "linux-admin" ? (
                  <>
                    <Bullet label="Languages & Scripting" value="Bash, Python (automation scripts), SQL" />
                    <Bullet label="Infrastructure & Proxy" value="Traefik (automatic SSL), Nginx (reverse proxy, load balancing), Docker, Docker Compose, systemd, SSH, UFW" />
                    <Bullet label="Cloud & Monitoring" value="GCP - VM provisioning, environment config, uptime monitoring, container health, service logging" />
                    <Bullet label="Security & Auth" value="SSL/TLS, JWT, Redis session management, IP whitelisting, HTTP-only cookies, role-based access control" />
                    <Bullet label="Databases" value="PostgreSQL, Redis, SQLite - installation, configuration, basic administration" />
                    <Bullet label="Tools" value="Git, Jira, ServiceNow" />
                  </>
                ) : (
                  <>
                    <Bullet label="Languages" value="Python, JavaScript, TypeScript, SQL" />
                    <Bullet label="Frameworks & Libraries" value="FastAPI, PyTorch, TensorFlow, Hugging Face Transformers, llama-cpp-python, segmentation-models-pytorch, scikit-image, Albumentations, NumPy, Pandas, scikit-learn, React, Next.js, Node.js, Express.js" />
                    <Bullet label="Models & Embeddings" value="Qwen2.5 (3B-Instruct), BAAI/bge-m3 (1024-dim), BGE-Reranker-Base, YOLOv8, ResNet34 (ImageNet-pretrained U-Net encoder)" />
                    <Bullet label="Databases & Session Stores" value="ChromaDB, PostgreSQL, SQLite, Redis" />
                    <Bullet label="Infrastructure & Tools" value="GCP, Docker, Docker Compose, Nginx, Traefik, Git, Jira, ServiceNow" />
                  </>
                )}
              </div>
            </Section>
          )}

          {/* Professional Experience — Page 1 portion */}
          <Section gap={0}>
            <H2>{role.id === "linux-admin" ? "Infrastructure Experience" : "Professional Experience"}</H2>
            <div style={{ marginTop: 10 }}>
              <div style={{ marginBottom: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                  <strong style={{ fontSize: 11.5, color: BLACK }}>
                    {role.id === "linux-admin"
                      ? "Self-Hosted Linux Infrastructure - Aahrbitx Client Projects"
                      : role.id === "devops"
                      ? "Independent DevOps & Software Consultant - Aahrbitx"
                      : "Independent Consultant - aahrbitx"}
                  </strong>
                  <span style={{ fontSize: 10.5, color: BODY, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>2023 – Present</span>
                </div>
                <AahrbitxBullets roleId={role.id} />
              </div>
            </div>
          </Section>

        </div>

        {/* ── Page 2 ── */}
        <div className="resume-page">

          {/* Professional Experience — Page 2 portion */}
          <Section>
            <H2>Professional Experience (Continued)</H2>
            <div style={{ marginTop: 10 }}>

              {/* Infaworx */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                  <strong style={{ fontSize: 11.5, color: BLACK }}>
                  {["linux-admin", "software-dev", "devops"].includes(role.id)
                    ? "Software Developer Trainee - Infaworx Data Management Pvt Ltd"
                    : "Data Integration Developer Trainee - Infaworx Data Management Pvt Ltd"}
                </strong>
                  <span style={{ fontSize: 10.5, color: BODY, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>Feb 2025 – Oct 2025</span>
                </div>
                <p style={{ fontSize: 11, color: BODY, fontStyle: "italic", margin: "0 0 6px", lineHeight: 1.5 }}>
                  {role.id === "linux-admin"
                    ? "Worked on enterprise application deployment and infrastructure across three government and financial sector projects."
                    : role.id === "software-dev"
                    ? "Delivered three enterprise software projects as a full-stack developer across government and financial sector clients."
                    : role.id === "devops"
                    ? "Worked on infrastructure deployment and application delivery across three enterprise government and financial sector projects."
                    : "Delivered three enterprise data projects across NPC Qatar, PIF, and SDB as a full-stack developer."}
                </p>
                <InfaworxBullets roleId={role.id} />
              </div>

              {/* AccioJob */}
              <div style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 2 }}>
                  <strong style={{ fontSize: 11.5, color: BLACK }}>Business Development Associate - AccioJob</strong>
                  <span style={{ fontSize: 10.5, color: BODY, fontStyle: "italic", whiteSpace: "nowrap", marginLeft: 8 }}>Aug 2024 – Sep 2024</span>
                </div>
                {role.id === "devops" ? (
                  <Bullet value="Developed strong communication, coordination, and systematic follow-up habits in a fast-paced environment - directly applicable to cross-team collaboration in a DevOps role." />
                ) : role.id === "software-dev" ? (<>
                  <Bullet value="Managed a live B2B/B2C sales pipeline using CRM tools - developing strong client communication, follow-up, and coordination skills." />
                  <Bullet value="Gained firsthand exposure to how businesses evaluate and invest in software solutions - directly informs how I scope and prioritise features when building products." />
                </>) : (<>
                  <Bullet value="Managed a live B2B/B2C sales pipeline using CRM tools - understanding how leads move from problem awareness to product adoption." />
                  <Bullet value="Gained firsthand exposure to how businesses evaluate and pay for software solutions - informs how I scope and prioritise features when building products." />
                  {role.id === "tech-support" && (
                    <Bullet value="Developed client communication and issue-escalation skills - translating business problems into actionable technical requirements." />
                  )}
                </>)}
              </div>

            </div>
          </Section>

          {/* Projects table — software-dev and devops */}
          {(role.id === "software-dev" || role.id === "devops") && (() => {
            const rows = role.id === "devops"
              ? [
                  { project: "Mohan Cabs Fleet Platform", url: "https://www.mohancabs.in", stack: "Docker, Traefik, VPS, PostgreSQL", highlights: "Self-hosted Linux VPS, auto SSL, multi-service orchestration" },
                  { project: "IRSQLLMS AI Engine", url: "https://github.com/abinjustinkumaravel/IRSFQLLMS", stack: "Docker Compose, Nginx, FastAPI, ChromaDB", highlights: "Full containerized stack, production deployment" },
                  { project: "NPC Qatar Data Marketplace", url: "https://npc-qc-uat-marketplace.npc.qa", stack: "GCP, Docker, Redis, PostgreSQL", highlights: "Cloud VM deployment, session management, auth pipeline" },
                  { project: "PIF Data Quality Platform", url: undefined, stack: "GCP, Express.js, PostgreSQL", highlights: "GCP infrastructure, environment configuration" },
                ] as { project: string; url?: string; stack: string; highlights: string }[]
              : [
                  { project: "Mohan Cabs Fleet Platform", url: "https://www.mohancabs.in", stack: "Next.js, FastAPI, PostgreSQL, Docker, Traefik", highlights: "Real-time GPS, WhatsApp OTP, Razorpay, VPS deployed" },
                  { project: "NPC Qatar Data Marketplace", url: "https://npc-qc-uat-marketplace.npc.qa", stack: "React, Express.js, Socket.io, Redis, PostgreSQL", highlights: "RAG chatbot, real-time collaboration, enterprise auth" },
                  { project: "PIF Data Quality Platform", url: undefined, stack: "React, Express.js, PostgreSQL", highlights: "Cross-dept data sharing, automated quality validation" },
                  { project: "U-Net Nucleus Segmentation", url: "https://www.kaggle.com/code/abinj12553/nuclei-segmentation-phenotypic-profiling-for-dru", stack: "PyTorch, scikit-image, Albumentations", highlights: "Dice 0.87 / IoU 0.79 / 93.5% recall on DSB 2018" },
                ] as { project: string; url?: string; stack: string; highlights: string }[];
            return (
              <Section>
                <H2>Projects</H2>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5, marginTop: 8 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${RULE}` }}>
                      <th style={{ textAlign: "left", padding: "4px 8px 4px 0", color: BLACK, fontWeight: 700, width: "28%" }}>Project</th>
                      <th style={{ textAlign: "left", padding: "4px 8px", color: BLACK, fontWeight: 700, width: "36%" }}>Stack</th>
                      <th style={{ textAlign: "left", padding: "4px 0 4px 8px", color: BLACK, fontWeight: 700 }}>
                        {role.id === "devops" ? "DevOps Highlights" : "Highlights"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: `1px solid ${RULE}` }}>
                        <td style={{ padding: "5px 8px 5px 0", color: BODY, verticalAlign: "top" }}>
                          {row.url ? <a href={row.url} style={{ color: BLUE }}>{row.project}</a> : row.project}
                        </td>
                        <td style={{ padding: "5px 8px", color: BODY, verticalAlign: "top" }}>{row.stack}</td>
                        <td style={{ padding: "5px 0 5px 8px", color: BODY, verticalAlign: "top" }}>{row.highlights}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Section>
            );
          })()}

          {/* Education */}
          <Section gap={role.id === "linux-admin" ? 16 : 0}>
            <H2>Education</H2>
            <div style={{ marginTop: 8 }}>
              <Bullet value={<>Master of Computer Applications (MCA) - SRM Institute of Science and Technology - <strong>CGPA: 8.6</strong> (2024 – 2026)</>} />
              <Bullet value={<>Bachelor of Computer Applications (BCA), Data Science - SRM Institute of Science and Technology - <strong>CGPA: 8.5</strong> (2021 – 2024)</>} />
            </div>
          </Section>

          {/* Additional — Linux Admin and DevOps */}
          {(role.id === "linux-admin" || role.id === "devops") && (
            <Section gap={0}>
              <H2>Additional</H2>
              <div style={{ marginTop: 8 }}>
                <Bullet value="Comfortable with on-call and after-hours support in production environments." />
                {role.id === "linux-admin" ? (<>
                  <Bullet value="Actively learning cloud fundamentals (GCP hands-on), networking concepts, and security best practices." />
                  <Bullet value="Open to pursuing RHCSA / AWS Fundamentals certification as part of career growth." />
                </>) : (<>
                  <Bullet value="Actively learning Jenkins CI/CD pipelines, Ansible configuration management, and Prometheus/Grafana monitoring." />
                  <Bullet value="Open to RHCSA / AWS / GCP certification as part of career growth." />
                </>)}
              </div>
            </Section>
          )}

        </div>

      </div>

      <style>{`
        @page { size: A4; margin: 0; }

        @media screen {
          body { background: #e8e8e8; }
          #resume {
            padding-top: 56px;
            padding-bottom: 40px;
          }
          .resume-page {
            background: #fff;
            padding: 48px 52px;
            box-shadow: 0 2px 24px rgba(0,0,0,0.12);
            margin-bottom: 32px;
            min-height: 1020px;
          }
        }

        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: #fff; }
          #resume { margin: 0 !important; }
          .resume-page {
            padding: 28px 36px;
            break-after: page;
            box-shadow: none;
          }
          .resume-page:last-child {
            break-after: auto;
          }
        }

        a { text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
