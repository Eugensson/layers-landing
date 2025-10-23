"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

import { Tag } from "@/components/tag";

import { cn } from "@/lib/utils";

const text = `You strive to produce outstanding work, yet conventional design tools hinder your productivity with needless complexity and steep learning curves.`;

export const Introduction = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  const scrollTarget = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const words = text.split(" ");

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest: number) => {
      setCurrentWordIndex(Math.floor(latest));
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="mt-10 text-4xl md:text-6xl lg:text-7xl text-center font-medium">
            <span>Your creative process deserves better.</span>&nbsp;
            <span>
              {words.map((word: string, wordIndex: number) => (
                <span
                  key={wordIndex}
                  className={cn(
                    "transition duration-500",
                    wordIndex < currentWordIndex
                      ? "text-white opacity-100"
                      : "text-white/15 opacity-50"
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block text-lime-400">
              That&apos;s why we built Layers.
            </span>
          </div>
        </div>
        <div className="pb-[150vh]" ref={scrollTarget} />
      </div>
    </section>
  );
};
