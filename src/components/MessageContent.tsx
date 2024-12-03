import { Card } from "./common/Card";

interface MessageContentProps {
  content: string;
  sender: "user" | "bot";
}

export function MessageContent({ content, sender }: MessageContentProps) {
  return (
    <Card variant={sender} maxWidth="">
      <p className="text-xs leading-relaxed">{content}</p>
    </Card>
  );
}
