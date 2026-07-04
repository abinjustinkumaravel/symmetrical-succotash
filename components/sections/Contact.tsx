"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import type React from "react";
import { MapPin, Mail, CheckCircle2, Loader2 } from "lucide-react";

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
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FormValues {
  name: string;
  email: string;
  intent: string;
  budget: string;
  message: string;
}

const INTENT_OPTIONS = [
  { value: "llm", label: "LLM Integration Project" },
  { value: "rag", label: "RAG System Build" },
  { value: "agent", label: "AI Agent System" },
  { value: "talk", label: "College Talk / Speaking" },
  { value: "modeling", label: "Modeling Collaboration" },
  { value: "youtube", label: "YouTube Collaboration" },
  { value: "general", label: "General Inquiry" },
];

const BUDGET_OPTIONS = [
  { value: "under20", label: "Under ₹20K" },
  { value: "20to50", label: "₹20K – ₹50K" },
  { value: "50to100", label: "₹50K – ₹1L" },
  { value: "100plus", label: "₹1L+" },
  { value: "tbd", label: "Let's talk" },
];

const MailIcon = () => <Mail size={14} />;

const SOCIALS: Array<{ Icon: () => React.ReactElement; label: string; href: string }> = [
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/abin-justin-kumaravel/" },
  { Icon: YoutubeIcon,  label: "YouTube",  href: "https://www.youtube.com/@abin-justinkumaravel" },
  { Icon: GithubIcon,   label: "GitHub",   href: "https://github.com/abinjustinkumaravel" },
  { Icon: MailIcon,     label: "Email",    href: "mailto:abinjustinkumaravel@gmail.com" },
];

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setFormState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
      reset();
    } catch {
      setFormState("idle");
      alert("Something went wrong. Please email me directly at abinjustinkumaravel@gmail.com");
    }
  };

  function copyEmail() {
    navigator.clipboard.writeText("abinjustinkumaravel@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="contact"
      className="relative"
      style={{ minHeight: "80vh" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: "80vh" }}>

        {/* ── LEFT: Dark dramatic panel ── */}
        <ScrollReveal
          direction="left"
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div
            className="flex flex-col h-full justify-center"
            style={{
              background: "var(--bg-dark-panel)",
              padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)",
            }}
          >
            <p
              className="mb-5 flex items-center gap-2"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "var(--accent-warm)",
              }}
            >
              <span style={{ width: "24px", height: "1px", background: "var(--accent-warm)", display: "inline-block" }} />
              {"// LET'S BUILD"}
            </p>

            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 300,
                color: "#F2EFE8",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Let&apos;s build something extraordinary.
            </h2>

            <p
              className="mb-2"
              style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(242,239,232,0.6)", lineHeight: 1.7 }}
            >
              Whether you need an AI system, a collaborator, or a speaker — let&apos;s talk.
            </p>
            <p
              className="mb-8"
              style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.12em", color: "rgba(242,239,232,0.35)" }}
            >
              I RESPOND WITHIN 24 HOURS.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin size={14} style={{ color: "var(--accent-warm)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(242,239,232,0.65)" }}>
                  Nagercoil, Tamil Nadu 🇮🇳 · Available Globally
                </span>
              </div>

              <button
                onClick={copyEmail}
                className="flex items-center gap-3 text-left group"
                style={{ background: "none", border: "none" }}
              >
                <Mail size={14} style={{ color: "var(--accent-warm)", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: copied ? "var(--success)" : "rgba(242,239,232,0.65)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {copied ? "Copied!" : "abinjustinkumaravel@gmail.com"}
                </span>
              </button>

              <div className="flex items-center gap-2">
                <span className="pulse-dot" />
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: "var(--success)",
                  }}
                  className="p-2"
                >
                  Open to LLM Projects &amp; Collaborations
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(242,239,232,0.45)",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--accent-warm)";
                    el.style.color = "var(--accent-warm)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.color = "rgba(242,239,232,0.45)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── RIGHT: Form panel ── */}
        <ScrollReveal
          direction="right"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div
            style={{
              background: "var(--bg-primary)",
              padding: "clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)",
            }}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center justify-center gap-5 text-center"
                  style={{ minHeight: "400px" }}
                >
                  <CheckCircle2 size={48} style={{ color: "var(--success)" }} />
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(24px, 3vw, 36px)",
                        fontWeight: 300,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Message received.
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)" }}>
                      I&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormState("idle")}
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "9px",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      background: "none",
                      border: "none",
                      marginTop: "8px",
                    }}
                  >
                    SEND ANOTHER →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8"
                  noValidate
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="form-float-label">
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder=" "
                        id="contact-name"
                        className={errors.name ? "error" : ""}
                        style={{ color: "var(--text-primary)" }}
                      />
                      <label htmlFor="contact-name">Name</label>
                      {errors.name && (
                        <span style={{ fontFamily: "var(--font-label)", fontSize: "8px", color: "var(--accent-red)", letterSpacing: "0.1em" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className="form-float-label">
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                        })}
                        type="email"
                        placeholder=" "
                        id="contact-email"
                        className={errors.email ? "error" : ""}
                        style={{ color: "var(--text-primary)" }}
                      />
                      <label htmlFor="contact-email">Email</label>
                      {errors.email && (
                        <span style={{ fontFamily: "var(--font-label)", fontSize: "8px", color: "var(--accent-red)", letterSpacing: "0.1em" }}>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Intent */}
                  <div className="form-float-label">
                    <select
                      {...register("intent", { required: true })}
                      id="contact-intent"
                      defaultValue=""
                      style={{ color: "var(--text-primary)" }}
                    >
                      <option value="" disabled />
                      {INTENT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <label htmlFor="contact-intent">I&apos;m reaching out about</label>
                  </div>

                  {/* Budget */}
                  <div className="form-float-label">
                    <select
                      {...register("budget")}
                      id="contact-budget"
                      defaultValue=""
                      style={{ color: "var(--text-primary)" }}
                    >
                      <option value="" disabled />
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <label htmlFor="contact-budget">Budget range</label>
                  </div>

                  {/* Message */}
                  <div className="form-float-label">
                    <textarea
                      {...register("message", { required: "Tell me more" })}
                      placeholder=" "
                      id="contact-message"
                      rows={5}
                      className={errors.message ? "error" : ""}
                      style={{ color: "var(--text-primary)", minHeight: "120px" }}
                    />
                    <label htmlFor="contact-message">Message</label>
                    {errors.message && (
                      <span style={{ fontFamily: "var(--font-label)", fontSize: "8px", color: "var(--accent-red)", letterSpacing: "0.1em" }}>
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      data-cursor="cta"
                      className="w-full flex items-center justify-center gap-3"
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "16px 32px",
                        borderRadius: "9999px",
                        background: formState === "sending" ? "var(--text-muted)" : "var(--accent)",
                        color: "var(--bg-primary)",
                        border: "none",
                        width: "100%",
                        fontWeight: 700,
                        transition: "background 0.2s ease",
                      }}
                    >
                      {formState === "sending" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send It →"
                      )}
                    </button>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
