import styles from "./step.module.css";

type StepProps = {
  step: string;
  stepNumber: number;
};

const Step = ({ step, stepNumber }: StepProps) => {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepIcon}>{stepNumber}</div>
      <div className={styles.stepDetailsContainer}>
        <span className={styles.stepDetailNumber}>STEP {stepNumber}</span>
        <span className={styles.stepDetailName}>{step}</span>
      </div>
    </div>
  );
};

export default Step;
