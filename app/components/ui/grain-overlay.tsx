"use client";

export default function GrainOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[50] opacity-[0.03] mix-blend-overlay transform-gpu">
            <div
                className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.4] will-change-transform"
                style={{ filter: "contrast(170%) brightness(100%)" }}
            />
        </div>
    );
}
