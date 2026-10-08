import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Featured from './sections/Featured'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

export default function App() {
  const glowRef = useRef(null)

  /* Scroll-linked atmosphere: drives CSS custom properties so
     the glow layer, header, and headline rim-light all respond
     bidirectionally and continuously to scroll position.
     At scrollY = 0 → full strength. By ~1× viewport → fully receded. */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight
      // Fade from full at 0 to zero by ~0.9× viewport height
      const fadeEnd = vh * 0.9
      const opacity = Math.max(0, Math.min(1, 1 - scrollY / fadeEnd))
      const scale = Math.max(0.85, 1 - scrollY * 0.00015)

      // Set CSS custom properties on :root for all consumers
      document.documentElement.style.setProperty('--glow-opacity', opacity.toFixed(3))
      document.documentElement.style.setProperty('--glow-scale', scale.toFixed(4))

      if (glowRef.current) {
        // Apply opacity and parallax transform directly for smooth perf
        glowRef.current.style.opacity = opacity
        const translateY = scrollY * -0.25
        glowRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`
      }
    }

    // Set initial values
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Clean up any lingering hash from URL on initial load
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [])

  return (
    <div className="min-h-screen text-[#121212]" style={{ backgroundColor: '#F5F1E6' }}>
      {/* Skip link */}
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[99999] px-4 py-2 bg-[#121212] text-white text-xs cursor-pointer"
      >
        Skip to main content
      </a>

      {/* Arc Gradient Glow Layer — scroll-linked via CSS custom props */}
      <div
        ref={glowRef}
        className="arc-glow-layer"
      />

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <Featured />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

