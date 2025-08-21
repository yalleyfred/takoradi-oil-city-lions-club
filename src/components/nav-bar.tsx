"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/app/assets/Lions_Clubs_International_logo.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLinks } from "@/constants/nav-links";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const path = usePathname();

  const visible = showNav ? "translate-x-0" : "-translate-x-[250%]";

  // Lower scroll threshold for sticky effect (100px vs 1000px for earlier transition)
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        sticky
          ? "bg-white bg-opacity-90 py-2 shadow-md"
          : "bg-white bg-opacity-0 py-3"
      } fixed top-0 z-[9999] w-screen cursor-pointer backdrop-blur-lg transition-all duration-300`}
    >
      <nav className="fixed left-1/2 top-4 w-[94%] translate-x-[-50%] rounded-full border bg-white px-2 md:w-[89%]">
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-x-1"
            onClick={() => setShowNav(false)}
          >
            <Image
              src={Logo}
              alt="Lions Clubs International District 418 – Ghana Logo"
              className="h-14 w-auto"
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden flex-row items-center gap-5 md:flex">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                className="z-50 cursor-pointer text-sm font-medium hover:text-tertiary transition-colors"
                href={link.path}
              >
                <span
                  className={`${
                    path === link.path
                      ? "text-tertiary font-semibold"
                      : "text-primary"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            {/* Prominent Donate Button for Desktop */}
            <Link
              href="/donate"
              className="ml-4 rounded-full bg-tertiary px-4 py-2 text-white hover:bg-tertiary-dark transition-colors"
            >
              Donate Now
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowNav((isShown) => !isShown)}
            className="block md:hidden"
            type="button"
            aria-label={showNav ? "Close menu" : "Open menu"}
          >
            {showNav ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Mobile Menu */}
          <div
            className={`absolute border md:hidden ${visible} left-0 top-[3.6rem] z-50 mt-3 flex w-full flex-col rounded-3xl bg-white pb-3 transition-transform duration-500 ease-in-out md:relative md:top-0 md:w-full md:translate-x-0`}
          >
            <div className="m-4 flex flex-col gap-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.id}
                  className={`rounded-full p-2 text-sm font-medium transition-all duration-100 ease-in hover:bg-accent ${
                    path === link.path ? "text-tertiary" : "text-primary"
                  }`}
                  href={link.path}
                  onClick={() => setShowNav(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Prominent Donate Button for Mobile */}
              <Link
                href="/donate"
                className="mt-2 rounded-full bg-tertiary px-4 py-2 text-center text-sm text-white hover:bg-tertiary-dark transition-colors"
                onClick={() => setShowNav(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
