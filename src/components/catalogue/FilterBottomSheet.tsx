"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
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
  };
}

function MobileFilterCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`px-3 py-1.5 rounded-full text-xs font-sans border transition-all duration-150 ${
        checked
          ? "bg-gold-400 border-gold-400 text-amber-950 font-medium"
          : "border-white/20 text-white/60 hover:border-white/40"
      }`}
    >
      {label}
    </button>
  );
}

export default function FilterBottomSheet({ filters, onFilterChange, onClear, activeCount, filterOptions }: FilterBottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center gap-1.5 px-3 py-2 glass-card rounded-xl text-xs font-sans text-white/70"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Filters
        {activeCount > 0 && (
          <span className="bg-gold-400 text-amber-950 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 border-t border-white/10 rounded-t-3xl max-h-[75vh] overflow-y-auto"
            >
              {/* Handle */}
              <div className="flex justify-center py-3">
                <div className="w-10 h-1 bg-white/20 rounded-full" />
              </div>

              <div className="px-5 pb-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="luxury-heading text-lg font-semibold text-white">Filters</h3>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5 text-white/50" />
                  </button>
                </div>

                {/* Metal Type */}
                <div className="mb-4">
                  <p className="text-xs font-sans font-medium text-white/50 uppercase tracking-wider mb-2">Metal Type</p>
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
                  <p className="text-xs font-sans font-medium text-white/50 uppercase tracking-wider mb-2">Carat</p>
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
                  <p className="text-xs font-sans font-medium text-white/50 uppercase tracking-wider mb-2">Jewellery Type</p>
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

                {/* Occasion */}
                <div className="mb-6">
                  <p className="text-xs font-sans font-medium text-white/50 uppercase tracking-wider mb-2">Occasion</p>
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

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => { onClear(); setIsOpen(false); }}
                    className="flex-1 py-2.5 text-sm font-sans font-medium text-white/60 border border-white/20 rounded-xl hover:border-white/40 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-2.5 text-sm font-sans font-medium bg-gold-400 text-amber-950 rounded-xl hover:bg-gold-300 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
