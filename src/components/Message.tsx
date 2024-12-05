import { Message as MessageType } from "../types/chat";
import { MessageDecisions } from "./MessageDecisions";
import { MessageContent } from "./MessageContent";
import { MessageInfo } from "./MessageInfo";
import { MessageTimestamp } from "./MessageTimestamp";
import { MessageAvatar } from "./MessageAvatar";
import { motion } from "framer-motion";

interface MessageProps {
  message: MessageType;
  onDecisionClick: (decision: string, messageId?: number) => void;
  isLoading: boolean;
}

export function Message({ message, onDecisionClick, isLoading }: MessageProps) {
  const {
    sender,
    content,
    availableDecisions,
    messageId,
    decisionMade,
    timestamp,
    details,
    data,
    isDataAvailable,
  } = message;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={`flex   ${
        sender === "user"
          ? "flex-row-reverse justify-start items-start  w-[80%] self-end"
          : "flex-row  w-[90%] self-start"
      }  gap-2 `}
    >
      {sender === "bot" && <MessageAvatar sender={sender} />}
      {sender === "user" && <MessageAvatar sender={sender} />}

      <div
        className={`flex flex-col gap-2 ${
          sender === "user" ? "items-end" : "items-start"
        }`}
      >
        {content && <MessageContent content={content} sender={sender} />}
        {isDataAvailable &&
          (data.length > 0 || Object.keys(data).length > 0) && (
            <MessageInfo content={data} sender={sender} />
          )}
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
  );
}
