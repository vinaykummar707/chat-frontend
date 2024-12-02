interface MessageTimestampProps {
  timestamp: Date
}

export function MessageTimestamp({ timestamp }: MessageTimestampProps) {
  return (
    <div className="flex gap-2 mt-0 ">
      <span className="text-[10px] text-zinc-400">
        {timestamp.toLocaleDateString()}
      </span>
    </div>
  )
}
