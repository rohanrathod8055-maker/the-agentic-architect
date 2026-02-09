"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import AIChatCard from "./ui/ai-chat-card";

const projects = [
    {
        title: "InkFlow",
        emoji: "📰",
        category: "Full Stack",
        tech: ["Next.js 16", "Supabase", "Vercel"],
        description: "Manga-inspired tech news aggregator. Scrapes 100+ articles daily from 7 sources with AI categorization and stunning UI effects.",
        internalLink: "/projects/inkflow",
        externalLink: "https://inkflow-news.vercel.app",
    },
    {
        title: "Kudo Music",
        emoji: "🎵",
        category: "PWA / Full Stack",
        tech: ["Next.js 16", "TypeScript", "Zustand"],
        description: "Spotify-like music streaming PWA. Millions of songs, synced lyrics, playlist management, and Spotify import.",
        internalLink: "/projects/kudo-music",
        externalLink: "https://kudo-music.vercel.app",
    },
    {
        title: "Manhwa Aggregator",
        emoji: "📚",
        category: "Full Stack",
        tech: ["Next.js", "Python", "Puppeteer"],
        description: "Automated manga tracking platform with real-time chapter updates and AI-powered recommendations.",
        externalLink: "https://inkflow-roan.vercel.app/",
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

                {/* Projects Grid */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800/50 hover:border-neutral-600 hover:bg-[#0d0d0d] transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    {/* Left Side */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-2xl">{project.emoji}</span>
                                            <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <p className="text-neutral-400 mb-4 max-w-xl">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.internalLink && (
                                                <Link
                                                    href={project.internalLink}
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
                                                >
                                                    View Details
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </Link>
                                            )}
                                            <a
                                                href={project.externalLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700"
                                            >
                                                Live Demo
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className="md:text-right">
                                        <span className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
