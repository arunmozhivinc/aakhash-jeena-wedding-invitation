import { AnimatePresence, motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'

function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.button
            type="button"
            onClick={onClose}
            whileTap={{ scale: 0.92 }}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-2xl text-white transition hover:bg-white/30"
            aria-label="Close image"
          >
            <IoClose />
          </motion.button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={item.src}
            alt={item.alt}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lightbox
