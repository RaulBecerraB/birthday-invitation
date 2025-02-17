"use client";
import React from "react";
import Link from "next/link";
import links from "./navlinks.json";

export default function NavBar() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 mb-8">
      <div className="bg-white shadow-md shadow-black/20 rounded-[20px] p-2">
        <div className="mx-auto flex justify-center items-center py-3 px-8">
          <div className="flex justify-center space-x-12">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <h2 className="text-[#1e3a8a] text-lg font-semibold hover:opacity-80 transition">
                  {link.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
