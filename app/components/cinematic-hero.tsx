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
            {/* Animated gradient orbs - smaller on mobile */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-600/20 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-600/20 rounded-full blur-3xl"
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
                className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto"
            >
                {/* Main title - Mobile optimized with line break */}
                <div className="mb-6 md:mb-8 overflow-hidden">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        {/* First name */}
                        <motion.span
                            className="block bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            ROHAN
                        </motion.span>
                        {/* Last name */}
                        <motion.span
                            className="block bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            RATHOD
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Subtitle - Clean and professional */}
                <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 font-medium tracking-wide max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Full-Stack Developer & AI Enthusiast specializing in building intelligent, user-centric web applications with modern technologies
                </motion.p>

                {/* Accent line */}
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8 md:mt-12 max-w-xs md:max-w-md mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 1.3 }}
                />
            </motion.div>
        </section>
    );
}
