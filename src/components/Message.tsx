import { Message as MessageType } from '../types/chat'
import { MessageDecisions } from './MessageDecisions'
import { MessageContent } from './MessageContent'
import { MessageInfo } from './MessageInfo'
import { MessageTimestamp } from './MessageTimestamp'
import { MessageAvatar } from './MessageAvatar'
import { motion } from 'framer-motion'

interface MessageProps {
  message: MessageType
  onDecisionClick: (decision: string, messageId?: number) => void
  isLoading: boolean
}

export function Message({ message, onDecisionClick, isLoading }: MessageProps) {
  const { sender, content, additionalInfo, availableDecisions, messageId, decisionMade, timestamp, details } = message

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.4 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className={`flex ${sender === 'user' ? 'justify-start flex-row-reverse' : 'justify-start flex-row '} bg-red-5000 gap-2`}
    >
      {sender === 'user' && <MessageAvatar sender={sender} />}
      {sender === 'bot' && <MessageAvatar sender={sender} />}
      <div className={`flex flex-col gap-1 ${sender === 'user' && 'items-end'}`}>
        {content && <MessageContent content={content} sender={sender} />}
        {additionalInfo && <MessageInfo content={additionalInfo} sender={sender} />}
        {availableDecisions && availableDecisions.length > 0 && (
          <MessageDecisions
            decisions={availableDecisions}
            messageId={messageId}
            decisionMade={decisionMade}
            onDecisionClick={onDecisionClick}
            isLoading={isLoading}
            description={details}
          />
        )}
        <MessageTimestamp timestamp={timestamp} />
      </div>
    </motion.div>
  )
}
