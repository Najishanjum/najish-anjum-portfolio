import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={`min-h-screen ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
