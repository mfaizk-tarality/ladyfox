import {
  IconBrandTelegram,
  IconBrandTwitter,
  IconSpeakerphone,
} from "@tabler/icons-react";
import Link from "next/link";
import Container from "./container";
import { Particles } from "@/components/magicui/particles";

export const Footer = () => {
  return (
    <div className="bg-[#010111] relative  py-40 lg:pb-96 overflow-clip">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <Container>
        <div className="w-full grid grid-cols-12 relative gap-10 lg:gap-0">
          <div className="col-span-12 lg:col-span-6 flex gap-4 flex-col items-start justify-between lg:min-h-80">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="flex flex-row items-center justify-center gap-4">
                <p className="text-white/50 text-sm">[CALL US]</p>
                <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-xl">
                  +1234 567 89
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <p className="text-white/50 text-sm">[MAIL US]</p>
                <p className="text-transparent bg-clip-text bg-[linear-gradient(2766deg,rgb(251,199,102)_32%,rgb(255,255,255)_90.38%)] font-Jakarta text-4xl">
                  hello@foxchain.com
                </p>
              </div>
            </div>
            <div>
              <p className="text-white font-Jakarta text-xs">
                <span className="text-white/50">
                  {" "}
                  @2025 foxchain. All Rights Reserved
                </span>{" "}
                Privacy Policy Terms and Conditions
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between">
            <div className="flex justify-center lg:justify-end gap-10">
              {footerData.map((section, index) => (
                <div key={index} className="">
                  <p className="font-semibold tracking-wide text-white">
                    {section.title}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {section.links.map((item, idx) => (
                      <li key={idx}>
                        {console.log(item, "item>>")}
                        <Link
                          href={item?.link}
                          className="text-white/40 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* <div className="flex justify-center lg:justify-end">
              <p className="text-white">
                <span className="text-white/50">MADE BY</span> MUSKESH
              </p>
            </div> */}
          </div>
          <div className="col-span-12 flex items-center justify-center lg:absolute right-[30%] lg:-bottom-[650px]">
            <img
              src="/assets/brand/onlyLogo.svg"
              alt=""
              className="lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

const footerData = [
  {
    title: "COMPANY",
    links: [
      {
        label: "About Company",
        link: "#",
      },
      {
        label: "Explore the Ecosystem",
        link: "#",
      },
      {
        label: "Careers",
        link: "#",
      },
      {
        label: "For Developers",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    title: "POLICY",
    links: [
      {
        label: "Privacy Policy",
        link: "#",
      },
      {
        label: "Security",
        link: "#",
      },
      {
        label: "Terms of Use",
        link: "#",
      },
    ],
  },
];
