import { Send, SendHorizonal } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSend,
  isLoading,
  disabled,
}: ChatInputProps) {
  return (
    <div className="p-1.5 bg-white dark:bg-neutral-800 dark:border-neutral-700 border-t">
      <div className="flex gap-2   p-1 rounded-full flex-row w-full items-center">
        <input
          placeholder={`${
            disabled
              ? 'Input Disabled : Awaiting Your Confirmation'
              : 'Your Prompt Here'
          }`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          disabled={disabled}
          className="bg-transparent dark:text-white w-full  rounded-full px-2 outline-none ring-0 focus:outline-none focus:ring-0 text-xs"
        />
        <button
          onClick={onSend}
          disabled={disabled}
          className="px-4 h-9 text-xs disabled:opacity-50 outline-none ring-0 focus:outline-none  focus:ring-0 bg-zinc-900 dark:bg-white dark:text-black font-semibold rounded-full text-white flex items-center gap-2"
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send
              <SendHorizonal size={14} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
