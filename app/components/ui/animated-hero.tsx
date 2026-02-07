"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function DisplacementText({ text }: { text: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    // Track mouse movement
    useMemo(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };

        if (typeof window !== "undefined") {
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            // Smooth displacement based on mouse position
            const targetX = mouseRef.current.x * 0.5;
            const targetY = mouseRef.current.y * 0.5;

            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                targetY * 0.3,
                0.05
            );
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                targetX * 0.3,
                0.05
            );

            // Add subtle floating animation
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <Center>
            <Text3D
                ref={meshRef}
                font="/fonts/inter_bold.json"
                size={1}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                {text}
                <meshStandardMaterial
                    color="#ffffff"
                    metalness={0.8}
                    roughness={0.2}
                    emissive="#3B82F6"
                    emissiveIntensity={0.2}
                />
            </Text3D>
        </Center>
    );
}

export default function AnimatedHero({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full h-screen relative ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                className="bg-transparent"
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
                <DisplacementText text="AGENTIC" />
            </Canvas>

            {/* Fallback text for accessibility */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1 className="sr-only">Agentic Architect</h1>
            </div>
        </div>
    );
}
