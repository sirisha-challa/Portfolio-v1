"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="about" className="relative min-h-dvh flex items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -50 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Hi, I&apos;m <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              {personalInfo.roles.join(" \u2022 ")}
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {personalInfo.tagline} Currently researching System Design and Microservices. Developing End to End data pipelines at <span className="text-cyber-cyan font-semibold">AWS Academy</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-medium hover:shadow-[0_0_20px_rgba(149,107,255,0.5)] transition-all flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link
                href="/Sirisha_Resume.pdf"
                target="_blank"
                download
                className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-all font-medium flex items-center gap-2"
              >
                <Download size={18} /> Resume
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-cyber-cyan" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl p-1 shadow-2xl shadow-cyber-purple/10 border border-white/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-muted-foreground">system_status.sh</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-3 bg-black/40 rounded-b-xl">
                <p><span className="text-cyber-cyan">$</span> <span className="text-muted-foreground">whoami</span></p>
                <p className="text-foreground">Sirisha</p>

                <p><span className="text-cyber-cyan">$</span> <span className="text-muted-foreground">cat current_role.txt</span></p>
                <p className="text-foreground">Data Engineer & Reseracher</p>

                <p><span className="text-cyber-cyan">$</span> <span className="text-muted-foreground">ls skills/</span></p>
                <p className="text-foreground">
                  <span className="text-cyber-purple">Pandas</span>{" "}
                  <span className="text-cyber-blue">AWS_Redshift</span>{" "}
                  <span className="text-cyber-cyan">Embedded_C</span>{" "}
                  <span className="text-green-400">IoT</span>
                </p>

                <p><span className="text-cyber-cyan">$</span> <span className="text-muted-foreground">echo $STATUS</span></p>
                <p className="text-green-400 animate-pulse">&block; Building scalable data solutions...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
