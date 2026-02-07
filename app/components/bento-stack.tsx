"use client";

import { TiltCard } from "./ui/tilt-card";
import { GlowBorderCardConic } from "./ui/glow-border-card";
import { Brain, Code2, Database, MapPin, Cpu } from "lucide-react";

export default function BentoStack() {
    return (
        <section className="py-24 px-6 md:px-12 z-10 relative max-w-7xl mx-auto">
            <div className="mb-16 flex items-end justify-between border-b border-[#111] pb-6">
                <h2 className="text-2xl font-bold tracking-tight">TECHNICAL_STACK</h2>
                <span className="font-mono text-xs text-neutral-600">SYS_V.1.2</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
                {/* Main Skill: AI */}
                <div className="md:col-span-2 md:row-span-2">
                    <GlowBorderCardConic className="h-full">
                        <TiltCard className="h-full bg-transparent border-none">
                            <div className="h-full flex flex-col justify-between">
                                <div className="p-3 bg-blue-600/10 w-fit rounded-lg border border-blue-600/20">
                                    <Brain className="w-8 h-8 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">AI Agent Development</h3>
                                    <p className="text-neutral-400">Building autonomous systems that think, plan, and execute. Gemini, OpenAI, Anthropic integrations.</p>
                                </div>
                            </div>
                        </TiltCard>
                    </GlowBorderCardConic>
                </div>

                {/* Stack 2: Coding */}
                <div className="md:col-span-1 md:row-span-2">
                    <TiltCard className="h-full bg-[#111] border-[#222]">
                        <div className="h-full flex flex-col">
                            <div className="p-3 bg-neutral-800 w-fit rounded-lg border border-neutral-700 mb-4">
                                <Code2 className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Vibe Coding</h3>
                            <ul className="space-y-3 text-neutral-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />Next.js 14</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />React Server Components</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />TypeScript</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />Tailwind CSS</li>
                            </ul>
                        </div>
                    </TiltCard>
                </div>

                {/* Stack 3: Data */}
                <div className="md:col-span-1">
                    <TiltCard className="h-full bg-[#111] border-[#222]">
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-neutral-800 rounded-lg border border-neutral-700">
                                    <Database className="w-6 h-6 text-neutral-400" />
                                </div>
                                <span className="text-xs font-mono text-neutral-600">DATA</span>
                            </div>
                            <div className="text-lg font-bold text-white">Analysis & Processing</div>
                        </div>
                    </TiltCard>
                </div>

                {/* Location */}
                <div className="md:col-span-1">
                    <TiltCard className="h-full bg-[#111] border-[#222]">
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-neutral-800 rounded-lg border border-neutral-700">
                                    <MapPin className="w-6 h-6 text-neutral-400" />
                                </div>
                                <span className="text-xs font-mono text-neutral-600">LOC</span>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">Solapur, MH</div>
                                <div className="text-xs text-neutral-500">Open to Remote</div>
                            </div>
                        </div>
                    </TiltCard>
                </div>

                {/* Education */}
                <div className="md:col-span-2">
                    <TiltCard className="h-full bg-[#111] border-[#222] flex items-center">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700">
                                    <Cpu className="w-6 h-6 text-neutral-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">B.Sc. ECS</h3>
                                    <p className="text-neutral-500 text-sm">2nd Year • Gen Z Tech Prodigy</p>
                                </div>
                            </div>
                            <div className="text-4xl font-black text-neutral-800 rotate-12">19</div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
