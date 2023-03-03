import arcadeIcon from "../../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../../assets/images/icon-advanced.svg";
import proIcon from "../../../../assets/images/icon-pro.svg";
import PlanCard from "../../atoms/PlanCard/PlanCard";
import BillingTimeOptions from "../../molecules/BillingTimeOptions/BillingTimeOptions";
import styles from "./selectPlanStep.module.css";

export type PlansInfo = {
  name: string;
  icon: string;
  selected: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
};

const plansInfo = [
  {
    name: "Arcade",
    icon: arcadeIcon,
    selected: true,
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    name: "Advanced",
    icon: advancedIcon,
    selected: false,
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    name: "Pro",
    icon: proIcon,
    selected: false,
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const SelectPlanStep = () => {
  function selectPlan() {
    console.log("Selected");
  }

  return (
    <section>
      <div className={styles.selectStepContainer}>
        {plansInfo.map((plan) => {
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

export default SelectPlanStep;
