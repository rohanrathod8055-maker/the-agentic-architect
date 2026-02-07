"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Award, Clock } from "lucide-react";

export default function ProfessionalAbout() {
    const stats = [
        { icon: Clock, label: "Years Coding", value: "2+" },
        { icon: Rocket, label: "Projects Built", value: "5+" },
        { icon: Code2, label: "Technologies", value: "15+" },
        { icon: Award, label: "Happy Clients", value: "3+" },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left: About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">
                            About Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
                            Full-Stack Developer & AI Enthusiast
                        </h2>
                        <div className="space-y-4 text-neutral-300 leading-relaxed">
                            <p>
                                I'm a <span className="text-white font-semibold">versatile developer</span> specializing in{" "}
                                <span className="text-white font-semibold">AI agent architecture</span> and full-stack development.
                                I build websites, mobile apps, and intelligent systems using cutting-edge AI technologies - from GPT-4
                                to Claude and Gemini.
                            </p>
                            <p>
                                My passion lies in <span className="text-white font-semibold">rapid prototyping</span> and creating{" "}
                                <span className="text-white font-semibold">agentic AI systems</span> that solve real problems across
                                multiple platforms. I'm currently pursuing my BCS while preparing to study abroad in{" "}
                                <span className="text-white font-semibold">Japan</span>, where I aim to advance my expertise in
                                AI research and international software development.
                            </p>
                            <p className="text-blue-400 font-medium">
                                🎯 Open to internships and full-time opportunities in software development
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-8">
                            <motion.a
                                href="#contact"
                                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                            <motion.a
                                href="/resume"
                                className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right: Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#1a1a1a] rounded-xl p-6 hover:border-blue-500/30 transition-all group"
                                >
                                    <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-neutral-400">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
