import React from 'react';

export default function HeroBackground() {
  return (
    <>
      {/* Background image (hero-bg.jpeg) with subtle vignette and radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#080511', // explicit fallback background
        }}
      />

      {/* Dark vignette to keep text readable */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'radial-gradient(60% 50% at 50% 40%, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.22) 45%, rgba(8,5,17,0.65) 100%)'
      }} />

      {/* Soft purple glow behind mascot/logo */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        style={{
          top: '24%',
          width: '820px',
          height: '820px',
          transform: 'translateX(-50%) translateY(-10%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(158,64,164,0.35) 0%, rgba(158,64,164,0.18) 35%, rgba(0,0,0,0) 60%)'
        }}
      />
    </>
  );
}
