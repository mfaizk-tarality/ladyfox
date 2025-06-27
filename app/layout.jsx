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
  title: "FoxChain",
  description: "All right reserve foxchain 2025",
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
    images: "/opengraph-image.jpg",
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
