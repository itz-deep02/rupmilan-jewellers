import { Gem, X } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-ivory-100 flex items-center justify-center mb-6">
        <Gem className="w-10 h-10 text-brand-gold/30" />
      </div>
      <h3 className="luxury-heading text-xl font-normal text-brand-heading mb-2">No Products Found</h3>
      <p className="text-brand-muted text-sm font-sans mb-6 max-w-xs">
        Try adjusting your filters to discover more pieces from our collection.
      </p>
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-[rgba(160,115,42,0.30)] text-brand-gold font-sans text-sm rounded-xl hover:bg-brand-gold/20 transition-colors"
      >
        <X className="w-4 h-4" />
        Clear All Filters
      </button>
    </div>
  );
}
