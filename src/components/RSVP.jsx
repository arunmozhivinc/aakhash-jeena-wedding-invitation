import { useState } from 'react'
import { motion } from 'framer-motion'

function RSVP() {
  const [attending, setAttending] = useState('yes')

  return (
    <section id="rsvp" className="mx-auto w-full max-w-4xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        className="glass-card rounded-3xl p-6 shadow-glass md:p-10"
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-rosewood/80">RSVP</p>
        <h2 className="mt-2 text-center font-heading text-4xl text-rosewood md:text-5xl">Will You Join Us?</h2>

        <form className="mx-auto mt-8 max-w-xl space-y-4">
          <label className="block text-sm font-medium text-slate-700" htmlFor="guest-name">
            Your Name
          </label>
          <input
            id="guest-name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-rose-100 bg-white/80 px-4 py-3 outline-none transition focus:border-rose-300"
          />

          <div className="pt-2">
            <p className="mb-3 text-sm font-medium text-slate-700">Attending?</p>
            <div className="flex gap-3">
              {['yes', 'no'].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAttending(value)}
                  className={`flex-1 rounded-xl px-4 py-3 capitalize transition ${
                    attending === value
                      ? 'bg-rosewood text-white'
                      : 'bg-white/70 text-rosewood hover:bg-white'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default RSVP
