"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
