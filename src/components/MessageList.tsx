import { Message as MessageComponent } from "./Message";
import { Message } from "../types/chat";
import { useRef, useEffect } from "react";

interface MessageListProps {
  messages: Message[];
  onDecisionClick: (decision: string, messageId?: number) => void;
  isLoading: boolean;
}

export function MessageList({
  messages,
  onDecisionClick,
  isLoading,
}: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative flex-1 flex flex-col overflow-y-auto no-scrollbar">
      <div className="flex-1 flex flex-col space-y-4 px-2">
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
    </div>
  );
}
