"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[30%] h-72 w-72 bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="absolute right-[10%] top-[10%] h-72 w-72 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* LEFT SIDE */}
      <div className="max-w-3xl">

        {/* STATUS BADGE */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          Actively seeking 2026 Internship/CO-OP opportunities
        </div>

        {/* NAME */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 text-transparent bg-clip-text">
            Preethi Gajawada
          </span>
        </h1>

        {/* TAGLINE */}
        <p className="mt-4 text-gray-400 italic">
          Fueled by Espresso & Curiosity ☕
        </p>

        {/* CURRENTLY BUILDING */}
        <p className="mt-3 text-gray-500 text-sm">
          <span className="text-emerald-400">●</span>{" "}
          Currently building: Multi-objective Prompt Optimization @ InsightX Lab · Self-Correcting RAG via Multi-Agent Debate
        </p>

        {/* 🔥 TYPING ANIMATION */}
        <div className="mt-10 text-2xl md:text-4xl font-medium text-gray-300">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              1500,
              "",
              "AI/ML Engineer",
              1500,
              "",
              "Backend Systems Engineer",
              1500,
              "",
              "RAG & LLM Engineer",
              1500,
              "",
              "Distributed Systems Engineer",
              1500,
              "",
              "Crafting scalable systems",
              1500,
              "",
            ]}
            speed={50}
            repeat={Infinity}
            cursor={false}
          />
          <span className="text-emerald-400 animate-pulse">|</span>
        </div>

        {/* SUBTITLE */}
        <p className="mt-6 text-gray-500">
          MS Computer Science @ Northeastern University · AI/ML & Full-Stack
        </p>

        <div className="mt-6 flex items-center gap-6 text-gray-500 text-sm">
  <span>📍 Seattle, WA</span>
  <span>💼 Open to Opportunities</span>
</div>

        {/* STATS */}
        <div className="mt-10 flex gap-10">
          <div>
            <p className="text-emerald-400 text-2xl font-bold">10+</p>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>
          <div>
            <p className="text-emerald-400 text-2xl font-bold">4.0</p>
            <p className="text-gray-500 text-sm">GPA</p>
          </div>
          <div>
            <p className="text-emerald-400 text-2xl font-bold">2</p>
            <p className="text-gray-500 text-sm">Publications</p>
          </div>
        </div>

        {/* 🚀 BUTTONS (FIXED POSITION) */}
        <div className="flex flex-wrap items-center gap-4 mt-10">

          {/* LET'S TALK */}
          <a
            href="#contact"
            className="
              px-6 py-4 
              bg-white 
              text-black 
              font-medium 
              rounded-md 
              flex items-center gap-2
              hover:opacity-90
              transition
            "
          >
            Let's Talk →
          </a>

          {/* VIEW WORK */}
          <a
            href="#projects"
            className="
              px-6 py-4 
              border border-white/20 
              text-white 
              rounded-md 
              hover:border-white/40
              transition
            "
          >
            View Work
          </a>

          {/* RESUME */}
          <a
            href="/Preethi_Gajawada_Resume.pdf"
            download
            className="
              px-6 py-4 
              border border-emerald-400/40 
              text-emerald-400 
              rounded-md 
              flex items-center gap-2
              hover:bg-emerald-400/10
              hover:border-emerald-400
              transition
            "
          >
            ↓ Resume
          </a>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="mt-12 md:mt-0 relative">

        {/* OUTER GLOW */}
        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl scale-110" />

        {/* IMAGE */}
        <div className="relative rounded-full border-4 border-emerald-400/60 p-2 shadow-[0_0_60px_rgba(16,185,129,0.5)]">
          <Image
            src="/profile.jpg"
            width={350}
            height={350}
            alt="profile"
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}