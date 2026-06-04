"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Sparkle {
  x: number;
  y: number;
  char: string;
  born: number;
  vx: number;
  vy: number;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mouseX = useMotionValue(-20);
  const mouseY = useMotionValue(-20);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const lastSparkleTime = useRef(0);
  const isHoveringRef = useRef(false);
  const rafRef = useRef<number>(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 250, mass: 0.1 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 250, mass: 0.1 });

  useEffect(() => {
    const checkTouch = () => setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Canvas sparkle renderer
  useEffect(() => {
    if (isTouchDevice) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();
      sparklesRef.current = sparklesRef.current.filter(s => now - s.born < 700);
      ctx.font = "14px sans-serif";
      for (const s of sparklesRef.current) {
        const age = now - s.born;
        const progress = age / 700;
        const alpha = 1 - progress;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#EFD844";
        ctx.fillText(s.char, s.x + s.vx * progress * 30, s.y - progress * 40);
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isTouchDevice]);

  // Mouse tracking — no React state updates for position
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
      if (hovering !== isHoveringRef.current) {
        isHoveringRef.current = hovering;
        setIsHovering(hovering);
      }

      const now = performance.now();
      if (now - lastSparkleTime.current > 180) {
        lastSparkleTime.current = now;
        const CHARS = ["✦", "⚡", "★"];
        sparklesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          born: now,
          vx: Math.random() * 2 - 1,
          vy: 0,
        });
      }
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div id="custom-cursor-root" className="pointer-events-none fixed inset-0 z-[9999999]">
      {/* Canvas sparkles — zero DOM nodes, zero React re-renders */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: "auto" }}
      />

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
