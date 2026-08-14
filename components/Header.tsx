"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-slate-800 transition-colors duration-300">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="group text-xl sm:text-2xl font-black tracking-tighter text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-1 flex items-center gap-1 min-w-0"
          >
            <span className="text-primary-600 dark:text-primary-500 font-extrabold tracking-tight">M</span>
            <span className="text-neutral-900 dark:text-white font-light tracking-widest uppercase text-[10px] sm:text-xs md:text-sm mt-1 truncate">Neurodivergente</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-slate-800/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full px-4 py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Theme & Mobile Menu */}
          <div className="flex items-center gap-2">
            <div className="hover:bg-neutral-100 dark:hover:bg-slate-800/50 rounded-full transition-all">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-slate-800/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-2.5 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 dark:border-slate-800 pb-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-base font-semibold text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-slate-800/50 rounded-xl transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
