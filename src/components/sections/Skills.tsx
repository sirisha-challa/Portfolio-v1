"use client";

import { skills } from "@/lib/constants";
import SectionWrapper from "../shared/SectionWrapper";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const skillBubble = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="skills" subtitle="Tech Stack" title="Skills & Tools">
      <div className="max-w-5xl mx-auto space-y-10">
        {skills.map((category, ci) => (
          <div key={category.category}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px flex-1 bg-gradient-to-r from-cyber-purple/50 to-transparent" />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-cyber-cyan font-semibold">
                {category.category}
              </h3>
              <span className="h-px flex-1 bg-gradient-to-l from-cyber-purple/50 to-transparent" />
            </div>
            <motion.div
              variants={prefersReducedMotion ? undefined : container}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView={prefersReducedMotion ? {} : "show"}
              viewport={{ once: true, margin: "-30px" }}
              className="flex flex-wrap justify-center gap-3"
            >
              {category.items.map((item, ii) => (
                <motion.div
                  key={item}
                  variants={prefersReducedMotion ? undefined : skillBubble}
                  transition={{ duration: 0.35, delay: ci * 0.06 + ii * 0.03 }}
                  whileHover={prefersReducedMotion ? {} : { y: -3, scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  className="group relative"
                >
                  <div className="relative px-4 py-2 rounded-2xl glass border border-white/10 hover:border-cyber-cyan/40 transition-all duration-300 cursor-default select-none">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
