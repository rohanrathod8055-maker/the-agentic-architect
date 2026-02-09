"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Music, Headphones, ListMusic, Mic2, Smartphone, Shuffle, Globe } from "lucide-react";
import Link from "next/link";

const techStack = [
    { layer: "Frontend", tech: "Next.js 16, React, TypeScript" },
    { layer: "State", tech: "Zustand" },
    { layer: "Styling", tech: "CSS Modules, Custom CSS" },
    { layer: "Audio", tech: "HTML5 Audio API" },
    { layer: "Music API", tech: "JioSaavn API (via proxy)" },
    { layer: "Lyrics API", tech: "LRCLIB (synced lyrics)" },
    { layer: "Storage", tech: "LocalStorage (playlists, liked songs)" },
    { layer: "Hosting", tech: "Vercel (Edge Network)" },
];

const features = [
    {
        icon: <Music className="w-5 h-5" />,
        title: "Millions of Songs",
        description: "Stream high-quality music from JioSaavn's massive catalog"
    },
    {
        icon: <Mic2 className="w-5 h-5" />,
        title: "Synced Lyrics",
        description: "Real-time lyrics with karaoke-style auto-scroll highlighting"
    },
    {
        icon: <ListMusic className="w-5 h-5" />,
        title: "Playlist Management",
        description: "Create custom playlists & import directly from Spotify URLs"
    },
    {
        icon: <Smartphone className="w-5 h-5" />,
        title: "PWA Ready",
        description: "Installable on mobile with Spotify Android-style responsive design"
    },
    {
        icon: <Shuffle className="w-5 h-5" />,
        title: "Smart Discovery",
        description: "Top Hits, New Releases, Charts, and random song discovery"
    },
    {
        icon: <Headphones className="w-5 h-5" />,
        title: "Full Player Controls",
        description: "Play, pause, seek, volume, shuffle, repeat modes"
    },
];

const skills = [
    "Full-Stack Development",
    "State Management (Zustand)",
    "API Integration",
    "Audio Engineering",
    "Responsive Design",
    "PWA Development",
    "Third-Party Integration",
    "DevOps & CI/CD"
];

export default function KudoMusicPage() {
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
                            <span className="text-3xl">🎵</span>
                            <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                                PWA / FULL STACK
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            Kudo Music
                        </h1>

                        <p className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-3xl">
                            Spotify-Like Music Streaming PWA
                        </p>

                        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mb-8">
                            A full-featured music streaming Progressive Web App that provides a Spotify-like experience.
                            Streams millions of songs via JioSaavn API, features real-time synced lyrics,
                            playlist management, Spotify import, and works seamlessly across desktop and mobile devices.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://kudo-music.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/rohanrathod8055-maker/Kudo-Music"
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-[#0a0a0a] border border-neutral-800/50"
                            >
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4">
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
