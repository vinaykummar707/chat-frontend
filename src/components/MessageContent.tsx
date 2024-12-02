interface MessageContentProps {
  content: string
  sender: 'user' | 'bot'
}

export function MessageContent({ content, sender }: MessageContentProps) {
  return (
    <div className="">
      <div className={`rounded-xl px-3 py-3 ${
        sender === 'user' ? 'bg-zinc-200' : 'bg-white border'
      }`}>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  )
}
