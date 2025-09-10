"use client";

import { TeamInterface } from "@/types/team.interface";
import React from "react";
import TeamCard from "./team-card";
import { motion } from "motion/react";

type Props = {
  members: TeamInterface[];
};

export default function TeamLists({ members }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4">
      {members.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full">
          <TeamCard key={member.id} data={member} />
        </motion.div>
      ))}
    </div>
  );
}
