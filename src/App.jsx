import { useMemo, useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import FloatingHearts from './components/FloatingHearts'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MusicToggle from './components/MusicToggle'
import RSVP from './components/RSVP'
import SectionDivider from './components/SectionDivider'
import SplashScreen from './components/SplashScreen'
import Story from './components/Story'

const getAsset = (path) => `${import.meta.env.BASE_URL}${path}`

const galleryItems = [
  { src: getAsset('images/couple-hero1.jpeg'), alt: 'Couple portrait at golden hour', aspect: 'portrait' },
  { src: getAsset('images/invitation-card.png'), alt: 'Wedding invitation design', aspect: 'landscape' },
  { src: getAsset('images/sketch-portrait.png'), alt: 'Pencil sketch of the couple', aspect: 'portrait' },
  { src: getAsset('images/couple-hero.png'), alt: 'Romantic couple photo closeup', aspect: 'square' },
  { src: getAsset('images/invitation-card.png'), alt: 'Wedding invite card detail', aspect: 'landscape' },
]

const storyItems = [
  {
    title: 'A Serendipitous Hello',
    description:
      'Aakhash and Jeena met through family friends, and what began as a simple conversation turned into hours of laughter and comfort.',
    image: getAsset('images/sketch-portrait.png'),
  },
  {
    title: 'Growing Together',
    description:
      'From quiet coffee dates to long evening walks, every moment deepened their bond and made their journey beautifully certain.',
    image: getAsset('images/couple-hero.png'),
  },
  {
    title: 'Forever Begins',
    description:
      "Now, with grateful hearts, they invite you to celebrate the beginning of their forever. Your presence means the world to them.",
    image: getAsset('images/invitation-card.png'),
  },
]

function App() {
  const [activeImage, setActiveImage] = useState(null)
  const [isOpened, setIsOpened] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const weddingDate = useMemo(() => new Date('2026-05-25T10:00:00+05:30'), [])

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  const handleOpenInvitation = async () => {
    setIsOpened(true)
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    }
  }

  const toggleMusic = async () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
      return
    }
    try {
      await audioRef.current.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={getAsset('audio/wedding-theme.mp3')} loop preload="none" />
      <AnimatePresence>
        {!isOpened && <SplashScreen onOpen={handleOpenInvitation} />}
      </AnimatePresence>
      <div className={`relative bg-rose-50 text-slate-700 ${!isOpened ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
        <FloatingHearts />
        <MusicToggle playing={playing} onToggle={toggleMusic} />
        <Hero weddingDate={weddingDate} isOpened={isOpened} />
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
    </>
  )
}

export default App
