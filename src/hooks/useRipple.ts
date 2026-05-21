"use client";

import { useCallback } from "react";

/**
 * useRipple — attaches a gold ripple animation to any clicked element.
 * Usage: add {...rippleProps} to any button/card div.
 * The element also needs position:relative and overflow:hidden (class "ripple-element").
 */
export function useRipple() {
  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top  - size / 2;

    const circle = document.createElement("span");
    circle.className = "ripple-circle";
    circle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;

    // Remove after animation
    circle.addEventListener("animationend", () => circle.remove(), { once: true });
    el.appendChild(circle);
  }, []);

  return { onClick: createRipple, className: "ripple-element" } as const;
}
