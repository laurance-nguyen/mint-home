import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

import AboutSection from "./AboutSection";
import CustomerSection from "./CustomerSection";
import ProjectSection from "./ProjectSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <CustomerSection />
      <Contact />
    </main>
  );
}
