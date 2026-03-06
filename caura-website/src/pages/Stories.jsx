import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiArrowRightLine, RiDoubleQuotesL, RiHeartLine, RiGroupLine, RiUserHeartLine,
} from 'react-icons/ri'
import SectionHeader from '../components/ui/SectionHeader'
import CTASection    from '../components/sections/CTASection'

/* ─── Stories data ───────────────────────────────────────────────────────── */
const STORIES = [
  {
    id: 1,
    tag:     'Youth Transition',
    title:   'From School to a Career He Loves',
    excerpt: `At 19, Marcus felt lost after finishing school. Through Caura's Youth Transition Program he received mentoring, job readiness training, and the confidence to enter the workforce. Today he works as a trade apprentice.`,
    image:   'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=700&q=80',
    quote:   `"Caura didn't just help me find a job — they helped me find myself."`,
    person:  'Marcus, 19 · Melbourne',
  },
  {
    id: 2,
    tag:     'Aged Care',
    title:   'Staying Home, Staying Independent',
    excerpt: `When Joan's family worried she could no longer live safely at home at 82, Caura's aged care team stepped in. Regular visits, mobility support, and companionship transformed her daily life — and gave her family peace of mind.`,
    image:   'https://images.pexels.com/photos/6995237/pexels-photo-6995237.jpeg?auto=compress&cs=tinysrgb&w=700&q=80',
    quote:   '"The Caura team became like family to us. Mum is safer, happier, and still home."',
    person:  `Joan's daughter · Brisbane`,
  },
  {
    id: 3,
    tag:     'Disability Support',
    title:   'Living Independently for the First Time',
    excerpt: `After years of relying on family, Daniel — who has cerebral palsy — moved into his own SIL apartment at 24 with Caura's support coordination. His NDIS plan was built around his goals, not a system template.`,
    image:   'https://images.pexels.com/photos/7551656/pexels-photo-7551656.jpeg?auto=compress&cs=tinysrgb&w=700&q=80',
    quote:   '"I never thought I could live on my own. Caura showed me I could, and I did."',
    person:  'Daniel, 24 · Sydney',
  },
  {
    id: 4,
    tag:     'Community Outreach',
    title:   'A Community That Came Together',
    excerpt: 'In Western Sydney, Caura partnered with local residents to run weekly skills workshops and community meals. Over 300 people participated in 12 months — and volunteering rates in the area tripled.',
    image:   'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=700&q=80',
    quote:   '"This neighbourhood feels alive again. People look out for each other now."',
    person:  'Resident · Western Sydney',
  },
  {
    id: 5,
    tag:     'Youth Transition',
    title:   'Her First University Acceptance',
    excerpt: `Amara navigated cultural, language, and financial barriers on her path to university. Caura's education pathways support connected her with tutoring and guidance that led to her first offer letter.`,
    image:   'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=700&q=80',
    quote:   '"Being the first in my family to go to university felt impossible. Caura made it possible."',
    person:  'Amara, 18 · Perth',
  },
  {
    id: 6,
    tag:     'Employment Pathways',
    title:   'Back to Work After Injury',
    excerpt: `A workplace accident left Tom without direction at 38. Caura's employment pathways program provided retraining, confidence-building, and employer connections that led him back into meaningful work within six months.`,
    image:   'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=700&q=80',
    quote:   '"I thought my working life was over. The Caura team never believed that — and eventually neither did I."',
    person:  'Tom, 38 · Adelaide',
  },
]

const METRICS = [
  { value: '50,000+', label: 'Lives Supported',    sub: 'Since 2011' },
  { value: '1,200+',  label: 'Families Assisted',  sub: 'Nationally' },
  { value: '250+',    label: 'Community Partners', sub: 'Across Australia' },
  { value: '97%',     label: 'Satisfaction Rate',  sub: 'Participant surveys' },
  { value: '14+',     label: 'Years of Service',   sub: 'Est. Melbourne 2011' },
  { value: '15+',     label: 'Active Programs',    sub: 'NDIS & non-NDIS' },
]

const VOLUNTEERS = [
  {
    name:  'Priya S.',
    role:  'Volunteer Driver · Melbourne',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    quote: `Every Friday I drive elderly participants to their appointments. It's two hours of my week, but it means the world to them — and honestly, to me.`,
  },
  {
    name:  'Ben T.',
    role:  'Skills Workshop Facilitator · Sydney',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    quote: 'I run a monthly cooking skills session for young people going into supported living. Watching them gain confidence in the kitchen is one of the best parts of my week.',
  },
  {
    name:  'Linda W.',
    role:  'Companion Volunteer · Brisbane',
    image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    quote: 'I visit two ladies every week for a chat and a walk. They light up when I arrive. Volunteering with Caura has given me as much as I give them.',
  },
]

