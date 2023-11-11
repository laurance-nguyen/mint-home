"use client";
import { useRouter } from "next/navigation";
import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { PROJECT_ITEMS } from "@/lib/constants";

export default function ProjectPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col">
      <BackdropTitle title="DỰ ÁN" />
      <div>
        {PROJECT_ITEMS.map((item) => (
          <ProjectCard
            key={item.key}
            image={item.images[1]}
            onClick={() => {
              router.push(`/project/${item.key}`);
            }}
          >
            <h1 className="text-4xl font-bold">{item.label}</h1>
            <p className="text-xl">{item.location}</p>
          </ProjectCard>
        ))}
      </div>
      <Contact />
    </main>
  );
}
