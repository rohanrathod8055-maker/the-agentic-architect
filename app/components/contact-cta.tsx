"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTA() {
    const socials = [
        { icon: Github, label: "GitHub", href: "https://github.com/rohanrathod8055-maker" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rohan-rathod-7a39383a7/" },
    ];

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Header */}
                    <span className="text-blue-500 font-mono text-xs tracking-widest uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
                        I'm currently open to internship and full-time opportunities.
                        Feel free to reach out if you'd like to collaborate!
                    </p>

                    {/* Primary CTA */}
                    <motion.a
                        href="mailto:rohanrathod8055@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all text-lg group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail className="w-5 h-5" />
                        Send Me an Email
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6 mt-12">
                        {socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mt-8 text-neutral-500"
                    >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Solapur, Maharashtra • Open to Remote & Relocation</span>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
            </div>
        </section>
    );
}
