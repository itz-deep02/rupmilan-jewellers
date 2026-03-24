"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import type { FilterState } from "@/types";

interface FilterBottomSheetProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string | undefined) => void;
  onClear: () => void;
  activeCount: number;
  filterOptions: {
    metalTypes: string[];
    carats: string[];
    occasions: string[];
    jewelleryTypes: string[];
    subcategories: Record<string, string[]>;
  };
  categorySlug?: string;
}

function MobileFilterCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`px-3 py-1.5 rounded-full text-xs font-sans border transition-all duration-150 ${
        checked
          ? "bg-brand-gold border-brand-gold text-white font-medium"
          : "border-[rgba(160,115,42,0.20)] text-brand-muted hover:border-[rgba(160,115,42,0.40)]"
      }`}
    >
      {label}
    </button>
  );
}

export default function FilterBottomSheet({ filters, onFilterChange, onClear, activeCount, filterOptions, categorySlug }: FilterBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeType = filters.jewelleryType || (categorySlug ? (categorySlug.endsWith("s") ? categorySlug.slice(0, -1) : categorySlug) : undefined);
  const activeSubcategories = activeType ? filterOptions.subcategories[activeType] : undefined;

  // Lock body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-white border border-[rgba(160,115,42,0.20)] rounded-xl text-xs font-sans text-brand-body shadow-sm"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Filters
        {activeCount > 0 && (
          <span className="bg-brand-gold text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {activeCount}
          </span>
        )}
      </button>

      {/* Bottom sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[60] bg-ivory border-t border-[rgba(160,115,42,0.20)] rounded-t-3xl max-h-[80vh] flex flex-col"
            >
              {/* Handle */}
              <div className="flex justify-center py-3 flex-shrink-0">
                <div className="w-10 h-1 bg-brand-muted/30 rounded-full" />
              </div>

              <div className="flex items-center justify-between mb-3 px-5 flex-shrink-0">
                <h3 className="luxury-heading text-lg font-normal text-brand-heading">Filters</h3>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5 text-brand-muted" />
                </button>
              </div>

              {/* Scrollable filter content */}
              <div className="px-5 pb-4 overflow-y-auto flex-1 min-h-0">

                {/* Metal Type */}
                <div className="mb-4">
                  <p className="text-xs font-sans font-medium text-brand-muted uppercase tracking-wider mb-2">Metal Type</p>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.metalTypes.map(type => (
                      <MobileFilterCheckbox
                        key={type}
                        label={type}
                        checked={filters.metalType === type}
                        onChange={() => onFilterChange("metalType", filters.metalType === type ? undefined : type)}
                      />
                    ))}
                  </div>
                </div>

                {/* Carat */}
                <div className="mb-4">
                  <p className="text-xs font-sans font-medium text-brand-muted uppercase tracking-wider mb-2">Carat</p>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.carats.map(c => (
                      <MobileFilterCheckbox
                        key={c}
                        label={c}
                        checked={filters.carat === c}
                        onChange={() => onFilterChange("carat", filters.carat === c ? undefined : c)}
                      />
                    ))}
                  </div>
                </div>

                {/* Jewellery Type */}
                <div className="mb-4">
                  <p className="text-xs font-sans font-medium text-brand-muted uppercase tracking-wider mb-2">Jewellery Type</p>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.jewelleryTypes.map(type => (
                      <MobileFilterCheckbox
                        key={type}
                        label={type}
                        checked={filters.jewelleryType === type}
                        onChange={() => onFilterChange("jewelleryType", filters.jewelleryType === type ? undefined : type)}
                      />
                    ))}
                  </div>
                </div>

                {/* Subcategory — only show when a jewellery type is active */}
                {activeSubcategories && activeSubcategories.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-sans font-medium text-brand-muted uppercase tracking-wider mb-2">Subcategory</p>
                    <div className="flex flex-wrap gap-2">
                      {activeSubcategories.map(sub => (
                        <MobileFilterCheckbox
                          key={sub}
                          label={sub}
                          checked={filters.subcategory === sub}
                          onChange={() => onFilterChange("subcategory", filters.subcategory === sub ? undefined : sub)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Occasion */}
                <div className="mb-6">
                  <p className="text-xs font-sans font-medium text-brand-muted uppercase tracking-wider mb-2">Occasion</p>
                  <div className="flex flex-wrap gap-2">
                    {filterOptions.occasions.map(occ => (
                      <MobileFilterCheckbox
                        key={occ}
                        label={occ}
                        checked={filters.occasion === occ}
                        onChange={() => onFilterChange("occasion", filters.occasion === occ ? undefined : occ)}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Sticky action buttons — outside scrollable area */}
              <div className="flex gap-3 px-5 py-4 border-t border-[rgba(160,115,42,0.15)] bg-ivory flex-shrink-0">
                <button
                  onClick={() => { onClear(); setIsOpen(false); }}
                  className="flex-1 py-2.5 text-sm font-sans font-medium text-brand-muted border border-[rgba(160,115,42,0.20)] rounded-xl hover:border-[rgba(160,115,42,0.40)] transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-2.5 text-sm font-sans font-medium bg-brand-gold text-white rounded-xl hover:bg-gold-600 transition-colors"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
