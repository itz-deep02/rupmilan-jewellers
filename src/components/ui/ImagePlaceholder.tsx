import { Gem } from "lucide-react";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  text?: string;
  className?: string;
}

export default function ImagePlaceholder({ aspectRatio = "aspect-[3/4]", text, className }: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-ivory-100 rounded-xl flex flex-col items-center justify-center gap-3 border border-[rgba(160,115,42,0.20)] ${className || ""}`}
    >
      <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
        <Gem className="w-6 h-6 text-brand-gold/40" />
      </div>
      {text && (
        <p className="text-brand-muted text-xs font-sans text-center px-4">{text}</p>
      )}
    </div>
  );
}
