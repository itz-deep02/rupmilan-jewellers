"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, Info, Phone } from "lucide-react";

const tabs = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/catalogue", icon: Grid3X3, label: "Catalogue" },
  { href: "/about", icon: Info, label: "About" },
  { href: "/contact", icon: Phone, label: "Contact" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  const handleClick = (href: string) => {
    if (href === "/" && pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-ivory border-t border-[rgba(160,115,42,0.20)] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16 pb-[env(safe-area-inset-bottom)]">
        {tabs.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => handleClick(href)}
              className={`relative flex flex-col items-center gap-1 px-3 py-2 transition-colors duration-200 ${
                isActive ? "text-brand-gold" : "text-brand-muted hover:text-brand-body"
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-brand-gold" />
              )}
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-sans font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
