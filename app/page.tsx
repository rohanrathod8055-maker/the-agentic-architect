"use client";

import { motion } from "framer-motion";
import Terminal from "./components/Terminal";
import VizcomReveal from "./components/vizcom-reveal";
import { TiltCard } from "./components/ui/tilt-card";
import ScrollTextMotion from "./components/ui/scroll-text-motion";
import ProjectInitiation from "./components/project-initiation";
import GsapText from "./components/ui/gsap-text";
import GsapScrollMask from "./components/ui/gsap-scroll-mask";
import FlyThrough from "./components/ui/fly-through";
import BentoStack from "./components/bento-stack";
import ProjectShowcase from "./components/project-showcase";
import LinesGallery from "./components/lines-gallery";
import AgenticHUD from "./components/agentic-hud";
import InteractionOverlay from "./components/interaction-overlay";
import GridBackground from "./components/ui/grid-background";
import FloatingDock from "./components/ui/floating-dock";
import RevealSection from "./components/ui/reveal-section";
import {
  Database,
  MapPin,
  ExternalLink,
  Brain,
  Cpu,
  ArrowRight
} from "lucide-react";

const projects = [
  {
    title: "Manhwa Aggregator",
    category: "Full Stack / Scraping",
    tech: ["Next.js", "Python", "Puppeteer"],
    description: "Automated manga tracking system with real-time updates.",
    link: "https://inkflow-roan.vercel.app/"
  },
  {
    title: "Channel Analysis Tool",
    category: "AI Data Analysis",
    tech: ["Firebase", "YouTube API", "Gemini"],
    description: "AI-powered dashboard for creator growth and metrics.",
  },
  {
    title: "AI Game Dev",
    category: "Generative AI",
    tech: ["Blender API", "Python", "Flux"],
    description: "Procedural asset generation pipelines for game engines.",
  }
];

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen bg-[#050505] text-white">
      <GridBackground />
      <InteractionOverlay />
      <AgenticHUD />
      <FloatingDock />
      {/* 
         HERO SECTION: VIZCOM REVEAL 
         Simulates the "Sketch to Reality" effect
      */}
      <VizcomReveal />

      {/* 
         Introduction / Philosophy 
      */}
      <RevealSection>
        <section id="manifesto" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#111]">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <span className="font-mono text-blue-500 text-xs tracking-widest mb-6 block">MANIFESTO_V1</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-white text-balance">
                <GsapText className="font-light text-neutral-300">THE GAP BETWEEN</GsapText><br />
                <span className="text-neutral-500 font-normal"><GsapText>THOUGHT</GsapText></span> <GsapText className="font-thin italic">AND</GsapText> <span className="text-white font-black"><GsapText>REALITY</GsapText></span><br />
                <GsapText>IS DISAPPEARING.</GsapText>
              </h2>
            </div>

            <div className="md:col-span-5 flex flex-col justify-end">
              <div className="text-lg text-neutral-400 leading-relaxed mb-8">
                <GsapText className="block">We are entering the Agentic Era. Code is no longer just syntax; it is intent.</GsapText>
                <br />
                <GsapText className="block">As a 19-year-old Architect, I don&apos;t just build websites—I build autonomous systems that perceive, reason, and execute.</GsapText>
              </div>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                <GsapText>My mission is to fuse high-fidelity design with agentic intelligence, creating interfaces that feel less like tools and more like extensions of the mind.</GsapText>
              </p>
              <a href="#projects" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 w-fit hover:text-blue-500 hover:border-blue-500 transition-colors">
                View The Architecture <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* 
         MARQUEE: TECH STACK
      */}
      <section className="py-24 overflow-hidden bg-[#050505]">
        <ScrollTextMotion baseVelocity={-5}>NEXT.JS PYTHON FLUX REACT THREE.JS AI-AGENTS </ScrollTextMotion>
        <ScrollTextMotion baseVelocity={5}>TYPESCRIPT TAILWIND FRAMER-MOTION GSAP BLENDER </ScrollTextMotion>
        <ScrollTextMotion baseVelocity={-3}>VIBE-CODING CYBERPUNK GENERATIVE-ART NEURAL-NETS </ScrollTextMotion>
      </section>

      {/* 
         BENTO STACK 
         Renamed to match "Industrial" vibe
      */}
      <BentoStack />

      {/* 
         TERMINAL 
      */}
      <Terminal />

      <GsapScrollMask>
        <ProjectShowcase />
      </GsapScrollMask>

      <FlyThrough />

      <section id="archives">
        <LinesGallery />
      </section>

      <ProjectInitiation />
    </main>
  );
}
