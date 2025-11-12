'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  { label: "1.4M+", description: "Members Worldwide" },
  { label: "100+", description: "Years of Service" },
  { label: "200+", description: "Countries Active" },
  { label: "Millions", description: "Lives Impacted" },
];

export default function Values() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-28 2xl:px-52 bg-gradient-to-br from-gray-50 to-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&auto=format&fit=crop&q=60"
              alt="community work"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            By The Numbers
          </h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            Lions Clubs International represents one of the world's largest networks of service organizations, dedicated to making a measurable difference in communities across the globe.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-blue-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                  {value.label}
                </div>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
