import Avatar from 'react-avatar'

interface MessageAvatarProps {
  sender: 'user' | 'bot'
}

export function MessageAvatar({ sender }: MessageAvatarProps) {
  return (
    <Avatar
      name={sender === 'user' ? 'Ai I' : 'Bot'}
      color={sender === 'user' ? 'purple' : 'black'}
      size="28"
      style={{fontSize: '25px'}}
      round={true}
    />
  )
}
