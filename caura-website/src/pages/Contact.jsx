import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiMapPinLine, RiPhoneLine, RiMailLine,
  RiArrowRightLine, RiCheckboxCircleFill,
  RiGroupLine, RiHeartLine,
  RiFacebookFill, RiInstagramLine, RiLinkedinFill,
} from 'react-icons/ri'
import SectionHeader from '../components/ui/SectionHeader'

/* â”€â”€ Animation variants â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const fadeUp    = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const fadeLeft  = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } } }
const fadeRight = { hidden: { opacity: 0, x:  28 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } } }
const stagger   = { visible: { transition: { staggerChildren: 0.12 } } }

/* â”€â”€ Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const CONTACT_CARDS = [
  {
    id:    'email',
    icon:  RiMailLine,
    label: 'Email Us',
    lines: [
      { text: 'info@caura.com.au',          href: 'mailto:info@caura.com.au' },
      { text: 'hello@cauraagedcare.com.au',  href: 'mailto:hello@cauraagedcare.com.au' },
    ],
    note: 'We reply within one business day.',
  },
  {
    id:    'phone',
    icon:  RiPhoneLine,
    label: 'Call Us',
    lines: [
      { text: '1800 CAURA2 (1800 227 872)', href: 'tel:1800227872' },
      { text: '(03) 9000 1200',             href: 'tel:0390001200' },
    ],
    note: 'Mon â€“ Fri  8 AM â€“ 6 PM AEST',
  },
  {
    id:    'address',
    icon:  RiMapPinLine,
    label: 'Visit Us',
    lines: [
      { text: 'Level 12, 55 Collins Street', href: null },
      { text: 'Melbourne VIC 3000',           href: null },
      { text: 'Australia',                    href: null },
    ],
    note: 'National Headquarters',
  },
]

const VOLUNTEER_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Community volunteers working together',
  },
  {
    src: 'https://images.pexels.com/photos/7551674/pexels-photo-7551674.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Disability support worker with participant',
  },
  {
    src: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Aged care worker helping elderly person at home',
  },
  {
    src: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Youth mentorship program participant',
  },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please enter a message.'
    return e
  }

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <div id="main-content">

      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        className="relative min-h-[62vh] flex items-center justify-center overflow-hidden"
        aria-label="Get In Touch hero"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Caura community support workers"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(27,67,50,0.92) 0%, rgba(27,67,50,0.72) 55%, rgba(69,123,157,0.50) 100%)' }}
          />
        </div>

        <div className="relative z-10 container-custom text-center py-24 sm:py-32">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-white/60 text-sm font-body">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li className="select-none">/</li>
                <li className="text-white font-semibold">Get In Touch</li>
              </ol>
            </nav>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Get In Touch
            </h1>
            <p className="text-white/80 font-body text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you need support, want to volunteer, or simply have a question â€” our team
              is here to help. We respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Contact Info â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-white" aria-labelledby="contact-info-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Contact Information"
            title="Reach us any way you prefer"
            description="Our team is available by email, phone, or in person at our Melbourne headquarters. We are always happy to hear from you."
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
            {CONTACT_CARDS.map(({ id, icon: Icon, label, lines, note }) => (
              <motion.div
                key={id}
                variants={fadeUp}
                className="card p-8 text-center flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #D8F3DC 0%, #F0FAF4 100%)' }}
                >
                  <Icon className="text-primary text-2xl" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-3">{label}</h3>
                <div className="space-y-1.5 mb-3">
                  {lines.map(({ text, href }) =>
                    href ? (
                      <a
                        key={text}
                        href={href}
                        className="block text-primary font-body font-semibold text-sm hover:underline"
                      >
                        {text}
                      </a>
                    ) : (
                      <p key={text} className="text-muted font-body text-sm">{text}</p>
                    )
                  )}
                </div>
                <p className="text-muted font-body text-xs">{note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Contact Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        id="contact-form"
        className="section-padding bg-offwhite"
        aria-labelledby="contact-form-heading"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left panel â€” intro + social */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="tag tag-green mb-5">Send Us a Message</span>
              <h2
                id="contact-form-heading"
                className="font-heading font-bold text-charcoal text-3xl sm:text-4xl leading-tight mb-5"
              >
                How can we help you today?
              </h2>
              <p className="text-muted font-body text-base leading-relaxed mb-8">
                Fill in the form and one of our dedicated team members will be in touch. For
                urgent matters, please call us directly on 1800 CAURA2.
              </p>

              {/* Quick contact recap */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: RiMailLine,   text: 'info@caura.com.au',              href: 'mailto:info@caura.com.au' },
                  { icon: RiMailLine,   text: 'hello@cauraagedcare.com.au',      href: 'mailto:hello@cauraagedcare.com.au' },
                  { icon: RiPhoneLine,  text: '1800 CAURA2  (1800 227 872)',     href: 'tel:1800227872' },
                  { icon: RiMapPinLine, text: 'Level 12, 55 Collins St, Melbourne VIC 3000', href: null },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary text-base" aria-hidden="true" />
                    </div>
                    {href ? (
                      <a href={href} className="text-charcoal font-body text-sm hover:text-primary transition-colors">
                        {text}
                      </a>
                    ) : (
                      <p className="text-charcoal font-body text-sm">{text}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="font-heading font-semibold text-charcoal text-sm mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: RiFacebookFill,  label: 'Facebook',  href: '#' },
                    { icon: RiInstagramLine, label: 'Instagram', href: '#' },
                    { icon: RiLinkedinFill,  label: 'LinkedIn',  href: '#' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-sage-light text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200"
                    >
                      <Icon className="text-base" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right panel â€” form / success */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 min-h-[420px] flex flex-col items-center justify-center"
                >
                  <RiCheckboxCircleFill className="text-sage text-6xl mb-5" aria-hidden="true" />
                  <h3 className="font-heading font-bold text-charcoal text-2xl mb-3">
                    Message received!
                  </h3>
                  <p className="text-muted font-body text-base leading-relaxed mb-6 max-w-sm">
                    Thank you for reaching out. A member of our team will contact you within one
                    business day. For urgent matters, call{' '}
                    <a href="tel:1800227872" className="text-primary font-semibold hover:underline">
                      1800 227 872
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-heading font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      className={`input${errors.name ? ' border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                    {errors.name && (
                      <p id="name-err" role="alert" className="text-red-500 text-xs mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-heading font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com.au"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-err' : undefined}
                      className={`input${errors.email ? ' border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                    {errors.email && (
                      <p id="email-err" role="alert" className="text-red-500 text-xs mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-heading font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you or someone you know..."
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-err' : undefined}
                      className={`textarea${errors.message ? ' border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                    />
                    {errors.message && (
                      <p id="message-err" role="alert" className="text-red-500 text-xs mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="text-muted text-xs font-body">
                    By submitting this form you agree to our{' '}
                    <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>.
                    We will never share your personal information.
                  </p>

                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    Send Message <RiArrowRightLine aria-hidden="true" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Map â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-white" aria-labelledby="map-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Find Us"
            title="Our National Headquarters"
            description="Located in the heart of Melbourne's CBD, our Caura Services headquarters is open Monday to Friday. Visit us or reach out by phone or email."
            align="center"
            className="mb-10"
          />

          {/* Address strip */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8"
          >
            {[
              { icon: RiMapPinLine, label: 'Address',      text: 'Level 12, 55 Collins Street\nMelbourne VIC 3000' },
              { icon: RiPhoneLine,  label: 'Phone',        text: '1800 CAURA2 (1800 227 872)' },
              { icon: RiMailLine,   label: 'Head Office Email', text: 'info@caura.com.au' },
            ].map(({ icon: Icon, label, text }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-start gap-3 p-5 rounded-2xl bg-offwhite border border-gray-100"
              >
                <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="text-primary text-base" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-charcoal text-xs uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-muted font-body text-sm whitespace-pre-line">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-72 md:h-[420px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
            aria-label="Google Map showing Caura Services Melbourne headquarters"
          >
            <iframe
              title="Caura Services â€” Melbourne Head Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d144.9631!3d-37.8143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2s55%20Collins%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Become a Volunteer CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section
        className="section-padding bg-offwhite"
        aria-labelledby="volunteer-cta-heading"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image mosaic */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {VOLUNTEER_IMAGES.map(({ src, alt }, i) => (
                <div
                  key={alt}
                  className={`overflow-hidden rounded-2xl shadow-md ${i === 0 ? 'col-span-2 h-52' : 'h-40'}`}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>

            {/* Text + CTA */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="tag tag-green mb-5">Make a Difference</span>
              <h2
                id="volunteer-cta-heading"
                className="font-heading font-extrabold text-charcoal text-3xl sm:text-4xl leading-tight mb-5"
              >
                Become a Volunteer
              </h2>
              <p className="text-muted font-body text-base leading-relaxed mb-5">
                Our volunteers are the heartbeat of Caura Services. From driving elderly participants
                to appointments, to running skills workshops, to simply providing companionship â€”
                your time creates life-changing impact in your local community.
              </p>
              <p className="text-muted font-body text-base leading-relaxed mb-8">
                No special qualifications needed â€” just a willingness to show up and care. We provide
                full training, flexible hours, and an incredibly rewarding experience.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Flexible hours â€” volunteer as little as 2 hrs/week',
                  'Full induction training provided at no cost',
                  'Join a supportive team of 500+ active volunteers',
                  'Make a genuine, measurable difference every week',
                ].map(text => (
                  <li key={text} className="flex items-start gap-3">
                    <RiCheckboxCircleFill className="text-sage text-lg mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-charcoal font-body text-base">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a href="mailto:volunteer@caura.com.au" className="btn-primary">
                  Become a Volunteer <RiGroupLine aria-hidden="true" />
                </a>
                <Link to="/stories" className="btn-secondary">
                  Read Volunteer Stories <RiHeartLine aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}


