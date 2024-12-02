import { Message as MessageComponent } from './Message'
import { Message } from '../types/chat'
import { useRef, useEffect } from 'react'

interface MessageListProps {
  messages: Message[]
  onDecisionClick: (decision: string, messageId?: number) => void
  isLoading: boolean
}

export function MessageList({ messages, onDecisionClick, isLoading }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex-1 flex flex-col overflow-y-auto space-y-4 no-scrollbar">
      {messages.map((message, index) => (
        <MessageComponent
          key={index}
          message={message}
          onDecisionClick={onDecisionClick}
          isLoading={isLoading}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}
