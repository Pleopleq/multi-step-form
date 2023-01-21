import styles from "./step.module.css";

export type StepProps = {
  step: string;
  stepNumber: number;
  selected?: boolean;
  id?: number;
};

const Step = ({ step, stepNumber, id }: StepProps) => {
  return (
    <div className={styles.stepContainer} key={id}>
      <div className={styles.stepIcon}>{stepNumber}</div>
      <div className={styles.stepDetailsContainer}>
        <span className={styles.stepDetailNumber}>STEP {stepNumber}</span>
        <span className={styles.stepDetailName}>{step}</span>
      </div>
    </div>
  );
};

export default Step;
