import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { site } from '../data/site'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative z-10 pt-16 pb-8"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Bottom closing gradient arc — wrapped around footer content */}
      <div className="arc-glow-bottom" />

      <div className="editorial-container relative z-10 flex items-center justify-between">
        {/* Left — name + location, matching header serif treatment over dark */}
        <div className="space-y-0.5">
          <button
            type="button"
            onClick={scrollToTop}
            className="font-serif text-base font-bold tracking-tight hover:opacity-80 transition-opacity cursor-pointer p-0 bg-transparent border-0 text-left"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#FFFFFF',
            }}
          >
            RK<span style={{ color: '#C9972E' }}>.</span>
          </button>
          <p
            className="text-[11px] tracking-wider"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
          >
            {site.location}
          </p>
        </div>

        {/* Right — social icons + back-to-top */}
        <div className="flex items-center gap-4">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 transition-colors duration-200"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9972E' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)' }}
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 transition-colors duration-200"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9972E' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)' }}
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 transition-colors duration-200 ml-2 cursor-pointer"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C9972E' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)' }}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
