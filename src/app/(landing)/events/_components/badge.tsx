import { cn } from "@/lib/utils";
import { EventStatus } from "@/types/event.interface";
import React from "react";

type Props = {
  status: EventStatus;
  className?: string;
};

export default function Badge({ status, className }: Props) {
  const innerCondition = status === "ongoing" ? "bg-blue-600" : "bg-gray-600";
  const statusColor = status === "upcoming" ? "bg-emerald-600" : innerCondition;
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium text-white",
        className,
        statusColor
      )}>
      {status.at(0)?.toUpperCase() + status.slice(1)}
    </span>
  );
}
