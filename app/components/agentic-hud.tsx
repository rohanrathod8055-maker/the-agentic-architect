"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Home, Briefcase, Archive, Mail, Cpu, Volume2, VolumeX } from "lucide-react";
import { useAudio } from "./audio-provider";

export default function AgenticHUD() {
    const [time, setTime] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const { isMuted, toggleMute, playSfx } = useAudio();

    useEffect(() => {
        // Solapur Time (IST)
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { label: "HQ", icon: Home, href: "#top" },
        { label: "WORK", icon: Briefcase, href: "#projects" },
        { label: "LOGS", icon: Archive, href: "#archives" },
        { label: "LINK", icon: Mail, href: "#contact" },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
            className="fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-between items-end pointer-events-none"
        >
            {/* Left: System Status - Locked to Bottom Left */}
            <div className="pointer-events-auto bg-[#050505]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="relative w-2 h-2">
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                        <div className="relative w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 tracking-widest hidden md:inline-block">SYS_ONLINE</span>
                </div>
                <div className="h-3 w-[1px] bg-white/10" />
                <div className="flex items-center gap-1 font-mono text-xs text-neutral-500">
                    <Clock className="w-3 h-3" />
                    <span>{time} IST</span>
                </div>
            </div>

            {/* Center Area is intentionally empty for FloatingDock */}

            {/* Right: CPU/Metrics + Audio - Locked to Bottom Right */}
            <div className="pointer-events-auto bg-[#050505]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl flex items-center gap-4">
                {/* Fake CPU */}
                <div className="hidden md:flex flex-col items-end">
                    <span className="text-[9px] font-mono text-neutral-600">CPU</span>
                    <div className="flex gap-0.5 mt-0.5">
                        {[1, 2, 3, 4].map(i => (
                            <motion.div
                                key={i}
                                animate={{ height: [4, 12, 6, 14, 4] }}
                                transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                className="w-1 bg-blue-500/50 rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="h-3 w-[1px] bg-white/10 hidden md:block" />

                {/* Audio Toggle */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                        playSfx("HOVER");
                    }}
                    onMouseEnter={() => playSfx("HOVER")}
                    className="p-1.5 rounded-full hover:bg-white/10 transition-colors group"
                    data-cursor="hover"
                >
                    {isMuted ? (
                        <VolumeX className="w-4 h-4 text-neutral-500 group-hover:text-red-400" />
                    ) : (
                        <Volume2 className="w-4 h-4 text-neutral-500 group-hover:text-blue-400" />
                    )}
                </button>
            </div>
        </motion.div>
    );
}
