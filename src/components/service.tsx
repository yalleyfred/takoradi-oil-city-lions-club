import { ServiceInterface } from "@/types/services.interface";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function Service({
  description,
  title,
}: Readonly<ServiceInterface>) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
        <CheckCheck size={20} className="text-white" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
}
