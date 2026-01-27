"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
}

export function TiltCard({ children, className, href, target }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for tilt effect
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform mouse position into 3D rotation values
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const rectRef = useRef<DOMRect | null>(null);

    const handleMouseEnter = () => {
        if (ref.current) {
            rectRef.current = ref.current.getBoundingClientRect();
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!rectRef.current) return;

        const width = rectRef.current.width;
        const height = rectRef.current.height;

        // Calculate normalized mouse position (-0.5 to 0.5)
        const mouseX = e.clientX - rectRef.current.left;
        const mouseY = e.clientY - rectRef.current.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        // Reset tilt when mouse leaves
        x.set(0);
        y.set(0);
    };

    const Component = href ? motion.a : motion.div;

    return (
        <Component
            // @ts-ignore - motion.a and motion.div have slightly different props but compatible here
            ref={ref}
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.95 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "block relative rounded-2xl bg-muted/50 border border-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-accent/20 hover:border-primary/30 group cursor-pointer",
                className
            )}
        >
            <div style={{ transform: "translateZ(50px)" }} className="h-full pointer-events-none">
                {children}
            </div>
            {/* Glowing corner effect */}
            <div className="absolute -inset-0.5 bg-neon-gradient opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-30 -z-10 rounded-2xl pointer-events-none" />
        </Component>
    );
}
