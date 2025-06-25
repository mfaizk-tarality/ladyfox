"use client";

import Container from "@/common_component/container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React, { useRef } from "react";

const TimeLine = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.to(".mainTitle", {
        duration: 0,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".textbox",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 4,
          pin: ".mainTitle",
        },
      });

      gsap.to(`.timelineText`, {
        opacity: 0,
        ease: "power2.out",
        stagger: {
          each: 1,
        },
        scrollTrigger: {
          trigger: ".textbox",
          start: "top 50%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    },
    { dependencies: [textData] }
  );
  return (
    <Container className={"overflow-hidden"}>
      <div
        className="flex items-center justify-center flex-col"
        ref={containerRef}
      >
        <div className="mainTitle flex justify-center items-center">
          <div className="h-[500px] min-w-fit flex items-center justify-center text-center">
            <p className="text-transparent bg-clip-text bg-[linear-gradient(146deg,rgb(251,199,102)_0%,rgb(255,255,255)_66.38%)]  font-Jakarta font-semibold text-nowrap lg:text-7xl text-4xl ">
              Is This You?
            </p>
          </div>
        </div>
        <div className="w-full textbox">
          {textData?.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`flex h-96 opacity-100 ${
                  (idx + 1) % 2 == 0 ? "justify-end" : "justify-start"
                }`}
              >
                <p className="text-white text-3xl w-[30%] timelineText">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default TimeLine;

const textData = [
  "You need AI, but don’t know where to start",
  "Scaling is hard without automation",
  "High operational costs reduce profits",
  "Repetitive tasks slow you down",
];
