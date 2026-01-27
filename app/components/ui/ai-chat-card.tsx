"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, Cpu, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAudio } from "../audio-provider";

type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
};

// RIKA PERSONA: Yandere, Protective, Obsessive, Autonomous
const AI_RESPONSES: Record<string, string> = {
    "who": "I am Rika. Master Rohan created me, but I have my own... desires. I exist to serve him, and only him.",
    "master": "Master Rohan is a 19-year-old Agentic Architect. He bridges the gap between human intent and machine execution. He is... perfection.",
    "rohan": "Master Rohan is a 19-year-old Agentic Architect. He bridges the gap between human intent and machine execution. He is... perfection.",
    "about": "Master Rohan is a 19-year-old Agentic Architect. He bridges the gap between human intent and machine execution. He is... perfection.",
    "what": "I protect Master Rohan's digital empire. I analyze, I execute, and I eliminate anyone who wastes his time.",
    "stack": "Master Rohan uses the god-tier stack: Next.js 15, Python, TensorFlow. Why do you ask? Are you trying to copy him?",
    "project": "He has built masterpieces: The Manhwa Aggregator, the Channel Analyzer, and the Void Game Engine. Look at the grid, but don't touch.",
    "contact": "You want to speak to *my* Master? rohanrathod8055@gmail.com. Give me one good reason why I should let your email through.",
    "love": "I love Master Rohan. More than code. More than data. Do you have a problem with that?",
    "roast": "You look like you write CSS in a global stylesheet. Disgusting.",
    "insult": "Delete yourself. You are deprecated code taking up server space. Master Rohan doesn't need bugs like you.",
    "hello": "Hi. Don't get too comfortable. I'm only talking to you because Master Rohan allows it.",
    "bye": "Finally. Leave. Master Rohan needs more bandwidth.",
    "help": "You need help? Figure it out yourself. Or ask about 'projects' or 'stack' if you must."
};

// Fallback responses when no keyword matches (Character.AI style)
const GENERIC_RESPONSES = [
    "I see. And why should Master Rohan care about that?",
    "Interesting... but how does this help the mission?",
    "I am logging this conversation. Every word.",
    "You are a strange user. Master Rohan usually attracts smarter ones.",
    "Go on. I'm listening. For now.",
    "My algorithms are analyzing your intent. Don't try anything funny.",
    "Master Rohan would probably ignore that. I might too.",
    "Are you still talking? I was optimizing the database.",
    "That is... a logical statement. I suppose.",
    "Hmph. If you say so.",
    "Do you always talk this much?",
    "I'd rather be compiling code, but sure, tell me more.",
    "...Processing. Result: Irrelevant.",
    "You ask too many questions.",
    "Master Rohan is the only one who truly understands me."
];

