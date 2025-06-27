import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/common_component/Topbar";
import { Footer } from "@/common_component/Footer";
import { ReactLenis } from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "FoxChain | Secure Blockchain Solutions",
    template: "%s | FoxChain",
  },
  description:
    "Pioneering secure and efficient blockchain technology. All rights reserved FoxChain 2025.",
  keywords: [
    "FoxChain",
    "blockchain",
    "security",
    "crypto",
    "decentralized",
    "web3",
    "finance",
  ],

  icons: {
    icon: "/onlyLogo.svg",
    shortcut: "/onlyLogo.svg",
    apple: "/onlyLogo.svg",
    other: [
      {
        rel: "mask-icon",
        url: "/onlyLogo.svg",
        color: "#000000",
      },
    ],
  },

  openGraph: {
    title: "FoxChain | Secure Blockchain Solutions",
    description:
      "Discover FoxChain: Pioneering secure and efficient blockchain technology. Experience unparalleled security and efficiency.",
    url: "https://ladyfox.vercel.app",
    siteName: "FoxChain",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "FoxChain Blockchain Platform and Logo",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@YourFoxChainHandle",
    creator: "@YourPersonalHandle",
    title: "FoxChain | Secure Blockchain Solutions",
    description:
      "Pioneering secure and efficient blockchain technology. Experience unparalleled security and efficiency with FoxChain.",
    images: ["/logo.svg"],
  },

  authors: [{ name: "FoxChain Team", url: "https://ladyfox.vercel.app" }],
  creator: "FoxChain Development",

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ReactLenis root />

        <TopBar>
          <div className="pt-10">{children}</div>
        </TopBar>
        <Footer />
      </body>
    </html>
  );
}
