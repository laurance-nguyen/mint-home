import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import NumberIndent from "@/components/NumberIndent";
import ProcessDetail from "@/components/ProcessDetail";

const Construct = () => {
  return (
    <main className="flex flex-col gap-10">
      <BackdropTitle title="QUY TRÌNH THI CÔNG" />
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
          <div className="grid grid-cols-2 gap-6">
            <NumberIndent order={1} content="TƯ VẤN VÀ BÁO GIÁ" />
            <NumberIndent order={2} content="KÝ HỢP ĐỒNG THI CÔNG" />
            <NumberIndent
              order={3}
              content="KHẢO SÁT HIỆN TRẠNG & SẢN XUẤT TẠI XƯỞNG"
            />
            <NumberIndent order={4} content="LẮP ĐẶT HOÀN THIỆN NỘI THẤT" />
            <NumberIndent order={5} content="BẢO HÀNH 2 NĂM" />
            <NumberIndent
              order={6}
              content="NGHIỆM THỤ & BÀN GIAO CÔNG TRÌNH"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          <h1 className="py-14 text-center text-2xl">
            <span className="text-primary">CHI TIẾT</span> QUY TRÌNH
          </h1>
          <div className="grid md:grid-cols-2 md:gap-20 lg:grid-cols-3">
            <ProcessDetail
              title="TƯ VẤN VÀ BÁO GIÁ"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={1}
            />
            <ProcessDetail
              title="KÝ HỢP ĐỒNG THI CÔNG"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={2}
            />
            <ProcessDetail
              title="KHẢO SÁT HIỆN TRẠNG & SẢN XUẤT TẠI XƯỞNG"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={3}
            />
            <ProcessDetail
              title="LẮP ĐẶT HOÀN THIỆN NỘI THẤT"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={4}
            />
            <ProcessDetail
              title="BẢO HÀNH 2 NĂM"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={5}
            />
            <ProcessDetail
              title="NGHIỆM THỤ & BÀN GIAO CÔNG TRÌNH"
              desc="Lorem ipsum dolor sit amet, consectetur adipist pricing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image="/images/minthome-1.jpg"
              moreUrl="/"
              index={6}
            />
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default Construct;
