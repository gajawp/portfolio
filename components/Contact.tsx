"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-32 text-center">

      {/* HEADER */}
      <div className="mb-16">
        <p className="text-emerald-400 text-sm font-semibold mb-2">05</p>

        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
          Seeking Software Engineer & ML co-op opportunities for 2026. 
          Let's build something impactful together.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* EMAIL */}
        <a
          href="mailto:gajawada.p@northeastern.edu"
          className="
            border border-white/10 
            bg-black/40 
            backdrop-blur-lg 
            rounded-xl 
            p-10 
            hover:border-emerald-400/40 
            hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]
            transition
          "
        >
          <div className="flex flex-col items-center gap-4">
            <Mail size={28} className="text-gray-300" />

            <h3 className="text-white text-lg font-semibold">
              Email
            </h3>

            <p className="text-gray-400 text-sm">
              gajawada.p@northeastern.edu
            </p>
          </div>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/preethi-gajawada-4b6824169/"
          target="_blank"
          className="
            border border-white/10 
            bg-black/40 
            backdrop-blur-lg 
            rounded-xl 
            p-10 
            hover:border-emerald-400/40 
            hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]
            transition
          "
        >
          <div className="flex flex-col items-center gap-4">
            <FaLinkedin size={28} className="text-gray-300" />

            <h3 className="text-white text-lg font-semibold">
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm">
              preethi-gajawada
            </p>
          </div>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/gajawp"
          target="_blank"
          className="
            border border-white/10 
            bg-black/40 
            backdrop-blur-lg 
            rounded-xl 
            p-10 
            hover:border-emerald-400/40 
            hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]
            transition
          "
        >
          <div className="flex flex-col items-center gap-4">
            <FaGithub size={28} className="text-gray-300" />

            <h3 className="text-white text-lg font-semibold">
              GitHub
            </h3>

            <p className="text-gray-400 text-sm">
              gajawp
            </p>
          </div>
        </a>

      </div>
    </section>
  );
}