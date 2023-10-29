import Image from "next/image";
import React from "react";

import ProjectCard from "@/components/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="flex flex-col">
      <h1 className="py-14 text-center text-2xl">
        <span className="text-primary">DỰ ÁN</span> CỦA CHÚNG TÔI
      </h1>

      <ProjectCard image="/images/living-room-1.jpg" title="FROZEN HOUSE" />
      <ProjectCard image="/images/living-room-1.jpg" title="FROZEN HOUSE" />
    </div>
  );
};

export default ProjectSection;
