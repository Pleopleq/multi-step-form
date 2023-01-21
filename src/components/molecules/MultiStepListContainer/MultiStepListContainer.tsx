import styles from "./multiStepListContainer.module.css";

type MultiStepListContainerProps = {
  children: JSX.Element;
};

const MultiStepListContainer = ({ children }: MultiStepListContainerProps) => {
  return (
    <section className={styles.multiStepListContainer}>{children}</section>
  );
};

export default MultiStepListContainer;
