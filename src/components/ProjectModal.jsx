import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white text-[#111111] shadow-2xl border border-[#111111]/8 overflow-y-auto my-auto z-10 p-6 sm:p-8 md:p-12"
          >
            {/* Close */}
            <div className="sticky top-0 z-20 flex justify-end pb-4 -mr-2">
              <button
                onClick={onClose}
                className="p-2 bg-[#F8F8F8] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header */}
            <div className="space-y-4 border-b border-[#111111]/8 pb-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C9971A] bg-[#C9971A]/8 px-3 py-1">
                  {project.kicker}
                </span>
                <span className="text-[11px] font-medium text-[#AAAAAA]">
                  {project.number}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#111111]">
                {project.name}
              </h2>

              <p className="font-display-italic text-lg sm:text-xl text-[#666666] max-w-3xl leading-relaxed">
                {project.oneLiner}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
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

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-b border-[#111111]/8">
              <div className="space-y-3 bg-[#F8F8F8] p-6 border border-[#111111]/4">
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#888888]">
                  01 — THE PROBLEM
                </div>
                <p className="text-sm leading-[1.8] text-[#333333]">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-3 bg-[#C9971A]/4 p-6 border border-[#C9971A]/15">
                <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C9971A]">
                  02 — THE SOLUTION
                </div>
                <p className="text-sm leading-[1.8] text-[#333333]">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="py-10 border-b border-[#111111]/8 space-y-6">
                <h3 className="font-display text-xl font-medium text-[#111111]">
                  Core Highlights
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#F8F8F8] border border-[#111111]/4 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C9971A] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#333333]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech + Close */}
            <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-medium tracking-[0.15em] text-[#AAAAAA] mr-1">
                  STACK:
                </span>
                {project.stack?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-3 py-1 bg-[#F8F8F8] text-[#333333] border border-[#111111]/4"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={onClose}
                className="text-[11px] font-medium text-[#C9971A] hover:underline cursor-pointer"
              >
                ← Back to Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
