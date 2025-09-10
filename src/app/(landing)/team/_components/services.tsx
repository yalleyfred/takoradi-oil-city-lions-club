import React from "react";
import Service from "@/components/service";
import { services } from "@/constants/services.data";

export default function Services() {
  return (
    <section className="py-10 px-8 space-y-6 my-10 ">
      <h1 className="text-center lg:text-left text-2xl lg:text-5xl">
        What we do for people with special needs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
        {services.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
