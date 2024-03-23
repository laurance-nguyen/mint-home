import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

type ProcessDetailProps = {
  title: string;
  desc: string;
  image: string;
  index?: number;
};

const ProcessDetail = ({ title, desc, image, index }: ProcessDetailProps) => {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row">
      <div className="flex min-w-fit flex-col items-center gap-10 text-center">
        <div className="relative transition-all hover:scale-110">
          <Image
            className="h-48 w-48 rounded-full"
            src={image}
            alt="img"
            width={720}
            height={1280}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-opacity-50 p-2">
            <div className="after:contents-[''] before:contents-[''] relative flex h-full w-full flex-col items-center justify-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:border-l-2 before:border-t-2"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            {index !== undefined && (
              <p className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/3 text-5xl text-accent">
                {index.toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </p>
            )}
            <h1 className="text-sm font-semibold max-w-[12rem]">{title}</h1>
          </div>
        </div>
      </div>
      <div className="flex max-w-md flex-col gap-2 sm:-translate-y-8">
        {desc.split("\r\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ProcessDetail;
