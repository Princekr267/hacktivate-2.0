"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; char: string }[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const pathname = usePathname();
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastSparkleTime = useRef(0);
  const sparkleId = useRef(0);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateCursor = (e: MouseEvent) => {
      // 1. Update native cursor position instantly via GPU-accelerated transform
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 7}px, ${e.clientY - 7}px, 0)`;
      }

      // 2. Handle hover states for links and buttons (throttled check)
      const target = e.target as HTMLElement;
      const hovering = !!(
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      );
      setIsHovering(hovering);

      // 3. Sparkle trail logic
      const now = performance.now();
      if (now - lastSparkleTime.current > 180) { // Slightly longer throttle for performance
        lastSparkleTime.current = now;
        const chars = ["✦", "⚡", "★"];
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        
        const newSparkle = {
          id: sparkleId.current++,
          x: e.clientX,
          y: e.clientY,
          char: randomChar
        };
        
        setSparkles(prev => [...prev, newSparkle]);
        
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 700);
      }
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [pathname, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden mix-blend-difference">
      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, y: sparkle.y, x: sparkle.x, scale: 0.5 }}
            animate={{ opacity: 0, y: sparkle.y - 40, x: sparkle.x + (Math.random() * 20 - 10), scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute text-gold font-bold pointer-events-none text-sm"
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          >
            {sparkle.char}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Cursor - animated natively */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-gold rounded-full pointer-events-none transition-transform duration-75 ease-out"
        style={{
          boxShadow: "0 0 10px #EFD844, 0 0 20px #EFD844",
          willChange: "transform",
          transform: "translate3d(-20px, -20px, 0)", // hide initially
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(239, 216, 68, 0.4)" : "#EFD844",
        }}
      />
    </div>
  );
}
