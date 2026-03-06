import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { partners } from '../../data/content'

export default function PartnersSection() {
  return (
    <section
      className="py-14 bg-offwhite border-t border-gray-100"
      aria-labelledby="partners-heading"
    >
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="partners-heading"
          className="text-center text-xs font-heading font-semibold tracking-[0.2em] uppercase text-muted mb-10"
        >
          Our Partners &amp; Registrations
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={{
                hidden:  { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl px-7 py-4 min-w-[120px] flex flex-col items-center gap-1 hover:border-sage hover:shadow-sm transition-all duration-300">
                <span className="font-heading font-bold text-xl text-primary/50 group-hover:text-primary transition-colors duration-200">
                  {partner.abbr}
                </span>
                <span className="text-muted text-[10px] font-body tracking-wide text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted text-xs font-body mt-8"
        >
          Caura Services is a registered NDIS provider, accredited by the NDIS Quality and Safeguards Commission.
        </motion.p>
      </div>
    </section>
  )
}
