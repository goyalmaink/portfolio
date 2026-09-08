import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { MarqueeStrip } from "../components/sections/MarqueeStrip";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { MicroserviceUniverse } from "../components/sections/MicroserviceUniverse";
import { Achievements } from "../components/sections/Achievements";
import { Contact } from "../components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <MarqueeStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <MicroserviceUniverse />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
