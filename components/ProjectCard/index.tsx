import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  image: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ProjectCard = ({ image, onClick, children }: ProjectCardProps) => {
  return (
    <div className="relative h-[746px] w-full" onClick={onClick}>
      <Image
        className="h-full object-cover object-[70%]"
        src={image}
        height={720}
        width={1280}
        alt="img"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-6 bg-black bg-opacity-50 p-6 text-white">
        <div className="after:contents-[''] before:contents-[''] relative flex h-full w-full flex-col items-center justify-center before:absolute before:left-0 before:top-0 before:h-1/2 before:w-1/2 before:border-l-2 before:border-t-2 after:absolute after:bottom-0 after:right-0 after:h-1/2 after:w-1/2 after:border-b-2 after:border-r-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
