import Image from "next/image";
import React from "react";

interface BackdropTitleProps {
  title: string;
}

const BackdropTitle = ({ title }: BackdropTitleProps) => {
  return (
    <div className="relative w-full">
      <Image
        className="h-full aspect-square object-cover"
        src="/images/pool-1.jpg"
        height={720}
        width={1280}
        alt="img"
      />
      <div className="absolute left-0 top-0 flex h-full w-full justify-center items-center font-medium text-6xl bg-black bg-opacity-50 text-white text-center leading-relaxed">
        {title}
      </div>
    </div>
  );
};

export default BackdropTitle;
