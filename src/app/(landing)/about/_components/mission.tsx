'use client';

import { motion } from "framer-motion";

const missionItems = [
  {
    title: "Our Mission",
    description:
      "To empower communities, promote peace, and improve lives through dedicated service and impactful initiatives that address both immediate needs and long-term growth.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    description:
      "To create a sustainable future where every individual has access to opportunities, education, and resources for personal and professional growth.",
    icon: "🌟",
  },
  {
    title: "Our Values",
    description:
      "Integrity, compassion, and collaboration guide all our actions, ensuring transparent operations and meaningful community partnerships.",
    icon: "💎",
  },
];

export default function Mission() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-28 2xl:px-52 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
          What We Stand For
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Our foundation is built on three pillars that guide every decision and action we take
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {missionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 h-full hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
