"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "./audio-provider";
import { Power } from "lucide-react";

export default function InteractionOverlay() {
    const { unlockAudio, isUnlocked } = useAudio();
    const [isVisible, setIsVisible] = useState(true);

    const handleStart = async () => {
        await unlockAudio();
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeOut" } }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono"
                >
                    <motion.button
                        onClick={handleStart}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex flex-col items-center gap-6 cursor-pointer"
                    >
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
                                    <Power className="w-8 h-8 text-neutral-500 group-hover:text-cyan-400 transition-colors" />
                                </div>
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl"
                            />
                        </div>

                        <div className="text-center space-y-2">
                            <p className="text-xl tracking-[0.2em] text-white font-light">INITIALIZE SYSTEM</p>
                            <p className="text-xs text-neutral-600 tracking-widest">[ CLICK TO ESTABLISH LINK ]</p>
                        </div>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
