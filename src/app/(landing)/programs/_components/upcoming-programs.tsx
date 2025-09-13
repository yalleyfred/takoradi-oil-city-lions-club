"use client";

import { useEffect, useState } from "react";
import { upcomingEvents } from "@/constants/program.data";
import { UpcomingEvent } from "@/types/program.interface";
import { Event } from "./event";

export function UpcomingPrograms() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const programs: UpcomingEvent[] = upcomingEvents;
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handleNext = () => {
    setDirection("next");
    setCurrentEventIndex((prev) => (prev + 1) % programs.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentEventIndex(
      (prev) => (prev - 1 + programs.length) % programs.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section>
      <div className="w-full text-center px-6 bg-blue-900 text-white py-16 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl lg:text-4xl font-bold">Upcoming Events</h2>
        <p className="text-sm lg:text-base">
          Stay informed about our latest programs, workshops, and community
          initiatives.
        </p>
      </div>
      {upcomingEvents.length === 0 ? (
        <div className="h-[50vh] flex items-center justify-center">
          <p className="text-3xl font-bold">No upcoming programs</p>
        </div>
      ) : (
        <Event
          programs={programs}
          currentIndex={currentEventIndex}
          setCurrentIndex={setCurrentEventIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
          direction={direction}
        />
      )}
    </section>
  );
}
