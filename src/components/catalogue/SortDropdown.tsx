"use client";

import { ArrowUpDown } from "lucide-react";
import type { SortOption } from "@/types";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Popular" },
  { value: "newest", label: "Newest" },
  { value: "name-asc", label: "Name A-Z" },
  { value: "name-desc", label: "Name Z-A" },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-3.5 h-3.5 text-white/40" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="bg-transparent text-xs font-sans text-white/70 border-none outline-none cursor-pointer appearance-none pr-4"
        style={{ backgroundImage: "none" }}
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-stone-900 text-white">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
