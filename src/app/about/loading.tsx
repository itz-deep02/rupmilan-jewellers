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

export default function AboutLoading() {
  return (
    <>
      <NavbarSkeleton />
      <main className="min-h-screen pb-20 md:pb-0">

        {/* AboutHero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Skeleton className="aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/5] rounded-2xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-20">

          {/* StorySection */}
          <div>
            <SectionHeaderSkeleton />
            <div className="max-w-3xl mx-auto space-y-3">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
              <Skeleton className="h-4 w-4/5 rounded" />
              <Skeleton className="h-4 w-3/4 rounded" />
            </div>
            {/* Founder card */}
            <div className="max-w-2xl mx-auto mt-8 glass-card p-6 flex flex-col sm:flex-row items-center gap-6">
              <Skeleton className="w-[140px] h-[160px] rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-3 w-full">
                <Skeleton className="h-5 w-40 rounded" />
                <Skeleton className="h-3 w-24 rounded" />
                <Skeleton className="h-3 w-full rounded mt-3" />
                <Skeleton className="h-3 w-5/6 rounded" />
                <Skeleton className="h-3 w-3/4 rounded" />
              </div>
            </div>
          </div>

          {/* JourneyTimeline */}
          <div>
            <SectionHeaderSkeleton />
            <div className="max-w-2xl mx-auto space-y-6">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <Skeleton className="w-4 h-4 rounded-full" />
                    {i < 5 && <Skeleton className="w-0.5 h-16 rounded mt-1" />}
                  </div>
                  <div className="flex-1 space-y-2 pb-2">
                    <Skeleton className="h-5 w-20 rounded-full" />
                    <Skeleton className="h-4 w-48 rounded" />
                    <Skeleton className="h-3 w-full rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OfferingsSection */}
          <div>
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="glass-card p-5 flex flex-col items-center space-y-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <Skeleton className="h-4 w-24 rounded" />
                  <Skeleton className="h-3 w-32 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* CraftsmanshipSection */}
          <div>
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="glass-card p-6 flex flex-col items-center space-y-3">
                  <Skeleton className="w-14 h-14 rounded-full" />
                  <Skeleton className="h-5 w-36 rounded" />
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-5/6 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* ShowroomGallery */}
          <div>
            <SectionHeaderSkeleton />
            <Skeleton className="aspect-[16/9] sm:aspect-[16/8] rounded-2xl" />
          </div>

          {/* WhyChooseUs */}
          <div>
            <SectionHeaderSkeleton />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="glass-card p-5 flex flex-col items-center space-y-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <Skeleton className="h-4 w-28 rounded" />
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-4/5 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* OurPromise */}
          <div className="space-y-6">
            <Skeleton className="h-40 w-full rounded-2xl bg-ivory-300" />
            <Skeleton className="h-20 w-full rounded-2xl" />
          </div>

        </div>
      </main>
    </>
  );
}
