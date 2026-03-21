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
        className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm font-sans text-brand-body hover:text-brand-heading hover:shadow-md transition-all duration-200"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
        {copied ? "Copied!" : "Share"}
      </button>

      {/* Copy popover (desktop fallback) */}
      {showPopover && !copied && (
        <div className="absolute top-full mt-2 right-0 z-20 glass-card p-3 rounded-xl min-w-[280px]">
          <p className="text-xs font-sans text-brand-muted mb-2">Copy product link</p>
          <div className="flex gap-2">
            <div className="flex-1 flex items-center gap-2 bg-ivory-100 rounded-lg px-3 py-2">
              <Link2 className="w-3.5 h-3.5 text-brand-muted flex-shrink-0" />
              <span className="text-xs font-sans text-brand-body truncate">{url}</span>
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
              className="px-3 py-2 bg-brand-gold/10 border border-[rgba(160,115,42,0.30)] text-brand-gold text-xs font-sans rounded-lg hover:bg-brand-gold/20 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
