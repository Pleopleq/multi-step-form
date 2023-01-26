import styles from "./planCard.module.css";

type PlanCardProps = {
  name: string;
  price: number;
  billingOption: string;
  icon: string;
  selected: boolean;
};

const PlanCard = ({
  name,
  price,
  icon,
  selected,
  billingOption,
}: PlanCardProps) => {
  return (
    <article
      style={{
        borderColor: selected ? "hsl(243, 100%, 62%)" : "",
        backgroundColor: selected ? "hsl(229, 24%, 91%)" : "",
      }}
      className={styles.cardContainer}>
      <div>
        <img src={icon} alt={name + " plan"} />
      </div>
      <div>
        <h3>{name}</h3>
        <span>
          ${price}/{billingOption}
        </span>
      </div>
    </article>
  );
};

export default PlanCard;
