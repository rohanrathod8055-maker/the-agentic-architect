"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    variant?: "primary" | "secondary" | "ghost";
}

export default function AnimatedButton({
    children,
    onClick,
    href,
    className = "",
    variant = "primary"
}: AnimatedButtonProps) {
    const baseClasses = "relative px-8 py-4 font-semibold rounded-lg overflow-hidden transition-all duration-300";

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
        ghost: "bg-transparent text-white hover:bg-white/10"
    };

    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${className} group`}
        >
            {/* Animated shimmer effect */}
            <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                    translateX: ["-100%", "100%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Glowing border animation */}
            <motion.div
                className="absolute inset-[0] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                    background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
                    backgroundSize: "200% 100%",
                    filter: "blur(8px)",
                    zIndex: -1,
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </Component>
    );
}

// Minimal shimmer variant
export function ShimmerButton({
    children,
    onClick,
    href,
    className = ""
}: AnimatedButtonProps) {
    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`relative px-6 py-3 font-semibold text-white rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all ${className} group`}
        >
            {/* Shimmer effect */}
            <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                    x: ["-200%", "200%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <span className="relative z-10">{children}</span>
        </Component>
    );
}
