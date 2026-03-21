"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import type { FilterState } from "@/types";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string | undefined) => void;
  onClear: () => void;
  activeCount: number;
  filterOptions: {
    metalTypes: string[];
    carats: string[];
    occasions: string[];
    jewelleryTypes: string[];
  };
}

function FilterSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[rgba(160,115,42,0.15)] py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-sm font-sans font-medium text-brand-body">{title}</span>
        <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="mt-2.5 space-y-1.5">{children}</div>}
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`flex items-center gap-2.5 w-full text-left py-1 px-1 rounded-lg transition-colors duration-150 ${checked ? "text-brand-gold" : "text-brand-muted hover:text-brand-body"}`}
    >
      <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-150 ${checked ? "bg-brand-gold border-brand-gold" : "border-[rgba(160,115,42,0.30)]"}`}>
        {checked && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span className="text-xs font-sans capitalize">{label}</span>
    </button>
  );
}

export default function FilterSidebar({ filters, onFilterChange, onClear, activeCount, filterOptions }: FilterSidebarProps) {
  return (
    <div className="hidden lg:block w-56 flex-shrink-0">
      <div className="sticky top-24 bg-white border border-[rgba(160,115,42,0.20)] rounded-2xl shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="luxury-heading text-base font-normal text-brand-heading">Filters</h3>
          {activeCount > 0 && (
            <button onClick={onClear} className="text-[10px] font-sans text-brand-gold hover:text-brand-gold-light flex items-center gap-1">
              <X className="w-3 h-3" /> Clear All
            </button>
          )}
        </div>

        <FilterSection title="Metal Type">
          {filterOptions.metalTypes.map(type => (
            <FilterCheckbox
              key={type}
              label={type}
              checked={filters.metalType === type}
              onChange={() => onFilterChange("metalType", filters.metalType === type ? undefined : type)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Carat">
          {filterOptions.carats.map(c => (
            <FilterCheckbox
              key={c}
              label={c}
              checked={filters.carat === c}
              onChange={() => onFilterChange("carat", filters.carat === c ? undefined : c)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Jewellery Type">
          {filterOptions.jewelleryTypes.map(type => (
            <FilterCheckbox
              key={type}
              label={type}
              checked={filters.jewelleryType === type}
              onChange={() => onFilterChange("jewelleryType", filters.jewelleryType === type ? undefined : type)}
            />
          ))}
        </FilterSection>

        <FilterSection title="Occasion">
          {filterOptions.occasions.map(occ => (
            <FilterCheckbox
              key={occ}
              label={occ}
              checked={filters.occasion === occ}
              onChange={() => onFilterChange("occasion", filters.occasion === occ ? undefined : occ)}
            />
          ))}
        </FilterSection>
      </div>
    </div>
  );
}
