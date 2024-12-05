import { Card } from "./common/Card";

interface MessageContentProps {
  content: string;
  sender: "user" | "bot";
}

export function MessageContent({ content, sender }: MessageContentProps) {
  return (
    <Card variant={sender}>
      <p className="text-xs font-normal leading-relaxed">{content}</p>
    </Card>
  );
}
