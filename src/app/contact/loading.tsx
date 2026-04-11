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
        </div>
      </div>
    </div>
  );
}

export default function ContactLoading() {
  return (
    <>
      <NavbarSkeleton />
      <main className="min-h-screen pb-20 md:pb-0">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

          {/* Header */}
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

          {/* Feature badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="glass-card p-4 flex flex-col items-center space-y-2">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-3 w-28 rounded" />
              </div>
            ))}
          </div>

          {/* Info + Map grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* InfoSection */}
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-5 w-28 rounded" />
              </div>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-[rgba(160,115,42,0.12)] last:border-0">
                  <Skeleton className="w-10 h-10 rounded-xl flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-20 rounded" />
                    <Skeleton className="h-4 w-48 rounded" />
                  </div>
                </div>
              ))}
            </div>

            {/* MapSection */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-xl" />
                <Skeleton className="h-5 w-32 rounded" />
              </div>
              <Skeleton className="min-h-[340px] rounded-xl" />
              <Skeleton className="h-4 w-40 rounded mx-auto" />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
