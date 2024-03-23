import Image from "next/image";
import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/ContactForm";
import { SPECIALIZATION_ITEMS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-10">
      <BackdropTitle title="GIỚI THIỆU" />

      <div className="flex max-w-2xl flex-col gap-8 px-6">
        {/* <h1 className="text-4xl font-medium">
          we turn ideas into works of art.
        </h1> */}
        <p>
          <b>Minthome</b> ra đời với sứ mệnh tạo không gian sống phù hợp nhất
          cho cộng đồng người Việt. Tận dụng những giải pháp sáng tạo, chúng tôi
          không chỉ kiến tạo nên các công trình có giá trị thẩm mỹ cao mà còn
          đáp ứng đầy đủ mọi nhu cầu sử dụng của khách hàng.
        </p>
        <p>
          Tôn chỉ: <strong>{'"Sự hài lòng của khách hàng là trên hết"'}</strong>{" "}
          luôn là tiêu chí ưu tiên hàng đầu trong tất cả hoạt động của chúng
          tôi, đóng góp vào sự thay đổi và nâng cao chất lượng kiến trúc người
          Việt. Khách hàng luôn là trung tâm của mọi quyết định, chúng tôi luôn
          cam kết lắng nghe và đáp ứng mọi mong muốn cũng như nguyện vọng đem
          đến dịch vụ hơn mong đợi cho khách hàng.
        </p>
      </div>

      <div className="flex max-w-2xl flex-col gap-8 px-6">
        <h1 className="py-6 text-center text-2xl">
          <span className="text-primary">DỊCH VỤ</span> CỦA CHÚNG TÔI
        </h1>
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          {SPECIALIZATION_ITEMS.map((item) => (
            <div key={item.key} className="flex flex-col gap-2 text-sm">
              <Image src={item.icon} height={58} width={68} alt={item.key} />
              <p className="font-semibold">{item.label}</p>
              {/* <p>{item.content}</p> */}
            </div>
          ))}
        </div>
        <p>
          Đối với mỗi dự án, chúng tôi luôn tạo sự hài lòng và tin tưởng nhất
          cho đối tác.
        </p>
        <p>
          Bên cạnh đó, việc kết hợp cả các nguồn lực từ các tổ chức khác giá rẻ,
          chất lượng, chúng tôi xây dựng mạng lưới liên kết rộng khắp ngành để
          chia sẻ kiến thức và học hỏi từ nhau.
        </p>
        <p>
          Trong mỗi dự án Minthome luôn ưu tiên việc thúc đẩy củng cố các giá
          trị như văn hóa xã hội, trải nghiệm, kỹ thuật xây dựng và kinh tế, cá
          nhân hoá nhằm tạo giá trị và hiệu quả lâu dài cho khách hàng.
        </p>
      </div>

      <Contact />
    </main>
  );
}
