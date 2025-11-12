'use client';

import { whyJoinUsData } from "@/constants/reason.data";
import { motion } from "framer-motion";

export default function WhyJoin() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-28 2xl:px-52 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Join Lions Club
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
          Be part of a global community making real impact in people's lives
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {whyJoinUsData.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 hover:border-white/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-blue-100 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16">
        <p className="text-blue-100 text-lg mb-6">
          Ready to make a difference?
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Get Involved Today
        </button>
      </motion.div>
    </section>
  );
}
