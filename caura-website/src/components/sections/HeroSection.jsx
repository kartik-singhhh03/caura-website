import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiHeartLine, RiShieldCheckLine, RiGroupLine } from 'react-icons/ri'

/* High-quality Pexels/Unsplash NGO-tone images */
const HERO_BG =
  'https://images.pexels.com/photos/6995237/pexels-photo-6995237.jpeg?auto=compress&cs=tinysrgb&w=1920'

const heroStats = [
  { value: '50,000+', label: 'Lives Supported'      },
  { value: '1,200+',  label: 'Families Assisted'    },
  { value: '250+',    label: 'Community Partners'    },
  { value: '15+',     label: 'Programs Running'      },
]

export default function HeroSection() {
  const imgRef = useRef(null)

  /* Subtle parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(1.08) translateY(${window.scrollY * 0.18}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Hero — Empowering Independence Through Compassionate Care"
    >
      {/* ── Background image with zoom-in animation ── */}
      <motion.div
        ref={imgRef}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 7, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="img"
        aria-label="Support worker helping an elderly person at home"
      />

      {/* ── Layered gradient for depth and text legibility ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-1/3 right-8 w-80 h-80 rounded-full bg-sage/6 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* ── Hero content ── */}
      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* NDIS trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-heading font-semibold tracking-[0.16em] uppercase px-4 py-2 rounded-full mb-7"
          >
            <RiShieldCheckLine className="text-sage flex-shrink-0" />
            NDIS Registered · Australia&nbsp;Wide
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="font-heading font-black text-white leading-[1.07] tracking-tight mb-6
                       text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] xl:text-[4.8rem]"
          >
            Empowering
            <br />
            <span className="text-sage">Independence</span>
            <br />
            Through Compassionate Care
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/75 font-body text-[1.05rem] sm:text-lg leading-relaxed max-w-lg mb-10"
          >
            Caura Services supports people through life transitions —
            from disability support and aged care to youth empowerment
            and community development across every corner of Australia.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2.5 bg-sage text-primary font-heading font-bold
                         text-[13.5px] tracking-wide px-8 py-4 rounded-full shadow-lg
                         hover:bg-sage-medium hover:shadow-xl hover:-translate-y-0.5
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
              aria-label="Explore our support services"
            >
              Explore Our Services
              <RiArrowRightLine className="text-sm" />
            </Link>

            <Link
              to="/contact#donate"
              className="inline-flex items-center gap-2.5 bg-transparent text-white border-2 border-white/50
                         font-heading font-semibold text-[13.5px] tracking-wide px-8 py-[14px] rounded-full
                         hover:bg-white/10 hover:border-white hover:-translate-y-0.5
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Support our mission with a donation"
            >
              <RiHeartLine className="text-sage text-sm" />
              Support Our Mission
            </Link>
          </motion.div>

          {/* Trust signals row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-5 mt-10"
          >
            {[
              { icon: RiShieldCheckLine, text: 'NDIS Quality & Safeguards Registered' },
              { icon: RiGroupLine,       text: '1,200+ Dedicated Professionals' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/55 text-xs font-body">
                <Icon className="text-sage text-sm flex-shrink-0" aria-hidden="true" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="relative z-10 mt-auto"
      >
        <div className="bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-5 px-4 text-center ${i < heroStats.length - 1 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="font-heading font-extrabold text-white text-xl sm:text-2xl leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-[11px] font-body tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-offwhite to-transparent z-20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}
