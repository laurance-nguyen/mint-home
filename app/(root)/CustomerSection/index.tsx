import React from "react";

const CustomerSection = () => {
  return (
    <div className="flex flex-col gap-14 px-6">
      <div className="flex items-end gap-4 pt-14">
        <h1 className="text-[120px] font-bold leading-none text-primary">12</h1>
        <div className="flex flex-col">
          <h1 className="pb-3">
            <span className="text-primary">NĂM HOẠT ĐỘNG THÀNH CÔNG</span>&nbsp;
            TRÊN THỊ TRƯỜNG
          </h1>
        </div>
      </div>

      <h1 className="text-center text-2xl">
        <span className="text-primary">KHÁCH HÀNG</span> CỦA CHÚNG TÔI
      </h1>

      <div className="grid grid-cols-[128px_128px] justify-evenly gap-y-8">
        {Array.from(Array(6)).map((_, idx) => (
          <div key={idx} className="h-11 bg-slate-300 " />
        ))}
      </div>
    </div>
  );
};

export default CustomerSection;
