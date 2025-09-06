"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 199, 241, 0.5), 0 0 10px rgba(0, 199, 241, 0.3), 0 0 15px rgba(0, 199, 241, 0.2);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 199, 241, 0.8), 0 0 20px rgba(0, 199, 241, 0.6), 0 0 30px rgba(0, 199, 241, 0.4);
          }
        }
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <header className="relative w-full bg-white shadow-lg border-b border-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2 select-none">
              <div className="h-10 sm:h-12 md:h-14 lg:h-20 flex items-center">
                <Image
                  src="/logo/Ohana Blue.png"
                  alt="Ohanaweb"
                  width={120}
                  height={70}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>

            <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {[
                { href: "#home", label: "Home" },
                { href: "#stats", label: "Stats" },
                { href: "#about", label: "About" },
                { href: "#approach", label: "Approach" },
                { href: "#performance", label: "Performance" },
                // { href: "#seo-sem", label: "SEO/SEM" },
                // { href: "#analytics", label: "Analytics" },
                { href: "#vision", label: "Vision" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#successful-projects", label: "Successful Projects" },
                { href: "#why-choose-us", label: "Why Choose Us" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = item.href.replace('#', '');
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="relative text-gray-700 hover:text-[#00c7f1] transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#00c7f1] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden sm:inline-flex items-center justify-center py-3 px-7 rounded-xs text-white  bg-[#00c7f1] to-[#00a8d1] transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 glow-animation"
              >
                Get Started
              </a>
              
              <div className="w-8 h-8  bg-[#00c4f8] to-[#00a8d1] rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                <Image
                  src="/ja.png"
                  alt="Language"
                  width={18}
                  height={18}
                  
                />
              </div>

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#00c7f1] hover:bg-gray-50 transition-all duration-300"
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2 ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'max-h-96 opacity-100 visible'
                : 'max-h-0 opacity-0 invisible'
            } overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
              {[
                { href: "#home", label: "Home" },
                { href: "#stats", label: "Stats" },
                { href: "#about", label: "About" },
                { href: "#approach", label: "Approach" },
                { href: "#performance", label: "Performance" },
                // { href: "#seo-sem", label: "SEO/SEM" },
                // { href: "#analytics", label: "Analytics" },
                { href: "#vision", label: "Vision" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#successful-projects", label: "Successful Projects" },
                { href: "#why-choose-us", label: "Why Choose Us" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#00c7f1] hover:bg-gray-50 rounded-md transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const id = item.href.replace('#', '');
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#home"
                  className="block w-full text-center py-3 px-6 rounded-lg text-white bg-gradient-to-r from-[#00c7f1] to-[#00a8d1] hover:from-[#043e7e] hover:to-[#032d5a] transition-all duration-300 font-semibold shadow-lg glow-animation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;