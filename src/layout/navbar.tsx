"use client";

import React, { useState } from "react";

// Simple, clean navbar with:
// - White background
// - Dummy logo and nav links
// - CTA button with #00c7f1 and hover #043e7e
// - Search icon that toggles a smooth dropdown search field beneath the nav

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="relative w-full bg-white shadow-sm">
      {/* Top bar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Ohanaweb
            </span>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </li>
          </ul>

          {/* Actions: search + CTA */}
          <div className="flex items-center gap-3">
            {/* Search toggle */}
            <button
              type="button"
              aria-label="Toggle search"
              onClick={() => setShowSearch((v) => !v)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            >
              {/* Search icon (magnifying glass) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm8.28 12.22a1 1 0 0 1 1.42 1.42l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5z" />
              </svg>
            </button>

            {/* CTA button */}
            <a
              href="#"
              className="inline-flex items-center justify-center h-10 px-4 rounded-md text-white bg-[#00c7f1] hover:bg-[#043e7e] transition-colors font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Search dropdown (beneath nav, overlayed so it doesn't shift page layout) */}
      <div
        className={
          "pointer-events-none absolute left-0 right-0 top-full z-20 transition-[max-height,opacity] duration-300 mt-2 ease-out" +
          (showSearch ? " max-h-28 " : " max-h-0 opacity-0")
        }
        aria-hidden={!showSearch}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-b-md border border-t-0 border-gray-200 bg-white shadow-sm pointer-events-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex items-center gap-2 p-3"
            >
              <div className="relative flex-1 min-w-0">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c7f1] focus:border-transparent"
                />
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm8.28 12.22a1 1 0 0 1 1.42 1.42l-3.5 3.5a1 1 0 0 1-1.42-1.42l3.5-3.5z" />
                  </svg>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="whitespace-nowrap rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;