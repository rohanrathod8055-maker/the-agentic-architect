"use client";

import { motion } from "framer-motion";
import AIChatCard from "./ui/ai-chat-card";
import StaggeredProjects from "./ui/staggered-projects";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Manhwa Aggregator",
        category: "Full Stack / Scraping",
        tech: ["Next.js", "Python", "Puppeteer"],
        description: "Automated manga tracking system with real-time updates and chapter notifications.",
        link: "https://inkflow-roan.vercel.app/"
    },
    {
        title: "Channel Analysis Tool",
        category: "AI Data Analysis",
        tech: ["Firebase", "YouTube API", "Gemini"],
        description: "AI-powered dashboard for creator growth and metrics analysis.",
    },
    {
        title: "AI Game Dev",
        category: "Generative AI",
        tech: ["Blender API", "Python", "Flux"],
        description: "Procedural asset generation pipelines for game engines.",
    }
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 z-10 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
                    <div className="flex flex-col">
                        <span className="text-blue-500 font-mono text-xs tracking-widest mb-2">SELECTED WORKS</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                    </div>

                    <a href="#" className="hidden md:flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors">
                        View All Archives <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                    {/* The Neural Interface Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <AIChatCard />
                    </motion.div>

                    {/* Staggered Projects Grid */}
                    <div className="lg:col-span-3">
                        <StaggeredProjects projects={projects} />
                    </div>
                </div>
            </div>
        </section>
    );
}
