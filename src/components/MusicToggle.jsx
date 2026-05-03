import { IoMusicalNotes, IoVolumeMute } from 'react-icons/io5'

function MusicToggle({ playing, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="fixed right-4 top-24 z-30 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-sm text-rosewood shadow-glass transition hover:bg-white/60"
    >
      {playing ? <IoMusicalNotes /> : <IoVolumeMute />}
      {playing ? 'Music On' : 'Music Off'}
    </button>
  )
}

export default MusicToggle
