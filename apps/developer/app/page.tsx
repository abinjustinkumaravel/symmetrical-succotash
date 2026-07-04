import DevSidebar from "@/components/sections/DevSidebar";
import DevSummary from "@/components/sections/DevSummary";
import DevExperience from "@/components/sections/DevExperience";
import DevSkills from "@/components/sections/DevSkills";
import DevProjects from "@/components/sections/DevProjects";
import DevEducation from "@/components/sections/DevEducation";
import DevDSA from "@/components/sections/DevDSA";
import DevContact from "@/components/sections/DevContact";

export default function Home() {
  return (
    <>
      {/* Desktop: sidebar + main grid */}
      <div className="dev-layout">
        <DevSidebar />
        <main style={{ minWidth: 0 }}>
          <DevSummary />
          <DevExperience />
          <DevSkills />
          <DevProjects />
          <DevEducation />
          <DevDSA />
          <DevContact />
        </main>
      </div>

      <style>{`
        .dev-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          min-height: 100vh;
        }
        @media (max-width: 768px) {
          .dev-layout {
            grid-template-columns: 1fr;
          }
          .dev-layout > aside {
            position: static !important;
            height: auto !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </>
  );
}
