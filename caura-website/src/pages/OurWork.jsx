import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiArrowRightLine, RiCheckboxCircleFill,
  RiUserHeartLine, RiHomeHeartLine, RiSeedlingLine, RiCommunityLine,
} from 'react-icons/ri'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection    from '../components/sections/CTASection'

/* ─── Service data ───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id:       'disability',
    icon:     RiUserHeartLine,
    eyebrow:  'Disability Support',
    title:    'NDIS Aligned Disability Support',
    desc:     `We provide comprehensive, NDIS-registered care designed around each participant's unique goals. Our support workers are trained specialists who understand the full breadth of the disability experience.`,
    points: [
      'NDIS aligned care planning and coordination',
      'Daily living assistance and personal care',
      'Independent living support (SIL & STA)',
      'Support coordination and plan management',
      'Community access and social participation',
    ],
    image:    'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    imageAlt: 'Disability support worker with participant',
    reverse:  false,
    accent:   'bg-sage/10 border-sage/20',
  },
  {
    id:       'aged-care',
    icon:     RiHomeHeartLine,
    eyebrow:  'Aged Care',
    title:    'In-Home Aged Care Support',
    desc:     'We help older Australians live with dignity, independence, and genuine connection in the comfort of their own homes. Our aged care specialists deliver compassionate, culturally sensitive support every day.',
    points: [
      'In-home care and domestic assistance',
      'Mobility support and falls prevention',
      'Wellbeing monitoring and health coordination',
      'Meal preparation and nutrition support',
      'Companionship and social activities',
    ],
    image:    'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    imageAlt: 'Caura worker providing aged care support at home',
    reverse:  true,
    accent:   'bg-accent/8 border-accent/15',
  },
  {
    id:       'youth',
    icon:     RiSeedlingLine,
    eyebrow:  'Youth Transition',
    title:    'Youth Transition Programs',
    desc:     'Our youth programs support young Australians aged 15–24 through pivotal life transitions — from school to work, from dependence to independence — combining practical skills with personal mentorship.',
    points: [
      'One-on-one and group mentoring sessions',
      'Education pathways and school completion support',
      'Employment preparation and job readiness',
      'Life skills coaching and financial literacy',
      'NDIS school leaver employment supports (SLES)',
    ],
    image:    'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    imageAlt: 'Young person in youth mentorship program',
    reverse:  false,
    accent:   'bg-amber-50 border-amber-100',
  },
  {
    id:       'community',
    icon:     RiCommunityLine,
    eyebrow:  'Community Programs',
    title:    'Community Development Programs',
    desc:     'We invest in the fabric of communities — building social connections, practical skills, and local resilience through grassroots programs co-designed with the people they serve.',
    points: [
      'Skills workshops and vocational training',
      'Volunteer recruitment and coordination initiatives',
      'Community events and social inclusion activities',
      'Food security and crisis support programs',
      'Peer support networks and mental wellness groups',
    ],
    image:    'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    imageAlt: 'Community volunteers working together',
    reverse:  true,
    accent:   'bg-rose-50 border-rose-100',
  },
]

/* ── Shared animation variants ─────────────────────────────────────────────── */
const fadeLeft  = { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x:  32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
const fadeUp    = { hidden: { opacity: 0, y:  24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

/* ── Service Section component ──────────────────────────────────────────────── */
function ServiceSection({ service, index }) {
  const isReverse = service.reverse
  const Icon = service.icon
  const textAnim  = isReverse ? fadeRight : fadeLeft
  const imageAnim = isReverse ? fadeLeft  : fadeRight
  const bg = index % 2 === 0 ? 'bg-white' : 'bg-offwhite'

  return (
    <section id={service.id} className={`section-padding ${bg}`} aria-labelledby={`${service.id}-heading`}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReverse ? 'lg:flex lg:flex-row-reverse' : ''}`}>

          {/* Text column */}
          <motion.div
            variants={textAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary text-lg" aria-hidden="true" />
              </div>
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                {service.eyebrow}
              </span>
            </div>

            <h2
              id={`${service.id}-heading`}
              className="font-heading font-bold text-charcoal text-3xl sm:text-4xl leading-tight mb-5"
            >
              {service.title}
            </h2>

            <p className="text-muted font-body text-base leading-relaxed mb-7">
              {service.desc}
            </p>

            <ul className="space-y-3 mb-8">
              {service.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <RiCheckboxCircleFill className="text-sage text-lg mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-charcoal font-body text-base">{pt}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary">
              Enquire About This Service <RiArrowRightLine />
            </Link>
          </motion.div>

          {/* Image column */}
          <motion.div
            variants={imageAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-80 sm:h-96 lg:h-[480px] object-cover rounded-3xl shadow-xl"
              loading="lazy"
            />
            {/* Decorative accent dot */}
            <span
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 -z-10"
              style={{ background: '#1B4332' }}
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────────── */
export default function OurWork() {
  return (
    <div id="main-content">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        aria-label="Our Services hero"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Caura Services team supporting the community"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.65) 60%, rgba(69,123,157,0.45) 100%)' }} />
        </div>

        <div className="relative z-10 container-custom text-center py-24 sm:py-32">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-white/60 text-sm font-body">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="select-none">/</li>
                <li className="text-white font-semibold">Our Services</li>
              </ol>
            </nav>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-white/80 font-body text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Compassionate, NDIS-aligned care and community programs designed to support
              Australians at every stage of life.
            </p>
            {/* Quick anchor nav */}
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-heading font-medium transition-colors duration-200 backdrop-blur-sm border border-white/20"
                >
                  {s.eyebrow}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Service sections ───────────────────────────────────────────────────── */}
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <CTASection />
    </div>
  )
}
