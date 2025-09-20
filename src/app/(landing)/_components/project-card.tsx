import { ProjectInterface } from "@/types/projects.interface";
import Image from "next/image";
import React from "react";

type Props = {
  data: ProjectInterface;
};

export default function ProjectCard({ data }: Readonly<Props>) {
  return (
    <article className="group w-full lg:w-[25rem] p-2 flex items-start flex-col justify-center  duration-200 transition-all hover:bg-slate-900/10">
      <div className="rounded-lg cursor-pointer">
        <Image
          src={data.image_url}
          alt="image"
          className="object-cover w-full h-full aspect-square scale-95 hover:scale-100 duration-500 transition-all delay-150 "
          width={2000}
          height={2000}
          priority
        />
      </div>

      <h2 className="text-left text-xl ml-1.5 font-semibold mt-2.5">
        {data.title}
      </h2>
      <p className="text-left ml-1.5">{data.description}</p>
    </article>
  );
}
