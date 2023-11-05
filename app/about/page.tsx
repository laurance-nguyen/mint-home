import Image from "next/image";
import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/Contact";
import { SPECIALIZATION_ITEMS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-10">
      <BackdropTitle title="GIỚI THIỆU" />

      <div className="flex flex-col gap-8 px-6">
        <h1 className="text-4xl font-medium">
          we turn ideas into works of art.
        </h1>
        <p>
          For each project we establish relationships with partners who we know
          will help us create added value for your project. As well as bringing
          together the public and private sectors, we make sector-overarching
          links to gather knowledge and to learn from each other. The way we
          undertake projects is based on permanently applying values that
          reinforce each other: socio-cultural value, experiential value,
          building-technical value and economical value. This way of working
          allows us to raise your project to a higher level.
        </p>
      </div>

      <div className="flex flex-col gap-8 px-6">
        <h1 className="py-6 text-center text-2xl">
          <span className="text-primary">DICH VU</span> CUA CHÚNG TÔI
        </h1>
        {SPECIALIZATION_ITEMS.map((item) => (
          <div key={item.key} className="flex flex-col gap-2 text-sm">
            <Image src={item.icon} height={58} width={68} alt={item.key} />
            <p className="font-semibold">{item.label}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <Contact />
    </main>
  );
}
