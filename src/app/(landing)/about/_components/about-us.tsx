'use client'

import { aboutCardsData } from "@/constants/about-card.data";
import AboutCards from "./about-cards";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-28 2xl:px-52">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full md:w-[45%] h-[35vh] md:h-[40vh] overflow-hidden rounded-lg">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681152783643-ffffe0d9ec95?w=2000&auto=format&fit=crop&q=60"
            alt="about us"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-[50%] flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            About Us
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Lions Clubs International District 418 – Ghana is part of a global
            network of over 1.4 million Lions and Leos, dedicated to
            transforming lives through service. For over 100 years, we've
            uplifted communities across Ghana with initiatives in health,
            education, disaster relief, youth development, and environmental
            sustainability. Supported by the Lions Clubs International
            Foundation (LCIF), we work tirelessly to promote peace and dignity
            for all.
          </p>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutCardsData.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <AboutCards data={card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
