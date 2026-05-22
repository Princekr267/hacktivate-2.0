"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; char: string }[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mouseX = useMotionValue(-20);
  const mouseY = useMotionValue(-20);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.1 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.1 });

  const lastSparkleTime = useRef(0);
  const sparkleId = useRef(0);

  useEffect(() => {
    const checkTouch = () => setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 7);
      mouseY.set(e.clientY - 7);

      const target = e.target as HTMLElement;
      const hovering = !!(
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      );
      setIsHovering(hovering);

      const now = performance.now();
      if (now - lastSparkleTime.current > 180) {
        lastSparkleTime.current = now;
        const chars = ["✦", "⚡", "★"];
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        
        const newSparkle = { id: sparkleId.current++, x: e.clientX, y: e.clientY, char: randomChar };
        setSparkles(prev => [...prev, newSparkle]);
        setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== newSparkle.id)), 700);
      }
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div id="custom-cursor-root" className="pointer-events-none fixed inset-0 z-[9999999]">
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

      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-gold rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          boxShadow: "0 0 10px #EFD844, 0 0 20px #EFD844",
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(239, 216, 68, 0.4)" : "#EFD844",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}
