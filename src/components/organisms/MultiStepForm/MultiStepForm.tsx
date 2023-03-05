import CurrentStep from "../CurrentStep";
import PersonalInfoStep from "../PersonalInfoStep";
import SelectPlanStep from "../SelectPlanStep/SelectPlanStep";
import AddOnsStep from "../AddOnsStep/AddOnsStep";
import SummaryStep from "../SummaryStep";
import MultiStepListContainer from "../../molecules/MultiStepListContainer/MultiStepListContainer";
import MultiStepList from "../MultiStepList";
import styles from "./multistepform.module.css";
import { useState, useEffect } from "react";

export type StepProps = {
  step: string;
  stepNumber: number;
  selected: boolean;
  title: string;
  description: string;
  component: JSX.Element;
  id?: number;
};

const stepList: StepProps[] = [
  {
    id: 1,
    step: "YOUR INFO",
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
    component: <PersonalInfoStep></PersonalInfoStep>,
    stepNumber: 1,
    selected: true,
  },
  {
    id: 2,
    step: "SELECT PLAN",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    component: <SelectPlanStep></SelectPlanStep>,
    stepNumber: 2,
    selected: false,
  },
  {
    id: 3,
    step: "ADD-ONS",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    component: <AddOnsStep></AddOnsStep>,
    stepNumber: 3,
    selected: false,
  },
  {
    id: 4,
    step: "SUMMARY",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    component: <SummaryStep></SummaryStep>,
    stepNumber: 4,
    selected: false,
  },
];

const MultiStepForm = () => {
  const [index, setIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(stepList[index]);

  function nextStep() {
    stepList[index].selected = false;
    setIndex(index + 1);
  }

  function prevStep() {
    if (index > 0) {
      stepList[index].selected = false;
      setIndex(index - 1);
    }
  }

  useEffect(() => {
    setCurrentStep(stepList[index]);
    stepList[index].selected = true;
  }, [index]);

  return (
    <section className={styles.multiStepFormContainer}>
      <MultiStepListContainer>
        <MultiStepList list={stepList}></MultiStepList>
      </MultiStepListContainer>
      <CurrentStep
        title={currentStep.title}
        description={currentStep.description}
        handlePrevStep={prevStep}
        handleNextStep={nextStep}
        lastStep={stepList.length - 1}
        currentStep={index}>
        {currentStep.component}
      </CurrentStep>
    </section>
  );
};

export default MultiStepForm;
