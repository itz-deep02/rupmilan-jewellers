import { Gem } from "lucide-react";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <a
      href={`/catalogue?category=${category.slug}`}
      className="snap-start flex-shrink-0 w-[160px] sm:w-[200px] group"
    >
      {/* Circular image */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-3 rounded-full bg-gradient-to-br from-gold-900/40 via-stone-800/60 to-amber-950/40 border-2 border-white/15 group-hover:border-gold-400/40 transition-all duration-300 flex items-center justify-center overflow-hidden group-hover:scale-105">
        <div className="w-10 h-10 rounded-full bg-gold-400/15 flex items-center justify-center">
          <Gem className="w-5 h-5 text-gold-400/50" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h3 className="luxury-heading text-sm sm:text-base font-semibold text-white group-hover:text-gold-300 transition-colors duration-200">
          {category.name}
        </h3>
        <p className="text-[10px] font-sans text-white/40 mt-0.5">
          {category.productCount}+ Designs
        </p>
      </div>
    </a>
  );
}
