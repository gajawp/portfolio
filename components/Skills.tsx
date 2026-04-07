"use client";

import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-28">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-emerald-400 text-sm font-semibold">04</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Skills
        </h2>
        <div className="flex-1 h-[1px] bg-white/10 ml-6" />
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {portfolioData.skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-white/5 
              border border-white/10 
              rounded-xl 
              p-6 
              backdrop-blur-md
              hover:border-emerald-400/30
              transition
            "
          >
            {/* TITLE */}
            <h3 className="text-emerald-400 font-semibold mb-4 text-lg">
              {skill.title}
            </h3>

            {/* ITEMS */}
            <div className="flex flex-wrap gap-3 text-gray-400 text-sm leading-6">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}