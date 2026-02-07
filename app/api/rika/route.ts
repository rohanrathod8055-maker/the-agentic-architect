import { NextResponse } from 'next/server';

const OPENROUTER_API_KEY = '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';

export async function POST(request: Request) {
    try {
        const { message, context } = await request.json();

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
                        content: context + '\n\nYou are Rika, a professional and friendly AI assistant. Keep answers concise (2-3 sentences max). Be helpful and showcase Rohan\'s expertise.'
                    },
                    {
                        role: 'user',
                        content: message
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
        const aiResponse = data.choices?.[0]?.message?.content || "I'm here to help! Ask me about Rohan's projects, skills, or experience.";

        return NextResponse.json({ response: aiResponse.trim() });
    } catch (error) {
        console.error('Rika API error:', error);

        // Intelligent fallback based on keywords
        const { message } = await request.json();
        const fallbackResponse = getIntelligentFallback(message);

        return NextResponse.json({ response: fallbackResponse });
    }
}

function getIntelligentFallback(msg: string): string {
    const lower = msg.toLowerCase();

    if (lower.includes('project')) return "Rohan has built 5+ impressive projects including a Manhwa Aggregator with AI recommendations, a YouTube Analytics Dashboard using Gemini AI, and an AI-powered 3D Asset Generator. Each showcases his expertise in AI integration and full-stack development!";

    if (lower.includes('skill') || lower.includes('tech')) return "Rohan specializes in AI Agent Architecture, Next.js, React, Python, and LLM integration (GPT-4, Claude, Gemini). He's also skilled in Firebase, MongoDB, Tailwind CSS, and rapid prototyping. A true full-stack AI developer!";

    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) return "You can reach Rohan at rohanrathod@example.com, check his GitHub at github.com/rohanrathod, or connect on LinkedIn. He's open to freelance projects, internships, and full-time opportunities!";

    if (lower.includes('japan') || lower.includes('study')) return "Rohan is preparing to study abroad in Japan to advance his expertise in AI research and international software development. He's passionate about Japanese culture and wants to contribute to global AI innovation!";

    if (lower.includes('experience') || lower.includes('work') || lower.includes('freelance')) return "Rohan has 2+ years of coding experience with 5+ production applications delivered. As a freelance AI-focused developer, he maintains 100% client satisfaction by building intelligent web and mobile systems.";

    if (lower.includes('who') || lower.includes('rohan') || lower.includes('about')) return "Rohan Rathod is a 19-year-old AI-first developer from Solapur, India, currently pursuing BCS (2025-2028). He specializes in building AI agent systems and full-stack applications using cutting-edge technologies!";

    if (lower.includes('education') || lower.includes('college') || lower.includes('student')) return "Rohan is in his 2nd year of BCS at DHB Soni College, Solapur. He's active in coding clubs, focuses on AI/ML and software engineering, and plans to study abroad in Japan!";

    if (lower.includes('ai') || lower.includes('agent')) return "Rohan specializes in AI Agent Architecture and Development! He builds autonomous systems using GPT-4, Claude, and Gemini APIs, with expertise in LangChain and prompt engineering for intelligent workflow automation.";

    return "Hi! I'm Rika, Rohan's AI assistant. I can tell you about his projects (Manhwa Aggregator, YouTube AI Dashboard), technical skills (AI, Next.js, Python), work experience, or how to contact him. What would you like to know?";
}
