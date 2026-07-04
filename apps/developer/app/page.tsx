import DevSidebar from "@/components/sections/DevSidebar";
import DevMain from "@/components/sections/DevMain";

export default function Home() {
  return (
    <>
      <div className="resume-layout">
        <DevSidebar />
        <DevMain />
      </div>
      <style>{`
        .resume-layout {
          display: grid;
          grid-template-columns: 290px 1fr;
          min-height: 100vh;
        }
        @media (max-width: 860px) {
          .resume-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
