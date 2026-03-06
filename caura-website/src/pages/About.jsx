import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiCheckboxCircleFill, RiArrowRightLine,
  RiHeartLine, RiGroupLine, RiShieldCheckLine, RiSeedlingLine,
  RiLinkedinFill, RiMailLine,
} from 'react-icons/ri'
import SectionHeader from '../components/ui/SectionHeader'

/* ── animation helpers ───────────────────────────────────────────────────── */
const fadeUp    = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }
const fadeLeft  = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }
const fadeRight = { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } }
const stagger   = { visible: { transition: { staggerChildren: 0.12 } } }

/* ── data ────────────────────────────────────────────────────────────────── */
const VALUES = [
  {
    icon: RiHeartLine,
    title: 'Respect',
    desc: 'We honour the dignity, culture, and individuality of every person we serve.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: RiGroupLine,
    title: 'Community',
    desc: 'We believe in the power of people coming together to create lasting change.',
    color: 'bg-sage/15 text-primary',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Integrity',
    desc: 'We act with honesty and transparency in everything we do — always.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: RiSeedlingLine,
    title: 'Empowerment',
    desc: 'We build capacity and independence, not dependency, in all our programs.',
    color: 'bg-amber-50 text-amber-600',
  },
]

const TEAM = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    bio:  'Former NDIS policy advisor with 18 years in community services. Sarah leads Caura\'s national strategy with a focus on outcomes-based care.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    linkedin: '#',
    email: 'sarah@caura.com.au',
  },
  {
    name: 'James Okafor',
    role: 'Head of Disability Services',
    bio:  'Lived experience of the NDIS informs James\'s deep commitment to person-centred support. He has built and led support teams across four states.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    linkedin: '#',
    email: 'james@caura.com.au',
  },
  {
    name: 'Helen Tran',
    role: 'Director of Aged Care',
    bio:  'A registered nurse with a post-graduate background in gerontology, Helen oversees Caura\'s aged care programs with empathy and clinical precision.',
    image: 'https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    linkedin: '#',
    email: 'helen@caura.com.au',
  },
  {
    name: 'David Roe',
    role: 'Community Partnerships Manager',
    bio:  'David brings together local government, NGOs, and grassroots organisations to extend Caura\'s reach into the communities that need it most.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
    linkedin: '#',
    email: 'david@caura.com.au',
  },
]

const WHY_CAURA = [
  { heading: 'Experienced Support Teams',    body: 'Over 1,200 trained professionals with deep expertise in disability, aged care, and youth services across every state.' },
  { heading: 'NDIS Aligned Services',        body: 'Registered NDIS provider compliant with Quality and Safeguards Commission standards — you are in safe, accredited hands.' },
  { heading: 'Community Partnerships',       body: 'More than 250 active partnerships with local councils, health services, and grassroots organisations nationwide.' },
  { heading: 'Personalised Care Plans',      body: 'No two journeys are alike. Every participant receives a tailored plan co-designed with them and their family.' },
]

