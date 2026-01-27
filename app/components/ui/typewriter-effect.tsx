"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAudio } from "../audio-provider";

interface TypewriterProps {
    text: string;
    onComplete?: () => void;
    speed?: number;
    variance?: number;
}

export function Typewriter({ text, onComplete, speed = 30, variance = 20 }: TypewriterProps) {
    const [displayed, setDisplayed] = useState("");
    const { playSfx } = useAudio();
    const indexRef = useRef(0);
    const textRef = useRef(text);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    // Reset when text changes
    useEffect(() => {
        textRef.current = text;
        indexRef.current = 0;
        setDisplayed("");

        const type = () => {
            if (indexRef.current < textRef.current.length) {
                const char = textRef.current.charAt(indexRef.current);
                setDisplayed((prev) => prev + char);
                playSfx("TYPING");
                indexRef.current++;

                const randomDelay = speed + (Math.random() * variance);
                timeoutRef.current = setTimeout(type, randomDelay);
            } else {
                if (onComplete) onComplete();
            }
        };

        // Start typing
        timeoutRef.current = setTimeout(type, speed);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, speed, variance, playSfx, onComplete]);

    return (
        <span>
            {displayed}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-4 bg-cyan-500 ml-1 align-middle"
            />
        </span>
    );
}
