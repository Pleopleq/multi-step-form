import Step, { StepProps } from "../atoms/Step/Step";

type MultiStepListProps = {
  list: StepProps[];
};

const MultiStepList = ({ list }: MultiStepListProps) => {
  return (
    <div>
      {list.map((step: StepProps) => {
        return (
          <Step
            key={step.id}
            step={step.step}
            stepNumber={step.stepNumber}></Step>
        );
      })}
    </div>
  );
};

export default MultiStepList;
