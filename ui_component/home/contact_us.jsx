import Container from "@/common_component/container";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <Container className={"mt-20"}>
      <div className="grid grid-cols-12  lg:gap-20">
        <div className="col-span-12 lg:col-span-6">
          <p className="text-white/50 text-sm">[CONTACT US]</p>
          <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl md:text-6xl mt-10">
            Ready to Automate Your Business?
          </p>
          <p className="text-white/50 mt-10">
            Let AI handle the hard work while you focus on growth. Book a free
            AI strategy session today.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="border border-white/10 bg-gradient-to-tl from-[#FFFFFF1A] to-[#FFFFFF0A] rounded-2xl flex flex-col p-6 gap-4">
            <div className="flex flex-col text-white gap-2">
              <label htmlFor="name" className="font-Jakarta text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="bg-[#000319] h-12 p-2 rounded-lg border border-white/10 outline-none"
                placeholder="Jane Smith"
              />
            </div>
            <div className="flex flex-col text-white gap-2">
              <label htmlFor="email" className="font-Jakarta text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                id=""
                className="bg-[#000319] h-12 p-2 rounded-lg border border-white/10 outline-none"
                placeholder="mail@site.com"
              />
            </div>
            <div className="flex flex-col text-white gap-2">
              <label htmlFor="message" className="font-Jakarta text-sm">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                id=""
                className="bg-[#000319] p-2 rounded-lg border border-white/10 outline-none"
                placeholder="Your message"
                rows={4}
              />
            </div>
            <div className="w-full grid grid-cols-12">
              <div className="col-span-6">
                <p className="text-white">
                  By submitting, you agree to our Terms and Privacy Policy.
                </p>
              </div>
              <div className="col-span-6 flex items-end justify-end">
                <button className="transition-colors duration-200 delay-200 ease-in bg-gradient-to-tl from-[#353B66] via-[#191C30] text-white flex flex-row py-2 items-center justify-center gap-2 rounded-4xl border border-white/10 cursor-pointer hover:from-blue-600 hover:via-blue-700  w-[60%]">
                  <p>Submit </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
