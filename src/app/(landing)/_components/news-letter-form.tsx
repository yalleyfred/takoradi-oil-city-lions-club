import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";

export default function NewsLetterForm() {
  return (
    <div className="flex flex-col md:items-start lg:pr-20">
      <h1 className="text-xl font-semibold md:text-left">Subscribe</h1>
      <form
        action="#"
        className="flex flex-col gap-2 space-y-2 rounded-lg py-4"
      >
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          className="border border-accent bg-transparent placeholder:text-white/80 text-white focus-visible:border-blue-800 focus-visible:ring-1"
        />
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          className="border border-accent bg-transparent placeholder:text-white/80 text-white focus-visible:border-blue-800 focus-visible:ring-1"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center cursor-pointer gap-x-2 rounded-lg bg-white px-4 py-2 text-primary transition-all duration-300 hover:bg-white/90"
        >
          <span className="font-semibold tracking-wide font-lato ">Submit</span>
          <Send size={16} />
        </button>
        <p className="text-xs font-light text-white opacity-70">
          We&apos;ll never share your details with anyone else.
        </p>
      </form>
    </div>
  );
}
