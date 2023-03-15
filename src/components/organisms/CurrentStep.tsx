import Button from "../atoms/Button";

type CurrentStepProps = {
  title: string;
  description: string;
  children: JSX.Element | undefined;
  currentStep: number;
  lastStep: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  handleConfirm: () => void;
};

const CurrentStepProps = ({
  title,
  description,
  children,
  currentStep,
  lastStep,
  handleNextStep,
  handlePrevStep,
  handleConfirm,
}: CurrentStepProps) => {
  return (
    <section className='step-container'>
      <div className='step-info__container'>
        <h1 className='step-title'>{title}</h1>
        <p className='step-description'>{description} </p>
      </div>
      {children}
      <div
        className='next-step__btn'
        style={{
          alignSelf: currentStep === 0 ? "self-end" : "",
        }}>
        {currentStep > 0 ? (
          <span className='fake-link' onClick={handlePrevStep}>
            Go Back
          </span>
        ) : null}
        {lastStep === currentStep ? (
          <Button onClick={handleConfirm} color='hsl(243, 100%, 62%)'>
            Confirm
          </Button>
        ) : (
          <Button onClick={handleNextStep}>Next Step</Button>
        )}
      </div>
    </section>
  );
};

export default CurrentStepProps;
