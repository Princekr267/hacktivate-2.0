"use client";

import { ReactNode } from "react";

export default function PageFadeIn({ children }: { children: ReactNode }) {
  return (
    <div
      className="contents-fade-wrapper"
      style={{ minHeight: '100%', width: '100%', display: 'block', position: 'relative' }}
    >
      {children}
    </div>
  );
}
