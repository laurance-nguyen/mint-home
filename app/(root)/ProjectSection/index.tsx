import React from "react";

import ProjectCard from "@/components/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="relative flex flex-col">
      <h1 className="py-14 text-center text-2xl">
        <span className="text-primary">DỰ ÁN</span> CỦA CHÚNG TÔI
      </h1>

      <div className="flex flex-col sm:flex-row">
        <ProjectCard image="/images/pool-1.jpg">
          <h1 className="text-4xl font-bold">FROZEN HOUSE</h1>
          {/* {desc ? <p className="text-xl">{desc}</p> : null} */}
        </ProjectCard>
        <ProjectCard image="/images/minthome-12.jpg">
          <h1 className="text-4xl font-bold">MINT HOUSE</h1>
        </ProjectCard>
      </div>

      <p className="absolute top-20 -z-10 text-8xl font-bold text-gray-100 text-opacity-80 sm:right-0 sm:-translate-x-1/4">
        projects
      </p>
    </div>
  );
};

export default ProjectSection;
