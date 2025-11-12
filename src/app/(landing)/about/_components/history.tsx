'use client';

import { motion } from "framer-motion";

const timeline = [
  {
    year: "1917",
    title: "Founded",
    description: "Lions Clubs International established to serve communities",
  },
  {
    year: "1980s",
    title: "Ghana Chapter",
    description: "Lions Clubs introduced to Ghana with Accra Host",
  },
  {
    year: "1982",
    title: "Charter Received",
    description: "First official charter certificate on March 18, 1982",
  },
  {
    year: "Today",
    title: "Growing Impact",
    description: "Continuing service across Ghana and beyond with renewed vision",
  },
];

export default function History() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-28 2xl:px-52 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Our Journey
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Decades of service, impact, and commitment to making a difference
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute hidden md:block left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 to-blue-500 md:transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className="flex-1 md:flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl md:text-3xl font-bold text-blue-900">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-center z-50 justify-center flex-1">
                  <div className="w-4 h-4 rounded-full bg-blue-900 border-4 border-yellow-400 shadow-lg"></div>
                </div>

                {/* Spacer for mobile */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
