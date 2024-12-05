export interface Message {
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  requiresDecision?: boolean;
  availableDecisions?: string[];
  details?: string;
  additionalInfo?: string;
  type?: string;
  data?: any;
  decisionMade?: boolean;
  messageId?: number;
  isDataAvailable: boolean;
}
