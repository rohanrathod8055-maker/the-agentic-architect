"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    link?: string;
    image?: string;
}

interface StaggeredProjectsProps {
    projects: Project[];
}

export default function StaggeredProjects({ projects }: StaggeredProjectsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!containerRef.current || !isInView) return;

        const cards = containerRef.current.querySelectorAll(".project-card");

        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 100,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: {
                    amount: 0.6,
                    from: "start",
                },
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, [isInView]);

    return (
        <div ref={containerRef} className="w-full">
            {/* Staggered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link || "#"}
                        target={project.link ? "_blank" : "_self"}
                        className={`project-card group relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#1a1a1a] rounded-xl p-6 overflow-hidden hover:border-blue-500/40 transition-all duration-500 cursor-pointer ${index % 3 === 1 ? "md:mt-12" : ""
                            } ${index % 3 === 2 ? "md:mt-24" : ""}`}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Category Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-blue-400 transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-neutral-400 leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs font-mono text-neutral-500 bg-[#0a0a0a] border border-neutral-800 px-2.5 py-1 rounded-md group-hover:border-neutral-700 group-hover:text-neutral-400 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
