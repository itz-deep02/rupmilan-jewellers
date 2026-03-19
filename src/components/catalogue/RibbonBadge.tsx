"use client";

const ribbonColors: Record<string, { bg: string; text: string }> = {
  Bestseller: { bg: "bg-rose-500", text: "text-white" },
  New: { bg: "bg-emerald-500", text: "text-white" },
  Trending: { bg: "bg-gold-400", text: "text-amber-950" },
};

export default function RibbonBadge({ type }: { type: string }) {
  const colors = ribbonColors[type] || { bg: "bg-white/20", text: "text-white" };

  return (
    <div className="absolute -right-8 top-5 rotate-45 z-10">
      <div className={`${colors.bg} ${colors.text} text-[9px] font-sans font-bold uppercase tracking-wider py-1 px-8 shadow-md`}>
        {type}
      </div>
    </div>
  );
}
