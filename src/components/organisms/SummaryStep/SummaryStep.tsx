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

  function handlePlanLifeTime() {}

  useEffect(() => {
    const totalPriceOfAddons = addOns.reduce((acc, obj) => acc + obj.price, 0);

    setTotalPrice(planType.price + totalPriceOfAddons);
  }, [planType.price, addOns]);

  return (
    <section className={styles.summaryContainer}>
      <div className={styles.summaryList}>
        <div className={styles.planType}>
          <div>
            <p className={`${styles.bold} ${styles.summaryPrice_individual}`}>
              {planType.name} ({planLifetime === "mo" ? "Monthly" : "Yearly"})
            </p>
            <span className={styles.changeLink} onClick={handlePlanLifeTime}>
              Change
            </span>
          </div>

          <p className={`${styles.bold} ${styles.summaryPrice_individual}`}>
            ${planType.price}/{planLifetime}{" "}
          </p>
        </div>

        <div className={styles.line}></div>

        {addOns.map((addOn) => {
          return (
            <div className={styles.addOnList_item} key={addOn.name}>
              <p>{addOn.name}</p>

              <p className={styles.summaryPrice_individual}>
                +${addOn.price}/{planLifetime}
              </p>
            </div>
          );
        })}
      </div>

      <div className={styles.summaryTotal}>
        <p>Total ({planLifetime === "mo" ? "per month" : "per year"})</p>
        <span
          role='totalPrice'
          className={`${styles.bold} ${styles.totalPrice}`}>
          +${totalPrice}/{planLifetime}
        </span>
      </div>
    </section>
  );
};

export default SummaryStep;
