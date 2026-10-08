import {
  GraduationCap,
  Award,
} from 'lucide-react'
import { education, certifications } from '../data/site'
import Reveal from '../components/Reveal'

export default function Study() {
  return (
    <section id="education" className="editorial-section border-t border-[#0D0F0D]/10 dark:border-white/10">
      <div className="editorial-wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16">
          <Reveal>
            <div className="editorial-eyebrow">06 / Background</div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0D0F0D] dark:text-[#FAF8F3] max-w-xl">
              Education &amp; Credentials
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-sm sm:text-base text-[#66706B] dark:text-[#84968C] max-w-sm">
              Academic foundations in computer systems, verified competencies, and specialized certifications.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Split: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Education Column (Span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal>
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#0D0F0D]/10 dark:border-white/10">
                <GraduationCap className="w-5 h-5 text-[#0B3D2E] dark:text-[#10B981]" />
                <h3 className="font-serif-display text-2xl font-bold text-[#0D0F0D] dark:text-[#FAF8F3]">
                  Academic Journey
                </h3>
              </div>
            </Reveal>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="glass-panel p-6 rounded-2xl space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <span className="font-mono text-xs text-[#0B3D2E] dark:text-[#10B981] font-semibold">
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-[#66706B] dark:text-[#84968C]">
                        {item.location}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#0D0F0D] dark:text-[#FAF8F3]">
                      {item.institution}
                    </h4>

                    <p className="text-sm font-medium text-[#2D332F] dark:text-[#C8D4CD]">
                      {item.degree}
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0B3D2E]/10 dark:bg-[#10B981]/15 text-[#0B3D2E] dark:text-[#10B981] text-xs font-mono font-semibold">
                        {item.score}
                      </span>
                      <span className="text-xs font-mono text-[#66706B] dark:text-[#84968C]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications Column (Span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delay={0.15}>
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#0D0F0D]/10 dark:border-white/10">
                <Award className="w-5 h-5 text-[#0B3D2E] dark:text-[#10B981]" />
                <h3 className="font-serif-display text-2xl font-bold text-[#0D0F0D] dark:text-[#FAF8F3]">
                  Verified Certifications
                </h3>
              </div>
            </Reveal>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <Reveal key={idx} delay={0.2 + idx * 0.1}>
                  <div className="glass-panel p-6 rounded-2xl space-y-3 group hover:border-[#0B3D2E]/30 dark:hover:border-[#10B981]/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#0B3D2E] dark:text-[#10B981] uppercase tracking-wider font-semibold">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-xs text-[#66706B] dark:text-[#84968C]">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#0D0F0D] dark:text-[#FAF8F3]">
                      {cert.title}
                    </h4>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-[#F3EFE6] dark:bg-[#17201C] text-[11px] font-mono text-[#2D332F] dark:text-[#C8D4CD]"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
