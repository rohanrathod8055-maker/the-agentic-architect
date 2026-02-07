"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CinematicHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"
        >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            {/* Main content */}
            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 text-center px-6 max-w-7xl mx-auto"
            >
                {/* Main title with stagger - VengeanceUI style */}
                <div className="mb-8 overflow-hidden">
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {"ROHAN RATHOD".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.025,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                style={{
                                    marginRight: char === " " ? "1.5rem" : "0"
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Subtitle - Clean and professional */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    Full-Stack Developer & AI Enthusiast specializing in building intelligent,
                    user-centric web applications with modern technologies
                </motion.p>

                {/* Accent line */}
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-12 max-w-md mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />
            </motion.div>
        </section>
    );
}
