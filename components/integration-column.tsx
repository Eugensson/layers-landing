"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { type Integration } from "@/types";

interface IntegrationColumnProps {
  integrationList: Integration[];
  className?: string;
  reverse?: boolean;
}

export const IntegrationColumn = ({
  integrationList,
  className,
  reverse,
}: IntegrationColumnProps) => {
  return (
    <motion.ul
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }}
      className={cn("pb-4 flex flex-col gap-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrationList.map(({ name, icon, description }) => (
            <li
              key={name}
              className="p-6 border border-white/10 rounded-3xl bg-neutral-900"
            >
              <div className="flex justify-center">
                <Image src={icon} alt={`${name} logo`} className="size-24" />
              </div>
              <h3 className="mt-6 text-3xl text-center">{name}</h3>
              <p className="text-center text-white/50 mt-2">{description}</p>
            </li>
          ))}
        </Fragment>
      ))}
    </motion.ul>
  );
};
