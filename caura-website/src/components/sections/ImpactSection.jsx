import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowRightLine } from 'react-icons/ri'
import SectionHeader from '../ui/SectionHeader'

/* ─── Animated counter that starts when scrolled into view ─── */
function CountUp({ target, duration = 2200 }) {
  const [display, setDisplay] = useState('0')
  const [started,  setStarted]  = useState(false)
  const ref = useRef(null)

  // Parse raw value e.g. "50,000+" → numeric 50000, prefix '', suffix '+'
  const raw     = String(target).replace(/,/g, '')
  const numeric = parseFloat(raw.replace(/[^0-9.]/g, ''))
  const suffix  = raw.match(/[+%k]$/i)?.[0] ?? ''
  const useFloat = String(numeric).includes('.')

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start   = 0
    const steps = Math.ceil(duration / 16)
    const inc   = numeric / steps
    const timer = setInterval(() => {
      start += inc
      if (start >= numeric) {
        setDisplay(
          (useFloat ? numeric.toFixed(1) : Math.round(numeric).toLocaleString()) + suffix
        )
        clearInterval(timer)
      } else {
        setDisplay(
          (useFloat ? start.toFixed(1) : Math.round(start).toLocaleString()) + suffix
        )
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, numeric, suffix, duration, useFloat])

  return <span ref={ref}>{started ? display : '0'}</span>
}

const IMPACT_STATS = [
  {
    value: '50,000+',
    label: 'Lives Supported',
    sub:   'Since 2011',
    color: 'text-sage',
  },
  {
    value: '1,200+',
    label: 'Families Assisted',
    sub:   'Ongoing nationally',
    color: 'text-sage',
  },
  {
    value: '250+',
    label: 'Community Partners',
    sub:   'Across Australia',
    color: 'text-sage',
  },
  {
    value: '15+',
    label: 'Programs Running',
    sub:   'NDIS & non-NDIS',
    color: 'text-sage',
  },
]

export default function ImpactSection() {
  return (
    <>
      {/* ── Main stats ── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #1B4332 100%)' }}
        aria-labelledby="impact-heading"
      >
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sage/6 pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/3 pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Our Impact"
            title="The difference we make, measured in lives"
            description="Each number reflects a real person whose journey Caura has been privileged to support. This is what 14 years of dedicated service looks like."
            align="center"
            theme="dark"
            className="mb-14"
          />

          {/* Stats grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
          >
            {IMPACT_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden:  { opacity: 0, y: 28, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
                }}
                className="group bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 text-center hover:bg-white/14 transition-colors duration-300 cursor-default"
              >
                <div className={`font-heading font-extrabold text-4xl sm:text-5xl leading-none mb-3 ${stat.color}`}>
                  <CountUp target={stat.value} />
                </div>
                <div className="text-white font-heading font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs font-body">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Supporting blurb & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-white/65 font-body text-base leading-relaxed mb-7">
              We measure success not in outputs, but in lives changed, relationships
              formed, and communities genuinely strengthened.
            </p>
            <Link to="/stories" className="btn-white">
              Read Our Impact Stories <RiArrowRightLine />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Donate CTA band ── */}
      <section
        className="bg-sage py-12"
        aria-label="Donate to Caura Foundation"
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl mb-1">
                Together We Can Build Stronger Communities
              </h2>
              <p className="text-primary/65 font-body text-sm sm:text-base">
                Every dollar donated to the Caura Foundation reaches those who need it most.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link to="/contact#donate" className="btn-primary">
                Donate <RiArrowRightLine />
              </Link>
              <Link to="/contact#volunteer" className="btn-secondary bg-transparent border-primary/40">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
