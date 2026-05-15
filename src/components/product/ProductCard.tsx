"use client";

import { useState } from "react";
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
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.tagNumber);
  const pdpUrl = `/${product.jewelleryType}/${product.slug}/${product.tagNumber.replace("#", "")}`;
  const showImage = product.image && !imgError;

  return (
    <div className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] glass-card-hover p-3 flex flex-col group">
      {/* Clickable image area → PDP */}
      <Link href={pdpUrl}>
        <div className="relative aspect-[3/4] bg-ivory-100 rounded-xl overflow-hidden mb-3">
          {showImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 240px, 280px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              quality={95}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <Gem className="w-7 h-7 text-brand-gold/30" />
              </div>
            </div>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-brand-gold inline-block mr-1.5 -mt-0.5" aria-hidden="true">
            <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
          </svg>
          Ask Price
        </a>
      </div>
    </div>
  );
}
