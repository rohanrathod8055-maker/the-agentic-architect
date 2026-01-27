"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FlyThrough() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false }); // No transparency for perf
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Tunnel Parameters
        const isMobile = window.innerWidth < 768;
        const speed = isMobile ? 1.5 : 2;
        const numRects = isMobile ? 15 : 30; // Fewer rects on mobile
        const depth = 2000;

        // State
        const rects: { z: number; rotation: number }[] = [];

        // Init Rects
        for (let i = 0; i < numRects; i++) {
            rects.push({
                z: Math.random() * depth,
                rotation: i * 0.1 // Slight twist
            });
        }

        // Animation Loop
        let animationFrameId: number;
        let time = 0;

        const render = () => {
            time += 0.01;

            // Clear background
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            // Center of screen
            const cx = width / 2;
            const cy = height / 2;

            // Draw Rects
            ctx.lineWidth = 2;

            // Sort rects by depth (painters algorithm, though wireframe doesn't strictly need it if additive)
            rects.sort((a, b) => b.z - a.z);

            rects.forEach((rect, i) => {
                // Update Z
                rect.z -= speed * 5; // Move towards viewer

                // Loop Z
                if (rect.z <= 0) {
                    rect.z = depth;
                }

                // Perspective projection
                // fov factor. simple: scale = 1 / z
                const k = 1000 / rect.z;

                // If it's too close (huge), fade it out or skip
                if (k > 20) return;

                const size = 200 * k; // Base size * scale
                const alpha = Math.min(1, rect.z / 500); // Fade in from distance

                // Color pulsing (Cyan/Blue Brand Colors)
                // Cycle between Cyan (180) and Blue (240)
                const hue = 180 + (Math.sin(time + i * 0.1) * 30 + 30);
                ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${alpha})`; // High lightness for neon effect

                // Draw
                ctx.beginPath();

                // Rotation twist
                const twist = rect.z * 0.002 + time;

                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(twist);
                ctx.strokeRect(-size / 2, -size / 2, size, size);
                ctx.restore();

                // Connectors (optional, complex in 2D without tracking vertices)
            });

            // Grid / Starfield effect background? 
            // Let's keep it simple: Just the tunnel.

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Resize handler
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="h-screen w-full relative bg-black overflow-hidden">
            <canvas ref={canvasRef} className="block w-full h-full" />

            {/* Overlay Text */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
                <motion.div
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.95, 1.05, 0.95],
                        textShadow: [
                            "0 0 10px rgba(0,255,255,0.5)",
                            "0 0 30px rgba(0,255,255,0.8)",
                            "0 0 10px rgba(0,255,255,0.5)"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <h2 className="text-white text-4xl md:text-6xl font-mono tracking-widest mix-blend-screen px-4 text-center">
                        HYPER_TUNNEL<br />
                        <span className="text-sm tracking-[1em] opacity-70">INITIALIZED</span>
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
