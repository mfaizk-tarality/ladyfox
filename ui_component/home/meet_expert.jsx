import Container from "@/common_component/container";
import { Twitter } from "lucide-react";
import React from "react";

const MeetExpert = () => {
  return (
    <Container>
      <div>
        <div className="grid grid-cols-12 text-white">
          <p className="text-white/50 col-span-12 lg:col-span-2">[OUR TEAM]</p>
          <p className="col-span-12 lg:col-span-6 text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl ">
            Meet the Experts
          </p>
          <p className="col-span-12 lg:col-span-4">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, and helps your business grow, without extra effort.
          </p>
        </div>
        <div className="grid grid-cols-12 mt-12 gap-6">
          {cardData?.map((item, idx) => {
            return (
              <div
                className="col-span-12 lg:col-span-3 border border-white/10  rounded-2xl flex flex-col group cursor-pointer overflow-hidden"
                key={idx}
              >
                <p className="text-white/50 m-4">{item?.title}</p>
                <div className="relative ">
                  <img
                    src={item?.img}
                    alt=""
                    className="mask-b-from-1.5 relative z-0"
                  />
                  <div className="group-hover:opacity-100 opacity-0 h-full w-full absolute z-10  backdrop-blur-2xl top-0 transition-all delay-100 duration-100 ease-in"></div>

                  <p className="text-white absolute group-hover:bottom-12 group-hover:left-6  bottom-8 left-4 font-semibold font-Jakarta text-2xl  z-20 transition-all duration-100 delay-100 ease-linear">
                    {item?.name}
                  </p>
                  <div className="flex flex-row absolute z-40 left-4 group-hover:bottom-2 group-hover:left-6 -bottom-20 transition-all duration-200 delay-200 ease-linear gap-2">
                    {item?.social?.map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className="border border-white/10 rounded-full p-1 bg-[#010011]/10 h-9 w-9 flex items-center justify-center"
                        >
                          {<item.icon color="#fff" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default MeetExpert;

const cardData = [
  {
    title: "Founder",
    img: "/assets/expert/1.avif",
    name: "Vansh Singhal",
    social: [
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
    ],
  },
  {
    title: "Automation Architect",
    img: "/assets/expert/1.avif",
    name: "Mukesh Kumar",
    social: [
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
    ],
  },
  {
    title: "Lead AI Engineer",
    img: "/assets/expert/1.avif",
    name: "Abhinav Gupta",
    social: [
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
    ],
  },
  {
    title: "Founder",
    img: "/assets/expert/1.avif",
    name: "Shivam Maurya",
    social: [
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
      {
        href: "#",
        icon: Twitter,
      },
    ],
  },
];
