import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/site'
import Reveal from '../components/Reveal'

export default function Experience() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="editorial-section border-t border-[#111111]/10 bg-white">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16">
          <Reveal>
            <div className="eyebrow eyebrow-gold">WORK EXPERIENCE</div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111] max-w-xl">
              Professional Experience
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-sm sm:text-base text-[#666666] max-w-sm font-light">
              Shipping production-grade code, collaborating in cross-functional sprints, and deploying intelligent features.
            </p>
          </Reveal>
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="relative pl-6 sm:pl-10 space-y-12">
          {/* Background Timeline Static Line */}
          <div className="absolute left-2.5 sm:left-3.5 top-2 bottom-4 w-[1.5px] bg-[#111111]/10" />

          {/* Scroll-animated Drawing Line in Gold */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2.5 sm:left-3.5 top-2 w-[1.5px] bg-[#C9971A] origin-top"
          />

          {experience.map((item, idx) => {
            const hasBody = Boolean(
              item.summary ||
              (item.bullets && item.bullets.length > 0) ||
              (item.tags && item.tags.length > 0)
            )

            return (
              <Reveal key={idx} delay={0.15}>
                <div className="relative group">
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 h-6 w-6 rounded-full bg-white border-2 border-[#C9971A] flex items-center justify-center transition-transform group-hover:scale-125">
                    <div className="h-2 w-2 rounded-full bg-[#C9971A]" />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-[#FAF8F5] border border-[#111111]/10 p-6 sm:p-10 rounded-sm space-y-6">
                    {/* Header Row */}
                    <div
                      className={`flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                        hasBody ? 'border-b border-[#111111]/10 pb-6' : ''
                      }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <span className="font-serif-display text-2xl sm:text-3xl font-medium text-[#111111]">
                            {item.company}
                          </span>
                          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#C9971A]/10 text-[#C9971A] font-semibold">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-serif-italic text-lg sm:text-xl text-[#C9971A]">
                          {item.role}
                        </h3>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-[#777777] space-y-1">
                        <span className="flex items-center gap-1.5 font-medium text-[#111111]">
                          <Calendar className="w-3.5 h-3.5 text-[#C9971A]" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#C9971A]" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    {item.summary && (
                      <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-light">
                        {item.summary}
                      </p>
                    )}

                    {/* Bullet Highlights */}
                    {item.bullets && item.bullets.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <span className="font-mono text-xs text-[#111111] font-semibold uppercase tracking-wider block">
                          Core Contributions &amp; Deliverables
                        </span>
                        <ul className="space-y-2.5">
                          {item.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-sm text-[#555555] font-light leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#C9971A] mt-0.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags / Tech Stack */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="pt-3 border-t border-[#111111]/5 flex flex-wrap items-center gap-2">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] sm:text-[11px] tracking-[0.08em] px-2.5 py-1 rounded bg-[#111111]/[0.04] border border-[#111111]/10 text-[#444444] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
