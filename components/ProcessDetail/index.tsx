import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

type ProcessDetailProps = {
  title: string;
  desc: string;
  image: string;
  moreUrl?: string;
  index?: number;
};

const ProcessDetail = ({
  title,
  desc,
  image,
  moreUrl,
  index,
}: ProcessDetailProps) => {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <div className="relative">
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

      <div className="flex flex-col gap-6">
        <div className="relative">
          {index !== undefined && (
            <p className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/3 text-5xl text-accent">
              {index.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </p>
          )}
          <h1 className="text-sm font-semibold">{title}</h1>
        </div>
        <p className="w-60 text-sm">{desc}</p>
        {moreUrl && (
          <Button variant="link" asChild>
            <Link href={moreUrl}>
              ĐỌC THÊM &nbsp; <ArrowRightIcon />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProcessDetail;
