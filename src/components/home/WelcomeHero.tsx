"use client";

import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WelcomeHero() {
  return (
    <section className="relative overflow-hidden mb-10 sm:mb-14">
      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      <div className="relative text-center py-14 sm:py-20 lg:py-24 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-gold-400 text-xs sm:text-sm font-sans font-medium tracking-wide">
            Exquisite Craftsmanship Since 1988
          </span>
        </div>

        {/* Heading */}
        <h1 className="luxury-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2 sm:mb-3 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
          Welcome to
        </h1>
        <h2 className="luxury-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-400 leading-tight mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
          Rupmilan Jewellers
        </h2>

        {/* Description */}
        <p className="text-white/60 text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
          Discover our curated collection of handcrafted gold &amp; silver jewellery. Each piece tells a story of tradition and artistry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
          <Link
            href="/catalogue"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-sans font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
          >
            View Catalogue
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+919826540190"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-gold-400/40 hover:border-gold-400 text-gold-400 hover:text-gold-300 font-sans font-semibold text-sm sm:text-base rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-gold-400/10 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Subtle decorative line */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400/30" />
        </div>
      </div>
    </section>
  );
}
