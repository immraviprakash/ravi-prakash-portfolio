import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactContent } from '../data/site'
import Reveal from '../components/Reveal'

/* ━━━ Form Endpoint Configuration ━━━
   Web3Forms integration — access_key is a client-side public key. */
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'

const FORM_EXTRA_FIELDS = {
  access_key: '82eed542-fc95-445f-abad-10c75c633c2d',
  subject: 'New message from my portfolio',
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
      isValid = false
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)

    if (!validate()) {
      return
    }

    // Honeypot spam protection: if filled, silently succeed without making network request
    if (honeypot) {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          ...FORM_EXTRA_FIELDS,
        }),
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data && data.success !== false) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setErrors({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="editorial-section border-t border-[#111111]/6">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Headline + Contact info */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <div className="space-y-5">
                <span className="eyebrow eyebrow-gold">{contactContent.eyebrow}</span>

                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.02em] text-[#111111] leading-[1.08]">
                  Let's build{' '}
                  <span className="font-display-italic text-[#C9971A]">something.</span>
                </h2>

                <p className="text-base text-[#666666] leading-[1.75] max-w-md">
                  {contactContent.subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4 pt-2 text-sm text-[#333333]">
                <a
                  href={`mailto:${contactContent.email}`}
                  className="flex items-center gap-3 text-[#333333] group w-fit transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C9971A] flex-shrink-0" />
                  <span className="group-hover:underline group-hover:decoration-[#C9972E] group-hover:underline-offset-4 decoration-1">
                    {contactContent.email}
                  </span>
                </a>

                <a
                  href={`tel:${contactContent.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-[#333333] group w-fit transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C9971A] flex-shrink-0" />
                  <span className="group-hover:underline group-hover:decoration-[#C9972E] group-hover:underline-offset-4 decoration-1">
                    {contactContent.phone}
                  </span>
                </a>

                <div className="flex items-center gap-3 text-[#888888]">
                  <MapPin className="w-4 h-4 text-[#C9971A] flex-shrink-0" />
                  <span>{contactContent.location}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                {/* Hidden Honeypot Field */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="contact-hp">Don't fill this out if you're human</label>
                  <input
                    type="text"
                    id="contact-hp"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6B665C] block"
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })
                      if (errors.name) setErrors({ ...errors, name: '' })
                    }}
                    placeholder="How should I address you?"
                    className="w-full bg-transparent border-b border-[#111111]/12 pb-4 text-base text-[#111111] placeholder-[#7A746A] focus:outline-none focus:border-[#C9971A] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-[#B84A39] pt-0.5">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6B665C] block"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: '' })
                    }}
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-b border-[#111111]/12 pb-4 text-base text-[#111111] placeholder-[#7A746A] focus:outline-none focus:border-[#C9971A] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#B84A39] pt-0.5">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#6B665C] block"
                  >
                    A FEW WORDS
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: '' })
                    }}
                    placeholder="What are you thinking about building?"
                    className="w-full bg-transparent border-b border-[#111111]/12 pb-4 text-base text-[#111111] placeholder-[#7A746A] focus:outline-none focus:border-[#C9971A] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-[#B84A39] pt-0.5">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 space-y-3">
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-[#111111] text-[#C9971A] hover:bg-[#1A1A1A] text-[11px] font-medium tracking-[0.18em] uppercase flex items-center gap-2 cursor-pointer transition-colors disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'SENDING…' : 'SEND MESSAGE'}</span>
                      <span>↗</span>
                    </button>
                  </div>

                  {/* Reserved fixed-height area to prevent layout shift */}
                  <div className="min-h-[28px] flex items-center" aria-live="polite">
                    {status === 'success' && (
                      <p className="text-xs sm:text-sm text-[#C9971A] font-medium">
                        Thanks — your message is on its way. I'll reply soon.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="text-xs sm:text-sm text-[#444444]">
                        Something went wrong. You can email me directly at{' '}
                        <a
                          href="mailto:immraviprakash@gmail.com"
                          className="text-[#C9971A] underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity"
                        >
                          immraviprakash@gmail.com
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
