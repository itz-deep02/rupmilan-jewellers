"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Tag, Layers, Weight, Gem, Package } from "lucide-react";
import type { ExtendedProduct } from "@/types";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";
import ShareButton from "./ShareButton";

interface ProductInfoProps {
  product: ExtendedProduct;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [productUrl, setProductUrl] = useState("");

  useEffect(() => {
    setProductUrl(window.location.href);
  }, []);

  const whatsappUrl = buildProductWhatsAppUrl(product.name, product.tagNumber, productUrl || undefined);

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
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold-400">
          {product.category}
        </span>
        {product.badge && (
          <span
            className={`text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              product.badge === "Bestseller"
                ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                : product.badge === "Trending"
                ? "bg-gold-400/20 text-gold-400 border border-gold-400/30"
                : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product name */}
      <h1 className="luxury-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
        {product.name}
      </h1>

      {/* Decorative line */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px w-10 bg-gradient-to-r from-gold-400/60 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/60" />
        <div className="h-px w-10 bg-gradient-to-l from-gold-400/60 to-transparent" />
      </div>

      {/* Details table */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 mb-6">
        <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-3">
          Product Details
        </h3>
        <div className="space-y-0">
          {details.map((detail, i) => (
            <div
              key={detail.label}
              className={`flex items-center justify-between py-3 ${
                i < details.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <detail.icon className="w-4 h-4 text-gold-400/50" />
                <span className="text-sm font-sans text-white/50">{detail.label}</span>
              </div>
              <span className="text-sm font-sans font-medium text-white/80 capitalize">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      {product.description && (
        <div className="mb-6">
          <h3 className="text-xs font-sans font-medium text-white/40 uppercase tracking-widest mb-2">
            Description
          </h3>
          <p className="text-sm font-sans text-white/60 leading-relaxed">
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
              className="text-[10px] font-sans font-medium text-white/40 border border-white/10 px-2.5 py-1 rounded-full capitalize"
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
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-sans font-semibold text-sm py-3.5 rounded-xl hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-emerald-900/30"
        >
          <MessageCircle className="w-5 h-5" />
          Enquire on WhatsApp
        </a>
        <ShareButton
          title={product.name}
          text={`Check out ${product.name} at Rupmilan Jewellers`}
          url={productUrl || "/"}
        />
      </div>
    </div>
  );
}
