"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Newspaper, Zap, Database, Globe, Code, Sparkles } from "lucide-react";
import Link from "next/link";

const techStack = [
    { layer: "Frontend", tech: "Next.js 16, React, TailwindCSS" },
    { layer: "Backend", tech: "Next.js API Routes (Node.js)" },
    { layer: "Database", tech: "Supabase (PostgreSQL)" },
    { layer: "Scraping", tech: "RSS Parser, Cheerio, Axios" },
    { layer: "UI Effects", tech: "Framer Motion, Custom Shaders" },
    { layer: "Hosting", tech: "Vercel (Edge Network)" },
];

const features = [
    {
        icon: <Newspaper className="w-5 h-5" />,
        title: "7 Major Sources",
        description: "Google News, TechCrunch, The Verge, Ars Technica, BBC Tech, Wired, Engadget"
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Real-Time Updates",
        description: "Auto-refresh every 5 minutes, Vercel Cron for daily scraping"
    },
    {
        icon: <Database className="w-5 h-5" />,
        title: "Full Content Extraction",
        description: "Complete article text, featured images, redirect handling"
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        title: "AI Auto-Categorization",
        description: "Detects AI, Space, Gaming, Cybersecurity, Innovation, Crypto"
    },
];

const skills = [
    "Full-Stack Development",
    "Database Design",
    "Web Scraping",
    "API Development",
    "UI/UX Design",
    "DevOps & CI/CD"
];

export default function InkFlowPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-12 border-b border-neutral-800/50">
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Projects</span>
                    </Link>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">📰</span>
                            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                FULL STACK
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            InkFlow
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-3xl">
                            Manga-Inspired Tech News Aggregator
                        </p>

                        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mb-8">
                            A real-time tech news aggregator with a unique manga-inspired UI design.
                            Automatically scrapes, categorizes, and displays the latest technology news
                            from 7 major sources in a visually stunning interface with halftone patterns,
                            speed lines, and liquid metal effects.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://inkflow-news.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/rohanrathod8055-maker/inkflow-news"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 md:px-12 border-b border-neutral-800/50">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-12"
                    >
                        Key Features
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-[#0a0a0a] border border-neutral-800/50"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-neutral-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-6 md:px-12 border-b border-neutral-800/50">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-12"
                    >
                        Tech Stack
                    </motion.h2>

                    <div className="space-y-4">
                        {techStack.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-6 py-4 border-b border-neutral-800/30"
                            >
                                <span className="text-neutral-500 font-mono text-sm w-24">
                                    {item.layer}
                                </span>
                                <span className="text-white">{item.tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8"
                    >
                        Skills Demonstrated
                    </motion.h2>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-4 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    {/* Back to Projects */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 pt-8 border-t border-neutral-800/50"
                    >
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to all projects</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
