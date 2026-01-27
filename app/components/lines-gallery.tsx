"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    image?: string;
};

const items: Item[] = [
    {
        id: 1,
        title: "Philosophy of Agents",
        category: "MANIFESTO",
        year: "2025",
        description: "Intelligence is not about answering; it's about anticipating. We are building systems that don't just wait for input but actively seek output. The future of software is not a tool, but a partner.",
    },
    {
        id: 2,
        title: "Neural Architecture",
        category: "SYSTEMS",
        year: "2024",
        description: "Designing the brain of the machine. How we structure context, memory, and reasoning dictates the 'soul' of the agent. It's not just code; it's cognitive blueprints.",
    },
    {
        id: 3,
        title: "The Silent Interface",
        category: "UX THEORY",
        year: "2026",
        description: "The best interface is no interface. A truly agentic system removes the friction of UI, leaving only pure intent. We are moving from 'Point and Click' to 'Think and Done'.",
    }
];

export default function LinesGallery() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-[#050505] relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end">
                    <h2 className="text-sm font-mono text-neutral-500 tracking-widest">ARCHIVE_ACCESS</h2>
                    <span className="text-xs text-neutral-700">SELECT TO EXPAND</span>
                </div>

                <div className="flex flex-col">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group border-b border-white/10 last:border-b-0 cursor-pointer"
                            onClick={() => toggleExpand(item.id)}
                            data-cursor="crosshair" // Signal for CustomCursor
                        >
                            {/* Header Line */}
                            <div className="py-8 flex items-center justify-between transition-colors group-hover:bg-white/5 px-4 -mx-4 rounded-lg">
                                <div className="flex items-center gap-6 md:gap-12">
                                    <span className="font-mono text-xs text-neutral-600 w-8">0{item.id}</span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-blue-500 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8">
                                    <span className="hidden md:block font-mono text-xs text-neutral-500">{item.category}</span>
                                    <span className="hidden md:block font-mono text-xs text-neutral-500">{item.year}</span>
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 group-hover:border-blue-500 transition-colors">
                                        {expandedId === item.id ? (
                                            <Minus className="w-4 h-4 text-blue-500" />
                                        ) : (
                                            <Plus className="w-4 h-4 text-white group-hover:text-blue-500" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <AnimatePresence>
                                {expandedId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 pt-4 px-4 md:pl-24 grid md:grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
                                                    {item.description}
                                                </p>
                                                <button className="mt-8 flex items-center gap-2 text-sm text-white border-b border-white/20 pb-1 hover:text-blue-500 hover:border-blue-500 transition-colors">
                                                    Read Full Entry <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {/* Could put an image here if needed, keeping it text-focused for now for "Archives" feel */}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
