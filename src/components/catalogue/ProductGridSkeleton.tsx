export default function ProductGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass-card overflow-hidden animate-pulse">
          <div className="aspect-[3/4] bg-ivory-100" />
          <div className="p-3 sm:p-4 space-y-2.5">
            <div className="h-2 w-16 bg-ivory-100 rounded" />
            <div className="h-4 w-3/4 bg-ivory-100 rounded" />
            <div className="space-y-1.5">
              <div className="h-3 bg-ivory-100 rounded" />
              <div className="h-3 bg-ivory-100 rounded" />
              <div className="h-3 bg-ivory-100 rounded" />
            </div>
            <div className="h-8 bg-ivory-100 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
