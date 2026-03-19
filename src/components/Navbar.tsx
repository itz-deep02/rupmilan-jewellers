"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gem } from "lucide-react";
import AnimatedSearchBar from "@/components/ui/AnimatedSearchBar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-md group-hover:shadow-gold-400/40 transition-shadow duration-300">
              <Gem className="w-5 h-5 text-amber-950" />
            </div>
            <div className="flex flex-col">
              <span className="luxury-heading text-lg font-semibold text-gold-300 group-hover:text-gold-200 transition-colors duration-200 leading-tight">
                Rupmilan Jewellers
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium text-white/40 tracking-widest uppercase leading-tight">
                Since 1988
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 flex-shrink-0">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-gold-300 border-b-2 border-gold-400 pb-0.5"
                      : "text-white/70 hover:text-gold-300"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Search */}
          <AnimatedSearchBar />
        </div>
      </div>
    </nav>
  );
}
