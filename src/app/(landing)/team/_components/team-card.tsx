import { urlFor } from "@/lib/sanity.image";
import { TeamInterface } from "@/types/team.interface";
import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard({ data }: { readonly data: TeamInterface }) {
  return (
    <div className=" w-full lg:w-64 h-fit flex flex-col items-start gap-4 p-1">
      <div className="w-full fit bg-gray-200">
        <Image
          src={urlFor(data.image_url).width(300).height(300).url()}
          alt={data.name + "s photo"}
          width={300}
          height={300}
          className="w-full object-cover aspect-square object-top  bg-gray-200"
        />
      </div>
      <div className="-2 flex flex-col gap-1">
        <h2 className="text-md font-semibold text-gray-800">{data.name}</h2>
        <p className="text-base text-blue-800">{data.role}</p>
        <p className="text-sm text-gray-600">{data.bio}</p>
      </div>

      <div className="flex items-center gap-3 mt-0.5">
        {data.socials?.map((social) => (
          <Link href={social.url!} key={social.url} target="_blank">
            <Icon
              icon={social.icon_type as IconifyIcon}
              className="text-gray-400 transition-transform hover:-translate-y-1 duration-300 ease-in-out hover:text-blue-700 cursor-pointer"
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
