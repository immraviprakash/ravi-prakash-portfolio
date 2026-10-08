import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/site'

/* ━━━ Sticky-note back-face config ━━━
   Single config object for flippable notes (Developer & Artist). */
const NOTE_BACK_CONFIG = {
  developer: {
    label: 'View My Code',
    href: site.social.github,
    external: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  designer: {
    label: "Let's talk design",
    href: '#contact',
    external: false,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  artist: {
    label: 'See My Art',
    href: site.social.instagram || 'https://www.instagram.com/zixshades',
    external: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
}


/* ━━━ Custom Hand-drawn SVG Icons ━━━ */

function PaletteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
      {/* Palette body — loose hand-drawn shape */}
      <path
        d="M24 6c-10 0-17 7.5-17 17 0 8 5 13 10 13 2 0 3-1.5 3-3s-1-2.5-1-3.5c0-2 1.5-3 4-3 6 0 11-4 11-10C34 10 30 6 24 6z"
        stroke="#121212" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Paint dabs */}
      <circle cx="16" cy="18" r="2.2" stroke="#121212" strokeWidth="1.5" fill="none" />
      <circle cx="22" cy="13" r="2" stroke="#121212" strokeWidth="1.5" fill="none" />
      <circle cx="29" cy="15" r="1.8" stroke="#121212" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="25" r="1.6" stroke="#121212" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
      {/* Hand-drawn </> brackets */}
      <path d="M18 14l-9 10 9 10" stroke="#121212" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 14l9 10-9 10" stroke="#121212" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 11l-5 26" stroke="#121212" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
      {/* Fountain pen / brush — hand-drawn feel */}
      <path
        d="M12 36l22-22c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5L17.5 41.5 12 36z"
        stroke="#121212" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M32 16l-2-2" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 36l-3 6 6-3" stroke="#121212" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Ink drop */}
      <circle cx="10" cy="41" r="1.5" stroke="#121212" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

/* ━━━ Decorative Ink Squiggles ━━━ */
function SquiggleTopLeft() {
  return (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" style={{ position: 'absolute', top: -8, left: -12, opacity: 0.6 }}>
      <path d="M4 24c2-6 5-10 9-12s8-2 12 1" stroke="#121212" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M6 20l-2 2" stroke="#121212" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M8 18l1-3" stroke="#121212" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function SquiggleBottomRight() {
  return (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" style={{ position: 'absolute', bottom: -10, right: -8, opacity: 0.6 }}>
      <path d="M4 6c3 4 7 7 12 8s8 0 10-3" stroke="#121212" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 10l2 2" stroke="#121212" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/* ━━━ Hand-drawn gold underline SVG ━━━ */
function GoldUnderline({ width = 80, className = '' }) {
  return (
    <svg width={width} height="8" viewBox={`0 0 ${width} 8`} className={className} style={{ display: 'block', margin: '0 auto' }}>
      <path
        d={`M2 5 Q${width * 0.2} 2, ${width * 0.4} 4 T${width * 0.7} 3 T${width - 2} 5`}
        stroke="#C9972E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ━━━ "I AM A" heading underline — hand-drawn marker stroke ━━━ */
function MarkerStroke() {
  return (
    <svg
      width="180"
      height="12"
      viewBox="0 0 180 12"
      className="hero-marker-stroke"
      style={{ display: 'block', marginTop: '-4px', transform: 'rotate(-1deg)' }}
    >
      <path
        d="M4 8 Q30 3, 60 7 T120 5 T176 7"
        stroke="#C9972E"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  )
}

/* ━━━ Pushpin — gold/brass with radial highlight ━━━ */
function Pushpin() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" style={{ display: 'block', margin: '0 auto' }}>
      {/* Pin body */}
      <circle cx="10" cy="9" r="7" fill="#B8892A" />
      <circle cx="10" cy="9" r="5.5" fill="#D4A63A" />
      {/* Radial highlight */}
      <circle cx="8" cy="7" r="2.5" fill="#E8C65C" opacity="0.7" />
      {/* Pin needle */}
      <line x1="10" y1="16" x2="10" y2="23" stroke="#888" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/* ━━━ Black tape strip ━━━ */
function TapeStrip() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-6px',
        left: '50%',
        transform: 'translateX(-50%) rotate(-3deg)',
        width: '56px',
        height: '16px',
        backgroundColor: 'rgba(30, 30, 30, 0.82)',
        borderRadius: '1px',
        zIndex: 10,
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }}
    />
  )
}

/* ━━━ Paper clip ━━━ */
function PaperClip() {
  return (
    <svg
      width="22" height="40" viewBox="0 0 22 40"
      style={{ position: 'absolute', top: '-12px', right: '12px', zIndex: 10 }}
    >
      <path
        d="M7 38V8c0-3.3 2.7-6 6-6h0c3.3 0 6 2.7 6 6v24c0 2.2-1.8 4-4 4h0c-2.2 0-4-1.8-4-4V12"
        stroke="#999" strokeWidth="1.8" fill="none" strokeLinecap="round"
      />
    </svg>
  )
}

/* ━━━ Plain Static Sticky Note (Designer) ━━━
   Original static state: plain label, icon, underline, pushpin.
   No click interaction, no flip, no back face, fully static. */
function StaticStickyNote({
  bgColor,
  width,
  rotation,
  offset = { x: 0, y: 0 },
  shadow,
  zIndex,
  style: extraStyle = {},
  attachment,
  icon,
  label,
  underlineWidth,
  squiggle,
  dropDelay = 0.45,
  dropStiffness = 85,
  dropDamping = 12,
  dropMass = 1.05,
  dropWobble = -10,
}) {
  const transformStyle = (offset.x !== 0 || offset.y !== 0)
    ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
    : undefined

  return (
    <div
      className="hero-note-wrapper"
      style={{
        position: 'relative',
        transform: transformStyle,
        zIndex,
      }}
    >
      <motion.div
        initial={{ y: '-120vh', rotate: dropWobble, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          y: { type: 'spring', stiffness: dropStiffness, damping: dropDamping, mass: dropMass, delay: dropDelay },
          rotate: { type: 'spring', stiffness: dropStiffness * 0.9, damping: dropDamping, mass: dropMass, delay: dropDelay },
          opacity: { duration: 0.18, delay: dropDelay },
        }}
      >
        <div
          style={{
            width,
            ...extraStyle,
          }}
        >
          <div
            className="sticky-note"
            style={{
              backgroundColor: bgColor,
              transform: `rotate(${rotation}deg)`,
              boxShadow: shadow,
              cursor: 'default',
            }}
          >
            {attachment}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '8px' }}>
              {icon}
              <div
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: '20px',
                  color: '#121212',
                  marginTop: '8px',
                }}
              >
                {label}
              </div>
              <GoldUnderline width={underlineWidth} />
            </div>
            {squiggle}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ━━━ Flippable Sticky Note (Developer & Artist) ━━━
   Click front face to flip to back face.
   Auto-revert on hover-out: 2-second timer on mouseleave.
   Cancel revert on mouseenter before timer expires. */
