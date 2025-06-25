import {
  IconBrandTelegram,
  IconBrandTwitter,
  IconSpeakerphone,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-20">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img src="/assets/brand/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex  gap-10 row-gap-8 lg:col-span-4  item-end justify-end">
          {footerData.map((section, index) => (
            <div key={index} className="col-span-2">
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
          <div className="flex items-start mt-4 space-x-4 sm:mt-0 md:ml-16">
            <Link
              href="https://x.com/Hodl_TAN?mx=2"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <IconBrandTwitter />
            </Link>
            <Link
              href="https://t.me/Hodl_TAN_Chat"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <IconBrandTelegram />
            </Link>
            <Link
              href="https://t.me/Hodl_TAN"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <IconSpeakerphone />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10   sm:flex-row">
        <p className="text-sm text-gray-600">
          © TAN Blockchain. 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const footerData = [
  {
    title: "COMPANY",
    links: [
      {
        label: "About TAN",
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
