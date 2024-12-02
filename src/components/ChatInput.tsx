interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  isLoading: boolean
  disabled: boolean
}

export function ChatInput({ value, onChange, onSend, isLoading, disabled }: ChatInputProps) {
  return (
    <div className="flex gap-2 border shadow-sm bg-white p-1.5 rounded-full flex-row w-full items-center">
      <input
        placeholder="Type your message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSend()
          }
        }}
        disabled={disabled}
        className=" w-full h-9 rounded-full px-4 outline-none ring-0 focus:outline-none focus:ring-0 text-xs"
      />
      <button
        onClick={onSend}
        disabled={disabled}
        className="px-4 h-9 text-xs disabled:opacity-50 outline-none ring-0 focus:outline-none text-xs focus:ring-0 bg-zinc-900 rounded-full text-white"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </div>
  )
}
