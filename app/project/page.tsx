import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { getAdminClient } from "@/lib/utils";

export default async function ProjectPage() {
  let projects: ProjectType[] = [];
  try {
    const pb = await getAdminClient();
    projects = await pb.collection("projects").getFullList<ProjectType>({
      sort: "created",
    });

    projects.forEach((project) => {
      project.images = project.images.map(
        (image) =>
          `https://${process.env.POCKETBASE_DOMAIN}/api/files/projects/${project.id}/${image}`,
      );
    });
  } catch (error) {
    // console.log({ error });
  }

  return (
    <main className="flex flex-col">
      <BackdropTitle title="DỰ ÁN" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {projects.map((item) => (
          <ProjectCard id={item.id} key={item.id} image={item.images[0]}>
            <h1 className="text-4xl font-bold">{item.label}</h1>
            <p className="text-xl">{item.location}</p>
          </ProjectCard>
        ))}
      </div>
      <Contact />
    </main>
  );
}
