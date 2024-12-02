import { MessageDecisions } from "./MessageDecisions"
import { Card } from './common/Card'

interface MessageInfoProps {
  content: string
  sender: 'user' | 'bot'
}

export function MessageInfo({ content, sender }: MessageInfoProps) {
  return (
    <Card variant={sender} maxWidth="sm">
      <p className="text-xs leading-relaxed">{content}</p>
    </Card>
  )
}
