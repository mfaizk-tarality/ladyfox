import Container from "@/common_component/container";
import { Particles } from "@/components/magicui/particles";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

const SeeOur = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to(".see_mainTitle", {
        duration: 1,
        opacity: 0,

        ease: "power2.out",
        scrollTrigger: {
          trigger: ".see_textbox",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 4,
          pin: ".see_mainTitle",
        },
      });
    },
    { dependencies: [] }
  );
  return (
    <div className="relative">
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color={"#fff"}
        refresh
      />
      <Container className={"relative"}>
        <div
          className="flex items-center justify-center flex-col overflow-hidden"
          ref={containerRef}
        >
          <div className="see_mainTitle flex justify-center items-center">
            <div className="h-[500px] min-w-fit flex items-center justify-center text-center">
              <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl ">
                See Our Work in Action
              </p>
            </div>
          </div>
          <div className="w-full see_textbox">
            <HoverEffect items={projects} className={"see_timelineText"} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="transition-colors duration-200 delay-200 ease-in bg-gradient-to-tl from-[#353B66] via-[#191C30] text-white w-96 flex flex-row py-2 items-center justify-center gap-2 my-20 rounded-4xl border border-white/10 cursor-pointer hover:from-blue-600 hover:via-blue-700 ">
            <p>More Works </p>
            <ArrowUpRight />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SeeOur;

const projects = [
  {
    title: "AI for Lead Qualification - SaaS Company",
    subDescription:
      "AI automation cut data processing time by 80% sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    link: "https://stripe.com",
    img: "/assets/see/1.avif",
    chips: ["StartUp", "E-commerce"],
  },
  {
    title: "AI for Lead Qualification - SaaS Company",
    subDescription:
      "AI automation cut data processing time by 80% sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    link: "https://stripe.com",
    img: "/assets/see/1.avif",
    chips: ["StartUp", "E-commerce"],
  },
  {
    title: "AI for Lead Qualification - SaaS Company",
    subDescription:
      "AI automation cut data processing time by 80% sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    link: "https://stripe.com",
    img: "/assets/see/1.avif",
    chips: ["StartUp", "E-commerce"],
  },
];
