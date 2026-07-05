"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { searchProducts, correctQuery } from "@/lib/products";
import type { ExtendedProduct } from "@/types";

const SEARCH_WORDS = ["Necklaces", "Earrings", "Rings", "Bangles", "Chains", "Jhumka", "Mangalsutra", "Gol Haar"];

export default function AnimatedSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ExtendedProduct[]>([]);
  const [corrected, setCorrected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [animIndex, setAnimIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Rotating placeholder animation
  useEffect(() => {
    if (isFocused) return;
    const interval = setInterval(() => {
      setAnimIndex((prev) => (prev + 1) % SEARCH_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isFocused]);

  // Live search
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const fixed = correctQuery(query);
    setCorrected(fixed);
    const found = searchProducts(query, 6);
    setResults(found);
    setIsOpen(true);
    setActiveIndex(-1);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useCallback((q: string) => {
    if (!q.trim()) return;
    const original = q.trim().toLowerCase();
    const fixed = correctQuery(q);
    setIsOpen(false);
    setQuery("");
    const url = fixed !== original
      ? `/catalogue?q=${encodeURIComponent(fixed)}&oq=${encodeURIComponent(original)}`
      : `/catalogue?q=${encodeURIComponent(fixed)}`;
    router.push(url);
  }, [router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (activeIndex >= 0 && results[activeIndex]) {
        const p = results[activeIndex];
        const url = `/${p.jewelleryType}/${p.slug}/${p.tagNumber.replace("#", "")}`;
        setIsOpen(false);
        setQuery("");
        router.push(url);
      } else {
        navigate(query);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const handleResultClick = (product: ExtendedProduct) => {
    const url = `/${product.jewelleryType}/${product.slug}/${product.tagNumber.replace("#", "")}`;
    setIsOpen(false);
    setQuery("");
    router.push(url);
  };

  const handleViewAll = () => navigate(query);

  return (
    <div ref={containerRef} className="relative flex items-center" style={{ width: "clamp(7rem, 15vw, 13rem)" }}>
      <Search className="absolute left-3 w-4 h-4 text-brand-muted pointer-events-none z-10" />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className="w-full pl-9 pr-7 py-2 text-sm font-sans text-brand-heading bg-ivory-100 border border-[rgba(160,115,42,0.20)] rounded-full placeholder:text-brand-muted focus:outline-none focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/20 transition-all duration-200"
        placeholder={isFocused ? "Search products..." : undefined}
      />

      {/* Clear button */}
      {query && (
        <button
          onClick={() => { setQuery(""); setResults([]); setIsOpen(false); inputRef.current?.focus(); }}
          className="absolute right-3 w-4 h-4 text-brand-muted hover:text-brand-gold transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Rotating placeholder */}
      {!isFocused && !query && (
        <div className="absolute left-9 top-1/2 -translate-y-1/2 h-5 overflow-hidden pointer-events-none">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${animIndex * 20}px)` }}
          >
            {SEARCH_WORDS.map((word) => (
              <div key={word} className="h-5 flex items-center text-sm text-brand-muted font-sans whitespace-nowrap">
                <span className="hidden sm:inline">Search for&nbsp;</span>{word}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-xl z-50 overflow-hidden w-[280px]">
          {results.length > 0 ? (
            <>
              <ul>
                {results.map((product, i) => (
                  <li key={product.id}>
                    <button
                      onMouseDown={(e) => { e.preventDefault(); handleResultClick(product); }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        i === activeIndex ? "bg-brand-gold/10" : "hover:bg-ivory-100"
                      }`}
                    >
                      <Search className="w-3.5 h-3.5 text-brand-muted flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-sans text-brand-heading truncate">{product.name}</p>
                        <p className="text-[10px] font-sans text-brand-muted capitalize">
                          {product.jewelleryType} · {product.metalType} · {product.carat}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[rgba(160,115,42,0.12)]">
                {corrected !== query.toLowerCase().trim() && (
                  <p className="px-4 pt-2.5 text-[10px] font-sans text-brand-muted text-center">
                    Showing results for <span className="text-brand-gold font-medium">&ldquo;{corrected}&rdquo;</span>
                  </p>
                )}
                <button
                  onMouseDown={(e) => { e.preventDefault(); handleViewAll(); }}
                  className="w-full px-4 py-2.5 text-xs font-sans font-medium text-brand-gold hover:bg-brand-gold/5 transition-colors text-center"
                >
                  View all results for &quot;{corrected || query}&quot;
                </button>
              </div>
            </>
          ) : (
            <div className="px-4 py-5 text-center">
              <p className="text-sm font-sans text-brand-muted">No products found for &quot;{query}&quot;</p>
              <p className="text-xs font-sans text-brand-muted/60 mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
