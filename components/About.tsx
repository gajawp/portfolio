"use client";

import { Mail, GraduationCap, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {

  const socialLinks = [
    {
      icon: <Mail size={18} />,
      link: "mailto:gajawada.p@northeastern.edu",
    },
    {
      icon: <FaGithub size={18} />,
      link: "https://github.com/gajawp",
    },
    {
      icon: <FaLinkedin size={18} />,
      link: "https://www.linkedin.com/in/preethi-gajawada-4b6824169/",
    },
  ];

  return (
    <section id="about" className="px-6 md:px-20 py-28">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-emerald-400 text-sm font-semibold">01</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About
        </h2>
        <div className="flex-1 h-[1px] bg-white/10 ml-6" />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-gray-400 leading-8 text-[16px] max-w-2xl">

          <p>
            Graduate student at Northeastern University pursuing MS in Computer Science with a focus on Distributed Systems, micro services, Cloud Narrative Architectures, Machine Learning, Generative AI, and MLOps. Software engineer with 4+ years of experience at Goldman Sachs and Morgan Stanley, building scalable full-stack applications and high-performance backend systems.
          </p>

          <p>
            I specialize in developing end-to-end solutions that combine modern frontend frameworks with robust backend architectures, along with intelligent AI systems such as RAG pipelines, LLM-based applications, and distributed microservices.
          </p>

          <p>
            Experienced in building production-ready applications across the full stack, from React interfaces to backend services in Java and Python, while integrating AI-driven capabilities. AWS AI Practitioner certified with strong expertise in full-stack and AI/ML systems.
          </p>

          {/* ✅ ICONS (ONLY HERE — FIXED) */}
          <div className="flex gap-4 pt-6">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 
                  border border-white/10 
                  rounded-md 
                  bg-white/[0.03] 
                  hover:border-emerald-400/40 
                  hover:text-emerald-400 
                  hover:scale-110
                  transition
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* EDUCATION */}
          <div className="border border-white/10 bg-black/40 backdrop-blur-lg rounded-xl p-6 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition">

            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <GraduationCap size={18} />
              <h3 className="text-lg font-semibold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4 text-gray-400">

              <div>
                <p className="text-white font-medium">
                  Northeastern University
                </p>
                <p className="text-sm">
                  MS Computer Science • GPA: 4.0/4.0
                </p>
                <p className="text-xs text-gray-500">
                  Sep 2025 – May 2027
                </p>
              </div>

              <div>
                <p className="text-white font-medium">
                  Jawaharlal Nehru Technological University
                </p>
                <p className="text-sm">
                  BTech Computer Science • 9.27/10 (Distinction)
                </p>
                <p className="text-xs text-gray-500">
                  Aug 2017 – July 2021
                </p>
              </div>

            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="border border-white/10 bg-black/40 backdrop-blur-lg rounded-xl p-6 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] transition">

            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <Award size={18} />
              <h3 className="text-lg font-semibold text-white">
                Certifications & Awards
              </h3>
            </div>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• AWS AI Practitioner Certified</li>
              <li>• Best Project – CSHACK 2021</li>
              <li>• Publishing at ACL 2026</li>
              <li>• ML with Python (IBM)</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}