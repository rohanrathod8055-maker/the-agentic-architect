"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import AIChatCard from "./ui/ai-chat-card";

const projects = [
    {
        title: "Manhwa Aggregator",
        category: "Full Stack / Scraping",
        tech: ["Next.js", "Python", "Puppeteer"],
        description: "Automated manga tracking system with real-time updates and chapter notifications. Serves 10K+ daily users.",
        link: "https://inkflow-roan.vercel.app/",
        featured: true
    },
    {
        title: "Channel Analysis Tool",
        category: "AI Data Analysis",
        tech: ["Firebase", "YouTube API", "Gemini"],
        description: "AI-powered dashboard for creator growth and metrics analysis.",
        featured: false
    },
    {
        title: "AI Game Dev",
        category: "Generative AI",
        tech: ["Blender API", "Python", "Flux"],
        description: "Procedural asset generation pipelines for game engines.",
        featured: false
    }
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 relative">
            <div className="max-w-6xl mx-auto">
                {/* Clean Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl">
                        A selection of work I've built — from AI-powered platforms to full-stack applications.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link || "#"}
                            target={project.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group block"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800/50 hover:border-neutral-700 hover:bg-[#0d0d0d] transition-all duration-300">
                                {/* Left Side - Info */}
                                <div className="flex-1 mb-4 md:mb-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                    <p className="text-neutral-400 text-sm md:text-base mb-3 max-w-xl">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side - Category */}
                                <div className="md:text-right">
                                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Rika Chat Card - Separate Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-neutral-400">Ask Rika about my work</span>
                    </div>
                    <div className="max-w-md">
                        <AIChatCard />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
