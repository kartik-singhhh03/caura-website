import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine, RiArrowRightLine, RiHeartLine } from 'react-icons/ri'

const NAV_LINKS = [
  { label: 'Home',      to: '/'         },
  { label: 'About',     to: '/about'    },
  { label: 'Services',  to: '/our-work' },
  { label: 'Programs',  to: '/our-work#programs' },
  { label: 'Stories',   to: '/stories'  },
  { label: 'Contact',   to: '/contact'  },
]

function Logo({ scrolled }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-sage/50 rounded-lg p-1"
      aria-label="Caura Services — Home"
    >
      {/* Icon mark */}
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-white/15 backdrop-blur-sm border border-white/20'}`}>
        <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 4.5C9.6 3.1 7.7 2.3 5.7 2.3 2.7 2.3 0.3 4.7 0.3 7.7c0 5.3 8 11.4 10.2 12.7.3.2.7.2 1 0C13.7 19.1 21.7 13 21.7 7.7c0-3-2.4-5.4-5.4-5.4-2 0-3.9.8-5.3 2.2z" fill="#74C69D"/>
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-black text-[17px] tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
          Caura
        </span>
        <span className={`font-heading font-normal text-[9px] tracking-[0.25em] uppercase transition-colors duration-300 ${scrolled ? 'text-muted' : 'text-white/55'}`}>
          Services
        </span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  /* Prevent body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100/80'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-17 py-3.5"
          role="navigation"
          aria-label="Main navigation"
        >
          <Logo scrolled={scrolled} />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg font-heading font-medium text-[13.5px] tracking-wide
                     transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage/40
                     ${isActive
                       ? scrolled ? 'text-primary bg-sage-pale' : 'text-sage font-semibold'
                       : scrolled ? 'text-charcoal hover:text-primary hover:bg-sage-pale/70' : 'text-white/80 hover:text-white hover:bg-white/10'
                     }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Donate CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact#donate"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-semibold text-[13px] tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary-light shadow-sm hover:shadow-md hover:-translate-y-0.5'
                  : 'bg-sage text-primary hover:bg-sage-medium hover:shadow-lg hover:-translate-y-0.5'
              }`}
            >
              <RiHeartLine className="text-sm" />
              Donate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
              scrolled ? 'text-charcoal hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <RiCloseLine className="text-xl" /> : <RiMenuLine className="text-xl" />}
          </button>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              key="mob"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-5 space-y-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl font-heading font-medium text-sm transition-colors ${
                        isActive ? 'bg-sage-light text-primary font-semibold' : 'text-charcoal hover:bg-gray-50 hover:text-primary'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-3 pb-1">
                  <Link
                    to="/contact#donate"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white px-5 py-3 rounded-full font-heading font-semibold text-sm tracking-wide hover:bg-primary-light transition-colors"
                  >
                    <RiHeartLine />
                    Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
