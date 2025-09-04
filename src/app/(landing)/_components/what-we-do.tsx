"use client";

import SectionHeader from "@/components/section-header";
import Service from "@/components/service";
import { services } from "@/constants/services.data";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function WhatWeDo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 px-4 flex items-center bg-slate-100 justify-start gap-16 my-10">
      <div className="w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 justify-start">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-col">
          <SectionHeader title="What We Do" />
          <h1 className="text-2xl lg:text-5xl text-center lg:text-left mt-4 pr-3">
            Transforming Lives Across Ghana
          </h1>
          <p className="mt-3">
            Lions Clubs District 418 – Ghana, part of a global network of over
            1.4 million members, delivers impactful services in health,
            education, and sustainability to uplift communities.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {services.slice(0, 4).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + service.id! * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center gap-1 py-2">
                <Service
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center w-full lg:w-[40rem] lg:h-[35rem] bg-slate-800/40 rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1655720359248-eeace8c709c5?q=80&w=2125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="h-full w-full rounded-lg object-cover"
            width={2000}
            height={2000}
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
