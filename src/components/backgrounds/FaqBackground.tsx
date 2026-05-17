"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function FaqBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        className="absolute top-0 right-0 w-[400px] h-[400px] border-[40px] border-black rounded-full blur-[2px] opacity-10 translate-x-1/4 pointer-events-none" 
        style={{ y: prefersReducedMotion ? '-50%' : y1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black rounded-[50px] rotate-45 blur-[2px] opacity-10 -translate-x-1/4 pointer-events-none" 
        style={{ y: prefersReducedMotion ? '25%' : y2 }}
      />
    </div>
  );
}
