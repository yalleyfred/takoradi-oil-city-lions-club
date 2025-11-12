"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EventDrawer } from "./event-drawer";
import { EventItem } from "@/types/event.interface";
import { EventCard } from "./event-card";

type Props = {
  data: EventItem[];
};

export default function EventList({ data }: Readonly<Props>) {
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event: EventItem) => {
    setSelected(event);
    setOpen(true);
  };
  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Events</h1>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}>

        <AnimatePresence mode="popLayout">
          {data.map((ev, idx) => (
            <motion.div
              key={ev._id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                type: "keyframes",
                stiffness: 400,
                damping: 30,
                delay: idx * 0.1,
              }}>
              <EventCard event={ev} onClick={handleOpen} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="absolute z-50">
        <EventDrawer open={open} onOpenChange={setOpen} event={selected} />
      </div>
    </div>
  );
}
