interface MessageAvatarProps {
  sender: "user" | "bot";
}

export function MessageAvatar({ sender }: MessageAvatarProps) {
  return (
    <div
      className={`size-7 flex flex-row justify-center items-center flex-shrink-0 rounded-full  ${
        sender === "user" ? "bg-lime-200" : "bg-red-200"
      }`}
    >
      <p className="text-[11px] "> {sender === "user" ? "PV" : "AI"} </p>
    </div>
  );
}
