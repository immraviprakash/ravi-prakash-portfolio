import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/site'
import Reveal from '../components/Reveal'
import { GithubIcon } from '../components/Icons'
import zixovibesLogo from '../assets/zixovibes-logo.png'
import raktaSevaLogo from '../assets/rakta-seva-logo.png'
import tradeZLogo from '../assets/trade-z-logo.png'

const projectLogos = {
  zixovibes: {
    src: zixovibesLogo,
    sizeClass: 'w-[64%] sm:w-[66%] max-h-[52%]',
  },
  'rakta-seva': {
    src: raktaSevaLogo,
    sizeClass: 'w-[68%] sm:w-[70%] max-h-[58%]',
  },
  'trade-z': {
    src: tradeZLogo,
    sizeClass: 'w-[57%] sm:w-[59%] max-h-[46%]',
  },
}

export default function Featured() {
  /* Home page shows only the first 3 featured projects */
  const featuredProjects = projects.slice(0, 3)

  const renderProjectCard = (project) => {
    const logoConfig = projectLogos[project.id]

    return (
      <div className="w-full aspect-[4/3] bg-[#F8F8F8] p-8 flex flex-col justify-between relative overflow-hidden border border-[#111111]/6 group-hover:border-[#C9971A]/40 transition-colors duration-300">

        {/* Top label */}
        <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.18em] uppercase text-[#AAAAAA]">
          <span>SELECTED WORK</span>
          <span className="text-[#C9971A]">{project.number}</span>
        </div>

        {/* Center — minimal gold geometric accent / centerpiece logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 sm:p-8">
          {logoConfig ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Large, soft ambient gold glow — heavily feathered with zero hard boundary */}
              <div
                className="absolute w-[80%] h-[75%] max-w-[380px] max-h-[260px] rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(201, 151, 46, 0.18) 0%, rgba(217, 164, 65, 0.07) 38%, rgba(201, 151, 46, 0.015) 60%, transparent 75%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Centerpiece brand logo */}
              <img
                src={logoConfig.src}
                alt={`${project.name} logo`}
                className={`${logoConfig.sizeClass} object-contain relative z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-[1.035]`}
                style={{
                  filter: 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.07))',
                }}
              />
            </div>
          ) : (
            <div className="w-32 h-32 sm:w-40 sm:h-40 border border-[#C9971A]/12 rounded-full" />
          )}
        </div>

        {/* Bottom */}
        <div className="space-y-1 relative z-10">
          <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#AAAAAA] block">
            {project.kicker}
          </span>
          <h4 className="font-display text-2xl sm:text-3xl font-medium text-[#111111] leading-tight">
            {project.name}
          </h4>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="editorial-section border-t border-[#111111]/6">
      <div className="editorial-container">

        {/* Header */}
        <div className="max-w-2xl space-y-5 pb-24">
          <Reveal>
            <span className="eyebrow eyebrow-gold">PROJECTS — SELECTED WORK</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#111111] leading-[1.1]">
              A few things I've made with care.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base text-[#666666] leading-[1.75]">
              Different domains, same instinct: remove friction, make the important thing obvious, and leave enough room for people to make it theirs.
            </p>
          </Reveal>
        </div>

        {/* Projects — spacious alternating layout */}
        <div className="space-y-32">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0

            return (
              <Reveal key={project.id} delay={0.12}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                  {/* Card */}
                  <div
                    className={`lg:col-span-6 group ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {renderProjectCard(project)}
                  </div>

                  {/* Details */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <span className="text-[11px] font-medium text-[#AAAAAA] tracking-[0.15em] uppercase block">
                      {project.number} — {project.kicker}
                    </span>

                    <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-[-0.01em] text-[#111111] leading-tight">
                      {project.name}
                    </h3>

                    <p className="text-sm text-[#666666] leading-[1.8]">
                      {project.oneLiner}
                    </p>

                    <div className="text-[11px] font-medium text-[#AAAAAA] tracking-wider flex flex-wrap gap-x-3 gap-y-1">
                      {project.stack.map((tech, tIdx) => (
                        <span key={tIdx}>{tech}</span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111111] text-[#C9971A] text-[11px] font-medium tracking-[0.14em] uppercase hover:bg-[#1A1A1A] transition-colors cursor-pointer select-none"
                        >
                          <span>Launch Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#111111]/15 text-[#111111] text-[11px] font-medium tracking-[0.14em] uppercase hover:border-[#C9971A] transition-colors cursor-pointer select-none"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </Reveal>
            )
          })}
        </div>

        {/* View More Projects → button */}
        {projects.length > 3 && (
          <Reveal delay={0.15}>
            <div className="flex justify-center pt-28">
              <a
                href="/projects"
                className="inline-flex items-center gap-3 transition-colors hover:bg-[#222]"
                style={{
                  padding: '14px 28px',
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <span>VIEW MORE PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  )
}
