"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function PlayCard() {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="col-span-1 row-span-1 bg-card rounded-xl border border-border overflow-hidden relative group cursor-pointer"
      whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label="Creative — hover to reveal the Detective Raccoon easter egg"
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col items-center justify-center h-full text-center relative">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Creative
          </span>
        </div>

        {/* Hidden Raccoon - reveals on hover */}
        <AnimatePresence>
          {isHovered ? (
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-24 h-24 relative"
            >
              <Image
                src="/images/detective-raccoon.svg"
                alt="Detective Raccoon — Andrew's creative easter egg"
                fill
                className="object-contain"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-4xl"
            >
              <span className="text-muted-foreground/40">?</span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-xs text-muted-foreground mt-3">
          {isHovered ? "🔍 Detective Raccoon" : "Hover to discover"}
        </p>
      </div>
    </motion.div>
  );
}

