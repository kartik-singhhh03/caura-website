import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiArrowRightLine,
  RiUserHeartLine,
  RiHomeHeartLine,
  RiSeedlingLine,
  RiCommunityLine,
} from 'react-icons/ri'
import SectionHeader from '../ui/SectionHeader'

const PROGRAMS = [
  {
    id:    'youth',
    icon:  RiSeedlingLine,
    title: 'Youth Mentorship',
    desc:
      'Empowering young Australians aged 15–24 through structured mentoring, vocational guidance, and the confidence to build an independent future.',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag:   'Youth | 15–24 yrs',
    href:  '/our-work#youth',
  },
  {
    id:    'ndis',
    icon:  RiUserHeartLine,
    title: 'NDIS Disability Support',
    desc:
      'Registered NDIS provider offering personalised support coordination, daily living, SIL, STA, and capacity-building services across Australia.',
    image: 'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag:   'NDIS Registered',
    href:  '/our-work#ndis',
  },
  {
    id:    'aged-care',
    icon:  RiHomeHeartLine,
    title: 'Aged Care Assistance',
    desc:
      'Culturally sensitive in-home and community aged care that enables seniors to live with dignity, comfort, and meaningful social connection.',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag:   'Aged Care',
    href:  '/our-work#aged-care',
  },
  {
    id:    'community',
    icon:  RiCommunityLine,
    title: 'Community Outreach',
    desc:
      'Grassroots programs building neighbourhood resilience — food security, mental wellness groups, social inclusion, and crisis intervention.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    tag:   'Open Access',
    href:  '/our-work#community',
  },
]

const TAG_COLORS = {
  'Youth | 15–24 yrs': 'bg-accent/10 text-accent',
  'NDIS Registered':   'bg-sage/20 text-primary',
  'Aged Care':         'bg-amber-50 text-amber-700',
  'Open Access':       'bg-primary/10 text-primary',
}

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="section-padding bg-offwhite"
      aria-labelledby="programs-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="What We Offer"
          title="Programs built around real needs"
          description="Every program Caura delivers is co-designed with the community it serves — evidence-based, person-centred, and delivered with cultural safety at the forefront."
          align="center"
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROGRAMS.map((prog) => {
            const Icon = prog.icon
            return (
              <motion.article
                key={prog.id}
                variants={{
                  hidden:  { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-semibold font-heading tracking-wide px-2.5 py-1 rounded-full ${TAG_COLORS[prog.tag] ?? 'bg-white/80 text-primary'} backdrop-blur-sm`}
                  >
                    {prog.tag}
                  </span>
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-sage flex items-center justify-center shadow-md">
                    <Icon className="text-white text-base" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-heading font-bold text-primary text-lg mb-2 group-hover:text-sage transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-muted font-body text-sm leading-relaxed flex-1 mb-5">
                    {prog.desc}
                  </p>
                  <Link
                    to={prog.href}
                    className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm font-heading group/link"
                    aria-label={`Learn more about ${prog.title}`}
                  >
                    Learn more
                    <RiArrowRightLine
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/our-work" className="btn-primary">
            View All Programs <RiArrowRightLine />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
