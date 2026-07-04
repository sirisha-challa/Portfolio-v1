"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      className={cn(
        "glass rounded-2xl p-6 md:p-8 relative overflow-hidden group transition-all duration-300",
        "hover:border-cyber-purple/50 hover:shadow-[0_0_20px_rgba(149,107,255,0.15)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
