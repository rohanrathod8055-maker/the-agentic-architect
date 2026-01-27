"use client";

import { motion } from "framer-motion";

const technologies = [
    "NEXT.JS 14", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION", "THREE.JS",
    "LLM INTEGRATION", "PYTHON", "SUPABASE", "GRAPHQL", "FIGMA"
];

export default function InfiniteMarquee() {
    return (
        <div className="relative flex overflow-hidden py-10 bg-[#050505] border-y border-[#111]">
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,#050505,transparent_20%,transparent_80%,#050505)]" />

            <motion.div
                className="flex whitespace-nowrap gap-16 font-bold text-6xl md:text-8xl tracking-tighter text-[#111] uppercase select-none"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                ))}
                {technologies.map((tech, i) => (
                    <span key={`dup-${i}`}>{tech}</span>
                ))}
            </motion.div>
        </div>
    );
}
