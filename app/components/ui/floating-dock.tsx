"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, User, Code, Mail, Terminal } from "lucide-react";

export default function FloatingDock() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-4 bg-black/50 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl">
                <DockIcon href="#top" label="Home" icon={Home} />
                <DockIcon href="#manifesto" label="About" icon={User} />
                <DockIcon href="#projects" label="Work" icon={Code} />
                <DockIcon href="#contact" label="Contact" icon={Mail} />
            </div>
        </div>
    );
}

function DockIcon({ href, label, icon: Icon }: { href: string; label: string; icon: any }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {label}
            </span>
        </motion.a>
    );
}
