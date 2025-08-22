"use client";

import SectionHeader from "@/components/section-header";
import React from "react";
import EventCard from "./event-card";
import { motion } from "motion/react";

export default function OurEvent() {
  const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .slice(0, 6)
    .sort((a, b) => b - a);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-4 mb-10 w-full lg:w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader title="Our Events" />
        <h1 className="text-2xl lg:text-5xl text-center lg:text-left mt-4 lg:pr-[25rem]">
          Uniting Communities Through Service and Impact
        </h1>
      </motion.div>

      <motion.section className="grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 md:gap-x-3.5 w-full lg:gap-x-5 gap-y-4 mt-4">
        {events.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <EventCard item={index + 1} />
          </motion.div>
        ))}
      </motion.section>
    </motion.section>
  );
}
