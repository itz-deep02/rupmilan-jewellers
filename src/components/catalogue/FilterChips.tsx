"use client";

import { X } from "lucide-react";
import type { FilterState } from "@/types";

interface FilterChipsProps {
  filters: FilterState;
  onRemove: (key: keyof FilterState) => void;
}

export default function FilterChips({ filters, onRemove }: FilterChipsProps) {
  const activeFilters = Object.entries(filters).filter(([, value]) => value) as [keyof FilterState, string][];

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {activeFilters.map(([key, value]) => (
        <button
          key={key}
          onClick={() => onRemove(key)}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-gold-400/15 border border-gold-400/30 rounded-full text-xs font-sans text-gold-300 hover:bg-gold-400/25 transition-colors"
        >
          <span className="capitalize">{value}</span>
          <X className="w-3 h-3" />
        </button>
      ))}
    </div>
  );
}
