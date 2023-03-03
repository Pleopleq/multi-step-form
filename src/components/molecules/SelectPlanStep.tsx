import PlansContainer from "../organisms/PlansContainer/PlansContainer";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

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
  return <PlansContainer plans={plansInfo}></PlansContainer>;
};

export default SelectPlanStep;
