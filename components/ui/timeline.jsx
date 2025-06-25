"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  return (
    <div className="border border-white/10  rounded-2xl hidden md:block">
      <div
        className="w-full  md:px-10 text-white relative rounded-2xl "
        ref={containerRef}
        style={{
          background:
            "radial-gradient(100% 81% at 0% 0%,rgb(74, 14, 78), #4a0e4e 0%,rgba(12,11,18,.97) 100%)",
        }}
      >
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] "
          )}
        />

        <div ref={ref} className="relative pb-20 grid grid-col-12">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 col-span-8">
              <div className="sticky flex flex-col z-40 items-start top-40 self-start text-start">
                <h3 className="hidden md:block text-xl md:text-5xl font-bold text-white ">
                  {item.title}
                </h3>
                <p className="hidden md:block text-lg font-medium text-white/50 mt-4">
                  {item.subtitle}
                </p>
              </div>

              <div className=" w-full col-span-4  gap-10 flex flex-col">
                {item.sideCard?.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row gap-8 border border-white/10 bg-white/10 p-10 rounded-xl"
                    >
                      <img
                        src={item?.img}
                        alt={idx}
                        className="h-44 object-contain rounded-4xl"
                      />
                      <div className="flex flex-col gap-4">
                        <p className="text-white/70">{item?.desc}</p>
                        <div>
                          <p className="font-semibold">{item?.name}</p>
                          <p className="text-white/70">{item?.designation}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {/* <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};
