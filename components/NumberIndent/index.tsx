import React from "react";

const NumberIndent = ({
  order,
  content,
}: {
  order: number;
  content: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="after:contents-[''] before:contents-[''] relative flex h-10 flex-[0_0_40px] items-center justify-center border border-foreground text-xl font-bold before:absolute before:left-1 before:top-1 before:h-1/2 before:w-1/2 before:border-l before:border-t before:border-foreground after:absolute after:bottom-1 after:right-1 after:h-1/2 after:w-1/2 after:border-b after:border-r after:border-foreground">
        {order}
      </div>
      <p className="font-semibold text-sm">{content}</p>
    </div>
  );
};

export default NumberIndent;
