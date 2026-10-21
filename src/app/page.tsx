import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { TechStack } from "@/components/sections/tech-stack";
import { DevSetup } from "@/components/sections/dev-setup";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Education />
      <TechStack />
      <DevSetup />
      <Contact />
    </>
  );
}
