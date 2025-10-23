"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

import { Button } from "@/components/button";
import { Pointer } from "@/components/pointer";

import cursorYouImage from "@/public/images/cursor-you.svg";
import designExample1Image from "@/public/images/design-example-1.png";
import designExample2Image from "@/public/images/design-example-2.png";

export const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, [
    leftDesignAnimate,
    leftDesignScope,
    leftPointerAnimate,
    leftPointerScope,
    rightDesignAnimate,
    rightDesignScope,
    rightPointerAnimate,
    rightPointerScope,
  ]);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="max-w-360 mx-auto relative">
        <motion.div
          drag
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="hidden lg:block absolute top-16 -left-32"
        >
          <Image
            src={designExample1Image}
            draggable={false}
            alt="Menu design example"
          />
        </motion.div>
        <motion.div
          drag
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          className="hidden lg:block absolute -top-16 -right-64"
        >
          <Image
            src={designExample2Image}
            draggable={false}
            alt="Menu design example"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="hidden lg:block absolute top-96 left-56"
        >
          <Pointer name="Alex" />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="hidden lg:block absolute -top-4 right-80"
        >
          <Pointer name="Leandro" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <p className="py-1 px-3 inline-flex gradient rounded-full text-neutral-950 text-center">
            ✨ $7.5M seed round raised
          </p>
        </div>
        <h1 className="mt-6 h1 text-center">
          Create stunning designs effortlessly
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-center text-xl text-white/50">
          Layers is a modern design platform that combines powerful tools with
          an intuitive interface, helping you stay focused and creative.
        </p>
        <form className="p-2 mt-8 max-w-lg mx-auto flex items-center border border-white/15 rounded-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 w-full md:flex-1 outline-none"
          />
          <Button
            type="submit"
            size="sm"
            variant="primary"
            className="whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
