import Skeleton from "@/components/ui/Skeleton";

function NavbarSkeleton() {
  return (
    <div className="sticky top-0 z-40 bg-ivory border-b border-[rgba(160,115,42,0.20)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-2">
            <Skeleton className="w-9 h-9 rounded-full" />
            <div>
              <Skeleton className="h-4 w-32 rounded" />
              <Skeleton className="h-2 w-16 mt-1 rounded" />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-3 w-16 rounded" />)}
          </div>
          <Skeleton className="h-9 w-32 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function FilterGroupSkeleton() {
  return (
    <div className="py-4 border-b border-[rgba(160,115,42,0.12)]">
      <Skeleton className="h-4 w-24 rounded mb-3" />
      <div className="space-y-2.5">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-2">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CatalogueLoading() {
  return (
    <>
      <NavbarSkeleton />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

          {/* Page header */}
          <div className="flex flex-col items-center mb-8">
            <Skeleton className="h-3 w-32 rounded mb-3" />
            <Skeleton className="h-8 w-56 rounded mb-2" />
            <Skeleton className="h-3 w-64 rounded" />
            <div className="flex items-center gap-2 mt-4">
              <Skeleton className="h-px w-16 rounded" />
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="h-px w-16 rounded" />
            </div>
          </div>

          <div className="flex gap-6">
            {/* Desktop sidebar */}
            <div className="hidden lg:block w-[220px] flex-shrink-0">
              <div className="glass-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-5 w-16 rounded" />
                  <Skeleton className="h-3 w-14 rounded" />
                </div>
                {[1, 2, 3, 4].map(i => <FilterGroupSkeleton key={i} />)}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-20 rounded-lg lg:hidden" />
                  <Skeleton className="h-3 w-24 rounded" />
                </div>
                <Skeleton className="h-7 w-24 rounded-lg" />
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="glass-card overflow-hidden">
                    <Skeleton className="aspect-[3/4] rounded-none rounded-t-xl" />
                    <div className="p-3 sm:p-4 space-y-2">
                      <Skeleton className="h-2 w-16 rounded" />
                      <Skeleton className="h-4 w-full rounded" />
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between">
                          <Skeleton className="h-3 w-12 rounded" />
                          <Skeleton className="h-3 w-14 rounded" />
                        </div>
                        <div className="flex justify-between">
                          <Skeleton className="h-3 w-10 rounded" />
                          <Skeleton className="h-3 w-10 rounded" />
                        </div>
                        <div className="flex justify-between">
                          <Skeleton className="h-3 w-12 rounded" />
                          <Skeleton className="h-3 w-14 rounded" />
                        </div>
                      </div>
                      <Skeleton className="h-8 w-full rounded-xl mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
