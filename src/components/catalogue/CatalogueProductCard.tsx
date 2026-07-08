"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Gem, Camera } from "lucide-react";
import type { ExtendedProduct } from "@/types";
import { buildProductWhatsAppUrl, buildProductPageUrl } from "@/lib/whatsapp";
import RibbonBadge from "./RibbonBadge";

interface CatalogueProductCardProps {
  product: ExtendedProduct;
  index?: number;
}

const metalColors: Record<string, string> = {
  gold: "bg-brand-gold text-white",
  silver: "bg-gray-500 text-white",
  diamond: "bg-blue-500 text-white",
};

export default function CatalogueProductCard({ product, index = 0 }: CatalogueProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = buildProductWhatsAppUrl(
    product.name,
    product.tagNumber,
    buildProductPageUrl(product.jewelleryType, product.slug, product.tagNumber)
  );
  const pdpUrl = `/${product.jewelleryType}/${product.slug}/${product.tagNumber.replace("#", "")}`;
  const showImage = product.image && !imgError;

  return (
    <div
      className="glass-card-hover overflow-hidden group opacity-0 animate-fade-in-up flex flex-col"
      style={{ animationDelay: `${Math.min(index * 50, 300)}ms`, animationFillMode: "forwards" }}
    >
      <Link href={pdpUrl}>
        <div className="relative aspect-[3/4] bg-ivory-100 overflow-hidden">
          {showImage ? (
            <Image
              src={product.image!}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

          <span className={`absolute top-2.5 left-2.5 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full z-10 ${metalColors[product.metalType] || "bg-ivory-100 text-brand-body"}`}>
            {product.metalType}
          </span>

          {product.badge && <RibbonBadge type={product.badge} />}

          <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[9px] font-sans font-medium text-brand-muted bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
            <Camera className="w-2.5 h-2.5" />
            {product.images.length} photos
          </span>
        </div>
      </Link>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <Link href={pdpUrl}>
          <p className="text-[9px] font-sans font-medium text-brand-muted uppercase tracking-widest mb-0.5">
            {product.category}
          </p>
          <h3 className="luxury-heading text-sm sm:text-base font-normal text-brand-heading mb-2.5 leading-snug line-clamp-1 hover:text-brand-gold transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="space-y-0 text-xs font-sans mb-3 flex-1">
          <div className="flex justify-between py-1.5 border-b border-[rgba(160,115,42,0.12)]">
            <span className="text-brand-muted">Tag No:</span>
            <span className="text-brand-body font-medium">{product.tagNumber}</span>
          </div>
          {product.carat && (
            <div className="flex justify-between py-1.5 border-b border-[rgba(160,115,42,0.12)]">
              <span className="text-brand-muted">Carat:</span>
              <span className="text-brand-body font-medium">{product.carat}</span>
            </div>
          )}
          {product.weight && (
            <div className="flex justify-between py-1.5">
              <span className="text-brand-muted">Weight:</span>
              <span className="text-brand-body font-medium">{product.weight}</span>
            </div>
          )}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-auto flex items-center justify-center gap-1.5 w-full bg-brand-gold/10 border border-[rgba(160,115,42,0.30)] text-brand-gold font-sans font-medium text-xs py-2 rounded-xl hover:bg-brand-gold/20 hover:border-brand-gold/50 transition-all duration-200 active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-brand-gold" aria-hidden="true">
            <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
          </svg>
          Ask Price
        </a>
      </div>
    </div>
  );
}
