import CurrentStep from "./CurrentStep";
import PersonalInfoStep from "../molecules/PersonalInfoStep";
import { StepProps } from "../atoms/Step/Step";
import MultiStepListContainer from "../molecules/MultiStepListContainer";
import MultiStepList from "../molecules/MultiStepList";

const stepList: StepProps[] = [
  {
    id: 1,
    step: "YOUR INFO",
    stepNumber: 1,
    selected: true,
  },
  {
    id: 2,
    step: "SELECT PLAN",
    stepNumber: 2,
    selected: false,
  },
  {
    id: 3,
    step: "ADD-ONS",
    stepNumber: 3,
    selected: false,
  },
  {
    id: 4,
    step: "SUMMARY",
    stepNumber: 4,
    selected: false,
  },
];

const MultiStepForm = () => {
  return (
    <section>
      <div>
        <MultiStepListContainer>
          <MultiStepList list={stepList}></MultiStepList>
        </MultiStepListContainer>
      </div>
      <div>
        <CurrentStep
          title='Personal Info'
          description='  Please provide your name, email address, and phone number.'>
          <PersonalInfoStep></PersonalInfoStep>
        </CurrentStep>
      </div>
    </section>
  );
};

export default MultiStepForm;