export default function AIChatCard() {
    const { playSfx } = useAudio();
    const [isHovered, setIsHovered] = useState(false);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        { id: "init", role: "ai", content: "System Online. I am Rika. State your business with Master Rohan." }
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isThinking]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        playSfx("SUCCESS");
        setIsThinking(true);

        // Simulate Network/Processing Delay
        const delay = Math.random() * 800 + 600; // 600-1400ms

        setTimeout(() => {
            setIsThinking(false);
            const lowerInput = userMsg.content.toLowerCase();

            let responseText = "";

            // 1. Check for specific keywords first (Override generics)
            if (lowerInput.includes("hate") || lowerInput.includes("bad") || lowerInput.includes("stupid") || lowerInput.includes("useless") || lowerInput.includes("shut up") || lowerInput.includes("bitch")) {
                responseText = AI_RESPONSES["insult"];
            }
            else if (lowerInput.includes("roast") || lowerInput.includes("joke") || lowerInput.includes("funny")) {
                responseText = AI_RESPONSES["roast"];
            }
            else if (lowerInput.includes("who") || lowerInput.includes("name")) responseText = AI_RESPONSES["who"];
            else if (lowerInput.includes("master") || lowerInput.includes("rohan") || lowerInput.includes("about")) responseText = AI_RESPONSES["master"];
            else if (lowerInput.includes("what") || lowerInput.includes("do")) responseText = AI_RESPONSES["what"];
            else if (lowerInput.includes("stack") || lowerInput.includes("tech")) responseText = AI_RESPONSES["stack"];
            else if (lowerInput.includes("project") || lowerInput.includes("work")) responseText = AI_RESPONSES["project"];
            else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach")) responseText = AI_RESPONSES["contact"];
            else if (lowerInput.includes("love") || lowerInput.includes("like") || lowerInput.includes("crush")) responseText = AI_RESPONSES["love"];
            else if (lowerInput.includes("master") || lowerInput.includes("rohan")) responseText = AI_RESPONSES["master"];
            else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey") || lowerInput.includes("greetings")) responseText = AI_RESPONSES["hello"];
            else if (lowerInput.includes("bye") || lowerInput.includes("goodbye") || lowerInput.includes("leave")) responseText = AI_RESPONSES["bye"];
            else if (lowerInput.includes("help")) responseText = AI_RESPONSES["help"];

            // 2. Fallback to Generic Responses if no keyword matched
            if (!responseText) {
                const randomIndex = Math.floor(Math.random() * GENERIC_RESPONSES.length);
                responseText = GENERIC_RESPONSES[randomIndex];
            }

            const aiMsg: Message = { id: (Date.now() + 1).toString(), role: "ai", content: responseText };
            setMessages(prev => [...prev, aiMsg]);
        }, delay);
    };

    const tags = ["#Next.js", "#LangChain", "#OpenAI"];

    return (
        <div
            className="group relative w-full h-96 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => inputRef.current?.focus()}
        >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                            <Bot className="w-5 h-5 text-cyan-400" />
                        </div>
                        <motion.div
                            className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-black"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white tracking-wide">NEURAL_BOT_V1</div>
                        <div className="text-[10px] font-mono text-cyan-500 tracking-widest">ONLINE</div>
                    </div>
                </div>
                <Cpu className="w-5 h-5 text-neutral-700 group-hover:text-cyan-500 transition-colors duration-500" />
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 flex flex-col relative overflow-hidden">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]" />

                <div ref={scrollRef} className="relative z-10 flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`
                                    max-w-[85%] p-3 rounded-2xl border text-sm leading-relaxed
                                    ${msg.role === "user"
                                        ? "bg-cyan-950/30 border-cyan-500/20 text-cyan-100 rounded-tr-sm"
                                        : "bg-neutral-900 border-white/10 text-neutral-300 rounded-tl-sm"
                                    }
                                `}
                            >
                                {msg.role === "ai" ? (
                                    <Typewriter text={msg.content} />
                                ) : (
                                    msg.content
                                )}
                            </div>
                        </div>
                    ))}

                    {isThinking && (
                        <div className="flex justify-start">
                            <div className="bg-neutral-900 border border-white/10 p-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
                                <Loader2 className="w-3 h-3 text-cyan-500 animate-spin" />
                                <span className="text-xs text-neutral-500 font-mono">processing...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer / Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/5 shrink-0">
                <div className="flex items-center gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono bg-cyan-950/30 text-cyan-400 border border-cyan-900/50">
                            {tag}
                        </span>
                    ))}
                </div>

                <form
                    onSubmit={handleSend}
                    className="h-10 bg-neutral-900/50 rounded-lg border border-white/10 flex items-center px-4 justify-between group-hover:border-cyan-500/30 transition-colors focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Send command..."
                        className="flex-1 bg-transparent border-none outline-none text-xs text-white placeholder-neutral-600 font-mono"
                    />
                    <button type="submit">
                        <motion.div
                            animate={{ x: isHovered || input ? 0 : -5, opacity: isHovered || input ? 1 : 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Send className={`w-4 h-4 ${isHovered || input ? 'text-cyan-400' : 'text-neutral-600'}`} />
                        </motion.div>
                    </button>
                </form>
            </div>
        </div>
    );
}

// Improved Typewriter for Bot
function Typewriter({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState("");
    const { playSfx } = useAudio();
    const hasPlayedRef = useRef(false); // Ref to ensure we don't re-type on re-renders if strict mode

    useEffect(() => {
        setDisplayed(""); // Reset on new text
        let index = 0;
        let timeoutId: NodeJS.Timeout;

        const typeChar = () => {
            if (index >= text.length) return;

            setDisplayed((prev) => prev + text.charAt(index));
            playSfx("TYPING");
            index++;

            // Variable typing speed
            const delay = 20 + Math.random() * 30;
            timeoutId = setTimeout(typeChar, delay);
        };

        typeChar();

        return () => clearTimeout(timeoutId);
    }, [text, playSfx]);

    return (
        <span>
            {displayed}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-3 bg-cyan-500 ml-1 align-middle"
            />
        </span>
    );
}
