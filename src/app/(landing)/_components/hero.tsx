"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="h-screen max-h-[700px] bg-[url('https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top">
      <div className="h-full w-full bg-blue-900/95">
        <div className="container mx-auto flex h-full w-full lg:max-w-4xl  flex-col items-center justify-center gap-5 p-4 text-center md:p-12 md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-[64px] text-3xl font-bold text-white md:pl-8 lg:text-6xl text-center"
          >
            Welcome to Lions Clubs District 418 – Ghana
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            <p className="mt-3 max-w-lg text-center text-white opacity-85 md:pl-8">
              Serving Ghana with kindness, uplifting communities through health,
              education, and sustainability for over 100 years.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-5"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-white px-10 py-6 w-[15rem] font-semibold tracking-wide text-blue-900 rounded-lg hover:bg-white/90 hover:text-blue-900/90 cursor-pointer"
              onClick={() => router.push("/programs")}
            >
              Our Programs
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
