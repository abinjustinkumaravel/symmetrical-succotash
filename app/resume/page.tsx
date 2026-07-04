import { readFileSync } from "fs";
import { join } from "path";
import ResumeClient from "./ResumeClient";

export const metadata = {
  title: "Resume — Abin J Kumaravel",
  description:
    "AI Engineer specialising in Multimodal RAG, Agentic Workflows, and Domain-Specific SLM Fine-Tuning.",
};

export default function ResumePage() {
  const filePath = join(process.cwd(), "public", "resume.md");
  const content = readFileSync(filePath, "utf-8");

  return (
    <main
      className="resume-page"
      style={{
        minHeight: "100vh",
        background: "#ffff",
      }}
    >
      <ResumeClient content={content} />
    </main>
  );
}
