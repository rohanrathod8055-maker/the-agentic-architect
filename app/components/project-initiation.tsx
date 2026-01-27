"use client";

import { ArrowUpRight, Copy, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function ProjectInitiation() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("rohanrathod8055@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#050505] text-white overflow-hidden relative border-t border-[#111]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <span className="font-mono text-blue-500 text-xs tracking-widest mb-4 block">SYSTEM_STATUS: ONLINE</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                        INITIATE<br />
                        PROTOCOL
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Primary Action: Email */}
                    <div className="md:col-span-8">
                        <a
                            href="mailto:rohanrathod8055@gmail.com?subject=Project%20Initiation%20Request"
                            className="group block relative h-80 bg-[#111] border border-[#222] overflow-hidden hover:bg-blue-600 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10">
                                <div className="flex justify-between items-start">
                                    <div className="font-mono text-xs text-neutral-500 group-hover:text-blue-200 transition-colors">SECURE_LINK</div>
                                    <ArrowUpRight className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">START_PROJECT</h3>
                                <p className="text-neutral-400 group-hover:text-blue-100 transition-colors">Have a vision? Let&apos;s architect the intelligence behind it.</p>
                            </div>

                            {/* Background Grain/Noise Hover Effect could go here */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay transition-opacity duration-500" />
                        </a>
                    </div>

                    {/* Secondary Actions: Socials */}
                    <div className="md:col-span-4 flex flex-col gap-6">

                        {/* Copy Email Quick Action */}
                        <button
                            onClick={copyEmail}
                            className="flex-1 bg-[#0a0a0a] border border-[#222] p-8 flex flex-col justify-between hover:border-white/20 transition-colors group text-left"
                        >
                            <div className="flex justify-between w-full">
                                <span className="font-mono text-xs text-neutral-600">DIRECT_COPY</span>
                                {copied ? <span className="text-green-500 text-xs font-mono">COPIED</span> : <Copy className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />}
                            </div>
                            <div className="text-xl font-mono text-neutral-400 group-hover:text-white transition-colors">rohanrathod8055@gmail.com</div>
                        </button>

                        {/* Social Grid */}
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <a href="https://github.com/rohanrathod8055-maker" target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0a] border border-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
                                <Github className="w-8 h-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/rohan-rathod-7a39383a7/" target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0a] border border-[#222] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors duration-300">
                                <Linkedin className="w-8 h-8" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-24 pt-8 border-t border-[#111] flex flex-col md:flex-row justify-between items-end gap-8 opacity-50 font-mono text-xs">
                    <div className="max-w-xs">
                        <p>ENGINEERED IN SOLAPUR, MH.</p>
                        <p className="mt-2">BUILT WITH AGENTIC INTELLIGENCE. <br />POWERED BY NEXT.JS 16.</p>
                    </div>

                    <div className="text-right">
                        <p>&copy; {new Date().getFullYear()} ROHAN RATHOD. ID_8055.</p>
                        <p className="mt-2">ALL RIGHTS RESERVED.</p>
                    </div>
                </div>

            </div >
        </section >
    );
}
