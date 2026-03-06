import { motion } from 'framer-motion'

/**
 * Reusable section header with eyebrow label, headline, and optional description.
 * align: 'left' | 'center'
 * theme: 'light' | 'dark'
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-heading font-semibold tracking-[0.18em] uppercase mb-4 px-3 py-1 rounded-full ${
            isDark
              ? 'bg-white/10 text-sage'
              : 'bg-sage-light text-primary'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-heading font-bold leading-tight mb-4 ${
          isDark ? 'text-white' : 'text-charcoal'
        } text-3xl sm:text-4xl lg:text-[2.75rem]`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`font-body text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-white/70' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
