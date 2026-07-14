"use client";

import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const callNumbers = [
  { number: "+919826540190", display: "+91 98265 40190" },
  { number: "+919926514690", display: "+91 99265 14690" },
];

export default function WelcomeHero() {
  const [callOpen, setCallOpen] = useState(false);
  const callRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!callOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (callRef.current && !callRef.current.contains(e.target as Node)) {
        setCallOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callOpen]);

  return (
    <section className="relative overflow-hidden mb-10 sm:mb-14">
      <div className="relative text-center py-14 sm:py-20 lg:py-24 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivory-100 border border-[rgba(160,115,42,0.20)] mb-6 sm:mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="text-brand-gold-light text-xs sm:text-sm font-sans font-medium tracking-wide">
            Exquisite Craftsmanship Since 1988
          </span>
        </div>

        {/* Heading */}
        <h1 className="luxury-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-brand-heading leading-tight mb-2 sm:mb-3 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
          Welcome to
        </h1>
        <h2 className="brand-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-brand-gold leading-tight mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
          Rupmilan Jewellers
        </h2>

        {/* Description */}
        <p className="text-brand-body text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
          Discover our curated collection of handcrafted gold &amp; silver jewellery. Each piece tells a story of tradition and artistry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
          <Link
            href="/catalogue"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gold hover:bg-gold-600 text-white font-sans font-medium text-sm sm:text-base rounded-full shadow-lg shadow-brand-gold/20 hover:shadow-xl transition-all duration-300"
          >
            View Catalogue
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <div ref={callRef} className="relative">
            <button
              type="button"
              onClick={() => setCallOpen((open) => !open)}
              aria-expanded={callOpen}
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(160,115,42,0.30)] hover:border-brand-gold text-brand-gold hover:bg-brand-gold/5 font-sans font-medium text-sm sm:text-base rounded-full transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            {callOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-20 w-56 rounded-2xl bg-white border border-[rgba(160,115,42,0.25)] shadow-xl shadow-brand-gold/10 overflow-hidden">
                {callNumbers.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number}`}
                    className="flex items-center gap-2.5 px-5 py-3.5 text-brand-gold hover:bg-brand-gold/5 font-sans font-medium text-sm transition-colors border-b border-[rgba(160,115,42,0.12)] last:border-b-0"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {p.display}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subtle decorative line */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/30" />
        </div>
      </div
