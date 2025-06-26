import Container from "@/common_component/container";
import { Spotlight } from "@/components/ui/spotlight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const PoweredWorkflow = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".cards", {
        x: 500,
        opacity: 0,
        stagger: {
          each: 0.5,
        },
        ease: "power2.out",
        duration: 50,
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 4,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <Container className={"relative "}>
      <Spotlight fill="#9e60a7" />
      <div className="grid grid-cols-12" ref={container}>
        <div className="col-span-12 md:col-span-2">
          <p className="text-gray-600">[OUR SOLUTIONS]</p>
        </div>

        <div className="col-span-12 md:col-span-6">
          <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] text-6xl font-[500] font-Jakarta">
            Building AI-Powered <br /> Workflow
          </p>
        </div>

        <div className="col-span-12 md:col-span-4">
          <p className="text-[#b4b4c2]">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, and helps your business grow, without extra effort.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full  gap-4 mt-10 overflow-hidden">
        {cardData?.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`min-h-56 ${
                idx == 0
                  ? "col-span-12 md:col-span-8"
                  : "col-span-12 md:col-span-4"
              } border border-white/10 rounded-2xl bg-gradient-to-tr from-[#ffffff34] to-[#FFFFFF0A] cards `}
            >
              <img src={item?.img} alt="" className="" />
              <div className="p-6">
                <p className="text-white">{item?.title}</p>
                <p className="text-white/50">{item?.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PoweredWorkflow;

const cardData = [
  {
    title: "Workflow Automation",
    subtitle:
      "Let AI handle repetitive tasks, so your team can focus on high-impact work.",
    img: "/assets/powered/1.png",
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    subtitle: "Enhance customer experience with 24/7 AI-driven support.",
    img: "/assets/powered/2.png",
  },
  {
    title: "Personalized AI Marketing",
    subtitle: "Send smarter messages at the right moment with AI .",
    img: "/assets/powered/2.png",
  },
  {
    title: "CRM Automation",
    subtitle:
      "Capture, qualify, and route leads focuses only on the right prospects automatically.",
    img: "/assets/powered/2.png",
  },
  {
    title: "Custom AI Integrations",
    subtitle: "Seamlessly integrate AI into your existing business systems.",
    img: "/assets/powered/2.png",
  },
];
