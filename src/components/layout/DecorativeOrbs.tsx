export default function DecorativeOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-gold-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
    </div>
  );
}
