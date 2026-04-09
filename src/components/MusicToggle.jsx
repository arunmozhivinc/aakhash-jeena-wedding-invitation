import { useRef, useState } from 'react'
import { IoMusicalNotes, IoVolumeMute } from 'react-icons/io5'

function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

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
      <audio ref={audioRef} src="/audio/wedding-theme.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggleMusic}
        className="fixed right-4 top-24 z-30 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-rosewood shadow-glass transition hover:bg-white/60"
      >
        {playing ? <IoMusicalNotes /> : <IoVolumeMute />}
        {playing ? 'Music On' : 'Music Off'}
      </button>
    </>
  )
}

export default MusicToggle
