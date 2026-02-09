"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Music, Headphones, ListMusic, Mic2, Smartphone, Shuffle, Globe } from "lucide-react";
import Link from "next/link";
import ParticleField from "../../components/ui/particle-field";
import PerspectiveGrid from "../../components/ui/perspective-grid";

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

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const cardHover = {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
};

export default function KudoMusicPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
            {/* Background Effects */}
            <PerspectiveGrid className="fixed inset-0 opacity-10" />
            <ParticleField className="opacity-30" />

            {/* Gradient Orbs - Green theme for Spotify-like */}
            <div className="fixed top-1/4 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-12 border-b border-neutral-800/50 z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Projects</span>
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                            <motion.span
                                className="text-4xl"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                            >
                                🎵
                            </motion.span>
                            <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                                PWA / FULL STACK
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-green-400 bg-clip-text text-transparent"
                        >
                            Kudo Music
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-3xl"
                        >
                            Spotify-Like Music Streaming PWA
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-neutral-400 text-lg leading-relaxed max-w-3xl mb-8"
                        >
                            A full-featured music streaming Progressive Web App that provides a Spotify-like experience.
                            Streams millions of songs via JioSaavn API, features real-time synced lyrics,
                            playlist management, Spotify import, and works seamlessly across desktop and mobile devices.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://kudo-music.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Globe className="w-4 h-4" />
                                Live Demo
                            </motion.a>
                            <motion.a
                                href="https://github.com/rohanrathod8055-maker/Kudo-Music"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-all duration-300 border border-neutral-700"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 md:px-12 border-b border-neutral-800/50 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-12"
                    >
                        Key Features
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="p-6 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800/50 hover:border-green-500/30 transition-colors cursor-default"
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center text-green-400 mb-4"
                                    whileHover={{ rotate: 5 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-neutral-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-6 md:px-12 border-b border-neutral-800/50 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-12"
                    >
                        Tech Stack
                    </motion.h2>

                    <div className="space-y-0">
                        {techStack.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                whileHover={{ x: 10, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                                className="flex items-center gap-6 py-5 border-b border-neutral-800/30 transition-all cursor-default rounded-lg px-4 -mx-4"
                            >
                                <span className="text-neutral-500 font-mono text-sm w-28 shrink-0">
                                    {item.layer}
                                </span>
                                <span className="text-white">{item.tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="py-20 px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8"
                    >
                        Skills Demonstrated
                    </motion.h2>

                    <motion.div
                        className="flex flex-wrap gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                                className="px-4 py-2 text-sm bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full text-neutral-300 cursor-default transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Back to Projects */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 pt-8 border-t border-neutral-800/50"
                    >
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to all projects</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
