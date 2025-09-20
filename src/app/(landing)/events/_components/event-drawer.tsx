"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { EventItem, EventStatus } from "@/types/event.interface";
import Image from "next/image";
import { formatDate } from "@/utils/format-date";
import Badge from "./badge";

export function EventDrawer({
  open,
  onOpenChange,
  event,
}: Readonly<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: EventItem | null;
}>) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className=" w-full sm:max-w-sm z-50">
        {event && (
          <div className="flex h-full flex-col overflow-hidden">
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={event.event_img}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 28rem"
                className="object-cover"
              />
            </div>
            <div className="mt-4 space-y-2 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center flex-wrap justify-start gap-3">
                  {event.title}
                  <Badge status={event.status as EventStatus} />
                </SheetTitle>
                <SheetDescription>
                  {event.location} • {formatDate(event.date)}
                </SheetDescription>
              </SheetHeader>
              <p className="text-sm  sm:max-w-sm px-4 leading-relaxed text-muted-foreground whitespace-pre-wrap ">
                {event.description}
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
