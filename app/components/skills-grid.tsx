"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = {
    Frontend: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
    ],
    Backend: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "MongoDB", level: 70 },
    ],
    "AI & Tools": [
        { name: "OpenAI API", level: 80 },
        { name: "LangChain", level: 75 },
        { name: "GSAP", level: 85 },
        { name: "Git", level: 90 },
        { name: "Blender", level: 70 },
    ],
};

export default function SkillsGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const bars = containerRef.current.querySelectorAll(".skill-bar");

        bars.forEach((bar) => {
            gsap.fromTo(
                bar,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative" ref={containerRef}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">
                        Technical Skills
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
                        What I Work With
                    </h2>
                </motion.div>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.15 }}
                            className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#1a1a1a] rounded-xl p-6 hover:border-blue-500/30 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-6 text-blue-400">{category}</h3>
                            <div className="space-y-4">
                                {skillList.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-neutral-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-neutral-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-[#0a0a0a] rounded-full overflow-hidden border border-neutral-800">
                                            <div
                                                className="skill-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
