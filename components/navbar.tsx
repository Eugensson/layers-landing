"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 z-50 py-4 lg:py-8 w-full">
        <div className="container max-w-5xl!">
          <div className="p-2 px-4 md:pr-2 grid grid-cols-2 lg:grid-cols-3 items-center border border-white/15 rounded-[27px] md:rounded-full backdrop-blur-2xl">
            <Logo />
            <Nav
              containerStyles="hidden lg:flex items-center justify-center"
              listStyles="flex items-center gap-6 font-medium"
            />
            <div className="flex justify-end gap-4">
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
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
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={cn(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={cn("transition", isOpen && "opacity-0")}
                  />
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={cn(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>
              </button>
              <Button
                size="md"
                type="button"
                variant="secondary"
                className="hidden md:inline-flex items-center"
              >
                Log In
              </Button>
              <Button
                size="md"
                type="button"
                variant="primary"
                className="hidden md:inline-flex items-center"
              >
                Sign Up
              </Button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="w-80 py-10 overflow-hidden"
                >
                  <Nav
                    listStyles="py-4 flex flex-col items-center justify-center gap-6"
                    linkStyles="text-xl font-medium uppercase"
                    setMobileNav={() => setIsOpen(false)}
                  />
                  <div className="mt-4 flex flex-col items-center justify-center gap-6">
                    <Button
                      size="md"
                      type="button"
                      variant="secondary"
                      className="md:hidden inline-flex items-center "
                    >
                      Log In
                    </Button>
                    <Button
                      size="md"
                      type="button"
                      variant="primary"
                      className="md:hidden inline-flex items-center"
                    >
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
      <div className="pb-21 md:pb-24 lg:pb-30" />
    </>
  );
};
