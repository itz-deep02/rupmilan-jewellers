"use client";

import Link from "next/link";
import Image from "next/image";
import { Gem, Camera } from "lucide-react";
import type { ExtendedProduct } from "@/types";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: ExtendedProduct;
}

const badgeColors: Record<string, string> = {
  Bestseller: "bg-brand-gold text-white",
  New: "bg-emerald-600 text-white",
  Trending: "bg-rose-500 text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.tagNumber);
  const pdpUrl = `/${product.jewelleryType}/${product.slug}/${product.tagNumber.replace("#", "")}`;

  return (
    <div className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] glass-card-hover p-3 flex flex-col group">
      {/* Clickable image area → PDP */}
      <Link href={pdpUrl}>
        <div className="relative aspect-[3/4] bg-ivory-100 rounded-xl overflow-hidden mb-3">
          {/* Placeholder (shows when no image or while loading) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center">
              <Gem className="w-7 h-7 text-brand-gold/30" />
            </div>
          </div>
          {/* Actual image */}
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 240px, 280px"
              className="object-cover group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
              loading="lazy"
            />
          )}

          {product.badge && (
            <span className={`absolute top-2 left-2 text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10 ${badgeColors[product.badge] || "bg-ivory-100 text-brand-body"}`}>
              {product.badge}
            </span>
          )}

          {/* Photo count */}
          {product.images && product.images.length > 0 && (
            <span className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-sans font-medium text-brand-muted bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
              <Camera className="w-2.5 h-2.5" />
              {product.images.length} photos
            </span>
          )}
        </div>
      </Link>

      <div className="flex-1 flex flex-col px-1">
        {/* Clickable name → PDP */}
        <Link href={pdpUrl}>
          <p className="text-[10px] font-sans font-medium text-brand-muted uppercase tracking-widest mb-1">
            {product.category}
          </p>
          <h3 className="luxury-heading text-base font-normal text-brand-heading mb-3 leading-snug line-clamp-2 group-hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-auto w-full text-center bg-brand-gold/10 border border-[rgba(160,115,42,0.30)] text-brand-gold font-sans font-medium text-sm py-2.5 rounded-xl hover:bg-brand-gold/20 hover:border-brand-gold/50 transition-all duration-200 active:scale-[0.98]"
        >
          Ask Price
        </a>
      </div>
    </div>
  );
}
