"use client";

import { motion } from "framer-motion";

interface FlipTextProps {
    text: string;
    className?: string;
    staggerDelay?: number;
    duration?: number;
}

export default function FlipText({
    text,
    className = "",
    staggerDelay = 0.05,
    duration = 0.5
}: FlipTextProps) {
    const characters = text.split("");

    return (
        <span className={`inline-block ${className}`}>
            {characters.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className="inline-block"
                    initial={{ rotateX: 0 }}
                    whileInView={{ rotateX: 360 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration,
                        delay: index * staggerDelay,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        display: "inline-block",
                        transformOrigin: "50% 50%",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}

// Alternative: Flip on hover
export function FlipTextHover({
    text,
    className = "",
    staggerDelay = 0.03,
    duration = 0.4
}: FlipTextProps) {
    const characters = text.split("");

    return (
        <span className={`inline-block ${className} group`}>
            {characters.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className="inline-block"
                    whileHover={{ rotateX: 360 }}
                    transition={{
                        duration,
                        delay: index * staggerDelay,
                        ease: "easeInOut",
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        display: "inline-block",
                        transformOrigin: "50% 50%",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
