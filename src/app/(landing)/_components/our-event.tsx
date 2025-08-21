import SectionHeader from "@/components/section-header";
import React from "react";
import EventCard from "./event-card";

export default function OurEvent() {
  return (
    <section className="py-24 lg:px-4 px-2 flex flex-col justify-start gap-4 mb-10  w-full lg:w-7xl mx-auto">
      <SectionHeader title="Our Events" />
      <h1 className="text-2xl lg:text-5xl text-center lg:text-left mt-4 lg:pr-[25rem]">
        Uniting Communities Through Service and Impact
      </h1>

      {/* cards */}
      <section className="grid grid-cols-1 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-3 md:gap-x-3.5 w-full lg:gap-x-5 gap-y-4 mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          .slice(0, 6)
          .sort((a, b) => b - a)
          .map((item, index) => (
            <EventCard key={item} item={index + 1} />
          ))}
      </section>
    </section>
  );
}
