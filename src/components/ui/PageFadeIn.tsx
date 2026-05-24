"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageFadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="contents-fade-wrapper"
      style={{ minHeight: '100%', width: '100%', display: 'block' }}
    >
      {children}
    </motion.div>
  );
}
