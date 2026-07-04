"use client";

import { experience, education } from "@/lib/constants";
import SectionWrapper from "../shared/SectionWrapper";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <SectionWrapper id="experience" subtitle="My Journey" title="Experience & Education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Briefcase className="text-cyber-purple" /> Work Experience
          </h3>
          <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-cyber-purple before:to-transparent">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-8 relative"
              >
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-cyber-purple border-4 border-background" />
                <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                <p className="text-cyber-cyan text-sm font-mono mb-2">{exp.company} &bull; {exp.date}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-cyber-cyan mt-1">&tri;</span> {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="text-cyber-cyan" /> Education
          </h3>
          <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-cyber-cyan before:to-transparent">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-8 relative"
              >
                <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-cyber-cyan border-4 border-background" />
                <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                <p className="text-cyber-cyan text-sm font-mono mb-1">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mb-2">{edu.date} &bull; {edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
