import { Gem, X } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
        <Gem className="w-10 h-10 text-gold-400/30" />
      </div>
      <h3 className="luxury-heading text-xl font-semibold text-white mb-2">No Products Found</h3>
      <p className="text-white/50 text-sm font-sans mb-6 max-w-xs">
        Try adjusting your filters to discover more pieces from our collection.
      </p>
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-4 py-2 bg-gold-400/20 border border-gold-400/40 text-gold-300 font-sans text-sm rounded-xl hover:bg-gold-400/30 transition-colors"
      >
        <X className="w-4 h-4" />
        Clear All Filters
      </button>
    </div>
  );
}
