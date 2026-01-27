"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const words = children.split(" ");

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.2em] leading-[1.05]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.33, 1, 0.68, 1],
                            delay: delay + i * 0.03, // Stagger effect
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
