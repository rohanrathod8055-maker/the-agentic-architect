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

Your responses should be detailed and comprehensive (4-6 sentences), helpful, and showcase Rohan's expertise in depth.`;

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

    if (lower.includes('project')) return "Rohan has built an outstanding portfolio of 5+ production-ready applications! His flagship project is the **Manhwa Aggregator Platform** serving 10,000+ daily users with AI-powered recommendations and real-time chapter tracking, built with Next.js, Python, and Puppeteer. He's also created a **YouTube Analytics AI Dashboard** using Firebase and Gemini AI that provides automated content strategy insights, plus an **AI-Powered 3D Asset Generator** using Blender API that reduced asset creation time by 60%. Every project showcases his expertise in AI integration and full-stack development!";

    if (lower.includes('skill') || lower.includes('tech')) return "Rohan is a versatile full-stack developer with deep AI expertise! He specializes in **AI Agent Architecture & Development**, building autonomous systems using GPT-4, Claude, and Gemini APIs with LangChain and advanced prompt engineering. On the frontend, he masters Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and GSAP. His backend skills include Node.js, Python, Firebase, and MongoDB. He's proficient in cross-platform development for web and mobile, with a focus on rapid prototyping and delivering production-ready applications quickly!";

    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) return "You can reach Rohan directly at **rohanrathod@example.com** for project inquiries and collaboration opportunities! He's also active on **GitHub at github.com/rohanrathod** and **LinkedIn at linkedin.com/in/rohanrathod**. Rohan is currently open to freelance projects, internships, and full-time opportunities, especially involving AI development and full-stack applications. He's maintained 100% client satisfaction across all his work, so you'd be collaborating with someone reliable and highly skilled!";

    if (lower.includes('japan') || lower.includes('study')) return "Rohan is actively preparing to **study abroad in Japan** to advance his expertise in AI research and international software development! He's deeply passionate about Japanese culture and innovation, seeing Japan as the perfect place to combine his love for technology with cutting-edge AI research. This goal reflects his commitment to continuous learning and working on globally impactful technologies. It's a big dream that drives his current work and academic excellence!";

    if (lower.includes('experience') || lower.includes('work')) return "Rohan has **2+ years of active coding experience** and has been working as a **freelance AI-focused developer since 2024**. He's delivered 5+ production-ready applications across web and mobile platforms with a perfect **100% client satisfaction rate**! His approach combines rapid prototyping with robust AI-driven architecture, transforming concepts into functional products efficiently. He specializes in building intelligent systems that automate workflows, whether through web applications with Next.js, mobile apps, or AI agent systems integrating GPT-4, Claude, and Gemini APIs!";

    if (lower.includes('who') || lower.includes('rohan')) return "Rohan Rathod is a **19-year-old AI-first developer** from Solapur, Maharashtra, India. He's currently a 2nd year BCS student at DHB Soni College (2025-2028), actively involved in coding clubs and AI experimentation projects. What sets him apart is his specialization in **AI Agent Architecture and Development** - he doesn't just use AI tools, he builds intelligent autonomous systems from scratch. He's a versatile full-stack developer creating websites, mobile apps, and AI-powered platforms. He's also preparing to study in Japan to further his AI expertise internationally!";

    if (lower.includes('education') || lower.includes('college')) return "Rohan is in his **2nd year of Bachelor of Computer Science (BCS) at DHB Soni College, Solapur** (2025-2028). He's an active member of coding clubs and constantly experimenting with AI and ML projects outside the curriculum. His focus areas include AI/ML, Web Development, and Software Engineering. Impressively, he balances his studies with real-world freelance work, having delivered 5+ production applications while still in college. He's planning to study abroad in Japan after his BCS, showing his dedication to international education and global AI research!";

    return "Hi! I'm Rika, Rohan's AI assistant with complete knowledge of his work! I can provide detailed information about his 5+ production projects (including a Manhwa platform with 10K+ users), his technical skills in AI Agent Architecture and full-stack development, his 2+ years of freelance experience with perfect client satisfaction, his education at DHB Soni College, or his plans to study in Japan. What would you like to explore in depth?";
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
