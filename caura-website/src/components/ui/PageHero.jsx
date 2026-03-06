import { motion } from 'framer-motion'

/**
 * Reusable hero banner for inner pages (About, Our Work, Stories, Contact).
 */
export default function PageHero({ title, subtitle, image, breadcrumb }) {
  return (
    <section
      className="relative min-h-[380px] md:min-h-[440px] flex items-end overflow-hidden"
      aria-label={`${title} page hero`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/60 to-primary-dark/30" />

      {/* Content */}
      <div className="container-custom relative z-10 pb-14 pt-36">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-xs font-heading font-medium tracking-widest uppercase mb-4"
          >
            {breadcrumb}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/75 font-body text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
    </section>
  )
}
