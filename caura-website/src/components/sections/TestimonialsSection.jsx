import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiDoubleQuotesL, RiStarFill, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/content'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  return (
    <section
      className="section-padding bg-primary overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative SVG arc */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage/5" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/3" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="Voices of Our Community"
          title="Hear it from the people we serve"
          description="Real stories from real Australians whose lives have been touched by the Caura team."
          align="center"
          theme="dark"
          className="mb-14"
        />

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-3xl p-8 sm:p-12 text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Quote icon */}
              <RiDoubleQuotesL
                className="text-sage text-5xl mx-auto mb-6 opacity-80"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6" aria-label="5 star rating">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <RiStarFill key={i} className="text-yellow-400 text-lg" aria-hidden="true" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-white/85 font-body text-base sm:text-lg leading-relaxed mb-8 italic">
                "{testimonials[active].quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[active].avatar}
                  alt={`Photo of ${testimonials[active].name}`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sage/40"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-heading font-semibold text-white text-sm">
                    {testimonials[active].name}
                  </div>
                  <div className="text-white/45 text-xs font-body">
                    {testimonials[active].location} · {testimonials[active].service}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/25 text-white/70 hover:border-sage hover:text-sage flex items-center justify-center transition-all duration-200"
            >
              <RiArrowLeftLine />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`View testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'bg-sage w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/25 text-white/70 hover:border-sage hover:text-sage flex items-center justify-center transition-all duration-200"
            >
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
