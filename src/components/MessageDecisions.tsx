import { Card } from './common/Card'

interface MessageDecisionsProps {
  decisions: string[]
  messageId?: number
  decisionMade?: boolean
  onDecisionClick: (decision: string, messageId?: number) => void
  isLoading: boolean
  description?: string
}

export function MessageDecisions({
  decisions,
  messageId,
  decisionMade,
  onDecisionClick,
  isLoading,
  description
}: MessageDecisionsProps) {
  return (
    <div className={decisionMade ? 'opacity-50' : ''}>
      <Card maxWidth="sm">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-900">Decision Pending</span>
          </div>
          
          { (
            <p className="text-xs leading-normal text-zinc-500">Can you please select one of the following options?</p>
          )}

          <div className="flex flex-col gap-1.5">
            {decisions.map((decision, idx) => {
              let buttonText = decision;
              let buttonStyle = "bg-white border-zinc-200";
              
              if (decision.toLowerCase() === 'yes') {
                buttonText = 'Submit Timesheet';
                buttonStyle = "bg-zinc-900 text-white";
              } else if (decision.toLowerCase() === 'no') {
                buttonText = "Cancel";
                buttonStyle = "";
              }

              return (
                <button
                  key={idx}
                  onClick={() => onDecisionClick(decision, messageId)}
                  disabled={isLoading || decisionMade}
                  className={`px-2.5 py-2.5 text-xs border rounded-lg transition-colors disabled:cursor-not-allowed ${buttonStyle}`}
                >
                  {buttonText}
                </button>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  )
}
