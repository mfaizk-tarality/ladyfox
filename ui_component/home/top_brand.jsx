import Container from "@/common_component/container";
import React, { useRef } from "react";
import Carousel from "./carousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const TopBrand = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.from(".cards_brand", {
        x: 1000,
        opacity: 0,
        stagger: {
          each: 0.05,
        },
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 50%",
        },
      });
      gsap.from(".cards_brand_img", {
        x: 1000,
        opacity: 0,
        stagger: {
          each: 0.05,
        },
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 50%",
        },
      });
      let split = SplitText.create(".cards_brand_subs", {
        type: "words, chars",
      });
      gsap.from(split.chars, {
        duration: 0.05,
        y: 100,
        ease: "power2.out",
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 50%",
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <Container className={"relative mt-20 "}>
      <div
        className="flex items-center justify-center flex-col overflow-hidden"
        ref={containerRef}
      >
        <div className="flex justify-start items-center text-start  w-full py-8">
          <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl ">
            Why Top Brands Trust Us
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-4">
          {cardData?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="col-span-12 lg:col-span-6 xl:col-span-3 bg-gradient-to-br from-[#191C30] via-[#0B0E23] text-white relative py-8 px-4 border border-white/10 rounded-4xl overflow-clip cards_brand"
              >
                <p className="font-Jakarta text-white/50 text-xs">
                  {item?.heading}
                </p>
                <img
                  src={item?.img}
                  alt=""
                  className="min-h-80 object-contain relative -right-16 cards_brand_img"
                />
                <p className="font-Jakarta text-2xl">{item?.subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full grid grid-cols-12 py-10">
        <div className="col-span-3 text-white/40 cards_brand_subs">
          <p>Trusted by leading companies in tech, finance and e-commerce</p>
        </div>
        <div className="col-span-9">
          <Carousel />
        </div>
      </div>
    </Container>
  );
};

export default TopBrand;

const cardData = [
  {
    heading: "[PROVEN RESULTS]",
    img: "/assets/top-brand/1.avif",
    subTitle: "200+ businesses automated",
  },
  {
    heading: "[PROVEN RESULTS]",
    img: "/assets/top-brand/1.avif",
    subTitle: "200+ businesses automated",
  },
  {
    heading: "[PROVEN RESULTS]",
    img: "/assets/top-brand/1.avif",
    subTitle: "200+ businesses automated",
  },
  {
    heading: "[PROVEN RESULTS]",
    img: "/assets/top-brand/1.avif",
    subTitle: "200+ businesses automated",
  },
];
