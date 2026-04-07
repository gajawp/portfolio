"use client";

import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-28">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-emerald-400 text-sm font-semibold">03</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Projects
        </h2>
        <div className="flex-1 h-[1px] bg-white/10 ml-6" />
      </div>

      <div className="space-y-12">

        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className={`
              relative rounded-xl p-[1px]
              ${project.featured
                ? "bg-gradient-to-r from-emerald-400/40 via-transparent to-purple-500/40"
                : ""}
            `}
          >

            {/* INNER CARD */}
            <div
              className="
                bg-black/40 
                backdrop-blur-lg
                border border-white/[0.08]
                rounded-xl
                p-8
                hover:border-emerald-400/30
                hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]
                hover:scale-[1.01]
                transition duration-300
              "
            >

              {/* TOP ROW */}
              <div className="flex justify-between items-start">

                <div className="flex items-center gap-4 flex-wrap">

                  {/* NUMBER */}
                  <span className="text-emerald-400 text-lg font-semibold">
                    {project.id}
                  </span>

                  {/* TITLE */}
                  <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  {/* FEATURED BADGE */}
                  {project.featured && (
                    <span className="
                      px-3 py-[5px] text-xs 
                      bg-emerald-400/15 
                      text-emerald-400 
                      rounded-md 
                      shadow-[0_0_10px_rgba(16,185,129,0.3)]
                    ">
                      Featured
                    </span>
                  )}
                </div>

                {/* ARROW */}
                <span className="text-gray-500 text-xl hover:text-emerald-400 transition">
                  ↗
                </span>
              </div>

              {/* DATE */}
              <p className="text-gray-500 text-sm mt-1">
                {project.period}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 text-gray-400/80 leading-7 max-w-4xl text-[15px]">
                {project.description}
              </p>

              {/* BULLETS */}
              <ul className="mt-6 space-y-3 text-[15px] leading-7">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3">

                    {/* DOT */}
                    <span className="text-emerald-400 mt-[7px] text-[6px]">
                      ●
                    </span>

                    {/* TEXT */}
                    <span className="text-emerald-400/90">
                      {point}
                    </span>

                  </li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-xs
                      border border-white/[0.08]
                      bg-white/[0.04]
                      text-gray-400
                      rounded-md
                      hover:text-emerald-400
                      hover:border-emerald-400/30
                      transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}