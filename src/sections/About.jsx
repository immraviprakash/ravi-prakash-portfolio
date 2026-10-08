import { useState, useEffect, useRef, useCallback } from 'react'
import { aboutContent } from '../data/site'
import Reveal from '../components/Reveal'

export default function About() {
  const card = aboutContent.profileCard
  const skills = card?.skills || ['React', 'Node.js', 'Python', 'AI/GenAI', 'REST APIs', 'SQL']
  const exploringItems = Array.isArray(card?.exploring)
    ? card.exploring
    : typeof card?.exploring === 'string'
      ? card.exploring.split(' · ')
      : ['Agentic AI', 'Creative Web', 'Product Development']
  const languages = Array.isArray(card?.languages)
    ? card.languages
    : ['English', 'Kannada', 'Tamil', 'Telugu', 'Hindi']

  // Diagonal metallic light sweep ("mirror effect")
  const [isSweeping, setIsSweeping] = useState(false)
  const [sweepId, setSweepId] = useState(0)
  const cardRef = useRef(null)
  const hasTriggeredOnScroll = useRef(false)

  const triggerSweep = useCallback(() => {
    setSweepId((prev) => prev + 1)
    setIsSweeping(true)
  }, [])

  const handleMouseEnterCard = () => {
    triggerSweep()
  }

  // 1. Trigger once when visiting/scrolling into view (IntersectionObserver)
  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasTriggeredOnScroll.current) {
              hasTriggeredOnScroll.current = true
              setTimeout(() => {
                triggerSweep()
              }, 350)
            }
          } else {
            // Reset when leaving so subsequent visits trigger it again
            hasTriggeredOnScroll.current = false
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [triggerSweep])

  // 2. Trigger whenever clicking "ABOUT" in the navbar
  useEffect(() => {
    const handleAboutNav = () => {
      setTimeout(() => {
        triggerSweep()
      }, 400)
    }

    window.addEventListener('about-nav-triggered', handleAboutNav)
    return () => window.removeEventListener('about-nav-triggered', handleAboutNav)
  }, [triggerSweep])

  return (
    <section id="about" className="editorial-section border-t border-[#121212]/10 bg-[#F5F1E6]">
      <div className="editorial-container">
        
        {/* Top Header Grid: Left Profile Card, Right Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dark Matte Black Profile Card */}
          <div className="lg:col-span-5">
            <Reveal>
              <div
                ref={cardRef}
                onMouseEnter={handleMouseEnterCard}
                className="w-full aspect-[4/5] min-h-[500px] max-w-md mx-auto bg-[#111111] text-white rounded-2xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-black/20 group cursor-default"
              >
                
                {/* Background artistic overlay & gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1C1F1D] via-[#111111] to-[#0A0D0B] opacity-90" />
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#C9972E]/10 blur-3xl pointer-events-none" />
                
                {/* Click-triggered diagonal metallic light sweep overlay */}
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-20"
                  aria-hidden="true"
                  style={{ mixBlendMode: 'screen' }}
                >
                  {isSweeping && (
                    <div
                      key={sweepId}
                      className="card-light-sweep"
                      onAnimationEnd={() => setIsSweeping(false)}
                    />
                  )}
                </div>
                
                {/* Header branding: Solid gold RK. wordmark + gold underline + subtitle */}
                <div className="relative z-10 space-y-3">
                  <div className="font-serif-display text-5xl sm:text-6xl font-bold tracking-tight text-[#C9972E]">
                    RK.
                  </div>
                  <div className="w-10 h-[2px] bg-[#C9972E]" />
                  <div className="font-mono text-[11px] sm:text-xs tracking-[0.22em] text-[#AAAAAA] uppercase font-medium pt-1">
                    {card?.subtitle || 'FULL-STACK DEV · AI ENTHUSIAST'}
                  </div>
                </div>

                {/* Content sections: MY SKILLS (pills) -> [CURRENTLY EXPLORING | LANGUAGES KNOWN] */}
                <div className="relative z-10 space-y-6 sm:space-y-7 py-5">
                  {/* MY SKILLS — pills with clean solid gold color-swap on hover */}
                  <div className="space-y-2.5">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase font-medium">
                      {card?.skillsLabel || 'MY SKILLS'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 rounded-full border border-[#C9972E]/40 text-xs sm:text-[13px] text-white font-normal bg-transparent tracking-normal cursor-default select-none transition-all duration-300 hover:bg-[#C9972E] hover:border-[#C9972E] hover:text-[#0C0C0C] hover:font-medium hover:shadow-md hover:shadow-[#C9972E]/25"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Two columns side-by-side: CURRENTLY EXPLORING (stacked lines) & LANGUAGES KNOWN (static chips) */}
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-5 pt-1">
                    {/* Column 1: CURRENTLY EXPLORING — stacked items one below the other */}
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase font-medium">
                        {card?.exploringLabel || 'CURRENTLY EXPLORING'}
                      </div>
                      <div className="font-mono text-[11px] sm:text-xs tracking-[0.14em] text-[#AAAAAA] font-medium leading-relaxed space-y-1">
                        {exploringItems.map((item, idx) => (
                          <div key={idx} className="whitespace-nowrap">
                            · {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: LANGUAGES KNOWN — static chips with no hover effects */}
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase font-medium">
                        {card?.languagesLabel || 'LANGUAGES KNOWN'}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {languages.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-[11px] text-white/75 font-normal tracking-wide"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom anchored location and gold dot accent */}
                <div className="relative z-10 pt-4 flex items-end justify-between border-t border-white/5">
                  <div className="font-mono text-[10px] text-[#888888] tracking-widest uppercase">
                    {card?.location || 'BANGALORE · INDIA'}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#C9972E]" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow Label (Arrow button removed) */}
            <Reveal>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.22em] uppercase font-semibold text-[#C9971A]">
                  {aboutContent.eyebrow}
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.1}>
              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] leading-[1.15]">
                {aboutContent.headline}
              </h2>
            </Reveal>

            {/* Body */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
                {aboutContent.body}
              </p>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  )
}
