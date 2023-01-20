type StepProps = {
  step: string;
  stepNumber: number;
};

const Step = ({ step, stepNumber }: StepProps) => {
  return (
    <div>
      <div>{stepNumber}</div>
      <div>
        <span>STEP {stepNumber}</span>
        <span>{step}</span>
      </div>
    </div>
  );
};

export default Step;
