"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="relative w-full bg-white shadow-sm py-2">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <div className="h-12 md:h-14 lg:h-16 flex items-center">
              <Image
                src="/logo.jpg"
                alt="Ohanaweb"
                width={120}
                height={70}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <li>
              <a href="#" className="hover:text-gray-900 text-[#616767] transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 text-[#616767] transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 text-[#616767] transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 text-[#616767] transition-colors">Contact</a>
            </li>
          </ul>


          <div className="flex items-center gap-3">
           
            {/* <button
              type="button"
              aria-label="Toggle search"
              onClick={() => setShowSearch((v) => !v)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm8.28 12.22a1 1 0 0 1 1.42 1.42l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5z" />
              </svg>
            </button> */}
            <a
              href="#"
              className="inline-flex items-center justify-center py-3 px-5 rounded-sm text-white bg-[#00c7f1] hover:bg-[#043e7e] transition-colors font-semibold"
            >
              Get Started
            </a>
             <div className="flex items-center bg-[#00c4f8] rounded-full px-2 cursor-pointer py-2 ">
            <Image
              src="/ja.png"
              alt="Ohanaweb"
              width={17}
              height={17}
             
            />
          </div>
          </div>
        </div>
      </nav>

   
    </header>
  );
};

export default Navbar;