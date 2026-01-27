"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />

            {/* Subtle "Data Stream" moving lines (Optional, for "Animated" feel) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"
            />
        </div>
    );
}
