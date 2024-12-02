interface CardProps {
  children: React.ReactNode
  variant?: 'user' | 'bot'
  maxWidth?: 'sm' | 'md' | 'lg'
  className?: string
}

const maxWidthClasses = {
  sm: 'max-w-[70%]',
  md: 'max-w-[80%]',
  lg: 'max-w-[90%]'
}

export function Card({ children, variant = 'bot', maxWidth = 'md', className = '' }: CardProps) {
  return (
    <div className={`${maxWidthClasses[maxWidth]} flex flex-col ${className}`}>
      <div className={`rounded-lg  px-3 py-2 ${
        variant === 'user' ? 'bg-zinc-200' : 'bg-white'
      }`}>
        {children}
      </div>
    </div>
  )
}
