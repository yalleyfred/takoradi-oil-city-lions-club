"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Testimonial } from "@/types/testimonial.interface";
import { urlFor } from "@/lib/sanity.image";

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: Readonly<Props>) {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const numberPerGroup = 6;
  const groups = Math.ceil(testimonials.length / 6);
  const [testimonialsData, setTestimonialsData] = useState(
    testimonials.slice(
      numberPerGroup * currentGroupIndex,
      numberPerGroup * currentGroupIndex + numberPerGroup
    )
  );

  useEffect(() => {
    setTestimonialsData(
      testimonials.slice(
        numberPerGroup * currentGroupIndex,
        numberPerGroup * currentGroupIndex + numberPerGroup
      )
    );
  }, [currentGroupIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setCurrentGroupIndex((prev) => (prev + 1) % groups);
      } else if (event.key === "ArrowLeft") {
        setCurrentGroupIndex((prev) => (prev - 1 + groups) % groups);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [groups, setCurrentGroupIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    let interval: NodeJS.Timeout | null = null;

    const updateGroupIndex = () => {
      setCurrentGroupIndex((prev) => (prev + 1) % groups);
    };

    const startAutoSlide = () => {
      interval = setInterval(updateGroupIndex, 10000);
    };

    if (mediaQuery.matches) startAutoSlide();

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        startAutoSlide();
      } else if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      if (interval) clearInterval(interval);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [groups]);

  const handleImageFormat = (image: string): string => {
    return image.startsWith("image") ? urlFor(image).url() : image;
  };

  return (
    <section className="flex flex-col py-10 gap-16 px-6 text-white justify-center items-center bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=1600&auto=format&fit=crop&q=90')] filter grayscale-25">
      <div className="text-center flex flex-col gap-3">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Lives Touched, Futures Changed
        </h2>
        <p className="text-base lg:text-lg">
          Every program plants a seed of hope — here are the stories that grew
          from them
        </p>
      </div>
      <div className="w-full min-h-[50vh] text-center py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="flex flex-col gap-3 py-10 bg-blue-100/60 backdrop-blur-sm rounded-lg items-center justify-center text-blue-900 px-6 shadow-lg h-60 lg:h-76 2xl:h-68"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-6 text-left">
              <img
                src={handleImageFormat(testimonial.image_url)}
                alt={testimonial.name}
                className="w-15 2xl:w-20 h-15 2xl:h-20 object-cover mb-4 mx-auto rounded-full"
              />
              <div>
                <h5 className="text-xl lg:text-2xl font-bold">
                  {testimonial.name}
                </h5>
                <h6>{testimonial.role}</h6>
              </div>
            </div>
            <p className="text-sm lg:text-lg">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>

      <span className="flex gap-4">
        {Array.from({ length: groups }).map((_, index) => (
          <button
            key={index + 1}
            className="relative rounded-full w-4 h-4 cursor-pointer"
            onClick={() => setCurrentGroupIndex(index)}
          >
            <span className="absolute inset-0 rounded-full bg-blue-900 opacity-30"></span>

            {index === currentGroupIndex && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full bg-blue-900"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </span>
    </section>
  );
}
