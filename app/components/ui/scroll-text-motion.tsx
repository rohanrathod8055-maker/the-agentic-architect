"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

// Utility function to wrap a number between a min and max
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ScrollTextMotionProps {
    children: string;
    baseVelocity: number;
}

export default function ScrollTextMotion({ children, baseVelocity = 100 }: ScrollTextMotionProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Transform velocity into skew and speed modification
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
        clamp: false
    });

    // Skew effect based on velocity
    const skewX = useTransform(smoothVelocity, [-1000, 1000], [-15, 15], {
        clamp: true
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap leading-[0.85] tracking-tighter">
            <motion.div
                className="scroller font-black uppercase text-6xl md:text-8xl flex whitespace-nowrap flex-nowrap text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500"
                style={{ x, skewX }}
            >
                <span className="block mr-8">{children} </span>
                <span className="block mr-8">{children} </span>
                <span className="block mr-8">{children} </span>
                <span className="block mr-8">{children} </span>
            </motion.div>
        </div>
    );
}
