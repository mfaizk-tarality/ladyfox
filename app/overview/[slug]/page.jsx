"use client";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const IndividualCardData = [
  {
    src: "/assets/overview/1.svg",
    title: "Payment Medium",
    subtitle:
      "TAN can be used as a reliable and low-cost medium for payments, remittances, and cross-border transfers, offering instant settlement with minimal fees.",
  },
  {
    src: "/assets/overview/2.svg",
    title: "Investment Vehicle",
    subtitle:
      "TAN's deflationary properties make it an attractive investment for individuals seeking to hedge against inflation and long-term value preservation.",
  },
  {
    src: "/assets/overview/3.svg",
    title: "Staking and Passive Income",
    subtitle:
      "Individuals can stake their TAN tokens to participate in consensus and earn staking rewards. This allows users to generate passive income while helping secure the network.",
  },
  {
    src: "/assets/overview/4.svg",
    title: "Governance Participation",
    subtitle:
      "Token holders can vote on various proposals, shaping the future direction of the network.",
  },
];
const BusinessCardData = [
  {
    src: "/assets/overview/11.svg",
    title: "Cross-Border Transactions",
    subtitle:
      "TAN facilitates low-cost, instantaneous global payments, making it an ideal solution for businesses involved in international trade and payments.",
  },
  {
    src: "/assets/overview/22.svg",
    title: "Tokenization of Assets",
    subtitle:
      "Businesses can tokenize physical assets, such as real estate or commodities, allowing for fractional ownership and more liquid markets.",
  },
  {
    src: "/assets/overview/33.svg",
    title: "DeFi Integration",
    subtitle:
      "TAN supports decentralized financial applications that businesses can use for lending, borrowing, and other financial services, leveraging low fees and fast transactions.",
  },
  {
    src: "/assets/overview/4.svg",
    title: "Smart Contract Automation",
    subtitle:
      "Businesses can automate and optimize business operations through smart contracts, reducing costs and improving efficiency.",
  },
];
const DeveloperCardData = [
  {
    src: "/assets/overview/111.svg",
    title: "Migration of Smart Contracts",
    subtitle:
      "Developers can migrate Ethereum-based smart contracts to TAN without needing extensive rework, taking advantage of TAN’s EVM compatibility for lower fees and faster transactions.",
  },
  {
    src: "/assets/overview/222.svg",
    title: "dApp Development",
    subtitle:
      "Developers can build scalable decentralized applications (dApps) on TAN, with incentives from the subsidy layer encouraging innovation.",
  },
  {
    src: "/assets/overview/333.svg",
    title: "Developer Subsidies",
    subtitle:
      "Developers can earn rewards based on metrics like transaction volume and contract performance, ensuring their applications remain profitable.",
  },
  {
    src: "/assets/overview/444.svg",
    title: "EVM Ecosystem Expansion",
    subtitle:
      "TAN allows developers to expand their existing Ethereum dApps or create new decentralized solutions using its highly scalable infrastructure.",
  },
];

export default function OverView() {
  const { slug } = useParams();

  const dataToMap = useMemo(() => {
    if (slug == "individuals") {
      return IndividualCardData;
    } else if (slug == "businesses") {
      return BusinessCardData;
    } else if (slug == "developers") {
      return DeveloperCardData;
    }
    return [];
  }, [slug]);

  return (
    <div className="container mx-auto flex flex-col items-center mt-16 p-2">
      <h2 className="text-3xl md:text-5xl font-semibold text-white text-center md:w-[50%] capitalize">
        {slug}
      </h2>
      <ul className="grid grid-cols-6 container mx-auto  mt-20 gap-8">
        {dataToMap?.map((item, idx) => {
          return (
            <GridItem
              key={idx}
              area="col-span-6 sm:col-span-3"
              icon={
                <div className="h-20 w-20 relative">
                  <Image
                    src={item?.src}
                    alt={idx}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              }
              title={item?.title}
              description={item?.subtitle}
            />
          );
        })}
      </ul>
    </div>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          {/* <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  md:p-6"> */}
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg  p-2 relative">{icon}</div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
