"use client";

import { useRef } from "react";
import { projects } from "@/lib/constants";
import SectionWrapper from "../shared/SectionWrapper";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ScrollProgressBar from "../shared/ScrollProgressBar";

function Github({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="projects" subtitle="My Work" title="Featured Projects" className="!pb-0">
      <div ref={containerRef} className="relative max-w-6xl mx-auto pb-20">
        <ScrollProgressBar containerRef={containerRef} />

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <div key={project.title} className="relative">

              {/* ====== MOBILE LAYOUT ====== */}
              <div className="md:hidden grid grid-cols-[40px_1fr] gap-4 items-start">
                <div className="relative z-10 flex justify-center pt-2">
                  <motion.div
                    initial={prefersReducedMotion ? false : { scale: 0 }}
                    whileInView={prefersReducedMotion ? {} : { scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-4 h-4 rounded-full bg-cyber-cyan border-4 border-background shadow-[0_0_15px_rgba(66,204,255,0.6)]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="relative h-56 w-full rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-cyber-purple/10 touch-feedback">
                    <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 flex items-center justify-center text-6xl font-bold text-white/10 -z-10">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-3 bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.link !== "#" && (
                        <Link href={project.link} target="_blank" className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-cyber-cyan transition-colors touch-feedback">
                          <ExternalLink size={14} /> View Project
                        </Link>
                      )}
                      <Link href="#" className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors touch-feedback">
                        <Github size={14} /> Source Code
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* ====== DESKTOP LAYOUT ====== */}
              <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] gap-8 items-center">
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-[30vh] z-10"
                >
                  <h3 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-cyber-purple to-cyber-cyan bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.link !== "#" && (
                      <Link href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-cyber-cyan transition-colors">
                        <ExternalLink size={16} /> View Project
                      </Link>
                    )}
                    <Link href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} /> Source Code
                    </Link>
                  </div>
                </motion.div>

                <div className="flex justify-center z-20">
                  <motion.div
                    initial={prefersReducedMotion ? false : { scale: 0 }}
                    whileInView={prefersReducedMotion ? {} : { scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-5 h-5 rounded-full bg-cyber-cyan border-4 border-background shadow-[0_0_15px_rgba(66,204,255,0.6)]"
                  />
                </div>

                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-[30vh] z-10"
                >
                  <div className="relative h-80 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-cyber-purple/10 group touch-feedback">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 flex items-center justify-center text-6xl font-bold text-white/10 -z-10">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
