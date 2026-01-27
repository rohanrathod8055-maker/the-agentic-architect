"use client";

import { motion } from "framer-motion";
import { TiltCard } from "./ui/tilt-card";
import { ExternalLink, ArrowRight } from "lucide-react";
import AIChatCard from "./ui/ai-chat-card";

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

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 z-10 relative">
            <div className="max-w-7xl mx-auto">
                {/* We removed the explicit Header because the ScrollMask acts as the header now */}
                <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
                    <div className="flex flex-col">
                        <span className="text-blue-500 font-mono text-xs tracking-widest mb-2">DEPLOYMENTS</span>
                        {/* Optional: Smaller subheader if the big one is gone */}
                    </div>

                    <a href="#" className="hidden md:flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors">
                        View All Archives <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* The Neural Interface Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                    >
                        <AIChatCard />
                    </motion.div>

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 1) * 0.1 }}
                        >
                            <TiltCard
                                href={project.link || "#"}
                                target={project.link ? "_blank" : "_self"}
                                className="h-96 flex flex-col justify-between bg-[#111] border-[#222] hover:border-blue-500/20 transition-all cursor-pointer"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 uppercase tracking-wider">{project.category}</span>
                                        <ExternalLink className="w-5 h-5 text-neutral-600 group-hover:text-blue-500 transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-500 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-neutral-400 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tech.map((t: string) => (
                                        <span key={t} className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded">#{t}</span>
                                    ))}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
