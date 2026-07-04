import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Identity from "@/components/sections/Identity";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import BeyondCode from "@/components/sections/BeyondCode";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Identity />
        <Expertise />
        <Projects />
        {/* <Modeling /> */}
        <Experience />
        {/* <Partnerships /> */}
        {/* <ContentCreator /> */}
        <BeyondCode />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
