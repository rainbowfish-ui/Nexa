import Link from "next/link";
import React from "react";
import { SiStartrek } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="w-full h-16 py-3 sticky top-0 flex items-center justify-between gap-20 px-20 text-sm backdrop-blur-md z-50">
      <div className="flex items-center gap-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-200 hover:text-white"
        >
          <SiStartrek size={28} />
          <h2 className="text-xl font-semibold">Nexa</h2>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Documentation
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            Careers
          </Link>
        </div>
      </div>
      <div className="flex gap-4 text-xs">
        <Link
          href="#"
          className="border-gray-300 border px-6 py-1.5 rounded-full"
        >
          Contact us
        </Link>
        <Link
          href="#"
          className="bg-white text-black px-6 py-1 rounded-full hover:scale-[.98] transition-transform border border-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
