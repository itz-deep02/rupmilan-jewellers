"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpDown, Check } from "lucide-react";
import type { SortOption } from "@/types";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "newest", label: "Newest" },
  { value: "carat-high", label: "Carat: High to Low" },
  { value: "carat-low", label: "Carat: Low to High" },
  { value: "weight-high", label: "Weight: High to Low" },
  { value: "weight-low", label: "Weight: Low to High" },
  { value: "name-asc", label: "Name A-Z" },
  { value: "name-desc", label: "Name Z-A" },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const selectedLabel = sortOptions.find((o) => o.value === value)?.label || "Popular";

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-ivory-100 transition-colors"
      >
        <ArrowUpDown className="w-3.5 h-3.5 text-brand-muted" />
        <span className="text-xs font-sans text-brand-body">{selectedLabel}</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-[rgba(160,115,42,0.20)] rounded-xl shadow-lg py-1 z-50">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between w-full px-3.5 py-2.5 text-left text-xs font-sans transition-colors ${
                value === opt.value
                  ? "text-brand-gold bg-brand-gold/5 font-medium"
                  : "text-brand-body hover:bg-ivory-100"
              }`}
            >
              {opt.label}
              {value === opt.value && <Check className="w-3.5 h-3.5 text-brand-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
