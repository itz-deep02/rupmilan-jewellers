"use client";

import Link from "next/link";
import { Gem, Camera, MessageCircle } from "lucide-react";
import type { ExtendedProduct } from "@/types";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";
import RibbonBadge from "./RibbonBadge";

interface CatalogueProductCardProps {
  product: ExtendedProduct;
  index?: number;
}

const metalColors: Record<string, string> = {
  gold: "bg-gold-400/90 text-amber-950",
  silver: "bg-gray-300/90 text-gray-900",
  diamond: "bg-blue-300/90 text-blue-950",
};

export default function CatalogueProductCard({ product, index = 0 }: CatalogueProductCardProps) {
  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.tagNumber);
  const pdpUrl = `/${product.jewelleryType}/${product.slug}/${product.tagNumber.replace("#", "")}`;

  return (
    <div
      className="glass-card-hover overflow-hidden group opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationFillMode: "forwards" }}
    >
      {/* Image */}
      <Link href={pdpUrl}>
        <div className="relative aspect-[3/4] bg-gradient-to-br from-gold-900/40 via-stone-800/60 to-amber-950/40 overflow-hidden">
          {/* Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-gold-400/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Gem className="w-7 h-7 text-gold-400/40" />
            </div>
          </div>

          {/* Metal type badge - top left */}
          <span className={`absolute top-2.5 left-2.5 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full z-10 ${metalColors[product.metalType] || "bg-white/20 text-white"}`}>
            {product.metalType}
          </span>

          {/* Photo count - top right */}
          <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[9px] font-sans font-medium text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
            <Camera className="w-2.5 h-2.5" />
            {product.images.length}
          </span>

          {/* Ribbon badge */}
          {product.badge && <RibbonBadge type={product.badge} />}
        </div>
      </Link>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <Link href={pdpUrl}>
          <p className="text-[9px] font-sans font-medium text-white/40 uppercase tracking-widest mb-0.5">
            {product.category}
          </p>
          <h3 className="luxury-heading text-sm sm:text-base font-semibold text-white mb-2.5 leading-snug line-clamp-1 hover:text-gold-300 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Details table */}
        <div className="space-y-0 text-xs font-sans mb-3">
          <div className="flex justify-between py-1.5 border-b border-white/10">
            <span className="text-white/40">Tag No:</span>
            <span className="text-white/70 font-medium">{product.tagNumber}</span>
          </div>
          {product.carat && (
            <div className="flex justify-between py-1.5 border-b border-white/10">
              <span className="text-white/40">Carat:</span>
              <span className="text-white/70 font-medium">{product.carat}</span>
            </div>
          )}
          {product.weight && (
            <div className="flex justify-between py-1.5">
              <span className="text-white/40">Weight:</span>
              <span className="text-white/70 font-medium">{product.weight}</span>
            </div>
          )}
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-gold-400/20 to-gold-500/20 border border-gold-400/40 text-gold-300 font-sans font-medium text-xs py-2 rounded-xl hover:from-gold-400/30 hover:to-gold-500/30 hover:text-gold-200 hover:border-gold-400/60 transition-all duration-200 active:scale-[0.98]"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Ask Price
        </a>
      </div>
    </div>
  );
}
