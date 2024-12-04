import { Card } from "./common/Card";
import { MessageAvatar } from "./MessageAvatar";

export function LoadingIndicator() {
  return (
    <div className="flex justify-start flex-row gap-2">
      <MessageAvatar sender="bot" />
      <div className="flex flex-col gap-1">
        <Card variant="bot" maxWidth="">
          <div className="flex items-center gap-2">
            <div className="animate-pulse flex space-x-2">
              <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
