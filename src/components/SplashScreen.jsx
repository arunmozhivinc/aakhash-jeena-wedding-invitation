import { motion } from 'framer-motion'
import { IoMailOpenOutline } from 'react-icons/io5'

function SplashScreen({ onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-50 text-slate-700"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center space-y-8 text-center"
      >
        <p className="font-heading text-4xl md:text-6xl text-rosewood">A &amp; J</p>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">You are invited</p>
        
        <button
          onClick={onOpen}
          className="group mt-12 flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rosewood text-white shadow-lg shadow-rosewood/30 transition-all group-hover:bg-rosewood/90">
            <IoMailOpenOutline size={28} />
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-600">Tap to Open</span>
        </button>
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen
