import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function getCountdown(targetDate) {
  const delta = targetDate.getTime() - Date.now()
  if (delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  return {
    days: Math.floor(delta / (1000 * 60 * 60 * 24)),
    hours: Math.floor((delta / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((delta / (1000 * 60)) % 60),
    seconds: Math.floor((delta / 1000) % 60),
  }
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getCountdown(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getCountdown(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="px-4 py-16 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-rose-100 via-amber-50 to-rose-100 p-8 text-center shadow-glass"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-rosewood/80">Countdown</p>
        <h2 className="mt-2 font-heading text-4xl text-rosewood md:text-5xl">Counting Every Moment</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="glass-card rounded-2xl py-4">
              <p className="font-heading text-4xl text-rosewood">{value}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Countdown
