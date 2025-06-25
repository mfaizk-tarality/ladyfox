import Container from "@/common_component/container";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const SeeOur = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to(".see_mainTitle", {
        duration: 0,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".see_textbox",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 4,
          pin: ".see_mainTitle",
        },
      });

      //   gsap.to(`.see_timelineText`, {
      //     opacity: 0,
      //     ease: "power2.out",
      //     stagger: {
      //       each: 1,
      //     },
      //     scrollTrigger: {
      //       trigger: ".see_textbox",
      //       start: "top 50%",
      //       end: "bottom 20%",
      //       scrub: 1,
      //     },
      //   });
    },
    { dependencies: [] }
  );
  return (
    <Container className={"overflow-hidden"}>
      <div
        className="flex items-center justify-center flex-col"
        ref={containerRef}
      >
        <div className="see_mainTitle flex justify-center items-center">
          <div className="h-[500px] min-w-fit flex items-center justify-center text-center">
            <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-6xl ">
              See Our Work in Action
            </p>
          </div>
        </div>
        <div className="w-full see_textbox ">
          <HoverEffect items={projects} className={"see_timelineText"} />
        </div>
      </div>
    </Container>
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
    link: "https://netflix.com",
    chips: ["StartUp", "E-commerce"],
  },
  {
    title: "AI for Lead Qualification - SaaS Company",
    subDescription:
      "AI automation cut data processing time by 80% sped up compliance approvals by 50% for a finance firm. Learn how AI improved efficiency.",
    link: "https://google.com",
    chips: ["StartUp", "E-commerce"],
  },
];
