import Contact from "@/components/ContactForm";
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
