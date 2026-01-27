"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { SOUNDS } from "../lib/sounds";

interface AudioContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playSfx: (key: keyof typeof SOUNDS) => void;
    unlockAudio: () => Promise<void>;
    isUnlocked: boolean;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
    const [isMuted, setIsMuted] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);

    // Refs for Audio API
    const audioCtx = useRef<globalThis.AudioContext | null>(null);
    const ambientSource = useRef<AudioBufferSourceNode | null>(null);
    const ambientGain = useRef<GainNode | null>(null);

    // Buffer Cache
    const buffers = useRef<Map<keyof typeof SOUNDS, AudioBuffer>>(new Map());

    useEffect(() => {
        if (typeof window !== "undefined") {
            const Ctx = window.AudioContext || (window as any).webkitAudioContext;
            audioCtx.current = new Ctx();

            // Preload sounds
            Object.entries(SOUNDS).forEach(([key, url]) => {
                loadSound(key as keyof typeof SOUNDS, url);
            });
        }
        return () => {
            audioCtx.current?.close();
        }
    }, []);

    const loadSound = async (key: keyof typeof SOUNDS, url: string) => {
        if (!audioCtx.current) return;
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const decodedBuffer = await audioCtx.current.decodeAudioData(arrayBuffer);
            buffers.current.set(key, decodedBuffer);
        } catch (e) {
            console.error(`Failed to load sound: ${key}`, e);
        }
    };

    const unlockAudio = async () => {
        if (!audioCtx.current) return;

        if (audioCtx.current.state === "suspended") {
            await audioCtx.current.resume();
        }
        setIsUnlocked(true);
        playAmbient();
    };

    const playAmbient = () => {
        if (!audioCtx.current || isMuted || ambientSource.current) return;

        const buffer = buffers.current.get("AMBIENT");
        if (!buffer) return;

        const source = audioCtx.current.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const gainNode = audioCtx.current.createGain();
        gainNode.gain.value = 0.3;

        source.connect(gainNode);
        gainNode.connect(audioCtx.current.destination);

        source.start(0);

        ambientSource.current = source;
        ambientGain.current = gainNode;
    };

    const stopAmbient = () => {
        if (ambientSource.current) {
            ambientSource.current.stop();
            ambientSource.current.disconnect();
            ambientSource.current = null;
        }
        if (ambientGain.current) {
            ambientGain.current.disconnect();
            ambientGain.current = null;
        }
    };

    const toggleMute = () => {
        setIsMuted(prev => {
            const newState = !prev;
            if (newState) stopAmbient();
            else if (isUnlocked) playAmbient();
            return newState;
        });
    };

    const playSfx = (key: keyof typeof SOUNDS) => {
        if (isMuted || !isUnlocked || !audioCtx.current || key === "AMBIENT") return;

        const buffer = buffers.current.get(key);
        if (!buffer) return;

        const source = audioCtx.current.createBufferSource();
        source.buffer = buffer;

        // Randomize pitch slightly for organic feel
        if (key === "TYPING") {
            source.playbackRate.value = 0.9 + Math.random() * 0.2;
        }

        const gainNode = audioCtx.current.createGain();
        gainNode.gain.value = 0.4;

        source.connect(gainNode);
        gainNode.connect(audioCtx.current.destination);
        source.start(0);
    };

    return (
        <AudioContext.Provider value={{ isMuted, toggleMute, playSfx, unlockAudio, isUnlocked }}>
            {children}
        </AudioContext.Provider>
    );
}

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) throw new Error("useAudio must be used within an AudioProvider");
    return context;
};
