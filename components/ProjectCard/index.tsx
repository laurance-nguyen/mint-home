"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type ProjectCardProps = {
  id?: string;
  image: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ProjectCard = ({ id, image, onClick, children }: ProjectCardProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    onClick?.();
    if (id) router.push(`/project/${id}`);
  };
  return (
    <div className="relative h-[746px] w-full" onClick={handleOnClick}>
      <Image
        className="h-full w-full object-cover object-[70%]"
        src={image}
        height={720}
        width={1280}
        alt="img"
      />
      <div
        className={clsx(
          "absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-6 bg-black bg-opacity-50 p-6 text-white",
        )}
      >
        <div className="after:contents-[''] before:contents-[''] relative flex h-full w-full flex-col items-center justify-center before:absolute before:left-0 before:top-0 before:h-1/2 before:w-1/2 before:border-l-2 before:border-t-2 after:absolute after:bottom-0 after:right-0 after:h-1/2 after:w-1/2 after:border-b-2 after:border-r-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
