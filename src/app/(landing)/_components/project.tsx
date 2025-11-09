"use client";

import SectionHeader from "@/components/section-header";
import React from "react";
import ProjectCard from "./project-card";
import { motion } from "motion/react";
import { ProjectInterface } from "@/types/projects.interface";

interface Props {
  projects: ProjectInterface[];
}

export default function Project({ projects }: Readonly<Props>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-16 my-10 w-full lg:w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <SectionHeader title="Projects we have done" />
        <h1 className="text-2xl lg:text-5xl text-center lg:text-left lg:pr-[25rem]">
          Building a Brighter Future for Ghana’s Communities
        </h1>
      </motion.div>

      <motion.section className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-x-3.5 lg:grid-cols-3 w-full lg:gap-x-1.5 gap-y-4">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <ProjectCard data={project} />
          </motion.div>
        ))}
      </motion.section>
    </motion.section>
  );
}
