import { motion } from 'framer-motion'
import { FaCalendarAlt, FaChurch, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const details = [
  { label: 'Date', value: 'May 25, 2026', icon: FaCalendarAlt },
  { label: 'Time', value: '10:00 AM onwards', icon: FaClock },
  { label: 'Venue', value: 'Holy Family Church, Melarampunthur, Nagercoil', icon: FaChurch },
  { label: 'Reception', value: 'Anbar Arangam, Melarampunthur', icon: FaMapMarkerAlt },
]

function EventDetails() {
  return (
    <section id="details" className="mx-auto w-full max-w-6xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-rosewood/80">Wedding Details</p>
        <h2 className="mt-2 font-heading text-4xl text-rosewood md:text-5xl">Save The Date</h2>
      </motion.div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {details.map(({ icon: Icon, label, value }) => (
          <motion.article
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass-card rounded-2xl p-5 shadow-glass"
          >
            <div className="mb-3 inline-flex rounded-full bg-white/70 p-3 text-rosewood">
              <Icon />
            </div>
            <p className="text-sm font-medium text-rosewood/75">{label}</p>
            <p className="mt-1 font-medium text-slate-700">{value}</p>
          </motion.article>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl shadow-glass">
        <iframe
          title="Wedding venue map"
          src="https://maps.google.com/maps?q=Holy%20Family%20Church%2C%20Nagercoil&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-72 w-full border-0 md:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default EventDetails
