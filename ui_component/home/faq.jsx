import Container from "@/common_component/container";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const FAQ = () => {
  const [selectedIndex, setSelectedIndex] = useState("");
  return (
    <Container className={"mt-20 py-20"}>
      <div className="grid grid-cols-12 w-full lg:gap-10">
        <div className="col-span-12 lg:col-span-4 flex gap-4 flex-col">
          <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl ">
            Meet the Experts
          </p>
          <p className="text-white/50">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, and helps your business grow, without extra effort.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-8 text-white flex flex-col gap-4 mt-8">
          {faqData?.map((item, idx) => {
            return (
              <div
                key={idx}
                className={`border border-white/10 p-4 rounded-2xl cursor-pointer group overflow-clip transition-all delay-100 duration-100 ease-linear ${
                  selectedIndex === idx ? "h-auto" : "lg:h-14 h-20"
                }`}
                // style={{
                //   height: selectedIndex === idx ? "auto" : "60px",
                // }}
                onClick={() => {
                  if (selectedIndex == idx) {
                    setSelectedIndex(9999999);
                    return;
                  } else {
                    setSelectedIndex(idx);
                  }
                }}
              >
                <div className="flex flex-row justify-between">
                  <p className="">{item?.question}</p>
                  <div className="border rounded-full h-6 w-6 flex items-center justify-center">
                    <Plus
                      className={`group-hover:text-white text-white/50 transition-all duration-100 delay-100 ease-linear ${
                        selectedIndex === idx ? "rotate-90" : "rotate-180"
                      }`}
                    />
                  </div>
                </div>
                <p className="mt-4">{item?.ans}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default FAQ;

const faqData = [
  {
    question: "Is AI difficult to integrate into my current system?",
    ans: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly.",
  },
  {
    question: "Is AI difficult to integrate into my current system?",
    ans: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly.",
  },
  {
    question: "Is AI difficult to integrate into my current system?",
    ans: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly.",
  },
  {
    question: "Is AI difficult to integrate into my current system?",
    ans: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly.",
  },
  {
    question: "Is AI difficult to integrate into my current system?",
    ans: "Not with Bima. We design our AI solutions to plug into your existing tools and workflows with minimal disruption. Whether you're using CRMs, ERPs, or custom systems, we tailor the integration smoothly.",
  },
];
