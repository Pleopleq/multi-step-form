import CurrentStep from "../CurrentStep";
import PersonalInfoStep from "../PersonalInfoStep";
import SelectPlanStep from "../SelectPlanStep/SelectPlanStep";
import AddOnsStep from "../AddOnsStep/AddOnsStep";
import SummaryStep from "../SummaryStep/SummaryStep";
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
  id?: number;
};

const stepList: StepProps[] = [
  {
    id: 1,
    step: "YOUR INFO",
    title: "Personal Info",
    description: "Please provide your name, engmail address, and phone number.",
    stepNumber: 1,
    selected: true,
  },
  {
    id: 2,
    step: "SELECT PLAN",
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    stepNumber: 2,
    selected: false,
  },
  {
    id: 3,
    step: "ADD-ONS",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    stepNumber: 3,
    selected: false,
  },
  {
    id: 4,
    step: "SUMMARY",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    stepNumber: 4,
    selected: false,
  },
];

const MultiStepForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const [planType, setPlanType] = useState("");
  const [planTime, setPlanTime] = useState(false);
  const [currentStep, setCurrentStep] = useState(stepList[index]);

  function nextStep() {
    stepList[index].selected = false;
    setIndex(index + 1);
  }

  function handlePlanChange() {
    stepList[3].selected = false;
    setIndex(1);
  }

  function prevStep() {
    if (index > 0) {
      stepList[index].selected = false;
      setIndex(index - 1);
    }
  }

  function submitForm() {}

  function renderCurrentStep(): JSX.Element {
    switch (index + 1) {
      case 1:
        return (
          <PersonalInfoStep
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            name={name}
            phone={phone}
            email={email}
          />
        );
      case 2:
        return (
          <SelectPlanStep
            setPlanType={setPlanType}
            setPlanTime={setPlanTime}
            planTime={planTime}
          />
        );
      case 3:
        return <AddOnsStep></AddOnsStep>;
      case 4:
        return (
          <SummaryStep
            planLifetime='mo'
            planType={{ name: "Arcade", price: 9 }}
            addOns={[
              { name: "Larger storage", price: 2 },
              { name: "Online Service", price: 1 },
            ]}
            handlePlanLifeTime={handlePlanChange}></SummaryStep>
        );
      default:
        return <></>;
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
        handleConfirm={submitForm}
        lastStep={stepList.length - 1}
        currentStep={index}>
        <>{renderCurrentStep()}</>
      </CurrentStep>
    </section>
  );
};

export default MultiStepForm;
