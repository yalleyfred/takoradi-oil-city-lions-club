"use client";

import SectionHeader from "@/components/section-header";
import { team } from "@/constants/teams.data";
import React from "react";
import TeamCard from "../team/_components/team-card";
import { motion } from "motion/react";

type Props = {
  data?: {
    start: number;
    end: number;
  };
};

export default function Star({ data }: Readonly<Props>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-4 mb-10 w-full lg:w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}>
        <SectionHeader title="Our Team" />
        <h1 className="text-2xl lg:text-5xl text-center lg:text-left mt-4 lg:pr-[25rem]">
          Meet the Lions Driving Change in Ghana
        </h1>
      </motion.div>

      <motion.section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4">
        {team.slice(data?.start, data?.end).map((teamMember, index) => (
          <motion.div
            key={teamMember.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full">
            <TeamCard data={teamMember} />
          </motion.div>
        ))}
      </motion.section>
    </motion.section>
  );
}
