"use client";

import { useState, useMemo, useCallback, Suspense } from "react";
import type { ExtendedProduct } from "@/types";
import { getFilteredProducts, getUniqueFilterValues } from "@/lib/products";
import { useFilters } from "@/hooks/useFilters";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import CatalogueProductCard from "./CatalogueProductCard";
import FilterSidebar from "./FilterSidebar";
import FilterBottomSheet from "./FilterBottomSheet";
import FilterChips from "./FilterChips";
import SortDropdown from "./SortDropdown";
import ProductGridSkeleton from "./ProductGridSkeleton";
import EmptyState from "./EmptyState";

const ITEMS_PER_PAGE = 12;

interface CatalogueClientProps {
  initialProducts: ExtendedProduct[];
  categoryName?: string;
}

function CatalogueContent({ initialProducts, categoryName }: CatalogueClientProps) {
  const { filters, sort, setFilter, setSort, clearFilters, activeFilterCount } = useFilters();
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

  const filteredProducts = useMemo(
    () => getFilteredProducts(initialProducts, filters, sort),
    [initialProducts, filters, sort]
  );

  const displayedProducts = useMemo(
    () => filteredProducts.slice(0, displayedCount),
    [filteredProducts, displayedCount]
  );

  const hasMore = displayedCount < filteredProducts.length;

  const loadMore = useCallback(() => {
    setDisplayedCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  const sentinelRef = useInfiniteScroll({ onLoadMore: loadMore, hasMore });

  const filterOptions = useMemo(() => getUniqueFilterValues(initialProducts), [initialProducts]);

  const handleFilterRemove = useCallback((key: keyof typeof filters) => {
    setFilter(key, undefined);
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [setFilter]);

  const handleFilterChange = useCallback((key: keyof typeof filters, value: string | undefined) => {
    setFilter(key, value);
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [setFilter]);

  const handleClear = useCallback(() => {
    clearFilters();
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [clearFilters]);

  return (
    <div className="flex gap-6">
      {/* Desktop sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClear={handleClear}
        activeCount={activeFilterCount}
        filterOptions={filterOptions}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <FilterBottomSheet
              filters={filters}
              onFilterChange={handleFilterChange}
              onClear={handleClear}
              activeCount={activeFilterCount}
              filterOptions={filterOptions}
            />
            <p className="text-xs font-sans text-brand-muted">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Filter chips */}
        <FilterChips filters={filters} onRemove={handleFilterRemove} />

        {/* Product grid */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
              {displayedProducts.map((product, index) => (
                <CatalogueProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {/* Infinite scroll sentinel */}
            {hasMore && (
              <div ref={sentinelRef} className="flex justify-center py-8">
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-brand-gold/40 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyState onClear={handleClear} />
        )}
      </div>
    </div>
  );
}

export default function CatalogueClient(props: CatalogueClientProps) {
  return (
    <Suspense fallback={<ProductGridSkeleton />}>
      <CatalogueContent {...props} />
    </Suspense>
  );
}
