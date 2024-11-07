"use client";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="header-background">
      <a href="/" className="flex">
        <Image
          src="/logo.png"
          alt="Logo"
          className="logo-image"
        />
      </a>

      <div className="nav-links">
        <Link href="/" className="nav-link nav-link-md">
          Home
        </Link>
        <Link href="/projects" className="nav-link nav-link-md">
          Projects
        </Link>
        <Link href="/about" className="nav-link nav-link-md">
          About
        </Link>
        <Link href="/contact" className="nav-link nav-link-md">
          Contact
        </Link>
      </div>

      <Sheet>
        <SheetTrigger className="menu-button">
          <Menu color="#ffffff" />
        </SheetTrigger>
        <SheetContent className="sheet-content">
          <Link href="/" className="sheet-link">
            Home
          </Link>
          <Link href="/projects" className="sheet-link">
            Projects
          </Link>
          <Link href="/about" className="sheet-link">
            About
          </Link>
          <Link href="/contact" className="sheet-link">
            Contact
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  );
}
