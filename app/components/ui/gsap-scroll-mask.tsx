"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GsapScrollMask({ children }: { children: React.ReactNode }) {
    const container = useRef<HTMLDivElement>(null);
    const textRef = useRef<SVGTextElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        if (!container.current || !textRef.current || !svgRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=150%", // Shortened scroll distance for snappier reveal
                    scrub: 1,
                    pin: true,
                },
            });

            // Animate the text scaling up until it reveals the content
            // And fade out the SVG at the end to ensure clicks work
            tl.fromTo(
                textRef.current,
                { scale: 1, transformOrigin: "center center" },
                { scale: 50, ease: "power2.inOut" }
            ).to(svgRef.current, { opacity: 0, duration: 0.1 }, "-=0.5");

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="relative w-full h-screen overflow-hidden bg-[#050505]">

            {/* Content Layer (Behind Mask) */}
            <div className="absolute inset-0 z-0 w-full h-full">
                {/* Fixed Background Image */}
                <div className="absolute inset-0">
                    <img src="/cinematic-bg.png" alt="Background" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Scrollable Content Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {children}
                </div>
            </div>

            {/* SVG Mask Layer (Foreground) */}
            <svg ref={svgRef} className="absolute inset-0 z-20 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="mask">
                        <rect width="100%" height="100%" fill="white" />
                        <text
                            ref={textRef}
                            x="50%" y="50%" textAnchor="middle" dy=".3em"
                            className="text-[150px] font-black tracking-tighter"
                            fill="black"
                        >
                            SELECTED_WORKS
                        </text>
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="#050505" mask="url(#mask)" />
            </svg>

        </div>
    );
}
