import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiCheckboxCircleFill, RiArrowRightLine } from 'react-icons/ri'

/* Bright, natural photography — not corporate stock */
const IMAGES = [
  {
    src: 'https://images.pexels.com/photos/7551656/pexels-photo-7551656.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Support worker with elderly woman at home',
    cls: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Youth mentorship session',
    cls: '',
  },
  {
    src: 'https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Community volunteering project',
    cls: '',
  },
]

const highlights = [
  'NDIS Quality & Safeguards Commission registered provider',
  'Culturally responsive support for CALD communities',
  'Guided by lived experience — always co-designed with participants',
  'Serving all states and territories across Australia',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Right side: image grid (appears first on mobile via order) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72 }}
            className="order-last lg:order-first relative"
          >
            <div className="grid grid-cols-2 grid-rows-3 gap-3 h-[460px]">
              {/* Large left image spanning 2 rows */}
              <div className="row-span-2 rounded-2xl overflow-hidden">
                <img
                  src={IMAGES[0].src}
                  alt={IMAGES[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Top-right */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMAGES[1].src}
                  alt={IMAGES[1].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Bottom-right */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMAGES[2].src}
                  alt={IMAGES[2].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Bottom row — wide caption bar */}
              <div className="col-span-2 bg-primary rounded-2xl flex items-center gap-5 px-6">
                <div>
                  <div className="font-heading font-extrabold text-sage text-3xl leading-none">14+</div>
                  <div className="text-white/65 text-xs font-body mt-0.5">Years trusted</div>
                </div>
                <div className="w-px h-10 bg-white/15" aria-hidden="true" />
                <div>
                  <div className="font-heading font-extrabold text-sage text-3xl leading-none">7</div>
                  <div className="text-white/65 text-xs font-body mt-0.5">States & Territories</div>
                </div>
                <div className="w-px h-10 bg-white/15" aria-hidden="true" />
                <div>
                  <div className="font-heading font-extrabold text-sage text-3xl leading-none">97%</div>
                  <div className="text-white/65 text-xs font-body mt-0.5">Satisfaction rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Left side: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.1 }}
          >
            <span className="tag tag-green mb-5">Our Mission</span>

            <h2
              id="about-heading"
              className="font-heading font-bold text-charcoal text-3xl sm:text-4xl leading-tight mb-5"
            >
              We exist to empower people — with support, dignity, and opportunity.
            </h2>

            <p className="text-muted font-body text-base leading-relaxed mb-4">
              Caura Services exists to empower individuals and families through support,
              dignity, and opportunity. We believe every person deserves access to care,
              guidance, and genuine community connection — regardless of age, ability,
              or background.
            </p>

            <p className="text-muted font-body text-base leading-relaxed mb-8">
              Through our non-profit arm, the{' '}
              <strong className="text-primary font-semibold">Caura Foundation</strong>,
              we extend this belief to communities who need it most — at no cost to
              the participant.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-body text-charcoal/85">
                  <RiCheckboxCircleFill
                    className="text-sage-medium text-lg mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Learn More <RiArrowRightLine />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Make a Referral
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
