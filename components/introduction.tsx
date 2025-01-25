"use client";

import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

import { Tag } from "@/components/ui/tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

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
      setCurrentWordIndex(latest);
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
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word: string, wordIndex: number) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "text-white/15 transition duration-500",
                    wordIndex < currentWordIndex && "text-white"
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
