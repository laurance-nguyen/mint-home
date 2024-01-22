"use client";
import { ArrowRightIcon, DividerHorizontalIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { Button } from "../ui/button";

type Props = {
  projects: ProjectType[];
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Hero = ({ projects }: Props) => {
  console.log({ projects });
  const [index, setIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      className="relative"
    >
      <AutoPlaySwipeableViews
        autoplay={isAutoplay}
        enableMouseEvents
        onChangeIndex={setIndex}
        index={index}
      >
        {projects.map(({ id, label, desc, images }, i) => (
          <div key={id} className="relative h-[746px] w-full sm:h-auto">
            <Image
              className="h-full w-full object-cover object-[70%]"
              src={images[0]}
              height={720}
              width={1280}
              alt="img"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-6 bg-black bg-opacity-50 px-6 text-white">
              <h1 className="text-4xl font-bold">{label}</h1>
              <p>{desc}</p>
              <Button
                className="w-fit"
                onClick={() => {
                  router.push(`/project/${id}`);
                }}
              >
                Tìm hiểu thêm &nbsp;
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 text-white">
        {Array.from(Array(projects.length)).map((_, i) => (
          <Fragment key={i}>
            <Button
              variant="link"
              onClick={() => {
                setIndex(i);
              }}
              className={clsx(
                i === index && "text-2xl",
                "text-white transition-all",
              )}
            >{`0${i + 1}`}</Button>
            {i !== projects.length - 1 && <DividerHorizontalIcon />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Hero;
