"use client";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { Button } from "../ui/button";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Hero = () => {
  return (
    <AutoPlaySwipeableViews autoPlay enableMouseEvents>
      {Array.from(Array(3)).map((_, i) => (
        <div key={i} className="relative h-[746px] w-full sm:h-auto">
          <Image
            className="h-full w-full object-cover object-[70%]"
            src={`/images/minthome-1${5 - i}.jpg`}
            height={720}
            width={1280}
            alt="img"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-6 bg-black bg-opacity-50 px-6 text-white">
            <h1 className="text-4xl font-bold">CONCERT HALL IN VIET NAM</h1>
            <p>
              Concert Hall is the architecture of a new generation, a building
              that exists not only in the dimension of space, but also in the
              dimension of time and communication.
            </p>
            <Button className="w-fit">
              Tìm hiểu thêm &nbsp;
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default Hero;
