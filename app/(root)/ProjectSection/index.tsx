import Image from "next/image";
import React from "react";

import ProjectCard from "@/components/ProjectCard";

const ProjectSection = () => {
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default ProjectSection;
