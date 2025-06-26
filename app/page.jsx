"use client";
import HeroSection from "@/ui_component/home/hero_section";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "@/ui_component/home/time_line";
import PoweredWorkflow from "@/ui_component/home/powered_workflow";
import SeeOur from "@/ui_component/home/see_our";
import TopBrand from "@/ui_component/home/top_brand";
import { SplitText } from "gsap/all";
import TechStack from "@/ui_component/home/tech_stack";
import OurClient from "@/ui_component/home/our_client";
import MeetExpert from "@/ui_component/home/meet_expert";
import FAQ from "@/ui_component/home/faq";
import Insight from "@/ui_component/home/insight";
import ContactUs from "@/ui_component/home/contact_us";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export default function MainHome() {
  return (
    <div className="bg-[#010111]">
      <div className="relative  flex items-center justify-center flex-col ">
        <HeroSection />
        <TimeLine />
        <PoweredWorkflow />
        <SeeOur />
        <TopBrand />
        <TechStack />
        <OurClient />
        <MeetExpert />
        <FAQ />
        <Insight />
        <ContactUs />
      </div>
    </div>
  );
}
