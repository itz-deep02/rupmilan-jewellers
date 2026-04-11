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

function SectionHeaderSkeleton() {
  return (
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
  );
}

function ProductCardSkeleton() {
  return (
    <div className="glass-card overflow-hidden flex-shrink-0 w-[200px] sm:w-[220px]">
      <Skeleton className="aspect-[3/4] rounded-none rounded-t-xl" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-2 w-16 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-3 w-24 rounded" />
        <Skeleton className="h-3 w-20 rounded" />
        <Skeleton className="h-8 w-full rounded-xl mt-2" />
      </div>
    </div>
  );
}

export default function HomeLoading() {
  return (
    <>
      <NavbarSkeleton />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

          {/* WelcomeHero */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14 space-y-4">
            <Skeleton className="h-8 w-48 rounded-full" />
            <Skeleton className="h-10 w-72 sm:w-96 rounded" />
            <Skeleton className="h-10 w-56 sm:w-80 rounded" />
            <Skeleton className="h-4 w-80 rounded" />
            <div className="flex gap-4 mt-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-32 rounded-full" />
            </div>
          </div>

          {/* HeroCarousel */}
          <div className="mb-12 sm:mb-16">
            <Skeleton className="aspect-[16/9] sm:aspect-[21/9] rounded-2xl" />
          </div>

          {/* StatsSection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sm:mb-16">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="glass-card p-5 flex flex-col items-center space-y-3">
                <Skeleton className="w-12 h-12 rounded-full" />
                <Skeleton className="h-8 w-20 rounded" />
                <Skeleton className="h-3 w-32 rounded" />
              </div>
            ))}
          </div>

          {/* CollectionsSection */}
          <div className="mb-12 sm:mb-16">
            <SectionHeaderSkeleton />
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="glass-card flex-shrink-0 w-[260px] sm:w-[300px] overflow-hidden">
                  <Skeleton className="aspect-[4/3] rounded-none rounded-t-xl" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-5 w-36 rounded" />
                    <Skeleton className="h-3 w-full rounded" />
                    <Skeleton className="h-3 w-20 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CategorySection */}
          <div className="mb-12 sm:mb-16">
            <SectionHeaderSkeleton />
            <div className="flex gap-6 overflow-hidden justify-center">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex flex-col items-center flex-shrink-0 w-[160px] sm:w-[200px]">
                  <Skeleton className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-3" />
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-2 w-16 rounded mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* 3 Product Sections */}
          {[1, 2, 3].map(s => (
            <div key={s} className="mb-12 sm:mb-16">
              <SectionHeaderSkeleton />
              <div className="flex gap-4 overflow-hidden">
                {[1, 2, 3, 4].map(i => <ProductCardSkeleton key={i} />)}
              </div>
            </div>
          ))}

          {/* CustomerStories */}
          <div className="mb-12 sm:mb-16">
            <SectionHeaderSkeleton />
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3].map(i => (
                <div key={i} className="glass-card flex-shrink-0 w-[300px] p-5 space-y-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Skeleton key={s} className="w-4 h-4 rounded" />)}
                  </div>
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-5/6 rounded" />
                  <Skeleton className="h-3 w-3/4 rounded" />
                  <div className="flex items-center gap-3 pt-2">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div>
                      <Skeleton className="h-3 w-24 rounded" />
                      <Skeleton className="h-2 w-16 rounded mt-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
