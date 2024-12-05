import { useState } from "react";
import { apiService } from "../services/api";
import { Message } from "../types/chat";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const handleSendMessage = async (decision?: string, messageId?: number) => {
    if ((!inputMessage.trim() && !decision) || isLoading) return;

    const messageToSend = decision || inputMessage;

    if (!decision) {
      const newMessage: Message = {
        content: messageToSend,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => {
        // If this is a decision, mark the corresponding message as decided
        if (decision && messageId !== undefined) {
          return prev.map((msg) => {
            if (msg.messageId === messageId) {
              return { ...msg, decisionMade: true };
            }
            return msg;
          });
        }
        return prev;
      });

      setMessages((prev) => [...prev, newMessage]);
      setInputMessage("");
      setIsLoading(true);
    } else {
      setMessages((prev) => {
        // If this is a decision, mark the corresponding message as decided
        if (decision && messageId !== undefined) {
          return prev.map((msg) => {
            if (msg.messageId === messageId) {
              return { ...msg, decisionMade: true };
            }
            return msg;
          });
        }
        return prev;
      });
      setIsLoading(true);
    }

    try {
      const response = await apiService.processPrompt({
        prompt: messageToSend,
        decision: decision,
        timestamp: new Date().toISOString(),
      });

      const botMessage: Message = {
        content: response.message,
        sender: "bot",
        timestamp: new Date(),
        requiresDecision: response.requires_decision,
        availableDecisions: response.available_decisions,
        details: response.details,
        additionalInfo: response.additional_info,
        type: response.type,
        data: response.data,
        isDataAvailable: response.isDataAvailable,
        messageId: messages.length + 2, // +2 because we've added the user message and this bot message
      };
      setDisableInput(response.requires_decision);

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        content: error instanceof Error ? error.message : "An error occurred",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-400 to-pink-300 flex flex-col p-5 items-center overflow-hidden">
      <div className="flex flex-col flex-1 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border dark:border-neutral-700  shadow-xl  w-[380px]  overflow-hidden">
        <div className="flex justify-between bg-white dark:bg-neutral-800 items-center border-b dark:border-neutral-700 px-4 py-2.5">
          <h1 className="text-lg dark:text-yellow-300 text-yellow-500  font-semibold">
            AI
          </h1>
          <div className="flex flex-row gap-4">
            <button
              onClick={toggleTheme}
              className=" dark:text-white  rounded-full  dark:bg-neutral-800 transition-colors"
            >
              {theme === "dark" ? (
                <Sun
                  className="text-neutral-700 dark:text-neutral-50"
                  size={20}
                />
              ) : (
                <Moon
                  className="text-neutral-700 dark:text-neutral-50"
                  size={20}
                />
              )}
            </button>
            <button
              onClick={() => {}}
              className=" dark:text-white  rounded-full  dark:bg-neutral-800 transition-colors"
            >
              <X className="text-neutral-700 dark:text-neutral-50" size={20} />
            </button>
          </div>
        </div>

        <MessageList
          messages={messages}
          onDecisionClick={handleSendMessage}
          isLoading={isLoading}
        />

        <ChatInput
          value={inputMessage}
          onChange={setInputMessage}
          onSend={() => handleSendMessage()}
          isLoading={isLoading}
          disabled={disableInput}
        />
      </div>
    </div>
  );
}
