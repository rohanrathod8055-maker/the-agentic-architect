"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const quickLinks = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    const socials = [
        { icon: Github, href: "https://github.com/rohanrathod" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/rohan-rathod-7a39383a7/" },
        { icon: Mail, href: "mailto:rohanrathod8055@gmail.com" },
    ];

    return (
        <footer className="relative border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                            Rohan Rathod
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Full-Stack Developer crafting beautiful web experiences with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-neutral-300 mb-4 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-neutral-400 hover:text-blue-400 transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-bold text-neutral-300 mb-4 uppercase tracking-wider">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        <Icon className="w-4 h-4 text-neutral-400" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm flex items-center gap-1">
                        © 2026 Rohan Rathod. Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
                    </p>
                    <div className="flex items-center gap-4 text-neutral-500 text-xs">
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            Privacy Policy
                        </a>
                        <span>•</span>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
