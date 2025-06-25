"use client";
import Container from "@/common_component/container";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

const cardData1 = [
  {
    heading: "Speed & Finality",
    data: [
      {
        label: "Blazing-Fast Transactions",
        subtitle:
          "Every transaction on TAN is confirmed within seconds. No more waiting minutes for confirmations. Whether you're sending assets or executing a smart contract, speed is guaranteed.",
      },
      {
        label: "Final Means Final",
        subtitle:
          "Once confirmed, your transaction is final. No rollbacks. No forks. Just trustless certainty.",
      },
    ],
  },
  {
    heading: "Low Fees, Always",
    data: [
      {
        label: "Designed for Affordability",
        subtitle:
          "High gas fees shouldn't be the norm. TAN keeps fees consistently low, so users and developers can build and transact without breaking the bank in any market cycle.",
      },
      {
        label: "Predictable Pricing",
        subtitle:
          "No more surprise spikes. TAN's architecture ensures stable, transparent fee structures, even during peak demand.",
      },
    ],
  },
  {
    heading: "Resilient in Any Market",
    data: [
      {
        label: "Built for the Long Haul",
        subtitle:
          "Bull runs? Bear markets? TAN performs through it all. Our infrastructure is optimized for efficiency, regardless of network congestion or market volatility.",
      },
      {
        label: "Trusted by Builders",
        subtitle:
          "From startups to DeFi protocols, projects choose TAN for its reliable throughput and long-term scalability.",
      },
    ],
  },
];
const cardData2 = [
  {
    heading: "Scalable by Design",
    data: [
      {
        label: "Grow Without Limits",
        subtitle:
          "From MVP to millions of users, TAN’s modular architecture supports your app at every stage. No bottlenecks, no rewrites.",
      },
      {
        label: "Horizontal Scaling",
        subtitle:
          "Add capacity as needed. TAN is built to distribute load efficiently across the network, ensuring performance stays high even as demand grows.",
      },
    ],
  },
  {
    heading: "Developer-First Infrastructure",
    data: [
      {
        label: "Tools That Scale With You",
        subtitle:
          "From robust APIs to flexible SDKs, TAN provides the infrastructure developers need to build scalable applications faster and maintain them with ease.",
      },
      {
        label: "No Downtime Deployments",
        subtitle:
          "Ship updates without friction. Our tooling ensures versioning, backwards compatibility, and smooth rollouts.",
      },
    ],
  },
  {
    heading: "Enterprise-Grade Performance",
    data: [
      {
        label: "Scale for Millions, Not Just Dozens",
        subtitle:
          "TAN is already powering apps with high throughput and global user bases. Whether you're building fintech, gaming, or DeFi, TAN scales with you.",
      },
      {
        label: "Tested Under Pressure",
        subtitle:
          "TAN's performance has been validated in high-volume environments. Expect consistent latency and reliability even during traffic spikes.",
      },
    ],
  },
];

const cardData3 = [
  {
    heading: "The Inflation Protection Model",
    data: [
      {
        label: "A Smarter Supply Strategy",
        subtitle:
          "TAN introduces a dynamic issuance model that aligns network growth with long-term value. No runaway emissions; just sustainable economics.",
      },
      {
        label: "Built-In Scarcity",
        subtitle:
          "TAN’s supply adjusts to real usage and demand, curbing excess inflation and protecting token value over time.",
      },
    ],
  },
  {
    heading: "Balanced Incentives",
    data: [
      {
        label: "Rewards Without Dilution",
        subtitle:
          "Validator and user incentives are carefully structured to avoid over-rewarding and devaluing the network. The result? A healthier, more resilient economy.",
      },
      {
        label: "Sustainable Staking Yields",
        subtitle:
          "Staking rewards are optimized to be attractive without compromising long-term token health.",
      },
    ],
  },
  {
    heading: "Long-Term Ecosystem Health",
    data: [
      {
        label: "Designed to Endure",
        subtitle:
          "TAN’s tokenomics aren’t just about hype cycles. They’re about ensuring the protocol can thrive for decades, not just months.",
      },
      {
        label: "Responsible Growth",
        subtitle:
          "Every element of TAN’s design is built with sustainability in mind. Growth shouldn’t come at the cost of future users.",
      },
    ],
  },
];

const Section = () => {
  const { slug } = useParams();
  console.log(slug, "slug");
  const cardData = useMemo(() => {
    switch (slug) {
      case "fast":
        return cardData1;
      case "built":
        return cardData2;
      case "sustainable":
        return cardData3;

      default:
        return cardData1;
    }
  }, [slug]);

  return (
    <Container>
      {cardData?.map((item, idx) => {
        return (
          <div className="text-white" key={idx}>
            <div className="w-full flex flex-col  mt-16 ">
              <h2 className="text-4xl font-semibold">{item?.heading}</h2>
            </div>
            <div className="grid grid-cols-12 gap-8 mt-6">
              {item?.data?.map((item, id) => {
                return (
                  <div className="col-span-12 md:col-span-6 min-h-72" key={id}>
                    <Card
                      title={item?.label}
                      subtitle={item?.subtitle}
                      className={"w-full h-full"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Section;

const Card = ({ title, subtitle, className }) => {
  return (
    <div
      className={cn(
        "cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-64 h-64 rounded-xl  border-[0.25px] border-white/10 backdrop-blur-2xl ",
        className
      )}
    >
      <div className="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-tanborder shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-tanborder shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
      <div className="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-tanborder shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
      <div className="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-description shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
      <div className="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-description shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
      <div className="w-full h-full shadow-xl  rounded-xl flex-col gap-2 flex justify-center">
        {/* shadow-neutral-900 p-3 bg-neutral-600  */}
        <span className="text-white font-bold text-xl italic">
          {title || ""}
        </span>
        <p className="text-white">{subtitle || ""}</p>
      </div>
      <div className="bg-transparent group-hover:scale-150 -top-12 -right-12 absolute shadow-tanborder shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-44 right-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
      <div className="bg-transparent group-hover:scale-150 top-24 right-56 absolute shadow-tanborder shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
    </div>
  );
};
