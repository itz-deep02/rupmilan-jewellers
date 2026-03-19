"use client";

import { Gem } from "lucide-react";
import type { Product } from "@/types";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

const badgeColors: Record<string, string> = {
  Bestseller: "bg-gold-400 text-amber-950",
  New: "bg-emerald-500 text-white",
  Trending: "bg-rose-500 text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.tagNumber);

  return (
    <div className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] glass-card-hover p-3 flex flex-col">
      {/* Image area */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-gold-900/40 via-stone-800/60 to-amber-950/40 rounded-xl overflow-hidden mb-3">
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gold-400/15 flex items-center justify-center">
            <Gem className="w-7 h-7 text-gold-400/40" />
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2 left-2 text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColors[product.badge] || "bg-white/20 text-white"}`}>
            {product.badge}
          </span>
        )}

        {/* Tag number */}
        <span className="absolute top-2 right-2 text-[10px] font-sans font-medium text-white/70 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {product.tagNumber}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col px-1">
        <p className="text-[10px] font-sans font-medium text-white/40 uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="luxury-heading text-base font-semibold text-white mb-3 leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full text-center bg-gradient-to-r from-gold-400/20 to-gold-500/20 border border-gold-400/40 text-gold-300 font-sans font-medium text-sm py-2.5 rounded-xl hover:from-gold-400/30 hover:to-gold-500/30 hover:text-gold-200 hover:border-gold-400/60 transition-all duration-200 active:scale-[0.98]"
        >
          Ask Price
        </a>
      </div>
    </div>
  );
}
