"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Tag } from "@/components/tag";

import { cn } from "@/lib/utils";
import { faqData } from "@/lib/data";

export const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-24" id="faqs">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="mt-6 max-w-2xl mx-auto text-4xl md:text-6xl font-medium text-center">
          Questions? We&apos;ve got&nbsp;
          <span className="text-lime-400">answers</span>
        </h2>
        <ul className="mt-12 max-w-2xl mx-auto flex flex-col gap-6">
          {faqData.map(({ question, answer }, faqIndex) => (
            <li
              key={question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
              onClick={() => setSelectedIndex(faqIndex)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{question}</h3>
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
                  className={cn(
                    "feather feather-plus text-lime-400 shrink-0 transition duration-300",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 24 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
