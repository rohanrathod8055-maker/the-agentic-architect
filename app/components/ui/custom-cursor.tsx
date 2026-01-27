"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useAudio } from "../audio-provider";

export default function CustomCursor() {
    // 1. Motion Values for high-perf (bypasses React render cycle for position)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth physics (The "Butter" Factor)
    // slightly lower stiffness = more flow, higher damping = less bounce
    const springConfig = { damping: 30, stiffness: 300, mass: 0.8 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    // 2. React State for "Mode" only (far less frequent updates)
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [crosshairHovered, setCrosshairHovered] = useState(false);

    // Sound Integration
    const { playSfx } = useAudio();

    // Trigger sounds on state change
    useEffect(() => {
        if (clicked) playSfx("HOVER"); // Reusing hover sound for click if no click sound, or map differently
    }, [clicked, playSfx]);

    useEffect(() => {
        if (linkHovered || crosshairHovered) playSfx("HOVER");
    }, [linkHovered, crosshairHovered, playSfx]);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            // DIRECT UPDATE - No Re-render
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Check if hovering over a clickable element
            const target = e.target as HTMLElement;

            // Optional: Throttle this check if needed, but modern browsers treat it fast enough usually
            // We use simple checks here for max speed

            // Check for specific cursor data attribute
            const specialCursor = target.closest('[data-cursor="crosshair"]');
            if (specialCursor) {
                if (!crosshairHovered) setCrosshairHovered(true); // Only state update
                if (linkHovered) setLinkHovered(false);
            } else {
                if (crosshairHovered) setCrosshairHovered(false);

                // Generic pointer check
                const isClickable =
                    target.tagName.toLowerCase() === 'a' ||
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') ||
                    target.closest('button') ||
                    target.classList.contains('cursor-pointer');

                if (isClickable) {
                    if (!linkHovered) setLinkHovered(true);
                } else {
                    if (linkHovered) setLinkHovered(false);
                }
            }
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [linkHovered, crosshairHovered]); // Dependency array to prevent stale closure if we accessed state, but we set it conditionally

    // Use a media query to disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block">
            <motion.div
                className="absolute"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%", // Center the transform
                    translateY: "-50%",
                }}
                animate={{
                    width: crosshairHovered ? 40 : 16,
                    height: crosshairHovered ? 40 : 16,
                    backgroundColor: crosshairHovered ? "transparent" : (linkHovered ? "white" : "white"),
                    // ...
                    border: crosshairHovered ? "1px solid white" : "none",
                    borderRadius: crosshairHovered ? "0%" : "50%",
                    scale: clicked ? 0.8 : linkHovered ? 2.5 : 1,
                    opacity: 1,
                    rotate: crosshairHovered ? 45 : 0
                }}
                transition={{
                    // Only animate generic properties via layout, position is handled by 'style' spring
                    duration: 0.15, // Faster transition for state changes
                    ease: "easeInOut"
                }}
            />
            {/* Center dot for crosshair mode */}
            {crosshairHovered && (
                <motion.div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                />
            )}
        </div>
    );
}
