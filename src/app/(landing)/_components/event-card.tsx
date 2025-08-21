"use client";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function EventCard({ item }: { readonly item: number }) {
  return (
    <article className="bg-slate-100 rounded-lg p-4 flex items-center justify-between lg:w-[25rem] hover:shadow-lg shadow-neutral-100/50 transition-all duration-300 cursor-pointer hover:ring ring-slate-500">
      <div className="flex items-start justify-start gap-5">
        <div>
          <h1>{item.toString().padStart(2, "0")}</h1>
          <p className="text-base text-neutral-700">APR</p>
        </div>
        <div className="flex items-start flex-col justify-center space-y-2">
          <span className="font-bold text-sm underline text-neutral-700">
            Next Event
          </span>
          <h1 className="text-xl">A day with our wonderful community</h1>
        </div>
      </div>
      {/* Circle */}
      <div className="p-3 rounded-full bg-blue-900 flex items-center justify-center">
        <ArrowUpRight size={20} className="text-white" />
      </div>
    </article>
  );
}
