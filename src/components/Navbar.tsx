"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <nav className="sticky top-0 z-40 bg-ivory border-b border-[rgba(160,115,42,0.20)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full overflow-hidden shadow-md group-hover:shadow-gold-400/40 transition-shadow duration-300 flex-shrink-0">
              <Image src="/icon.png" alt="Rupmilan Jewellers Logo" width={72} height={72} className="w-full h-full object-cover" priority unoptimized />
            </div>
            <div className="flex flex-col">
              <span className="brand-name text-lg font-semibold text-brand-gold leading-tight">
                Rupmilan Jewellers
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium text-brand-muted tracking-widest uppercase leading-tight">
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
                  className={`text-sm font-medium font-sans transition-colors duration-200 ${
                    isActive
                      ? "text-brand-gold border-b-2 border-brand-gold pb-0.5"
                      : "text-brand-muted hover:text-brand-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Search — hidden on contact & about pages */}
          {pathname !== "/contact" && pathname !== "/about" && (
            <AnimatedSearchBar />
          )}
        </div>
      </div>
    </nav>
  );
}
