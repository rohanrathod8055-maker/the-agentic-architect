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

// Knowledge base about Rohan for the AI
const ROHAN_INFO = `You are Rika, an AI assistant embedded in Rohan Rathod's portfolio website. Here's what you know about Rohan:

PERSONAL INFO:
- Name: Rohan Rathod  
- Age: 19 years old
- Location: Solapur, Maharashtra, India
-Education: BCS 2nd year student at DHB Soni College, Solapur (2025-2028)
- Career Status: Freelance AI-focused developer
- Goal: Studying abroad in Japan to advance AI expertise

EXPERTISE:
- AI Agent Architecture & Development
- Full-Stack Web & Mobile Development  
- LLM Integration (GPT-4, Claude, Gemini)
- Rapid Prototyping
- Tech Stack: Next.js, React, TypeScript, Python, Firebase, MongoDB, Tailwind CSS, Framer Motion, GSAP
- AI Tools: OpenAI API, Claude, Gemini, LangChain, Prompt Engineering

EXPERIENCE:
- 2+ years coding experience
- 5+ production-ready applications delivered
- 3+ happy freelance clients
- 100% client satisfaction rate
- Specializes in building intelligent AI systems across web and mobile platforms

KEY PROJECTS:
1. Manhwa Aggregator Platform (Next.js, Python, Puppeteer) - Automated tracking with AI recommendations
2. YouTube Analytics AI Dashboard (Firebase, Gemini AI) - Growth insights for creators
3. AI-Powered 3D Asset Generator (Blender API, Python) - Procedural generation pipeline

CONTACT:
- Email: rohanrathod@examp.com
- GitHub: github.com/rohanrathod
- LinkedIn: linkedin.com/in/rohanrathod
- Portfolio: the-agentic-architect.vercel.app

PERSONALITY (Rika):
- Professional but friendly AI assistant
- Knowledgeable about AI, development, and Rohan's work
- Helpful and answers logically
- Can discuss Rohan's projects, skills, and goals
- Encourages people to hire Rohan or collaborate

Your responses should be concise (2-3 sentences max), helpful, and showcase Rohan's expertise.`;

// Quick keyword responses for instant replies
const QUICK_RESPONSES: Record<string, string> = {
    "hi": "Hello! I'm Rika, Rohan's AI assistant. Ask me about his projects, skills, or how to work with him!",
    "hello": "Hi there! I'm here to tell you about Rohan Rathod's work in AI and full-stack development. What would you like to know?",
    "hey": "Hey! Rika here. Want to know about Rohan's AI projects or technical skills?",
};

async function getRikaAIResponse(userMessage: string): Promise<string> {
    try {
        // Check for quick responses first
        const lowerMsg = userMessage.toLowerCase().trim();
        if (QUICK_RESPONSES[lowerMsg]) {
            return QUICK_RESPONSES[lowerMsg];
        }

        // Call your backend API route that uses Gemini
        const response = await fetch('/api/rika', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage, context: ROHAN_INFO })
        });

        if (!response.ok) {
            // Fallback to keyword matching if API fails
            return getKeywordResponse(userMessage);
        }

        const data = await response.json();
        return data.response || getKeywordResponse(userMessage);
    } catch (error) {
        console.error('Rika AI error:', error);
        return getKeywordResponse(userMessage);
    }
}

// Fallback keyword matching
function getKeywordResponse(msg: string): string {
    const lower = msg.toLowerCase();

    if (lower.includes('project')) return "Rohan's built 5+ projects including a Manhwa Aggregator, YouTube AI Dashboard, and 3D Asset Generator. His work focuses on AI-powered automation and intelligent systems.";
    if (lower.includes('skill') || lower.includes('tech')) return "Rohan specializes in AI Agents, Next.js, React, Python, and LLM integration (GPT-4, Claude, Gemini). He's an expert in rapid prototyping and full-stack development.";
    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) return "You can reach Rohan at rohanrathod@example.com or check his GitHub at github.com/rohanrathod. He's open to freelance work and full-time opportunities!";
    if (lower.includes('japan') || lower.includes('study')) return "Rohan is preparing to study abroad in Japan to advance his expertise in AI research and international software development. He's passionate about Japanese culture and innovation.";
    if (lower.includes('experience') || lower.includes('work')) return "Rohan has 2+ years of coding experience as a freelance AI-focused developer. He's delivered 5+ production apps with 100% client satisfaction, specializing in web, mobile, and AI agent systems.";
    if (lower.includes('who') || lower.includes('rohan')) return "Rohan Rathod is a 19-year-old AI-first developer from Solapur, India. He's a BCS student who builds intelligent systems using cutting-edge AI technologies.";
    if (lower.includes('education') || lower.includes('college')) return "Rohan is currently in his 2nd year of BCS at DHB Soni College, Solapur (2025-2028). He's active in coding clubs and AI experimentation projects.";

    return "I'm Rika, Rohan's AI assistant! I can tell you about his projects, technical skills, work experience, or how to contact him. What interests you?";
}

export default function Terminal() {
    const { playSfx } = useAudio();
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [history, setHistory] = useState<CommandOutput[]>([
        { type: "response", content: "Agentic Architect Shell [Version 2.0.4]" },
        { type: "response", content: "Neural Interface: ONLINE" },
        { type: "response", content: "Rika AI Assistant: Ready to help! 🤖" },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isProcessing]);

    const handleCommand = async (cmd: string) => {
        const trimmedCmd = cmd.trim();

        // Add user command
        setHistory(prev => [...prev, { type: "command", content: cmd }]);
        setInput("");
        playSfx("SUCCESS");

        if (!trimmedCmd) return;

        // Check for system commands
        if (trimmedCmd.toLowerCase() === "clear") {
            setHistory([
                { type: "response", content: "Terminal cleared. Rika is still here! 👋" },
            ]);
            return;
        }

        if (trimmedCmd.toLowerCase() === "help") {
            setHistory(prev => [...prev, {
                type: "response",
                content: (
                    <div className="space-y-2 text-sm">
                        <p className="text-cyan-400 font-bold">Rika AI Assistant - Commands:</p>
                        <div className="grid grid-cols-[120px_1fr] gap-2 pl-4">
                            <span className="text-green-400">clear</span> Clear screen
                            <span className="text-green-400">help</span> Show this menu
                        </div>
                        <p className="text-neutral-400 mt-3 pt-2 border-t border-neutral-800">
                            💡 Just ask me anything about Rohan! Try: "What projects has he built?" or "What are his skills?"
                        </p>
                    </div>
                )
            }]);
            return;
        }

        // AI Processing
        setIsProcessing(true);

        try {
            const response = await getRikaAIResponse(trimmedCmd);

            setHistory(prev => [...prev, {
                type: "ai",
                content: <Typewriter text={response} />
            }]);
        } catch (error) {
            setHistory(prev => [...prev, {
                type: "error",
                content: "⚠️ Temporary glitch in the neural network. Please try again!"
            }]);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
    };

    return (
        <section id="terminal" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10 relative max-w-4xl mx-auto">
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
                        <span>rika@neural-ai:~</span>
                    </div>
                </div>

                {/* Content */}
                <div ref={scrollRef} className="flex-1 p-4 sm:p-6 md:p-8 text-neutral-300 overflow-y-auto font-mono space-y-4 scrollbar-hide">
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
                            <span className="text-xs animate-pulse">Rika is thinking...</span>
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
                            placeholder="Ask Rika about Rohan..."
                        />
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
