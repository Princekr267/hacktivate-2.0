import React from 'react';

export default function TracksBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-[0.04] text-gold"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern id="tracks-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#tracks-grid)" />
      </svg>
    </div>
  );
}
