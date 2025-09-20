"use client";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

export default function AboutUs() {
  const router = useRouter();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-24 px-4 flex flex-col md:flex-row items-center justify-start gap-16 my-10 w-full lg:w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center md:items-start justify-center gap-4">
        <SectionHeader title="About Us" />
        <h1 className="text-2xl text-center md:text-left md:text-5xl mt-4">
          Serving Ghana with Uncommon Kindness
        </h1>
        <p className="text-lg text-justify">
          Lions Clubs International District 418 – Ghana is part of a global
          network of over 1.4 million Lions and Leos, dedicated to transforming
          lives through service. For over 100 years, we’ve uplifted communities
          across Ghana with initiatives in health, education, disaster relief,
          youth development, and environmental sustainability. Supported by the
          Lions Clubs International Foundation (LCIF), we work tirelessly to
          promote peace and dignity for all. <br /> <br /> Join us in our
          mission to create a better tomorrow — <strong>volunteer</strong>,{" "}
          <strong>donate</strong>, or <strong>partner with us today</strong>.
        </p>

        <Button
          variant="default"
          size="lg"
          className="bg-blue-900 px-10 py-6 font-semibold tracking-wide text-white rounded-lg hover:bg-blue-800 hover:text-white/90 cursor-pointer mt-4"
          onClick={() => router.push("/programs")}>
          Discover Our Impact
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center justify-center gap-4">
        <div className="w-[22rem] lg:w-[30rem] bg-slate-900/40 p-2 flex flex-col items-center justify-center gap-4">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lions Clubs District 418 – Ghana community service"
            className="scale-95 aspect-square hover:scale-100  cursor-pointer transition-all duration-500 ease-in object-cover grayscale hover:grayscale-0"
            width={2000}
            height={2000}
            priority
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
