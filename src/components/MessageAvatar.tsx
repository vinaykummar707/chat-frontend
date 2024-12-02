import Avatar from 'react-avatar'

interface MessageAvatarProps {
  sender: 'user' | 'bot'
}

export function MessageAvatar({ sender }: MessageAvatarProps) {
  return (
    <Avatar
      name={sender === 'bot' ? 'AI I' : 'User'}
      size="28"
      round={true}
      className={sender === 'bot' ? 'bg-neutral-900' : 'bg-lime-500'}
      fgColor={sender === 'bot' ? '#FFFFFF' : '#fff'}
    />
  )
}
