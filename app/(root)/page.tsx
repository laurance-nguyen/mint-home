import Contact from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { getAdminClient } from "@/lib/utils";

import AboutSection from "./AboutSection";
import CustomerSection from "./CustomerSection";
import ProjectSection from "./ProjectSection";

//* This just a tricky fix to address the Pocketbase issue that with concurrentcy requests, it may cause our admin to lose the credentials
let highlightProjects: ProjectType[] | undefined;

export default async function Home() {
  const pb = await getAdminClient();
  try {
    highlightProjects = await pb
      .collection("projects")
      .getFullList<ProjectType>({
        sort: "created",
        filter: "isHighlight=True",
      });

    highlightProjects?.forEach((project) => {
      project.images = project.images.map(
        (image) =>
          `https://${process.env.POCKETBASE_DOMAIN}/api/files/projects/${project.id}/${image}`,
      );
    });
  } catch (error) {
    console.log({ error });
  }

  return (
    <main>
      <Hero projects={highlightProjects} />
      <AboutSection />
      <ProjectSection />
      <CustomerSection />
      <Contact />
    </main>
  );
}
