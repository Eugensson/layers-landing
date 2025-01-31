"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

import { logoList } from "@/constants";

export const LogoTicker = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-xl text-center text-white/50">
          Already chosen by these market leaders
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logoList.map(({ name, image }) => (
                  <Image key={name} src={image} alt={`${name} logo`} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
