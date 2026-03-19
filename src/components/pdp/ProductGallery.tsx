"use client";

import { useState } from "react";
import { Gem, ZoomIn } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import ImageMagnifier from "./ImageMagnifier";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="space-y-3">
        {/* Main image */}
        <div
          className="relative aspect-[3/4] bg-gradient-to-br from-gold-900/40 via-stone-800/60 to-amber-950/40 rounded-2xl overflow-hidden cursor-zoom-in group"
          onClick={() => setLightboxOpen(true)}
        >
          {/* Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gold-400/15 flex items-center justify-center">
              <Gem className="w-10 h-10 text-gold-400/40" />
            </div>
          </div>

          {/* Desktop magnifier overlay hint */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 z-10 pointer-events-none">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Desktop magnifier (hidden on mobile) */}
          <div className="hidden md:block absolute inset-0">
            <ImageMagnifier
              src={images[activeIndex] || ""}
              alt={`${name} - Image ${activeIndex + 1}`}
            />
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                  i === activeIndex
                    ? "ring-2 ring-gold-400 ring-offset-2 ring-offset-stone-900"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-900/40 via-stone-800/60 to-amber-950/40 flex items-center justify-center">
                  <Gem className="w-4 h-4 text-gold-400/30" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        name={name}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={activeIndex}
      />
    </>
  );
}
