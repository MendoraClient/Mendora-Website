"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full z-30 fixed top-0 left-0 bg-zinc-900/90 border-b border-zinc-800 backdrop-blur-lg shadow-md">
      <div
        className="
          relative z-10
          px-3 sm:px-6 py-2 sm:py-1
          w-full max-w-6xl mx-auto
          rounded-lg
          flex flex-col gap-2
        "
      >
        {/* Brand and Desktop Links */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo and Name */}
          <Link href="/">
            <div className="flex gap-2 items-center group">
              <Image
                src="/mendora.png"
                width={48}
                height={48}
                quality={100}
                alt="Mendora Client Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 border border-zinc-800  shadow transition"
              />
              <h1 className="font-zen-dots text-lg sm:text-xl text-white font-semibold tracking-widest uppercase">
                Mendora
              </h1>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="font-geo flex gap-2 lg:gap-4 items-center">
            {[
              { href: "/faq", label: "FAQ" },
              { href: "/about", label: "About" },
              { href: "/showcase", label: "Showcase" },
              { href: "/docs", label: "Documentation" },
            ].map((item) => (
              <Button
                asChild
                key={item.href}
                variant="ghost"
                className="text-white hover:text-zinc-300 hover:bg-transparent px-1 py-0.5 font-mono tracking-wide uppercase transition"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button
              asChild
              className="ml-2 bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 transition font-space-mono rounded-[6px] px-3 py-1 shadow"
            >
              <Link href="/download">Download</Link>
            </Button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <Image
                src="/mendora.png"
                width={36}
                height={36}
                alt="Mendora Client Logo"
                className="w-9 h-9 border border-zinc-800 rounded-md bg-zinc-800"
                quality={100}
              />
              <h1 className="font-zen-dots text-base text-white font-semibold tracking-widest uppercase">
                Mendora
              </h1>
            </div>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:text-zinc-200 hover:bg-zinc-800 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        {/* Animated Mobile Menu */}
        <div
          className={`
            md:hidden transition-all duration-500 ease-in-out overflow-hidden
            ${isMenuOpen ? "max-h-58 opacity-100 mt-2" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-2  border-t border-zinc-700 bg-zinc-900/90 rounded-lg shadow">
            {[
              { href: "/faq", label: "FAQ" },
              { href: "/about", label: "About" },
              { href: "/showcase", label: "Showcase" },
              { href: "/docs", label: "Documentation" },
            ].map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="text-white hover:text-zinc-300 justify-start px-2 py-2 font-mono uppercase tracking-widest"
                onClick={closeMenu}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button
              asChild
              className="mt-2 bg-zinc-800 text-white border border-zinc-700 rounded-[6px] px-3 py-2 font-space-mono tracking-wide shadow hover:bg-zinc-700 transition"
              onClick={closeMenu}
            >
              <Link href="/download">Download</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
