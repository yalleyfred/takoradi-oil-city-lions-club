'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681152783643-ffffe0d9ec95?w=2000&auto=format&fit=crop&q=60"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-28 2xl:px-52">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About Lions Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Serving communities with integrity, compassion, and purpose since 1917
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 mt-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-white text-sm md:text-base">Global Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-white text-sm md:text-base">Community Focused</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
