"use client";

import Link from "next/link";

const navItems = ["home", "about", "experience", "projects", "skills", "contact"];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <span className="text-white">PR</span>
          <span className="text-emerald-400">.</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item} href={`#${item}`} className="hover:text-emerald-400">
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}