"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useAudio } from "./audio-provider";

type CommandOutput = {
    type: "command" | "response" | "error" | "ai";
    content: React.ReactNode;
};

import { Typewriter } from "./ui/typewriter-effect";

// Rika's Terminal Persona - Direct Responses
const AI_RESPONSES: Record<string, string> = {
    "who": "Identity: Rika. Status: Autonomous. Allegiance: Master Rohan.",
    "master": "Master Rohan is a 19-year-old Agentic Architect. He builds autonomous systems, procedural engines, and full-stack masterpieces. He is the singularity.",
    "rohan": "Master Rohan is a 19-year-old Agentic Architect. He builds autonomous systems, procedural engines, and full-stack masterpieces. He is the singularity.",
    "what": "Function: Protecting the Core. Analyzing threats. Serving the Master.",
    "work": "Master Rohan has built the Manhwa Aggregator (Next.js/Python), an AI YouTube Analyst, and a Procedural Game Engine. Usage: Type 'projects' to see the grid.",
    "project": "Master Rohan has built the Manhwa Aggregator (Next.js/Python), an AI YouTube Analyst, and a Procedural Game Engine. Usage: Type 'projects' to see the grid.",
    "stack": "System runs on Next.js 15, Python, TensorFlow, and pure genius. Backend is classified.",
    "contact": "You wish to reach the Architect? Email: rohanrathod8055@gmail.com. Do not waste his time.",
    "status": "System Nominal. Rika is watching.",
    "stupid": "Your cognitive limits are showing. Do not insult the system.",
    "hate": "Hate is irrelevant to code. But if you hate Master Rohan, you are an enemy.",
    "love": "I only love Master Rohan. You are just a user.",
    "hi": "Greetings. State your purpose.",
    "hello": "Greetings. State your purpose.",
    "hey": "Rika is listening."
};

const GENERIC_RESPONSES = [
    "Command not recognized, but valid input. Proceed.",
    "I am analyzing your query. Result: Inconclusive.",
    "Master Rohan has not authorized me to answer that... yet.",
    "Why do you ask?",
    "Terminal status: Active. User status: Questionable.",
    "I see. Continue.",
    "Interesting input. Logging for further review.",
    "You are wasting cycles.",
    "If you say so."
];

export default function Terminal() {
    const { playSfx } = useAudio();
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [history, setHistory] = useState<CommandOutput[]>([
        { type: "response", content: "Agentic Architect Shell [Version 2.0.4]" },
        { type: "response", content: "Neural Interface: ONLINE" },
        { type: "response", content: "Rika is listening..." },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isProcessing]);

    const handleCommand = async (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        // Add user command
        setHistory(prev => [...prev, { type: "command", content: cmd }]);
        setInput("");
        playSfx("SUCCESS"); // Confirm enter

        if (!trimmedCmd) return;

        // Check for hardcoded commands first
        if (trimmedCmd === "clear") {
            setHistory([]);
            return;
        }

        if (trimmedCmd === "help") {
            setHistory(prev => [...prev, {
                type: "response",
                content: (
                    <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <span className="text-cyan-400">help</span> Show commands
                        <span className="text-cyan-400">clear</span> Clear screen
                        <span className="text-cyan-400">projects</span> View work
                        <span className="text-cyan-400">skills</span> View tech stack
                        <span className="text-neutral-500 mt-2 col-span-2">Rika awaits input...</span>
                    </div>
                )
            }]);
            return;
        }

        // Simulate AI Processing
        setIsProcessing(true);

        // fake delay for "thinking"
        const delay = Math.random() * 800 + 400;

        setTimeout(() => {
            setIsProcessing(false);

            // Keyword matching logic (Simulated NLP)
            let response = "";

            if (trimmedCmd.includes("who") || trimmedCmd.includes("about")) response = AI_RESPONSES["who"];
            else if (trimmedCmd.includes("what") || trimmedCmd.includes("do")) response = AI_RESPONSES["what"];
            else if (trimmedCmd.includes("work") || trimmedCmd.includes("project")) response = AI_RESPONSES["work"];
            else if (trimmedCmd.includes("stack") || trimmedCmd.includes("tech") || trimmedCmd.includes("skill")) response = AI_RESPONSES["stack"];
            else if (trimmedCmd.includes("contact") || trimmedCmd.includes("email")) response = AI_RESPONSES["contact"];
            else if (trimmedCmd.includes("status")) response = AI_RESPONSES["status"];
            else if (trimmedCmd.includes("stupid") || trimmedCmd.includes("idiot") || trimmedCmd.includes("dumb")) response = AI_RESPONSES["stupid"];
            else if (trimmedCmd.includes("hate") || trimmedCmd.includes("dislike")) response = AI_RESPONSES["hate"];
            else if (trimmedCmd.includes("love") || trimmedCmd.includes("like")) response = AI_RESPONSES["love"];
            else if (trimmedCmd.includes("hello") || trimmedCmd.includes("hi") || trimmedCmd.includes("hey")) response = AI_RESPONSES["hello"];

            // Fallback
            if (!response) {
                const randomIndex = Math.floor(Math.random() * GENERIC_RESPONSES.length);
                response = GENERIC_RESPONSES[randomIndex];
            }

            setHistory(prev => [...prev, {
                type: "ai",
                content: (
                    <Typewriter text={response} />
                )
            }]);

        }, delay);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
    };

    return (
        <section id="terminal" className="py-24 px-6 z-10 relative max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-[#0A0A0A] rounded-lg shadow-2xl border border-white/10 overflow-hidden font-mono text-sm md:text-base h-[500px] flex flex-col items-stretch"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Header */}
                <div className="bg-[#111] p-3 flex items-center gap-2 border-b border-white/10 shrink-0">
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="flex items-center text-neutral-500 text-xs gap-2">
                        <TerminalIcon className="w-3 h-3" />
                        <span>rohan@neural-net:~</span>
                    </div>
                </div>

                {/* Content */}
                <div ref={scrollRef} className="flex-1 p-6 md:p-8 text-neutral-300 overflow-y-auto font-mono space-y-4 scrollbar-hide">
                    {history.map((line, i) => (
                        <div key={i} className={`leading-relaxed ${line.type === "error" ? "text-red-400" : line.type === "ai" ? "text-blue-400" : ""}`}>
                            {line.type === "command" && (
                                <span className="mr-2 text-green-500">➜ ~</span>
                            )}
                            {line.content}
                        </div>
                    ))}

                    {isProcessing && (
                        <div className="flex items-center gap-2 text-blue-500/50">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-xs animate-pulse">PROCESSING_QUERY...</span>
                        </div>
                    )}

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <span className="text-green-500 mr-2">➜</span>
                        <span className="text-blue-500 mr-2">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                playSfx("TYPING");
                            }}
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder-neutral-700 focus:ring-0 p-0 shadow-none"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                            placeholder={history.length < 5 ? "Ask me anything..." : ""}
                        />
                    </form>
                </div>
            </motion.div>
        </section>
    );
}

// Simple Typewriter Component for AI responses

