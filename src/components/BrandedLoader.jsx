import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BrandedLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Quick, smooth counting animation (around 1.4 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsDone(true)
            if (onComplete) onComplete()
          }, 350)
          return 100
        }
        const diff = Math.floor(Math.random() * 15) + 8
        return Math.min(prev + diff, 100)
      })
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader-curtain"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between bg-[#0B3D2E] text-[#FAF8F3] p-8 md:p-14 select-none overflow-hidden"
        >
          {/* Top header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#FAF8F3]/70">
                Bangalore, IN · Portfolio 2026
              </span>
            </div>
            <span className="font-mono text-xs tracking-widest text-[#FAF8F3]/50">
              [ EDITION 01 ]
            </span>
          </div>

          {/* Central Monogram & Title */}
          <div className="max-w-3xl my-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="inline-block px-3 py-1 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-xs font-mono text-[#10B981]">
                Full-Stack · Interactive Systems · AI
              </div>
              <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF8F3] leading-[1.05]">
                Ravi Prakash K
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#FAF8F3]/70 max-w-md">
                Editorial minimalism crafted with intentional motion & full-stack rigor.
              </p>
            </motion.div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="space-y-4">
            <div className="flex items-end justify-between font-mono">
              <span className="text-xs text-[#FAF8F3]/60 tracking-wider">INITIALIZING INTERFACE</span>
              <span className="text-3xl sm:text-4xl font-bold text-[#10B981] tracking-tighter">
                {String(progress).padStart(2, '0')}%
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full h-[2px] bg-[#FAF8F3]/15 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#10B981] to-[#34D399]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
