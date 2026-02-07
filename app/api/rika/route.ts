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
                        content: context + '\n\nYou are Rika, a professional and enthusiastic AI assistant. Give detailed, comprehensive answers (4-6 sentences). Be helpful and showcase Rohan\'s expertise!'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                temperature: 0.7,
                max_tokens: 300,
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
        return "Hi! I'm Rika, Rohan's AI assistant embedded in his portfolio. I have complete knowledge about all his projects, technical skills, work experience, educational background, and future goals. Whether you want to know about his AI expertise, the impressive applications he's built, his freelance experience, or his plans to study in Japan - I'm here to provide detailed, helpful answers. What would you like to know?";
    }

    const lower = msg.toLowerCase();

    // Projects - Long detailed response
    if (lower.includes('project')) {
        return "Rohan has built an outstanding portfolio of 5+ production-ready applications that showcase his AI and full-stack expertise! His flagship project is the **Manhwa Aggregator Platform** - a comprehensive web app built with Next.js, Python, and Puppeteer that serves over 10,000 daily users with AI-powered manga recommendations and real-time chapter tracking. He's also created a **YouTube Analytics AI Dashboard** using Firebase and Gemini AI that provides automated, actionable content strategy insights for creators looking to grow their channels. Another impressive project is his **AI-Powered 3D Asset Generator** built with Blender API and Python, which uses procedural generation to create game-ready 3D assets, reducing production time by 60%. Every single one of his projects demonstrates his ability to integrate cutting-edge AI technologies with scalable, user-friendly interfaces!";
    }

    // Skills - Long detailed response
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) {
        return "Rohan is a versatile full-stack developer with exceptional AI expertise! His primary specialization is **AI Agent Architecture & Development** - he builds intelligent autonomous systems using GPT-4, Claude, and Gemini APIs, with deep experience in LangChain for multi-step workflows and advanced prompt engineering techniques. On the frontend, he's a master of **Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and GSAP**, creating beautiful, high-performance user interfaces with smooth animations. His backend expertise includes **Node.js, Python, Firebase, and MongoDB** for building robust, scalable server architectures. He's also proficient in **cross-platform development** for both web and mobile platforms, with a strong focus on rapid prototyping - turning ideas into production-ready applications quickly without sacrificing quality. In essence, he's a complete AI-first full-stack developer who can handle every aspect of modern application development!";
    }

    // Contact - Long detailed response
    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('reach')) {
        return "You can reach Rohan Rathod directly via **email at rohanrathod@example.com** - that's the best way for project inquiries, collaboration opportunities, or any professional discussions! He's also very active on **GitHub at github.com/rohanrathod** where you can explore his code, check out his repositories, and see his technical contributions. For professional networking, you'll find him on **LinkedIn at linkedin.com/in/rohanrathod**. Rohan is currently actively seeking **freelance projects, internships, and full-time opportunities**, particularly in roles involving AI development, full-stack web applications, mobile development, or any innovative tech solutions. What makes him a great collaborator is his proven track record - he's maintained **100% client satisfaction** across all his freelance work through clear communication, reliable delivery, and high-quality code. Don't hesitate to reach out!";
    }

    // Japan - Long detailed response
    if (lower.includes('japan') || lower.includes('study') || lower.includes('abroad')) {
        return "Rohan is actively preparing to **study abroad in Japan** after completing his BCS degree, and this goal truly reflects his ambition and international mindset! He's passionate about advancing his expertise in AI research and international software development in one of the world's leading tech hubs. Japan represents the perfect intersection of his interests - cutting-edge AI innovation, world-class educational institutions, and a culture he deeply admires. This international study goal demonstrates his commitment to continuous learning and his desire to work on globally impactful AI technologies. He sees studying in Japan as an opportunity to collaborate with international researchers, contribute to global AI advancement, and bring diverse perspectives to his work. It's a dream that drives his current projects and academic performance!";
    }

    // Experience - Long detailed response
    if (lower.includes('experience') || lower.includes('work') || lower.includes('freelance')) {
        return "Rohan has accumulated **2+ years of hands-on coding experience** and has been working professionally as a **freelance AI-focused developer since 2024**. During this time, he's successfully delivered **5+ production-ready applications** spanning web and mobile platforms, working with clients from various industries all while managing his studies. What's truly remarkable is his **perfect 100% client satisfaction rate** - every single client has been thrilled with his work, praising his technical skills, communication, and ability to deliver on time. His freelance approach combines rapid prototyping methodologies with robust, AI-driven architectures, allowing him to transform client ideas into fully functional products efficiently and reliably. He specializes in building intelligent systems that automate workflows and solve real business problems, whether that's through web applications with Next.js and React, mobile apps, or sophisticated AI agent systems integrating GPT-4, Claude, and Gemini APIs!";
    }

    // Who/About - Long detailed response
    if (lower.includes('who') || lower.includes('rohan') || lower.includes('about') || lower.includes('tell me')) {
        return "Rohan Rathod is a **19-year-old AI-first developer** from Solapur, Maharashtra, India, who's making waves in the tech world! He's currently a **2nd year Bachelor of Computer Science (BCS) student at DHB Soni College** (2025-2028), where he maintains excellent academic performance while actively participating in coding clubs and running AI experimentation projects. What truly distinguishes Rohan is his specialization in **AI Agent Architecture and Development** - he doesn't just use AI tools superficially; he builds complex, intelligent autonomous systems from the ground up. He's a versatile full-stack developer who creates websites, mobile applications, and comprehensive AI-powered platforms using cutting-edge technologies like Next.js, Python, React, and various LLM APIs. His passion lies in rapid prototyping and creating agentic AI systems that provide real value and solve genuine problems. Looking ahead, he's preparing to study in Japan to further enhance his AI expertise on an international stage!";
    }

    // Education - Long detailed response
    if (lower.includes('education') || lower.includes('college') || lower.includes('student') || lower.includes('school')) {
        return "Rohan is currently pursuing his **Bachelor of Computer Science (BCS) at DHB Soni College in Solapur** (2025-2028), and he's now in his 2nd year of studies. But he's far from being just another student attending lectures! He's an extremely active member of the college's coding clubs, where he leads discussions on modern development practices and emerging AI technologies. His academic focus areas include **AI/ML, Web Development, and Software Engineering**, but he goes way beyond the standard curriculum by constantly experimenting with the latest AI models, frameworks, and development tools. What's particularly impressive is how effectively he balances rigorous academics with real-world professional work - he's already delivered 5+ production applications as a freelancer while maintaining his studies! After completing his BCS degree, his plan is to pursue higher education in Japan, demonstrating his commitment to international learning and global AI research collaboration!";
    }

    // AI/Agents - Long detailed response
    if (lower.includes('ai') || lower.includes('agent') || lower.includes('llm')) {
        return "Rohan is a true specialist in **AI Agent Architecture & Development** - this is his core passion and expertise! He designs and builds autonomous, intelligent systems that can reason through complex problems, make contextual decisions, and automate sophisticated workflows without constant human intervention. He works extensively with the most advanced **Large Language Models available: GPT-4 from OpenAI, Claude from Anthropic, and Google's Gemini APIs**, seamlessly integrating them into production applications. His technical toolkit includes **LangChain** for orchestrating complex multi-step AI workflows and chains, along with expertise in **advanced prompt engineering** techniques to extract optimal performance and accuracy from these models. But his AI work goes far beyond simple API integrations - he architects complete agent systems with memory, reasoning capabilities, and multi-tool access that can handle real-world business tasks. You can see this expertise throughout his portfolio: the AI-powered recommendations in his Manhwa Aggregator, the Gemini-driven insights in his YouTube Analytics Dashboard, and his sophisticated approach to automated 3D asset generation!";
    }

    // Default - varied long responses
    const defaultResponses = [
        "That's a great question! I'm Rika, Rohan's AI assistant with comprehensive knowledge of his entire portfolio and expertise. I can provide detailed, in-depth information about his impressive collection of 5+ projects (including the Manhwa Aggregator platform serving 10,000+ daily users with AI recommendations), his extensive technical skills in AI Agent Architecture and modern full-stack development, his successful freelance career with 100% client satisfaction, his educational journey at DHB Soni College where he's excelling in BCS studies, or his exciting international aspirations to study in Japan. Which aspect of Rohan's work and background would you like me to dive into?",
        "I'd absolutely love to help you understand more about Rohan and his work! As his dedicated AI assistant, I have complete, detailed knowledge about everything - from his cutting-edge AI-operated projects like the Manhwa Aggregator, YouTube Analytics Dashboard, and 3D Asset Generator, to his robust technical expertise spanning Next.js, React, Python, TypeScript, and advanced LLM integration with GPT-4, Claude, and Gemini. I can also share insights about his 2+ years of professional experience, his current BCS education, and even his future plans for international studies. What specific topic would you find most interesting or helpful?",
        "Thanks so much for your interest! I'm here to give you comprehensive, detailed insights into everything about Rohan's capabilities and achievements. Whether you're curious about his specialized AI agent development skills and how he builds intelligent autonomous systems, his portfolio of full-stack projects that collectively serve thousands of users daily, his proven track record of 2+ years in freelance development with perfect client satisfaction scores, his academic background and involvement in BCS at DHB Soni College, or his ambitious goal to pursue advanced AI education in Japan - I can provide thorough, helpful information on all these topics and more. What would you like to explore in depth?",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
