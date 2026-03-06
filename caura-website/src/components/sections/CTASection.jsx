import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiHeartFill, RiGroupLine } from 'react-icons/ri'

export default function CTASection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 55%, #1B4332 100%)' }}
      aria-label="Together We Can Build Stronger Communities"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-white/4 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-sage/8 pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Eyebrow */}
          <span className="inline-block text-sage font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-5">
            Get Involved
          </span>

          {/* Headline */}
          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            Together We Can Build{' '}
            <span className="text-sage">Stronger Communities</span>
          </h2>

          {/* Sub-copy */}
          <p className="text-white/65 font-body text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you donate or give your time, every action creates real and lasting
            change in the lives of Australians who need it most.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact#donate" className="btn-white">
              <RiHeartFill className="text-primary" aria-hidden="true" />
              Donate
              <RiArrowRightLine aria-hidden="true" />
            </Link>
            <Link
              to="/contact#volunteer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-heading font-semibold text-sm hover:border-sage hover:text-sage transition-all duration-200"
            >
              <RiGroupLine aria-hidden="true" />
              Volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
