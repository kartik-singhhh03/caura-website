import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiUserHeartLine, RiHomeHeartLine, RiSeedlingLine,
  RiCommunityLine, RiBriefcaseLine, RiMedalLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import SectionHeader from '../ui/SectionHeader'

const SERVICES = [
  {
    id: 1,
    icon: RiUserHeartLine,
    title: 'Disability Support',
    description:
      'Helping people build genuine independence through personalised, NDIS-registered care plans that put the participant at the centre of every decision.',
    image: 'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'primary',
    href: '/our-work#disability',
  },
  {
    id: 2,
    icon: RiHomeHeartLine,
    title: 'Aged Care at Home',
    description:
      'Supporting older Australians to live safely, comfortably, and connected in the homes they love, with care that respects their dignity.',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'accent',
    href: '/our-work#aged-care',
  },
  {
    id: 3,
    icon: RiSeedlingLine,
    title: 'Youth Transition Programs',
    description:
      'Guiding young people leaving care into stable education, employment, and community life through structured mentoring and skills training.',
    image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'sage',
    href: '/our-work#youth',
  },
  {
    id: 4,
    icon: RiCommunityLine,
    title: 'Community Development',
    description:
      'Building stronger communities through mentoring, outreach, and grassroots partnership that puts local people at the heart of progress.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'primary',
    href: '/our-work#community',
  },
]

const colorMap = {
  primary: { iconBg: 'bg-sage-light',  iconFg: 'text-primary',      pill: 'bg-sage-light text-primary',      border: 'hover:border-primary/20' },
  accent:  { iconBg: 'bg-accent-pale', iconFg: 'text-accent',       pill: 'bg-accent-pale text-accent',       border: 'hover:border-accent/20'  },
  sage:    { iconBg: 'bg-sage-light',  iconFg: 'text-primary-light', pill: 'bg-sage-light text-primary-light', border: 'hover:border-sage/40'    },
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-offwhite" aria-labelledby="services-heading">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive care across every stage of life"
          description="Four core service areas, each designed to meet people exactly where they are — and walk with them toward where they want to be."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((svc) => {
            const c = colorMap[svc.color]
            return (
              <motion.article
                key={svc.id}
                variants={itemVariants}
                className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden
                            shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-350 ${c.border}`}
                aria-label={svc.title}
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Icon overlay */}
                  <div className={`absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center ${c.iconBg}`}>
                    <svc.icon className={`text-xl ${c.iconFg}`} aria-hidden="true" />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-charcoal text-[15px] mb-2 group-hover:text-primary transition-colors duration-200">
                    {svc.title}
                  </h3>
                  <p className="text-muted text-[13px] font-body leading-relaxed mb-5">
                    {svc.description}
                  </p>
                  <Link
                    to={svc.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-heading font-semibold text-primary hover:gap-2.5 transition-all duration-200"
                    aria-label={`Learn more about ${svc.title}`}
                  >
                    Learn More <RiArrowRightLine />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mt-12"
        >
          <p className="text-muted text-sm font-body mb-5">
            Not sure which service is right for you or someone you care for?
          </p>
          <Link to="/contact" className="btn-secondary">
            Talk to Our Team <RiArrowRightLine />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
