function SectionDivider({ flipped = false }) {
  return (
    <div className={`${flipped ? 'rotate-180' : ''} -my-1`}>
      <svg
        viewBox="0 0 1440 120"
        className="h-12 w-full text-rose-100/90 md:h-16"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L80,53.3C160,43,320,21,480,26.7C640,32,800,64,960,80C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        />
      </svg>
    </div>
  )
}

export default SectionDivider
