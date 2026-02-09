"use client";

import { motion } from "framer-motion";
import Terminal from "./components/Terminal";
import CinematicHero from "./components/cinematic-hero";
import ProfessionalAbout from "./components/professional-about";
import SkillsGrid from "./components/skills-grid";
import ExperienceTimeline from "./components/experience-timeline";
import ContactCTA from "./components/contact-cta";
import Footer from "./components/footer";
import { TiltCard } from "./components/ui/tilt-card";
import ScrollTextMotion from "./components/ui/scroll-text-motion";
import ProjectInitiation from "./components/project-initiation";
import GsapText from "./components/ui/gsap-text";
import GsapScrollMask from "./components/ui/gsap-scroll-mask";
import BentoStack from "./components/bento-stack";
import ProjectShowcase from "./components/project-showcase";
import LinesGallery from "./components/lines-gallery";
import AgenticHUD from "./components/agentic-hud";
import InteractionOverlay from "./components/interaction-overlay";
import PerspectiveGrid from "./components/ui/perspective-grid";
import FloatingDock from "./components/ui/floating-dock";
import RevealSection from "./components/ui/reveal-section";
import FlipText from "./components/ui/flip-text";
import LightLines from "./components/ui/light-lines";
import AnimatedButton from "./components/ui/animated-button";
import ParticleField from "./components/ui/particle-field";
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
      <PerspectiveGrid className="fixed inset-0 opacity-10" />
      <ParticleField className="opacity-40" />
      <InteractionOverlay />
      <AgenticHUD />
      <FloatingDock />
      {/* 
         CINEMATIC HERO SECTION 
         Modern parallax fade-in with character stagger
      */}
      <CinematicHero />

      {/* ABOUT ME SECTION */}
      <ProfessionalAbout />

      {/* 
         Introduction / Philosophy 
      */}
      <RevealSection>
        <section id="manifesto" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#111]">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <span className="font-mono text-blue-500 text-xs tracking-widest mb-6 block">MANIFESTO_V1</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-white text-balance">
                <FlipText text="THE GAP BETWEEN" className="font-light text-neutral-300" /><br />
                <span className="text-neutral-500 font-normal"><FlipText text="THOUGHT" /></span> <FlipText text="AND" className="font-thin italic" /> <span className="text-white font-black"><FlipText text="REALITY" /></span><br />
                <FlipText text="IS DISAPPEARING." />
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
              <AnimatedButton href="#projects" variant="secondary" className="w-fit">
                View The Architecture <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* SKILLS SECTION */}
      <SkillsGrid />

      {/* 
         MARQUEE: TECH STACK
      */}
      <section className="py-24 overflow-hidden bg-[#050505] relative">
        <LightLines lineCount={3} duration={4} className="absolute inset-0 opacity-30" />
        <ScrollTextMotion baseVelocity={-5}>NEXT.JS PYTHON FLUX REACT THREE.JS AI-AGENTS </ScrollTextMotion>
        <ScrollTextMotion baseVelocity={5}>TYPESCRIPT TAILWIND FRAMER-MOTION GSAP BLENDER </ScrollTextMotion>
        <ScrollTextMotion baseVelocity={-3}>RAPID-PROTOTYPING MODERN-DESIGN GENERATIVE-ART NEURAL-NETS </ScrollTextMotion>
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

      <ProjectShowcase />
      <section id="archives">
        <LinesGallery />
      </section>

      {/* EXPERIENCE TIMELINE */}
      <ExperienceTimeline />

      {/* CONTACT SECTION */}
      <ContactCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
