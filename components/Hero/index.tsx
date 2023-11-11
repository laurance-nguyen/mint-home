import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative h-[746px] w-full">
      <Image
        className="h-full object-cover object-[70%]"
        src="/images/minthome-15.jpg"
        height={720}
        width={1280}
        alt="img"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-6 bg-black bg-opacity-50 px-6 text-white">
        <h1 className="text-4xl font-bold">CONCERT HALL IN VIET NAM</h1>
        <p>
          Concert Hall is the architecture of a new generation, a building that
          exists not only in the dimension of space, but also in the dimension
          of time and communication.
        </p>
        <Button className="w-fit">
          Tìm hiểu thêm &nbsp;
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
