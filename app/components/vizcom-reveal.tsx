"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function VizcomReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // The "Clip" animation - widens the reveal window as you scroll
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"] // Starts completely closed (pure sketch), opens to full render
    );

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">

                {/* Layer 1: The "Sketch" or "Wireframe" (Background) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/sketch.jpeg"
                        alt="Architectural Sketch Wireframe"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Layer 2: The "Final Render" (Foreground with Reveal) */}
                <motion.div
                    style={{ clipPath }}
                    className="absolute inset-0 flex items-center justify-center z-10 will-change-[clip-path]"
                >
                    <Image
                        src="/render.jpeg"
                        alt="Architectural Final Render"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Floating UI Text */}
                <div className="absolute bottom-20 text-center z-20 mix-blend-difference pointer-events-none">
                    <h2 className="text-white text-5xl md:text-9xl font-bold tracking-tighter">RENDER</h2>
                </div>
            </div>
        </div>
    );
}
