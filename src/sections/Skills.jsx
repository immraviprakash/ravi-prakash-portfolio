import { skillsSection } from '../data/site'
import Reveal from '../components/Reveal'

export default function Skills() {
  return (
    <section
      id="skills"
      className="editorial-section border-t border-[#121212]/10 bg-[#F5F1E6]"
    >
      <div className="editorial-container">
        {/* Header */}
        <div className="max-w-3xl space-y-4 sm:space-y-5 pb-16 sm:pb-20">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.22em] uppercase font-semibold text-[#C9971A] block">
              {skillsSection.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] leading-[1.18]">
              {skillsSection.headline}
            </h2>
          </Reveal>
        </div>

        {/* 2×2 Grid of Separate Category Cards — align-items: start ensures natural heights */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-start"
          style={{ alignItems: 'start' }}
        >
          {skillsSection.categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.08} className="self-start w-full">
              <div className="rounded-2xl border border-[#C9972E]/35 bg-[#FAF7F0] p-7 sm:p-8 space-y-5 shadow-sm shadow-black/[0.02] h-auto self-start cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C9972E]/10 hover:border-[#C9972E]/55">
                {/* Category Header: Number in muted grey, label in black */}
                <div className="font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium">
                  <span className="text-[#888888]">{category.number} — </span>
                  <span className="text-[#121212] font-semibold">{category.label}</span>
                </div>

                {/* Pill-Style Tags */}
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {category.skills.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#C9972E] text-white text-xs sm:text-[13px] font-normal tracking-normal select-none cursor-default transition-all duration-300 hover:bg-[#C9972E] hover:border-[#C9972E] hover:text-[#0C0C0C] hover:font-medium hover:shadow-md hover:shadow-[#C9972E]/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
