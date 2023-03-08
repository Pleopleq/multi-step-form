import styles from "./horizontalCard.module.css";

type HorizontalCardProps = {
  children: React.ReactNode;
  checked?: boolean;
};

const HorizontalCard = ({ children, checked }: HorizontalCardProps) => {
  return (
    <article
      style={{
        borderColor: checked ? "hsl(243, 100%, 62%)" : "",
      }}
      className={styles.horizotalCard_container}>
      {children}
    </article>
  );
};

export default HorizontalCard;
