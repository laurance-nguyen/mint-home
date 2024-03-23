import Image from "next/image";
import React from "react";

import { SPECIALIZATION_ITEMS } from "@/lib/constants";

const AboutSection = () => {
  return (
    <div className="relative flex flex-col px-6">
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
              <strong>Minthome</strong> - Không đơn thuần là dịch vụ thiết kế và
              thi công nội thất. Đồng hành cùng gia chủ tạo nên không gian ấm áp
              và gần gũi với thiên nhiên, khơi dậy năng lượng tươi mới mỗi ngày
            </p>
            <p className="text-sm">
              Căn hộ, nhà phố, villa, hotel, resort, hay cửa hàng - Minthome
              không giới hạn.
            </p>

            <p className="text-sm">
              Mỗi không gian được Minthome chạm khắc đều là một tác phẩm nghệ
              thuật sống. Việc tận dụng sự hiểu biết sâu rộng về vật liệu, không
              gian và xu hướng thị trường giúp Minthome tạo ra không gian không
              chỉ đáng sống mà còn đáng đầu tư.
            </p>

            <p className="text-sm">
              Hãy để Minthome biến những ý tưởng thành hiện thực, từ việc thiết
              kế đến triển khai, từ việc không gian sống đến việc tăng giá trị
              tài sản mang đậm chất cá nhân hoá trên từng ngôi nhà
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
          className="aspect-square object-cover sm:aspect-auto sm:w-1/2"
          src="/images/minthome-14.jpg"
          alt="kitchen"
          width={1280}
          height={720}
        />
      </div>

      <p className="absolute top-24 -z-10 text-8xl font-bold text-gray-100 text-opacity-80">
        about
      </p>
    </div>
  );
};

export default AboutSection;
