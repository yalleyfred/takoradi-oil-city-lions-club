import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/Lions_Clubs_International_logo.png";

export default function Loader() {
  return (
    <div className="grid place-content-center h-40">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg
          className="animate-spin w-20 h-20 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48">
          <circle
            className="opacity-20"
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
          />
          <path
            className="opacity-80"
            fill="currentColor"
            d="M8 24a16 16 0 0132 0h-6a10 10 0 10-20 0h-6z"
          />
        </svg>
        <Image
          src={Logo}
          alt="Lions Club Logo"
          className="absolute left-1/2 top-1/2 w-10 h-10 -translate-x-1/2 p-2 -translate-y-1/2 rounded-full bg-white shadow object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
