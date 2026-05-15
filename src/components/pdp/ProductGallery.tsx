"use client";

import { useState } from "react";
import Image from "next/image";
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
  const [erroredIndexes, setErroredIndexes] = useState<Set<number>>(new Set());
  const markErrored = (i: number) =>
    setErroredIndexes((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  const activeSrc = images[activeIndex];
  const showActiveImage = activeSrc && !erroredIndexes.has(activeIndex);

  return (
    <>
      <div className="space-y-3">
        {/* Main image */}
        <div
          className="relative aspect-[3/4] bg-ivory-100 rounded-2xl overflow-hidden cursor-zoom-in group border border-[rgba(160,115,42,0.20)]"
          onClick={() => setLightboxOpen(true)}
        >
          {showActiveImage ? (
            <>
              {/* Actual main image (mobile) */}
              <Image
                src={activeSrc}
                alt={`${name} - Image ${activeIndex + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover md:hidden"
                quality={95}
                priority
                onError={() => markErrored(activeIndex)}
              />

              {/* Desktop magnifier overlay hint */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 z-10 pointer-events-none">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Desktop magnifier (hidden on mobile) */}
              <div className="hidden md:block absolute inset-0">
                <ImageMagnifier
                  src={activeSrc}
                  alt={`${name} - Image ${activeIndex + 1}`}
                />
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <Gem className="w-10 h-10 text-brand-gold/30" />
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden transition-all duration-200 border ${
                  i === activeIndex
                    ? "border-brand-gold shadow-md"
                    : "border-[rgba(160,115,42,0.15)] opacity-60 hover:opacity-90 hover:border-brand-gold/40"
                }`}
              >
                {img && !erroredIndexes.has(i) ? (
                  <Image
                    src={img}
                    alt={`${name} - Thumbnail ${i + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                    quality={95}
                    loading="lazy"
                    onError={() => markErrored(i)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-ivory-100 flex items-center justify-center">
                    <Gem className="w-5 h-5 text-brand-gold/30" />
                  </div>
                )}
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
