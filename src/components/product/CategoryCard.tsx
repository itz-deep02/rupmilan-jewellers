"use client";

import { useState } from "react";
import Image from "next/image";
import { Gem } from "lucide-react";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={`/catalogue?type=${category.jewelleryType}`}
      className="snap-start flex-shrink-0 w-[160px] sm:w-[200px] group"
    >
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-3 rounded-full bg-ivory-100 border-2 border-[rgba(160,115,42,0.20)] group-hover:border-brand-gold/40 group-hover:shadow-md transition-all duration-300 overflow-hidden">
        {category.image && !imgError ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 112px, 144px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Gem className="w-5 h-5 text-brand-gold/40" />
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="luxury-heading text-sm sm:text-base font-normal text-brand-heading group-hover:text-brand-gold transition-colors duration-200">
          {category.name}
        </h3>
        <p className="text-[10px] font-sans text-brand-muted mt-0.5">
          {category.productCount}+ Designs
        </p>
      </div>
    </a>
  );
}
