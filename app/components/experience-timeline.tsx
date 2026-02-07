"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code } from "lucide-react";

const timeline = [
    {
        icon: GraduationCap,
        date: "2025 - Present",
        title: "Bachelor of Computer Science (BCS)",
        organization: "DHB Soni College, Solapur",
        description: "Currently in 2nd year. Focusing on Web Development, AI/ML, and Software Engineering. Active member of coding club.",
        type: "education",
    },
    {
        icon: Code,
        date: "2024 - Present",
        title: "Freelance Web Developer",
        organization: "Self-Employed",
        description: "Building custom web applications for clients. Specialized in full-stack development with React, Next.js, and AI integration. Successfully delivered 5+ projects.",
        type: "work",
    },
];

export default function ExperienceTimeline() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">
                        Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
                        Experience & Education
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-20"
                                >
                                    {/* Icon */}
                                    <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center border-4 border-[#050505]">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#1a1a1a] rounded-xl p-6 hover:border-blue-500/30 transition-all group">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-blue-400 font-medium mt-1">
                                                    {item.organization}
                                                </p>
                                            </div>
                                            <span className="text-sm text-neutral-500 font-mono mt-2 md:mt-0">
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="text-neutral-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
