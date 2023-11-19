import Image from "next/image";
import React from "react";

import { SPECIALIZATION_ITEMS } from "@/lib/constants";

const AboutSection = () => {
  return (
    <div className="flex flex-col px-6">
      <h1 className="py-14 text-center text-2xl">
        GIỚI THIỆU VỀ <span className="text-primary">MINT HOME</span>
      </h1>

      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="w-2/3 text-xl font-semibold">
              we turn ideas into works of art.
            </h2>
            <p className="text-sm">
              For each project we establish relationships with partners who we
              know will help us create added value for your project. As well as
              bringing together the public and private sectors, we make
              sector-overarching links to gather knowledge and to learn from
              each other. The way we undertake projects is based on permanently
              applying values that reinforce each other: socio-cultural value,
              experiential value, building-technical value and economical value.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="w-2/3 text-xl font-semibold">our specialization.</h2>
            <div className="flex justify-between">
              {SPECIALIZATION_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="flex flex-col gap-2 text-sm font-semibold"
                >
                  <Image
                    src={item.icon}
                    height={32}
                    width={38}
                    alt={item.key}
                  />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          className=":w-2/3 aspect-square object-cover sm:aspect-auto sm:w-1/2"
          src="/images/minthome-14.jpg"
          alt="kitchen"
          width={1280}
          height={720}
        />
      </div>
    </div>
  );
};

export default AboutSection;
