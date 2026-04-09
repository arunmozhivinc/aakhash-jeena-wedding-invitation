import { motion, useScroll, useTransform } from 'framer-motion'

const hearts = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  left: `${Math.random() * 90}%`,
  duration: 3.8 + Math.random() * 2.5,
  delay: Math.random() * 2,
}))

function FloatingHearts() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.15, 0.35, 0.35, 0.1])

  return (
    <motion.div style={{ opacity }} className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          initial={{ y: '115vh', x: 0 }}
          animate={{ y: '-10vh', x: [0, -10, 8, 0] }}
          transition={{
            duration: heart.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: heart.delay,
          }}
          style={{ left: heart.left }}
          className="absolute text-sm text-rose-300/80"
          aria-hidden="true"
        >
          ❤
        </motion.span>
      ))}
    </motion.div>
  )
}

export default FloatingHearts
