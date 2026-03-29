"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import type { FilterState, SortOption } from "@/types";

export function useFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters: FilterState = useMemo(() => ({
    metalType: searchParams.get("metal") || undefined,
    carat: searchParams.get("carat") || undefined,
    occasion: searchParams.get("occasion") || undefined,
    jewelleryType: searchParams.get("type") || undefined,
    category: searchParams.get("category") || undefined,
    subcategory: searchParams.get("sub") || undefined,
    collection: searchParams.get("collection") || undefined,
  }), [searchParams]);

  const sort: SortOption = (searchParams.get("sort") as SortOption) || "popular";

  const updateParams = useCallback((updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
  }, [searchParams, router, pathname]);

  const setFilter = useCallback((key: keyof FilterState, value: string | undefined) => {
    const paramMap: Record<keyof FilterState, string> = {
      metalType: "metal",
      carat: "carat",
      occasion: "occasion",
      jewelleryType: "type",
      category: "category",
      subcategory: "sub",
      collection: "collection",
    };
    // When jewelleryType changes, clear subcategory and collection
    if (key === "jewelleryType") {
      updateParams({ [paramMap[key]]: value || null, sub: null, collection: null });
    // When collection changes, clear jewelleryType (mutually exclusive)
    } else if (key === "collection") {
      updateParams({ [paramMap[key]]: value || null, type: null, sub: null });
    } else {
      updateParams({ [paramMap[key]]: value || null });
    }
  }, [updateParams]);

  const setSort = useCallback((value: SortOption) => {
    updateParams({ sort: value === "popular" ? null : value });
  }, [updateParams]);

  const clearFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [router, pathname]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return { filters, sort, setFilter, setSort, clearFilters, activeFilterCount };
}
