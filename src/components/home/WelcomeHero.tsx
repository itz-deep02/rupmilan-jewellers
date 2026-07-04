"use client";

import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WelcomeHero() {
  return (
    <section className="relative overflow-hidden mb-4 sm:mb-6">
      <div className="relative text-center pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 px-4">
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
          <a
            href="tel:+919826540190"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-[rgba(160,115,42,0.30)] hover:border-brand-gold text-brand-gold hover:bg-brand-gold/5 font-sans font-medium text-sm sm:text-base rounded-full transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>

        {/* Subtle decorative line */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/30" />
        </div>
      </div>
    </section>
  );
}
