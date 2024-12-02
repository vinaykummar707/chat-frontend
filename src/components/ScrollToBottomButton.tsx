interface ScrollToBottomButtonProps {
  onClick: () => void
  show: boolean
}

export function ScrollToBottomButton({ onClick, show }: ScrollToBottomButtonProps) {
  if (!show) return null

  return (
    <button
      onClick={onClick}
      className="absolute bottom-20 right-4 p-2 bg-white shadow-lg rounded-full hover:bg-zinc-50 transition-all transform translate-y-0 hover:-translate-y-0.5"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7 7 7-7" />
      </svg>
    </button>
  )
}
