"use client";

import Link from "next/link";
import { Gem } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/contact" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-md group-hover:shadow-gold-400/40 transition-shadow duration-300">
              <Gem className="w-5 h-5 text-amber-950" />
            </div>
            <span className="luxury-heading text-lg font-semibold text-gold-300 group-hover:text-gold-200 transition-colors duration-200">
              Rupmilan Jewellers
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm font-medium text-white/80 hover:text-gold-300 transition-colors duration-200 border-b-2 border-gold-400 pb-0.5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