function FlippableStickyNote({
  noteKey,
  bgColor,
  width,
  rotation,
  offset = { x: 0, y: 0 },
  shadow,
  zIndex,
  style: extraStyle = {},
  attachment,
  icon,
  label,
  underlineWidth,
  squiggle,
  dropDelay = 0.25,
  dropStiffness = 95,
  dropDamping = 11,
  dropMass = 1.15,
  dropWobble = 12,
}) {
  const config = NOTE_BACK_CONFIG[noteKey]
  const [flipped, setFlipped] = useState(false)
  const revertTimerRef = useRef(null)

  const cancelRevert = useCallback(() => {
    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current)
      revertTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    return () => cancelRevert()
  }, [cancelRevert])

  // Escape key closes flipped note
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        cancelRevert()
        setFlipped(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cancelRevert])

  // Cursor leaves note bounding box -> start 2-second timer if flipped
  const handleMouseLeave = () => {
    cancelRevert()
    if (flipped) {
      revertTimerRef.current = setTimeout(() => {
        setFlipped(false)
        revertTimerRef.current = null
      }, 2000)
    }
  }

  // Cursor re-enters note bounding box -> cancel pending revert
  const handleMouseEnter = () => {
    cancelRevert()
  }

  // Click on front face flips to back face; click on back face outside link flips back
  const handleCardClick = (e) => {
    if (e.target.closest('a')) return
    cancelRevert()
    setFlipped((prev) => !prev)
  }

  const transformStyle = (offset.x !== 0 || offset.y !== 0)
    ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
    : undefined

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hero-note-wrapper hero-note-${noteKey} ${flipped ? 'is-flipped' : ''}`}
      style={{
        position: 'relative',
        transform: transformStyle,
        zIndex: flipped ? 20 : zIndex,
      }}
    >
      <motion.div
        initial={{ y: '-120vh', rotate: dropWobble, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          y: { type: 'spring', stiffness: dropStiffness, damping: dropDamping, mass: dropMass, delay: dropDelay },
          rotate: { type: 'spring', stiffness: dropStiffness * 0.9, damping: dropDamping, mass: dropMass, delay: dropDelay },
          opacity: { duration: 0.18, delay: dropDelay },
        }}
      >
        <div
          className="flip-card"
          onClick={handleCardClick}
          style={{
            width,
            cursor: 'pointer',
            ...extraStyle,
          }}
        >
          <div
            className="flip-card-inner"
            style={{
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* ─── Front face ─── */}
            <div
              className="sticky-note flip-card-front"
              style={{
                backgroundColor: bgColor,
                transform: `rotate(${rotation}deg)`,
                boxShadow: shadow,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!flipped) {
                  e.currentTarget.style.transform = `rotate(${rotation}deg) translateY(-4px)`
                  e.currentTarget.style.boxShadow = shadow.replace(/0\.15\)|0\.22\)/, '0.28)')
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${rotation}deg)`
                e.currentTarget.style.boxShadow = shadow
              }}
            >
              {attachment}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '8px' }}>
                {icon}
                <div
                  style={{
                    fontFamily: "'Permanent Marker', cursive",
                    fontSize: '20px',
                    color: '#121212',
                    marginTop: '8px',
                  }}
                >
                  {label}
                </div>
                <GoldUnderline width={underlineWidth} />
              </div>
              {squiggle}
            </div>

            {/* ─── Back face ─── */}
            <div
              className="sticky-note flip-card-back"
              style={{
                backgroundColor: bgColor,
                transform: `rotateY(180deg) rotate(${rotation}deg)`,
                boxShadow: shadow,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {attachment}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '6px' }}>
                {config?.external ? (
                  <a
                    href={config?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      color: '#121212',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', transition: 'transform 0.2s ease' }} className="group-hover:scale-110">
                      {config?.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Permanent Marker', cursive",
                        fontSize: '16px',
                        color: '#121212',
                        display: 'inline-block',
                      }}
                    >
                      {config?.label}
                    </span>
                    <GoldUnderline width={underlineWidth ? Math.min(underlineWidth, 90) : 75} />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      const targetId = config?.href?.replace('#', '')
                      if (targetId) {
                        const el = document.getElementById(targetId)
                        if (el) {
                          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
                        }
                      }
                    }}
                    className="group"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                      color: '#121212',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'transparent',
                      padding: 0,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', transition: 'transform 0.2s ease' }} className="group-hover:scale-110">
                      {config?.icon}
                    </div>
                    <span
                      style={{
                        fontFamily: "'Permanent Marker', cursive",
                        fontSize: '16px',
                        color: '#121212',
                        display: 'inline-block',
                      }}
                    >
                      {config?.label}
                    </span>
                    <GoldUnderline width={underlineWidth ? Math.min(underlineWidth, 90) : 75} />
                  </button>
                )}
              </div>
              {squiggle}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}