export default function About() {
  return (
    <div id="main-content">

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden"
        aria-label="About Caura Services hero"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)',
          }}
          role="img"
          aria-label="Caura support workers with community members"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/30" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 container-custom z-20">
          <p className="text-white/50 text-xs font-body tracking-wide">
            <Link to="/" className="hover:text-sage transition-colors">Home</Link>
            <span className="mx-2">·</span>
            <span className="text-white/80">About</span>
          </p>
        </div>

        <div className="container-custom relative z-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sage font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              About Us
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              About Caura Services
            </h1>
            <p className="text-white/75 font-body text-lg leading-relaxed max-w-xl">
              Supporting Australians through life transitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. OUR STORY
      ══════════════════════════════════════════════════════════════════ */}
      <section id="story" className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeLeft, visible: { ...fadeLeft.visible, transition: { duration: 0.7 } } }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.pexels.com/photos/7551656/pexels-photo-7551656.jpeg?auto=compress&cs=tinysrgb&w=500&q=80"
                alt="Support worker with community member"
                className="rounded-2xl w-full h-56 object-cover shadow-md"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=500&q=80"
                alt="Aged care support at home"
                className="rounded-2xl w-full h-56 object-cover shadow-md mt-6"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=500&q=80"
                alt="Community volunteering"
                className="rounded-2xl w-full h-48 object-cover shadow-md -mt-4"
                loading="lazy"
              />
              <img
                src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=500&q=80"
                alt="Youth mentorship program"
                className="rounded-2xl w-full h-48 object-cover shadow-md mt-2"
                loading="lazy"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeRight, visible: { ...fadeRight.visible, transition: { duration: 0.7, delay: 0.1 } } }}
            >
              <span className="inline-block text-sage font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                Our Story
              </span>
              <h2
                id="story-heading"
                className="font-heading font-bold text-primary text-3xl sm:text-4xl leading-tight mb-5"
              >
                Built from frustration. Driven by purpose.
              </h2>
              <p className="text-muted font-body text-base leading-relaxed mb-4">
                Caura Services was founded in Melbourne in 2011 by two disability support
                practitioners who saw too many Australians falling through the cracks of a
                fragmented care system. They believed every person — regardless of age, ability,
                or background — deserved real support delivered with dignity.
              </p>
              <p className="text-muted font-body text-base leading-relaxed mb-4">
                What began as a small team of passionate workers has grown into a nationally
                recognised NDIS registered provider operating across all states and territories.
                Our organisation has expanded into aged care, youth transitions, and community
                development — always guided by the voices of the people we serve.
              </p>
              <p className="text-muted font-body text-base leading-relaxed mb-8">
                Through our non-profit arm, the{' '}
                <strong className="text-primary font-semibold">Caura Foundation</strong>, we
                extend our reach to communities who need it most — at no cost to participants
                who cannot access government funding.
              </p>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '14+', label: 'Years' },
                  { value: '7',   label: 'States' },
                  { value: '50k+',label: 'Lives' },
                ].map((s) => (
                  <div key={s.label} className="text-center bg-offwhite rounded-2xl py-4">
                    <div className="font-heading font-extrabold text-primary text-2xl leading-none">{s.value}</div>
                    <div className="text-muted text-xs font-body mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary">
                Get in Touch <RiArrowRightLine />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. MISSION · VISION · VALUES
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="values"
        className="section-padding overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#1B4332 0%,#2D6A4F 60%,#1B4332 100%)' }}
        aria-labelledby="mvv-heading"
      >
        <div className="container-custom">
          <SectionHeader
            eyebrow="Who We Are"
            title="Mission, Vision & Values"
            align="center"
            theme="dark"
            className="mb-14"
          />

          {/* Mission + Vision side by side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...stagger, hidden: {} }}
            className="grid md:grid-cols-2 gap-6 mb-14"
          >
            {/* Mission */}
            <motion.div
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6 } } }}
              className="bg-white/8 border border-white/12 rounded-3xl p-8 md:p-10"
            >
              <div className="w-11 h-11 rounded-2xl bg-sage/20 flex items-center justify-center mb-5">
                <RiHeartLine className="text-sage text-2xl" aria-hidden="true" />
              </div>
              <h3 id="mvv-heading" className="font-heading font-bold text-white text-xl mb-3">
                Our Mission
              </h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                Empowering independence and dignity through support services — delivering
                person-centred care that enables every Australian to live a full and
                meaningful life.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.12 } } }}
              className="bg-white/8 border border-white/12 rounded-3xl p-8 md:p-10"
            >
              <div className="w-11 h-11 rounded-2xl bg-sage/20 flex items-center justify-center mb-5">
                <RiSeedlingLine className="text-sage text-2xl" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">
                Our Vision
              </h3>
              <p className="text-white/70 font-body text-base leading-relaxed">
                A future where every individual — regardless of ability, age, or background —
                has access to compassionate care, genuine community, and real opportunity.
              </p>
            </motion.div>
          </motion.div>

          {/* Values grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55 } } }}
                  className="bg-white rounded-2xl p-7 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${v.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-2xl" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading font-bold text-primary text-base mb-2">{v.title}</h4>
                  <p className="text-muted text-sm font-body leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. LEADERSHIP / TEAM
      ══════════════════════════════════════════════════════════════════ */}
      <section id="team" className="section-padding bg-white" aria-labelledby="team-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our People"
            title="The team leading our mission"
            description="Experienced leaders who combine professional expertise with genuine passion for the communities we serve."
            align="center"
            className="mb-14"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7"
          >
            {TEAM.map((member) => (
              <motion.article
                key={member.name}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55 } } }}
                className="group bg-offwhite rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-primary text-lg leading-tight mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-sage font-heading font-semibold text-xs tracking-wide uppercase mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted font-body text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-primary/8 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-all duration-200"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <RiLinkedinFill className="text-sm" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full bg-primary/8 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-all duration-200"
                      aria-label={`Email ${member.name}`}
                    >
                      <RiMailLine className="text-sm" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. WHY CHOOSE CAURA
      ══════════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-offwhite" aria-labelledby="why-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeLeft, visible: { ...fadeLeft.visible, transition: { duration: 0.7 } } }}
              className="relative rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/6995237/pexels-photo-6995237.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Caura support worker helping elderly person"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              {/* Badge */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-4 shadow-lg">
                <div className="font-heading font-extrabold text-primary text-3xl leading-none">97<span className="text-sage">%</span></div>
                <div className="text-muted text-xs font-body mt-0.5">Participant satisfaction</div>
              </div>
            </motion.div>

            {/* List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeRight, visible: { ...fadeRight.visible, transition: { duration: 0.7, delay: 0.1 } } }}
            >
              <span className="inline-block text-sage font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                Why Caura
              </span>
              <h2 id="why-heading" className="font-heading font-bold text-primary text-3xl sm:text-4xl leading-tight mb-3">
                Why Choose Caura
              </h2>
              <p className="text-muted font-body text-base leading-relaxed mb-10">
                Thousands of Australians and their families choose Caura because we combine
                genuine care with professional rigour and real accountability.
              </p>

              <div className="space-y-6">
                {WHY_CAURA.map((item, i) => (
                  <motion.div
                    key={item.heading}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-sage/15 flex items-center justify-center mt-0.5">
                      <RiCheckboxCircleFill className="text-primary text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary text-base mb-1">
                        {item.heading}
                      </h3>
                      <p className="text-muted font-body text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <Link to="/our-work" className="btn-primary">
                  Explore Our Services <RiArrowRightLine />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Make a Referral
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. CALL TO ACTION — JOIN OUR MISSION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        aria-label="Join Our Mission"
      >
        {/* Pexels bg */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)',
          }}
          role="img"
          aria-label="Community volunteers working together"
        />
        <div className="absolute inset-0 bg-primary/82" />

        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sage/8 pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/4 pointer-events-none" aria-hidden="true" />

        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block text-sage font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Get Involved
            </span>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Join Our{' '}
              <span className="text-sage">Mission</span>
            </h2>
            <p className="text-white/65 font-body text-base sm:text-lg leading-relaxed mb-10">
              Whether you donate, volunteer your time, refer someone in need, or partner
              with us — every action creates real and lasting change for Australians who
              need it most. Together we build stronger communities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact#donate" className="btn-white">
                Donate to the Foundation <RiArrowRightLine />
              </Link>
              <Link
                to="/contact#volunteer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-heading font-semibold text-sm hover:border-sage hover:text-sage transition-all duration-200"
              >
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
