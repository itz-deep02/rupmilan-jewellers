export default function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-ivory-200 rounded-xl ${className}`} />;
}
