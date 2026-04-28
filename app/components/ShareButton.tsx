"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
        <span className="font-semibold text-[var(--foreground)]">分享</span>
        <span className="text-xs text-[var(--muted-foreground)]">让更多人看到</span>
      </div>
      <div className="p-4">
        <button
          onClick={handleCopyLink}
          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg transition-all duration-200 ${
            copied
              ? "bg-[#3fb950]/10 text-[#3fb950]"
              : "bg-gradient-to-r from-[#ff7d00] to-[#ff9500] text-white hover:shadow-md hover:shadow-[#ff7d00]/20"
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-sm font-medium">链接已复制</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-sm font-medium">复制链接</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}