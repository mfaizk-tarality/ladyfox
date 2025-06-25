"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Container from "@/common_component/container";

const cardData = [
  {
    src: "/assets/home/individual.svg",
    title: "Individuals",
    subtitle: "Learn more",
    nav: "/overview/individuals",
  },
  {
    src: "/assets/home/business.svg",
    title: "Businesses",
    subtitle: "Learn more",
    nav: "/overview/businesses",
  },
  {
    src: "/assets/home/developer.svg",
    title: "Developers",
    subtitle: "Learn more",
    nav: "/overview/developers",
  },
];

const OverViewSection = () => {
  return (
    <Container className={"overflow-hidden bg-transparent"}>
      <div className="w-full flex items-center justify-center mt-40">
        <h2 className="text-3xl md:text-5xl font-semibold text-white text-center md:w-[50%]">
          Get a quick overview
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-8 my-20">
        {cardData?.map((item, idx) => {
          return (
            <PinContainer
              title={item?.title}
              href={item?.nav}
              containerClassName={"col-span-3 lg:col-span-1 cursor-pointer"}
              key={idx}
            >
              <div className="w-[90vw] sm:w-[20rem] relative  hover:shadow-emerald-500/[0.1] bg-black rounded-xl p-6 flex flex-col items-center">
                <div className="h-24 w-24 relative ">
                  <Image
                    src={item?.src}
                    alt={idx}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="flex justify-between items-center mt-10 flex-col">
                  <div className="px-4 py-2 rounded-xl text-xl font-normal text-[#fff]">
                    {item?.title}
                  </div>
                  <div
                    as="button"
                    className="px-4 py-2 rounded-xl  text-[#7E7E7EF2]  text-xs font-bold"
                  >
                    {item?.subtitle}
                  </div>
                </div>
              </div>
            </PinContainer>
          );
        })}
      </div>
    </Container>
  );
};

export default OverViewSection;
