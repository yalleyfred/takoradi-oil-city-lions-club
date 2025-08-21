import { TeamInterface } from "@/types/team.interface";
import Image from "next/image";
import React from "react";

export default function TeamCard({ data }: { readonly data: TeamInterface }) {
  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <div className="rounded-lg bg-slate-100 p-2 flex items-center justify-center">
        <Image
          src={data.image_url}
          alt="image"
          className="object-cover object-top w-full h-full aspect-square rounded-lg
          "
          width={2000}
          height={2000}
          priority
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-neutral-800">{data.name}</h1>
        <p className="text-sm text-slate-500">{data.role}</p>
      </div>
    </article>
  );
}
