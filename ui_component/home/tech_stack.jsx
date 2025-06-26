import Container from "@/common_component/container";
import { Particles } from "@/components/magicui/particles";
import React, { useRef, useState } from "react";

const TechStack = () => {
  const containerRef = useRef();
  const [isCondensed, setIsCondensed] = useState(false);
  return (
    <div className="relative w-full">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={"#fff"}
        refresh
      />
      <Container className={"relative mt-32"}>
        <div
          className="flex items-center justify-center flex-col"
          ref={containerRef}
        >
          <div className="min-w-fit flex items-start justify-start w-full">
            <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl md:ml-60">
              Our Tech <br />
              Stack
            </p>
          </div>
          <div
            className="w-full flex flex-col lg:flex-row items-center justify-center mt-40 relative my-72 z-40 gap-4 lg:gap-0"
            onMouseEnter={() => setIsCondensed(true)}
            onMouseLeave={() => setIsCondensed(false)}
          >
            {cardData?.map((item, idx) => {
              return (
                <div
                  className={`border border-white/10 rounded-4xl p-4  lg:skew-y-12 lg:relative bg-gradient-to-tl from-[#191C30] to-[#0B0E23] transition-all duration-300 delay-300 ease-linear lg:w-auto w-full `}
                  style={{
                    top: `-${idx * 20}px`,
                    right: isCondensed ? `${idx * 10}%` : `-${idx}%`,
                    zIndex: `-${10 + 1 * idx}`,
                  }}
                  key={idx}
                >
                  <p className="text-white/50 font-Jakarta font-semibold">
                    [0{idx + 1}]
                  </p>
                  <img src={item?.img} alt="" className="h-40" />
                  <div className="w-full flex items-end justify-end ">
                    <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta font-semibold">
                      {item?.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
// 50% 50% 0px
export default TechStack;

const cardData = [
  {
    title: "OPEN AI",
    img: "/assets/tech_stack/1.avif",
  },
  {
    title: "OPEN AI",
    img: "/assets/tech_stack/1.avif",
  },
  {
    title: "OPEN AI",
    img: "/assets/tech_stack/1.avif",
  },
  {
    title: "OPEN AI",
    img: "/assets/tech_stack/1.avif",
  },
  {
    title: "OPEN AI",
    img: "/assets/tech_stack/1.avif",
  },
];
