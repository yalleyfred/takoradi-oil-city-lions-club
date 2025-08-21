import React from "react";

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Readonly<Props>) {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-6">
      <div className="h-1 w-24 hidden lg:inline-flex bg-primary"></div>
      <h1 className="text-lg font-semibold uppercase text-center lg:text-left">
        {title}
      </h1>
    </div>
  );
}
