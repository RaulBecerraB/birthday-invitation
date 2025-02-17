"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "./navlinks.json";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 mb-8">
      <div className="bg-white shadow-md shadow-black/20 rounded-[20px] p-2">
        <div className="mx-auto px-8 relative">
          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 relative z-50"
            aria-label="Menu"
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>

          {/* Navigation links */}
          <div className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            md:flex justify-center items-center
            md:relative fixed inset-0
            bg-white md:bg-transparent
            z-40 md:z-auto
            h-screen md:h-auto
          `}>
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 items-center">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <h2
                    className={`text-2xl md:text-lg font-semibold transition px-3 py-1 rounded-md
                      ${pathname === link.href
                        ? 'bg-primary text-white'
                        : 'text-[#1e3a8a] hover:opacity-80'
                      }`}
                  >
                    {link.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
