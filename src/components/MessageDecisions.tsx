interface MessageDecisionsProps {
  decisions: string[]
  messageId?: number
  decisionMade?: boolean
  onDecisionClick: (decision: string, messageId?: number) => void
  isLoading: boolean
}

export function MessageDecisions({
  decisions,
  messageId,
  decisionMade,
  onDecisionClick,
  isLoading
}: MessageDecisionsProps) {
  return (
    <div className={`max-w-[70%] mt-2 ${decisionMade ? 'opacity-50' : ''}`}>
      <div className="flex flex-wrap gap-1.5">
        {decisions.map((decision, idx) => {
          let buttonText = decision;
          let buttonStyle = "bg-white";
          
          if (decision.toLowerCase() === 'yes') {
            buttonText = 'Yes Proceed';
            buttonStyle = "bg-green-600 text-white hover:bg-green-800";
          } else if (decision.toLowerCase() === 'no') {
            buttonText = "No I don't want to";
            buttonStyle = "bg-zinc-200 hover:bg-zinc-300";
          }

          return (
            <button
              key={idx}
              onClick={() => onDecisionClick(decision, messageId)}
              disabled={isLoading || decisionMade}
              className={`px-3 py-2.5 text-xs border rounded-xl transition-colors disabled:cursor-not-allowed ${buttonStyle}`}
            >
              {buttonText}
            </button>
          );
        })}
      </div>
    </div>
  )
}
