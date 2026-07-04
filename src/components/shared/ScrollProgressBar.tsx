"use client";

import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollProgressBarProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function ScrollProgressBar({ containerRef }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 z-0">
      <motion.div
        style={{ scaleY }}
        className="w-full h-full bg-gradient-to-b from-cyber-purple via-cyber-blue to-cyber-cyan origin-top shadow-[0_0_10px_rgba(149,107,255,0.5)]"
      />
    </div>
  );
}
