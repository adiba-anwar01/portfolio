import { useState } from 'react';

export default function ProjectShowcase({ screenshot, name }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full flex items-center justify-center py-4">
      <div className="w-full max-w-[440px] rounded-2xl overflow-hidden border border-white/10 bg-bg-card shadow-2xl transition-all duration-300 hover:border-accent-primary/40 hover:shadow-accent-glow">
        {screenshot && !imgError ? (
          <img
            src={screenshot}
            alt={`${name} screenshot`}
            loading="lazy"
            draggable={false}
            onError={() => setImgError(true)}
            className="w-full h-auto object-contain block select-none filter brightness-[0.9] hover:brightness-100 transition-all duration-300"
          />
        ) : (
          <div className="w-full aspect-[16/10] flex flex-col items-center justify-center gap-2 bg-[#0A0B0E]/60 text-white/25">
            <svg className="w-8 h-8 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span className="font-mono text-[10px] tracking-wider uppercase text-white/30">Image Offline</span>
          </div>
        )}
      </div>
    </div>
  );
}
