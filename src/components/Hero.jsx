import { motion, useScroll, useTransform } from 'framer-motion'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Details', href: '#details' },
  { label: 'RSVP', href: '#rsvp' },
]

function Hero({ weddingDate, isOpened }) {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 120])
  const formattedDate = weddingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header id="hero" className="relative min-h-screen">
      <motion.img
        src={`${import.meta.env.BASE_URL}images/image2.jpg`}
        alt="Aakash and Jeena together"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-rosewood/55" />

      <nav className="absolute left-0 top-0 z-20 w-full px-4 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full glass-card px-5 py-3">
          <p className="font-heading text-xl text-white md:text-2xl">A &amp; J</p>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="text-sm font-medium text-white/90 transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pt-[20vh] text-center text-white md:pt-[25vh]"
      >
        <p className="mb-3 tracking-[0.25em] text-xs uppercase md:text-sm">We're Getting Married</p>
        <h1 className="font-heading text-5xl leading-tight md:text-7xl">
          <span className="block md:inline">S. Aakhash &amp;</span>{' '}
          <span className="block md:inline">R. Jeena</span>
        </h1>
        <p className="mt-5 rounded-full glass-card px-6 py-2 text-sm md:text-base">{formattedDate}</p>
      </motion.div>

      <motion.a
        href="#story"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/90"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-10 w-[1px] bg-white/80" />
        </div>
      </motion.a>
    </header>
  )
}

export default Hero
