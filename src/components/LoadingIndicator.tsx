import { motion } from "framer-motion";
import { Card } from "./common/Card";
import { MessageAvatar } from "./MessageAvatar";

export function LoadingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
      className="flex self-start flex-row gap-2 "
    >
      <MessageAvatar sender="bot" />
      <div className="flex flex-col gap-1 items-start">
        <Card variant="bot">
          <div className="flex items-center gap-2">
            <div className="animate-pulse flex space-x-2">
              <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </Card>
        <div className="flex gap-2 mt-0 ml-1 ">
          <span className="text-[10px] text-zinc-400">Thinking...</span>
        </div>
      </div>
    </motion.div>
  );
}
