import styles from "./planCard.module.css";

type PlanCardProps = {
  name: string;
  price: number;
  billingOption: string;
  icon: string;
  selected: boolean;
  offer: string;
  onClick: () => void;
};

const PlanCard = ({
  name,
  price,
  icon,
  selected,
  billingOption,
  offer,
  onClick,
}: PlanCardProps) => {
  return (
    <article
      style={{
        borderColor: selected ? "hsl(243, 100%, 62%)" : "",
        backgroundColor: selected ? "hsl(229, 24%, 91%)" : "",
      }}
      className={styles.cardContainer}
      onClick={onClick}>
      <div>
        <img src={icon} alt={name + " plan"} />
      </div>
      <div>
        <h3>{name}</h3>
        <span className={styles.planCard__price}>
          ${price}/{billingOption}
        </span>
      </div>
      <p className={styles.planCard__offer}>{offer}</p>
    </article>
  );
};

export default PlanCard;
