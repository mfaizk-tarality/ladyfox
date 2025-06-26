import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";
import { Particles } from "../magicui/particles";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-12 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={idx}
          className="relative group  block p-2 h-full w-full col-span-12 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#4d4282] block rounded-3xl"
                layoutId="hoverBackground"
                // initial={{ opacity: 0 }}
                animate={{
                  // opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  // opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="w-full grid grid-cols-12 min-h-96 relative z-10 bg-gradient-to-tl from-[#191c30] via-[#0B0E23] rounded-3xl p-10 gap-6 md:gap-0">
            <div className="col-span-12 md:col-span-8 ">
              <p className="text-white text-4xl font-Jakarta md:w-[40%]">
                <span className="text-white/50 text-lg hidden md:flex">
                  [{idx + 1}]
                </span>{" "}
                {item?.title}
              </p>
              <p className="text-white/50 mt-20">{item?.subDescription}</p>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-center justify-center">
              <img src={item?.img} alt="" />
            </div>
            <div className="flex flex-row gap-4">
              {item?.chips?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="text-white/50 border min-w-24 text-center py-2 rounded-full border-white/50"
                  >
                    <p className="font-Jakarta text-xs">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
