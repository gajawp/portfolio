"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-28">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-emerald-400 text-sm font-semibold">02</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Experience
        </h2>
        <div className="flex-1 h-[1px] bg-white/10 ml-6" />
      </div>

      <div className="relative">

        {/* VERTICAL LINE */}
        <div className="absolute left-2 top-0 w-[2px] h-full bg-emerald-400/20" />

        <div className="space-y-24">

          {portfolioData.experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">

              {/* DOT */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />

              {/* TOP ROW */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {exp.role}
                  </h3>

                  <p className="text-emerald-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="text-sm text-gray-500 text-right whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              {/* BULLETS */}
              <ul className="mt-6 space-y-4 text-gray-400 text-[15px] leading-7">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">

                    {/* ARROW */}
                    <span className="text-emerald-400 mt-[6px] text-sm">→</span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* TECH TAGS */}
              {exp.tech && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-[6px]
                        text-[13px]
                        text-gray-300
                        border border-white/10
                        rounded-md
                        bg-white/5
                        hover:border-emerald-400/40
                        hover:text-emerald-400
                        transition
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}