"use client";

import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import GridBackground from "@/components/shared/GridBackground";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      id="main-content"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-x-hidden"
    >
      <GridBackground />

      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </motion.main>
  );
}