export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-[92vh] pt-28 pb-20 flex flex-col justify-center relative hero-overflow-clip"
      style={{ background: 'transparent' }}
    >
      <div className="editorial-container relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ━━━ Left Column: Name + CTA Buttons (~55%) ━━━ */}
          <div className="lg:col-span-7 space-y-8">

            {/* Giant 2-Line Serif Display: Ravi / Prakash */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-headline-rimlight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 0.88,
                color: '#121212',
                userSelect: 'none',
              }}
            >
              {/* "Hey, I'm" — handwritten greeting above "Ravi" */}
              <div
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  fontWeight: 400,
                  color: '#363028',
                  lineHeight: 1,
                  marginBottom: '10px',
                  letterSpacing: '0.01em',
                }}
              >
                Hey, I'm
              </div>
              <div style={{ fontSize: 'clamp(3.4rem, 10vw, 8.8rem)' }}>Ravi</div>
              <div style={{ fontSize: 'clamp(3.4rem, 10vw, 8.8rem)' }}>Prakash</div>
            </motion.div>

            {/* Button row, ~32px below name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center"
              style={{ gap: '24px', paddingTop: '32px' }}
            >
              {/* VIEW MY WORK → — solid black fill */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) {
                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
                  }
                }}
                className="flex items-center gap-3 transition-colors hover:bg-[#222] cursor-pointer"
                style={{
                  padding: '14px 24px',
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: 'none',
                }}
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* DOWNLOAD RESUME — direct static file download */}
              <a
                href="/Ravi-Prakash-Resume.pdf"
                download="Ravi-Prakash-Resume.pdf"
                className="transition-colors hover:opacity-80"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#121212',
                  borderBottom: '2px solid #C9972E',
                  paddingBottom: '4px',
                  background: 'none',
                }}
              >
                DOWNLOAD RESUME
              </a>
            </motion.div>
          </div>

          {/* ━━━ Right Column: "I AM A" + Sticky Notes (~45%) ━━━ */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="w-full relative">

              {/* "I AM A" handwritten heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-center lg:text-left mb-6 relative"
                style={{ paddingLeft: '10px' }}
              >
                <div
                  style={{
                    fontFamily: "'Permanent Marker', cursive",
                    fontSize: 'clamp(36px, 5vw, 52px)',
                    color: '#121212',
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  I AM A
                </div>
                <MarkerStroke />
              </motion.div>

              {/* Three Sticky Notes — overlapping loose row.
                  Each note sits in its own flex slot (left / center / right).
                  The fall animation is VERTICAL-ONLY: each note drops straight
                  down from above its own column into its exact locked resting spot.
                  Zero lateral drift, zero recalculation of base coordinates. */}
              <div
                className="hero-notes-container relative flex items-end justify-center mt-6 lg:mt-0"
                style={{ minHeight: '250px', paddingTop: '20px' }}
              >

                {/* Designer — LEFT column, cream paper, pushpin (click-to-flip)
                    Falls 2nd, ~200ms after Developer */}
                <FlippableStickyNote
                  noteKey="designer"
                  bgColor="#EDE6D6"
                  width="160px"
                  rotation={-4}
                  offset={{ x: 275, y: 108 }}
                  shadow="0 8px 20px rgba(0,0,0,0.15)"
                  zIndex={1}
                  style={{ marginRight: '-20px', position: 'relative' }}
                  attachment={
                    <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                      <Pushpin />
                    </div>
                  }
                  icon={<PaletteIcon />}
                  label="DESIGNER"
                  underlineWidth={72}
                  dropDelay={0.45}
                  dropStiffness={85}
                  dropDamping={12}
                  dropMass={1.05}
                  dropWobble={-10}
                />

                {/* Developer — CENTER column, gold paper, tape strip (click-to-flip)
                    Falls 1st, spring-based bounce landing with moderate overshoot */}
                <FlippableStickyNote
                  noteKey="developer"
                  bgColor="#D9A441"
                  width="172px"
                  rotation={-5}
                  offset={{ x: 76, y: -191 }}
                  shadow="0 12px 28px rgba(0,0,0,0.22)"
                  zIndex={3}
                  style={{ position: 'relative', transform: 'scale(1.07)' }}
                  attachment={<TapeStrip />}
                  icon={<CodeIcon />}
                  label="DEVELOPER"
                  underlineWidth={82}
                  dropDelay={0.25}
                  dropStiffness={95}
                  dropDamping={11}
                  dropMass={1.15}
                  dropWobble={12}
                />

                {/* Artist — RIGHT column, grey-beige paper, paperclip (click-to-flip)
                    Falls 3rd, ~200ms after Designer */}
                <FlippableStickyNote
                  noteKey="artist"
                  bgColor="#D9D2C5"
                  width="160px"
                  rotation={7}
                  offset={{ x: -270, y: -10 }}
                  shadow="0 8px 20px rgba(0,0,0,0.15)"
                  zIndex={2}
                  style={{ marginLeft: '-20px', position: 'relative' }}
                  attachment={<PaperClip />}
                  icon={<PenIcon />}
                  label="ARTIST"
                  underlineWidth={56}
                  squiggle={<SquiggleBottomRight />}
                  dropDelay={0.65}
                  dropStiffness={85}
                  dropDamping={12}
                  dropMass={1.05}
                  dropWobble={14}
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
