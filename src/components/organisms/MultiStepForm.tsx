import CurrentStep from "./CurrentStep";
import PersonalInfoStep from "../molecules/PersonalInfoStep";

const MultiStepForm = () => {
  return (
    <CurrentStep
      title='Personal Info'
      description='  Please provide your name, email address, and phone number.'>
      <PersonalInfoStep></PersonalInfoStep>
    </CurrentStep>
  );
};

export default MultiStepForm;
