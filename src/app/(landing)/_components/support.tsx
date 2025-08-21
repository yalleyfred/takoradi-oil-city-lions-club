import { Button } from "@/components/ui/button";
import { HandCoins } from "lucide-react";
import React from "react";

export default function Support() {
  return (
    <section className="p-3">
      <div className="relative mx-auto mb-20 flex max-w-screen-xl flex-col items-center justify-center gap-6 rounded-3xl py-10 md:py-20 text-center bg-[url('https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat">
        <h1 className="text-2xl lg:text-5xl text-white px-8 lg:px-32">
          You can contribute to provide a place for children with special needs!
        </h1>

        <div className="flex flex-col md:flex-row item-center justify-center gap-4">
          <Button
            variant={"secondary"}
            className="flex items-center gap-2 rounded-lg px-10 py-6 text-neutral-800 hover:bg-white/80 cursor-pointer"
          >
            <span className="font-semibold tracking-wide">
              Join as a volunteer
            </span>
          </Button>
          <Button className="flex items-center gap-2 rounded-lg px-10 py-6 bg-blue-900 text-white hover:bg-blue-900/80 cursor-pointer">
            <span className="font-semibold tracking-wide">
              Donate to our cause
            </span>
            <HandCoins className="" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
