"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

const SEARCH_WORDS = ["Gold", "Silver", "Diamond", "Platinum"];

export default function AnimatedSearchBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SEARCH_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isFocused]);

  return (
    <div className="relative flex items-center" style={{ width: "clamp(7rem, 15vw, 13rem)" }}>
      <Search className="absolute left-3 w-4 h-4 text-white/40 pointer-events-none z-10" />
      <input
        ref={inputRef}
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pl-9 pr-3 py-2 text-sm font-sans text-white/90 bg-white/10 border border-white/20 rounded-full placeholder:text-white/30 focus:outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-200"
        placeholder={isFocused ? "Search..." : undefined}
      />
      {!isFocused && (
        <div className="absolute left-9 top-1/2 -translate-y-1/2 h-5 overflow-hidden pointer-events-none">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 20}px)` }}
          >
            {SEARCH_WORDS.map((word) => (
              <div key={word} className="h-5 flex items-center text-sm text-white/40 font-sans whitespace-nowrap">
                <span className="hidden sm:inline">Search for&nbsp;</span>{word}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