const TAG_COLORS = {
  'Youth Transition':    'bg-amber-50 text-amber-700',
  'Aged Care':           'bg-rose-50 text-rose-600',
  'Disability Support':  'bg-sage/15 text-primary',
  'Community Outreach':  'bg-accent/10 text-accent',
  'Employment Pathways': 'bg-primary/10 text-primary',
}

/* ── Animation variants ─────────────────────────────────────────────────────── */
const fadeUp   = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const stagger  = { visible: { transition: { staggerChildren: 0.12 } } }

/* ── Stories page ───────────────────────────────────────────────────────────── */
export default function Stories() {
  return (
    <div id="main-content">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        aria-label="Stories of Impact hero"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Community members at a Caura event"
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
                <li className="text-white font-semibold">Stories of Impact</li>
              </ol>
            </nav>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Stories of Impact
            </h1>
            <p className="text-white/80 font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Real lives changed. Real communities strengthened. These are the stories
              behind the numbers — and they are the reason we do what we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Community Stories Grid ───────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="stories-grid-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Community Stories"
            title="Voices from our community"
            description="Behind every support plan, every transition program, every community meal — there is a person whose life has been touched. Here are just a few of their stories."
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {STORIES.map((story) => (
              <motion.article
                key={story.id}
                variants={fadeUp}
                className="group card overflow-hidden flex flex-col"
                aria-label={story.title}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className={`absolute top-4 left-4 tag text-[10px] font-semibold ${TAG_COLORS[story.tag] ?? 'bg-sage/15 text-primary'}`}>
                    {story.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-charcoal text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                    {story.title}
                  </h3>
                  <p className="text-muted font-body text-sm leading-relaxed mb-5 flex-1">
                    {story.excerpt}
                  </p>
                  {/* Pull quote */}
                  <div className="border-l-2 border-sage pl-4 mb-4">
                    <RiDoubleQuotesL className="text-sage text-base mb-1" aria-hidden="true" />
                    <p className="text-charcoal font-body text-sm italic leading-relaxed">{story.quote}</p>
                    <p className="text-muted font-body text-xs mt-1">— {story.person}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Impact Metrics ───────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
        aria-labelledby="metrics-heading"
      >
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/80 text-xs font-heading font-semibold uppercase tracking-widest mb-4">
              Our Impact in Numbers
            </span>
            <h2
              id="metrics-heading"
              className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
            >
              The difference Caura makes
            </h2>
            <p className="text-white/65 font-body text-base max-w-xl mx-auto">
              From individual lives transformed to entire communities strengthened — our work
              touches Australia in measurable, lasting ways.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {METRICS.map((m) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                className="text-center p-5 rounded-2xl backdrop-blur-sm"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-1 leading-none">
                  {m.value}
                </div>
                <div className="text-white font-heading font-semibold text-sm mb-1">{m.label}</div>
                <div className="text-white/50 text-xs font-body">{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA band inside metrics */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact#donate" className="btn-white">
              Support Our Mission <RiArrowRightLine />
            </Link>
            <Link to="/contact" className="btn-outline-white">
              Volunteer With Us <RiHeartLine />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Volunteer Stories ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-offwhite" aria-labelledby="volunteers-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Volunteer Stories"
            title="The people who make it possible"
            description="Our volunteers are at the heart of everything we do. Their time, empathy, and energy are the fuel that powers our community programs every single week."
            align="center"
            className="mb-14"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-7"
          >
            {VOLUNTEERS.map((v) => (
              <motion.div
                key={v.name}
                variants={fadeUp}
                className="card p-7 flex flex-col items-center text-center"
              >
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-20 h-20 rounded-full object-cover shadow-md mb-5"
                  loading="lazy"
                />
                <RiDoubleQuotesL className="text-sage text-2xl mb-3" aria-hidden="true" />
                <p className="text-muted font-body text-sm leading-relaxed italic mb-5 flex-1">
                  {v.quote}
                </p>
                <div>
                  <p className="font-heading font-bold text-charcoal text-sm">{v.name}</p>
                  <p className="text-muted font-body text-xs">{v.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Volunteer CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted font-body text-base mb-5">
              Want to add your story to this list?
            </p>
            <Link to="/contact" className="btn-primary">
              Become a Volunteer <RiGroupLine />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <CTASection />
    </div>
  )
}
