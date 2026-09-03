'use client';

import { Share2 } from 'lucide-react';

export default function ReportShareButton() {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      alert('Report link copied to clipboard!');
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
    >
      <Share2 size={13} />
      <span>Share</span>
    </button>
  );
}
