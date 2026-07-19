"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/about" },
  { name: "Contato", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-dark-bg border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2"
          >
            🧠 MN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Search & Theme */}
          <div className="flex items-center gap-4">
            <Link
              href="/search"
              aria-label="Buscar"
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
            >
              🔍
            </Link>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
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
