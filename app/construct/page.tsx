import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import NumberIndent from "@/components/NumberIndent";
import ProcessDetail from "@/components/ProcessDetail";
import { CONSTRUCT_PROCESSES } from "@/lib/constants";

const Construct = () => {
  return (
    <main className="flex flex-col gap-10">
      <BackdropTitle title="QUY TRÌNH THI CÔNG" />
      <div className="flex flex-col p-6">
        <div className="flex flex-col gap-8">
          {/* <h1 className="text-3xl font-medium">
            Advice for stirring your online community and fostering engagement
          </h1> */}
          <p>
            Luôn chú trọng đặc biệt vào chất lượng và sự cam kết tuyệt đối với
            khách hàng, quy trình thi công tại Minthome sẽ trải qua 6 bước dưới
            sự thực hiện và kiểm soát hoàn toàn bởi chúng tôi nhằm đảm bảo chi
            phí tối ưu nhất.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {CONSTRUCT_PROCESSES.map((item, idx) => (
              <NumberIndent key={idx} order={idx + 1} content={item.title} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-16">
          <h1 className="py-14 text-center text-2xl">
            <span className="text-primary">CHI TIẾT</span> QUY TRÌNH
          </h1>

          <div className="flex flex-col gap-8">
            {CONSTRUCT_PROCESSES.map((item, idx) => (
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
};

export default Construct;
