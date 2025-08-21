import SectionHeader from "@/components/section-header";
import Image from "next/image";
import React, { Fragment } from "react";
import Services from "./_components/services";
import { projects } from "@/constants/projects.data";
import ProjectCard from "../_components/project-card";
import Support from "../_components/support";
import EventCard from "../_components/event-card";
import Team from "../_components/star";

export default function WhatWeDoPage() {
  return (
    <Fragment>
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 flex flex-col lg:flex-row lg:justify-start justify-center md:gap-[5rem] lg:px-24 px-8 py-24 text-center lg:text-left bg-slate-100">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <SectionHeader title="What We Do" />
            <div className="lg:ml-28 space-y-4 mb-8 md:max-w-2xl">
              <h1 className=" text-2xl md:text-5xl">
                We are working cross country
              </h1>
              <span>
                At Global Ghana Youth Network (GGYN), we are bridging
                communities and transforming lives across borders. Our
                commitment to uplifting underserved populations drives us to
                expand our reach, ensuring that every child, youth, and family
                has access to the resources and opportunities they need to
                thrive.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:gap-y-12">
            <div className="flex items-center w-full lg:w-[35rem] lg:h-[35rem] bg-slate-800/40 rounded-lg">
              <Image
                src={
                  "https://images.unsplash.com/photo-1537134394103-214adc4bd836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="image"
                width={2000}
                height={2000}
                className="h-full w-full rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="py-24 lg:py-32 lg:px-24 px-2 flex flex-col justify-start gap-16 my- w-full lg:w-5/6 mx-auto">
        <Services />
      </div>
      <section className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-16 my-10 w-full lg:w-7xl mx-auto ">
        <div className="space-y-6">
          <SectionHeader title="Projects we have done" />
          <h1 className="text-2xl lg:text-5xl text-center lg:text-left lg:pr-[25rem]">
            We are creating a place where children with special needs can thrive
          </h1>
        </div>
        <section className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-x-3.5 lg:grid-cols-3 w-full lg:gap-x-1.5 gap-y-4">
          {projects
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((project) => {
              return <ProjectCard key={project.id} data={project} />;
            })}
        </section>
      </section>
      <Team />
      <Support />
      <section className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-4 mb-10  w-full lg:w-7xl mx-auto">
        <SectionHeader title="Our Events" />
        <h1 className="text-2xl lg:text-5xl text-center lg:text-left mt-4  lg:pr-[25rem]">
          Building Communities Where Hope Grows and Opportunities Are Created
        </h1>

        {/* cards */}
        <section className="grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 md:gap-x-3.5 w-full lg:gap-x-5 gap-y-4 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            .sort((a, b) => b - a)
            .map((item, index) => (
              <EventCard key={item} item={index + 1} />
            ))}
        </section>
      </section>
    </Fragment>
  );
}
