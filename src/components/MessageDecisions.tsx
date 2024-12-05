import { Card } from "./common/Card";

interface MessageDecisionsProps {
  decisions: string[];
  messageId?: number;
  decisionMade?: boolean;
  onDecisionClick: (decision: string, messageId?: number) => void;
  isLoading: boolean;
  description?: string;
}

export function MessageDecisions({
  decisions,
  messageId,
  decisionMade,
  onDecisionClick,
  isLoading,
}: MessageDecisionsProps) {
  return (
    <div className={decisionMade ? "opacity-50" : ""}>
      <Card bgColor="dark:border-yellow-600 border-yellow-500 p-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs">Decision Pending</span>
          </div>

          {
            <p className="text-xs leading-normal dark:text-neutral-500 text-neutral-400">
              Can you please select one of the following options?
            </p>
          }

          <div className="flex flex-col gap-1.5">
            {decisions.map((decision, idx) => {
              let buttonText = decision;
              let buttonStyle = "bg-white border-zinc-200";

              if (decision.toLowerCase() === "yes") {
                buttonText = "Submit Timesheet";
                buttonStyle =
                  "bg-neutral-900 dark:bg-white dark:text-black font-semibold text-white";
              } else if (decision.toLowerCase() === "no") {
                buttonText = "Cancel";
                buttonStyle =
                  "dark:border-neutral-600 dark:bg-neutral-800 bg-neutral-100";
              }

              return (
                <button
                  key={idx}
                  onClick={() => onDecisionClick(decision, messageId)}
                  disabled={isLoading || decisionMade}
                  className={`h-10 text-xs border rounded-lg transition-colors disabled:cursor-not-allowed ${buttonStyle}`}
                >
                  {buttonText}
                </button>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
