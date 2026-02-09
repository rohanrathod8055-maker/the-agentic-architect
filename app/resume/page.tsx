"use client";

import { Download, Mail, MapPin, Globe, Code2, Sparkles, Zap, Award, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumePage() {
    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Download Button - Hidden on print */}
            <div className="print:hidden fixed top-6 right-6 z-50">
                <motion.button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download className="w-5 h-5" />
                    Download PDF
                </motion.button>
            </div>

            {/* A4 Resume Container */}
            <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none my-8 print:my-0">
                <div className="p-12 print:p-8">
                    {/* Header with Gradient Accent */}
                    <div className="relative border-b-4 border-blue-600 pb-8 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 -mx-12 px-12 -mt-12 pt-12 print:-mx-8 print:px-8 print:-mt-8 print:pt-8">
                        <h1 className="text-6xl font-black text-gray-900 tracking-tight mb-3">
                            ROHAN RATHOD
                        </h1>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-6 h-6 text-blue-600" />
                            <p className="text-2xl text-blue-600 font-bold">
                                AI-First Full-Stack Developer
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-600" />
                                <span>rohanrathod8055@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <span>Solapur, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-blue-600" />
                                <span>github.com/rohanrathod8055-maker</span>
                            </div>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">PROFESSIONAL SUMMARY</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed ml-13">
                            <strong>Versatile AI-focused developer</strong> with expertise in full-stack web applications,
                            mobile app development, and AI agent architecture. Passionate about leveraging cutting-edge AI
                            technologies to build intelligent systems across multiple platforms. Experienced in
                            <strong> rapid prototyping</strong>, <strong>agentic AI systems</strong>, and delivering production-ready
                            solutions for web and mobile. Currently seeking opportunities to advance my expertise in AI and
                            software engineering through <strong>international education in Japan</strong>, where I can contribute
                            to innovative research and global technology advancement.
                        </p>
                    </section>

                    {/* Core Competencies - NEW SECTION */}
                    <section className="mb-8 bg-blue-50 -mx-12 px-12 py-6 print:-mx-8 print:px-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">CORE COMPETENCIES</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 ml-13">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700">AI Agent Architecture & Development</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700">Full-Stack Web & Mobile Development</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700">LLM Integration & Prompt Engineering</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700">Cross-Platform Application Development</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700">Rapid Prototyping & Agile Development</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700">International Collaboration & Communication</span>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">EDUCATION</h2>
                        </div>
                        <div className="ml-13">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Bachelor of Computer Science (BCS)</h3>
                                    <p className="text-blue-600 font-semibold">DHB Soni College, Solapur</p>
                                </div>
                                <span className="text-sm font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded">2025 - 2028</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Currently in 2nd year • Specializing in AI/ML, Web Development & Software Engineering •
                                Active in coding clubs and AI experimentation projects
                            </p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">PROFESSIONAL EXPERIENCE</h2>
                        </div>
                        <div className="ml-13">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">AI-Focused Freelance Developer</h3>
                                    <p className="text-blue-600 font-semibold">Self-Employed • Remote</p>
                                </div>
                                <span className="text-sm font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded">2024 - Present</span>
                            </div>
                            <ul className="list-none text-gray-700 text-sm space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                                    <span>Developed <strong>5+ production-ready applications</strong> across web and mobile platforms using AI-driven architecture</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                                    <span>Built <strong>intelligent AI agent systems</strong> for workflow automation, integrating GPT-4, Claude, and Gemini APIs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                                    <span>Created <strong>full-stack web applications</strong> with Next.js, React, and Python, emphasizing responsive design and user experience</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                                    <span>Specialized in <strong>rapid prototyping</strong> - transforming concepts into functional products using modern AI tools and frameworks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                                    <span>Maintained <strong>100% client satisfaction</strong> through clear communication, iterative development, and reliable delivery</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">TECHNICAL SKILLS</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-6 ml-13">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    AI & Automation
                                </h4>
                                <ul className="text-sm text-gray-700 space-y-1.5">
                                    <li>• OpenAI API (GPT-4)</li>
                                    <li>• Claude (Anthropic)</li>
                                    <li>• Google Gemini</li>
                                    <li>• LangChain</li>
                                    <li>• AI Agent Frameworks</li>
                                    <li>• Prompt Engineering</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    Frontend
                                </h4>
                                <ul className="text-sm text-gray-700 space-y-1.5">
                                    <li>• React / Next.js</li>
                                    <li>• TypeScript</li>
                                    <li>• Tailwind CSS</li>
                                    <li>• Framer Motion</li>
                                    <li>• GSAP</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    Backend & Tools
                                </h4>
                                <ul className="text-sm text-gray-700 space-y-1.5">
                                    <li>• Node.js / Python</li>
                                    <li>• Firebase</li>
                                    <li>• MongoDB</li>
                                    <li>• Git / GitHub</li>
                                    <li>• Blender API</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">KEY PROJECTS</h2>
                        </div>

                        <div className="space-y-4 ml-13">
                            <div className="border-l-4 border-blue-600 pl-4">
                                <h3 className="text-lg font-bold text-gray-900">InkFlow - Tech News Aggregator</h3>
                                <p className="text-blue-600 font-semibold text-sm mb-2">Next.js 16 • Supabase • Vercel Cron • AI Categorization</p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Built manga-inspired tech news platform that scrapes 100+ articles daily from 7 major sources (TechCrunch, The Verge, etc.).
                                    Features AI auto-categorization, full content extraction, and real-time updates. Live at inkflow-news.vercel.app
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-4">
                                <h3 className="text-lg font-bold text-gray-900">Kudo Music - Music Streaming PWA</h3>
                                <p className="text-blue-600 font-semibold text-sm mb-2">Next.js 16 • TypeScript • Zustand • JioSaavn API</p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Created Spotify-like PWA streaming millions of songs with synced lyrics, playlist management, and Spotify import.
                                    Features responsive mobile design, audio player with shuffle/repeat, and offline playlist storage. Live at kudo-music.vercel.app
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-600 pl-4">
                                <h3 className="text-lg font-bold text-gray-900">Manhwa Aggregator Platform</h3>
                                <p className="text-blue-600 font-semibold text-sm mb-2">Next.js • Python • Puppeteer • AI Integration</p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Built automated manga tracking system with AI-powered recommendations and real-time chapter updates.
                                    Leveraged web scraping and intelligent caching for seamless reading experience. Live at inkflow-roan.vercel.app
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Additional Info */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">ADDITIONAL INFORMATION</h2>
                        </div>
                        <div className="ml-13 grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                            <div><strong>Languages:</strong> English, Hindi, Marathi</div>
                            <div><strong>Study Goals:</strong> Pursuing higher education in Japan</div>
                            <div><strong>Work Style:</strong> AI-First, Agile, Iterative</div>
                            <div><strong>Availability:</strong> International opportunities welcome</div>
                            <div><strong>Focus Areas:</strong> AI Agents, Full-Stack, Mobile</div>
                            <div><strong>Interests:</strong> Japanese culture, AI research, Innovation</div>
                        </div>
                    </section>
                </div>

                {/* Footer Note */}
                <div className="bg-blue-50 border-t-2 border-blue-600 px-12 py-4 text-center text-sm text-gray-600 print:px-8">
                    <p className="font-semibold">
                        🤖 Passionate about pushing AI boundaries and building intelligent systems that solve real problems
                    </p>
                </div>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
        </div >
    );
}
