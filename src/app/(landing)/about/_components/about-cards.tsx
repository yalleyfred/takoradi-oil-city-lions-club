import { AboutCard } from "@/types/card.interface";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCards({ data }: { readonly data: AboutCard }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`${data.color} rounded-xl p-7 text-white flex flex-col gap-4 h-full justify-between shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="flex justify-between items-start gap-3">
        <h3 className="text-lg font-bold flex-1">{data.title}</h3>
        <Link
          href="/"
          className="px-3 py-1 text-sm border border-white rounded-full hover:bg-white hover:text-blue-900 transition-all whitespace-nowrap">
          {data.buttonText}
        </Link>
      </div>

      <p className="leading-relaxed text-sm">{data.description}</p>
    </motion.div>
  );
}
