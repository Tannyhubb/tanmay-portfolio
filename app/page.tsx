import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Chapters from "@/app/components/Chapters";
import LookingAhead from "@/app/components/LookingAhead";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <div className="portfolio-container">
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Chapters />
        <LookingAhead />
        <Contact />
      </main>
    </div>
  );
}
