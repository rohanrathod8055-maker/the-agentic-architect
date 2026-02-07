"use client";

import { motion } from "framer-motion";

interface LightLinesProps {
    className?: string;
    lineCount?: number;
    duration?: number;
}

export default function LightLines({
    className = "",
    lineCount = 5,
    duration = 3
}: LightLinesProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {Array.from({ length: lineCount }).map((_, index) => {
                    const xPosition = (100 / (lineCount + 1)) * (index + 1);
                    const delay = index * 0.5;

                    return (
                        <motion.line
                            key={index}
                            x1={`${xPosition}%`}
                            y1="0%"
                            x2={`${xPosition}%`}
                            y2="100%"
                            stroke="url(#lightGradient)"
                            strokeWidth="2"
                            initial={{ y1: "-100%", y2: "-100%" }}
                            animate={{
                                y1: ["0%", "200%"],
                                y2: ["0%", "200%"]
                            }}
                            transition={{
                                duration,
                                delay,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: lineCount * 0.5
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

// Horizontal variant
export function LightLinesHorizontal({
    className = "",
    lineCount = 5,
    duration = 3
}: LightLinesProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lightGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {Array.from({ length: lineCount }).map((_, index) => {
                    const yPosition = (100 / (lineCount + 1)) * (index + 1);
                    const delay = index * 0.5;

                    return (
                        <motion.line
                            key={index}
                            x1="0%"
                            y1={`${yPosition}%`}
                            x2="100%"
                            y2={`${yPosition}%`}
                            stroke="url(#lightGradientH)"
                            strokeWidth="2"
                            initial={{ x1: "-100%", x2: "-100%" }}
                            animate={{
                                x1: ["0%", "200%"],
                                x2: ["0%", "200%"]
                            }}
                            transition={{
                                duration,
                                delay,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: lineCount * 0.5
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
