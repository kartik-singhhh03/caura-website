import { Link } from 'react-router-dom'
import {
  RiFacebookFill, RiInstagramLine, RiLinkedinFill,
  RiTwitterXFill, RiYoutubeFill,
  RiArrowRightLine, RiHeartFill, RiMapPinLine, RiPhoneLine, RiMailLine,
} from 'react-icons/ri'

const social = [
  { icon: RiFacebookFill,  href: '#facebook',  label: 'Facebook'  },
  { icon: RiInstagramLine, href: '#instagram', label: 'Instagram' },
  { icon: RiLinkedinFill,  href: '#linkedin',  label: 'LinkedIn'  },
  { icon: RiTwitterXFill,  href: '#twitter',   label: 'X / Twitter' },
  { icon: RiYoutubeFill,   href: '#youtube',   label: 'YouTube'  },
]

const PROGRAMS_LINKS = [
  { label: 'Youth Mentorship',        to: '/our-work#youth'      },
  { label: 'NDIS Disability Support', to: '/our-work#ndis'       },
  { label: 'Aged Care Assistance',    to: '/our-work#aged-care'  },
  { label: 'Community Outreach',      to: '/our-work#community'  },
  { label: 'Employment Pathways',     to: '/our-work#employment' },
]

const QUICK_LINKS = [
  { label: 'Home',      to: '/'                  },
  { label: 'About',     to: '/about'             },
  { label: 'Stories',   to: '/stories'           },
  { label: 'Contact',   to: '/contact'           },
  { label: 'Volunteer', to: '/contact#volunteer' },
  { label: 'Refer',     to: '/contact#refer'     },
]

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-5">
        {title}
      </h3>
      {children}
    </div>
  )
}

function FooterLinks({ links }) {
  return (
    <ul className="space-y-3">
      {links.map((l) => (
        <li key={l.label}>
          <Link
            to={l.to}
            className="text-white/55 hover:text-sage text-sm font-body transition-colors duration-200 flex items-center gap-1.5 group"
          >
            <RiArrowRightLine className="text-xs opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1 — About / Brand */}
          <div>
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/15 transition-colors">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path
                    d="M11 4.5C9.6 3.1 7.7 2.3 5.7 2.3 2.7 2.3 0.3 4.7 0.3 7.7c0 5.3 8 11.4 10.2 12.7.3.2.7.2 1 0C13.7 19.1 21.7 13 21.7 7.7c0-3-2.4-5.4-5.4-5.4-2 0-3.9.8-5.3 2.2z"
                    fill="#74C69D"
                  />
                </svg>
              </div>
              <div>
                <span className="block font-heading font-extrabold text-lg text-white leading-none tracking-tight">
                  CAURA
                </span>
                <span className="block font-heading font-light text-[10px] text-white/50 tracking-[0.2em] uppercase">
                  Services
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
              Empowering every Australian to live with dignity, purpose, and connection.
              NDIS Registered Provider serving communities since 2011.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-sage hover:text-primary flex items-center justify-center text-white/60 transition-all duration-200"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Programs */}
          <FooterColumn title="Programs">
            <FooterLinks links={PROGRAMS_LINKS} />
          </FooterColumn>

          {/* Col 3 — Quick Links */}
          <FooterColumn title="Quick Links">
            <FooterLinks links={QUICK_LINKS} />
          </FooterColumn>

          {/* Col 4 — Contact */}
          <FooterColumn title="Contact Us">
            <ul className="space-y-3.5 text-sm font-body">
              <li className="flex items-start gap-2.5 text-white/55">
                <RiMapPinLine className="text-sage mt-0.5 flex-shrink-0 text-base" aria-hidden="true" />
                <span>Level 12, 55 Collins Street,<br />Melbourne VIC 3000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <RiPhoneLine className="text-sage flex-shrink-0 text-base" aria-hidden="true" />
                <a href="tel:1800227872" className="text-white/55 hover:text-sage transition-colors">
                  1800 CAURA2 (1800 227 872)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <RiMailLine className="text-sage flex-shrink-0 text-base" aria-hidden="true" />
                <a href="mailto:info@caura.com.au" className="text-white/55 hover:text-sage transition-colors">
                  info@caura.com.au
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <RiMailLine className="text-sage flex-shrink-0 text-base" aria-hidden="true" />
                <a href="mailto:hello@cauraagedcare.com.au" className="text-white/55 hover:text-sage transition-colors">
                  hello@cauraagedcare.com.au
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>

        {/* Newsletter strip */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-heading font-semibold text-white text-base mb-1">
                Stay connected with Caura
              </h3>
              <p className="text-white/50 text-sm font-body">
                Impact updates, program news, and community stories — direct to your inbox.
              </p>
            </div>
            <form
              className="flex items-center gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com.au"
                required
                className="px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm font-body focus:outline-none focus:ring-2 focus:ring-sage/50 min-w-[220px]"
              />
              <button
                type="submit"
                className="btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Foundation badge */}
      <div className="bg-primary/80 border-t border-white/10 py-4">
        <div className="container-custom">
          <p className="text-white/50 text-xs font-body text-center">
            <span className="text-sage font-semibold">Caura Foundation</span> — Our charitable arm supporting under-resourced communities across Australia ·{' '}
            <Link to="/about#foundation" className="hover:text-sage underline underline-offset-2 transition-colors">
              Learn More
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary-dark/80 border-t border-white/8 py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs font-body text-center sm:text-left">
            © 2026 Caura Services. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs font-body">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((t) => (
              <Link
                key={t}
                to="/contact"
                className="text-white/35 hover:text-sage transition-colors"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
