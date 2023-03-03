import Step from "../atoms/Step/Step";
import { StepProps } from "../organisms/MultiStepForm/MultiStepForm";

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
            stepNumber={step.stepNumber}
            selected={step.selected}></Step>
        );
      })}
    </div>
  );
};

export default MultiStepList;
