import { Message as MessageComponent } from "./Message";
import { Message } from "../types/chat";
import { useRef, useEffect } from "react";
import { LoadingIndicator } from "./LoadingIndicator";

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
    <div className="relative flex-1  flex flex-col   overflow-y-auto no-scrollbar">
      {messages.length === 0 && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-neutral-500 text-xs">No Messages Yet</p>
        </div>
      )}
      {messages.length > 0 && (
        <div className="flex-1 gap-4 py-4 px-4 flex flex-col  ">
          {messages.map((message, index) => (
            <MessageComponent
              key={index}
              message={message}
              onDecisionClick={onDecisionClick}
              isLoading={isLoading}
            />
          ))}
          {isLoading && <LoadingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}
