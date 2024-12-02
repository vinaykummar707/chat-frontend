import { useState } from 'react'
import { apiService } from '../services/api'
import { Message } from '../types/chat'
import { MessageList } from './MessageList'
import { ChatInput } from './ChatInput'

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [disableInput, setDisableInput] = useState<boolean>(false)

  const handleSendMessage = async (decision?: string, messageId?: number) => {
    if ((!inputMessage.trim() && !decision) || isLoading) return

    const messageToSend = decision || inputMessage

    const newMessage: Message = {
      content: messageToSend,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => {
      // If this is a decision, mark the corresponding message as decided
      if (decision && messageId !== undefined) {
        return prev.map(msg => {
          if (msg.messageId === messageId) {
            return { ...msg, decisionMade: true }
          }
          return msg
        })
      }
      return prev
    })

    setMessages(prev => [...prev, newMessage])
    if (!decision) setInputMessage('')
    setIsLoading(true)

    try {
      const response = await apiService.processPrompt({
        prompt: messageToSend,
        decision: decision,
        timestamp: new Date().toISOString()
      })

      const botMessage: Message = {
        content: response.message,
        sender: 'bot',
        timestamp: new Date(),
        requiresDecision: response.requires_decision,
        availableDecisions: response.available_decisions,
        details: response.details,
        additionalInfo: response.additional_info,
        type: response.type,
        data: response.data,
        messageId: messages.length + 2 // +2 because we've added the user message and this bot message
      }
      setDisableInput(response.requires_decision)

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        content: error instanceof Error ? error.message : 'An error occurred',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-100 items-center overflow-hidden">
      <div className="flex flex-col flex-1 w-[480px] px-4 py-4 gap-4 overflow-hidden">
        <h1 className='text-lg border-b pb-2 font-semibold'>Ai Chatbot</h1>
        
        <MessageList
          messages={messages}
          onDecisionClick={handleSendMessage}
          isLoading={isLoading}
        />

        <ChatInput
          value={inputMessage}
          onChange={setInputMessage}
          onSend={() => handleSendMessage()}
          isLoading={isLoading}
          disabled={disableInput}
        />
      </div>
    </div>
  )
}
