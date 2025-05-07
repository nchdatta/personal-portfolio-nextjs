"use client";

import { NavItems } from "@/lib/constants";
import { Code, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../shared/theme-toggle";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto py-4 px-4 flex justify-between items-center relative">
      <Link href="/" className="text-primary">
        <Code size={24} />
      </Link>

      {/* Desktop Nav */}
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          {NavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground font-medium hover:text-primary transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-muted-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-background border rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden z-50">
          {NavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-muted-foreground font-medium hover:text-primary transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
