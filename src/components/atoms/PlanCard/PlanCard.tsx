type PlanDetails = {
  name: string;
  price: string;
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
}: PlanDetails) => {
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
