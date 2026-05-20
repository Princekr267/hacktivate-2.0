import React from 'react';

export default function HeroBackground() {
  return (
    <>
      <div 
        className="absolute top-0 right-0 w-1/2 h-full z-0"
        style={{
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
          background: "linear-gradient(135deg, #080511 0%, #240c3d 100%)"
        }}
      />
    </>
  );
}
