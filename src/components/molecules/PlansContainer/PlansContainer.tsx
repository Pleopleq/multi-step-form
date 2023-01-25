import PlanCard from "../../atoms/PlanCard/PlanCard";
import arcadeIcon from "../../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../../assets/images/icon-advanced.svg";
import proIcon from "../../../../assets/images/icon-pro.svg";

const plansInfo = [
  {
    name: "arcade",
    icon: arcadeIcon,
    selected: true,
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    name: "advanced",
    icon: advancedIcon,
    selected: false,
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    name: "pro",
    icon: proIcon,
    selected: false,
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

const PlansContainer = () => {
  return (
    <section>
      <div></div>
      <div></div>
    </section>
  );
};

export default PlansContainer;
