"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["INITIALIZING...", "LOADING ASSETS...", "CONNECTING NEURAL NET...", "ESTABLISHING UPLINK...", "SYSTEM READY"];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cycle through words
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === words.length - 1) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 800); // Slight delay after last word
                    return prev;
                }
                return prev + 1;
            });
        }, 400); // Speed of word cycle

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white overflow-hidden"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 h-1 bg-blue-600 transition-all duration-[2000ms] ease-linear w-full origin-left"
                        style={{ transform: `scaleX(${(index + 1) / words.length})` }}
                    />

                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-2 border-white/20 border-t-blue-500 rounded-full animate-spin" />
                        <div className="font-mono text-sm tracking-widest h-6 overflow-hidden relative text-center">
                            <motion.span
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                className="block"
                            >
                                {words[index]}
                            </motion.span>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10 font-mono text-xs text-neutral-600">
                        SYSTEM_ID: 8055_ARCHITECT
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
