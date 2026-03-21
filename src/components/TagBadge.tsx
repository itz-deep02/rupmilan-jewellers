import { type LucideIcon } from "lucide-react";
import CounterAnimation from "./CounterAnimation";

interface TagBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  counter?: {
    to: number;
    suffix?: string;
    prefix?: string;
  };
  animationDelay?: string;
  customIcon?: React.ReactNode;
}

export default function TagBadge({
  icon: Icon,
  title,
  subtitle,
  counter,
  animationDelay = "0ms",
  customIcon,
}: TagBadgeProps) {
  return (
    <div
      className="glass-card-hover p-5 flex flex-col items-center text-center gap-3 opacity-0 animate-fade-in-up"
      style={{ animationDelay, animationFillMode: "forwards" }}
    >
      {/* Icon circle */}
      <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-[rgba(160,115,42,0.25)] flex items-center justify-center">
        {customIcon || <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />}
      </div>

      {/* Title / counter */}
      <div className="luxury-heading text-2xl font-normal text-brand-heading leading-none">
        {counter ? (
          <CounterAnimation
            to={counter.to}
            suffix={counter.suffix}
            prefix={counter.prefix}
          />
        ) : (
          title
        )}
      </div>

      {/* Subtitle */}
      <p className="text-xs text-brand-muted font-sans tracking-wide uppercase">
        {subtitle}
      </p>
    </div>
  );
}
