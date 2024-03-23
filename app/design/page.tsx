import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import NumberIndent from "@/components/NumberIndent";
import ProcessDetail from "@/components/ProcessDetail";
import { DESIGN_PROCESSES } from "@/lib/constants";

export default function ProcessPage() {
  return (
    <main className="flex flex-col gap-10">
      <BackdropTitle title="QUY TRÌNH THIẾT KẾ NỘI THẤT" />
      <div className="flex flex-col p-6">
        <div className="flex flex-col gap-8">
          {/* <h1 className="text-3xl font-medium">
            Advice for stirring your online community and fostering engagement
          </h1> */}
          {/* <p>
            When you enter into any new area of science, you almost always find
            yourself with a baffling new language of technical terms to learn
            before you can converse with the experts.
          </p> */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            {DESIGN_PROCESSES.map((item, idx) => (
              <NumberIndent key={idx} order={idx + 1} content={item.title} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          <h1 className="py-14 text-center text-2xl">
            <span className="text-primary">CHI TIẾT</span> QUY TRÌNH
          </h1>

          <div className="flex flex-col gap-8">
            {DESIGN_PROCESSES.map((item, idx) => (
              <ProcessDetail
                key={idx}
                title={item.title}
                desc={item.desc}
                image={item.image}
                index={idx + 1}
              />
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
