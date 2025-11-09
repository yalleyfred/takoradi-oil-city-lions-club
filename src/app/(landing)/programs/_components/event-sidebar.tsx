import { UpcomingEvent } from "@/types/program.interface";
import { handleImageFormat } from "@/utils/format-image";
import { format } from "date-fns";
import { LocationEdit, X } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

interface EventSidebarProps {
  readonly setIsPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  readonly programs: readonly UpcomingEvent[];
  readonly currentIndex: number;
}

export function EventSidebar({
  setIsPopUpOpen,
  programs,
  currentIndex,
}: EventSidebarProps) {
  return (
    <>
      <motion.div
        className="fixed top-0 right-0 h-screen w-screen bg-blue-900/20 z-40 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsPopUpOpen(false)}
      />

      <motion.div
        className="h-full overflow-y-auto md:h-[calc(100vh-1.5rem)] w-full md:w-2/3 lg:w-2/5 2xl:w-1/3 text-white bg-blue-900 shadow-2xl flex flex-col items-center gap-10 fixed top-0 md:top-3 right-0 py-8 md:rounded-l-lg z-50"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <X
          className="w-8 h-8 hover:cursor-pointer absolute top-3 right-4"
          onClick={() => setIsPopUpOpen(false)}
        />
        <img
          src={handleImageFormat(programs[currentIndex].image_url)}
          alt={programs[currentIndex].title}
          className="w-4/5 md:w-3/5 lg:w-7/12 2xl:w-2/4 h-92 md:h-72 lg:h-80 object-cover rounded-md mt-10"
        />

        <div className="mr-auto px-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              {programs[currentIndex].title}
            </h2>
            <p className="text-xs md:text-sm">
              {programs[currentIndex].description}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 bg-white rounded-xl overflow-hidden">
              <div className="w-full h-2/5 bg-gray-700 text-center text-sm m-auto overflow-hidden">
                {format(programs[currentIndex].date, "MMM")}
              </div>
              <div className="text-gray-700 font-bold text-lg text-center">
                {format(programs[currentIndex].date, "dd")}
              </div>
            </span>
            <div>
              <p className="text-lg md:text-xl font-bold">
                {format(programs[currentIndex].date, "EEEE do MMMM")}
              </p>
              <p className="text-sm md:text-base">
                {programs[currentIndex].time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LocationEdit className="w-12 h-12 text-white" />
            <p className="text-lg md:text-xl font-bold">
              {programs[currentIndex].location}
            </p>
          </div>
        </div>

        <div className="mr-auto px-10 flex flex-col gap-2 w-full">
          <h6 className="font-semibold">About Event</h6>
          <hr />
          <p className="text-sm md:text-base">
            {programs[currentIndex].details}
          </p>
        </div>
      </motion.div>
    </>
  );
}
