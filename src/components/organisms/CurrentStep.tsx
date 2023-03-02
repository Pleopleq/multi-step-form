import Button from "../atoms/Button";

type CurrentStepProps = {
  title: string;
  description: string;
  children: JSX.Element;
  currentStep: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
};

const CurrentStepProps = ({
  title,
  description,
  children,
  currentStep,
  handleNextStep,
  handlePrevStep,
}: CurrentStepProps) => {
  return (
    <section className='step-container'>
      <div className='step-info__container'>
        <h1 className='step-title'>{title}</h1>
        <p className='step-description'>{description} </p>
      </div>
      {children}
      <div className='next-step__btn'>
        {currentStep > 0 ? <span onClick={handlePrevStep}>Go Back</span> : null}{" "}
        <Button onClick={handleNextStep}>Next Step</Button>
      </div>
    </section>
  );
};

export default CurrentStepProps;
