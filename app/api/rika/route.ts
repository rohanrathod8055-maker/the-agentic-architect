import { NextResponse } from 'next/server';

const OPENROUTER_API_KEY = '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';

export async function POST(request: Request) {
    let userMessage = '';
    let context = '';

    try {
        // Parse request body ONCE
        const body = await request.json();
        userMessage = body.message || '';
        context = body.context || '';

        // Quick responses for simple inputs
        const lower = userMessage.toLowerCase().trim();
        if (lower === 'hi' || lower === 'hello' || lower === 'hey') {
            return NextResponse.json({
                response: "Hi! I'm Rika, Rohan's AI assistant. Ask me anything about his projects, skills, or experience!"
            });
        }

        if (lower === 'yes' || lower === 'ok' || lower === 'sure') {
            return NextResponse.json({
                response: "Great! What would you like to know about Rohan? I can tell you about his AI projects, technical skills, work experience, or his plans to study in Japan!"
            });
        }

        // Call OpenRouter API with Gemini 3 Pro Preview
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://the-agentic-architect.vercel.app',
                'X-Title': 'Rika AI Assistant',
            },
            body: JSON.stringify({
                model: 'google/gemini-3-pro-preview',
                messages: [
                    {
                        role: 'system',
                        content: context + '\n\nYou are Rika, a professional and friendly AI assistant embedded in Rohan\'s portfolio. Keep answers concise (2-3 sentences max). Be helpful, enthusiastic, and showcase Rohan\'s expertise. Encourage people to work with him!'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                temperature: 0.7,
                max_tokens: 200,
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenRouter API error:', errorText);
            throw new Error('OpenRouter API failed');
        }

        const data = await response.json();
        const aiResponse = data.choices?.[0]?.message?.content;

        if (!aiResponse) {
            throw new Error('No response from AI');
        }

        return NextResponse.json({ response: aiResponse.trim() });

    } catch (error) {
        console.error('Rika API error:', error);

        // Use intelligent fallback with the message we already extracted
        const fallbackResponse = getIntelligentFallback(userMessage);
        return NextResponse.json({ response: fallbackResponse });
    }
}

function getIntelligentFallback(msg: string): string {
    if (!msg) {
        return "Hi! I'm Rika, Rohan's AI assistant. Ask me anything!";
    }

    const lower = msg.toLowerCase();

    // Yes/Acknowledgments
    if (lower === 'yes' || lower === 'ok' || lower === 'sure' || lower === 'yeah') {
        return "Awesome! What would you like to know? I can tell you about Rohan's projects, his AI expertise, work experience, or his Japan study plans!";
    }

    // Projects
    if (lower.includes('project')) {
        return "Rohan has built 5+ projects including a Manhwa Aggregator (10K+ users) with AI recommendations, a YouTube Analytics Dashboard powered by Gemini AI, and an AI 3D Asset Generator using Blender. All showcase his AI expertise!";
    }

    // Skills/Tech
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
        return "Rohan's stack: AI Agent Architecture, Next.js, React, TypeScript, Python, LLM APIs (GPT-4, Claude, Gemini), LangChain, Firebase, MongoDB, Tailwind. He's a full-stack AI specialist!";
    }

    // Contact/Hire
    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('reach')) {
        return "Reach Rohan at rohanrathod@example.com! Also on GitHub (github.com/rohanrathod) and LinkedIn. He's open to freelance work, internships, and full-time opportunities!";
    }

    // Japan
    if (lower.includes('japan') || lower.includes('study') || lower.includes('abroad')) {
        return "Rohan is preparing to study abroad in Japan! He wants to advance his AI expertise through international education and contribute to global innovation. He's passionate about Japanese culture!";
    }

    // Experience/Work
    if (lower.includes('experience') || lower.includes('work') || lower.includes('freelance')) {
        return "Rohan has 2+ years coding with 5+ production apps delivered. He's a freelance AI-focused developer with 100% client satisfaction, building intelligent web & mobile systems!";
    }

    // Who/About
    if (lower.includes('who') || lower.includes('rohan') || lower.includes('about') || lower.includes('tell me')) {
        return "Rohan Rathod is a 19-year-old AI-first developer from Solapur, India. He's a BCS student (2025-2028) who specializes in AI agent systems and full-stack development! ";
    }

    // Education
    if (lower.includes('education') || lower.includes('college') || lower.includes('student') || lower.includes('school')) {
        return "Rohan's in 2nd year BCS at DHB Soni College, Solapur (2025-2028). Active in coding clubs, focusing on AI/ML and software engineering. Planning to study in Japan!";
    }

    // AI/Agents
    if (lower.includes('ai') || lower.includes('agent') || lower.includes('llm')) {
        return "Rohan's an AI Agent Architecture specialist! He builds autonomous systems with GPT-4, Claude, and Gemini APIs, using LangChain and prompt engineering for intelligent automation!";
    }

    // Default - varied responses
    const defaultResponses = [
        "I can help with that! Want to know about Rohan's projects, technical skills, or how to work with him?",
        "Interesting question! I can tell you about Rohan's AI expertise, his 5+ projects, or his Japan study plans. What interests you?",
        "Let me help! I know all about Rohan's work - his AI projects, full-stack skills, and career goals. What would you like to explore?",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
