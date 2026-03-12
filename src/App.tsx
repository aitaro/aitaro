import { ParticleCanvas } from "./components/ParticleCanvas";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Company } from "./components/Company";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <ParticleCanvas />
      <div className="relative z-10 mx-auto max-w-[720px] px-6 pt-15 pb-20">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Company />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
