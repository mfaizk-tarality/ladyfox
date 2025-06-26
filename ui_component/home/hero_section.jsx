import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Spotlight } from "@/components/ui/spotlight";
import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen lg:overflow-hidden 2xl:mx-0 mx-20 relative antialiased">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-50"
        fill="#9e60a7"
      />
      <div className="2xl:col-start-3 2xl:col-span-5 md:col-span-6 col-span-12 flex justify-center xl:items-start items-center h-full w-full  flex-col gap-8 pb-72">
        <p className="text-transparent bg-clip-text bg-[linear-gradient(146deg,rgb(255,255,255)_32%,rgb(251,199,102)_90.38%)] text-7xl font-[500] font-Jakarta text-center lg:text-start lg:mt-60">
          Turning Business into AI-Powered Machine.
        </p>
        <p className="text-white 2xl:w-[56%]">
          <span className="invisible">jkasdfkabj</span>
          <span className="text-gray-500">
            A result-focused design partner to help you
          </span>{" "}
          automate workflows, optimize operations,{" "}
          <span className="text-gray-500">and scale faster</span> with AI
          solutions.
        </p>
        <ShimmerButton className="shadow-2xl flex gap-2 px-2 py-2 group relative  items-start justify-start mt-40">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div className="relative bg-orange w-60 flex items-center justify-center h-full ">
            <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 delay-200 ease-linear font-bold">
              Talk with Brajesh
            </p>
            <p className="absolute opacity-100 group-hover:opacity-0 transition-all duration-200 delay-200 ease-linear font-bold">
              Get a Free AI Strategy Session
            </p>
          </div>
        </ShimmerButton>
      </div>
      <div className="2xl:col-span-4 md:col-span-6 col-span-12 relative flex items-center justify-center">
        <video
          playsInline
          preload="auto"
          autoPlay
          muted
          loop
          className="absolute  2xl:scale-125 xl:scale-100"
        >
          <source src="/assets/home/hero/hero.webm" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
