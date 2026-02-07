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
                response: "Hello! I'm Rika, Rohan's AI assistant embedded in his portfolio. I have complete knowledge about his projects, technical skills, work experience, and career goals. Feel free to ask me anything - whether it's about his AI expertise, the applications he's built, his education, or how you can collaborate with him!"
            });
        }

        if (lower === 'yes' || lower === 'ok' || lower === 'sure') {
            return NextResponse.json({
                response: "Fantastic! I'd love to tell you more about Rohan. I can provide detailed information about his 5+ production projects (including a Manhwa platform serving 10K+ users), his expertise in AI Agent Architecture and full-stack development, his 2+ years of freelance experience with perfect client satisfaction, his studies at DHB Soni College, or his exciting plans to study in Japan. What would you like to explore?"
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
                        content: context + '\n\nYou are Rika, a helpful AI assistant. Answer the user\'s question directly and concisely (2-3 sentences). Focus on what they asked without over-explaining.'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                temperature: 0.7,
                max_tokens: 150,
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
        const fallbackResponse = getDetailedFallback(userMessage);
        return NextResponse.json({ response: fallbackResponse });
    }
}

function getDetailedFallback(msg: string): string {
    if (!msg) {
        return "Hi! I'm Rika, Rohan's AI assistant. Ask me about his projects, skills, experience, or how to contact him!";
    }

    const lower = msg.toLowerCase();

    // Projects
    if (lower.includes('project')) {
        return "Rohan has built 5+ projects including a Manhwa Aggregator (10K+ daily users) with AI recommendations, a YouTube Analytics Dashboard using Gemini AI, and an AI-Powered 3D Asset Generator with Blender. All integrate cutting-edge AI with scalable, user-friendly interfaces.";
    }

    // Skills
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
        return "Rohan specializes in AI Agent Architecture, building autonomous systems with GPT-4, Claude, and Gemini APIs using LangChain. His stack includes Next.js, React, TypeScript, Python, Firebase, and MongoDB. He's a full-stack developer skilled in rapid prototyping for web and mobile.";
    }

    // Contact
    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('reach')) {
        return "Reach Rohan at rohanrathod@example.com or on GitHub: github.com/rohanrathod. He's open to freelance projects, internships, and full-time opportunities with 100% client satisfaction!";
    }

    // Japan
    if (lower.includes('japan') || lower.includes('study') || lower.includes('abroad')) {
        return "Rohan is preparing to study abroad in Japan after his BCS degree to advance his AI expertise. He's passionate about Japanese culture and wants to work on globally impactful AI technologies.";
    }

    // Experience
    if (lower.includes('experience') || lower.includes('work') || lower.includes('freelance')) {
        return "Rohan has 2+ years of coding experience as a freelance AI-focused developer since 2024. He's delivered 5+ production apps with 100% client satisfaction, specializing in AI agent systems and full-stack development.";
    }

    // Who/About
    if (lower.includes('who') || lower.includes('rohan') || lower.includes('about') || lower.includes('tell me')) {
        return "Rohan Rathod is a 19-year-old AI-first developer from Solapur, India. He's a 2nd year BCS student at DHB Soni College who specializes in AI Agent Architecture, building intelligent autonomous systems with Next.js, Python, and LLM APIs.";
    }

    // Education
    if (lower.includes('education') || lower.includes('college') || lower.includes('student') || lower.includes('school')) {
        return "Rohan is in 2nd year BCS at DHB Soni College, Solapur (2025-2028). He's active in coding clubs and focuses on AI/ML and software engineering. Plans to study in Japan after graduation.";
    }

    // AI/Agents
    if (lower.includes('ai') || lower.includes('agent') || lower.includes('llm')) {
        return "Rohan specializes in AI Agent Architecture, building autonomous systems with GPT-4, Claude, and Gemini APIs. He uses LangChain and prompt engineering to create intelligent systems that handle real-world tasks.";
    }


    // Default
    return "I'm Rika, Rohan's AI assistant. Ask me about his projects, skills, experience, or how to contact him!";
}
