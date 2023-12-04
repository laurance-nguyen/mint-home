import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import NumberIndent from "@/components/NumberIndent";
import ProcessDetail from "@/components/ProcessDetail";

export default function ProcessPage() {
  return (
    <main className="flex flex-col gap-10">
      <BackdropTitle title="QUY TRÌNH THIẾT KẾ NỘI THẤT" />
      <div className="flex flex-col p-6">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-medium">
            Advice for stirring your online community and fostering engagement
          </h1>
          <p>
            When you enter into any new area of science, you almost always find
            yourself with a baffling new language of technical terms to learn
            before you can converse with the experts.
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-6">
            <NumberIndent order={1} content="GẶP GỠ VÀ TƯ VẤN" />
            <NumberIndent order={2} content="KÝ HỢP ĐỒNG THIẾT KẾ" />
            <NumberIndent order={3} content="LÊN Ý TƯỞNG THIẾT KẾ" />
            <NumberIndent order={4} content="TRÌNH BÀY PHỐI CẢNH 3D" />
            <NumberIndent order={5} content="BÀN GIAO HỒ SƠ THIẾT KẾ" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          <h1 className="py-14 text-center text-2xl">
            <span className="text-primary">CHI TIẾT</span> QUY TRÌNH
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-20">
            <ProcessDetail
              title="GẶP GỠ VÀ TƯ VẤN"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={1}
            />
            <ProcessDetail
              title="KÝ HỢP ĐỒNG THIẾT KẾ"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={2}
            />
            <ProcessDetail
              title="LÊN Ý TƯỞNG THIẾT KẾ"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={3}
            />
            <ProcessDetail
              title="TRÌNH BÀY PHỐI CẢNH 3D"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={4}
            />
            <ProcessDetail
              title="BÀN GIAO HỒ SƠ THIẾT KẾ"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={5}
            />
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
