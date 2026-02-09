"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AIChatCard from "./ui/ai-chat-card";

const projects = [
    {
        title: "Manhwa Aggregator",
        category: "Full Stack",
        tech: ["Next.js", "Python", "Puppeteer"],
        description: "Automated manga tracking platform with real-time chapter updates and AI-powered recommendations. Serving 10K+ daily users.",
        link: "https://inkflow-roan.vercel.app/",
    }
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-32 px-6 md:px-12 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
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
                        Production applications I've built and shipped.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="space-y-6">
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
                            <div className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800/50 hover:border-neutral-600 hover:bg-[#0d0d0d] transition-all duration-300">
                                <div className="flex-1 mb-4 md:mb-0">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                    <p className="text-neutral-400 mb-4 max-w-xl">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:text-right">
                                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* More projects hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-neutral-600 text-sm mt-12"
                >
                    More projects coming soon...
                </motion.p>

                {/* Rika Chat */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20"
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
