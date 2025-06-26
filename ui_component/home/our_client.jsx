import Carousel from "@/components/ui/carousel";
import React from "react";

const OurClient = () => {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

export default OurClient;

const slideData = [
  {
    title: "Mystic Mountains",
    subtitle: `"Our AI chatbot reduced response times from 10 minutes to just 2
            seconds. Customer satisfaction skyrocketed, and we saved over 400
            hours per month on support."`,
  },
  {
    title: "Urban Dreams",
    subtitle: `"Our AI chatbot reduced response times from 10 minutes to just 2
            seconds. Customer satisfaction skyrocketed, and we saved over 400
            hours per month on support."`,
  },
  {
    title: "Neon Nights",
    subtitle: `"Our AI chatbot reduced response times from 10 minutes to just 2
            seconds. Customer satisfaction skyrocketed, and we saved over 400
            hours per month on support."`,
  },
  {
    title: "Desert Whispers",
    subtitle: `"Our AI chatbot reduced response times from 10 minutes to just 2
            seconds. Customer satisfaction skyrocketed, and we saved over 400
            hours per month on support."`,
  },
];
