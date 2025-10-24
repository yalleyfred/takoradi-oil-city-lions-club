"use client";

import { motion } from "motion/react";
export default function Hero() {
  return (
    <section
      className="h-screen max-h-[900px] 
      bg-[url('https://images.unsplash.com/photo-1710093072228-8c3129f27357?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0')] 
             bg-cover bg-top bg-no-repeat"
    >
      <div className="h-full w-full bg-blue-900/65">
        <div className="container mx-auto flex h-full w-full lg:max-w-4xl  flex-col items-center justify-center gap-5 p-4 text-center md:p-12 md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-[64px] text-3xl font-bold text-white md:pl-8 lg:text-6xl text-center"
          >
            Building Brighter Futures
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            <p className="mt-3 max-w-lg text-center text-white opacity-85 md:pl-8">
              From classrooms to clinics, our programs touch lives in meaningful
              ways every day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
