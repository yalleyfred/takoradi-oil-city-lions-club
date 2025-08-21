import SectionHeader from "@/components/section-header";
import React from "react";
import ProjectCard from "./project-card";
import { projects } from "@/constants/projects.data";

export default function Project() {
  return (
    <section className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-16 my-10 w-full lg:w-7xl mx-auto ">
      <div className="space-y-6">
        <SectionHeader title="Projects we have done" />
        <h1 className="text-2xl lg:text-5xl text-center lg:text-left lg:pr-[25rem]">
          Building a Brighter Future for Ghana’s Communities
        </h1>
      </div>
      <section className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-x-3.5 lg:grid-cols-3 w-full lg:gap-x-1.5 gap-y-4">
        {projects.slice(0, 3).map((project) => {
          return <ProjectCard key={project.id} data={project} />;
        })}
      </section>
    </section>
  );
}
