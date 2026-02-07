"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface PerspectiveGridProps {
    className?: string;
    rows?: number;
    cols?: number;
}

export default function PerspectiveGrid({
    className = "",
    rows = 20,
    cols = 20
}: PerspectiveGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredCell, setHoveredCell] = useState<number | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
                const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
                setMousePosition({ x, y });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const cells = [];
    for (let i = 0; i < rows * cols; i++) {
        cells.push(i);
    }

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full ${className}`}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="absolute inset-0 grid gap-1 p-8"
                style={{
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateX: mousePosition.y * -10,
                    rotateY: mousePosition.x * 10,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {cells.map((index) => {
                    const row = Math.floor(index / cols);
                    const col = index % cols;
                    const isHovered = hoveredCell === index;

                    // Distance from center for color fade
                    const centerRow = rows / 2;
                    const centerCol = cols / 2;
                    const distance = Math.sqrt(
                        Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                    );
                    const maxDistance = Math.sqrt(centerRow ** 2 + centerCol ** 2);
                    const opacity = 1 - (distance / maxDistance) * 0.7;

                    return (
                        <motion.div
                            key={index}
                            className="border border-blue-500/20 rounded-sm relative"
                            style={{
                                backgroundColor: isHovered
                                    ? "rgba(59, 130, 246, 0.3)"
                                    : `rgba(59, 130, 246, ${opacity * 0.1})`,
                            }}
                            onMouseEnter={() => setHoveredCell(index)}
                            onMouseLeave={() => setHoveredCell(null)}
                            whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(139, 92, 246, 0.4)",
                                transition: { duration: 0.2 }
                            }}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
}
