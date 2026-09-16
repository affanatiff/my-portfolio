export default function PipelineSteps({ steps }: { steps: string[] }) {
  return (
    <div className="space-y-0">
      {steps.map((step, stepIndex) => (
        <div key={step} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="flow-dot flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
              {stepIndex + 1}
            </span>
            {stepIndex < steps.length - 1 && (
              <span className="my-1 h-8 w-px flex-1 bg-border-color" />
            )}
          </div>
          <div className="pb-6 pt-1 text-sm font-medium">{step}</div>
        </div>
      ))}
    </div>
  );
}
