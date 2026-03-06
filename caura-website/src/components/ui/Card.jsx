import { motion } from 'framer-motion'

/* Shared animation variant used by staggered card lists */
export const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/**
 * Generic animated card wrapper.
 * Use cardVariant on the parent container with staggerChildren.
 */
export default function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      variants={cardVariant}
      className={`card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
