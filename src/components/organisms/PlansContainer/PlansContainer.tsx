import PlanCard from "../../atoms/PlanCard/PlanCard";
import BillingTimeOptions from "../../molecules/BillingTimeOptions/BillingTimeOptions";
import { PlansInfo } from "../SelectPlanStep";
import styles from "./plansContainer.module.css";

type PlansContainerProps = {
  plans: PlansInfo[];
};

const PlansContainer = ({ plans }: PlansContainerProps) => {
  function selectPlan() {
    console.log("Selected");
  }

  return (
    <section>
      <div className={styles.plansContainer}>
        {plans.map((plan) => {
          return (
            <PlanCard
              name={plan.name}
              icon={plan.icon}
              price={plan.monthlyPrice}
              billingOption={"mo"}
              selected={plan.selected}></PlanCard>
          );
        })}
      </div>
      <BillingTimeOptions></BillingTimeOptions>
    </section>
  );
};

export default PlansContainer;
