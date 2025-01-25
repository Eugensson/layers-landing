"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import logoImage from "@/public/images/logo.svg";

import { navLinks } from "@/constants";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center py-2 px-4 md:pr-2">
              <div>
                <Image
                  src={logoImage}
                  alt="Layers logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>
              <nav className="hidden lg:flex justify-center items-center">
                <ul className="flex items-center gap-6 font-medium">
                  {navLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>
                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col items-center gap-4 py-4 ">
                    {navLinks.map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href}>{label}</Link>
                      </li>
                    ))}
                    <li>
                      <Button variant="secondary" className="px-6">
                        Log In
                      </Button>
                    </li>
                    <li>
                      <Button variant="primary" className="px-6">
                        Sign Up
                      </Button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
};
