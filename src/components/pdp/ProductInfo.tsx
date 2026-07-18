"use client";

import { Tag, Layers, Weight, Gem, Package } from "lucide-react";
import type { ExtendedProduct } from "@/types";
import { buildProductWhatsAppUrl, buildProductPageUrl } from "@/lib/whatsapp";
import ShareButton from "./ShareButton";

interface ProductInfoProps {
  product: ExtendedProduct;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const productUrl = buildProductPageUrl(product.jewelleryType, product.slug, product.tagNumber);

  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.tagNumber, productUrl);

  const details = [
    { label: "Tag No", value: product.tagNumber, icon: Tag },
    { label: "Metal", value: product.metalType, icon: Gem },
    { label: "Carat", value: product.carat, icon: Layers },
    { label: "Weight", value: product.weight, icon: Weight },
    { label: "SKU", value: product.sku, icon: Package },
  ].filter((d) => d.value);

  return (
    <div className="flex flex-col">
      {/* Category badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-gold">
          {product.category}
        </span>
        {product.badge && (
          <span
            className={`text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              product.badge === "Bestseller"
                ? "bg-rose-50 text-rose-600 border border-rose-200"
                : product.badge === "Trending"
                ? "bg-brand-gold/10 text-brand-gold border border-[rgba(160,115,42,0.25)]"
                : "bg-emerald-50 text-emerald-600 border border-emerald-200"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product name */}
      <h1 className="luxury-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-heading mb-4 leading-tight">
        {product.name}
      </h1>

      {/* Decorative line */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px w-10 bg-gradient-to-r from-brand-gold/50 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold/50" />
        <div className="h-px w-10 bg-gradient-to-l from-brand-gold/50 to-transparent" />
      </div>

      {/* Details table */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 mb-6">
        <h3 className="text-xs font-sans font-medium text-brand-muted uppercase tracking-widest mb-3">
          Product Details
        </h3>
        <div className="space-y-0">
          {details.map((detail, i) => (
            <div
              key={detail.label}
              className={`flex items-center justify-between py-3 ${
                i < details.length - 1 ? "border-b border-[rgba(160,115,42,0.12)]" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <detail.icon className="w-4 h-4 text-brand-gold/50" />
                <span className="text-sm font-sans text-brand-muted">{detail.label}</span>
              </div>
              <span className="text-sm font-sans font-medium text-brand-body capitalize">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      {product.description && (
        <div className="mb-6">
          <h3 className="text-xs font-sans font-medium text-brand-muted uppercase tracking-widest mb-2">
            Description
          </h3>
          <p className="text-sm font-sans text-brand-body leading-relaxed">
            {product.description}
          </p>
        </div>
      )}

      {/* Occasion tags */}
      {product.occasion && product.occasion.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {product.occasion.map((occ) => (
            <span
              key={occ}
              className="text-[10px] font-sans font-medium text-brand-muted border border-[rgba(160,115,42,0.20)] px-2.5 py-1 rounded-full capitalize"
            >
              {occ}
            </span>
          ))}
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-sans font-medium text-sm py-3.5 rounded-xl hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-emerald-900/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white flex-shrink-0">
            <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.168.578 4.264 1.676 6.1L4 29l8.09-1.652A12.93 12.93 0 0 0 16.003 28c6.627 0 12.003-5.373 12.003-12.003C28.006 9.371 22.63 3 16.003 3zm6.647 17.08c-.277.78-1.596 1.49-2.22 1.566-.567.07-1.282.1-2.07-.13-.476-.14-1.088-.328-1.87-.643-3.29-1.41-5.44-4.71-5.603-4.93-.163-.22-1.327-1.765-1.327-3.365 0-1.6.839-2.387 1.137-2.71.277-.3.604-.375.806-.375.2 0 .4.002.576.01.185.01.432-.07.676.516.252.603.857 2.087.932 2.24.075.153.125.33.025.53-.1.2-.15.323-.298.497-.148.174-.311.39-.444.523-.148.148-.301.31-.13.608.172.3.765 1.262 1.64 2.044 1.126 1.003 2.075 1.313 2.372 1.46.298.148.472.124.647-.075.174-.198.748-.873.948-1.172.198-.3.397-.25.67-.15.272.1 1.73.816 2.027.965.298.148.496.222.57.347.075.123.075.717-.202 1.497z" />
          </svg>
          Enquire on WhatsApp
        </a>
        <ShareButton
          title={product.name}
          text={`Check out ${product.name} at Rupmilan Jewellers`}
          url={productUrl}
        />
      </div>
    </div>
  );
}
