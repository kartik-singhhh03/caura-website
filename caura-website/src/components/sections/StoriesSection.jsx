import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiTimeLine, RiPriceTag3Line } from 'react-icons/ri'
import SectionHeader from '../ui/SectionHeader'
import { stories } from '../../data/content'

const catColors = {
  Employment: 'bg-accent-pale text-accent',
  Community:  'bg-sage-light text-primary',
  Youth:      'bg-cream text-primary-light',
  'Disability Support': 'bg-sage-pale text-primary',
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function StoriesSection() {
  return (
    <section
      id="stories"
      className="section-padding bg-white"
      aria-labelledby="stories-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Impact Stories"
          title="Inspiring tales of transformation"
          description="Get inspired by the real journeys of Australians who, with the right support, transformed their lives and their communities."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stories.map((story) => (
            <motion.article
              key={story.id}
              variants={itemVariants}
              className="group card overflow-hidden flex flex-col"
              aria-label={story.title}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={`absolute top-3 left-3 tag text-[10px] ${
                    catColors[story.category] ?? 'bg-sage-light text-primary'
                  }`}
                >
                  <RiPriceTag3Line className="text-[10px]" aria-hidden="true" />
                  {story.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-muted text-xs font-body mb-3">
                  <RiTimeLine aria-hidden="true" />
                  {story.readTime} · {story.date}
                </div>

                <h3 className="font-heading font-bold text-charcoal text-base mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                  {story.title}
                </h3>

                <p className="text-muted text-sm font-body leading-relaxed mb-4 flex-1 line-clamp-3">
                  {story.excerpt}
                </p>

                <Link
                  to="/stories"
                  className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary hover:text-primary-light transition-colors mt-auto group/link"
                  aria-label={`Read more about ${story.title}`}
                >
                  Read More
                  <RiArrowRightLine className="transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link to="/stories" className="btn-secondary">
            All Stories &amp; Impact Reports <RiArrowRightLine />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
