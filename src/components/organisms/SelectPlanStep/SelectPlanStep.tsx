import arcadeIcon from "../../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../../assets/images/icon-advanced.svg";
import proIcon from "../../../../assets/images/icon-pro.svg";
import PlanCard from "../../atoms/PlanCard/PlanCard";
import BillingTimeOptions from "../../molecules/BillingTimeOptions/BillingTimeOptions";
import styles from "./selectPlanStep.module.css";
import { Dispatch, SetStateAction, useState } from "react";

type SelectPlanProps = {
  setPlanTime: Dispatch<SetStateAction<boolean>>;
  setPlanType: Dispatch<SetStateAction<string>>;
  planTime: boolean;
};

const plansInfo = [
  {
    id: 1,
    name: "Arcade",
    icon: arcadeIcon,
    selected: true,
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    id: 2,
    name: "Advanced",
    icon: advancedIcon,
    selected: false,
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    id: 3,
    name: "Pro",
    icon: proIcon,
    selected: false,
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const SelectPlanStep = ({
  setPlanTime,
  setPlanType,
  planTime,
}: SelectPlanProps) => {
  const [selectedPlan, setSelectedPlan] = useState(
    plansInfo.find((plan) => plan.selected === true)
  );

  function handleSelectedPlan(plan: any) {
    if (selectedPlan?.id === plan.id) {
      return;
    }

    setSelectedPlan((prevState) => {
      if (prevState != undefined) {
        prevState.selected = false;
      }
      return prevState;
    });

    plan.selected = true;
    setSelectedPlan(plan);
  }

  return (
    <section>
      <div className={styles.selectStepContainer}>
        {plansInfo.map((plan) => {
          return (
            <PlanCard
              name={plan.name}
              icon={plan.icon}
              price={!planTime ? plan.monthlyPrice : plan.yearlyPrice}
              billingOption={!planTime ? "mo" : "yr"}
              selected={plan.selected}
              offer={planTime ? "2 months free" : ""}
              key={plan.id}
              onClick={() => handleSelectedPlan(plan)}></PlanCard>
          );
        })}
      </div>
      <BillingTimeOptions
        toggled={planTime}
        setToggled={setPlanTime}></BillingTimeOptions>
    </section>
  );
};

export default SelectPlanStep;
