import { motion } from 'framer-motion'
import Lightbox from './Lightbox'

const aspectToClass = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
}

function Gallery({ items, onImageClick }) {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-rosewood/80">Gallery</p>
        <h2 className="mt-2 font-heading text-4xl text-rosewood md:text-5xl">Captured Memories</h2>
      </motion.div>

      <div className="masonry">
        {items.map((item, index) => (
          <motion.div
            key={`${item.src}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="masonry-item group block w-full overflow-hidden rounded-2xl"
          >
            <div className={`overflow-hidden rounded-2xl ${aspectToClass[item.aspect] ?? aspectToClass.square}`}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

Gallery.Lightbox = Lightbox

export default Gallery
