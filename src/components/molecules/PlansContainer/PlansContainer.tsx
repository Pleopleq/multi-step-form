import PlanCard from "../../atoms/PlanCard/PlanCard";
import BillingTimeOptions from "../BillingTimeOptions/BillingTimeOptions";
import { PlansInfo } from "../SelectPlanStep";

type PlansContainerProps = {
  plans: PlansInfo[];
};

const PlansContainer = ({ plans }: PlansContainerProps) => {
  return (
    <section>
      <div>
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
