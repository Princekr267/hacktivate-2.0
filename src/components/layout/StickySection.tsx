"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface StickySectionProps {
  children: React.ReactNode;
  zIndex: number;
}

export default function StickySection({ children, zIndex }: StickySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down slightly and dim out as it gets peeled over
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full" style={{ zIndex }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-[200vh]" style={{ zIndex }}>
      <motion.div 
        className="sticky top-0 w-full h-screen overflow-hidden"
        style={{ scale, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}
