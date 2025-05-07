"use client";

import { Code } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../shared/theme-toggle";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container mx-auto py-4 px-4 flex justify-between items-center">
      <Link href="/" className="text-primary">
        <Code size={24} />
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-primary font-medium"
              : "text-muted-foreground font-medium hover:text-primary transition-colors"
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "text-primary font-medium"
              : "text-muted-foreground font-medium hover:text-primary transition-colors"
          }
        >
          About
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "text-primary font-medium"
              : "text-muted-foreground font-medium hover:text-primary transition-colors"
          }
        >
          Contact
        </Link>
        <Link
          href="/hire-me"
          className={
            pathname === "/hire-me"
              ? "text-primary font-medium"
              : "text-muted-foreground font-medium hover:text-primary transition-colors"
          }
        >
          Hire me
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
