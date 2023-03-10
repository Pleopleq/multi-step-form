import { useEffect, useState } from "react";
import styles from "./summaryStep.module.css";

type PlanType = {
  name: string;
  price: number;
};

type AddOn = {
  name: string;
  price: number;
};

type SummaryStepProps = {
  planType: PlanType;
  planLifetime: string;
  addOns: AddOn[];
};

const SummaryStep = ({ planType, planLifetime, addOns }: SummaryStepProps) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPriceOfAddons = addOns.reduce((acc, obj) => acc + obj.price, 0);

    setTotalPrice(planType.price + totalPriceOfAddons);
  }, [planType.price, addOns]);

  return (
    <section className={styles.summaryContainer}>
      <div className={styles.summaryList}>
        <div>
          <div>
            <p>{planType.name}</p>
            <span role='link'>Change</span>
          </div>

          <p>
            ${planType.price}/{planLifetime}{" "}
          </p>
        </div>

        <hr />

        {addOns.map((addOn) => {
          return (
            <div>
              <p>{addOn.name}</p>

              <p>
                +${addOn.price}/{planLifetime}
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles.summaryTotal}>
        <p>Total (per month)</p>
        <span role='totalPrice'>{totalPrice} </span>
      </div>
    </section>
  );
};

export default SummaryStep;
