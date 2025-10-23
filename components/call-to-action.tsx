"use client";

import { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

export const CallToAction = () => {
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, [animate, scope]);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="py-24">
      <div className="p-4 max-w-360 mx-auto flex overflow-x-clip">
        <motion.ul
          ref={scope}
          className="pr-16 flex flex-none gap-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400">Try it for free</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
