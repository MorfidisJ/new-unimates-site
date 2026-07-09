import React from 'react';

export default function SoftAurora() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Aurora Ribbon Beam - Warm Sunrise Orange & Peach */}
      <div className="absolute -top-[15%] -left-[10%] w-[110vw] h-[55vh] rounded-[100%] bg-gradient-to-r from-[#df4f00]/22 via-[#ff884b]/16 to-transparent blur-[95px] animate-aurora-1 opacity-90" />

      {/* Secondary Aurora Ribbon Beam - Deep Iris Violet & Magenta */}
      <div className="absolute top-[22%] -right-[15%] w-[105vw] h-[60vh] rounded-[100%] bg-gradient-to-l from-violet-600/18 via-pink-500/14 to-transparent blur-[110px] animate-aurora-2 opacity-85" />

      {/* Tertiary Aurora Ribbon Beam - Celestial Sky Blue & Warm Gold */}
      <div className="absolute bottom-[5%] left-[5%] w-[95vw] h-[55vh] rounded-[100%] bg-gradient-to-tr from-[#df4f00]/16 via-sky-400/12 to-violet-500/12 blur-[120px] animate-aurora-3 opacity-80" />

      {/* Center Specular Aurora Glint Field */}
      <div className="absolute top-[18%] left-[20%] w-[60vw] h-[45vh] rounded-full bg-gradient-to-br from-[#df4f00]/14 via-rose-400/10 to-transparent blur-[85px] animate-aurora-3" />

      {/* Tactile High-Frequency Ambient Film Noise & Top Sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-15%,rgba(223,79,0,0.14),transparent)]" />
      <div 
        className="absolute inset-0 opacity-[0.018] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}

