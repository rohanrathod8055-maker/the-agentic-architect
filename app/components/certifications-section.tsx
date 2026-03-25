"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, BadgeCheck } from "lucide-react";

const certificates = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    description:
      "Foundational certification covering core Claude capabilities, prompt engineering essentials, and responsible AI interaction patterns.",
    date: "2025",
    file: "/certificates/claude-101.pdf",
    badge: "🎓",
    color: "from-blue-600 to-violet-600",
  },
  {
    title: "Claude Code In Action",
    issuer: "Anthropic",
    description:
      "Hands-on certification demonstrating proficiency in using Claude for real-world software engineering tasks, code generation, and agentic workflows.",
    date: "2025",
    file: "/certificates/claude-code-in-action.pdf",
    badge: "⚡",
    color: "from-violet-600 to-purple-600",
  },
  {
    title: "AI Fluency Framework Foundations",
    issuer: "Anthropic / Claude",
    description:
      "Advanced certification validating expertise in AI fluency frameworks, strategic AI integration, and building intelligent systems with Claude.",
    date: "2025",
    file: "/certificates/claude-ai-fluency-foundations.pdf",
    badge: "🧠",
    color: "from-cyan-600 to-blue-600",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-blue-500 text-xs tracking-widest mb-4 block uppercase">
            CERTIFICATIONS_V1
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight text-white">
            Verified Credentials
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Officially certified by Anthropic — demonstrating hands-on mastery
            of Claude AI systems and agentic workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="group relative h-full bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-[#1a1a1a] rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 flex flex-col">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Award className="w-7 h-7 text-white" />
                </div>

                {/* Badge & Title */}
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xl">{cert.badge}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                </div>

                {/* Issuer row */}
                <div className="flex items-center gap-1.5 mb-4">
                  <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-blue-400 font-medium">
                    {cert.issuer}
                  </span>
                  <span className="text-neutral-600 text-xs ml-auto font-mono">
                    {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-6">
                  {cert.description}
                </p>

                {/* CTA */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500/50 transition-all duration-200 group/btn w-full justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:text-blue-400 transition-colors" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
