import { motion } from 'framer-motion'

function Story({ items }) {
  return (
    <section id="story" className="mx-auto w-full max-w-6xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-rosewood/80">Our Story</p>
        <h2 className="mt-2 font-heading text-4xl text-rosewood md:text-5xl">A Love Written in Time</h2>
      </motion.div>

      <div className="space-y-10">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="grid items-center gap-6 rounded-3xl glass-card p-5 shadow-glass md:grid-cols-2 md:p-8"
          >
            <img
              src={item.image}
              alt={item.title}
              className={`h-72 w-full rounded-2xl object-cover object-top ${index % 2 === 1 ? 'md:order-2' : ''}`}
            />
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <p className="text-sm font-medium text-rosewood/70">Chapter {index + 1}</p>
              <h3 className="mt-2 font-heading text-3xl text-rosewood">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Story
