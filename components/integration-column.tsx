"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { type IntegrationType } from "@/components/integrations";

interface IntegrationColumnProps {
  integrationList: IntegrationType;
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
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrationList.map(({ name, icon, description }) => (
            <li
              key={name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
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
