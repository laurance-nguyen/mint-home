import Contact from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { getAdminClient } from "@/lib/utils";

import AboutSection from "./AboutSection";
import CustomerSection from "./CustomerSection";
import ProjectSection from "./ProjectSection";

export default async function Home() {
  let highlightProjects: ProjectType[] | undefined;
  try {
    const pb = await getAdminClient();
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
    // console.log({ error });
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
