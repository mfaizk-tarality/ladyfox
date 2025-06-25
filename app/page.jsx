"use client";
import HeroSection from "@/ui_component/home/hero_section";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "@/ui_component/home/time_line";
import PoweredWorkflow from "@/ui_component/home/powered_workflow";
import SeeOur from "@/ui_component/home/see_our";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function MainHome() {
  return (
    <div className="bg-[#010111]">
      <div className="relative  flex items-center justify-center flex-col ">
        <HeroSection />
        <TimeLine />
        <PoweredWorkflow />
        <SeeOur />
      </div>
    </div>
  );
}
