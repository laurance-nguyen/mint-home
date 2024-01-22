import Image from "next/image";
import React from "react";

import Contact from "@/components/ContactForm";
import { getAdminClient } from "@/lib/utils";

interface ProjectDetailProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  let projectInfo: ProjectType | undefined;
  try {
    const pb = await getAdminClient();
    projectInfo = await pb
      .collection("projects")
      .getOne<ProjectType>(params.slug);

    projectInfo.images = projectInfo.images.map(
      (image) =>
        `https://${process.env.POCKETBASE_DOMAIN}/api/files/projects/${params.slug}/${image}`,
    );
  } catch (error) {}

  return (
    <main className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 px-6">
        <div
          id="project-info"
          className="mt-8 flex flex-col gap-6 rounded border p-6"
        >
          <h1 className="text-3xl font-bold">{projectInfo?.label}</h1>
          <p>{projectInfo?.desc}</p>
          <div className="flex gap-4 leading-loose">
            <div id="info-title" className="w-fit font-semibold">
              NGÀY THI CÔNG:
              <br />
              TRẠNG THÁI:
              <br />
              KHÁCH HÀNG:
              <br />
              ĐỊA ĐIỂM:
            </div>
            <div id="info-content">
              {new Date(
                projectInfo?.constructionDate ?? "",
              ).toLocaleDateString()}
              <br />
              {projectInfo?.status}
              <br />
              {projectInfo?.customer}
              <br />
              {projectInfo?.location}
            </div>
          </div>
        </div>

        <div id="project-images" className="flex flex-col gap-2">
          {projectInfo?.images.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              className="rounded"
              alt="project"
              width={1280}
              height={720}
            />
          ))}
        </div>
      </div>
      <Contact />
    </main>
  );
}
