interface MessageInfoProps {
  content: string
  sender: 'user' | 'bot'
}

export function MessageInfo({ content, sender }: MessageInfoProps) {
  return (
    <div className="max-w-[70%]">
      <div className={`rounded-xl px-3 py-3 ${
        sender === 'user' ? 'bg-zinc-200' : 'bg-white border'
      }`}>
        <p className="text-xs text-zinc-500">{content}</p>
      </div>
    </div>
  )
}
