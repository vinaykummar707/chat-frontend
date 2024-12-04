import { useState } from "react";
import { apiService } from "../services/api";
import { Message } from "../types/chat";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { X } from "lucide-react";

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disableInput, setDisableInput] = useState<boolean>(false);

  const handleSendMessage = async (decision?: string, messageId?: number) => {
    if ((!inputMessage.trim() && !decision) || isLoading) return;

    const messageToSend = decision || inputMessage;

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
    if (!decision) setInputMessage("");
    setIsLoading(true);

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
    <div className="h-screen w-screen bg-gradient-to-r from-purple-300 to-teal-300 flex flex-col p-8 items-center overflow-hidden">
      <div className="flex flex-col flex-1 bg-neutral-100 rounded-2xl border  shadow-xl  w-[350px] gap-4 overflow-hidden">
        <div className="flex justify-between bg-white items-center border-b px-3 py-2.5">
          <h1 className="text-md text-blue-600  font-semibold">AI ChatBot</h1>
          <button 
            onClick={() => {}} 
            className="p-1.5 hover:bg-neutral-300 rounded-full bg-neutral-100 transition-colors"
          >
            <X size={18} />
          </button>
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
