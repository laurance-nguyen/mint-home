import React from "react";

import BackdropTitle from "@/components/BackdropTitle";
import Contact from "@/components/Contact";

export default function BlogPage() {
  return (
    <main className="flex flex-col gap-10">
      <BackdropTitle title="BLOG" />
      <div className=""></div>
      <Contact />
    </main>
  );
}
