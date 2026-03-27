"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { href: "#about", label: "A propos" },
  { href: "#projects", label: "Projets" },
  { href: "#stages", label: "Stages" },
  { href: "#e5", label: "Epreuve E5" },
  { href: "#veille", label: "Veille" },
  { href: "#perspectives", label: "Perspectives" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-lg backdrop-blur-xl border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight gradient-text">
            MM.
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/cv"
              className="ml-3 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-dark transition-colors"
            >
              <FileText size={14} />
              CV
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-card transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-card-border mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-card"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-accent"
            >
              <FileText size={14} />
              Mon CV
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
