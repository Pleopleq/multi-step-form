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
    <article>
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
