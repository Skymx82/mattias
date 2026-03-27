import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stages from "@/components/Stages";
import E5 from "@/components/E5";
import Veille from "@/components/Veille";
import Perspectives from "@/components/Perspectives";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Stages />
      <E5 />
      <Veille />
      <Perspectives />
      <Contact />
    </main>
  );
}
