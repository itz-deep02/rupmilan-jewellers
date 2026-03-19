import { Gem } from "lucide-react";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({ aspectRatio = "aspect-[3/4]", text, className }: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-gradient-to-br from-gold-900/40 via-stone-800/60 to-amber-950/40 rounded-xl flex flex-col items-center justify-center gap-3 border border-white/10 ${className || ""}`}
    >
      <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center">
        <Gem className="w-6 h-6 text-gold-400/60" />
      </div>
      {text && (
        <p className="text-white/30 text-xs font-sans text-center px-4">{text}</p>
      )}
    </div>
  );
}
