"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/assets/Lions_Clubs_International_logo.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLinks } from "@/constants/nav-links";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const path = usePathname();

  const visible = showNav ? "translate-x-0" : "-translate-x-[250%]";

  function handleScroll() {
    if (window.scrollY >= 700) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky bg-white ${
        path !== "/" ? "border-b border-b-neutral-900/20" : ""
      }  top-0 z-[9999] backdrop-blur-lg ${isScrolled ? "border-b" : ""} 
    `}>
      <nav>
        <div className="flex items-center justify-between px-12 lg:px-52 py-3.5">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-x-1"
            onClick={() => setShowNav(false)}>
            <Image
              src={Logo}
              alt="Campus Logo"
              className="h-14 w-auto"
              priority
            />
          </Link>
          <div className="hidden flex-row items-center gap-6 md:flex">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                className="z-50 cursor-pointer"
                href={link.path}>
                <span
                  className={`${
                    path === link.path
                      ? "text-neutral-800 delay-300 font-semibold transition-all duration-700 ease-in"
                      : ""
                  }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <div>
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer font-semibold tracking-widest px-10 py-6 hidden md:inline-flex rounded-lg bg-blue-900 text-white duration-150 ease-in hover:bg-blue-800 hover:text-white">
              Donate
            </Button>
          </div>

          <button
            onClick={() => setShowNav((isShown) => !isShown)}
            className="block md:hidden"
            type="button">
            {showNav ? <X /> : <Menu />}
          </button>
          <div
            className={`absolute border md:hidden ${visible} left-0 top-[4rem] z-50 mt-3 flex h-[calc(100vh-3.6rem)] w-full flex-col justify-between  bg-white pb-3 transition-transform duration-700 ease-in-out lg:relative lg:top-0 lg:w-full lg:translate-x-0`}>
            <div className="m-4 flex flex-col gap-5 pl-6">
              {NavLinks.map((link) => (
                <Link
                  key={link.id}
                  className="rounded-full p-2 text-sm text-primary transition-all duration-100 ease-in hover:bg-accent"
                  href={link.path}
                  onClick={() => setShowNav((isShown) => !isShown)}>
                  <span> {link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
