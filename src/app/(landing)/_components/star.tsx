import SectionHeader from "@/components/section-header";
import { team } from "@/constants/teams.data";
import React from "react";
import TeamCard from "../what-we-do/_components/team-card";

type Props = {
  data?: {
    start: number;
    end: number;
  };
};

export default function Star({ data }: Readonly<Props>) {
  return (
    <section className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-4 mb-10  w-full lg:w-7xl mx-auto">
      <SectionHeader title="Our Team" />
      <h1 className="text-2xl lg:text-5xl text-center lg:text-left mt-4 lg:pr-[25rem]">
        Meet the Lions Driving Change in Ghana
      </h1>
      <section className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-x-3.5 lg:grid-cols-3 w-full lg:gap-x-1.5 gap-y-4 mt-6">
        {team.slice(data?.start, data?.end).map((teamMember) => {
          return <TeamCard key={teamMember.id} data={teamMember} />;
        })}
      </section>
    </section>
  );
}
