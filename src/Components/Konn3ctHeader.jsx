import React from "react";
import Logo from "../Images/Konn3ct Images/konn3ct_logo.png";

const Konn3ctHeader = () => {
  return (
   <header className="relative z-10 flex justify-between bg-white items-center px-8 py-4 border-b border-t border-gray-200">
        <img src={Logo} alt="Konnect Logo" className="h-8 w-auto" />
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="text-black hover:text-blue-400">
            Meet
          </a>
          <a href="#" className="text-black hover:text-blue-400">
            Features
          </a>
          <a href="#" className="text-black hover:text-blue-400">
            Customers
          </a>
          <a href="#" className="text-black hover:text-blue-400">
            Pricing
          </a>
          <div className="group relative">
            <button className="flex items-center gap-1 text-black hover:text-blue-400">
              Company
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Careers
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="flex space-x-3">
          <button className="px-4 py-2 text-sm bg-transparent border border-[#1A4699] rounded-lg text-black hover:bg-white  hover:text-blue-400 transition shadow-lg">
            Login
          </button>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-[#1A4699] transition">
            Sign up, It’s Free
          </button>
        </div>
      </header>
  );
};

export default Konn3ctHeader;
