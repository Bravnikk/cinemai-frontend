"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = ["Home", "Films", "Series", "My List"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 sm:h-[68px] px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="group flex items-center gap-2 sm:gap-2.5 no-underline">
          <Image
            src="/logo.jpg"
            alt="Cinemai logo"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-md sm:rounded-lg object-cover drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.55)]"
            priority
          />
          <span className="text-lg sm:text-xl font-bold tracking-[0.12em] sm:tracking-[0.14em] uppercase bg-gradient-to-br from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Cinemai
          </span>
        </a>

        {/* Desktop Nav links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="group relative block px-4 py-1.5 text-sm font-medium tracking-wide text-white/70 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200"
              >
                {label}
                <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-white to-neutral-400 rounded-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            /* Close (X) Icon */
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl px-4 py-3">
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
