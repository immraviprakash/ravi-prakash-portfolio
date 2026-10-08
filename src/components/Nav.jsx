import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navItems, site } from '../data/site'

export default function Nav() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  /* true = dark background (top of page), false = light background (scrolled past hero) */
  const [isOverDark, setIsOverDark] = useState(true)
  const [isScrolledNav, setIsScrolledNav] = useState(false)
  const navRef = useRef(null)

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      if (id === 'about') {
        window.dispatchEvent(new CustomEvent('about-nav-triggered'))
      }
      const targetTop = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }
  }

  // IntersectionObserver to turn frosted glass ON only when hero's bottom edge scrolls past nav's bottom edge
  useEffect(() => {
    const heroEl = document.getElementById('top')
    if (!heroEl) return

    let observer = null

    const setupObserver = () => {
      if (observer) observer.disconnect()

      const navHeight = navRef.current ? navRef.current.offsetHeight : 64

      observer = new IntersectionObserver(
        ([entry]) => {
          // Glass turns on once the hero's bottom edge has scrolled up past nav's bottom edge
          setIsScrolledNav(!entry.isIntersecting)
        },
        {
          root: null,
          rootMargin: `-${navHeight}px 0px 0px 0px`,
          threshold: 0,
        }
      )

      observer.observe(heroEl)
    }

    setupObserver()
    window.addEventListener('resize', setupObserver)

    return () => {
      if (observer) observer.disconnect()
      window.removeEventListener('resize', setupObserver)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250

      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (top <= scrollPos) {
            setActiveSection(navItems[i].id)
            break
          }
        }
      }

      /* Scroll-reactive header color:
         While scrollY is within the hero (top of page → bottom of hero section),
         keep text light. Once past, switch to dark ink. */
      const heroEl = document.getElementById('top')
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight
        setIsOverDark(window.scrollY < heroBottom - 120)
      }
    }

    handleScroll() // initial
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Derived colors — gold elements never change */
  const textColor = isOverDark ? '#FFFFFF' : '#121212'
  const textMuted = isOverDark ? 'rgba(255,255,255,0.7)' : 'rgba(18,18,18,0.55)'
  const textHover = isOverDark ? 'rgba(255,255,255,0.9)' : 'rgba(18,18,18,0.8)'

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 nav-header ${isScrolledNav ? 'nav-scrolled' : ''}`}
      >
        <div className="editorial-container flex items-center justify-between py-4">
          {/* Logo mark — serif, bold, period in gold */}
          <button
            type="button"
            onClick={() => scrollToSection('top')}
            className="font-serif text-2xl font-bold tracking-tight hover:opacity-80 transition-all duration-300 cursor-pointer bg-transparent border-0 p-0 text-left"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: textColor,
              transition: 'color 0.3s ease',
            }}
          >
            RK<span style={{ color: '#C9972E' }}>.</span>
          </button>

          {/* Center Navigation Links — Pure Smooth Scroll, No Hash in URL */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="relative cursor-pointer bg-transparent border-0 p-0 text-left"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isActive ? textColor : textMuted,
                    paddingBottom: '6px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = textHover
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = textMuted
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-0 right-0"
                      style={{ height: '2px', backgroundColor: '#C9972E' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right: START A PROJECT → button */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#C9972E]/10 cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: textColor,
                border: '1px solid #C9972E',
                padding: '8px 20px',
                background: 'transparent',
                transition: 'color 0.3s ease',
              }}
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 transition-colors duration-300 cursor-pointer bg-transparent border-0"
              style={{ color: textColor }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[57px] z-[999] p-8 flex flex-col justify-between md:hidden"
            style={{ backgroundColor: '#0C0C0C' }}
          >
            <div className="space-y-5 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    scrollToSection(item.id)
                  }}
                  className="block w-full text-left text-white text-2xl font-medium py-2 border-b border-white/10 bg-transparent border-t-0 border-x-0 cursor-pointer"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  scrollToSection('contact')
                }}
                className="w-full py-3.5 text-center flex items-center justify-center gap-2 text-white font-medium cursor-pointer bg-transparent"
                style={{
                  border: '1px solid #C9972E',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
