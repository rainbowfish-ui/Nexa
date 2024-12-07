import React from "react";
import { Ephesis } from "next/font/google";
import Link from "next/link";
import { SiStartrek } from "react-icons/si";

const ephesis = Ephesis({
  weight: ["400"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-start flex-col gap-10 py-16">
      <div className="size-full flex items-center justify-center flex-col">
        <div className="bg-white rounded-full pl-2 pr-4 py-0.5 text-black text-xs flex items-center gap-2">
          <SiStartrek size={20} />
          <p>Future of Connectivity</p>
        </div>
        <h3 className={`text-8xl font-semibold ${ephesis.className}`}>
          Join the future of Internet
        </h3>
        <p className="text-sm">
          Embrace Innovation, Connect Globally, and Shape the Digital Landscape
        </p>
      </div>
      <div className="size-full flex gap-6 items-center justify-center">
        <Link href="#" className="px-4 py-1.5 bg-white rounded-lg text-black">
          Get Started
        </Link>
        <Link
          href="#"
          className="px-6 py-1.5 bg-[#303030] rounded-lg text-white"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Hero;
