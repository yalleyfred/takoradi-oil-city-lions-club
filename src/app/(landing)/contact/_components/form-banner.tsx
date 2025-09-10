"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function FormBanner() {
  return (
    <motion.div
      className="hidden lg:inline-flex h-[750px] w-full max-w-lg"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      <Image
        src={
          "https://images.unsplash.com/photo-1744063687726-710a70e984a9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Contact-us-form-image"
        width={600}
        height={400}
        className="w-full h-full object-cover"
        decoding="async"
        loading="lazy"
      />
    </motion.div>
  );
}
