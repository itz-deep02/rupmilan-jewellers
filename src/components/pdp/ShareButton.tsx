"use client";

import { useState } from "react";
import { Share2, Check, Link2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const handleShare = async () => {
    // Try native share first (mobile)
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // User cancelled or share failed, fall through to copy
      }
    }

    // Fallback: copy link
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setShowPopover(true);
      setTimeout(() => {
        setCopied(false);
        setShowPopover(false);
      }, 2000);
    } catch {
      // Fallback for older browsers
      setShowPopover(true);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm font-sans text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        {copied ? "Copied!" : "Share"}
      </button>

      {/* Copy popover (desktop fallback) */}
      {showPopover && !copied && (
        <div className="absolute top-full mt-2 right-0 z-20 glass-card p-3 rounded-xl min-w-[280px]">
          <p className="text-xs font-sans text-white/50 mb-2">Copy product link</p>
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <Link2 className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
              <span className="text-xs font-sans text-white/60 truncate">{url}</span>
            </div>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                  setShowPopover(false);
                }, 2000);
              }}
              className="px-3 py-2 bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-sans rounded-lg hover:bg-gold-400/30 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
