"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

import { Pointer } from "@/components/pointer";
import { Button } from "@/components/ui/button";
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
      style={{
        cursor: `url(${cursorYouImage.src}), auto`,
      }}
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          ref={leftDesignScope}
          className="hidden lg:block absolute top-16 -left-32"
        >
          <Image
            src={designExample1Image}
            alt="Design example 1 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, x: -200 }}
          ref={leftPointerScope}
          className="hidden lg:block absolute top-96 left-56"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          drag
          ref={rightDesignScope}
          className="hidden lg:block absolute -top-16 -right-64"
        >
          <Image
            src={designExample2Image}
            alt="Design example 2 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 275, y: 100 }}
          ref={rightPointerScope}
          className="hidden lg:block absolute -top-4 right-80"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <p className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 text-center">
            ✨ $7.5M seed round raised
          </p>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-white/50 text-xl mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="mt-8 p-2 flex items-center border border-white/15 rounded-full max-w-lg mx-auto">
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
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};
