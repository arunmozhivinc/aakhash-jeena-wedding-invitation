import { useMemo, useState } from 'react'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import FloatingHearts from './components/FloatingHearts'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MusicToggle from './components/MusicToggle'
import RSVP from './components/RSVP'
import SectionDivider from './components/SectionDivider'
import Story from './components/Story'

const galleryItems = [
  { src: 'public/images/couple-hero.png', alt: 'Couple portrait at golden hour', aspect: 'portrait' },
  { src: 'public/images/invitation-card.png', alt: 'Wedding invitation design', aspect: 'landscape' },
  { src: 'public/images/sketch-portrait.png', alt: 'Pencil sketch of the couple', aspect: 'portrait' },
  { src: 'public/images/couple-hero.png', alt: 'Romantic couple photo closeup', aspect: 'square' },
  { src: 'public/images/invitation-card.png', alt: 'Wedding invite card detail', aspect: 'landscape' },
]

const storyItems = [
  {
    title: 'A Serendipitous Hello',
    description:
      'Aakhash and Jeena met through family friends, and what began as a simple conversation turned into hours of laughter and comfort.',
    image: 'public/images/sketch-portrait.png',
  },
  {
    title: 'Growing Together',
    description:
      'From quiet coffee dates to long evening walks, every moment deepened their bond and made their journey beautifully certain.',
    image: 'public/images/couple-hero.png',
  },
  {
    title: 'Forever Begins',
    description:
      "Now, with grateful hearts, they invite you to celebrate the beginning of their forever. Your presence means the world to them.",
    image: 'public/images/invitation-card.png',
  },
]

function App() {
  const [activeImage, setActiveImage] = useState(null)
  const weddingDate = useMemo(() => new Date('2026-05-25T10:00:00+05:30'), [])

  return (
    <div className="relative overflow-x-hidden bg-rose-50 text-slate-700">
      <FloatingHearts />
      <MusicToggle />
      <Hero weddingDate={weddingDate} />
      <SectionDivider />
      <Story items={storyItems} />
      <SectionDivider flipped />
      <Gallery items={galleryItems} onImageClick={setActiveImage} />
      <SectionDivider />
      <EventDetails />
      <SectionDivider flipped />
      <Countdown targetDate={weddingDate} />
      <RSVP />
      <Footer />
      {activeImage && (
        <Gallery.Lightbox
          item={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  )
}

export default App
