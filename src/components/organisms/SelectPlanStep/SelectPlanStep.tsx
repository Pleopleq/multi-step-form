import arcadeIcon from "../../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../../assets/images/icon-advanced.svg";
import proIcon from "../../../../assets/images/icon-pro.svg";
import PlanCard from "../../atoms/PlanCard/PlanCard";
import BillingTimeOptions from "../../molecules/BillingTimeOptions/BillingTimeOptions";
import styles from "./selectPlanStep.module.css";
import { useState } from "react";

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
  const [toggled, setToggled] = useState(false);

  return (
    <section>
      <div className={styles.selectStepContainer}>
        {plansInfo.map((plan) => {
          return (
            <PlanCard
              name={plan.name}
              icon={plan.icon}
              price={!toggled ? plan.monthlyPrice : plan.yearlyPrice}
              billingOption={!toggled ? "mo" : "yr"}
              selected={plan.selected}
              offer={toggled ? "2 months free" : ""}></PlanCard>
          );
        })}
      </div>
      <BillingTimeOptions
        toggled={toggled}
        setToggled={setToggled}></BillingTimeOptions>
    </section>
  );
};

export default SelectPlanStep;
