import Avatar from 'react-avatar'

interface MessageAvatarProps {
  sender: 'user' | 'bot'
}

export function MessageAvatar({ sender }: MessageAvatarProps) {
  return (
    <Avatar
    
      size="26"
      round={true}
    />
  )
}
