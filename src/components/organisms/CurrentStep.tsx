import Button from "../atoms/Button";

type CurrentStepProps = {
  title: string;
  description: string;
  children: JSX.Element;
};

const CurrentStepProps = ({
  title,
  description,
  children,
}: CurrentStepProps) => {
  return (
    <section className='step-container'>
      <div className='step-info__container'>
        <h1 className='step-title'>{title}</h1>
        <p className='step-description'>{description} </p>
      </div>
      {children}
      <div className='next-step__btn'>
        <Button onClick={() => {}}>Next Step</Button>
      </div>
    </section>
  );
};

export default CurrentStepProps;
