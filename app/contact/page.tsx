import { MailIcon, MapPinIcon, PhoneIncomingIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import BackdropTitle from "@/components/BackdropTitle";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <BackdropTitle title="LIÊN HỆ" />

      <div className="relative flex flex-col gap-10 bg-primary py-10 pl-10 pr-16">
        <div className="flex flex-col gap-5 text-white">
          <div className="flex gap-2 text-sm font-semibold ">
            <PhoneIncomingIcon size={18} />
            ĐIỆN THOẠI
          </div>
          <div className="flex flex-col gap-2 pl-6">
            <p>+84 369 369 369</p>
            <p>+84 369 369 369</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="font-semibol flex gap-2 text-sm">
            <MailIcon size={18} />
            EMAIL
          </div>
          <p className="pl-6">info@minthome.com</p>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="flex gap-2 text-sm font-semibold">
            <MapPinIcon size={18} />
            ĐỊA CHỈ
          </div>
          <p className="pl-6">
            Hà Huy Giáp, Thạnh Lộc, Quận 12, Thạnh phố Hồ Chí Minh
          </p>
        </div>

        <p className="absolute -right-20 top-1/2 -translate-y-8 -rotate-90 whitespace-nowrap text-6xl font-bold text-white text-opacity-50">
          LIÊN HỆ
        </p>
      </div>

      <Image
        className="aspect-square w-full object-cover"
        src="/images/pool-4.jpg"
        alt="img"
        width={720}
        height={1280}
      />
    </main>
  );
}
