import Container from "@/common_component/container";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const Insight = () => {
  return (
    <Container className={"my-20"}>
      <div className="grid grid-cols-12 text-white">
        <div className="col-span-12 lg:col-span-2 flex justify-end">
          <p className="text-white/50 mt-10 text-sm font-Jakarta">[BLOG]</p>
        </div>
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
          <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl ">
            Latest Insights
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="transition-colors duration-200 delay-200 ease-in bg-gradient-to-tl from-[#353B66] via-[#191C30] text-white w-44 flex flex-row py-2 items-center justify-center gap-2 my-20 rounded-4xl border border-white/10 cursor-pointer hover:from-blue-600 hover:via-blue-700 ">
            <p className="font-Jakarta">More Works </p>
            <ArrowUpRight />
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 w-full gap-8">
          {cardData?.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  idx == 0 ? "col-span-12" : "col-span-12 lg:col-span-6"
                } grid grid-cols-12 bg-gradient-to-tl from-[#191C30] to-[#0B0E23] group outline hover:outline-4 hover:outline-[#52478b] outline-white/10 rounded-4xl overflow-clip transition-all delay-200 duration-200 cursor-pointer`}
              >
                <div className="col-span-12 lg:col-span-6">
                  <img
                    src={item?.img}
                    alt=""
                    className={`${
                      idx == 0 ? "h-96" : "h-56"
                    } w-full p-4 rounded-4xl `}
                  />
                </div>
                <div className="col-span-12 lg:col-span-6 p-4 relative">
                  <p className="text-white/40 font-Jakarta text-xs">
                    {item?.heading}
                  </p>
                  <p
                    className={`${
                      idx == 0 ? "text-4xl mt-8 lg:mt-16 " : "text-xl mt-8"
                    } text-start`}
                  >
                    {item?.title}
                  </p>
                  <p className="mt-4 text-white/40 text-clip">
                    {item?.description}
                  </p>
                  <div
                    className={`w-[95%] justify-between items-center mt-10 lg:mt-0 lg:absolute bottom-6 ${
                      idx == 0 ? "flex" : "flex lg:hidden"
                    }`}
                  >
                    <div className="flex flex-row items-center justify-center gap-4">
                      <img
                        src={item?.avatar}
                        alt=""
                        className="h-10 w-10 rounded-full"
                      />
                      <p className="text-white/50">{item?.avatarTitle}</p>
                    </div>
                    <p className="text-white/50">{item?.date}</p>
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

export default Insight;

const cardData = [
  {
    heading: "[AI AUTOMATION]",
    title: "The Future Is Automated: Why Now Is the Time to Embrace AI",
    description:
      "Discover how AI automation is reshaping industries—and why early adopters are leading the charge.",
    img: "/assets/insight/1.avif",
    avatar: "https://i.pravatar.cc",
    avatarTitle: "Richard Thompson",
    date: "Apr 21,2025",
  },
  {
    heading: "[AI AUTOMATION]",
    title: "The Future Is Automated: Why Now Is the Time to Embrace AI",
    description:
      "Discover how AI automation is reshaping industries—and why early adopters are leading the charge.",
    img: "/assets/insight/1.avif",
    avatar: "https://i.pravatar.cc",
    avatarTitle: "Richard Thompson",
    date: "Apr 21,2025",
  },
  {
    heading: "[AI AUTOMATION]",
    title: "The Future Is Automated: Why Now Is the Time to Embrace AI",
    description:
      "Discover how AI automation is reshaping industries—and why early adopters are leading the charge.",
    img: "/assets/insight/1.avif",
    avatar: "https://i.pravatar.cc",
    avatarTitle: "Richard Thompson",
    date: "Apr 21,2025",
  },
];
