import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_QUESTIONS } from "@/constants/faqs.data";

export default function FrequentlyAskedQuestions() {
  return (
    <section id="faq" className="p-6 md:p-16 lg:p-28 bg-slate-100 ">
      <div className=" text-center py-4 mb-10">
        <h1 className="text-2xl lg:text-5xl capitalize font-semibold">
          Frequently asked questions
        </h1>
      </div>
      <Accordion type="single" collapsible className="lg:w-6xl mx-auto">
        {FAQ_QUESTIONS.map((item) => (
          <AccordionItem value={item.question} key={item.question}>
            <AccordionTrigger className="text-lg lg:text-2xl text-left leading-[1.4] cursor-pointer hover:bg-blue-800/80 hover:text-white transition-all duration-150 ease-in py-6 px-4 rounded-none hover:no-underline data-[state=open]:bg-blue-900 data-[state=open]:text-white [&[data-state=open]>svg]:text-white">
              <h2 className="font-medium text-lg lg:text-2xl">
                {item.question}
              </h2>
            </AccordionTrigger>
            <AccordionContent className=" text-lg px-4 pt-4">
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
