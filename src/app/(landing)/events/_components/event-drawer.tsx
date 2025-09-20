"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { EventItem } from "@/types/event.interface";
import Image from "next/image";
import { formatDate } from "@/utils/format-date";

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
      <SheetContent side="right" className="w-full z-50 sm:w-[28rem]">
        {event && (
          <div className="flex h-full flex-col overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden">
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
                <SheetTitle>{event.title}</SheetTitle>
                <SheetDescription>
                  {event.location} • {formatDate(event.date)}
                </SheetDescription>
              </SheetHeader>

              <p
                className="text-sm p-4 leading-relaxed text-muted-foreground whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
