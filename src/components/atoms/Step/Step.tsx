import styles from "./step.module.css";

export type StepItemProps = {
  step: string;
  stepNumber: number;
  selected: boolean;
  id?: number;
};

const Step = ({ step, stepNumber, id, selected }: StepItemProps) => {
  return (
    <div className={styles.stepContainer} key={id}>
      <div
        style={{
          backgroundColor: selected ? "hsl(228, 100%, 84%)" : "",
          color: selected ? "hsl(213, 96%, 10%)" : "",
        }}
        className={styles.stepIcon}>
        {stepNumber}
      </div>
      <div className={styles.stepDetailsContainer}>
        <span className={styles.stepDetailNumber}>STEP {stepNumber}</span>
        <span className={styles.stepDetailName}>{step}</span>
      </div>
    </div>
  );
};

export default Step;
