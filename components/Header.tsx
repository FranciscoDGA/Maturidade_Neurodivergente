"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Teste TDAH", href: "/teste-tdah" },
  { name: "Contato", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-50/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-neutral-200 dark:border-dark-border transition-colors duration-500">
      <nav className="w-full mx-auto px-6 sm:px-12 py-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="group font-display font-light text-neutral-900 dark:text-white flex items-center gap-1.5 focus:outline-none"
          >
            <span className="font-bold tracking-tight">Maturidade</span>
            <span className="text-neutral-500 font-normal">Neurodivergente</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right side - Theme & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden text-neutral-500 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-neutral-200 dark:border-dark-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-lg font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
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
