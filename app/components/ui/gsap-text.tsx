"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface GsapTextProps {
    children: string;
    className?: string;
    ease?: string;
}

export default function GsapText({ children, className, ease = "power3.out" }: GsapTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const wordsRef = useRef<HTMLSpanElement[]>([]);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Stagger entire group (smoother "wave")
            gsap.fromTo(
                wordsRef.current,
                {
                    y: "110%",
                    skewY: 7,
                    opacity: 0
                },
                {
                    y: "0%",
                    skewY: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "expo.out",
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, [ease]);

    // Splitting logic
    const words = children.split(" ");

    return (
        <span ref={containerRef} className={cn("inline-block overflow-hidden leading-[1.1]", className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-2 -my-2 pr-2 -mr-1">
                    <span
                        ref={(el) => { if (el) wordsRef.current[i] = el; }}
                        className="inline-block will-change-transform"
                    >
                        {word}
                    </span>
                </span>
            ))}
        </span>
    );
}
