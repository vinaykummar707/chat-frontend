import Avatar from "react-avatar";

interface MessageAvatarProps {
  sender: "user" | "bot";
}

export function MessageAvatar({ sender }: MessageAvatarProps) {
  return (
    <Avatar
      name={sender === "user" ? "P v" : "AI I"}
      color={sender === "user" ? "purple" : "black"}
      round={true}
      size="28"
      className="flex-initial flex-shrink-0"
    />
  );
}
