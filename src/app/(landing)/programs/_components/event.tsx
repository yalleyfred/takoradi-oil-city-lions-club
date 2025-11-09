"use client";

import { format } from "date-fns";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UpcomingEvent } from "@/types/program.interface";
import { EventSidebar } from "./event-sidebar";
import { handleImageFormat } from "@/utils/format-image";

interface EventProps {
  readonly programs: readonly UpcomingEvent[];
  readonly currentIndex: number;
  readonly setCurrentIndex: Dispatch<SetStateAction<number>>;
  readonly handleNext: () => void;
  readonly handlePrev: () => void;
  readonly direction: "next" | "prev";
}

export function Event({
  programs,
  currentIndex,
  setCurrentIndex,
  handleNext,
  handlePrev,
  direction,
}: EventProps) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const variants = {
    enter: (direction: "next" | "prev") => ({
      x: direction === "next" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  useEffect(() => {
    window.document.body.style.overflow = isPopUpOpen ? "hidden" : "auto";
  }, [isPopUpOpen]);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 my-20 px-6">
        <div className="flex flex-col gap-6 w-full lg:w-2/5 2xl:w-1/3 mb-auto">
          <div className="w-full h-[45vh] lg:h-[75vh] 2xl:h-[60vh] relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <button
                  className="w-full h-full hover:cursor-pointer"
                  onClick={() => setIsPopUpOpen(true)}
                >
                  <img
                    src={handleImageFormat(programs[currentIndex].image_url)}
                    alt={programs[currentIndex].title}
                    className="w-full h-full object-cover rounded-md hover:scale-110 transition-all duration-300"
                  />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mx-auto">
            <Button
              variant="outline"
              className="rounded-none hover:cursor-pointer"
              onClick={handlePrev}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              className="rounded-none hover:cursor-pointer"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>

        <div className="mb-auto w-full lg:w-1/3 flex flex-col gap-8">
          <h3 className="text-3xl 2xl:text-4xl font-bold text-gray-800">
            UPCOMING EVENTS
          </h3>
          <div className="flex flex-col gap-6">
            {programs.map((event, index) => (
              <motion.button
                key={event.id}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "text-left flex gap-4 items-center px-5 py-4 rounded-lg hover:bg-blue-50 hover:cursor-pointer",
                  currentIndex === index ? "relative" : ""
                )}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <AnimatePresence>
                  {currentIndex === index && (
                    <motion.span
                      layoutId="activeHighlight"
                      className="absolute inset-0 bg-blue-100 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  )}
                </AnimatePresence>

                <span className="mb-auto">
                  <p className="font-semibold text-gray-500">
                    {format(event.date, "MMM").toUpperCase()}
                  </p>
                  <h4 className="text-2xl font-bold text-gray-800">
                    {format(event.date, "dd")}
                  </h4>
                </span>

                <span>
                  <p className="font-semibold text-gray-500">
                    {format(event.date, "EEEE do MMMM, yyyy")} ({event.time})
                  </p>
                  <h4 className="text-lg 2xl:text-2xl font-bold text-gray-800">
                    {event.title}{" "}
                    <span className="text-base text-gray-500">
                      - {event.location}
                    </span>
                  </h4>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isPopUpOpen && (
          <EventSidebar
            setIsPopUpOpen={setIsPopUpOpen}
            programs={programs}
            currentIndex={currentIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
